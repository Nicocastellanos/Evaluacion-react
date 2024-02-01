import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/CreateEvent.css'
import { Button } from '@chakra-ui/react';

export default function AddNewEvent({ createNewEvent, isNumberOfPeopleValid }) {
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    place: '',
    numberOfPeople: 0,
  });

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (newEvent.numberOfPeople === 0) {
      setErrorMessage('La cantidad de participantes no puede ser 0');
    } else {
      setErrorMessage('');
    }
  }, [newEvent.numberOfPeople]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNumberOfPeopleValid(newEvent.numberOfPeople)) {
      createNewEvent({ ...newEvent, id: uuidv4() });
      // Restablece el formulario
      setNewEvent({
        name: '',
        date: '',
        place: '',
        numberOfPeople: 0,
      });
    }
  };
  return (
  <>
    <form onSubmit={handleSubmit} className='form'>
      <label className='label'>
        Nombre del que realiza la reserva:
        <input
          type="text"
          placeholder='Add your name'
          value={newEvent.name}
          onChange={handleInputChange}
          name="name"
          className='input'
        />
      </label>
      <label className='label'>
        Añade el dia del evento:
        <input
          type="date"
          placeholder='Add the date'
          value={newEvent.date}
          onChange={handleInputChange}
          name="date"
          className='input'
        />
      </label>
      <label className='label'>
        Añade el lugar del evento:
        <input
          type="text"
          placeholder='Add the place'
          value={newEvent.place}
          onChange={handleInputChange}
          name="place"
          className='input'
        />
      </label>
      <label className='label'>
        Añade el numero de personas que asistiran:
        <input
          type="number"
          placeholder='Add the number of people'
          value={newEvent.numberOfPeople}
          onChange={handleInputChange}
          name="numberOfPeople"
          className='input'
        />
      </label>
      <Button type="submit" 
        p={7} 
        border='2px solid hsl(185, 41%, 68%)' 
        fontWeight={700}
        bg='transparent'
        mt={6}
        borderRadius='1rem'
      >New Event</Button>
    </form>
    
    {errorMessage && <p className='message'>{errorMessage}</p>}
  </>
  );
}