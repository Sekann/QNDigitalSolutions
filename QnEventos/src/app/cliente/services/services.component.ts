import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {title: 'Premium cleaning',
      price: 129,
      image: '/img.png',
    },
    {title: 'Standard cleaning',
      price: 79,
      image: '/img.png'
    },
    {title: 'Wash & Dry',
      price: 39,
      image: '/img.png'
    },
    {title: 'Electricity',
      price: 99,
      image: '/img.png'
    },
    {title: 'Car services',
      price: 159,
      image: '/img.png'
    },
    {title: 'Moving services',
      price: 89,
      image: '/img.png'
    }
  ];

}
