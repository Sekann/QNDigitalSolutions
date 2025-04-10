import {Component, OnInit} from '@angular/core';
import {ServicesComsService} from "../services/communication/services-coms.service";
import {Service} from "../services/interfaces/service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  service: Service | null = null;

  constructor(private servicesComs:ServicesComsService) {
  }

  checklist: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
    'laboris nisi ut aliquip ex ea commodo consequat',
    'Sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  ngOnInit(): void {
    this.servicesComs.servicesComs$.subscribe(service => {
      this.service = service;
    })

    this.service = this.servicesComs.getCurrentServiceStorage();

    if(this.service) {
      this.service.description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    }

  }
}
