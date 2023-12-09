import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/core/services/foyer.service';
import { Foyer } from 'src/app/ModelFoyer/foyer';

@Component({
  selector: 'app-listfoyer',
  templateUrl: './listfoyer.component.html',
  styleUrls: ['./listfoyer.component.css']
})
export class ListfoyerComponent implements OnInit {

  searchItem!: String;
  List_foyer: Foyer[] = [];
  newFoyer!: Foyer;
  foyerelement:any;

  constructor(private router: Router, private foyerService: FoyerService) {}

  ngOnInit() {
    this.foyerService.getAllFoyer().subscribe(
      (data: any) => {
        this.List_foyer = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
  navigateToAddFoyer() {
    this.router.navigate(['/addfoyer']); 
}


deleteFoyer(id: number) {
  // Afficher une boîte de confirmation
  const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce foyer ?');

  if (confirmDelete) {
    console.log("ID à supprimer :", id);

    this.foyerService.deleteFoyer(id).subscribe(
      res => {
        console.log("Réponse de la suppression :", res);

        // Rediriger vers la liste des foyers après la suppression réussie
        this.router.navigate(['/listfoyer']);
      },
      err => console.log("Erreur lors de la suppression :", err)
    );
  }
}

}


