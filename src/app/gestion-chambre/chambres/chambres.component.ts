import { Component, OnInit } from '@angular/core';
import { ChambreService } from "../../ServiceChambre/chambre.service";
import { Chambre } from "../../Modele/chambre";
import { ActivatedRoute } from "@angular/router";
import {TypeChambre} from "../../Modele/type-chambre.enum";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  listChambre: Chambre[] = [];

  constructor(private cs: ChambreService) { }

  ngOnInit(): void {
    this.getChambre();
    console.log(this.listChambre)

}
getChambre(){
    this.cs.getAll().subscribe(
      data=>{this.listChambre=data;
      console.log(this.listChambre);
      }
    )
}
  deleteChambre(id:any){
    this.cs.deleteChambre(Number(id)).subscribe(()=>this.getChambre())
      alert('chambre supprimée avec succès');

  }



}
