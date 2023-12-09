import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Chambre} from "../Modele/chambre";
import {ChambreService} from "../Chambre/chambre.service";


@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  myChambre!: Chambre;
  reactiveForm: FormGroup=this.fb.group(
    {
      idChambre:[''],
      numeroChambre:[''],
      typec:['']
    }
  );
  constructor(private AR: ActivatedRoute, private fb: FormBuilder, private R: Router, private serviceChambre: ChambreService) {}
  ngOnInit(): void {
    this.serviceChambre.getChambreById(this.AR.snapshot.params["idChambre"]).subscribe(data =>{
    this.myChambre=data;
    this.reactiveForm.patchValue({idChambre: this.myChambre.idChambre,numeroChambre:this.myChambre.numeroChambre, typec:this.myChambre.typec});
    console.log(this.myChambre.numeroChambre)
  });
  }
  updateChambre(){
    this.serviceChambre.updateChambre(this.reactiveForm.value).subscribe( data =>{
      this.R.navigate(['chambres']);
    })
  }



  get idChambre() {
    return this.reactiveForm.get('idChambre');
  }

  get numeroChambre() {
    return this.reactiveForm.get('numeroChambre');
  }

  get typec() {
    return this.reactiveForm.get('typec');
  }


}
