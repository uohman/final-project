/* eslint-disable indent */
import React, { useState } from 'react';
import { MapillaryViewer } from 'react-mapillary';

export const StreetView = () => {
  const [visible, setVisible] = useState(true);
  const handleKeyDown = (event) => {
    if (event.key === 'h') {
      setVisible(!visible);
    }
  };
  return (
    <div
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="-1"
      style={{
        width: '20vw',
        height: '20vh'
      }}>
      {visible
        ? <MapillaryViewer
            clientId="QjI1NnU0aG5FZFZISE56U3R5aWN4Zzo3NTM1MjI5MmRjODZlMzc0"
            imageKey="085Gpl_xNxW1Lw2eeEG28w"
            filter={['==', 'userKey', '2PiRXqdqbY47WzG6CRzEIA']}
            onTiltChanged={(tilt) => console.log(`Tilt: ${tilt}`)}
            onFovChanged={(fov) => console.log(`FoV: ${fov}`)}
            onNodeChanged={(node) => console.log(node)}
            onBearingChanged={(bearing) => console.log(`Bearing: ${bearing}`)} />
        : <h1>Press the h key to show the viewer</h1>}
    </div>
  );
};