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
    <>
      <div className="PenghargaanWraper">
        <h1>
          {" "}
          <b>AWARDS</b>
        </h1>
      </div>
      <div className="Berita-Wrapper">
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
                    <div className="JumboContainer">
                      <div className="JumboKiri">
                        <img
                          src="https://www.equity.co.id/sites/default/files/awards/Equity%20Life%20Indonesia%20-%20Pemenang%20IPRA%202021%20Best%20Public%20Relations%20COVID-19%20Products.jpg"
                          alt=""
                        />
                      </div>
                      <div className="JumboKanan">
                        <h5 className="h1 display-3">
                          Infobank 21st Insurance Awards 2020 For Financial
                          Performance Full Year 2019 with Predicate Excellent
                        </h5>
                        <p className="lead">
                          This is a simple hero unit, a simple Jumbotron-style
                          component for calling extra attention to featured
                          content or information.
                        </p>
                        <hr className="my-2" />
                        <p>
                          It uses utility classes for typgraphy and spacing to
                          space content out within the larger container.
                        </p>
                        <p className="lead">
                          <MDBBtn color="primary">Learn More</MDBBtn>
                        </p>
                      </div>
                    </div>
                  </MDBJumbotron>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <MDBJumbotron>
                    <div className="JumboContainer">
                      <div className="JumboKiri">
                        <img
                          src="https://www.equity.co.id/sites/default/files/awards/Equity%20Life%20Indonesia%20Top%205%20Financial%20Performance%20of%20Indonesia%20Best%20Insurance%20Award%202020%20with%20Assets%201-5T.jpg"
                          alt=""
                        />
                      </div>
                      <div className="JumboKanan">
                        <h5 className="h1 display-3">
                          Top 5 Financial Performance of Indonesia Best
                          Insurance Award 2020 with Assets 1-5T
                        </h5>
                        <p className="lead">
                          This is a simple hero unit, a simple Jumbotron-style
                          component for calling extra attention to featured
                          content or information.
                        </p>
                        <hr className="my-2" />
                        <p>
                          It uses utility classes for typgraphy and spacing to
                          space content out within the larger container.
                        </p>
                        <p className="lead">
                          <MDBBtn color="primary">Learn More</MDBBtn>
                        </p>
                      </div>
                    </div>
                  </MDBJumbotron>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <MDBJumbotron>
                    <div className="JumboContainer">
                      <div className="JumboKiri">
                        <img
                          src="https://www.equity.co.id/sites/default/files/awards/Media-asuransi-award-2020---Equity-Life-Indonesia-Best-Life-Insurance.jpg"
                          alt=""
                        />
                      </div>
                      <div className="JumboKanan">
                        <h5 className="h1 display-3">
                          Media Asuransi Insurance Award 2020 - Best Life
                          Insurance 2020 Kelompok Ekuitas Rp250 Miliar - Rp500
                          Miliar
                        </h5>
                        <p className="lead">
                          This is a simple hero unit, a simple Jumbotron-style
                          component for calling extra attention to featured
                          content or information.
                        </p>
                        <hr className="my-2" />
                        <p>
                          It uses utility classes for typgraphy and spacing to
                          space content out within the larger container.
                        </p>
                        <p className="lead">
                          <MDBBtn color="primary">Learn More</MDBBtn>
                        </p>
                      </div>
                    </div>
                  </MDBJumbotron>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          {/* crausel Ennd */}
        </div>
        <div className="BeritaBawah">tes</div>
      </div>
    </>
  );
};
