import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { PortableText } from "@portabletext/react";

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Performers.scss'

const Performers = () => {

  const [performers, setPerformers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "performers"]';
  
    client.fetch(query).then((data) => {
      setPerformers(data);
    });
  }, []);

  const test = performers[currentIndex];

  return (
    <>
      <h2 className='head-text'>Our <span>Performers</span></h2>
      {performers.length && (
        <>
          <div className="app__performer-item app__flex">
            <img className='app__performer-img' src={urlFor(test.imgUrl)} alt="performer"/>
            <div className='app__performer-content'>
              <PortableText
                value={test.bio}
              />
              <div className='app__performer-title'>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.role}</h5>
              </div>
            </div>
          </div>

          <div className='app__performer-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? performers.length - 1 : currentIndex - 1)}>
              <HiChevronLeft/>
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === performers.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight/>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Performers, 'app__performer'),
  'performers',
  'app__primarybg'
);