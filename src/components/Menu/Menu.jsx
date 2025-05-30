import "./Menu.scss";
import { NavLink } from "react-router";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Menu = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();

  const menuRef = useRef();

  const buttonClassNames = `nav-button${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!menuRef.current) return;

    if (isBeforeZooming) {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  return
}
      

export default Menu;
