import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                  F
                </div>
                <span className="text-xl font-bold text-white tracking-wide">
                  FIT<span className="text-indigo-400">LIFE</span>
                </span>
              </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering you to reach your full potential through world-class training, community, and technology.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
              <li><Link to="/press" className="hover:text-indigo-400 transition">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
              <li><Link to="/login" className="hover:text-indigo-400 transition">Member Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-indigo-400 transition">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
