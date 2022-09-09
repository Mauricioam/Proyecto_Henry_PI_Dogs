import { GET_DOGS, SEARCH_DOG, SIZE, SORT,GET_TEMPERAMENTS,TEMPERAMENTS ,POST_DOG ,SORT_CREATED,DOG_ID } from "../action"


const initialState = {
    dogs: [],
    dogsFiltered : [],
    temperament: [],
    idDogs:[]

}

export default function reducer( state = initialState, action){
   
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsFiltered:action.payload,
                idDogs:action.payload
            }
        case SEARCH_DOG:
            return {
                ...state,
                dogs:action.payload
            }
        case SORT:
            let order = state.dogsFiltered.sort((a,b)=>{
                if (a.name.toLowerCase() > b.name.toLowerCase()){
                    return action.payload === "fromAtoZ" ? 1 : -1
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return action.payload === "fromZtoA" ? 1 : -1
                }
                return 0
             }) 
            return{
                   ...state,
                   dogs: order
                }
        case SIZE:
            let orderSize = state.dogsFiltered.sort((a,b)=>{
                if (parseInt(a.weight)  < parseInt(b.weight)){
                    return action.payload === "big" ? 1 : -1
                }
                if(parseInt(a.weight) > parseInt(b.weight)){
                    return action.payload === "small" ? 1 : -1
                }
                return 0
            })
            return{
                ...state,
                dogs: orderSize
            }
            case GET_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            }
            case TEMPERAMENTS:
               let orderByTemp = []
               for (let i = 0; i < state.dogsFiltered.length; i++) {
                if(state.dogsFiltered[i].temperament.includes(action.payload)){
                    orderByTemp.push(state.dogsFiltered[i])
                }
                
               }
               console.log(orderByTemp)
                return{
                    ...state,
                    dogs: orderByTemp

                }
                case POST_DOG:
                    return {
                        ...state
                    }
                case SORT_CREATED:
                        let orderByCreated = action.payload === "created" ? state.dogsFiltered.filter(d => typeof d.id !== "number") : state.dogs
                        
                    return{
                        ...state,
                        dogs: action.payload === "all" ? state.dogsFiltered : orderByCreated
                    }
                case DOG_ID:
                    console.log(action.payload)
                    return{
                        ...state,
                        idDogs: action.payload
                    } 
        default:
            return state
                
            
    }

}   



