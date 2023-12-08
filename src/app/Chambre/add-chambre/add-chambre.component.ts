import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../Modele/chambre";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ChambreService} from "../chambre.service";
import {TypeChambre} from "../../Modele/type-chambre.enum";



@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit{
    listChambre:Chambre[]=[];
    newRoom!:Chambre;


  typesChambre = Object.values(TypeChambre); // Get enum values
    constructor(private Router:Router,private chambreService: ChambreService) { }
  ngOnInit(): void {


  }
    add(F:NgForm){
        console.log(this.listChambre.length);

        if(F.valid){

          this.newRoom = {
                idChambre: F.value.idChambre,
                numeroChambre: F.value.numeroChambre,
                typec: F.value.typeC,
            };
            };

            this.chambreService.AddChambre(this.newRoom).subscribe(
                () => {
                    alert('added successfully');
                    F.resetForm();
                    this.Router.navigate(['chambres']); // Redirection vers la liste des réservations après l'ajout

                },
                (error) => {
                    console.error('error adding reservation',error); }  )  }




    /*
    addForm = new FormGroup({
      numeroChambre: new FormControl('', [Validators.required]),
      typec: new FormControl('', [Validators.required])
    });

    add(addForm: NgForm){
        if(this.addForm.valid){
          const typecControl = this.addForm.get('typec');
          const typecValue = typecControl ?
          typecControl.value : null;


          const numeroChambreValue = this.addForm.value.numeroChambre;
          const chambre: Chambre = {
            idChambre: 0,
            numeroChambre: numeroChambreValue ? numeroChambreValue.toString() : '',
            typec: TypeChambre[typecValue as keyof typeof TypeChambre]
          };
            this.chambreService.AddChambre(chambre).subscribe(
              () => {
                alert("Chambre ajoutée avec succés");
                this.Router.navigate(['/chambres']);
              }
            );
          } else {
          alert("Veuillez remplir tous les champs correctement.");
        }
      }

  */


 // protected readonly Bloc = Bloc;
}

