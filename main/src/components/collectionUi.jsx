import { useToast,Box,Button } from '@chakra-ui/react';
import { GiCrossMark } from 'react-icons/gi';
import { connect } from 'react-redux';

function CollectionUI(props){
    let {allCollection,dispatch} = props;
    const toast = useToast();

    const handleCollectionDelete = (id) => {
        dispatch({type:"delete-collection",payload: id})
    }

    if(!allCollection.length) return <h1 className='no-collection' >No collection Added !!!</h1>
    return (
        <ul className='all-collections' >
            {
                allCollection.map((collection,index) => {
                    return (
                        <li key={index} className='one-collection'>
                            <div className='delete-btn' >
                                <Button
                                  onClick={() =>
                                    {toast({
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
                            <div className='collection-info' >
                                  <div className='img' >
                                      <img src={collection.allPhotos[0]} alt={collection.name} />
                                  </div>
                                  <div className='info' >
                                      <h1>{collection.name}</h1>
                                      <p>{collection.allPhotos.length + ` images`}</p>
                                  </div>
                            </div>
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