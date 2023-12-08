import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from 'src/app/ModelFoyer/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private baseUrl = 'http://localhost:9098/Bloc'; // Remplacez par l'URL de votre API Spring
  
  constructor(private http: HttpClient) { }

  // Récupérer la liste des foyers non affectés depuis l'API
  getFoyersNonAffectes(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}foyers/nonaffectes`);
  }

}
