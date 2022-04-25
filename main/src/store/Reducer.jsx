import { legacy_createStore as createStore} from 'redux'
let data = {
    allCollection: [
        {
            collectionName : "naman aggarwal",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            collectionName : "yugal dave",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            ,"https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            collectionName : "kushal dave",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            collectionName : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            collectionName : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            collectionName : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
    ],
}
let store = createStore(Reducer,undefined,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Reducer(state=data,action){
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
            console.log(action.payload);
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
            console.log(action.payload);
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