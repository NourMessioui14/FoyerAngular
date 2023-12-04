import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChambresComponent } from './Chambre/chambres/chambres.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './Chambre/search/search.component';
import { DetailsChambreComponent } from './Chambre/details-chambre/details-chambre.component';
import { AddChambreComponent } from './Chambre/add-chambre/add-chambre.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChambresComponent,
    SearchComponent,
    DetailsChambreComponent,
    AddChambreComponent,
    UpdateChambreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
