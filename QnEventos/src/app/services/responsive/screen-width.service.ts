import { Injectable, HostListener, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService implements OnDestroy {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  screenWidth$ = this.screenWidth.asObservable();

  private screenHeight = new BehaviorSubject<number>(window.innerHeight);
  screenHeight$ = this.screenHeight.asObservable();

  private resizeSubscription: Subscription;

  constructor() {
    this.resizeSubscription = fromEvent(window, 'resize').subscribe((event: Event) => {
      this.screenWidth.next((event.target as Window).innerWidth);
      this.screenHeight.next((event.target as Window).innerHeight);
    });

  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  isMobile(): boolean {
    return this.screenWidth.getValue() < 756;
  }

  currentWidth(): number {
    return this.screenWidth.getValue();
  }

  isMobileHeight(): boolean {
    return this.screenHeight.getValue() > 756
  }

  currentHeight(): number {
    return this.screenHeight.getValue()
  }
}
