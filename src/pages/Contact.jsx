import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA, WA_NADI, WA_SUVA, VIBER_NADI, VIBER_SUVA } from "../components/Nav";

const VIBER_ICON = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M11.4 0C5.5.3.8 4.8.5 10.7c-.2 3.2.8 6.2 2.8 8.5v3.3c0 .4.4.7.8.5l3.1-1.3c1.3.4 2.7.6 4.1.6 6.1 0 11-4.7 11-10.5S17.5-.3 11.4 0zm.1 19.1c-1.3 0-2.5-.2-3.7-.6l-.3-.1-2.2.9v-2.3l-.2-.2C3.4 15.2 2.5 12.5 2.7 9.8 3 5.3 6.9 1.7 11.5 1.5c4.9-.2 9 3.6 9 8.4 0 4.6-4 8.2-9 8.2zm4.9-6.2c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6-.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2z"/>
  </svg>
);

const campuses = [
  {
    name: "Nadi Campus",
    address: "Naicker Street, Nakurakura Sub-Division, Nadi, Fiji",
    phones: ["+679 670 1089", "+679 963 1888"],
    viber: "+679 877 2184",
    viberLink: VIBER_NADI,
    email: "info@pacificskillsfiji.com",
    wa: WA_NADI,
    mapSrc: "https://www.google.com/maps?q=Naicker+Street+Nakurakura+Nadi+Fiji&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Naicker+Street+Nakurakura+Nadi+Fiji",
  },
  {
    name: "Suva Campus",
    address: "Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji",
    phones: ["+679 275 8378"],
    viber: "+679 253 0644",
    viberLink: VIBER_SUVA,
    email: "info@pacificskillsfiji.com",
    wa: WA_SUVA,
    mapSrc: "https://www.google.com/maps?q=Raojibhai+Patel+Street+Suva+Fiji&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Raojibhai+Patel+Street+Suva+Fiji",
  },
];

const courseOptions = [
  "Aged Care & Community Care (Level 2)",
  "Aged Care & Community Care (Level 3)",
  "Counselling (Level 4)",
  "Counselling (Level 5)",
  "Teaching of TVET (Level 4)",
  "Carpentry (Level 3)",
  "Tiling (Level 1)",
  "Tiling (Level 2)",
  "Wall & Floor Tiling (Level 3)",
  "Fabrication & Welding (Level 3)",
  "Fashion Design (Level 3)",
  "Painting (Level 3)",
  "Not sure — please advise",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", course: "", campus: "", contactMethod: "", message: ""
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <span className="eyebrow">CONTACT US</span>
            <h1>Get in <em>Touch</em></h1>
            <p>We have two campuses in Fiji — Nadi and Suva. Reach out by phone, WhatsApp, Viber, email, or fill in our online enquiry form below.</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a href={WA_SUVA}    target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={17} /> WhatsApp Suva</a>
              <a href={VIBER_SUVA} target="_blank" rel="noreferrer" className="btn ghost"><VIBER_ICON /> Viber Suva</a>
              <a href={WA_NADI}    target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp Nadi</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK CONTACT BAR */}
      <section className="stats">
        <div className="container stats-grid" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {[
            ["Opening Hours",    "Mon – Fri, 8:00 AM – 5:00 PM",    Clock3],
            ["Nadi Campus",      "+679 670 1089 / +679 963 1888",    Phone],
            ["Suva Campus",      "+679 275 8378",                    Phone],
            ["Viber & WhatsApp", "Available on both campuses",       MessageCircle],
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
                  <span>{c.phones.map((p, i) => <a key={p} href={`tel:${p.replace(/\s/g,"")}`}>{p}{i < c.phones.length - 1 ? " / " : ""}</a>)}</span>
                </div>
                <div className="campus-detail">
                  <VIBER_ICON />
                  <span>Viber: <a href={c.viberLink}>{c.viber}</a></span>
                </div>
                <div className="campus-detail"><Mail size={16} /><a href={`mailto:${c.email}`}>{c.email}</a></div>
                <div className="campus-detail"><Clock3 size={16} /><span>Mon–Fri, 8:00 AM – 5:00 PM</span></div>
                <div className="campus-actions">
                  <a href={c.wa}        target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={15} /> WhatsApp</a>
                  <a href={c.viberLink} target="_blank" rel="noreferrer" className="btn light viber-btn"><VIBER_ICON /> Viber</a>
                  <a href={c.mapLink}   target="_blank" rel="noreferrer" className="btn light"><MapPin size={15} /> Directions</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ENQUIRY FORM */}
      <Section eyebrow="ONLINE ENQUIRY" title="Send Us an Enquiry">
        <div className="enquiry-layout">

          {/* LEFT — contact info */}
          <div className="enquiry-info">
            <p className="lead" style={{fontSize:18}}>Have a question about our courses, entry requirements or enrolment? Fill in the form and our admissions team will get back to you promptly.</p>
            <div className="contact-items">
              <div><Phone /><span><b>Nadi Campus</b><small>+679 670 1089 / +679 963 1888</small></span></div>
              <div><Phone /><span><b>Suva Campus</b><small>+679 275 8378</small></span></div>
              <div><VIBER_ICON /><span><b>Viber — Nadi</b><small>+679 877 2184</small></span></div>
              <div><VIBER_ICON /><span><b>Viber — Suva</b><small>+679 253 0644</small></span></div>
              <div><MessageCircle /><span><b>WhatsApp — Nadi</b><small>+679 670 1089</small></span></div>
              <div><MessageCircle /><span><b>WhatsApp — Suva</b><small>+679 998 0764</small></span></div>
              <div><Mail /><span><b>Email</b><small>info@pacificskillsfiji.com</small></span></div>
              <div><Clock3 /><span><b>Opening Hours</b><small>Monday – Friday, 8:00 AM – 5:00 PM</small></span></div>
            </div>
            <div className="enquiry-reach">
              <a href={WA_NADI}    target="_blank" rel="noreferrer" className="reach-btn wa"><MessageCircle size={15} /> WhatsApp Nadi</a>
              <a href={WA_SUVA}    target="_blank" rel="noreferrer" className="reach-btn wa"><MessageCircle size={15} /> WhatsApp Suva</a>
              <a href={VIBER_NADI} target="_blank" rel="noreferrer" className="reach-btn vb"><VIBER_ICON /> Viber Nadi</a>
              <a href={VIBER_SUVA} target="_blank" rel="noreferrer" className="reach-btn vb"><VIBER_ICON /> Viber Suva</a>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="enquiry-form-wrap">
            {submitted ? (
              <div className="success">
                <div><Check /></div>
                <h3>Enquiry Received!</h3>
                <p>Thank you for reaching out. Our admissions team will contact you shortly via your preferred method.</p>
                <button type="button" className="text-link" onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",course:"",campus:"",contactMethod:"",message:"" }); }}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form enq-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>

                <div className="form-row">
                  <label>Full Name *
                    <input required placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                  </label>
                  <label>Phone Number *
                    <input required placeholder="+679..." value={form.phone} onChange={e => set("phone", e.target.value)} />
                  </label>
                </div>

                <label>Email Address *
                  <input type="email" required placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
                </label>

                <label>Course of Interest *
                  <select required value={form.course} onChange={e => set("course", e.target.value)}>
                    <option value="">Select a course</option>
                    {courseOptions.map(c => <option key={c}>{c}</option>)}
                  </select>
                </label>

                <label>Preferred Study Location *
                  <select required value={form.campus} onChange={e => set("campus", e.target.value)}>
                    <option value="">Select campus</option>
                    <option>Nadi Campus</option>
                    <option>Suva Campus</option>
                    <option>No preference</option>
                  </select>
                </label>

                <label>Preferred Contact Method
                  <select value={form.contactMethod} onChange={e => set("contactMethod", e.target.value)}>
                    <option value="">Select preferred method</option>
                    <option>Phone Call</option>
                    <option>WhatsApp</option>
                    <option>Viber</option>
                    <option>Email</option>
                  </select>
                </label>

                <label>Your Question or Message
                  <textarea rows="4" placeholder="Tell us what you would like to know — course details, entry requirements, fees, intake dates..." value={form.message} onChange={e => set("message", e.target.value)} />
                </label>

                <p className="form-note">* Required fields. We will respond within 1–2 business days.</p>
                <button className="btn primary" type="submit" style={{width:"100%",justifyContent:"center"}}>
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
