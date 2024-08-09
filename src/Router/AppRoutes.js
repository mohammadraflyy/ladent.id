import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Maintenance from '../Pages/Maintanance';
import NoMatch from '../Pages/NoMatch';
import Home from '../Pages/Home';
import Artist from '../Pages/Artist';
import LandingPage from '../Pages/LandingPage';
import PostSingle from '../Pages/Post/PostSingle';
import PostSearch from '../Pages/Post/PostSearch';
import PostYear from '../Pages/Post/PostYear';
//import UnderConstruction from '../Pages/UnderConstruction';
import Contact from '../Pages/Contact';
import BrandActivation from '../Pages/Service/BrandActivation';
import EventService from '../Pages/Service/EventService';
import MediaPlanner from '../Pages/Service/MediaPlanner';
import Production from '../Pages/Service/Production';
import ProgressBarComponent from '../Components/ProgresBar';

const AppRoutes = () => {
  return (
    <>
      <ProgressBarComponent />
      <Routes>
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/event-service" element={<EventService />} />
        <Route path="/service/brand-activation" element={<BrandActivation />} />
        <Route path="/service/media-planner" element={<MediaPlanner />} />
        <Route path="/service/production" element={<Production />} />
        <Route path="/posts/:slug" element={<PostSingle />} />
        <Route path="/posts/search" element={<PostSearch />} />
        <Route path="/posts/archive/:year" element={<PostYear />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
