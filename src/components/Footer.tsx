import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer id="global-footer" className="bg-[#0A0A0A] text-white py-16 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and brief summary */}
        <div className="space-y-4">
          <h2 className="font-cormorant text-2xl tracking-widest font-medium text-white">
            BYRNE COMPANY
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-xs leading-relaxed">
            Acquisition and disposition of premier shopping centers across the United States.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Navigation
          </h3>
          <ul className="space-y-2 font-sans text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Current Listings", path: "/properties" },
              { label: "Sold Properties", path: "/sold-properties" },
              { label: "Journal Insights", path: "/journal" },
              { label: "Contact Us", path: "/contact" }
            ].map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className="text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div className="space-y-4">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Headquarters
          </h3>
          <ul className="space-y-3 font-sans text-sm text-neutral-300">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
              <span>214.343.6996</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
              <span>Dallas, Texas</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
              <span>info@byrnecompany.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-sans space-y-4 md:space-y-0">
        <p>&copy; 2026 Byrne Company. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
          <a 
            href="https://getgolive.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
            style={{ fontSize: '12px', color: '#888888', textAlign: 'right' }}
          >
            Demo Made By getGoLive.io
          </a>
        </div>
      </div>
    </footer>
  );
}
