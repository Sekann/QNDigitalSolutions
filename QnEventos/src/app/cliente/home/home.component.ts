import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
    @ViewChild('slider') sliderElement!: ElementRef;
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
    currentIndex = 0;
    intervalId: any;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.startSlider();
        window.addEventListener('resize', this.onResize);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
        window.removeEventListener('resize', this.onResize);
    }

    updateSlider(): void {
        if (this.sliderElement) {
            const slider = this.sliderElement.nativeElement;
            const items = slider.querySelectorAll('.announcement-item');
            const sliderContainer = this.el.nativeElement.querySelector('.announcements-slider-container');

            if (items.length > 0 && sliderContainer) {
                const itemWidth = items[0].offsetWidth;
                const containerWidth = sliderContainer.offsetWidth;
                const maxVisibleItems = containerWidth / itemWidth;

                if (this.announcements.length > Math.floor(maxVisibleItems)) {
                    const translateX = -this.currentIndex * itemWidth;
                    slider.style.transform = `translateX(${translateX}px)`;
                } else {
                    clearInterval(this.intervalId);
                    slider.style.transform = `translateX(0)`;
                }
            }
        }
    }

    nextSlide(): void {
        this.currentIndex = (this.currentIndex + 1) % this.announcements.length;
        this.updateSlider();
    }

    startSlider(): void {
        if (this.sliderElement) {
            const slider = this.sliderElement.nativeElement;
            const items = slider.querySelectorAll('.announcement-item');
            const sliderContainer = this.el.nativeElement.querySelector('.announcements-slider-container');

            if (items.length > 0 && sliderContainer) {
                const itemWidth = items[0].offsetWidth;
                const containerWidth = sliderContainer.offsetWidth;
                const maxVisibleItems = containerWidth / itemWidth;

                if (this.announcements.length > maxVisibleItems) {
                    this.intervalId = setInterval(() => this.nextSlide(), 3000);
                }
            }
        }
    }

    onResize = (): void => {
        clearInterval(this.intervalId);
        this.updateSlider();
        this.startSlider();
    };
}
