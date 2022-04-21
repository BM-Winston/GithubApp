import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { rejects } from 'assert';
// import { resolve } from 'dns';
import { User } from '../User';
import { Repo } from "../Repo";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class GhubService {
  user!: User;
  repos!: Repo[];
  anyRepo!: Repo[];
  

  constructor(private http: HttpClient) {}
  myOptions = {
    headers: new HttpHeaders({
      Authorization: `token ${environment.access_token}`,
    }),
  };

  findUser(ghubname: string) {
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<User>(`${environment.base_url}${ghubname}`, {
          headers: {
            Authorization: ` ${environment.access_token}`,
          },
        })
        .subscribe({
          next: (res: any) => {
            this.user = res;
            console.log(res);
            resolve();
          },
          error: (error: any) => {
            console.log(error);
            reject(error);
          },
          complete: () => {
            // console.log(completed)
          },
        });
    });

    return promise;
  }
}


