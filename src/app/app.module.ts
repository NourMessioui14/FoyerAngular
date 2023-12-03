import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BlocListComponent } from './bloc/bloc-list/bloc-list.component'
import { BlocService } from './core/services/bloc/bloc.service';
import { AddBlocComponent } from './bloc/add-bloc/add-bloc.component';
import { EditBlocComponent } from './bloc/edit-bloc/edit-bloc.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BlocListComponent,
    AddBlocComponent,
    EditBlocComponent,
    UniversiteListComponent,
    AddUniversiteComponent,
    EditUniversiteComponent
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
