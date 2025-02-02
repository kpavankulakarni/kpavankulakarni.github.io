import React from 'react';
import { Logo } from '../components/Logo';

const blogPosts = [
  {
    title: "The Rise of Zero Trust Security",
    excerpt: "Learn how Zero Trust architecture is revolutionizing enterprise security...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    date: "March 15, 2024"
  },
  {
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures for protecting your cloud infrastructure...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "March 10, 2024"
  },
  {
    title: "Cybersecurity Trends 2024",
    excerpt: "Stay ahead of emerging threats with our comprehensive analysis...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    date: "March 5, 2024"
  }
];

export const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Security Insights</h1>
          <p className="text-xl text-slate-300">Stay informed about the latest in cybersecurity</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-purple-600 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};