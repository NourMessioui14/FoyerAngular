import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { reservation } from 'src/app/Models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private URL="http://localhost:9090/reservation"


  constructor(private http:HttpClient) { }
  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.URL); // Assure-toi que la structure de données retournée correspond à tes réservations
  }
  ajouterReservation(nouvelleReservation: any) {
    return this.http.post(this.URL, nouvelleReservation);
  }

  deleteReserv(idReservation:String):Observable<reservation>{
    let URL = this.URL+'/'+idReservation;
    return this.http.delete<reservation>(URL);

  }

  updateReservation(reservation: reservation): Observable<any> {
    const url = `${this.URL}/${reservation.idReservation}`;
    return this.http.put(url, reservation);
  }
  getReservationById(id: string): Observable<reservation> {
    const URL = `${this.URL}/${id}`;
    return this.http.get<reservation>(URL);
  }



}
