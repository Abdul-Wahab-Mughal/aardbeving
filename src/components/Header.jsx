import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Header({ navItems }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur border-b-[15px] border-[--border]">
      <div className=" px-5 lg:px-10 xl:px-20 flex justify-between m-auto container">
        <Link to="/" className="flex-shrink-0 pt-2">
          <img
            src={logo}
            alt="Aardbeving Adviesbureau"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-end gap-8 py-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-[--accent] ${
                  location.pathname === item.path
                    ? "text-[--foreground] border-b-2 border-foreground pb-0.5"
                    : "text-[--muted-foreground]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[--foreground] py-3"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className=" absolute lg:hidden bg-[--background] border-t border-[--border] w-full">
          <ul className="container p-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-body text-base py-1 ${
                    location.pathname === item.path
                      ? "text-[--foreground] font-semibold"
                      : "text-[--muted-foreground]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
