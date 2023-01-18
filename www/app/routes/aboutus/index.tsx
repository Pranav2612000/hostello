import { Container, Grid, GridItem, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "@remix-run/react";
import hostello_png from "../../assets/images/Hostello_final.png";
import nsrcel_logo from "../../assets/images/Nsrcel_logo.png";


export default function HostelListing() {
  const [infoTabIndex, setInfoTabIndex] = useState<number>(0);
  const params = useParams();

  return (
    <>
      <section className="aboutus-single">
        <Grid px={['4', '32']} templateColumns={'repeat(12, 1fr)'}>
          <GridItem colSpan={[12, 8]}>
            <div className="title-single-box">
              <h1 className="title-single">About us</h1>
              <span className="color-text-a">A Pune based start-up founded by Srishti and Samrudhi in February 2022 and pre-incubated by NSRCEL | IIM Bangalore in September 2022.
              </span>
              <div className="image_aboutus">
                <img className="logo" src={hostello_png} alt="Hostello logo" />
                <img className="logo" src={nsrcel_logo} alt="Hostello logo" />
              </div>
              <span className="color-text-a">
                Hostello is a community-driven online space for listing and finding local hostels. We help you find hostels that suit your needs and connect with the hostel. Hostels, on the other hand, can easily fill up and manage their spaces.
              </span>
            </div>
          </GridItem>
        </Grid>
      </section>{/*<!-- End Intro Single-->*/}
    </>
  )
}