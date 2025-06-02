import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, ProjectsComponent, AboutComponent, FooterComponent, SkillsComponent],  
  template: `<app-hero></app-hero>
  <app-experience></app-experience>
  <app-projects></app-projects>
  <app-about></app-about>
  <app-skills></app-skills>
  <app-footer></app-footer>`  
})
export class AppComponent {}
