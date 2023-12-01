import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideNavAndNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Observer le changement de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Déterminer si la route actuelle nécessite l'affichage de la barre latérale et de la barre de navigation
        this.showSideNavAndNavbar = !event.url.includes('/user/auth');
      }
    });
  }
  title = 'ReservationFoyer';
}
