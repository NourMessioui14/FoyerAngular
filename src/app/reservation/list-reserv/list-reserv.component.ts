import { Component } from '@angular/core';
import { ReservationService } from 'src/app/Core/Services/reservation.service';
import { reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-list-reserv',
  templateUrl: './list-reserv.component.html',
  styleUrls: ['./list-reserv.component.css']
})
export class ListReservComponent {
  reservations: any[] = []; // Initialise un tableau vide pour les réservations

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations(); // Appelle la fonction pour récupérer les réservations au chargement du composant
  }

  getReservations() {
    this.reservationService.getReservations().subscribe((data: any) => {
      console.log('Données récupérées :', data);
  
      this.reservations = data.map((reservation:any) => {
        reservation.anneeUniversitaire = new Date(reservation.anneeUniversitaire);
        return reservation;
      });
    });
  }
  
  deleteReserv(idReservation: string) {
    console.log('ID de réservation à supprimer :', idReservation);
  
    this.reservationService.deleteReserv(idReservation).subscribe(
      () => {
        // Mettre à jour la liste des réservations après la suppression
        this.reservations = this.reservations.filter(
          (reservation) => reservation.idReservation !== idReservation
        );
        alert('Réservation supprimée avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression de la réservation', error);
        alert('Erreur lors de la suppression de la réservation');
      }
    );
  }
  
  


}
