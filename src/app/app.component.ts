import { Component, OnInit } from '@angular/core';
import {User} from "./store/modules/users";
import {AppState} from "./app.state";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/user.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
user:User;
username:string;password:string;
users:Observable<User[]>;
constructor(private store:Store<AppState>){
  this.users=store.select("user");
  this.users.subscribe(data=>{
    
  })

}
ngOnInit(){

}
selectUser(u:User){
}

AddUser(u,p){
  this.store.dispatch(new UserActions.AddUser({username:u,password:p}))  

}
deleteUser(index){
  this.store.dispatch(new UserActions.RemoveUser(index));
}
}
