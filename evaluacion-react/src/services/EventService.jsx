import React, { createContext, useContext, useReducer, useEffect } from 'react';
//Creacion de un contexto  
const EventsContext = createContext();
//Creacion del CRUD usando useReducer
const ADD_EVENT = 'ADD_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const COMPLETED_EVENT = 'COMPLETED_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';

const eventsReducer = (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.payload);
    case COMPLETED_EVENT: 
      return state.map((event) => event.id === action.payload ? { ...event, complete: !event.complete } : event);
      case UPDATE_EVENT:
  return state.map((event) =>
    event.id === action.payload.id ? { ...event, ...action.payload.updatedData } : event);
    default:
      return state;
  }
};
//Usando localStorage para almacenar la informacion 
const EventsProvider = ({ children }) => {
  const [events, dispatch] = useReducer(eventsReducer, [], (initial) => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || initial;
    return [...initial, ...storedEvents];
 
  });
   const updateEvent = (id, data) => {
      dispatch({ type: UPDATE_EVENT, payload: { id, data } });
    };
  // Guarda los eventos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <EventsContext.Provider value={{ events, dispatch, updateEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

const useEventsContext = () => {

  return useContext(EventsContext);
};

//exportar los hooks para usarlos en otros componentes
export { EventsProvider, useEventsContext };