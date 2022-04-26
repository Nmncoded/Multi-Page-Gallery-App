export function createCollection(data){
    return {type:"create-collection",payload:data}
}

export function deleteCollection(data){
    return {type:"delete-collection",payload: data}
}

export function deleteImage(data){
    return {type:"delete-image",payload: [data[0],data[1]]}
}

export function addImage(data){
    return {type:"add-image",payload : [data[0],data[1]]}
}