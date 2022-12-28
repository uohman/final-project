import React from 'react';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import animationData from '../lotties/loading';

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
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