import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../models/Usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/Usuarios`);
  }
  getUsuario(id:string){
    return this.http.get(`${this.API_URI}/Usuarios/${id}`);
  }
  deleteUsuario(id: string){
    return this.http.delete(`${this.API_URI}/Usuarios/${id}`)
  }
  saveUsuario(usuario:User){
    return this.http.post(`${this.API_URI}/Usuarios`,usuario);
  }
  updateUsuario(id: string,updatedUsuario: User): Observable<User>{
    return this.http.put(`${this.API_URI}/Usuarios/${id}`,updatedUsuario);
  }
}