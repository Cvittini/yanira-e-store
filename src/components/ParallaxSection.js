import React from 'react';
import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const ParallaxSection = ({ backgroundImage, text }) => {
  return (
    <Parallax bgImage={backgroundImage} strength={400}>
      <div
        style={{
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}
      >
        <h2 className="display-4 text-center">{text}</h2>
      </div>
    </Parallax>
  );
};

ParallaxSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ParallaxSection;
