import { Component, OnInit } from '@angular/core';
import { Universite } from '../../universite';
import { UniversiteService } from '../../core/services/universite/universite.service';
import { Foyer } from 'src/app/ModelFoyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {

  universite: Universite = new Universite();
  
  showAlert=false;
  
  selectedFoyer: Foyer | undefined; // Garder le foyer sélectionné

  //foyers : Foyer[] = [];
  
  constructor(private universiteService:UniversiteService){}


  
  
  ngOnInit() {

  }
   saveUniversite(){
    this.universiteService.createUniversite(this.universite).subscribe((response) => {
      console.log(response);
      this.universite=new Universite();
      this.showAlert=true;
    }
    );
   }
   closeAlert(){
    this.showAlert=false;
   }

}
