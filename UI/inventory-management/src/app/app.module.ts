import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NetworkService } from './network/network.service';
import { HttpClientModule } from '@angular/common/http';
import { ListViewComponent } from './list-view/list-view.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
