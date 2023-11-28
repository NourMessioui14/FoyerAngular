import { Component, OnInit } from '@angular/core';
import { Bloc } from '../bloc';
import { BlocService } from '../bloc/bloc.service';

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent implements OnInit {

  blocs: Bloc[]=[];

  //blocs!: Bloc[];
  constructor(private blocService: BlocService){ }

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

  deleteBloc(id: number){
    this.blocService.deleteBloc(id).subscribe((response) => {
      console.log(response);
      this.blocs=this.blocs.filter((b:any)=>{
        return id !=b.id;
      }
      );
    })
  }
}
