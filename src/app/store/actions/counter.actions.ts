import {Action} from "@ngrx/store"
import {Injectable} from "@angular/core"
export const INCREMENET='INCREMEENT';
export const DECREMENT='DECREMENT';

export class Increment implements Action{
 readonly type='increment' 
    constructor(){}
}
 export class Decrement implements Action{
    readonly type = 'decrement'
    constructor(){}
}   