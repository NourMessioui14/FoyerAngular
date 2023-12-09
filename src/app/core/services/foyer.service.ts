import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Foyer } from 'src/app/ModelFoyer/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private baseUrl = 'http://localhost:9098/Foyer'; // Remplacez par l'URL de votre API Spring
  
  constructor(private http: HttpClient) { }


  getFoyerByIdr(idFoyer: number): Observable<Foyer> {
    return this.http.get<Foyer>(this.baseUrl + '/' + idFoyer);
   }
   
   addFoyer(foyer:any): Observable<any>{
    return this.http.post(this.baseUrl,foyer);
   }

   
 //  getAllFoyers(): Observable<any[]> {
   // return this.http.get<any[]>(this.URl);
 // }

  getAllFoyer(){
    return this.http.get(this.baseUrl);
  }

  updateFoyer(foyer: Foyer): Observable<any> {
    const url = `${this.baseUrl}/${foyer.idFoyer}`;
    return this.http.put(url, foyer);
  }
  
 
   deleteFoyer(idFoyer: number): Observable<Foyer> {
    console.log("ID à supprimer dans le service :", idFoyer);
    let url = `${this.baseUrl}/delete/${idFoyer}`;
    console.log("URL de suppression :", url);
    return this.http.delete<Foyer>(url).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression :', error);
        throw error;
      })
    );
  }

}
