import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChambresComponent } from './Chambre/chambres/chambres.component';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './Chambre/search/search.component';
import { DetailsChambreComponent } from './Chambre/details-chambre/details-chambre.component';
import { AddChambreComponent } from './Chambre/add-chambre/add-chambre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChambresComponent,
    SearchComponent,
    DetailsChambreComponent,
    AddChambreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
