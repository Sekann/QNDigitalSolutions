import { Injectable, HostListener, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenWidthService implements OnDestroy {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  screenWidth$ = this.screenWidth.asObservable();

  private resizeSubscription: Subscription;

  constructor() {
    this.resizeSubscription = fromEvent(window, 'resize').subscribe((event: Event) => {
      this.screenWidth.next((event.target as Window).innerWidth);
    });
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  isMobile(): boolean {
    return this.screenWidth.getValue() < 768;
  }

  currentWidth(): number {
    return this.screenWidth.getValue();
  }
}
