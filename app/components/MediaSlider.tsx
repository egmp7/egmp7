'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { XMarkIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
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
        className='rounded-lg'
        navigation
        pagination={false}
        breakpoints={{
          640: { slidesPerView: 4 }, // lg screens: 4 slides
          0: { slidesPerView: 2 }, // sm screens: 2 slides
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className='aspect-square cursor-pointer'>
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || `Media item ${index}`}
                className=" rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                layout="fill"
                objectFit="cover"
                onClick={() => handleExpand(item.src, false, index)}
              />
            ) : (
              <div onClick={() => handleExpand(item.src, true, index)}>
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.alt || `Media item ${index}`}
                    className=" rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    layout="fill"
                    objectFit="cover"
                    onClick={() => handleExpand(item.src, false, index)}
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

const Expander: React.FC<ExpanderProps> = ({ src, onClose, media, activeIndex, handleExpand }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  // Handle key events for arrow navigation and closing on Esc
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!swiperRef.current) return;

      switch (event.key) {
        case 'ArrowRight':
          swiperRef.current.slideNext();
          break;
        case 'ArrowLeft':
          swiperRef.current.slidePrev();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener('keydown', handleKeyDown);
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!src) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center bg-black bg-opacity-80 z-40">
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
            <SwiperSlide key={index} className='self-center'>
              {item.type === 'video' ? (
                <video controls autoPlay={false} className="justify-center max-h-[90vh] w-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full h-[80vh]"> {/* Set explicit height for the container */}
                  <Image
                    src={item.src}
                    alt={`Expanded media ${index}`}
                    fill
                    className="object-contain" // Ensure the image is properly contained
                  />
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

