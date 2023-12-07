import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';
import { Universite } from 'src/app/universite';

@Component({
  selector: 'app-edit-universite',
  templateUrl: './edit-universite.component.html',
  styleUrls: ['./edit-universite.component.css']
})
export class EditUniversiteComponent implements OnInit {

  idUniversite: number | null = null;
  universiteData: Universite = {
    idUniversite: 0, 
    nomUniversite: '',
    adresse: '',
  };

  constructor(private route: ActivatedRoute,private router: Router,private universites: UniversiteService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.idUniversite = +idParam; // Convert string to number
      console.log('ID du bloc récupéré depuis l\'URL :', this.idUniversite);

    }

    if (this.idUniversite !== null) {
      this.universites.getUniversiteById(this.idUniversite).subscribe(
        (data: Universite) => {
          this.universiteData = data; // Update bloc data to display in the form
        },
        (error: HttpErrorResponse) => {
          console.error('Error retrieving universite data', error);
          alert('Error retrieving universite data');
        }
      );
    }
  }

  updateUniversite(){
    console.log('Données avant envoi de la requête PUT :', this.universiteData); // Ajout du log

  this.universites.updateUniversite(this.universiteData).subscribe(
    (response) => {
      console.log('Réponse de la requête PUT :', response); // Log de la réponse si nécessaire
      this.universiteData = new Universite();
    },
    (error) => {
      console.error('Erreur lors de la requête PUT :', error); // Log de l'erreur si la requête échoue
    }
  );} 
  }