import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FundListComponent} from './funds/fund-list-component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    FundListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }