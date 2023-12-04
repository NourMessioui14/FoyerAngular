import {Component, OnInit} from '@angular/core';
import {Chambre} from "../chambre";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ChambreService} from "../chambre.service";
import {TypeChambre} from "../type-chambre.enum";

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  listChambre:Chambre[]=[];
  newChambre!:Chambre;


  constructor( private R:Router , private serviceChambre : ChambreService) {}
 Add(F:NgForm){
    console.log(this.listChambre.length);
   if (F.valid) {
     this.newChambre = {
       idChambre: F.value.idChambre,
       numeroChambre: F.value.numeroChambre,
       typeC: F.value.typeC,
     };

      this.serviceChambre.AddChambre(this.newChambre).subscribe(
          ()=> {
            alert('added successfully');
            F.resetForm();
            this.R.navigate(['/chambres']);
          },
          (error)=> {
            console.error('error adding room');
          }
      )
    }
 }


}
