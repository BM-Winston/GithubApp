import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../User";

@Injectable({
  providedIn: 'root'
})
export class GhubService {

  constructor(private http:HttpClient) { }
}
