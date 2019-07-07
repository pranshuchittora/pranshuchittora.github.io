import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hi, I am <strong>Pranshu Chittora</strong> a CS junior student from 🇮🇳
          <br />
          Member{' '}
          <a href="https://github.com/webpack">
            <strong>@webpack</strong>
          </a>{' '}
          <a href="https://github.com/gatsbyjs">
            <strong>@gatsbyjs</strong>
          </a>
          <div>
            Follow me =>{' '}
            <a href="https://twitter.com/pranshuchittora" target="_blank">
              Twitter
            </a>{' '}
            <a href="https://github.com/pranshuchittora" target="_blank">
              GitHub
            </a>
          </div>
        </p>
      </div>
    )
  }
}

export default Bio
