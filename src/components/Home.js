import React, { Component } from 'react';
import Carousel from './home/carousel/Carousel';
import NavBar from './NavBar';
//import "../assets/css/home.css"
import Productos from './productos';
import Navbar from './statics/Navbar';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {

    return (
<div>


  <div >
    <Carousel/>
  </div>

{/*

  <div> 
    <Productos/>
  </div> 
  */}
</div>
    );
  }
}

export default Home;