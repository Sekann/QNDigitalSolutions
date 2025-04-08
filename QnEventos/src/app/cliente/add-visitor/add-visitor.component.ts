import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatNativeDateModule } from '@angular/material/core';      
import { CommonModule } from '@angular/common';                    

@Component({
  selector: 'app-add-visitor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent {
  selectedDate: Date | null = null; // Variable para almacenar la fecha seleccionada

  constructor(private router: Router) {}

  selectVisitor() {
    console.log('Select Visitor clicked');
  }

  selectDate(option: string) {
    console.log(`Selected date option: ${option}`);
    if (option === 'one-time') {
      // Logic for selecting one-time date
    }
  }

  goBack() {
    this.router.navigate(['/visitors']);
  }
}
