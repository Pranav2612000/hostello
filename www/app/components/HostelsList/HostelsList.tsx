import { Grid, Text, Container, Button, Stack, GridItem, Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';
import { useState } from 'react';
import stays from './hostels.json';

const HostelsList = () => {
  const [location, setLocation] = useState<null | String>(null);
  const [guests, setGuests] = useState<number>(0);

    const filteredStays = stays.filter((stay) => (location === null || stay.city + ', ' + stay.country === location) && stay.maxGuests >= guests)
    const staysList = (
        <Stack width={'100%'} paddingX={'60px'}>
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
            {filteredStays.map((stay) => {
              return (
                <GridItem colSpan={[12,6,4]}>
                  <Card sx={{ border: 0, boxShadow: 0, background: 'unset', height: '100%' }}>
                    <CardHeader padding={0}>
                      <img src={stay.photo} alt={stay.title} width="100%" style={{ borderRadius: '16px', aspectRatio: '394/267', objectFit: 'cover' }} />
                    </CardHeader>
                    <CardBody sx={{ padding: 0, paddingTop: '0.5em' }}>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                          {stay.superHost && (
                            <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                              Super host
                            </Button>
                          )}
                          <Text variant="body2" as="span" sx={{ opacity: 0.7 }}>
                            {stay.type + (stay.beds ? ' · ' + stay.beds + ' beds' : '')}
                          </Text>
                        </Box>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <StarIcon color="secondary" />
                          <Text variant="body2" as="span">
                            {stay.rating}
                          </Text>
                        </Stack>
                      </Box>
    
                      <Text variant="h6" as="p">
                        {stay.title}
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
      {staysList}
    </>
  )
};
export default HostelsList;