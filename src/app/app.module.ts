import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ModalComponent } from '../directives';
import { ModalService } from '../services';
@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
