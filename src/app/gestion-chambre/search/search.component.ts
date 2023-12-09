import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {TypeChambre} from "../../Modele/type-chambre.enum";
import {ChambreService} from "../../ServiceChambre/chambre.service";
import {Chambre} from "../../Modele/chambre";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  searchResults: Chambre[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chambreService: ChambreService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.searchItem = params['searchItem'];
        // Call the search function when the component initializes
        this.search();
      }
    });
  }

  search(): void {
    if (this.searchItem) {
      this.chambreService.searchByType(this.searchItem).subscribe(
        (results) => {
          this.searchResults = results;
        },
        (error) => {
          console.error('Error searching by type', error);
        }
      );
    }
  }
}
