import {Component,OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TruncateTextPipe} from "../../services/pipes/truncate-text.pipe";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterLink,
        TruncateTextPipe,
        NgForOf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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

    ngOnInit(): void {}


}
