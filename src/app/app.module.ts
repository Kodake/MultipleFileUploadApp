import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleFileUploadComponent } from './multiple-file-upload/multiple-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleFileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
