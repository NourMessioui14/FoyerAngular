import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Chambre} from "../Modele/chambre";
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {TypeChambre} from "../Modele/type-chambre.enum";



@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private URLpostgetdelete="http://localhost:8081/chambre"
  private urlup="http://localhost:8081/chambre/updateChambre";
  private   urlById =  "http://localhost:8081/chambre/Chambres"
  //private  URLBloc="http://localhost:8081/bloc/Blocs"
  Chambre=[];

 // Bloc=[];

    constructor(private http: HttpClient) {}

  updateChambre(Chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(this.urlup, Chambre);
  }
    getAll(): Observable<Chambre[]>{
        return this.http.get<Chambre[]>(this.URLpostgetdelete);}


    AddChambre(chambre: Chambre): Observable<Chambre> {
        return this.http.post<Chambre>(this.URLpostgetdelete, chambre);
    }



    deleteChambre(idChambre: Number): Observable<Object> {
        //const URL = `${this.URL}/${idChambre}`;
        // @ts-ignore
      return this.http.delete(this.URLpostgetdelete+'/'+idChambre);
    }

    getChambreById(id: number): Observable<Chambre> {
        return this.http.get<Chambre>(this.urlById+'/'+id);

    }


/*
    searchByType(type: TypeChambre): Observable<Chambre[]> {
        const url = `${this.URLpostgetdelete}/searchByType/${type}`;
        return this.http.get<Chambre[]>(url);
    }*/

  searchByType(type: string): Observable<Chambre[]> {
    const url = '${this.URLpostgetdelete}/searchByType/${type}';
    return this.http.get<Chambre[]>(url);
  }




}

