import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users, Presentation, Info, User, Target, Code } from 'lucide-react'; // Added some icons

/**
 * Interface defining the structure of event details
 */
interface EventDetails {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string; // Can be physical location or Online mode
  description: string;
  image: string;
  speaker?: string; // Optional speaker field
  duration?: string; // Optional duration field
  targetAudience?: string; // Optional target audience field
  level?: string; // Optional level field
  agenda?: { // Renamed schedule to agenda for clarity
    time: string;
    session: string;
  }[];
  learningOutcomes?: string[]; // Optional learning outcomes
  additionalEngagement?: string[]; // Optional additional engagement info
}

// Updated event data
const event: EventDetails = {
  id: "git-it-right-workshop",
  title: "Git It Right! – A Hands-On Git & GitHub Workshop",
  date: "April 26th, 2025 (Tentative)",
  time: "To Be Decided",
  location: "Online (Zoom/Google Meet link to be shared upon registration)",
  description: "This workshop, organized by the SAU ACM Student Chapter, is designed to introduce students to Git and GitHub—fundamental tools for version control and collaborative development. Participants will gain hands-on experience with real-world workflows and leave the session with a solid understanding of how to use GitHub in academic, personal, or open-source projects.",
  image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=800&auto=format&fit=crop", // Updated image URL
  speaker: "Vinayak Sharma, SDE Intern, Samsung Research",
  duration: "1.5 to 2 hours",
  targetAudience: "Undergraduate and postgraduate students (especially 1st and 2nd years) interested in version control, software development, and open-source contribution",
  level: "Beginner-friendly (no prior experience required)",
  agenda: [
    { time: "00:00 – 00:10", session: "Welcome & Introduction – Importance of version control and collaborative development" },
    { time: "00:10 – 00:30", session: "Understanding Git – Git fundamentals, installation, and essential commands (init, add, commit, log, etc.)" },
    { time: "00:30 – 00:55", session: "Getting Started with GitHub – Creating repositories, pushing code, working with branches" },
    { time: "00:55 – 01:15", session: "Live Demo – Hands-on demonstration of setting up a project, collaborating via pull requests and forks" },
    { time: "01:15 – 01:25", session: "Bonus Segment (Optional) – Introduction to GitHub Pages or using GitHub Projects for task management" },
    { time: "01:25 – 01:45", session: "Q&A + Discussion – Addressing participant questions, next steps for practice and exploration" }
  ],
  learningOutcomes: [
    "Understand the purpose and workflow of Git and GitHub",
    "Create and manage their own repositories",
    "Collaborate with others through pull requests and forks",
    "Apply version control in their academic and personal projects"
  ],
  additionalEngagement: [
    "Post-workshop activity: Participants will be invited to contribute to a sample open-source repository",
    "Certification: Participation certificates will be issued",
    "Support: Resource pack with guides, cheat sheets, and practice exercises will be shared"
  ]
};

const Events: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

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

          <div ref={detailsRef} className="card">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-6">{event.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <p className="flex items-center text-[var(--accent)]">
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.time} ({event.duration})</span>
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </p>
              {event.speaker && (
                 <p className="flex items-center">
                   <User className="w-5 h-5 mr-2 flex-shrink-0" />
                   <span>Speaker: {event.speaker}</span>
                 </p>
              )}
               {event.level && (
                 <p className="flex items-center">
                   <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                   <span>Level: {event.level}</span>
                 </p>
              )}
               {event.targetAudience && (
                 <p className="flex items-center md:col-span-2">
                   <Target className="w-5 h-5 mr-2 flex-shrink-0" />
                   <span>Target Audience: {event.targetAudience}</span>
                 </p>
              )}
            </div>

            <p className="mb-8">{event.description}</p>

            {/* Agenda Section */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Presentation className="w-5 h-5 mr-2" /> Workshop Agenda
                </h3>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      {/* Updated flex container for time and session */}
                      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                         {/* Wider time column, left-aligned */}
                         <div className="flex-shrink-0 text-[var(--accent)] font-medium sm:w-28 mb-1 sm:mb-0">
                          {item.time}
                        </div>
                        {/* Session description */}
                        <div className="flex-grow text-gray-700 dark:text-gray-300">
                          <p>{item.session}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

             {/* Learning Outcomes Section */}
            {event.learningOutcomes && event.learningOutcomes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" /> Learning Outcomes
                </h3>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  {event.learningOutcomes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

             {/* Additional Engagement Section */}
            {event.additionalEngagement && event.additionalEngagement.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                   <Info className="w-5 h-5 mr-2" /> Additional Information
                </h3>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  {event.additionalEngagement.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}


            {/* Registration button (Update link when available) */}
            <a
              href="#register" // Replace with actual registration link/modal trigger
              className="btn-primary inline-flex items-center group"
              onClick={(e) => {e.preventDefault(); alert('Registration link will be available soon!')}} // Placeholder action
            >
              Register Now (Coming Soon)
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
              <p className="mt-4 line-clamp-2">This workshop is designed to introduce students to Git and GitHub—fundamental tools for version control and collaborative development.</p>
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
