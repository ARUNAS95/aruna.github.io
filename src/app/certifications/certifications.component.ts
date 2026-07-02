import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.certifications = data.certifications;
    });
  }

  visibleSkills(skills: string[]): string[] {
    return skills.slice(0, 3);
  }

  extraCount(skills: string[]): number {
    return skills.length > 3 ? skills.length - 3 : 0;
  }
}
