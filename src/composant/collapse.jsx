import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content, isCollapsed, toggleCollapse }) => {
  const renderChevron = (isOpen) => {
    return (
      <FontAwesomeIcon 
        icon={isOpen ? faChevronDown : faChevronUp} 
        className={`chevron-icon ${isOpen ? "rotate" : ""}`} 
      />  
    );
  }

  return (
    <div className="collapse-content">
      <button className="collapse" onClick={toggleCollapse}>
        {title} 
        {renderChevron(isCollapsed)} 
      </button>
      {isCollapsed && (
        <div className="collapse-description">
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;
