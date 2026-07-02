import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Héctor Coronado — Full-Stack Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./features/project-detail/project-detail').then((m) => m.ProjectDetail),
    title: 'Projects — Héctor Coronado',
  },
  { path: '**', redirectTo: '' },
];
