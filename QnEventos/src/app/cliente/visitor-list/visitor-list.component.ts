import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Visitor } from '../../services/interfaces/visitor';

@Component({
  selector: 'app-visitor-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './visitor-list.component.html',
  styleUrl: './visitor-list.component.scss'
})
export class VisitorListComponent implements OnInit {
  latestVisitors: Visitor[] = [];
  allVisitors: Visitor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.latestVisitors = [
      {
        name: 'Albert Flores',
        phone: '(702) 555-0122',
        relation: 'Friend',
        date: '2025-04-10',
        status: 'completed',
        imageUrl: ''
      },
      {
        name: 'Kristin Watson',
        phone: '(808) 555-0111',
        relation: 'Friend',
        date: '2025-04-10',
        status: 'completed',
        imageUrl: ''
      }
    ];

    this.allVisitors = [
      {
        name: 'Jane Cooper',
        phone: '(252) 555-0126',
        relation: 'Friend',
        date: '2025-04-09',
        status: 'completed',
        imageUrl: ''
      },
      {
        name: 'Brooklyn Simmons',
        phone: '(219) 555-0114',
        relation: 'Family',
        date: '2025-04-08',
        status: 'completed',
        imageUrl: ''
      }
    ];
  }

  editVisitor() {
    console.log('Editar visitante:');
  }
  goHome(): void {
    this.router.navigate(['/home']);
  }

  goBack(): void {
    this.router.navigate(['/add-visitor']);
  }
  addNewVisitor() {
  this.router.navigate(['/visitor-create']);  }
}
