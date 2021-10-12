import React from 'react';
import { useLazyLoad } from 'custom-helper-hooks';
import './style.css';

export const UseLazyLoadExample = () => {
  useLazyLoad('lazy');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
      <img src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300" />
      <img src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300" />
      <img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300" />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300"
      />
      <img
        className="lazy"
        data-src="https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300"
      />
    </div>
  );
};
