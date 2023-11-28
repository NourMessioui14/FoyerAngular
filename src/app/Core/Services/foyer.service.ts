import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Foyer } from 'src/app/ModelFoyer/foyer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private URl = '  http://localhost:9090/foyer';  // Remplacez par l'URL de votre backend


  constructor(private http:HttpClient) { }

  getFoyerByIdr(idFoyer: number): Observable<Foyer> {
    return this.http.get<Foyer>(this.URl + '/' + idFoyer);
   }
   
   addFoyer(foyer:any): Observable<any>{
    return this.http.post(this.URl,foyer);
   }
   
 //  getAllFoyers(): Observable<any[]> {
   // return this.http.get<any[]>(this.URl);
 // }

  getAllFoyer(){
    return this.http.get(this.URl);
  }


  
  
  updateFoyer(foyer: Foyer): Observable<any> {
    return this.http.put(this.URl,foyer);

  }
  
 
   deleteFoyer(idFoyer: number): Observable<Foyer> {
    console.log("ID à supprimer dans le service :", idFoyer);
    let url = `${this.URl}/delete/${idFoyer}`;
    console.log("URL de suppression :", url);
    return this.http.delete<Foyer>(url).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression :', error);
        throw error;
      })
    );
  }
  
  }
  


