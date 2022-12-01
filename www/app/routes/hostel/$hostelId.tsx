import { Container, Grid, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
import clsx from "clsx";

const tabs = [
  {
    name: "Video",
    render: () => {
      return (
        <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
          <iframe src="https://player.vimeo.com/video/73221098" width="100%" height="460" frameBorder="0" allowFullScreen></iframe>
        </div>
      );
    }
  },
  {
    name: "Floor Plans",
    render: () => {
      return (
        <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
          <img src="assets/img/plan2.jpg" alt="" className="img-fluid"/>
        </div>
      );
    }
  },
  {
    name: "Ubication",
    render: () => {
      return (
        <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="460" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
      );
    }
  },
];
export default function HostelListing() {
  const [infoTabIndex, setInfoTabIndex] = useState<number>(0);
  return (
    <>
      <section className="intro-single">
        <Grid px={['4', '32']} templateColumns={'repeat(12, 1fr)'}>
          <GridItem colSpan={[12, 8]}>
            <div className="title-single-box">
              <h1 className="title-single">304 Blaster Up</h1>
              <span className="color-text-a">Chicago, IL 606543</span>
            </div>
          </GridItem>
          <GridItem colSpan={[12, 4]}>
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="property-grid.html">Properties</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  304 Blaster Up
                </li>
              </ol>
            </nav>
          </GridItem>
        </Grid>
      </section>{/*<!-- End Intro Single-->*/}

      {/*<!-- ======= Property Single ======= -->*/}
      <section className="property-single nav-arrow-b">
        <Stack px={['4', '32']}>
          <Grid templateColumns={'repeat(12, 1fr)'}>
            <GridItem colSpan={[12, 8]}>
              <div id="property-single-carousel" className="swiper">
                <div className="swiper-wrapper">
                  <div className="carousel-item-b swiper-slide">
                    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt=""/>
                  </div>
                  <div className="carousel-item-b swiper-slide">
                    <img src="assets/img/slide-2.jpg" alt=""/>
                  </div>
                </div>
              </div>
              <div className="property-single-carousel-pagination carousel-pagination"></div>
            </GridItem>
          </Grid>

          <Grid templateColumns={'repeat(12, 1fr)'} gap={8}>
            <GridItem colSpan={[12, 5, 4]}>
              <div className="property-price d-flex justify-content-center foo">
                <div className="card-header-c d-flex relative">
                  <div className="card-box-ico">
                    <span className="bi bi-cash">$</span>
                  </div>
                  <div className="card-title-c align-self-center absolute top-30 left-50">
                    <h5 className="title-c">15000</h5>
                  </div>
                </div>
              </div>
              <div className="property-summary">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box-d section-t4">
                      <h3 className="title-d">Quick Summary</h3>
                    </div>
                  </div>
                </div>
                <div className="summary-list">
                  <ul className="list">
                    <li className="d-flex justify-content-between">
                      <strong>Property ID:</strong>
                      <span>1134</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Location:</strong>
                      <span>Chicago, IL 606543</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Property Type:</strong>
                      <span>House</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Status:</strong>
                      <span>Sale</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Area:</strong>
                      <span>340m
                        <sup>2</sup>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Beds:</strong>
                      <span>4</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Baths:</strong>
                      <span>2</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Garage:</strong>
                      <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={[12, 7, 8]} className="section-md-t3">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box-d">
                    <h3 className="title-d">Property Description</h3>
                  </div>
                </div>
              </div>
              <div className="property-description">
                <p className="description color-text-a">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                  neque, auctor sit amet
                  aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                  Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                  nibh pulvinar quam id dui posuere blandit.
                </p>
                <p className="description color-text-a no-margin">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                  malesuada. Quisque velit nisi,
                  pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                </p>
              </div>
              <div className="row section-t3">
                <div className="col-sm-12">
                  <div className="title-box-d">
                    <h3 className="title-d">Amenities</h3>
                  </div>
                </div>
              </div>
              <div className="amenities-list color-text-a">
                <ul className="list-a no-margin">
                  <li>Balcony</li>
                  <li>Outdoor Kitchen</li>
                  <li>Cable Tv</li>
                  <li>Deck</li>
                  <li>Tennis Courts</li>
                  <li>Internet</li>
                  <li>Parking</li>
                  <li>Sun Room</li>
                  <li>Concrete Flooring</li>
                </ul>
              </div>
            </GridItem>
            <GridItem colSpan={[12, 10]} className="offset-md-1">
              <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                {tabs.map((tab, index) => {
                  return (
                    <li className="nav-item">
                      <a
                        className={clsx("nav-link", infoTabIndex === index && "active")}
                        id={`pills-${tab.name}-tab`}
                        data-bs-toggle="pill"
                        href={`#pills-${tab.name}`}
                        role="tab"
                        aria-controls={`pills-${tab.name}`}
                        aria-selected={infoTabIndex === index}
                        onClick={() => setInfoTabIndex(index)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {tabs[infoTabIndex].render()}
              </div>
            </GridItem>
          </Grid>
        </Stack>
      </section>{/*<!-- End Property Single-->*/}
    </>
  )
}