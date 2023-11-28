import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/Core/Services/foyer.service';
import { Foyer } from 'src/app/ModelFoyer/foyer';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent {
  foyer!: Foyer;
  updateForm!: FormGroup;
  idFoyer!: number;

  constructor(private actR: ActivatedRoute, private foyers: FoyerService, private R: Router) { }

  getParam() {
    this.actR.paramMap.subscribe(data => this.idFoyer = Number(data.get('id')));
  }

  ngOnInit(): void {
    this.getParam();

    this.foyers.getFoyerByIdr(this.idFoyer).subscribe((data) => {
      this.foyer = data;

      this.updateForm = new FormGroup({
        fn: new FormControl(this.foyer.nomFoyer),
        ln: new FormControl(this.foyer.capaciteFoyer),
      });
    });
  }

  
// Inside UpdatefoyerComponent class
update() {
 
  // Perform the update with explicit Content-Type header
  this.foyers.updateFoyer(this.foyer).subscribe(
    (data) => {
      console.log('Foyer updated successfully', data);
      this.R.navigate(['/listfoyer']);
    },
    (error) => {
      console.error('Error updating Foyer', error);
      if (error instanceof HttpErrorResponse) {
        console.log('HTTP Error details:', error.error);
      }
    }
  );
}

  
}
