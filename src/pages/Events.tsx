import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users, Presentation } from 'lucide-react';

/**
 * Interface defining the structure of event details
 */
interface EventDetails {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  dayOneSchedule?: {
    title: string;
    description: string;
  }[];
  dayTwoSchedule?: {
    title: string;
    description: string;
  }[];
}

// Sample event data
const event: EventDetails = {
  id: "reindux-25",
  title: "ReIndux'25",
  date: "April 25-26, 2025",
  time: "9:00 AM Onwards",
  location: "South Asian University, New Delhi",
  description: "A two-day comprehensive workshop exploring research careers and practical coding skills.",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
  dayOneSchedule: [
    {
      title: "Inauguration & Opening",
      description: "Welcome Address and Opening Speech by Prof. Pranab Muhuri, Dean, Faculty of Engineering And Technology"
    },
    {
      title: "Keynote: Career in Research",
      description: "By Bhaskarjit Sarmah, Director BlackRock - Understanding the Research Landscape and Career Paths"
    },
    {
      title: "Technical Talk: Federated Learning",
      description: "By Prof Bapi Chatterjee (IIITD) - Exploring Opportunities & Challenges in Federated Learning"
    },
    {
      title: "Group Activity",
      description: "Interactive session on 'Solving Real-World Research Gaps' with group presentations"
    },
    {
      title: "Panel Discussion",
      description: "Industry and Academia experts discuss 'Navigating Research Careers'"
    }
  ],
  dayTwoSchedule: [
    {
      title: "Git & GitHub Workshop",
      description: "Hands-on session covering version control fundamentals, live demonstration, and practical exercises"
    },
    {
      title: "Code & Conquer Challenge",
      description: "Competitive programming contest with prizes for top performers. Open to all skill levels."
    }
  ]
};

const Events: React.FC = () => {
  // State to control the visibility of event details
  const [showDetails, setShowDetails] = useState(false);
  // Ref for the details container to handle click outside
  const detailsRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle click outside of event details to close it
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDetails]);

  /**
   * Effect to scroll to top when showing event details
   */
  useEffect(() => {
    if (showDetails) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showDetails]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Upcoming Events</h1>
      
      {showDetails ? (
        // Event details view
        <div className="space-y-8">
          <button 
            onClick={() => setShowDetails(false)}
            className="text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to events
          </button>

          {/* Event details card with ref for click outside detection */}
          <div ref={detailsRef} className="card">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-6">{event.title}</h2>
            
            {/* Event metadata */}
            <div className="space-y-4 mb-8">
              <p className="flex items-center text-[var(--accent)]">
                <Calendar className="w-5 h-5 mr-2" />
                {event.date}
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {event.time}
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {event.location}
              </p>
            </div>

            <p className="mb-8">{event.description}</p>

            {/* Schedule sections */}
            <div className="space-y-8 mb-8">
              {/* Day 1 Schedule */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Day 1: ReIndux'25 - Research Workshop</h3>
                <div className="space-y-4">
                  {event.dayOneSchedule?.map((item, index) => (
                    <div key={index} className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                            <Presentation className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Day 2: ReIndux'25 - Coding Event</h3>
                <div className="space-y-4">
                  {event.dayTwoSchedule?.map((item, index) => (
                    <div key={index} className="card">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration button */}
            <a
              href="https://forms.gle/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center group"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      ) : (
        // Events list view
        <div className="space-y-6 max-w-4xl mx-auto">
          <div
            className="card flex flex-col md:flex-row gap-6 cursor-pointer group"
            onClick={() => setShowDetails(true)}
          >
            <div className="md:w-1/3">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-4">{event.title}</h2>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-[var(--accent)]">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </p>
              </div>
              <p className="mt-4">{event.description}</p>
            </div>
            <div className="md:w-32 flex items-center justify-center">
              <button className="btn-primary w-full md:w-auto whitespace-nowrap">
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;