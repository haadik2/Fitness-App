import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">Fitness Buddy</div>
        <div className="navbar-links">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/chat')}>Chat</button>
        </div>
      </nav>
      <header className="hero-section">
        <h1 className="hero-title">Achieve Your Fitness Goals with Fitness Buddy</h1>
        <p className="hero-description">
          Connect with workout partners, track your progress, and stay motivated!
        </p>
        <button className="hero-button" onClick={() => navigate('/register')}>
          Get Started
        </button>
      </header>
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Connect with Partners</h3>
            <p>Find and connect with fitness enthusiasts in your area.</p>
          </div>
          <div className="feature-item">
            <h3>Track Your Progress</h3>
            <p>Monitor your workouts and see your improvements over time.</p>
          </div>
          <div className="feature-item">
            <h3>Join Challenges</h3>
            <p>Participate in community challenges to stay motivated.</p>
          </div>
          <div className="feature-item">
            <h3>Personalized Plans</h3>
            <p>Get workout plans tailored to your fitness level and goals.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Advice</h3>
            <p>Access tips and advice from fitness professionals.</p>
          </div>
        </div>
      </section>
      <section className="challenges-section">
        <h2>Join Our Challenges</h2>
        <div className="challenges-list">
          <div className="challenge-item">
            <h3>30-Day Yoga Challenge</h3>
            <p>Improve your flexibility and mindfulness with daily yoga sessions.</p>
          </div>
          <div className="challenge-item">
            <h3>5K Run Challenge</h3>
            <p>Train to run a 5K in just 4 weeks with our guided plan.</p>
          </div>
          <div className="challenge-item">
            <h3>Strength Training Challenge</h3>
            <p>Build muscle and increase strength with our 6-week program.</p>
          </div>
          <div className="challenge-item">
            <h3>HIIT Challenge</h3>
            <p>Boost your endurance and burn calories with high-intensity interval training.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Fitness Buddy has transformed my workout routine!" - Alex</p>
        </div>
        <div className="testimonial">
          <p>"I found the perfect partner to keep me motivated." - Jamie</p>
        </div>
        <div className="testimonial">
          <p>"The challenges keep me engaged and excited!" - Sam</p>
        </div>
      </section>
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join Fitness Buddy today and take the first step towards a healthier you.</p>
        <button className="cta-button" onClick={() => navigate('/register')}>
          Join Now
        </button>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p>© 2023 Fitness Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;