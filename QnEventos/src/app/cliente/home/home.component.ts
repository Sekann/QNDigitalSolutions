import {Component,OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TruncateTextPipe} from "../../services/pipes/truncate-text.pipe";
import {NgForOf, NgIf} from "@angular/common";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    TruncateTextPipe,
    NgForOf,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    //TODO hacer que se los items del carrousel en la misma linea
    announcements = [
        {title: 'Power outage announcement',
            description: 'The Metropolitan Electricity Authority will temporarily cut off the power for daffdfd',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',},
        {title: 'Pest control',
            description: 'Please be informed that there will be a pest control spraying in the building',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',},
        {title: 'Pest control',
            description: 'Please be informed that there will be a pest control spraying in the building',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',},
        {title: 'Pest control',
            description: 'Please be informed that there will be a pest control spraying in the building',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',},
        {title: 'Pest control',
            description: 'Please be informed that there will be a pest control spraying in the building',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',},
        {title: 'Pest control',
            description: 'Please be informed that there will be a pest control spraying in the building',
            author: 'Ralph Edwards',
            date: '12 Jan, 2021',}
    ];

    constructor() {}

    ngOnInit(): void {

    }

  protected readonly innerWidth = innerWidth;
}
