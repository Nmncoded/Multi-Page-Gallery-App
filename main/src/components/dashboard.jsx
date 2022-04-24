import { Button } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs'
// import { withRouter,Link } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CollectionUi from './collectionUi';

function Dashboard(props){
    return(
        <section className="dashboard flex-column-center-center" >
            <div className="create-collection-btn" >
                <Link to='/create-collection' >
                    <Button leftIcon={<BsPlusLg />} colorScheme='teal' variant='solid'>
                        Create collection
                    </Button>
                </Link>
            </div>
            <CollectionUi />
        </section>
    )
}

export default Dashboard;