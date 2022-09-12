import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { 
    
  }
  

  getPacientes(): Observable<any>{
   return this.http.get<any>('/api/Paciente');
  }
  getPersonas(): Observable<any>{
    return this.http.get<any>('/api/Persona');
   }
   getMaestras(): Observable<any>{
    return this.http.get<any>('/api/Maestra');
   }

  getPersona(id: any): Observable<any>{
    return this.http.get<any>(`/api/Persona/${id}`);
   }

   getPaciente(id: any): Observable<any>{
    return this.http.get<any>(`/api/Paciente/${id}`);
   }

   getMaestra(id: any): Observable<any>{
    return this.http.get<any>(`/api/Maestra/${id}`);
   } 
   
   postPersona(body: any):Observable<any>{
    return this.http.post<any>('/api/Persona', body)
   }

   postPaciente(body: any):Observable<any>{
    return this.http.post<any>('/api/Paciente', body)
   }
   postMaestra(body: any):Observable<any>{
    return this.http.post<any>('/api/Maestra', body)
   }
   postDataMaestra(body: any):Observable<any>{
    return this.http.post<any>('/api/DataMaestra', body)
   }
   putPersona(cddocumento: string, body: any):Observable<any>{
    return this.http.put<any>(`/api/Persona/${cddocumento}`, body)
   }
   putPaciente(nmid: number, body: any):Observable<any>{
    return this.http.put<any>(`/api/Paciente/${nmid}`, body)
   }
   putMaestra(nmaestro: string, body: any):Observable<any>{
    return this.http.put<any>(`/api/Maestra/${nmaestro}`, body)
   }

}
