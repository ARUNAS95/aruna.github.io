import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-specialty',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
  specialties: any[] = [];
  stats: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.specialties = data.specialties;
      this.stats = data.stats;
    });
  }
}
