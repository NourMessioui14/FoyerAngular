import { Component, OnInit } from '@angular/core';
import { ChambreService } from "../chambre.service";
import { Chambre } from "../chambre";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  listChambre: Chambre[] = [];

  constructor(private cs: ChambreService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.cs.getAll().subscribe(data => {
          this.listChambre = data.filter(chambre => chambre.typeC.toLowerCase().includes(params['searchItem'].toLowerCase()));
        });
      } else {
        this.cs.getAll().subscribe(data => this.listChambre = data);
      }
    });
}}
