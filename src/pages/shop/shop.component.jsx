import React from "react";
import  { Route } from 'react-router-dom'

import CollectionOverview from "../../Components/collections-overview/collections-overview.component.jsx";
import CollectionPage from '../collection/collection.component'

import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions.js'

import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

  class  Shop extends React.Component {

    unsubscribeFromSnapShot = null;

    componentDidMount(){

      const {updateCollections} = this.props;

      const collectionRef = firestore.collection('collections');
      collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
         })
    }

    render(){
      const {match} = this.props;
      return (
        <div>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
      );
    }
  } 

const mapDispatchToProps = dispatch  =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(Shop);
