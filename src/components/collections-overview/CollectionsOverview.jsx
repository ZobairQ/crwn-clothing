import React from 'react'
import { connect } from 'react-redux'
import './collections.overview.styles.scss';
import { createStructuredSelector } from "reselect";
import { getCollectionsForPreview} from '../../redux/shop/shop';
import PreviewCollection from "../../components/preview.collection/PreviewCollection";

export const CollectionsOverview = ({collections}) => {
    return (<div className='collections-overview'>
        {
          collections.map(({id, ...otherCollectionsProps}) => (
            <PreviewCollection key={id} {...otherCollectionsProps}/>
          ))
        }
          
        </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: getCollectionsForPreview
  })
  
  const mapDispatchToProps = {
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview)
