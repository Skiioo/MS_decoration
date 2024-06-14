import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MSd';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
