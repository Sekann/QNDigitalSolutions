import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from '../interfaces/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorServicesService {

  private apiUrl = '';  
  constructor(private http: HttpClient) { }

  // Función para obtener la lista de visitantes
  getVisitors(): Observable<Visitor[]> {
    return this.http.get<Visitor[]>(this.apiUrl);
  }
  addVisitor(visitor: Visitor): Observable<Visitor> {
    return this.http.post<Visitor>(this.apiUrl, visitor);
  }
}
