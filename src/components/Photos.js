//This will be a class that renders photos.
//renderPhotos()
//renderNotFound()

import React, { Component } from 'react';


class Photos extends Component {


    renderNotFound=()=>{
        //if(no photos are found){render Not Found Page}
        return (<li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>);
    }

    render(){

      let data = this.props.photoInformation;
      
      //prevent double render
      if(typeof data==='string'){
        return false;
      }else{
        return(
            <div className="photo-container">
        <h2>Results</h2>
        <ul>
            { 
              data.map( (photo) => {
              return ( 
              <li key={photo.id}>
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
              </li>)
              })
            }
              
      
        
        {/* Not found */}
          {/* {this.renderNotFound} */}
        </ul>
      </div>
        )
    }}
}
export default Photos;