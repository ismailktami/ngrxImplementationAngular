import {User} from "./store/modules/users"

export interface AppState{
    readonly user:User[];
}