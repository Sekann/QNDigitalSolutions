import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ScreenService} from "../../services/responsive/screen-width.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMobile = false;

  constructor(private screenService:ScreenService) {
  }

  ngOnInit() {
    this.screenService.screenWidth$.subscribe(screenWidth => {
      this.isMobile = screenWidth <= 768;
    })
  }

}
