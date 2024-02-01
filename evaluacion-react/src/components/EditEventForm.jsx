import React, { useState } from 'react';
import '../css/EditEventForm.css';
import {CloseIcon} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react';
//Archivo para cuando se quiere editar la info del evento
  const EditEventForm = ({ selectedEventForEdit, onUpdateEvent, onClose }) => {
  const [editedEvent, setEditedEvent] = useState(selectedEventForEdit);
  const [isEditing, setIsEditing] = useState(true);

  const handleSaveClick = () => {
    onUpdateEvent(editedEvent);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedEvent({
      ...editedEvent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`edit-modal ${isEditing ? 'visible' : ''}`}>
      <div className="edit-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <button type="button" className="button-edit"onClick={onClose} disabled={!isEditing}>
        <CloseIcon color='rgb(9, 9, 77)'></CloseIcon>
        </button>
        
        <label className='label'>
          Nombre:
          <input
            type="text"
            name="name"
            value={editedEvent.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className='input'
          />
        </label>

        <label className='label'>
          Fecha:
          <input
            type="date"
            name="date"
            value={editedEvent.date}
            onChange={handleInputChange}
            disabled={!isEditing}
            className='input'
          />

        </label>
        <label className='label'>
          Lugar:
          <input
            type="text"
            name="place"
            value={editedEvent.place}
            onChange={handleInputChange}
            disabled={!isEditing}
            className='input'
          />
        </label>

        <label className='label'>
          Asistentes: 
          <input
            type="text"
            name="numberOfPeople"
            value={editedEvent.numberOfPeople}
            onChange={handleInputChange}
            disabled={!isEditing}
            className='input'
          />
        </label>
        
        <Button 
          type="button" 
          onClick={handleSaveClick} 
          disabled={!isEditing} 
          m={2}
          borderRadius='1rem'
        >
         Guardar
        </Button>
        
      </form>
     </div>
  </div>
  );
};

export default EditEventForm;




