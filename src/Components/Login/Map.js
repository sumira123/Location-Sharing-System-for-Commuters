
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
 //import React, {PropTypes, Component} from 'react/addons';
 import React, {Component} from 'react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 7.0897558081883485,
      lng: 80.03113045364653

    },
    zoom: 100
  };
   

  render() {
    return (

      <div style={{ height: '100vh', width: '100%' }}>

         <h1> HOP & RIDE </h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9oR5CQ9uQ3rbVl0Fao1kWX0CxZl-0o9c" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={7.089702574168269}
            lng={80.03115191131788}
            text="My Marker"
          />


          
        </GoogleMapReact>

      </div>
    );
  }
}

export default SimpleMap;