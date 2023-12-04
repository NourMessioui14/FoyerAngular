import { Component, OnInit } from '@angular/core';
import { ChambreService } from "../chambre.service";
import { Chambre } from "../chambre";
import { ActivatedRoute } from "@angular/router";
import {TypeChambre} from "../type-chambre.enum";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  listChambre: Chambre[] = [];
  getEnumString(value: TypeChambre): string {
    return TypeChambre[value];
  }

  constructor(private cs: ChambreService, private route: ActivatedRoute , private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getChambre();
/*
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.cs.getAll().subscribe(data => {
          this.listChambre = data.filter(chambre => chambre.typeC.toLowerCase().includes(params['searchItem'].toLowerCase()));
        });
      } else {
        this.cs.getAll().subscribe(data => this.listChambre = data);
      }
    });
*/
}
getChambre(){
    this.cs.getAll().subscribe((data:any) =>
    {
      this.listChambre=data;
    },
      (error) =>
      {
        console.error('une erreur',error);
      }
    )
    /*
    this.httpClient.get<any>('http://localhost:8081/chambre').subscribe(
      response => {
        console.log(response);
        this.listChambre =response;
      }
    );*/
}

   // protected readonly Chambre = Chambre;


    deleteChambre(idChambre: number | undefined) {
        console.log('Id chambre a supprimer:', idChambre);
        this.cs.deleteChambre(idChambre).subscribe(
            () => {
                this.listChambre = this.listChambre.filter(
                    (chambre) => chambre.idChambre !== idChambre
                );
                alert('chambre supprimée avec succès');
            },
            (error) => {
                console.error('Erreur lors de la suppression de la chambre', error);
                alert('Erreur lors de la suppression de la chambre');
            }
        );
    }

}
