import React, { useState } from 'react';
import './images.css';

// ITALY IMAGES
import italy1 from '../../assets/italy1.jpg';
import milan3 from '../../assets/Milan3.jpg';
import venice3 from '../../assets/Venice3.jpg';
import italy2 from '../../assets/italy2.jpg';
import venice1 from '../../assets/Venice1.jpg';

// CROATIA IMAGES
import croatia1 from '../../assets/croatia1.jpg';
import rijeka1 from '../../assets/Rijeka1.jpg';
import rijeka2 from '../../assets/Rijeka.jpg';


const italyImages = [
    { src: italy1, alt: 'Italy Image 1' },
    { src: milan3, alt: 'Milan Cathedral' },
    { src: venice3, alt: 'Venice Canal' },
    { src: italy2, alt: 'Italy Street' },
    { src: venice1, alt: 'Venice Bridge' },
];

const croatiaImages = [
    { src: croatia1, alt: 'Croatia Coast' },
    { src: rijeka1, alt: 'Rijeka City' },
    { src: rijeka2, alt: 'Rijeka Port' },
    { src: croatia1, alt: 'Croatia View' },
    { src: croatia1, alt: 'Croatia Nature' } 
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
            
            {/* Italy Section */}
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

            {/* Croatia Section */}
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

            {/* Modal */}
            {currentImage && (
                <div className="modal" onClick={closeModal}>
                    {currentIndex > 0 && (
                        <button className="prev-button" onClick={prevImage}>&#10094;</button>
                    )}
                    <img src={currentImage} alt="Current" className="modal-image" />
                    
                    {(currentCategory === 'italy' ? currentIndex < italyImages.length - 1 : currentIndex < croatiaImages.length - 1) && (
                        <button className="next-button" onClick={nextImage}>&#10095;</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Images;