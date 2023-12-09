import { Component } from '@angular/core';
import { EtudiantsService } from 'src/app/Core/Services/etudiants.service';
import { Etudiant } from 'src/app/Models/Etudiant';

@Component({
  selector: 'app-liste-etud',
  templateUrl: './liste-etud.component.html',
  styleUrls: ['./liste-etud.component.css']
})
export class ListeEtudComponent {

  etudiants:any[] = [];

  constructor(private etudiantService:EtudiantsService){}

  ngOnInit():void{
    this.getEtudiants();
  }

  getEtudiants() {
    this.etudiantService.getEtudiants().subscribe((data: any) => {
      console.log('données récupérées :', data);
  
      this.etudiants = data.map((etudiant: any) => {
        etudiant.dateNaissance = new Date(etudiant.dateNaissance);
        return etudiant;
      });
    });
  }
  
}
