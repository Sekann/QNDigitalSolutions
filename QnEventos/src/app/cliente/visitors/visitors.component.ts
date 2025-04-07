import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Visitor } from '../../services/interfaces/visitor';
import { VisitorService } from '../../services/visitorService/visitor-services.service';



@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.scss'
})
export class VisitorsComponent implements OnInit {
  
  visitors: Visitor[] = []; 
  filteredVisitors: Visitor[] = []; 
  activeTab: string = 'upcoming'; 
  isLoading = true; 

  constructor(private visitorService: VisitorService, private router: Router) { }

  ngOnInit(): void {
    this.loadVisitors();
  }

  loadVisitors(): void {
    this.visitorService.getVisitors().subscribe({
      next: (data) => {
        this.visitors = data; 
        this.filterVisitorsByStatus();
        this.isLoading = false; 
      },
      error: (err) => {
        console.error('Error fetching visitors', err);
        this.isLoading = false;
      }
    });
  }

  
  filterVisitorsByStatus(): void {
    this.filteredVisitors = this.visitors.filter(visitor => visitor.status === this.activeTab);
  }

  // Cambiar de tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.filterVisitorsByStatus(); // Filtramos los visitantes cuando cambiamos de tab
  }
    goBack(): void {
      this.router.navigate(['/']);
    }
  
}
