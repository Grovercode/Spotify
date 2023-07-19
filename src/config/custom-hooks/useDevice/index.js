import { useEffect, useState } from "react";
import { DEVICE_TYPES } from "../../utils";

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 768) {
        setDeviceType(DEVICE_TYPES.MOBILE);
      } else if (innerWidth <= 1180) {
        setDeviceType(DEVICE_TYPES.TABLET);
      } else {
        setDeviceType(DEVICE_TYPES.DESKTOP);
      }
    };

    // Initial device type check on component mount
    handleResize();

    // Add event listener to update device type on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
