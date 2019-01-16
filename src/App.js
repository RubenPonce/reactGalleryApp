import React, { Component } from 'react';
import Axios from 'axios';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


//App Components
// import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import Photos from './components/Photos';
import Config from './components/Config';
class App extends Component {

  state = {
    photoInformation: '',
    id: 'id'
  };

changePhotoData=(searchParam, pageLength)=>{
  Axios.get(this.handleUrl(searchParam,pageLength))
  .then(response => {
    console.log(response.data)
    this.setState({
      photoInformation: response.data.photos.photo
    })
  })
}

  componentWillMount(){
    //default page
    this.changePhotoData('galaxies','4')

       
  }
  handleUrl(tag, picQuantity){
   return `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&per_page=${picQuantity}&format=json&nojsoncallback=1&api_key=`+Config
  }

  render() {
    console.log(this.state);
    console.log(this.state.photoInformation);
    console.log(this.state.id);
    return (
      <BrowserRouter>
        <div className="container">
        <Route path="/search" component={Search}/>
          <Search changePhotoData = {this.changePhotoData} />
          <Nav />
          <Photos 
          photoInformation={this.state.photoInformation}
          changePhotoData = {this.changePhotoData}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
