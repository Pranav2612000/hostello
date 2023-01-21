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
import logo from '../../assets/icons/logo.svg';

const app = () => {
  return (
    <div className="intro hero">
      <Center h={'100%'}>
            <Stack alignItems={'center'}>
                <Wrapper>
                <img src={logo} width="400px" style={{ borderRadius: '25px' }}/>
                  <Text fontSize={'4xl'} color={'hostelloRed.600'}>
                    Find your perfect space
                  </Text>
                </Wrapper>
                <Button
                  backgroundColor={'hostelloRed.500'}
                  maxWidth={'-webkit-fit-content'}
                  onClick={() => window.scroll({ top: 800, behavior: 'smooth'})}
                >
                    Explore Now
                </Button>
            </Stack>
        </Center>
    </div>
  );
};

export default app;
