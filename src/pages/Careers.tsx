import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { Briefcase, Users, Heart, Clock } from 'lucide-react';

const positions = [
  {
    title: "Senior Security Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Cybersecurity Analyst",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time"
  },
  {
    title: "Security Consultant",
    department: "Professional Services",
    location: "London, UK",
    type: "Full-time"
  }
];

const benefits = [
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment"
  },
  {
    icon: <Heart className="w-8 h-8 text-purple-600" />,
    title: "Comprehensive Benefits",
    description: "Health, dental, vision insurance, and competitive compensation"
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  }
];

export const Careers = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
        className="text-white"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl">Help us build the future of cybersecurity</p>
        </div>
      </ParallaxSection>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                </div>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p>Department: {position.department}</p>
                  <p>Location: {position.location}</p>
                  <p>Type: {position.type}</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};