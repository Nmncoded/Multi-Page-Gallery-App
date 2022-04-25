import { connect } from "react-redux";
import { Button, useToast, Box } from '@chakra-ui/react';
import { GiCrossMark } from 'react-icons/gi';
import { BsArrowLeft } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function AllImages(props){
    let {dispatch} = props;
    let {id} = props.match.params;
    let collection = props.allCollection[id];
    console.log(id,collection);
    const toast = useToast();

    const handleImageDelete = (collectionID,imageID) => {
        console.log("image dlte");
        dispatch({type:"delete-image",payload: [+collectionID,imageID]})
    }
    return(
        <section className="all-images-ui" >
            <header className="header" >
                <div>
                <h1>{collection.collectionName}</h1>
                <p>{collection.description}</p>
                </div>
                <div>
                    <Link to="/" >
                        <Button leftIcon={<BsArrowLeft />} colorScheme='pink' variant='solid'>
                          Back
                        </Button>
                    </Link>
                </div>
            </header>
            <div className="add-image" >
                <Link to={`/add-image/${id}`} >
                    <Button leftIcon={<MdAdd />} colorScheme='pink' variant='solid'>
                      Add image
                    </Button>
                </Link>
            </div>
            <ul className="all-images" >
                {
                    collection.allPhotos.map((image,index) => {
                        return (
                            <li className='one-image' key={index} >
                                {
                                    collection.allPhotos.length > 1 ?
                                <div className='delete-btn' >
                                    <Button
                                      onClick={() =>
                                        {toast({
                                          position: 'bottom-left',
                                          render: () => (
                                            <Box color='white' p={1} bg='blue.500'>
                                              Image Deleted !
                                            </Box>
                                          ),
                                        }); handleImageDelete(id,index)}
                                      }
                                    >
                                      <GiCrossMark />
                                    </Button>
                                </div> : ""
                                } 
                                <div className='img' >
                                      <img src={image} alt={index} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

function mapStateToProps(state){
    return{
        allCollection : state.allCollection,
    }
}

export default connect(mapStateToProps)(AllImages)