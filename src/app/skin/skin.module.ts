import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdButtonModule, MdIconModule, MdCheckboxModule, MdSidenavModule, MdListModule, MdGridListModule,MdMenuModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdGridListModule, MdMenuModule, MdCardModule
  ],
  exports: [ BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdIconModule,  MdToolbarModule, MdSidenavModule, MdListModule, MdGridListModule, MdMenuModule, MdCardModule],
  declarations: []
})
export class SkinModule { }
