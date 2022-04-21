import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { User } from "../User";


@Injectable({
  providedIn: 'root'
})
export class GhubService {
  user!:User;

  constructor(private http:HttpClient) { }

findUser(ghubname:string){
  const promise=new Promise<void>((resolve,reject)=>{
    this.http.get<User>(`$(environment.base_url)${ghubname}`,{
      headers:{
        Authorization:"token ${environment.access_token}"
      }
    }).subscribe({
      
    })
  })

}

}
