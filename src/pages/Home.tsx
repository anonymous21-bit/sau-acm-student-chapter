import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Book, Users, Github, Linkedin, Instagram, Disc } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const upcomingEvent = {
    title: "Research Workshop & Coding Event",
    date: "April 25-26, 2025",
    description: "Join us for a two-day workshop exploring research careers and practical coding skills.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800"
  };

  const latestPosts = [
    {
      title: "AI Trends Shaping 2025",
      excerpt: "Exploring the latest developments in artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
    },
    {
      title: "Master Your Next Hackathon",
      excerpt: "Essential strategies and tips for success in your next coding competition.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800"
    }
  ];

  const benefits = [
    "Access to ACM Digital Library",
    "Exclusive workshops and events",
    "Networking opportunities",
    "Professional development"
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, url: 'https://github.com/sau-acm', label: 'GitHub' },
    { icon: <Linkedin className="h-6 w-6" />, url: 'https://linkedin.com/company/sau-acm', label: 'LinkedIn' },
    { icon: <Instagram className="h-6 w-6" />, url: 'https://instagram.com/sau_acm', label: 'Instagram' },
    { icon: <Disc className="h-6 w-6" />, url: 'https://discord.gg/sau-acm', label: 'Discord' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800'
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-[36px] font-bold text-[var(--accent)] mb-6 leading-tight">
            Welcome to SAU ACM
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            The South Asian University ACM Student Chapter is a dynamic community dedicated to advancing
            computing innovation across South Asia. Based at South Asian University, we unite students
            and faculty through inspiring events, hands-on workshops, and exclusive access to resources
            like the ACM Digital Library.
          </p>
          <Link 
            to="/membership" 
            className="btn-primary inline-flex items-center group mb-8"
          >
            Become a Member
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="section-divider">
          <h2>Upcoming Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div 
            className="card group cursor-pointer"
            onClick={() => navigate('/events')}
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={upcomingEvent.image} 
                alt={upcomingEvent.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{upcomingEvent.title}</h3>
                <p className="text-sm mb-2">{upcomingEvent.date}</p>
                <p className="text-sm">{upcomingEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link 
            to="/events" 
            className="btn-primary inline-flex items-center group"
          >
            View All Events
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Section */}
        <div className="section-divider">
          <h2>Latest Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {latestPosts.map((post, index) => (
            <div 
              key={index} 
              className="card group cursor-pointer"
              onClick={() => navigate('/blog')}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/blog" 
            className="btn-primary inline-flex items-center group"
          >
            Read More Posts
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Membership Benefits Section */}
        <div className="section-divider">
          <h2>Membership Benefits</h2>
        </div>
        <div className="card mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Why Join SAU ACM?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[var(--accent)]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link 
            to="/membership"
            className="btn-primary inline-flex items-center group"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Section */}
        <div className="section-divider">
          <h2>Gallery</h2>
        </div>
        <ImageCarousel images={galleryImages} />
      </div>
    </div>
  );
}

export default Home;