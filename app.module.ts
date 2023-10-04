import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LacroseComponent } from './lacrose/lacrose.component';
import { AccComponent } from './acc/acc.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LacroseComponent,
    AccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
