import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Chambre} from "../Modele/chambre";
import {ChambreService} from "../Chambre/chambre.service";

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {
  /*idChambre:number| null=null;
  chambreData: Chambre={
    idChambre:'',
    numeroChambre:'',
    typec:'',
  };*/


  chambreId!: number;
  chambre!: Chambre | undefined;
  chambreForm!: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private chambreService:ChambreService
  ) { }
/*
  ngOnInit(): void {
  this.idChambre=this.route.snapshot.paramMap.get('id');
  if (this.idChambre){
    this.chambreService.getChambreById(this.idChambre).subscribe(
        (data: Chambre)=>{
          this.chambreData = data;
        },
        error => {
          console.error('Erreur lors de la recuperation',error);
          alert('Erreur lors de la recuperation');
        }
    );
  }
  }
 */

  ngOnInit(): void {
    // @ts-ignore
    this.chambreId = +this.route.snapshot.paramMap.get('id');
   // this.loadChambre();
    //this.initializeForm();
  }

  loadChambre(): void {
    this.chambreService.getChambreById(this.chambreId).subscribe(data => {
      this.chambre = data;
      this.populateForm();
    });
  }

  initializeForm(): void {
    this.chambreForm = this.formBuilder.group({
      idChambre: ['', Validators.required],
      numeroChambre: ['', Validators.required],
      typeC: ['', Validators.required],
    });
  }

  populateForm(): void {

    this.chambreForm.patchValue({
      idChambre: this.chambre?.idChambre,
      numeroChambre: this.chambre?.numeroChambre,
      typeC: this.chambre?.typec,
    });
  }

  updateChambre(): void {
    if (this.chambreForm.valid) {
      const updatedChambre: Chambre = this.chambreForm.value;
      this.chambreService.updateChambre(updatedChambre).subscribe(() => {
        alert('updated successfully');
        this.router.navigate(['/chambres']);
      });
    }
  }

  get idChambre() {
    return this.chambreForm.get('idChambre');
  }

  get numeroChambre() {
    return this.chambreForm.get('numeroChambre');
  }

  get typeC() {
    return this.chambreForm.get('typeC');
  }
}
