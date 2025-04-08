import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-parcels',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './parcels.component.html',
  styleUrl: './parcels.component.scss'
})
export class ParcelsComponent {
  confirmModal : boolean = false;
  selectedParcel : any
  parcels  = [
    {received: false,
      id: "PC1472589B",
      date: "9 Jan, 2021",
      time: "11:42",
      location: "DHL, Parcel",
      type: "box"},
    {received: false,
      id: "RM305084A",
      date: "9 Jan, 2021",
      time: "11:03",
      location: "DHL, Parcel",
      type:"letter"},
    {received: false,
      id: "PC1472589B",
      date: "9 Jan, 2021",
      time: "10:42",
      location: "DHL, Parcel",
      type:"box"},
    {received: true,
      id: "PC1472589B",
      date: "8 Jan, 2021",
      time: "14:08",
      location: "DHL, Parcel",
      type:"box"},
    {received: true,
      id: "RM305084A",
      date: "8 Jan, 2021",
      time: "10:18",
      location: "DHL, Parcel",
      type:"letter"},
  ]

  noParcelsToReceive(): boolean {
    return this.parcels.filter(parcel => !parcel.received).length === 0;
  }

  changeToReceived(parcel:any){
    parcel.received = true;
    this.confirmModal = false;
  }

  openConfirmModal(parcel:any){
    this.selectedParcel = parcel;
    this.confirmModal = true;
  }

  closeConfirm() {
    this.confirmModal = false;
  }

}
