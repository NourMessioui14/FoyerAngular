import { Component, OnInit } from '@angular/core';
import { Universite } from '../universite';
import { UniversiteService } from '../core/services/universite/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  
  universite = new Universite();
  showAlert=false;
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
