import {Component,OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TruncateTextPipe} from "../../services/pipes/truncate-text.pipe";
import {NgForOf, NgIf} from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {ScreenService} from "../../services/responsive/screen-width.service";

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
  isMobile: boolean = false;
  isMobileHeight: boolean = false;
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

    constructor(private screenService: ScreenService) {

    }

    ngOnInit(): void {
      this.screenService.screenWidth$.subscribe(screenWidth => {
        this.isMobile = screenWidth<756;
      })

      this.screenService.screenHeight$.subscribe(screenHeight => {
        this.isMobileHeight = screenHeight<756;
      })

    }

}
