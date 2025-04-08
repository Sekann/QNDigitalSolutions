import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Visitor } from '../../services/interfaces/visitor';



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

  constructor( private router: Router) { }

  ngOnInit(): void {
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
