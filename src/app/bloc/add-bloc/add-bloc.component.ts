import { Component, OnInit } from '@angular/core';
import { Bloc } from '../../bloc';
import { BlocService } from '../../core/services/bloc/bloc.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit {
  
  foyers: any[] = [];
  selectedFoyerId: number | null = null;
  bloc = new Bloc();
  showAlert=false;
  constructor(private blocService:BlocService){}
  
  ngOnInit() {

  }

  saveBloc() {
    // Vérifiez si un foyer a été sélectionné
    if (this.selectedFoyerId) {
      const blocToAdd: Bloc = {
        nomBloc: this.bloc.nomBloc,
        capacityBloc: this.bloc.capacityBloc,
        idBloc: 0
      };
  
      this.blocService.createBloc(this.selectedFoyerId, blocToAdd)
        .subscribe((response) => {
          console.log(response);
          this.bloc = new Bloc();
          this.showAlert = true;
        });
    } else {
      // Gérer le cas où aucun foyer n'est sélectionné
      console.log("Aucun foyer sélectionné pour affecter le bloc.");
      // Autres actions à prendre en cas d'erreur ou de validation manquante
    }
  }
   /*saveBloc(){
    this.blocService.createBloc(this.bloc).subscribe((response) => {
      console.log(response);
      this.bloc=new Bloc();
      this.showAlert=true;
    }
    );
   }*/
   closeAlert(){
    this.showAlert=false;
   }

}
