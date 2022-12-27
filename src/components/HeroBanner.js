import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }}
        position="relative"
        p="20px"
    >
        <Typography 
            color="#f5429e"
            fontWeight="600"
            fontSize="26px">
                Fitness Center
        </Typography>
        <Typography
            fontWeight={700}
            sx={{
                fontSize: {
                    lg: '44px',
                    xs: '40px'
                }
            }}
        >
            Run, Sweat <br /> and Repeat
        </Typography>
        <Typography
            fontSize= "22px"
            lineHeight="35px"
            mb={4}
        >
            Check out the most effective exercises for your body
        </Typography>
        <Button 
            variant="contained"
            color="error"
            href="#exercises"
            sx={{ 
                backgroundColor: '#f5429e',
                padding: '10px'
            }}
        >
            Explore Exercises
        </Button>
        <Typography
            fontWeight={600}
            color="#f5429e"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'},
            }}
            mb="23px"
            mt="30px"
            fontSize="200px"
        >
            Exercise
        </Typography>
        <img 
            src={HeroBannerImage} 
            alt="banner" 
            className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner;