import React, { useState, useEffect } from 'react';
import AddNewEvent from '../components/AddNewEvent';
import { useEventsContext } from '../services/EventService';
import { useNavigate } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import '../css/CreateEvent.css'
const CreateEvent = () => {
  const { dispatch } = useEventsContext();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const createNewEvent = (newEvent) => {
    if (isNumberOfPeopleValid(newEvent.numberOfPeople)) {
      dispatch({ type: 'ADD_EVENT', payload: {...newEvent, complete: false} });
      setFormSubmitted(true);
    }
  };

  const isNumberOfPeopleValid = (numberOfPeople) => {
    return numberOfPeople > 0;
  };

  useEffect(() => {
    let isMounted = true;

    if (formSubmitted) {
      if (isMounted) {
        navigate('/viewEvents');
      }
    }

    return () => {
      isMounted = false;
    };
  }, [formSubmitted, navigate]);

  return (
    <div className='create-event'>
      <Heading 
      color='white' 
      background=' hsl(10, 79%, 65%)' 
      m={100} 
      w='400px'
      display='grid'
      placeContent='center'
      borderRadius='1rem'
      p={2}
      >Create Event</Heading>
      <AddNewEvent createNewEvent={createNewEvent} isNumberOfPeopleValid={isNumberOfPeopleValid}/>
    </div>
  );
};

export default CreateEvent;
