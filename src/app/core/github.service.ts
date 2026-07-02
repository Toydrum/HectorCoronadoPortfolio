import { Injectable, signal } from '@angular/core';
import { PROFILE } from '../data/profile';

export interface GithubStats {
  avatarUrl: string;
  followers: number;
  publicRepos: number;
  recentRepos: { name: string; url: string; language: string | null }[];
}

/**
 * Pulls live public stats for the GitHub card. Unauthenticated (60 req/h);
 * any failure resolves to `error` and the card simply hides.
 */
@Injectable({ providedIn: 'root' })
export class GithubService {
  readonly stats = signal<GithubStats | null>(null);
  readonly state = signal<'idle' | 'loading' | 'ready' | 'error'>('idle');

  async load(): Promise<void> {
    if (this.state() === 'ready' || this.state() === 'loading') return;
    this.state.set('loading');
    try {
      const user = PROFILE.githubUser;
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=10`),
      ]);
      if (!userRes.ok || !reposRes.ok) throw new Error('github api unavailable');
      const userData = await userRes.json();
      const repos: any[] = await reposRes.json();
      this.stats.set({
        avatarUrl: userData.avatar_url,
        followers: userData.followers,
        publicRepos: userData.public_repos,
        recentRepos: repos
          .filter((r) => !r.fork)
          .slice(0, 3)
          .map((r) => ({ name: r.name, url: r.html_url, language: r.language })),
      });
      this.state.set('ready');
    } catch {
      this.state.set('error');
    }
  }
}
