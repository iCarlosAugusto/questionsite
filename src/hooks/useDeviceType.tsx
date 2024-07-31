import { useState, useEffect } from 'react';

// Define an enum for device types
enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

// Utility function to get device type
const getDeviceType = (width: number): DeviceType => {
  if (width < 768) {
    return DeviceType.MOBILE;
  } else if (width >= 768 && width <= 1024) {
    return DeviceType.TABLET;
  } else {
    return DeviceType.DESKTOP;
  }
};

// Hook to detect device type
const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    if (typeof window !== 'undefined') {
      return getDeviceType(window.innerWidth);
    }
    return DeviceType.DESKTOP; // Default to desktop if window is not defined
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DeviceType, useDeviceType };
