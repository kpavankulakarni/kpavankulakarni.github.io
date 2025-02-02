import React from 'react';
import { Shield, Cloud, Lock, Server } from 'lucide-react';
import { ParallaxSection } from '../components/ParallaxSection';

const products = [
  {
    icon: <Shield className="w-12 h-12 text-purple-600" />,
    name: "Qlucent Shield",
    description: "Advanced endpoint protection with AI-powered threat detection",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Cloud integration"
    ]
  },
  {
    icon: <Cloud className="w-12 h-12 text-purple-600" />,
    name: "CloudGuard",
    description: "Comprehensive cloud security and compliance management",
    features: [
      "Multi-cloud support",
      "Configuration management",
      "Compliance monitoring",
      "Asset discovery"
    ]
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-600" />,
    name: "SecureID",
    description: "Identity and access management solution",
    features: [
      "Multi-factor authentication",
      "Single sign-on",
      "Role-based access",
      "User lifecycle management"
    ]
  }
];

export const Products = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
        className="text-white"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Enterprise-grade security solutions for modern businesses</p>
        </div>
      </ParallaxSection>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">{product.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <h3 className="font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Server className="w-4 h-4 text-purple-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our sales team for a personalized demo</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg transition">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
};