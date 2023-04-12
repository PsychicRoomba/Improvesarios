import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { SiYoutube } from 'react-icons/si'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://www.tiktok.com/@improvesarios" target="_blank" rel="noreferrer">
          <div>
              <FaTiktok />
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100084149660381" target="_blank" rel="noreferrer">
          <div>
              <FaFacebookF />
          </div>
        </a>
        <a href="https://www.instagram.com/improvesarios/" target="_blank" rel="noreferrer">
          <div>
              <BsInstagram />
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UCVUTu8L6bRzT11MTUFr_aZA" target="_blank" rel="noreferrer">
          <div>
              <SiYoutube />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia