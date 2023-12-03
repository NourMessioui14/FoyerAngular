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

  createUniversite(universite : Universite){
    return this.http.post<Universite>(this.url, universite);
  }
  deleteUniversite(idUniversite:number){
    const URL = `${this.url}/${idUniversite}`
    return this.http.delete<Universite>(URL);
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
