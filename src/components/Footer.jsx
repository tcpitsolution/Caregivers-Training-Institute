import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "../image.png";
import { WA_NADI, WA_SUVA } from "./Nav";

const links = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Admissions", to: "/admissions" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <img src={logo} alt="Caregivers Training Institute Logo" className="footer-logo" />
          </Link>
          <p>T/A Pacific Health &amp; Skills Institute — Professional training accredited under the Fiji Qualifications Framework (FQF).</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {links.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </div>
        <div>
          <h4>Nadi Campus</h4>
          <span><MapPin size={12} style={{display:"inline",marginRight:5}}/>Naicker Street, Nakurakura Sub-Division, Nadi</span>
          <a href="tel:+6796701089"><Phone size={12} style={{display:"inline",marginRight:5}}/>+679 670 1089</a>
          <a href={WA_NADI} target="_blank" rel="noreferrer"><MessageCircle size={12} style={{display:"inline",marginRight:5}}/>WhatsApp Nadi</a>
        </div>
        <div>
          <h4>Suva Campus</h4>
          <span><MapPin size={12} style={{display:"inline",marginRight:5}}/>Level 3, Gurbachan Singh Building, Raojibhai Patel St, Suva</span>
          <a href="tel:+6799980764"><Phone size={12} style={{display:"inline",marginRight:5}}/>+679 998 0764</a>
          <a href={WA_SUVA} target="_blank" rel="noreferrer"><MessageCircle size={12} style={{display:"inline",marginRight:5}}/>WhatsApp Suva</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Caregivers Training Institute T/A Pacific Health &amp; Skills Institute. All Rights Reserved.</span>
        <span>Mon–Fri 8am–5pm &nbsp;|&nbsp; Powered by <a href="https://www.tcpitsolution.in/" target="_blank" rel="noreferrer">TCP IT Solution</a></span>
      </div>
    </footer>
  );
}
