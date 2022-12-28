import React, { Component } from 'react';
import { Viewer } from 'mapillary-js';
// import env from 'react-dotenv';

class ViewerComponent extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.viewer = new Viewer({
      accessToken: this.props.accessToken,
      container: this.containerRef.current,
      imageId: this.props.imageId
    });
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.remove();
    }
  }

  render() {
    return <div ref={this.containerRef} style={this.props.style} />;
  }
}

export const Mapillary = (props) => {
  return (
    <ViewerComponent
      accessToken="MAPILLARY_ACCESS_TOKEN"
      imageId={props.imageId}
      style={{ width: props.width, height: props.height }} />
  );
}
