import React from "react";
import "./HeaderLDP.scss";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdbreact";
export const HeaderLDP = () => {
  return (
    <div className="Header-Container">
      <MDBRow>
        <MDBCol className="wraperkiri mb-5" lg="6" md="6">
          <div className="cardTitle pl-3">
            <h1>
              Temukan Solusi Perlindungan <b>TERBAIK</b> kami
            </h1>
          </div>
          <MDBCol lg="12" md="8" sm="1">
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
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/styles/slide_front__1024x440_/public/field/image/web%20banner%20TUTUP%20WALK%20IN-01.jpg?itok=faH3qnjw"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/pictures/Website.png"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/styles/slide_front__1024x440_/public/field/image/covid-19-care-desktop.jpg?itok=frDy_45f"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>

            <br/>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/styles/slide_front__1024x440_/public/field/image/web%20banner%20TUTUP%20WALK%20IN-01.jpg?itok=faH3qnjw"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/pictures/Website.png"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://www.equity.co.id/sites/default/files/styles/slide_front__1024x440_/public/field/image/covid-19-care-desktop.jpg?itok=frDy_45f"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
          {/* kedua */}
        </MDBCol>
        <MDBCol lg="8" md="0">
          <span></span>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
