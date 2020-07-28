import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PartnerComponent } from './partner/partner.component';
import { ProprietorComponent } from './proprietor/proprietor.component';
import { PrivateLtdComponent } from './private-ltd/private-ltd.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PartnerComponent, ProprietorComponent, PrivateLtdComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
