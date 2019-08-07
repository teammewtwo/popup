import React from 'react';

import image from '../../Assets/covorphoto.jpg';
import { Button } from 'reactstrap';
import 'tachyons'

const HeaderImage = (props) => (
  <div className="headerimage tc">
    <img id='headerimage'src={image}></img>
    <Button id='createevent' className="tc" onClick={props.showCreateEventBox} color="primary">Create an Event</Button>;
  </div> 
)

export default HeaderImage;