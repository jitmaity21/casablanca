import { useState, useRef } from "react";

const NavItem =  ({itemName, itemIcon = null, itemRef = null, modified=false}) => {

  return (
    <>
      <div className={modified ? 'left-navigation-list-item-block tool-item-modified' : 'left-navigation-list-item-block' } ref={itemRef}>
        {itemIcon &&
          <img
            src={itemIcon}
            alt="Fabric"
            className="left-navigation-list-item-icon"
          />
        }
        <span>{itemName}</span>
        <div className="left-navigation-list-item-active"></div>
      </div>
    </>
  );
}

export default NavItem;