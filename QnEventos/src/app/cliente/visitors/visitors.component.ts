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
  selectedVisitor: Visitor | null = null;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.visitors = [
      {
        name: 'Albert Flores',
        phone: '(702) 555-0122',
        relation: 'Friend',
        date: '2025-04-10',
        status: 'upcoming',
        imageUrl: ''
      },
      {
        name: 'Brooklyn Simmons',
        phone: '(219) 555-014',
        relation: 'Family',
        date: '2025-04-20',
        status: 'upcoming',
        imageUrl: ''
      },
      {
        name: 'Julio Flores',
        phone: '(702) 555-0122',
        relation: 'Friend',
        date: '2025-04-10',
        status: 'upcoming',
        imageUrl: ''
      },
      {
        name: 'Jane Cooper',
        phone: '(252) 555-0126',
        relation: 'Friend',
        date: '2025-04-11',
        status: 'cancelled',
        imageUrl: ''
      },
      {
        name: 'Jane Cooper',
        phone: '(252) 555-0126',
        relation: 'Friend',
        date: '2025-04-11',
        status: 'completed',
        imageUrl: ''
      },
      {
        name: 'Albert Flores',
        phone: '(702) 555-0122',
        relation: 'Friend',
        date: '2025-04-10',
        status: 'cancelled',
        imageUrl: ''
      },
      {
        name: 'Old Visitor',
        phone: '(252) 555-0126',
        relation: 'Friend',
        date: '2025-03-01',
        status: 'completed',
        imageUrl: ''
      }
    ];
  
    this.filterVisitorsByStatus();
  }

  
  filterVisitorsByStatus(): void {
    this.filteredVisitors = this.visitors.filter(visitor => visitor.status === this.activeTab);
  }
  groupVisitorsByDate(visitors: Visitor[]): { date: string; visitors: Visitor[] }[] {
    const grouped = visitors.reduce((acc, visitor) => {
      if (!acc[visitor.date]) {
        acc[visitor.date] = [];
      }
      acc[visitor.date].push(visitor);
      return acc;
    }, {} as Record<string, Visitor[]>);
  
    return Object.keys(grouped).map(date => ({
      date,
      visitors: grouped[date]
    }));
  }

  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.filterVisitorsByStatus();
  }
    goBack(): void {
      this.router.navigate(['/home']);
    }
  
    goAddVisitor(): void {
      this.router.navigate(['/add-visitor']);
    }


    openVisitorOptions(visitor: Visitor): void {
      this.selectedVisitor = visitor;
    }
    closeVisitorOptions(): void {
      this.selectedVisitor = null;
    }
    editVisitor(): void {
      console.log('Editar visitante:', this.selectedVisitor);
      this.closeVisitorOptions();
    }
  
    removeVisitor(): void {
      console.log('Eliminar visitante:', this.selectedVisitor);
      this.closeVisitorOptions();
    }

}
