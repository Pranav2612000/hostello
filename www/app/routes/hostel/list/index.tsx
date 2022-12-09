import { Heading, Stack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Grid, GridItem, Input } from "@chakra-ui/react";
import addHostel from "~/api/addHostel";
import { useAuth } from "@clerk/remix";
import FileBase64 from 'react-file-base64';

export default function List() {
    const navigate = useNavigate();
    const { isSignedIn, signOut } = useAuth();
    const [hostel, setHostel] = useState<any>({});

    const updateProperty = (property: any, value: any) => {
        setHostel({
            ...hostel,
            [property]: value
        })
    };

    useEffect(() => {
        if (!isSignedIn) {
            navigate("/sign-in");
        }
    }, [])

    const onClick = async () => {
        console.log({ hostel });
        const resp = await addHostel(hostel);
        alert("Hostel Added Successfully");
    };
    return (
        <Stack pt={24} px={['4', '32']}>
            <Heading as='h1' size='3xl'>
                List a hostel
            </Heading>
            <Text>
                We're delighted you've decided to list your hostel with us. We just need a few more details
            </Text>

            <Grid templateColumns={'repeat(12, 1fr)'} pt={4} columnGap={24} rowGap={12}>
                <GridItem colSpan={12}>
                    <Text fontSize={'3xl'}>General Details</Text>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Name: </Text>
                    <Input size='md' placeholder='ABC Hostel' onChange={(e) => updateProperty('hostelName', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Owner Name: </Text>
                    <Input size='md' placeholder='Bob' onChange={(e) => updateProperty('ownerName', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Description: </Text>
                    <Input size='md' placeholder='Bob' onChange={(e) => updateProperty('description', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Address 1: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('address1', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Address 2: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('address2', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>City: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('city', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>State: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('state', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Hostel Type</Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('type', e.target.value)}/>
                </GridItem>

                <br/>
                <GridItem colSpan={12}>
                    <Text fontSize={'3xl'}>Inventory Details</Text>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Number of Rooms: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('numberofrooms', parseInt(e.target.value))}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Occupancy per room: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('occupancyperroom', parseInt(e.target.value))}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Price per Room: </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('price', parseInt(e.target.value))}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Amenities (Comma seperated): </Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('amenities', e.target.value)}/>
                </GridItem>

                <br/>
                <GridItem colSpan={12}>
                    <Text fontSize={'3xl'}>Assets</Text>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Video: (Link)</Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('videoLink', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Maps: (Link)</Text>
                    <Input size='md' placeholder='Bengaluru, India' onChange={(e) => updateProperty('maps', e.target.value)}/>
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Cover Image: </Text>
                    <FileBase64 onDone={({base64}: any) => updateProperty('coverimg', base64)} />
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Room Photo:</Text>
                    <FileBase64 onDone={({base64}: any) => updateProperty('roomPhoto', base64)} />
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Bathroom Photo:</Text>
                    <FileBase64 onDone={({base64}: any) => updateProperty('bathroomPhoto', base64)} />
                </GridItem>
                <GridItem colSpan={6} flexDir={'row'} display={'flex'} alignItems={'center'}>
                    <Text width={'50%'}>Reception Photo:</Text>
                    <FileBase64 onDone={({base64}: any) => updateProperty('receptionPhoto', base64)} />
                </GridItem>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Button onClick={onClick}>
                List Hostel
            </Button>
        </Stack>
    )
}
// https://www.youtube.com/watch?v=y9j-BL5ocW8