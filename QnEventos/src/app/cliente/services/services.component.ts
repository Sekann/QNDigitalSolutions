import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Service} from "../../services/interfaces/service";
import {ServicesComsService} from "../../services/communication/services-coms.service";

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
  services : Service[] = [
    {title: 'Premium cleaning',
      price: 129,
      image: '/img.png',
      description:""
    },
    {title: 'Standard cleaning',
      price: 79,
      image: '/img.png',
      description:""
    },
    {title: 'Wash & Dry',
      price: 39,
      image: '/img.png',
      description:""
    },
    {title: 'Electricity',
      price: 99,
      image: '/img.png',
      description:""
    },
    {title: 'Car services',
      price: 159,
      image: '/img.png',
      description:""
    },
    {title: 'Moving services',
      price: 89,
      image: '/img.png',
      description:""
    }
  ];

  constructor(private ServicesComs: ServicesComsService, private router:Router) {
  }

  changeService(service: Service) {
    this.ServicesComs.changeService(service);
    this.router.navigate(['/service-details']);
  }

}
