import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from '../bloc';
import { BlocService } from '../bloc/bloc.service';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {

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
    }
    )
  }

}
