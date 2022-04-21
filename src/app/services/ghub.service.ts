import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { rejects } from 'assert';
// import { resolve } from 'dns';
import { User } from "../User";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GhubService {
  user!:User;

  constructor(private http:HttpClient) { }

findUser(ghubname:string){
  const promise=new Promise<void>((resolve,reject)=>{
    this.http.get<User>(`${environment.base_url}${ghubname}`,{
      headers:{
        Authorization:` ${environment.access_token}`
      }
    }).subscribe({
      next:(res:any)=>{
        this.user=res;
        console.log(res)
        resolve()

      },
      error:(error:any)=>{

        console.log(error)
        reject(error)

      },
      complete:()=>{

        // console.log(completed)

      }

    })
  })

  return promise;

}

}
