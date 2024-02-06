import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp} from '@fortawesome/free-solid-svg-icons'


const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-button" onClick={scrollToTop}>
      {/* Contenido del botón flotante */}
      <button className="scroll-to-top-btn" ><FontAwesomeIcon icon={faCircleUp} size="2x" /></button>
    </div>
  );
};

export default FloatingButton;
