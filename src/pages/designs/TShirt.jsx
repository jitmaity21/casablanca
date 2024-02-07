import { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';
import AppLayout from '../../layouts/AppLayout'

import iconFabric from '/public/icons/fabric.png';
import iconSleeveType from '/public/icons/sleeve-type.svg';
import iconPocket from '/public/icons/pocket.svg';
import iconPlacket from '/public/icons/placket.svg';
import iconBottomCut from '/public/icons/bottom-cut.svg';
import iconButton from '/public/icons/button.webp';
import brandLogo from '/public/icons/casablanca-india-logo.png';
import whiteFabric from '/public/icons/white-fabric.webp';
import blueFabric from '/public/icons/blue-fabric.webp';
import whiteTShirts from '/public/t-shirts/white.webp';
import skyBlueTShirts from '/public/t-shirts/sky-blue.webp';
import navyTShirts from '/public/t-shirts/blue.webp';
import vercel from '/public/vercel.svg';

import NavItem from '../../components/menu/NavItem'


function TShirt() {

  const [showFabricToolWindow, setFabricToolWindow] = useState(false);
  const [previewImage, setPreviewImage] = useState(whiteTShirts);
  const [fabricModified, setFabricModified] = useState(false);
  const [fabricThumb, setFabricThumb] = useState(whiteFabric);

  const toggleFabricToolWindow = () => {
    console.log('one');
    setFabricToolWindow(val => !val);
  };

  const fabrics = {
    "white" : {
      "thumb" : whiteFabric,
      "preview" : whiteTShirts
    },
    "navy" : {
      "thumb" : blueFabric,
      "preview" : navyTShirts
    },
    "blue" : {
      "thumb" : iconFabric,
      "preview" : skyBlueTShirts
    }
  }

  const sleeves = {
    "short" : {
      "thumb" : whiteFabric,
      "preview" : whiteTShirts
    },
    "long" : {
      "thumb" : blueFabric,
      "preview" : navyTShirts
    },
  }

  const toggleFabric = (fabric = null) => {
    if(fabric){
      setFabricModified(true);
      setFabricThumb(fabrics[fabric].thumb);
      setPreviewImage(fabrics[fabric].preview);
    }else{
      setFabricModified(false);
      setFabricThumb(fabrics.white.thumb);
      setPreviewImage(fabrics.white.preview);
    }
  };

  const resetFabric = () => {
      setFabricModified(false);
      setFabricThumb(fabrics.white.thumb);
      setPreviewImage(fabrics.white.preview);
  };

  const fabricToolWindow = useRef(null);
  const fabricToolWindowBtn = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showFabricToolWindow) return;
    function handleClick(event) {
      if(
          fabricToolWindow.current 
          && !fabricToolWindow.current.contains(event.target) 
          && fabricToolWindowBtn.current 
          && !fabricToolWindowBtn.current.contains(event.target)
        ){
          setFabricToolWindow(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showFabricToolWindow, fabricToolWindowBtn]);


  return (
    <>
      <Helmet>
        <title>T-Shirt - Tailor Store India</title>
        <meta name="description" content="T-Shirt - Casablanca Apparels PVT. LTD" />
      </Helmet>
      <AppLayout>
        <div className='design-page-wrapper'>
          <div className="design-viewport">
            <div className="design-canvas-wrap">
              <div className="design-canvas" style={{backgroundImage: `url(`+previewImage+`)`}}></div>
            </div>
          </div>
          <div className="design-ui">
            <div className="left-navigation">
              <div className="left-navigation-wrapper">
                <ul className="left-navigation-list">
                  <li className="left-navigation-list-item">
                    <NavItem itemName="Select Product" />
                  </li>
                  <li className="left-navigation-list-item" onClick={toggleFabricToolWindow}>
                    <NavItem itemName="Fabric" itemIcon={fabricThumb} itemRef={fabricToolWindowBtn} modified={fabricModified}/>
                  </li>
                  <li className="left-navigation-list-item">
                    <div className="left-navigation-list-item-block">
                      <img
                        src={iconSleeveType}
                        alt="SleeveType"
                        className="left-navigation-list-item-icon"
                      />
                      <span>Sleeve Type</span>
                      <div className="left-navigation-list-item-active"></div>
                    </div>
                  </li>
                  <li className="left-navigation-list-item">
                    <div className="left-navigation-list-item-block">
                      <img
                        src={iconPocket}
                        alt="pocket"
                        className="left-navigation-list-item-icon"
                      />
                      <span>Pocket</span>
                      <div className="left-navigation-list-item-active"></div>
                    </div>
                  </li>
                  <li className="left-navigation-list-item">
                    <div className="left-navigation-list-item-block">
                      <img
                        src={iconPlacket}
                        alt="placket"
                        className="left-navigation-list-item-icon"
                      />
                      <span>Placket</span>
                      <div className="left-navigation-list-item-active"></div>
                    </div>
                  </li>
                  <li className="left-navigation-list-item">
                    <div className="left-navigation-list-item-block">
                      <img
                        src={iconBottomCut}
                        alt="BottomCut"
                        className="left-navigation-list-item-icon"
                      />
                      <span>Bottom Cut</span>
                      <div className="left-navigation-list-item-active"></div>
                    </div>
                  </li>
                  <li className="left-navigation-list-item">
                    <div className="left-navigation-list-item-block">
                      <img
                        src={iconButton}
                        alt="Button"
                        className="left-navigation-list-item-icon"
                      />
                      <span>Button</span>
                      <div className="left-navigation-list-item-active"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="design-window">
              <div className="brand-logo">
                <img
                  src={brandLogo}
                  alt="Casablanca India"
                  />
              </div>
              {showFabricToolWindow ?
              <div className="tool-window tool-window-fabric" ref={fabricToolWindow}>
                <div className="tool-window-title">
                  <h2>Fabric</h2>
                  <span className="reset-tool-link" onClick={resetFabric}>RESET CHOICE</span>
                  <span className="close-tool-window" onClick={toggleFabricToolWindow}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </span>
                </div>
                <div className="fabrics-choice-list tool-choice-List">
                  <ul>
                    <li className="tool-choice-item" onClick={() => toggleFabric('white')}>
                      <img
                        src={whiteFabric}
                        alt="Fabric"
                        className="tool-choice-item-thumb"
                        data-name="white"
                      />
                      <div className="tool-choice-item-content">
                        <h3>Grindlays, white</h3>
                        <p>Pique, 100% Pima Cotton, 200 g/m²</p>
                      </div>
                      <div className="tool-choice-item-prices">
                        <div className="tool-choice-item-price">$59</div>
                        <button className="btn btn-border btn-small">Info</button>
                      </div>
                    </li>
                    <li className="tool-choice-item" onClick={() => toggleFabric('blue')}>
                      <img
                        src={iconFabric}
                        alt="Fabric"
                        className="tool-choice-item-thumb"
                      />
                      <div className="tool-choice-item-content">
                        <h3>Grindlays, navy</h3>
                        <p>Pique, 100% Pima Cotton, 200 g/m²</p>
                      </div>
                      <div className="tool-choice-item-prices">
                        <div className="tool-choice-item-price">$59</div>
                        <button className="btn btn-border btn-small">Info</button>
                      </div>
                    </li>
                    <li className="tool-choice-item" onClick={() => toggleFabric('navy')}>
                      <img
                        src={blueFabric}
                        alt="Fabric"
                        className="tool-choice-item-thumb"
                      />
                      <div className="tool-choice-item-content">
                        <h3>Heritance, sky blue melange</h3>
                        <p>Pique, 100% Pima Cotton, 200 g/m²</p>
                      </div>
                      <div className="tool-choice-item-prices">
                        <div className="tool-choice-item-price">$59</div>
                        <button className="btn btn-border btn-small">Info</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              : null}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}

export default TShirt