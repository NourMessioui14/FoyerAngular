import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../Modele/chambre";
import {ActivatedRoute} from "@angular/router";
import {ChambreService} from "../chambre.service";
import {Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-details-chambre',
  templateUrl: './details-chambre.component.html',
  styleUrls: ['./details-chambre.component.css']
})
export class DetailsChambreComponent implements OnInit{
  //chambre: Chambre[] = [];
  room!:Chambre;
   // room!: Observable<Chambre | undefined>;
  constructor(private activatedRoute:ActivatedRoute,
              private chambreService:ChambreService) {}
    /*
    activatedRoute.params.subscribe((params)=>{
     if(params['id'])
       this.room =chambreService.getChambreById(params['id'])
    });
  }
  ngOnInit(): void {


  }
*/



    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.chambreService.getChambreById(params['id']).subscribe(
                    (chambre) => {
                        if (chambre) {
                            this.room = chambre;
                        } else {
                            // Handle the case where chambre is undefined
                        }
                    },
                    (error) => {
                        // Handle the error if necessary
                    }
                );
            }
        });
    }


}
