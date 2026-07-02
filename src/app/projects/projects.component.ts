import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories = ['All', 'AI/ML', 'Full-Stack', 'Data Science', 'Design/UX'];
  activeCategory = 'All';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.projects = data.projects;
      this.filteredProjects = data.projects;
    });
  }

  setFilter(cat: string): void {
    this.activeCategory = cat;
    this.filteredProjects = cat === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === cat);
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) fallback.classList.add('active');
  }
}
