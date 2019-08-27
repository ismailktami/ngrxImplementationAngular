import {Action} from "@ngrx/store";
import {User} from "./../modules/users";
import * as UserActions from './../actions/user.actions'


const initialState:User={
    username:"ismail",
    password:"ktami"
};


export function reducer(state:User[]=[initialState],action:UserActions.Actions)
{
 switch(action.type){
     case  UserActions.ADD_USER:
            {
            return [...state,action.payload]
            }
    case UserActions.REMOVE_USER:{
            state.splice(action.payload);
            return state;
         }
         
    default :
    return state;
 }   
}