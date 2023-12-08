import { Component } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  userLoggedIn: boolean = false;
  logout() {
    // Logique de déconnexion
    this.userLoggedIn = false;
  }

}
