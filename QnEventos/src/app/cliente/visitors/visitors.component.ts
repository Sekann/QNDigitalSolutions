import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.scss'
})
export class VisitorsComponent {
  
  

  activeTab: string = 'upcoming';

  
  tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  constructor(
    private router: Router
  ) {}
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
  
   
  
    goBack(): void {
      this.router.navigate(['/']);
    }
  
}
