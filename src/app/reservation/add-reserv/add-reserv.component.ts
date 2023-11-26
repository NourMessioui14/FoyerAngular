import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/Core/Services/reservation.service';
import { Router } from '@angular/router'; // Importez le module de routage
import { reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-add-reserv',
  templateUrl: './add-reserv.component.html',
  styleUrls: ['./add-reserv.component.css']
})
export class AddReservComponent {

  List_reserv:reservation[]=[];
  newReserv!:reservation;

  constructor(private Router:Router,private reservationService: ReservationService) { }

  add(F:NgForm){
    console.log(this.List_reserv.length);

    if(F.valid){
      this.newReserv ={
        //idReservation:(this.List_reserv+ 1).toString(),
        idReservation:F.value.idReservation,
        anneeUniversitaire:F.value.anneeUniversitaire,
        estValide:F.value.estValide,

      };

      this.reservationService.ajouterReservation(this.newReserv).subscribe(
        () => {
          alert('added successfully');
          F.resetForm();
          this.Router.navigate(['/list-reservation']); // Redirection vers la liste des réservations après l'ajout

        },
        (error) => {
          console.error('error adding reservation',error); }  )  }

  }


}
