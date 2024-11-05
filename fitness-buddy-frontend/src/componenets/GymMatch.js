import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './GymMatch.css';

function GymMatch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const navigate = useNavigate();

  const profiles = [
    { name: 'Alex', bio: 'Loves weightlifting and cardio', image: 'https://via.placeholder.com/300', age: 25, location: 'New York' },
    { name: 'Jamie', bio: 'Yoga enthusiast and runner', image: 'https://via.placeholder.com/300', age: 28, location: 'Los Angeles' },
    { name: 'Sam', bio: 'Crossfit and HIIT lover', image: 'https://via.placeholder.com/300', age: 30, location: 'Chicago' },
  ];

  const swipe = useSpring({
    transform: swipeDirection ? `translateX(${swipeDirection === 'left' ? '-100%' : '100%'})` : 'translateX(0%)',
    from: { transform: 'translateX(0%)' },
    reset: true,
    onRest: () => {
      if (swipeDirection) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
        setSwipeDirection(null);
      }
    },
  });

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
  };

  return (
    <div className="gym-match-container">
      <button onClick={() => navigate('/workout-log')} className="workout-log-button">
        Workout Log
      </button>
      {profiles.length > 0 && (
        <animated.div className="profile-card" style={swipe}>
          <img src={profiles[currentIndex].image} alt={profiles[currentIndex].name} className="profile-image" />
          <div className="profile-details">
            <h3>{profiles[currentIndex].name}, {profiles[currentIndex].age}</h3>
            <p>{profiles[currentIndex].bio}</p>
            <p><strong>Location:</strong> {profiles[currentIndex].location}</p>
          </div>
          <div className="swipe-buttons">
            <button onClick={() => handleSwipe('left')} className="swipe-button dislike">Dislike</button>
            <button onClick={() => handleSwipe('right')} className="swipe-button like">Like</button>
          </div>
        </animated.div>
      )}
    </div>
  );
}

export default GymMatch;