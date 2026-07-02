import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SpecialtyComponent } from './specialty/specialty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, SpecialtyComponent, ExperienceComponent, EducationComponent, ProjectsComponent, AboutComponent, FooterComponent, SkillsComponent, CertificationsComponent],
  template: `<app-hero></app-hero>
  <app-specialty></app-specialty>
  <app-experience></app-experience>
  <app-education></app-education>
  <app-projects></app-projects>
  <app-about></app-about>
  <app-skills></app-skills>
  <app-certifications></app-certifications>
  <app-footer></app-footer>`
})
export class AppComponent {}
