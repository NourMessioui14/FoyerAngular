import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../bloc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private url="http://localhost:9098/Bloc"

  constructor(private http: HttpClient) { }

  createBloc(bloc: Bloc){
    return this.http.post<Bloc>(this.url, bloc);
  }
  updateBloc(bloc: Bloc){
    return this.http.post(this.url +"/blocs" , bloc);
  }

  getBlocList(){
    return this.http.get(this.url);
  }
  getBloc(idBloc:number){
    return this.http.get(this.url +"/blocs/"+ idBloc);
  }
  deleteBloc(idBloc:number){
    return this.http.delete(this.url+"/blocs/" + idBloc);
  }

  getblocs(): Observable<any[]> {
    return this.http.get<any[]>(this.url); // Assure-toi que la structure de données retournée correspond à tes réservations
  }

}
