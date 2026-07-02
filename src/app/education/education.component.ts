import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.education = data.education;
    });
  }
}
