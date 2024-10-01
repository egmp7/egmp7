'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { XMarkIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Zoom]);

interface MediaSliderProps {
  media: Array<{ type: 'image' | 'video'; src: string; alt?: string; thumbnail?: string }>;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ media }) => {
  const [expandedSrc, setExpandedSrc] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track the active index

  const handleExpand = (src: string, isVideo: boolean, index: number) => {
    setExpandedSrc(src);
    setActiveIndex(index); // Set the active index when expanding

    // Set video playing status based on the media type
    setIsVideoPlaying(isVideo);
  };

  const handleClose = () => {
    setExpandedSrc(null);
    setIsVideoPlaying(false);
  };

  return (
    <div className="px-2 sm:px-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 4 }, // lg screens: 4 slides
          0: { slidesPerView: 2 }, // sm screens: 2 slides
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || `Media item ${index}`}
                className="object-cover cursor-pointer w-full h-auto aspect-square rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleExpand(item.src, false, index)}
              />
            ) : (
              <div className="relative cursor-pointer" onClick={() => handleExpand(item.src, true, index)}>
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.alt || `Video thumbnail ${index}`}
                    className="object-cover w-full h-auto aspect-square rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-gray-400 rounded-lg text-white font-bold">
                    Play Video
                  </div>
                )}
                <VideoCameraIcon className="absolute inset-0 m-auto w-10 h-10 text-white bg-black bg-opacity-50 p-1 rounded" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Updated Expander with thumbnail navigation */}
      {expandedSrc && (
        <Expander
          src={expandedSrc}
          isVideo={isVideoPlaying}
          onClose={handleClose}
          media={media}
          activeIndex={activeIndex}
          handleExpand={handleExpand}
        />
      )}
    </div>
  );
};


interface ExpanderProps {
  src: string | null; // The source of the media to expand (can be null if not expanded)
  isVideo: boolean; // Whether the media is a video or not
  onClose: () => void; // Function to handle closing the expander
  media: Array<{ type: 'image' | 'video'; src: string; alt?: string; thumbnail?: string }>; // Array of media
  activeIndex: number; // The currently active index
  handleExpand: (src: string, isVideo: boolean, index: number) => void; // Handle thumbnail navigation
}

const Expander: React.FC<ExpanderProps> = ({ src, isVideo, onClose, media, activeIndex, handleExpand }) => {
  const swiperRef = useRef<any>(null);

  // Handle key events for arrow navigation and closing on Esc
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!swiperRef.current) return;

    switch (event.key) {
      case 'ArrowRight':
        swiperRef.current.slideNext(); // Slide to the next media
        break;
      case 'ArrowLeft':
        swiperRef.current.slidePrev(); // Slide to the previous media
        break;
      case 'Escape':
        onClose(); // Close the Expander
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!src) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center bg-black bg-opacity-80 z-40">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-0 right-0 block cursor-pointer hover:text-gray-400 transition-colors duration-200"
        aria-label="Close"
      >
        <XMarkIcon className="w-12 h-12 bg-black text-white bg-opacity-50 p-1 m-1 rounded" />
      </button>

      <div className="self-center max-h-[90vh] w-full">
        {/* Main Swiper for Media Display */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={activeIndex}
          onSlideChange={(swiper) =>
            handleExpand(media[swiper.activeIndex].src, media[swiper.activeIndex].type === 'video', swiper.activeIndex)
          }
          navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Capture swiper instance
          }}
          modules={[Navigation]}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index} className="self-center h-[100vh]">
              {item.type === 'video' ? (
                <video controls autoPlay className="max-h-[90vh] w-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div>
                  <img src={item.src} alt={`Expanded media ${index}`} className="max-h-[90vh] m-auto object-contain" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default MediaSlider;
