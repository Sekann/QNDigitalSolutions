import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Service} from "../interfaces/service";

@Injectable({
  providedIn: 'root'
})
export class ServicesComsService implements OnInit {
  private servicesComs = new BehaviorSubject<Service | null>(null);
  servicesComs$ = this.servicesComs.asObservable();

  constructor() { }

  ngOnInit() {
    this.servicesComs.next(this.getCurrentServiceStorage())
  }

  changeService(service: Service) {
    this.servicesComs.next(service);
    this.setCurrentService(service);
  }

  getCurrentService(service: Service) {
    return this.servicesComs.asObservable();
  }

  setCurrentService(service: Service) {
    sessionStorage.setItem("service", JSON.stringify(service));
  }

  getCurrentServiceStorage() {
    const storedService = JSON.parse(<string>sessionStorage.getItem("service"));
    if (storedService) {
      return storedService as Service;
    } else {
      return null;
    }
  }
}
