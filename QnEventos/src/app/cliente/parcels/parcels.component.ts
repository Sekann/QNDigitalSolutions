import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ScreenService} from "../../services/responsive/screen-width.service";

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
export class ParcelsComponent implements OnInit {
  confirmModal : boolean = false;
  selectedParcel : any
  isMobileWidth: boolean = false;
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

  constructor(private screenService: ScreenService) {
  }

  ngOnInit() {
    this.screenService.screenWidth$.subscribe(screenWidth => {
      this.isMobileWidth = screenWidth<756;
    })
  }

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
