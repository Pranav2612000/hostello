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

const app = () => {
  return (
    <div className="intro hero">
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
    </div>
  );
};

export default app;
