// Timeline.js
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { CalendarIcon, LightBulbIcon, UsersIcon, MusicalNoteIcon, RadioIcon, TvIcon, FilmIcon } from '@heroicons/react/24/outline';

const milestones = [
  {
    title: 'BRAND ACTIVATION',
    description: 'Work with local and international brands as digital campaign marketing.',
    date: '2021',
    icon: <CalendarIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'EVENT SERVICE & PLANNER',
    description: 'Manage any brand from placement, promotion, and off-air events.',
    date: '2020',
    icon: <LightBulbIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'KOL SPECIALIST',
    description: 'Special partnership with influencers, KOLs, and actresses to collaborate and promote on social media.',
    date: '2018',
    icon: <UsersIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'MUSIC LABEL',
    description: 'Starting to produce actress songs as a label, including recording, digital aggregation, and distribution.',
    date: '2016',
    icon: <MusicalNoteIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'RADIO NETWORKING',
    description: 'Cooperation with almost all radio stations in Indonesia for music release and brand promotion.',
    date: '2014',
    icon: <RadioIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'TV ON DEMAND',
    description: 'Partnership and artist collaboration for serial movies and retail on demand for the international market.',
    date: '2013',
    icon: <TvIcon className="h-6 w-6 text-white" />,
  },
  {
    title: 'TV PARTNERSHIP & MEDIA PLANNER',
    description: 'Manage TVC brand, artist management as TV host, and production house.',
    date: '2010',
    icon: <FilmIcon className="h-6 w-6 text-white" />,
  },
];

const Timeline = () => {
  return (
    <VerticalTimeline>
      {milestones.map((milestone, index) => (
        <VerticalTimelineElement
          key={index}
          date={milestone.date}
          iconStyle={{ background: '#61b8ff', color: '#fff' }}
          icon={milestone.icon}
        >
          <h3 className="text-xl font-semibold">{milestone.title}</h3>
          <p>{milestone.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
