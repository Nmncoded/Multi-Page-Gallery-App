import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input
  } from '@chakra-ui/react';
import { connect } from 'react-redux';
import {useRef, useState} from 'react';
import { createCollection } from '../store/action';

function CreateCollection(props){
    let {allCollection,dispatch} = props;
    let [nameInput,setNameInput] = useState("");
    let [description,setDescription] = useState("");
    let [imageUrl,setImageUrl] = useState("");
    let [fieldsError, setFieldsError] = useState("");
    let [nameError, setNameError] = useState("");
    let [urlError,setUrlError] = useState("");

    const validateImageUrl = (url) => {
        let re = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
        return re.test(url);
    }

    const handleInputChange = ({target}) => {
        let {value,name} = target;

        if(nameInput && description && imageUrl){
            setFieldsError("")
        }

        if(name === "collectionName"){
            setNameInput(value);
            if( allCollection.length && (allCollection.some(collection => collection.collectionName === value))){
                setNameError("Name already exists !!!");
            }else{
                setNameError("");
            }
        }
        
        if(name === "imageUrl"){
            setImageUrl(value)
            if(validateImageUrl(value)){
                setUrlError("")
            }else{
                setUrlError("Enter valid image url including png|jpg|gif|svg|jpeg at the end !!!")
            }
        }
        if(name === "description"){
            setDescription(value);
        }

        
        
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        if(nameInput && description && imageUrl){
            setFieldsError("");
            let allPhotos = [];
            let obj = {
                collectionName : nameInput,
                description : description,
                allPhotos : allPhotos.concat(imageUrl),
            };
            dispatch(createCollection(obj))
            props.history.push("/")
        }else{
            setFieldsError("None fields should be empty !!!");
        }
        
    }

    return(
        <section className="create-collection" >
            <FormControl className="form-control" isInvalid={fieldsError}>
                <FormLabel htmlFor='name'>Name:</FormLabel>
                <Input
                  id='name'
                  name='collectionName'
                  type='text'
                  value={nameInput}
                  onChange={handleInputChange}
                />
                {nameError ? <p className="err-msg" >{nameError}</p> : ""}
                <FormLabel htmlFor='description'>Description:</FormLabel>
                <Input
                  id='description'
                  value={description}
                  type='text'
                  name='description'
                  onChange={handleInputChange}  
                />
                <FormLabel htmlFor='url'>Image Url:</FormLabel>
                <Input
                  id='url'
                  name='imageUrl'
                  value={imageUrl}
                  type='text'
                  onChange={handleInputChange}
                />
                {urlError ? <p className="err-msg" >{urlError}</p> : ""}
                {fieldsError ? <p className="err-msg" >{fieldsError}</p> : ""}
                <Button type='submit' isDisabled={fieldsError || nameError || urlError ? true : false} onClick={handleInputSubmit} id="submit" colorScheme='blue'>Save</Button>
            </FormControl>
        </section>
    )
}

function mapStateToProps(state){
    return {
        allCollection : state.allCollection,
    }
}

export default connect(mapStateToProps)(CreateCollection);