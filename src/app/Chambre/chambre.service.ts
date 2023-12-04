import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {TypeChambre} from "./type-chambre.enum";
import {Chambre} from "./chambre";
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private URL="http://localhost:8081/chambre"

Chambre=[];
  constructor( private  http:HttpClient) {}
    getAll(): Observable<any[]>{
        return this.http.get<any[]>(this.URL);}


    AddChambre(newChambre: Omit<Chambre, 'idChambre'>) {
        return this.http.post(this.URL, newChambre);
    }

    deleteChambre(idChambre: number | undefined): Observable<Chambre> {
        const URL = `${this.URL}/${idChambre}`;
        return this.http.delete<Chambre>(URL);
    }

    getChambreById(id: number): Observable<Chambre | undefined> {
        console.log('Fetching chambre with id:', id);
        return this.getAll().pipe(
            map(chambres => chambres.find(chambre => chambre.idChambre === id))
        );
    }

    updateChambre(Chambre: Chambre):Observable<any>{
  const URL ='$(this.URL)/${Chambre.idChambre}';
 return this.http.put(URL , Chambre);
  }




  /*
  getAll(): Observable<Chambre[]> {
    return of([
      { idChambre: 1, numeroChambre: 101, typeC: TypeChambre.DOUBLE , image:'/assets/double-1.jpg'},
      { idChambre: 2, numeroChambre: 102, typeC: TypeChambre.DOUBLE , image:'/assets/double-2.jpg'},
      { idChambre: 3, numeroChambre: 103, typeC: TypeChambre.SIMPLE , image:'/assets/simple-2.jpg'},
      { idChambre: 4, numeroChambre: 104, typeC: TypeChambre.SIMPLE , image:'/assets/simple-1.jpg'},
      { idChambre: 5, numeroChambre: 105, typeC: TypeChambre.TRIPLE , image:'/assets/triple-1.jpg'},
      { idChambre: 6, numeroChambre: 106, typeC: TypeChambre.TRIPLE , image:'/assets/triple-2.jpg'},

    ]);
  }*/
}

