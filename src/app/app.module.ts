import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav1TestComponent } from './nav1-test/nav1-test.component';
import { Nav2Component } from './nav2/nav2.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1TestComponent,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
