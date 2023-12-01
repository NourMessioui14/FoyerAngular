import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URl = '  http://localhost:9090/user';  // Remplacez par l'URL de votre backend

  constructor(private http:HttpClient) { }


  login(user: any): Observable<any> {
    return this.http.post(`${this.URl}/login`, user);
  }

 


}
