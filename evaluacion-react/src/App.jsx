
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import {  EventsProvider } from "./services/EventService";

//Uso del lazy loading
const Home = lazy(() => import('./pages/Home'));
const CreateEvent = lazy(() => import('./pages/CreateEvent'));
const ViewEvents = lazy(()=> import('./pages/ViewEvents'))

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <EventsProvider>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/createEvent' element={<Suspense fallback={<div>Loading...</div>}><CreateEvent /></Suspense>} />
          <Route path='/viewEvents' element={<Suspense fallback={<div>Loading...</div>}><ViewEvents /></Suspense>} />
        </Routes>
      </EventsProvider>
    </BrowserRouter>
  );
}

export default App;