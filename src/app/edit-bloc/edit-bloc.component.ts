import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from '../bloc';
import { BlocService } from '../bloc/bloc.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {

  idBloc: number | null = null;
  blocData: Bloc = {
    idBloc: 0, 
    nomBloc: '',
    capacityBloc: 0,
  };

  constructor(private route: ActivatedRoute,private router: Router,private blocs: BlocService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.idBloc = +idParam; // Convert string to number
      console.log('ID du bloc récupéré depuis l\'URL :', this.idBloc);

    }

    if (this.idBloc !== null) {
      this.blocs.getBlocById(this.idBloc).subscribe(
        (data: Bloc) => {
          this.blocData = data; // Update bloc data to display in the form
        },
        (error: HttpErrorResponse) => {
          console.error('Error retrieving bloc data', error);
          alert('Error retrieving bloc data');
        }
      );
    }
  }

  updateBloc(){
    console.log('Données avant envoi de la requête PUT :', this.blocData); // Ajout du log

  this.blocs.updateBloc(this.blocData).subscribe(
    (response) => {
      console.log('Réponse de la requête PUT :', response); // Log de la réponse si nécessaire
      this.blocData = new Bloc();
    },
    (error) => {
      console.error('Erreur lors de la requête PUT :', error); // Log de l'erreur si la requête échoue
    }
  );} 
  }
  /*updateBloc() {
    this.blocs.updateBloc(this.blocData).subscribe(
      () => {
        // Redirect to the bloc list after successful update
        this.router.navigate(['/bloc-list']);
        alert('bloc updated successfully');
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating bloc', error);
        alert('Error updating bloc');
      }
    );
  }
}*/



  /*constructor(private route: ActivatedRoute, private blocService: BlocService) {}

  ngOnInit() {
    this.idBloc = this.route.snapshot.paramMap.get('idBloc');
    console.log(this.idBloc);
    this.loadBlocData();
  }

  loadBlocData() {
    this.blocService.getBloc(this.idBloc).subscribe((data) => {
      this.bloc = data;
    });
  }

  updateBloc() {
    this.blocService.updateBloc(this.idBloc, this.bloc).subscribe(() => {
      console.log('Mise à jour effectuée avec succès.');
      // Autres actions après la mise à jour
    });
  }
}*/



  /*showAlert= false;

  constructor(private route:ActivatedRoute, private blocService: BlocService){}
  id!: number;
  bloc = new Bloc();
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blocService.getBloc(this.id).subscribe((response: any)=>{
      this.bloc= response.data;
    }
    );
  }

  updateBloc(){
    this.blocService.updateBloc(this.bloc).subscribe((response) => {
      console.log(response);
      this.bloc = new Bloc();
      this.showAlert=true;
    }
    )
  }

  closeAlert(){
    this.showAlert=false;
   }

  /* 
  ngOnInit() {

  }
   saveBloc(){
    this.blocService.createBloc(this.bloc).subscribe((response) => {
      console.log(response);
      this.bloc=new Bloc();
      this.showAlert=true;
    }
    );
   }
   closeAlert(){
    this.showAlert=false;
   }
  

}*/
