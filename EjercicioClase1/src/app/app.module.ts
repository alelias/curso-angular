import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { ChaoMundoComponent } from './components/chao-mundo/chao-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    ChaoMundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
