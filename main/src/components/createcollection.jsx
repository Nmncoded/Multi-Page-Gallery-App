import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input
  } from '@chakra-ui/react';
import { connect } from 'react-redux';
import {useRef} from 'react';

function CreateCollection(props){
    let {allCollection,dispatch} = props;
    let { fieldsError, nameError } = props.errors;
    let inputFields = useRef({});

    const handleInputChange = ({target}) => {
        let {value,name} = target;
        let obj = inputFields.current;
        let {description,allPhotos} = obj;
        console.log(name,value);
        if(name === "imageUrl"){
            allPhotos.push(value)
        }else{
            obj[name] = value;
        }
        if(name === "name"){
            if( allCollection.length && allCollection.some(collection => collection.name === value)){
                dispatch({type:"nameError",payload : "Name already exists !!!"})
            }else{
                dispatch({type:"nameError",payload : ""});
            }
        }
        

        if(obj.name && description && allPhotos.length){
            dispatch({type:"fieldsError",payload : ""})
        }
        
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        let obj = inputFields.current;
        let {description,allPhotos} = obj;
        console.log("submit");
        if(obj.name && description && allPhotos.length){
            dispatch({type:"fieldsError",payload : ""});
            dispatch({type:"create-collection",payload:inputFields.current})
        }else{
            dispatch({type:"fieldsError",payload : "None fields should be empty !!!"})
        }
        
    }

    return(
        <section className="create-collection" >
            <FormControl className="form-control" isInvalid={fieldsError}>
                <FormLabel htmlFor='name'>Name:</FormLabel>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  onChange={handleInputChange}
                />
                {nameError ? <FormErrorMessage className="err-msg" >{nameError}</FormErrorMessage> : ""}
                <FormLabel htmlFor='description'>Description:</FormLabel>
                <Input
                  id='description'
                  type='text'
                  name='description'
                  onChange={handleInputChange}  
                />
                <FormLabel htmlFor='url'>Image Url:</FormLabel>
                <Input
                  id='url'
                  name='imageUrl'
                  type='text'
                  onChange={handleInputChange}
                />
                {fieldsError ? <FormErrorMessage className="err-msg" >{fieldsError}</FormErrorMessage> : ""}
                <Button type='submit' isDisabled={fieldsError || nameError ? true : false} onClick={handleInputSubmit} id="submit" colorScheme='blue'>Save</Button>
            </FormControl>
        </section>
    )
}

function mapStateToProps(state){
    return {
        allCollection : state.allCollection,
        errors : state.errors,
    }
}

export default connect(mapStateToProps)(CreateCollection);