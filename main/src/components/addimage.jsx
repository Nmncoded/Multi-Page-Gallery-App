import { useState } from "react";
import { connect } from "react-redux";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input
  } from '@chakra-ui/react';

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
        setImageUrl(value);
        if(validateImageUrl(imageUrl)){
           setError("")
        }else{
            setError("Enter valid image url !!!")
        }

    }
    const handleInputSubmit = () => {
        dispatch({type:"add-image",payload : [imageUrl,+id]});
            props.history.push(`/all-images/${id}`)
    }
    return (
        <section className="add-image" >
            <FormControl className="form-control" isInvalid={error}>
            <FormLabel htmlFor='image'>Add Image:</FormLabel>
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