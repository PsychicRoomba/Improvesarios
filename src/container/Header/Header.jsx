import React from 'react';
import { motion } from 'framer-motion';
import { BsMouse, BsChevronCompactDown } from 'react-icons/bs';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import ticket from '../../assets/improvesariosTicket.svg'
import ticketwide from '../../assets/improvesariosTicketWide.svg'
import sub from '../../assets/improvesariosSub.svg'
import './Header.scss';



const Header = () => (
  <div className="app__header">
      <img 
        className="app__header-img dom" 
        src= {images.dominic_f}
        alt="Dominic Bentham">
      </img>

      <img 
        className="app__header-img stephen" 
        src={images.stephen_f}
        alt="Stephen Brown">
      </img>

      <img 
        className="app__header-img becca"
        src={images.becca_f}
        alt="Rebecca Madden">
      </img>

      <img 
        className="app__header-img rebecca"
        src={images.rebecca_f}
        alt="Rebecca Chandler">
      </img>

      <img 
        className="app__header-img emily"
        src={images.emily_f}
        alt="Emily Lane">
      </img>

      <div className='app__header-logo_text'>
        <img src={images.logo_text_anim} alt="Improvesarios"></img>
      </div>

      <div className='app__header-logo_sub'>
        <img src={sub} alt="Improvised Opera"></img>
      </div>

      <motion.div
        className='app__header-mouse'
        whileInView={{ opacity: [0, 1]}}
        initial={{ opacity: 0}}
        transition= {{ delay: 5 }}
        viewport={{ once: true}}
      >
        <BsMouse />
      </motion.div>

      <motion.div
          className='app__header-mouse-down'
          whileInView={{ opacity: [0, 1]}}
          initial={{ opacity: 0}}
          animate={{ y: [0, 14, 0] }}
          transition={{
            delay: 5,
            ease: "linear",
            duration: 2,
            y: { repeat: Infinity, duration: 1 }
            }}
          viewport={{ once: true}}
      >
        <BsChevronCompactDown />
      </motion.div>

      <a className='app__header-tickets' href='#upcoming'>
        <img src={ticket} alt="Ticket"></img>
      </a>

      <a className='app__header-tickets-wide' href='#upcoming'>
        <img src={ticketwide} alt="Ticket"></img>
      </a>
  </div>
);

export default AppWrap(Header, 'home');