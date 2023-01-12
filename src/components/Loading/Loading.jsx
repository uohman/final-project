/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Lottie from 'lottie-react';
import loadingCar from 'lotties/loading';

export const Loading = () => {
  return (
    <div>
      <Lottie animationData={loadingCar} loop={true} />
    </div>

  )
};