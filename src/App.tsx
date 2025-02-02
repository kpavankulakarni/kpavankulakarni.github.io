import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Lock, Server, Code, Users, ArrowRight, Mail, Globe, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './components/Logo';
import { ParallaxSection } from './components/ParallaxSection';
import { FlipCard } from './components/FlipCard';
import { ProcessStep } from './components/ProcessStep';
import { TestimonialCard } from './components/TestimonialCard';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { Products } from './pages/Products';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Code className="w-12 h-12 text-purple-600" />,
    title: "Application Security",
    description: "Secure your applications with comprehensive testing and monitoring.",
    details: "Our application security services include penetration testing, code review, vulnerability assessment, and continuous security monitoring to protect your applications from threats."
  },
  {
    icon: <Server className="w-12 h-12 text-purple-600" />,
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with advanced security measures.",
    details: "We provide cloud security architecture, configuration management, access control, and compliance monitoring for all major cloud platforms."
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-600" />,
    title: "Enterprise Security",
    description: "Comprehensive security solutions for enterprise organizations.",
    details: "End-to-end enterprise security including threat detection, incident response, security architecture, and policy management."
  },
  {
    icon: <Globe className="w-12 h-12 text-purple-600" />,
    title: "Network Security",
    description: "Secure your network infrastructure against threats.",
    details: "Network security assessment, firewall management, intrusion detection, and prevention systems to protect your network."
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Compliance",
    description: "Meet industry regulations and security standards.",
    details: "Comprehensive compliance services for GDPR, HIPAA, PCI DSS, and other regulatory requirements with regular audits and reporting."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc.",
    content: "Qlucent has transformed our security infrastructure. Their expertise and dedication to protecting our assets is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Michael Chen",
    role: "Security Director",
    company: "Global Finance Ltd",
    content: "The level of service and technical expertise provided by Qlucent is exceptional. They've helped us achieve and maintain our compliance goals.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Emily Rodriguez",
    role: "IT Manager",
    company: "HealthTech Solutions",
    content: "Working with Qlucent has been a game-changer for our organization. Their proactive approach to security gives us peace of mind.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

function Home() {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
            alt="Cybersecurity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <nav className="absolute top-0 left-0 right-0 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold text-white">Qlucent</span>
            </Link>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#about" className="hover:text-purple-400 transition">About</a>
              <a href="#services" className="hover:text-purple-400 transition">Services</a>
              <Link to="/products" className="hover:text-purple-400 transition">Products</Link>
              <Link to="/careers" className="hover:text-purple-400 transition">Careers</Link>
              <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
              Get Started
            </a>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Secure Your Digital Future with Enterprise-Grade Protection</h1>
            <p className="text-xl text-slate-300 mb-8">Protecting your business with advanced cybersecurity solutions, 24/7 monitoring, and expert threat response.</p>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition">
              <span>Schedule a Security Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Qlucent</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We are a leading cybersecurity provider dedicated to protecting businesses from evolving digital threats. Our team of experts delivers comprehensive security solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 ref={titleRef} className={`text-3xl font-bold text-center mb-16 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}>Our Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FlipCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number={1}
              title="Assessment"
              description="Comprehensive security assessment of your infrastructure"
            />
            <ProcessStep
              number={2}
              title="Implementation"
              description="Deploy custom security solutions and controls"
            />
            <ProcessStep
              number={3}
              title="Monitoring"
              description="Continuous security monitoring and threat response"
              isLast
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        className="text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Your Business Needs a Cybersecurity Partner</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Evolving Threats</h3>
            <p>Stay protected against constantly evolving cyber threats and attack vectors</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Complex Compliance</h3>
            <p>Navigate complex regulatory requirements and maintain compliance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Resource Constraints</h3>
            <p>Access expert security resources without maintaining an in-house team</p>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Qlucent?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customized Solutions",
                description: "Tailored security solutions for your specific needs"
              },
              {
                title: "Expert Consulting",
                description: "Access to experienced security consultants"
              },
              {
                title: "Dedicated Support",
                description: "24/7 support and rapid incident response"
              },
              {
                title: "Certified Experts",
                description: "Team of certified security professionals"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        className="text-white"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Healthcare",
              "Finance",
              "Technology",
              "Manufacturing",
              "Retail",
              "Government"
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Security Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Rise of Zero Trust Security",
                excerpt: "Learn how Zero Trust architecture is revolutionizing enterprise security...",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Cloud Security Best Practices",
                excerpt: "Essential security measures for protecting your cloud infrastructure...",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Cybersecurity Trends 2024",
                excerpt: "Stay ahead of emerging threats with our comprehensive analysis...",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-purple-600 font-semibold hover:text-purple-700">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-bold">Qlucent</span>
              </div>
              <p className="text-slate-400 mb-4">Elevate your digital security</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/theqlucent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/qlucent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@qlucent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-slate-400 hover:text-purple-400">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-slate-400">
                <p className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@qlucent.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;