import React, { useState } from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "ai-trends-2025",
    title: "AI Trends Shaping 2025",
    excerpt: "Exploring the latest developments in artificial intelligence and machine learning that are transforming industries.",
    content: `Artificial Intelligence continues to evolve at an unprecedented pace, reshaping how we live and work. In 2025, we're seeing several key trends emerge that are worth watching closely.

First, there's the rise of multimodal AI systems that can process and generate different types of data - text, images, audio, and video - simultaneously. These systems are becoming increasingly sophisticated, offering new possibilities for creative work and data analysis.

Another significant trend is the democratization of AI tools. What once required deep expertise and substantial computing resources is now accessible to developers and businesses of all sizes. This accessibility is driving innovation across sectors, from healthcare to education.

Edge AI is also gaining momentum, with more processing happening on local devices rather than in the cloud. This shift improves response times and addresses privacy concerns, making AI more practical for real-time applications.

[Continue reading on Medium...]`,
    author: "Dr. Sarah Chen",
    date: "March 15, 2025",
    readTime: "5 min read",
    tags: ["AI", "Technology", "Future"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
  },
  {
    id: "hackathon-success",
    title: "Master Your Next Hackathon",
    excerpt: "Essential strategies and tips for success in your next coding competition, based on experiences from top performers.",
    content: `Hackathons are intense, exciting events that can accelerate your learning and open new opportunities. Here's how to make the most of your next hackathon experience.

Preparation is key. Before the event, familiarize yourself with common development tools and frameworks. Having a solid foundation will help you focus on building rather than troubleshooting basic issues.

Team composition matters. Look for teammates with complementary skills - if you're a backend developer, try to partner with someone strong in frontend development or design. This balance can help you create more complete solutions.

Time management is crucial. Start with a minimum viable product (MVP) and add features only if time permits. It's better to have a working basic solution than an incomplete complex one.

[Continue reading on Medium...]`,
    author: "Alex Kumar",
    date: "March 10, 2025",
    readTime: "4 min read",
    tags: ["Hackathon", "Programming", "Tips"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800"
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Blog</h1>
      
      {selectedPost ? (
        <div className="space-y-8 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to posts
          </button>

          <article className="card">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            
            <div className="flex items-center space-x-4 mb-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {selectedPost.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {selectedPost.readTime}
              </div>
              <span>{selectedPost.date}</span>
            </div>

            <div className="prose prose-lg mb-8">
              <p>{selectedPost.content}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-lg bg-[var(--secondary)] text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`https://medium.com/@sau-acm/${selectedPost.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-dark)] inline-flex items-center"
              >
                Read full article on Medium
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="card group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{post.author}</span>
                <div className="flex items-center space-x-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;