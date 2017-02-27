import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FundListComponent} from './funds/fund-list-component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ 
    AppComponent,
    FundListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }