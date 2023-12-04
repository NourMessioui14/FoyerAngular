import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Chambre} from "../Chambre/chambre";
import {ChambreService} from "../Chambre/chambre.service";

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  chambreId!: number;
  chambre!: Chambre | undefined;
  chambreForm!: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private chambreService:ChambreService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.chambreId = +this.route.snapshot.paramMap.get('id');
    this.loadChambre();
    this.initializeForm();
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
      typeC: this.chambre?.typeC,
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
