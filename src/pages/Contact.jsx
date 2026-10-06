import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA, WA_NADI, WA_SUVA } from "../components/Nav";

const campuses = [
  {
    name: "Nadi Campus",
    address: "Naicker Street, Nakurakura Sub-Division, Nadi, Fiji",
    phones: ["+679 670 1089", "+679 963 1888", "+679 877 2184"],
    viber: "+679 877 2184",
    wa: WA_NADI,
    mapSrc: "https://www.google.com/maps?q=Naicker+Street+Nakurakura+Nadi+Fiji&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Naicker+Street+Nakurakura+Nadi+Fiji",
  },
  {
    name: "Suva Campus",
    address: "Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji",
    phones: ["+679 879 1035", "+679 998 0764", "+679 963 1888"],
    viber: "+679 253 0644",
    wa: WA_SUVA,
    mapSrc: "https://www.google.com/maps?q=Raojibhai+Patel+Street+Suva+Fiji&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Raojibhai+Patel+Street+Suva+Fiji",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState("");

  const courseOptions = [
    "National Qualification — Aged Care & Community Care (Level 3)",
    "National Qualification — Aged Care & Community Care (Level 2)",
    "National Certificate in Counselling (Level 5)",
    "National Certificate in Counselling (Level 4)",
    "National Certificate in Teaching of TVET (Level 4)",
    "Provider Qualification — Wall & Floor Tiling (Level 3)",
    "National Certificate in Tiling (Level 2)",
    "National Certificate in Tiling (Level 1)",
    "National Certificate in Carpentry (Level 3)",
    "National Certificate in Fabrication & Welding (Level 3)",
    "National Certificate in Fashion Design (Level 3)",
    "National Certificate in Painting (Level 3)",
  ];

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <span className="eyebrow">CONTACT US</span>
            <h1>Get in <em>Touch</em></h1>
            <p>We have two campuses in Fiji — Nadi and Suva. Reach out to us by phone, WhatsApp, Viber, or visit us in person.</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a href={WA_SUVA} target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={17} /> WhatsApp Suva</a>
              <a href={WA_NADI} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp Nadi</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOURS BANNER */}
      <section className="stats">
        <div className="container stats-grid">
          {[
            ["Opening Hours", "Monday – Friday, 8:00 AM – 5:00 PM", Clock3],
            ["Nadi Campus", "+679 670 1089 / +679 963 1888", Phone],
            ["Suva Campus", "+679 998 0764 / +679 879 1035", Phone],
            ["WhatsApp Available", "Quick enquiries on both campuses", MessageCircle],
          ].map(([a, b, I]) => <div className="stat" key={a}><I /><div><b>{a}</b><span>{b}</span></div></div>)}
        </div>
      </section>

      {/* CAMPUS CARDS */}
      <Section eyebrow="OUR CAMPUSES" title="Find Us in Nadi &amp; Suva">
        <div className="campus-grid">
          {campuses.map(c => (
            <motion.div key={c.name} className="campus-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <div className="campus-map">
                <iframe title={`${c.name} map`} loading="lazy" src={c.mapSrc} />
              </div>
              <div className="campus-info">
                <h3>{c.name}</h3>
                <div className="campus-detail"><MapPin size={16} /><span>{c.address}</span></div>
                <div className="campus-detail">
                  <Phone size={16} />
                  <span>{c.phones.map((p, i) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}{i < c.phones.length - 1 ? " / " : ""}</a>)}</span>
                </div>
                <div className="campus-detail"><MessageCircle size={16} /><span>Viber: {c.viber}</span></div>
                <div className="campus-detail"><Clock3 size={16} /><span>Mon–Fri, 8:00 AM – 5:00 PM</span></div>
                <div className="campus-actions">
                  <a href={c.wa} target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={16} /> WhatsApp</a>
                  <a href={c.mapLink} target="_blank" rel="noreferrer" className="btn light"><MapPin size={16} /> Directions</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section eyebrow="SEND AN ENQUIRY" title="Contact Our Admissions Team">
        <div className="contact-grid">
          <div className="contact-copy">
            <p>Have questions about our programs, entry requirements, or enrolment? Fill in the form and our team will get back to you.</p>
            <div className="contact-items">
              <div><Phone /><span><b>Nadi Campus</b><small>+679 670 1089 / +679 963 1888 / +679 877 2184</small></span></div>
              <div><Phone /><span><b>Suva Campus</b><small>+679 879 1035 / +679 998 0764 / +679 963 1888</small></span></div>
              <div><MessageCircle /><span><b>Viber — Nadi</b><small>+679 877 2184</small></span></div>
              <div><MessageCircle /><span><b>Viber — Suva</b><small>+679 253 0644</small></span></div>
              <div><Clock3 /><span><b>Opening Hours</b><small>Monday – Friday, 8:00 AM – 5:00 PM</small></span></div>
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className="btn primary">WhatsApp Us <MessageCircle size={17} /></a>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            {submitted ? (
              <div className="success">
                <div><Check /></div>
                <h3>Enquiry Received</h3>
                <p>This is a frontend demo. Connect the form to your email/CRM/backend before launch.</p>
                <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Full Name<input required placeholder="Your full name" /></label>
                  <label>Phone Number<input required placeholder="+679..." /></label>
                </div>
                <label>Email<input type="email" required placeholder="you@example.com" /></label>
                <label>Course of Interest
                  <select value={program} onChange={e => setProgram(e.target.value)}>
                    <option value="">Select a course (optional)</option>
                    {courseOptions.map(c => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label>Preferred Campus
                  <select>
                    <option value="">Select campus</option>
                    <option>Nadi Campus</option>
                    <option>Suva Campus</option>
                  </select>
                </label>
                <label>Message<textarea rows="4" placeholder="Tell us what you would like to know..." /></label>
                <button className="btn primary" type="submit">Send Enquiry <Send size={16} /></button>
              </>
            )}
          </form>
        </div>
      </Section>

      <a className="floating-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    </>
  );
}
