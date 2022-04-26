import { useState } from "react";
import { connect } from "react-redux";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input
  } from '@chakra-ui/react';
  import { addImage } from "../store/action";

function AddImage(props){
    let [error,setError] = useState("");
    let [imageUrl,setImageUrl] = useState(" ");
    let {dispatch} = props;
    let {id} = props.match.params;
    let collection = props.allCollection[id];

    const validateImageUrl = (url) => {
        let re = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
        return re.test(url);
    }

    const handleInputChange = ({target}) => {
        let {value,name} = target;
        
        if(validateImageUrl(value)){
           setError("")
        }else{
            setError("Enter valid image url including png|jpg|gif|svg|jpeg at the end !!!")
        }
        setImageUrl(value);
    }
    const handleInputSubmit = (event) => {
        event.preventDefault();
        dispatch(addImage([imageUrl,+id]));
            props.history.push(`/all-images/${id}`)
    }
    return (
        <section className="add-image" >
            <FormControl className="form-control" isInvalid={error}>
            <FormLabel htmlFor='image'>Add Image Url:</FormLabel>
                <Input
                  id='image'
                  name='imageUrl'
                  type='text'
                  value={imageUrl}
                  onChange={handleInputChange}
                />
                {error ? <p className="err-msg" >{error}</p> : ""}
                <Button type='submit' isDisabled={error || !imageUrl ? true : false} onClick={handleInputSubmit} id="submit" colorScheme='blue'>Save</Button>
                
            </FormControl>
        </section>
    )
}

function mapStateToProps(state){
    
    return {
        allCollection : state.allCollection,
    }
}

export default connect(mapStateToProps)(AddImage)