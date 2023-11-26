import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/Core/Services/reservation.service';
import { reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-update-reserv',
  templateUrl: './update-reserv.component.html',
  styleUrls: ['./update-reserv.component.css']
})
export class UpdateReservComponent implements OnInit {
  idReservation: string | null = null;
  reservationData: reservation = {
    idReservation: '',
    anneeUniversitaire: '',
    estValide: false,
    // Initialisez d'autres propriétés de réservation si nécessaire
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.idReservation = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID de la réservation depuis l'URL
    
    if (this.idReservation) {
      this.reservationService.getReservationById(this.idReservation).subscribe(
        (data: reservation) => {
          this.reservationData = data; // Mettre à jour les données de la réservation à afficher dans le formulaire
        },
        error => {
          console.error('Erreur lors de la récupération des données de réservation', error);
          alert('Erreur lors de la récupération des données de réservation');
        }
      );
    }
  }

  updateReservation() {
    this.reservationService.updateReservation(this.reservationData).subscribe(
      () => {
        // Rediriger vers la liste des réservations après la mise à jour réussie
        this.router.navigate(['/list-reservation']);
        alert('Réservation mise à jour avec succès');
      },
      error => {
        console.error('Erreur lors de la mise à jour de la réservation', error);
        alert('Erreur lors de la mise à jour de la réservation');
      }
    );
  }
  }
