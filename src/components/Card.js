import React, { Component } from 'react'


export default class Card extends Component {

  showInfoWindow(properties, coordinates, event) {
    let position = {
      lat: coordinates[1],
      lng: coordinates[0]
    }
    let showInfoWindow = true
    this.props.updateSelection(properties.name, position, showInfoWindow)
  }

  hideInfoWindow() {
    this.props.updateSelection(null, null, false)
  }

  render() {
    const {photo, properties, geometry} = this.props.data

    return (
      <div
        className="card-container"
        onMouseEnter={this.showInfoWindow.bind(this, properties, geometry.coordinates)}
        onMouseLeave={this.hideInfoWindow.bind(this)}>
        <div className="card">
          <div className="photo-container">
            <img src={"/photos/" + photo} alt={properties.name} className="photo" />
          </div>
          <div className="details-container">
            <div className="name">{ properties.name }</div>
            <div className="range">{ properties.range }</div>
            <div className="details">
              <ul>
                <li><strong>Elevation</strong> { properties.elevation[0].toLocaleString() } ft, { properties.elevation[1].toLocaleString() } m</li>
                <li><strong>Prominence</strong> { properties.prominence[0].toLocaleString() } ft, { properties.prominence[1].toLocaleString() } m</li>
                <li><strong>Isolation</strong> { properties.isolation[0].toLocaleString() } mi, { properties.isolation[1].toLocaleString() } km</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
