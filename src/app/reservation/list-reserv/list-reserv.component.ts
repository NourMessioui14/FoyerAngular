import { Component } from '@angular/core';
import { EtudiantsService } from 'src/app/Core/Services/etudiants.service';
import { ReservationService } from 'src/app/Core/Services/reservation.service';
import { reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-list-reserv',
  templateUrl: './list-reserv.component.html',
  styleUrls: ['./list-reserv.component.css']
})
export class ListReservComponent {
  reservations: any[] = []; // Initialise un tableau vide pour les réservations

  constructor(private reservationService: ReservationService,private EtudiantService:EtudiantsService) { }

  ngOnInit(): void {
    this.getReservations(); // Appelle la fonction pour récupérer les réservations au chargement du composant
    this.getEtudiants();

  }

  getEtudiants() {
    this.EtudiantService.getEtudiants().subscribe((data: any) => {
      console.log('données récupérées :', data);
  
      this.etudiants = data.map((etudiant: any) => {
        etudiant.dateNaissance = new Date(etudiant.dateNaissance);
        return etudiant;
      });
    });
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



  etudiants:any[] = [];


 

  
  
  

  


}
