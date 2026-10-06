import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "../image.png";

export const WA_NADI = "https://wa.me/6796701089?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.";
export const WA_SUVA = "https://wa.me/6799980764?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.";
export const WA = WA_SUVA;

const links = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Admissions", to: "/admissions" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Caregivers Training Institute Logo" className="nav-logo" />
        </Link>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? "active-link" : ""} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
        <a className="nav-wa" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Us</a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  );
}
