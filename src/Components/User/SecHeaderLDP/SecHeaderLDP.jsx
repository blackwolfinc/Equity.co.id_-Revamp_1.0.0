import React from "react";
import "./SecHeaderLDP.scss";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdbreact";
export const SecHeaderLDP = () => {
  return (
    <div className="Header-Sec-Wrap">
      <div className="cardKiri">
        <div className="kiriCard">
          <div className="overlay">
            <span>
              <h1>
                <b>Agency</b>
              </h1>
            </span>
          </div>
        </div>
      </div>
      <div className="cardKanan">
        <div className="kananAtas">
          <div className="KananAtasKiri">
            {" "}
            <div className="overlay">
              <span>
                <h1>
                  <b>Retail Insurance</b>
                </h1>
              </span>
            </div>
          </div>
          <div className="KananAtasKanan">
            {" "}
            <div className="overlay">
              <span>
                <h1>
                  <b>Niche Market</b>
                </h1>
              </span>
            </div>
          </div>
        </div>
        <div className="kananBawah">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            sm="2"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <div className="overlay">
                    <span>
                      <h3>
                        <b>Employee Benefit</b>
                     
                      </h3>
                      <img
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          alt="First slide"
                        />
                    </span>
                  </div>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                <div className="overlay">
                    <span>
                      <h3>
                        <b>Bancassurance</b>
                      
                      </h3>
                      <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt="Second slide"
                  />
                    </span>
                  </div>
                  
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView> <div className="overlay">
                    <span>
                      <h3>
                        <b>Reed Me More</b>
                       
                      </h3>
                        <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                      alt="Third slide"
                    />
                    </span>
                  </div>
                  
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      </div>
    </div>
  );
};
