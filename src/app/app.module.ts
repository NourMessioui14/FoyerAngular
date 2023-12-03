import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BlocListComponent } from './bloc-list/bloc-list.component'
import { BlocService } from './bloc/bloc.service';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BlocListComponent,
    AddBlocComponent,
    EditBlocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [BlocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
