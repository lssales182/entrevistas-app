import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { TabMenuModule } from 'primeng/tabmenu';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    TabMenuModule
  ],
  exports: [
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // shared components
    NavbarComponent
  ]
})
export class CoreModule { }
