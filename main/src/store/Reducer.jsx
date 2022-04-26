import { legacy_createStore as createStore} from 'redux';
let data= {
    allCollection : JSON.parse(localStorage.getItem("collections")),
};

let store = createStore(Reducer,undefined,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Reducer(state = data,action){
    switch (action.type) {
        case "create-collection":
            return {
                ...state,
                allCollection : state.allCollection.concat(action.payload)
            }
        case "delete-collection":
            return {
                ...state,
                allCollection : state.allCollection.filter((colctn,index) => index !== action.payload)   
               
            }
        case "delete-image":
            let objOne = [...state.allCollection].map((collection,index) => {
                if(index === action.payload[0]){
                    collection.allPhotos = [...collection.allPhotos].filter((image,i) => i !== action.payload[1])
                }
                return collection;
            });
            return {
                ...state,
                allCollection :  objOne,  
               
            }
        case "add-image":
            let obj = [...state.allCollection].map((collection,index) => {
                if(index === action.payload[1]){
                    collection.allPhotos = collection.allPhotos.concat(action.payload[0])
                }
                return collection;
            });
            return {
                ...state,
                allCollection : obj,   
               
            }
        default:
            return {...state};
    }
}

export default store;