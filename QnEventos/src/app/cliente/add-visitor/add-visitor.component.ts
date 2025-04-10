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
    MatNativeDateModule,
  ],
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent {
  isDateRange = false;
  selectedDate: Date | null = null;
  selectedEndDate: Date | null = null;
  tempDate: Date | null = null; 

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/visitors']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }


  selectVisitor() {
    this.router.navigate(['/visitor-list']);
  }

  onDateSelected(date: Date | null) {
    if (!date) return;

    if (this.isDateRange) {
      if (!this.selectedDate || (this.selectedDate && this.selectedEndDate)) {
        this.selectedDate = date;
        this.selectedEndDate = null;
        this.tempDate = date;
      } else {
        if (date < this.selectedDate) {
          this.selectedEndDate = this.selectedDate;
          this.selectedDate = date;
        } else {
          this.selectedEndDate = date;
        }
        this.tempDate = null;
      }
    } else {
      this.selectedDate = date;
      this.selectedEndDate = null;
      this.tempDate = null;
    }
    this.dateClass = this.dateClass;
  }

  canAdd(): boolean {
    return this.isDateRange
      ? !!this.selectedDate && !!this.selectedEndDate
      : !!this.selectedDate;
  }

  addVisitor() {
    console.log('Add clicked');
    console.log('Start:', this.selectedDate);
    console.log('End:', this.selectedEndDate);
  }

  resetDates() {
    this.selectedDate = null;
    this.selectedEndDate = null;
    this.tempDate = null;
  }

  
  dateClass = (date: Date): string => {
    if (!this.isDateRange || !this.selectedDate) return '';
  
    const time = date.getTime();
    const start = this.selectedDate.getTime();
    const end = this.selectedEndDate ? this.selectedEndDate.getTime() : undefined; // Si selectedEndDate es null o undefined, 'end' será undefined
  
    if (this.tempDate && !this.selectedEndDate) {
      const tempTime = this.tempDate.getTime();
      if (time === tempTime) {
        return 'mat-calendar-range-edge'; 
      }
  
      if ((time > start && time < tempTime) || (time < start && time > tempTime)) {
        return 'mat-calendar-range-middle';
      }
    }
  
    if (this.selectedEndDate) {
      if (end !== undefined) {
        if (time === start || time === end) {
          return 'mat-calendar-range-edge'; 
        }
  
        if (time > start && time < end) {
          return 'mat-calendar-range-middle';
        }
      }
    }
  
    return '';
  };
}
