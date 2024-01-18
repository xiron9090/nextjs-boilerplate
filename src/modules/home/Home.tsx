"use client"

import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@/components/Container';
import {
  Team,
  Features,
  Hero,
  Partners,
  Process,
  Reviews,
  Work,
} from './components';


const Home = (): JSX.Element => (
    <>
      <Hero />
      <Box bgcolor="primary.main">
        <Container paddingX="0 !important" maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Container>
        <Process />
      </Container>
      <Container>
        <Work />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
      <Container>
        <Team />
      </Container>
    </>
  );

export default Home;
