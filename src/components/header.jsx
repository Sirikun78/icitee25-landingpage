
import React, { useState, useEffect } from 'react';
export const Header = (props) => {
  const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // If the window width is less than or equal to 768px, it's considered mobile
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Run the resize handler initially to check the screen size on load
  
      return () => window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    }, []);

  return (
    <header id="header">
      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className={`col-md-8 col-md-offset-2 intro-center ${isMobile ? 's-intro-text' : 'l-intro-text'}`}>
                <div className="iciteelogo">
                    <div className="portfolio-item">
                      <div className="hover-bg">
                        {" "}
                        <a href={" "} title={" "} data-lightbox-gallery="gallery1">
                          <div className="">
                            <h4>{" "}</h4>
                          </div>
                          <img src={"../img/iciteelogo.png"} className={`${isMobile ? 'mobile-img-responsive' : 'img-responsive'}`} alt={" "} />{" "}
                        </a>{" "}
                      </div>
                    </div>
                </div>
                <div style={{marginBottom: "40px"}}>
                  <div className={`${isMobile ? 'mobile-typotitle' : 'typotitle'}`}>{props.data ? props.data.time : "Loading"}</div>
                </div>
                <a
                  href={"../pdf/A4-21x29.7_ICITEE2025_CFP_03-3.pdf"}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  CALL FOR PAPERS
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blur"></div>
    </header>
  );
};
