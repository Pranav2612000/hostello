import { Grid, Text, Container, Button, Stack, GridItem, Box, Card, CardBody, CardHeader, Tab, Tabs, TabList, Heading } from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import stays from './hostels.json';
import getHostelsByCity from '~/api/getHostelsByCity';
import getCities from '~/api/getCities';

const HostelsList = () => {
  const [location, setLocation] = useState<null | String>(null);
  const [loadingCities, setLoadingCities] = useState<boolean>(true);
  const [loadingHotels, setLoadingHotels] = useState<boolean>(true);
  const [guests, setGuests] = useState<number>(0);
  const [hostels, setHostels] = useState<any>([]);
  const navigate = useNavigate()
  const [cities, setCities] = useState<string[]>([]);
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getCities();
      setCities(cities.city);
      setCity(cities.city[0]); // Load the first city by default
      setLoadingCities(false);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchHostels = async () => {
      setLoadingHotels(true);
      let hostels = await getHostelsByCity(city);
      console.log({hostels});
      setHostels(hostels ?? []);
      setLoadingHotels(false);
    };
    fetchHostels();
  }, [city]);

    const filteredStays = hostels;
    const staysList = (
        <Stack width={'100%'} paddingX={['20px', '60px']}>
          <Grid templateColumns={'repeat(12, 1fr)'} gap={8} paddingY={2}>
            <GridItem colSpan={12}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
                <Text variant="h5" as="h2" sx={{ fontWeight: 'bold' }}>
                  {'All stays'}
                </Text>
    
                <Text variant="body2" as="span">
                  {filteredStays.length + ' stay' + (filteredStays.length !== 1 ? 's' : '')}
                </Text>
              </Box>
            </GridItem>
            {filteredStays.map((stay:any, index:number) => {
              return (
                <GridItem colSpan={[12,6,4]}>
                  <Card sx={{ border: 0, boxShadow: 0, background: 'unset', height: '100%' }} onClick={() => navigate(`/hostel/${stay.id}`)} maxWidth={[ '256px', 'unset']}>
                    <CardHeader padding={0} maxWidth={[ '256px', 'unset']}>
                      <img src={stays[index % 15].photo} alt={stay.hostelName} width="100%" style={{ borderRadius: '16px', aspectRatio: '394/267', objectFit: 'cover' }} />
                    </CardHeader>
                    <CardBody sx={{ padding: 0, paddingTop: '0.5em' }}>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                          <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                            ₹ {stay.price}
                          </Button>
                          <Text variant="body2" as="span" sx={{ opacity: 0.7 }}>
                            {stay.numberofrooms * stay.occupancyperroom} beds
                          </Text>
                        </Box>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <StarIcon color="secondary" />
                          <Text variant="body2" as="span">
                            {stays[index].rating}
                          </Text>
                        </Stack>
                      </Box>
    
                      <Text variant="h6" as="p">
                        {stay.hostelName}
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
              )
            })}
          </Grid>
        </Stack>
      )
  return (
    <>
      <Heading as='h2' size='3xl'>
        Cities
      </Heading>
      {loadingCities && <Text color='tomato'>Loading...</Text>}
      {!loadingCities && (
        <Tabs onChange={(index) => setCity(cities[index])} colorScheme="gray" bg="darkgray">
          <TabList>
            {cities.map(city => {
              return (
                <Tab>{city.toUpperCase()}</Tab>
              )
            })}
          </TabList>
        </Tabs>
      )}
      {loadingHotels && <Text fontSize='25px' color='tomato' marginBottom={20}>Loading...</Text>}
      {!loadingHotels && staysList}
    </>
  )
};
export default HostelsList;
