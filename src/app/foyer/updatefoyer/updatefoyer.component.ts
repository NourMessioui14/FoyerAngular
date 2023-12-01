import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/Core/Services/foyer.service';
import { Foyer } from 'src/app/ModelFoyer/foyer';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent implements OnInit {
  idFoyer: number | null = null;
  foyerData: Foyer = {
    idFoyer: 0, // Initialize to null
    nomFoyer: '',
    capaciteFoyer: 0, // Assuming capaciteFoyer is a number; adjust accordingly
    // Initialize other reservation properties if necessary
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foyers: FoyerService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.idFoyer = +idParam; // Convert string to number
    }

    if (this.idFoyer !== null) {
      this.foyers.getFoyerByIdr(this.idFoyer).subscribe(
        (data: Foyer) => {
          this.foyerData = data; // Update reservation data to display in the form
        },
        (error: HttpErrorResponse) => {
          console.error('Error retrieving reservation data', error);
          alert('Error retrieving reservation data');
        }
      );
    }
  }

  updateFoyer() {
    this.foyers.updateFoyer(this.foyerData).subscribe(
      () => {
        // Redirect to the reservation list after successful update
        this.router.navigate(['/listfoyer']);
        alert('Reservation updated successfully');
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating reservation', error);
        alert('Error updating reservation');
      }
    );
  }
}
