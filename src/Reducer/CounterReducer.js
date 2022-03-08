// de base il faut un state initial

const INITIAL_STATE = {
    count: 0
}
// on creer une fonction avec le state qui à le state de base(initial) et ensuite des actions à effectuer
function CounterReducer(state = INITIAL_STATE, action){

// on fait un switch et on dit en fonction du type d'action et on énumère les différents cas
    switch(action.type){

        case 'INCR' :{
            return{
                ...state,
                count: state.count + 1
            }
        }
        case 'DECR':{
            return{
                ...state,
                count: state.count - 1
            }
        }

    }


    return state


}

export default CounterReducer;