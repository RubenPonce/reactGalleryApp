import React, { Component } from 'react';
import Axios from 'axios';
import './index.css';


//App Components
// import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import Photos from './components/Photos';
import Config from './components/Config';
class App extends Component {

  state = {
    photoInformation: 'urldata',
    id: 'id'
  };

  componentWillMount(){
    //default page
    Axios.get(this.handleUrl('galaxies','4'))
      .then(response => {
        console.log(response.data)
        this.setState({
          photoInformation: response.data.photos.photo
        })
      })

       
  }
  handleUrl(tag, picQuantity){
   return `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&per_page=${picQuantity}&format=json&nojsoncallback=1&api_key=`+Config
  }

  render() {
    console.log(this.state);
    console.log(this.state.photoInformation);
    console.log(this.state.id);
    return (
        <div className="container">

          <Search />
          <Nav />
          <Photos 
          photoInformation={this.state.photoInformation}
          handleUrl = {this.handleUrl}
          />
        </div>

    );
  }
}

export default App;
