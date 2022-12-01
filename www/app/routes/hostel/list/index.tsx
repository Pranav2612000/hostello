import { Heading, Stack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from '@clerk/remix';
import { useEffect } from "react";
import { Grid, GridItem, Input } from "@chakra-ui/react";

export default function List() {
    const navigate = useNavigate();
    const { isSignedIn, signOut } = useAuth();

    useEffect(() => {
        if (!isSignedIn) {
            navigate("/sign-in");
        }
    }, [])
    return (
        <Stack pt={24} px={['4', '32']}>
            <Heading as='h1' size='3xl'>
                List a hostel
            </Heading>
            <Text>
                We're delighted you've disted to list your hostel with us. We just need a few more details
            </Text>

            <Grid templateColumns={'repeat(12, 1fr)'} pt={4} columnGap={24} rowGap={12}>
                <GridItem colSpan={12}>
                    <Text fontSize={'3xl'}>General Details</Text>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Name: </Text>
                    <Input size='md' placeholder='ABC Hostel'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Owner Name: </Text>
                    <Input size='md' placeholder='Bob'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Address 1: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Address 2: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>City: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>State: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Cover Image URL: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>

                <GridItem colSpan={12}>
                    <Text fontSize={'3xl'}>Inventory Details</Text>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Number of Rooms: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Occupancy per room: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Price per Room: </Text>
                    <Input size='md' placeholder='Bengaluru, India'/>
                </GridItem>
            </Grid>
        </Stack>
    )
}