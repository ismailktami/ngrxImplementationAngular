import { Component, OnInit } from '@angular/core';
import {User} from "./store/modules/users";
import {AppState} from "./app.state";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/user.actions'
import * as CounterActions from './store/actions/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
user:User;
username:string;password:string;
users:User[];
counter:any;

constructor(private store:Store<AppState>){
  store.select("user").subscribe(data=>{
    this.users=data;
  });

  store.select("counter").subscribe(data=>{
    this.counter=data;
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
Increment(){
this.store.dispatch(new CounterActions.Increment());
}
Decrement(){
  this.store.dispatch(new CounterActions.Decrement());
}
}
