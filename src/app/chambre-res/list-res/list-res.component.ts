import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/Core/Services/reservation.service';
import { Chambre } from 'src/app/Models/Chambre';
import { TypeChambre } from 'src/app/Models/type-chambre.enum';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrls: ['./list-res.component.css']
})
export class ListResComponent {

  listChambre: any[] = [];
  listEtudiants: any[] = []; // Ajout de la liste des étudiants
  cinEtudiant: number = 0; // Déclaration de cinEtudiant comme attribut de classe



  getEnumString(value: TypeChambre): string {
    return TypeChambre[value];
  }
  constructor(private cs: ReservationService, private route: ActivatedRoute , private httpClient : HttpClient) { }
  ngOnInit(): void {
    this.getChambre();
    this.getEtudiants(); // Appel de la méthode pour récupérer la liste des étudiants
  }

    getChambre(){
      this.cs.getChambre().subscribe((data:any) =>
      {
        this.listChambre=data;
      },
        (error) =>
        {
          console.error('une erreur',error);
        }
      )

  }


  reserverChambre(idChambre: number, cinEtudiant: number) {
    this.cs.ajouterReservationS(idChambre, cinEtudiant).subscribe(
      (data) => {
        console.log('Réservation ajoutée :', data);
        // Réussite - Faites quelque chose ici, par exemple mettre à jour la liste des réservations
      },
      (error) => {
        console.error('Erreur lors de la réservation :', error);
        // Gestion des erreurs - Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions nécessaires
      }
    );
  }




  // recuperer les etudiants 
  getEtudiants() {
    this.cs.getEtudiants().subscribe((data: any) => {
      console.log('données récupérées :', data);
  
      this.listEtudiants = data.map((etudiant: any) => {
        etudiant.dateNaissance = new Date(etudiant.dateNaissance);
        return etudiant;
      });
    });
  }





  
  
}


