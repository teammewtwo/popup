import React from 'react';
import image from '../../Assets/covorphoto.jpg';
import { Button } from 'reactstrap';
<<<<<<< HEAD:client/LandingPage/Components/HeaderImage.jsx
import 'tachyons'
=======

>>>>>>> 4e04f901ee6513f9e6020947241964d5109f45de:client/Components/LandingPageCoverPhoto/HeaderImage.jsx

const HeaderImage = (props) => (
  <div className="headerimage tc">
    <img id='headerimage'src={image}></img>
    <Button id='createevent' className="tc" onClick={props.showCreateEventBox} color="primary">Create an Event</Button>;
  </div> 
)

export default HeaderImage;