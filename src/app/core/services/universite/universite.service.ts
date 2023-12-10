import { Injectable } from '@angular/core';
import { Universite } from '../../../universite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http: HttpClient) { }

  private url="http://localhost:9098/Universite"

  getUniversitesWithFoyer(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.url}/withFoyer`);
  }


  // Création d'un bloc avec référence au foyer
  /*createBlocWithFoyer(bloc: Bloc, foyerId: number): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/create-bloc-with-foyer/${foyerId}`, bloc);
  }

  // Mise à jour d'un bloc avec référence au foyer
  updateBlocWithFoyer(bloc: Bloc, foyerId: number): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/update-bloc-with-foyer/${foyerId}`, bloc);
  }*/



  createUniversite(universite : Universite){
    return this.http.post<Universite>(this.url, universite);
  }
  deleteUniversite(idUniversite:number){
    const URL = `${this.url}/${idUniversite}`
    return this.http.delete<Universite>(URL);
  }
  
  updateUniversite(universite: Universite) {
    const URL= `${this.url}/${universite.idUniversite}`;
    return this.http.put<Universite>(URL, universite);
  }

  getUniversiteList(){
    return this.http.get(this.url);
  }
  getUniversite(idUniversite:number){
    return this.http.get(this.url +"/universites/"+ idUniversite);
  }

  getUniversiteById(id: number): Observable<Universite> {
    const URL = `${this.url}/${id}`;
    return this.http.get<Universite>(URL);
  }  
}
