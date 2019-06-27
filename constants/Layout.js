import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const screen = Dimensions.get('screen');
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

// export const isPortrait = width > height;
export const isSmallDevice = width < 375;
export const window = { width, height }

export function useDeviceLayout() { 
  isPortrait = ({ width, height }) => height >= width;
  isLandscape = ({ width, height }) => width >= height;

  const [orientation, setOrientation] = useState({
    portrait: isPortrait(screen),
    landscape: isLandscape(screen)
  });

  handleOrientationChange = ({ screen }) => {
    setOrientation({
      portrait: isPortrait(screen),
      landscape: isLandscape(screen)
    });
  };

  useEffect(
    () => {
      Dimensions.addEventListener('change', handleOrientationChange);

      return () => {
        Dimensions.removeEventListener('change', handleOrientationChange);
      };
    },
    [orientation.portrait, orientation.landscape]
  );

  return deviceOrientation;
}
