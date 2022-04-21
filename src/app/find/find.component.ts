import { Component, OnInit } from '@angular/core';
// import { error } from 'console';
import { GhubService } from '../services/ghub.service';
import { User } from '../User';
import { Repo } from "../Repo";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  currentUser!:User;
  userName! :string;
  userRepos!: Repo[]
  allRepos!: Repo[]

  constructor(private ghubService:GhubService) { }

  ngOnInit(): void {
  }

  

  findUser(ghubname:string){
    this.ghubService.findUser(ghubname).then(()=>{
      this.currentUser = this.ghubService.user;

    },()=>{
      alert("name not found")

    })

  }

}
