import {Action} from '@ngrx/store'
let n=1;

export function counterReducer(state=n,acttion:Action){
    switch(acttion.type){
        case 'increment':
            {
                        n=state+1
                        return n
                
                    }
        case 'decrement':
                {
                    n=state-1                    
                    return n
            
                }
        default:
            return state;

    }
}