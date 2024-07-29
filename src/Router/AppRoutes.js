import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Maintenance from '../Pages/Maintanance';
import NoMatch from '../Pages/NoMatch';
import Home from '../Pages/Home';
import Artist from '../Pages/Artist';
/*
import EventManagement from '../Pages/Service/EventManagement';
import BrandActivation from '../Pages/Service/BrandActivation';
import MediaPlanner from '../Pages/Service/MediaPlanner';
import Production from '../Pages/Service/Production';
*/
import LandingPage from '../Pages/LandingPage';
import PostSingle from '../Pages/Post/PostSingle';
import PostSearch from '../Pages/Post/PostSearch';
import PostYear from '../Pages/Post/PostYear';
import UnderConstruction from '../Pages/UnderConstruction';
import Contact from '../Pages/Contact';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service/event-management" element={<UnderConstruction />} />
      <Route path="/service/brand-activation" element={<UnderConstruction />} />
      <Route path="/service/media-planner" element={<UnderConstruction />} />
      <Route path="/service/production" element={<UnderConstruction />} />
      <Route path="/posts/:slug" element={<PostSingle />} />
      <Route path="/search" element={<PostSearch />} />
      <Route path="/archive/:year" element={<PostYear />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRoutes;
