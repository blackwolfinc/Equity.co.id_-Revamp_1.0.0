import React from "react";
import "./BeritaLDP.scss";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
export const BeritaLDP = () => {
  return (
    <div className="Berita-Wrapper">
      <h1>Penghargaan Dan Berita</h1>
      <br />
      <div className="BeritaAtas">
        {/* crausel Start */}
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
          sm="2"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <MDBJumbotron>
                  <h2 className="h1 display-3">Hello, world! 1</h2>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <MDBBtn color="primary">Learn More</MDBBtn>
                  </p>
                </MDBJumbotron>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <MDBJumbotron>
                  <h2 className="h1 display-3">Hello, world! 2</h2>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <MDBBtn color="primary">Learn More</MDBBtn>
                  </p>
                </MDBJumbotron>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <MDBJumbotron>
                  <h2 className="h1 display-3">Hello, world! 3</h2>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <MDBBtn color="primary">Learn More</MDBBtn>
                  </p>
                </MDBJumbotron>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        {/* crausel Ennd */}
      </div>
      <div className="BeritaBawah">tes</div>
    </div>
  );
};
