import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable} from 'rxjs';
import {Foyer} from "../../ModelFoyer/foyer";
import {User} from "../../ModelUser/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URl = 'http://localhost:9090/user';  // Remplacez par l'URL de votre backend

  constructor(private http:HttpClient) { }


  login(user: any): Observable<any> {
    return this.http.post(`${this.URl}/login`, user);
  }
  getAllUser(){
    return this.http.get(this.URl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.URl + '/' + id);
  }

  adduser(user:any): Observable<any>{
    return this.http.post(this.URl,user);
  }

  updateuser(user: User): Observable<any> {
    const url = `${this.URl}/${user.id}`;
    return this.http.put(url, user);
  }

  deleteuser(id: number): Observable<User> {
    console.log("ID à supprimer dans le service :", id);
    let url = `${this.URl}/delete/${id}`;
    console.log("URL de suppression :", url);
    return this.http.delete<User>(url).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression :', error);
        throw error;
      })
    );
  }






}
