import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ToyotaComponent,
    ContactusComponent,
    PipesComponent,
    DirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
