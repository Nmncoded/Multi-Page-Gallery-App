import { legacy_createStore as createStore} from 'redux'
let data = {
    allCollection: [
        {
            name : "naman aggarwal",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            name : "yugal dave",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            name : "kushal dave",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            name : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            name : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
        {
            name : "nmxnzcx czsczcbdxkjbcvkjd",
            description : "Why hooks are the best thing to happen to React",
            allPhotos : ["https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
        },
    ],
    errors: {
        fieldsError : "",
        nameError : "",
    }
}
let store = createStore(Reducer);

function Reducer(state=data,action){
    switch (action.type) {
        case "create-collection":
            return {
                ...state,
                allCollection : state.allCollection.concat(action.payload)
            }
        case "fieldsError":
            return {
                ...state,
                errors : {
                    ...state.errors,
                    fieldsError : action.payload
                }
               
            }
        case "nameError":
            return {
                ...state,
                errors : {
                    ...state.errors,
                    nameError : action.payload
                }
               
            }
        case "delete-collection":
            return {
                ...state,
                allCollection : state.allCollection.filter((colctn,index) => index !== action.payload)   
               
            }
        default:
            return {...state};
    }
}

export default store;