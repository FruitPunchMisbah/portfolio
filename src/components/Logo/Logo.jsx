import React, { useRef, useEffect } from "react";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import "./Logo.scss";
import gsap from "gsap";

const Logo = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const logoRef = useRef();

  const logoClassNames = `logo${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!logoRef.current) return;

    if (isBeforeZooming) {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  return (
    <>
      <div ref={logoRef} className={logoClassNames}>
        DD
      </div>
    </>
  );
};

export default Logo;
