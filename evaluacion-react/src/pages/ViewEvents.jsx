import React, { useState } from 'react';
import { useEventsContext } from '../services/EventService';
import '../css/ViewEvents.css'
import EditEventForm from '../components/EditEventForm';
import '../css/ViewEvents.css'
import { Heading } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons'

export default function ViewEvents() {

  const { events, dispatch } = useEventsContext();
  const [selectedEventForEdit, setSelectedEventForEdit] = useState(null);
  const incompletedEvents = events.filter(event => !event.complete)
  const completedEvents = events.filter(event => event.complete)
 
  const handleDelete = (eventId) => {
    dispatch({ type: 'DELETE_EVENT', payload: eventId })
  }
  const handleCompleted =(event) => {
    dispatch({type: 'COMPLETED_EVENT', payload: event.id})
  }
  const handleUpdateEvent = (eventId, updatedData) => {
    dispatch({ type: 'UPDATE_EVENT', payload: { id: eventId, updatedData } });
    setSelectedEventForEdit(null);
  };
  const handleEdit = (event) =>{
    setSelectedEventForEdit(event);
  }

  function renderEventRows(eventArray) {
  return eventArray.map((event, index) => (
    <tr key={index}  className='table'>
      <td className='td'><p className='title'>Nombre </p>{event.name}</td>
      <td className='td'><p className='title'>Fecha </p>{event.date}</td>
      <td className='td'><p className='title'> Lugar </p>{event.place}</td>
      <td className='td'><p className='title'>Asistentes </p>{event.numberOfPeople}</td>
      <td>
          <button onClick={() => handleCompleted(event)} className='button-1'><CheckIcon w={8}></CheckIcon></button>
          <button onClick={() => handleDelete(event.id)}  className='button-2'><DeleteIcon w={8}></DeleteIcon></button>
          <button onClick={()=> handleEdit (event)}  className='button-3'><EditIcon w={8}></EditIcon></button>
        </td>
    </tr>
  ));
}

  return (
    
    <div>
      <Heading>Eventos Pendientes</Heading>
      <table>
        <thead>
        </thead>
        <tbody className='tbody-1'>
          {renderEventRows(incompletedEvents)}
        </tbody>
      </table>

      <Heading>Eventos Realizados</Heading>
      <table  >
        <thead>
        </thead>
        <tbody className='tbody-2'>
          {renderEventRows(completedEvents)}
        </tbody>
      </table>

      {selectedEventForEdit && (
        <EditEventForm
        selectedEventForEdit={selectedEventForEdit}
        onUpdateEvent={(updatedData) => handleUpdateEvent(selectedEventForEdit.id, updatedData)}
        onClose={() => setSelectedEventForEdit(null)}
        />
      )}
    </div>
  );
}


