import { useToast,Box,Button } from '@chakra-ui/react';
import { GiCrossMark } from 'react-icons/gi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCollection } from '../store/action';

function CollectionUI(props){
    let {allCollection,dispatch} = props;
    const toast = useToast();

    const handleCollectionDelete = (id) => {
        dispatch(deleteCollection(id))
    }

    if(!allCollection.length) return <h1 className='no-collection' >No collection Added !!!</h1>
    return (
        <ul className='all-collections' >
            {
                allCollection.map((collection,index) => {
                    return (
                            
                        <li className='one-collection' key={index}>
                            <div className='delete-btn' >
                                <div className='info' >
                                    <h1>{collection.collectionName}</h1>
                                    <p>{collection.allPhotos.length + ` images`}</p>
                                </div>
                                <Button
                                  onClick={(event) =>
                                    {
                                        toast({
                                      position: 'bottom-left',
                                      render: () => (
                                        <Box color='white' p={1} bg='blue.500'>
                                          Collection Deleted !
                                        </Box>
                                      ),
                                    }); handleCollectionDelete(index)}
                                  }
                                >
                                  <GiCrossMark />
                                </Button>
                            </div>
                            <ul className='images-preview' >
                                {
                                    collection.allPhotos.map((photo,i) => {
                                        if(i >=3)return ;
                                        return (
                                            <Link key={i} className='img' to={`/all-images/${index}`} >
                                                <li  >
                                                    <img src={photo} alt={i} />
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                                  
                                  
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function mapStateToProps(state){
    return {
        allCollection : state.allCollection,
    }
}

export default connect(mapStateToProps)(CollectionUI)