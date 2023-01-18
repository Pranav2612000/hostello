import { Button, Container, Grid, GridItem, Stack, Table, TableContainer, Tbody, Td, Th, Thead } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import getByHostelId from "~/api/getByHostelId";
import { useParams } from "@remix-run/react";
import { useUser } from '@clerk/remix';
import sendHostelInfo from "~/api/sendHostelInfo";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


export default function HostelListing() {
  const [infoTabIndex, setInfoTabIndex] = useState<number>(0);
  const [hostel, setHostel] = useState<any>({});
  const [imgs, setImgs] = useState<any>([]);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState<boolean>(false);
  const params = useParams();
  const id = params.hostelId;
  const { user } = useUser();
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((imgIndex) => (imgIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const getData = async () => {
      const hostel = await getByHostelId(id);
      setHostel(hostel);
    }
    getData();
  }, []);

  useEffect(() => {
    setImgs([ hostel.coverimg, hostel.bathroomPhoto, hostel.ReceptionPhoto, hostel.roomPhoto]);
  }, [hostel])


  const tabs = [
    {
      name: "Video",
      render: () => {
        return (
          <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
            <iframe src={hostel.videoLink} width="100%" height="460" frameBorder="0" allowFullScreen></iframe>
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
    // {
    //   name: "Ubication",
    //   render: () => {
    //     return (
    //       <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
    //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="460" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    //       </div>
    //     );
    //   }
    // },
  ];

  const onButtonClicked = () => {
    try {
      sendHostelInfo({
        firstName: user?.firstName,
        lastName: user?.lastName,
        hostelId: id,
        email: user?.emailAddresses[0].emailAddress
      });
      alert("You will receive an email with hostel details soon");
    } catch (err) {
      console.log(err);
      alert("An error occured! Please try again in some time");
    }
  }

  return (
    <>
      <Modal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pricing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            Choose your payment plan 
            <TableContainer>
              <Table size="lg">
                <Thead>
                  <Th>Monthly</Th>
                  <Th>Annually</Th>
                </Thead>
                <Tbody>
                  <Td>{hostel.price}</Td>
                  <Td>{hostel.price * 12}</Td>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' variant='ghost' onClick={onButtonClicked}>I'm interested</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <section className="intro-single">
        <Grid px={['4', '32']} templateColumns={'repeat(12, 1fr)'}>
          <GridItem colSpan={[12, 8]}>
            <div className="title-single-box">
              <h1 className="title-single">{hostel.hostelName}</h1>
              <span className="color-text-a">{hostel.address1}</span>
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
                  {hostel.address1}
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
                    <img src={imgs[imgIndex]} alt=""/>
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
                  <Button colorScheme='red' onClick={() => setIsPricingModalOpen(true)}>Book Now!</Button>
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
                    {/*
                    <li className="d-flex justify-content-between">
                      <strong>Property ID:</strong>
                      <span>1134</span>
                    </li>
                    */}
                    <li className="d-flex justify-content-between">
                      <strong>Location:</strong>
                      <span>{hostel.address2}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong>Property Type:</strong>
                      <span>{hostel.type}</span>
                    </li>
                    {/*
                    <li className="d-flex justify-content-between">
                      <strong>Status:</strong>
                      <span>Sale</span>
                    </li>
                    */}
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
                  <p dangerouslySetInnerHTML={ {__html: hostel.description} }></p>
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
                  {(hostel.amenities ? hostel.amenities : '').split(", ").map((amenity:any) => {
                    return (
                      <li>{amenity}</li>
                    )
                  })}
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
      <section className="bottom-btn-container">
        <button onClick={onButtonClicked}>
          I'm interested
        </button>
      </section>
    </>
  )
}