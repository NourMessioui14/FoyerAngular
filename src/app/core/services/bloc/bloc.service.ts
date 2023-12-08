import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../../../bloc';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private url="http://localhost:9098/Bloc"

  constructor(private http: HttpClient) { }

  createBloc(idFoyer:number, bloc: Bloc){
    return this.http.post<Bloc>('${this.url}/addBloc/${idFoyer}', bloc);
  }

  /*createBloc(bloc: Bloc){
    return this.http.post<Bloc>(this.url, bloc);
  }*/
  deleteBloc(idBloc:number){
    const URL = `${this.url}/${idBloc}`
    return this.http.delete<Bloc>(URL);
  }
 /*updateBloc(bloc: Bloc){
    return this.http.put<Bloc>(this.url , bloc);
  }*/
  /*updateBloc(bloc: Bloc): Observable<Bloc> {
    const URL = `${this.url}/blocs/${bloc.idBloc}`; // L'URL pour mettre à jour un bloc spécifique
    return this.http.put<Bloc>(URL, bloc);
  }*/

  updateBloc(bloc: Bloc) {
    const URL= `${this.url}/${bloc.idBloc}`;
    return this.http.put<Bloc>(URL, bloc);
  }

  /*updateBloc(id: number, bloc: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, bloc);
  }*/
  /*updateBloc(bloc: Bloc): Observable<any> {
    const url = `${this.url}/${bloc.idBloc}`;
    return this.http.put(url, bloc);
  }*/

  getBlocList(){
    return this.http.get(this.url);
  }
  getBloc(idBloc:number){
    return this.http.get(this.url +"/blocs/"+ idBloc);
  }


  /*deleteBloc(idBloc: number): Observable<Bloc> {
    console.log("ID à supprimer dans le service :", idBloc);
    let URL = `${this.url}/delete/${idBloc}`;
    console.log("URL de suppression :", URL);
    return this.http.delete <Bloc>(URL).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression :', error);
        throw error;
      })
    );
  }*/

  

  /*getblocs(): Observable<any[]> {
    return this.http.get<any[]>(this.url); // Assure-toi que la structure de données retournée correspond à tes réservations
  }*/

  getBlocById(id: number): Observable<Bloc> {
    const URL = `${this.url}/${id}`;
    return this.http.get<Bloc>(URL);
  }  

}
