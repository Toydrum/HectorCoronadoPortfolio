import { Component } from '@angular/core';
import { Hero } from './hero';
import { About } from './about';
import { Skills } from './skills';
import { Experience } from './experience';
import { ProjectsGrid } from './projects-grid';
import { Contact } from './contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Experience, ProjectsGrid, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-projects-grid />
    <app-contact />
  `,
})
export class Home {}
