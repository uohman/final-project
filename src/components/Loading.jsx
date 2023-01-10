/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import loadingCar from '../lotties/loading';

/* export const Loading = () => {
  return (
    <div>
      <Lottie animationData={loadingCar} loop={true} height={400} width={400} />
    </div>
  )
}; */

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingCar,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    isLoading && (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    )
  );
};