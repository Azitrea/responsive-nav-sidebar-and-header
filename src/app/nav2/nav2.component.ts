import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaSize } from 'src/model/media-size.enum';
import { ResponsiveService } from '../../service/responsive.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit, OnDestroy {
  isOpen: boolean;

  subscription: Subscription;

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.isOpen = true;
    this.subscription = this.responsiveService.screenWidth$.subscribe(screenSize => {
      if (screenSize < MediaSize.XL) {
        this.isOpen = false;
      }

      if (screenSize >= MediaSize.XL) {
        this.isOpen = true;
      }
    });
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
