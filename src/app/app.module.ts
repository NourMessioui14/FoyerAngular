import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { ReservationModule } from './reservation/reservation.module';
import { FormsModule } from '@angular/forms';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { ChambreResModule } from './chambre-res/chambre-res.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReservationModule,
    EtudiantsModule,
    ChambreResModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
