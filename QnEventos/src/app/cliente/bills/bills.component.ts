import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss'
})
export class BillsComponent {
  billsGrouped = [
    {month: 'January, 2021', total: 142, items: [
      { title: 'Maintenance fee',
          amount: 69,
          date: '5 Jan, 2021',
          paid: true,
          icon: 'bi-receipt',
          iconClass: 'bg-gradient-teal'
        }, { title: 'Electricity bill',
          amount: 73,
          date: '2 Jan, 2021',
          paid: true,
          icon: 'bi-lightning-charge-fill',
          iconClass: 'bg-gradient-orange'
        }]},
    {month: 'December, 2020', total: 136, items: [
        {title: 'Maintenance fee',
          amount: 69,
          date: '5 Dec, 2020',
          paid: false,
          icon: 'bi-receipt',
          iconClass: 'bg-gradient-teal'
        }, {title: 'Electricity bill',
          amount: 67,
          date: '2 Dec, 2020',
          paid: false,
          icon: 'bi-lightning-charge-fill',
          iconClass: 'bg-gradient-orange'
        }
      ]
    }
  ];

}
