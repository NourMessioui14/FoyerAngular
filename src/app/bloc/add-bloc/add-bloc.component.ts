import { Component, OnInit } from '@angular/core';
import { Bloc } from '../../bloc';
import { BlocService } from '../../core/services/bloc/bloc.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit {
  
  bloc = new Bloc();
  showAlert=false;
  constructor(private blocService:BlocService){}
  
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

}
