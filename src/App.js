import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintenance from './Pages/Maintanance';
import NoMatch from './Pages/NoMatch';
import Artist from './Pages/Artist';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import EventManagement from './Pages/Service/EventManagement';
import BrandActivation from './Pages/Service/BrandActivation';
import MediaPlanner from './Pages/Service/MediaPlanner';
import Production from './Pages/Service/Production';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="maintenance" element={<Maintenance />}/>
          <Route path="/" element={<LandingPage />}/>
          <Route path="home" element={<Home />}/>
          <Route path="artist" element={<Artist />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="service/event-management" element={<EventManagement />}/>
          <Route path="service/brand-activation" element={<BrandActivation />}/>
          <Route path="service/media-planner" element={<MediaPlanner />}/>
          <Route path="service/production" element={<Production />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;