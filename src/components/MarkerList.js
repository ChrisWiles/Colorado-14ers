import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps"

export default class MarkerList extends Component {

  constructor(props, context) {
  	super(props, context)
    this.state = {
      defaultCenter: {
        lat: 39.113014,
        lng: -105.358887
      },
      windowPosition: null,
      showInfoWindow: false,
      current_name: ''
    }
	}

  componentWillReceiveProps() {
    const {position, showInfoWindow, key} = this.props.currentSelections
    this.setState({
      windowPosition: position,
      current_name: key,
      showInfoWindow
    })
  }

  markers(mountains) {
    return mountains.map((row, key) => (
      <Marker
        position={{lat: row.geometry.coordinates[1], lng: row.geometry.coordinates[0]}}
        key={row.properties.name}
        onClick={this.toggleInfoWindow.bind(this, row.properties.name)}
      >
      </Marker>
    ))
  }


	toggleInfoWindow(name, loc) {

		if (loc == null) {
		  this.setState({ windowPosition: null })
		  return
		}
		let markerLoc = {
      lat: loc.latLng.lat(),
      lng: loc.latLng.lng()
    }
		this.setState({
      current_name: name,
      windowPosition: markerLoc,
      showInfoWindow: true
    })
	}

	render() {
    const {mountains} = this.props
    const {windowPosition,  current_name, defaultCenter, showInfoWindow} = this.state

		return (
		  <section style={{height: "100%", width: "40%"}}>
		    <GoogleMapLoader
		      containerElement={<div style={{height: "100%"}}/>}
		      googleMapElement={
		        <GoogleMap
		          defaultZoom={7}
		          defaultCenter={defaultCenter}
		        >
            {this.markers(mountains)}

	            {
	              showInfoWindow &&
	              <InfoWindow
	                position={windowPosition}
	                onCloseclick={(e) => { this.setState({ showInfoWindow: false }) }}
	                options={{pixelOffset: new window.google.maps.Size(0,-30)}}
	                >
	              	{current_name}
	              </InfoWindow>
	            }
		        </GoogleMap>
		      }
		    />
		  </section>
		)
	}
}
