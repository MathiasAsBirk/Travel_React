import React, { useState } from 'react';
import './images.css';

const italyImages = [
    { src: '/src/assets/italy1.jpg', alt: 'Italy Image 1' },
    { src: '/src/assets/Milan3.jpg', alt: 'Italy Image 2' },
    { src: '/src/assets/Venice3.jpg', alt: 'Italy Image 3' },
    { src: '/src/assets/italy2.jpg', alt: 'Italy Image 3' },
    { src: '/src/assets/Venice1.jpg', alt: 'Italy Image 3' },
];

const croatiaImages = [
    { src: '/src/assets/croatia1.jpg', alt: 'Croatia Image 1' },
    { src: '/src/assets/Rijeka1.jpg', alt: 'Croatia Image 2' },
    { src: '/src/assets/Rijeka.jpg', alt: 'Croatia Image 3' },
    { src: '/src/assets/croatia1.jpg', alt: 'Croatia Image 3' },
    { src: '/src/assets/croatia1.jpg', alt: 'Croatia Image 3' }
];

const Images = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);

    const openModal = (image, index, category) => {
        setCurrentImage(image);
        setCurrentIndex(index);
        setCurrentCategory(category);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setCurrentIndex(null);
        setCurrentCategory(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const images = currentCategory === 'italy' ? italyImages : croatiaImages;
        if (currentIndex < images.length - 1) {
            setCurrentImage(images[currentIndex + 1].src);
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const images = currentCategory === 'italy' ? italyImages : croatiaImages;
        if (currentIndex > 0) {
            setCurrentImage(images[currentIndex - 1].src);
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Explore Italy & Croatia</h2>
            <div className="gallery-section italy">
                <h3 className="section-title">Italy</h3>
                <div className="gallery-grid">
                    {italyImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'italy')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery-section croatia">
                <h3 className="section-title">Croatia</h3>
                <div className="gallery-grid">
                    {croatiaImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'croatia')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            {currentImage && (
                <div className="modal" onClick={closeModal}>
                    <button className="prev-button" onClick={prevImage}>&#10094;</button>
                    <img src={currentImage} alt="Current" className="modal-image" />
                    <button className="next-button" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
    );
};

export default Images;
