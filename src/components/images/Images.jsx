import { useState, useEffect } from 'react';
import './images.css';

import italy1 from '../../assets/italy1.jpg';
import milan3 from '../../assets/Milan3.jpg';
import venice3 from '../../assets/Venice3.jpg';
import italy2 from '../../assets/italy2.jpg';
import venice1 from '../../assets/Venice1.jpg';

import croatia1 from '../../assets/croatia1.jpg';
import rijeka1 from '../../assets/Rijeka1.jpg';
import rijeka2 from '../../assets/Rijeka.jpg';

const italyImages = [
  { src: italy1, alt: 'Italian Scenery' },
  { src: milan3, alt: 'Milan Cathedral' },
  { src: venice3, alt: 'Venice Canal' },
  { src: italy2, alt: 'Italian Street' },
  { src: venice1, alt: 'Venice Bridge' },
];

const croatiaImages = [
  { src: croatia1, alt: 'Croatia Coast' },
  { src: rijeka1, alt: 'Rijeka City' },
  { src: rijeka2, alt: 'Rijeka Port' },
];

const Images = () => {
  const [lightbox, setLightbox] = useState(null);

  const allImages = [
    ...italyImages.map(img => ({ ...img, country: 'Italy' })),
    ...croatiaImages.map(img => ({ ...img, country: 'Croatia' })),
  ];

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    setLightbox(prev => {
      const next = prev + dir;
      if (next < 0) return allImages.length - 1;
      if (next >= allImages.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <div className="gallery page-content">
      <div className="gallery__header">
        <span className="gallery__tag">Photography</span>
        <h1 className="gallery__title">Travel Gallery</h1>
        <p className="gallery__subtitle">Moments captured across Italy and Croatia</p>
      </div>

      {/* Italy */}
      <div className="gallery__section">
        <h2 className="gallery__section-title">Italy</h2>
        <div className="gallery__grid">
          {italyImages.map((image, index) => (
            <div key={index} className="gallery__item" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} className="gallery__image" loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Croatia */}
      <div className="gallery__section">
        <h2 className="gallery__section-title">Croatia</h2>
        <div className="gallery__grid">
          {croatiaImages.map((image, index) => (
            <div key={index} className="gallery__item" onClick={() => openLightbox(italyImages.length + index)}>
              <img src={image.src} alt={image.alt} className="gallery__image" loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); navigate(1); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          <div className="lightbox__info" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox__caption">{allImages[lightbox].alt}</span>
            <span className="lightbox__count">{lightbox + 1} / {allImages.length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
