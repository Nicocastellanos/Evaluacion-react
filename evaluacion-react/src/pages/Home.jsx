import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box
    display= "flex"
    flexDirection= "column"
    justifyContent= "center"
    border='4px solid hsl(28, 10%, 53%)'
    w={600}
    h={355}
    mt={250}
    ml={600}
    alignItems= "center"
    borderRadius="1rem" >
      <img src="./src/images/event.png" alt="logo" width={100}/>
        <Heading fontSize='100px' p={4}>
          Evently
          </Heading>
        <Text fontSize={20} p={8}>Crea tus eventos y organiza tu empresa</Text> 
    </Box>
  )
}
