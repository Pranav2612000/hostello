import React from "react";
// JSX
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  MenuNav,
  Overlay
} from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";

// Images
//const hallstatt = "https://i.imgur.com/Yszno5e.jpg";
const hallstatt = "https://images.unsplash.com/photo-1667470928088-57bfc3f28cf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80";
const poolTable = "https://images.unsplash.com/photo-1661242686756-de9bdeb69ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
const windowView = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80";
const hvitserkur = "https://i.imgur.com/ZBzbir7.jpg";
const jacksonville = "https://i.imgur.com/xpeJkkR.jpg";
const moraineLake = "https://i.imgur.com/0NAc45h.jpg";

const app = () => {
  return (
    <HeroSlider
    height={"100vh"}
    autoplay
    controller={{
      initialSlide: 1,
      slidingDuration: 500,
      slidingDelay: 100,
      onSliding: (nextSlide) =>
        console.debug("onSliding(nextSlide): ", nextSlide),
      onBeforeSliding: (previousSlide, nextSlide) =>
        console.debug(
          "onBeforeSliding(previousSlide, nextSlide): ",
          previousSlide,
          nextSlide
        ),
      onAfterSliding: (nextSlide) =>
        console.debug("onAfterSliding(nextSlide): ", nextSlide)
    }}
  >
    <Overlay>
        <Center h={'100%'}>
            <Stack alignItems={'center'}>
                <Wrapper>
                    <Heading fontSize={'9xl'} color={'hostelloRed.700'}>Hostello</Heading>
                    <Text fontSize={'4xl'} color={'hostelloRed.600'}>
                        Hostel finding made easy
                    </Text>
                </Wrapper>
                <Button backgroundColor={'hostelloRed.500'} maxWidth={'-webkit-fit-content'}>
                    Explore Now
                </Button>
            </Stack>
        </Center>
    </Overlay>

    <Slide
      label="Giau Pass - Italy"
      background={{
        backgroundImageSrc: hallstatt,
        backgroundAnimation: "zoom"
      }}
    />

    <Slide
      label="Bogliasco - Italy"
      background={{
        backgroundImageSrc: poolTable,
        backgroundAnimation: "zoom"
      }}
    />

    <Slide
      label="County Clare - Ireland"
      background={{
        backgroundImageSrc: windowView 
      }}
    />

    {/*
    <Slide
      shouldRenderMask
      label="Crater Rock, OR - United States"
      background={{
        backgroundImageSrc: craterRock
      }}
    />
    */}
  </HeroSlider>
  );
};

export default app;
