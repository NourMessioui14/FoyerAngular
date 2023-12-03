import { Component, OnInit } from '@angular/core';
import { Bloc } from '../bloc';
import { BlocService } from '../bloc/bloc.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent implements OnInit {
  searchText:any;

  blocs: Bloc[]=[];

  //blocs!: Bloc[];
  constructor(private router: Router, private blocService: BlocService){
    
   }

  ngOnInit() {
    this.blocService.getBlocList().subscribe(
      (data: any) => {
        this.blocs = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }


  /*ngOnInit() {

    this.blocService.getBlocList().subscribe((response: any)=>{
      this.blocs=response;
    }

    );
  }*/
  /*deleteBloc(id: number) {
    // Afficher une boîte de confirmation
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?');
  
    if (confirmDelete) {
      console.log("ID à supprimer :", id);
  
      this.blocService.deleteBloc(id).subscribe(
        res => {
          console.log("Réponse de la suppression :", res);
  
          // Rediriger vers la liste des foyers après la suppression réussie
          this.router.navigate(['/bloc-list']);
        },
        err => console.log("Erreur lors de la suppression :", err)
      );
    }
  }*/

  deleteBloc(idBloc: number){
    this.blocService.deleteBloc(idBloc).subscribe((response) => {
      console.log(response);
      this.blocs=this.blocs.filter((b:any)=>{
        return idBloc !=b.idBloc;
      }
      );
    })
  }
}
