import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../User";


@Injectable({
  providedIn: 'root'
})
export class GhubService {
  user!:User;

  constructor(private http:HttpClient) { }
  
findUser(ghubname:string){

}

}
