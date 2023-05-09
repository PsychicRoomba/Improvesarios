import React, { useState, useEffect } from 'react';
import { BsTicketDetailedFill, BsMap } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Upcoming.scss';

const Upcoming = () => {
  const [upcomings, setUpcomings] = useState([]);
  const [filterUpcoming, setFilterUpcoming] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "upcomings"] | order(dates asc)';

    client.fetch(query).then((data) => {
      setUpcomings(data);
      setFilterUpcoming(data);
    });
  }, []);
  

  const handleUpcomingFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}])

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}])

      if(item === 'All') {
        setFilterUpcoming(upcomings);
      } else {
        setFilterUpcoming(upcomings.filter((upcoming) => upcoming.months.includes(item)))
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>Upcoming <span>Shows</span></h2>

      <div className='app__upcoming-filter'>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'All'].map((item, index) => (
          <div
          key = {index}
          onClick = {() => handleUpcomingFilter(item)}
          className={`app__upcoming-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__upcoming-show"
      >
        {filterUpcoming.map((upcoming, index) => (
          <a className='app__upcoming-item app__flex' key={index} href={upcoming.ticketLink} target="_blank" rel="noreferrer">
            <div className='app__upcoming-img app__flex'>
              <img src={urlFor(upcoming.imgUrl)} alt={upcoming.description}></img>

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='app__upcoming-hover app__flex'
              >
                <a href={upcoming.ticketLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25}}
                    className='app__flex'
                  >
                    <BsTicketDetailedFill />
                  </motion.div>
                </a>

                <a href={upcoming.mapLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25}}
                    className='app__flex'
                  >
                    <BsMap />
                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className='app__upcoming-content app__flex'>
              <h4 className='bold-text'>{upcoming.title}</h4>
              <p className='p-text' style={{ marginTop: 10}}>{upcoming.description}</p>
              <p className='p-text app_upcoming-dates' style={{ marginTop: 10}}>
                {new Date(upcoming.dates).toLocaleDateString("en-UK", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric", 
                })} 
              </p>
                
              <div className='app__upcoming-months app__flex'>
                <p className='p-text'>{upcoming.months.join("/")}</p>
              </div>
            </div>

          </a>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Upcoming, 'app__upcomings'),
  'upcoming',
  'app__primarybg'
);