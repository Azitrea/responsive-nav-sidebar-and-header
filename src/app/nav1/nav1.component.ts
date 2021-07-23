import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaSize } from 'src/model/media-size.enum';
import { ResponsiveService } from 'src/service/responsive.service';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.scss']
})
export class Nav1Component implements OnInit {
  isOpen: boolean;

  subscription: Subscription;

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.subscription = this.responsiveService.screenWidth$.subscribe(screenSize => {
      if (screenSize >= MediaSize.MD) {
        this.isOpen = false;
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
