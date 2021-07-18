import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';
import { MediaSizeType } from 'src/model/media-size.enum';

// Source: https://stackoverflow.com/questions/45350716/detecting-real-time-window-size-changes-in-angular-4
@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private _unsubscriber$: Subject<any> = new Subject();
  public screenWidth$: BehaviorSubject<number> = new BehaviorSubject(null);
  public mediaBreakpoint$: BehaviorSubject<MediaSizeType> = new BehaviorSubject(null);

  constructor() {
    this.init();
  }

  init() {
    this._setScreenWidth(window.innerWidth);
    this._setMediaBreakpoint(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        throttleTime(500),
        takeUntil(this._unsubscriber$)
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);
        this._setMediaBreakpoint(evt.target.innerWidth);
      });
  }

  ngOnDestroy() {
    this._unsubscriber$.next();
    this._unsubscriber$.complete();
  }

  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  private _setMediaBreakpoint(width: number): void {
    if (width < 576) {
      this.mediaBreakpoint$.next(MediaSizeType.XS);
    } else if (width >= 576 && width < 768) {
      this.mediaBreakpoint$.next(MediaSizeType.SM);
    } else if (width >= 768 && width < 992) {
      this.mediaBreakpoint$.next(MediaSizeType.MD);
    } else if (width >= 992 && width < 1200) {
      this.mediaBreakpoint$.next(MediaSizeType.LG);
    } else if (width >= 1200 && width < 1600) {
      this.mediaBreakpoint$.next(MediaSizeType.XL);
    } else {
      this.mediaBreakpoint$.next(MediaSizeType.XXL);
    }
  }

}