import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BookOpen, Check, ChevronDown, Clock3,
  HeartHandshake, GraduationCap, Hammer, MapPin,
  MessageCircle, Scissors, Send, Users, Wrench
} from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA, VIBER_NADI, VIBER_SUVA } from "../components/Nav";
import imgAgedCare    from "../images/Caring Connection in Home Health Care.png";
import imgCounselling from "../images/Warm Counselling Session in a Modern Office.png";
import imgTVET        from "../images/Interactive TVET Classroom Training.png";
import imgCarpentry   from "../images/Hands-On Carpentry Workshop.png";
import imgWelding     from "../images/Industrial Welding Workshop.png";
import imgFashion     from "../images/Fashion Design Studio Inspiration.png";

const courses = [
  {
    id: "aged-care",
    category: "Healthcare & Community",
    level: "Level 2 & 3",
    duration: "4 – 8 Months",
    mode: "Full-Time",
    campus: "Nadi & Suva",
    fqf: "FQF Accredited",
    title: "Aged Care & Community Care",
    desc: "Prepares students for professional roles supporting elderly and community clients. Covers personal care, communication, safety and working with diverse individuals.",
    icon: HeartHandshake,
    img: imgAgedCare,
    entry: [
      "Minimum age: 18 years",
      "Year 10 pass or equivalent",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
      "2 passport-size photos",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["Aged Care Worker", "Community Support Worker", "Home Care Assistant", "Disability Support Worker"],
  },
  {
    id: "counselling",
    category: "Counselling",
    level: "Level 4 & 5",
    duration: "6 Months each",
    mode: "Full-Time",
    campus: "Nadi & Suva",
    fqf: "FQF Accredited",
    title: "Counselling",
    desc: "Develops therapeutic communication, case management and ethical practice skills for community and workplace counselling roles.",
    icon: Users,
    img: imgCounselling,
    entry: [
      "Minimum age: 18 years",
      "Year 12 pass or equivalent (Level 5 requires Level 4 completion)",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
      "2 passport-size photos",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["Community Counsellor", "Support Officer", "Welfare Worker", "Youth Worker"],
  },
  {
    id: "tvet",
    category: "Education",
    level: "Level 4",
    duration: "7 Months",
    mode: "Full-Time",
    campus: "Nadi & Suva",
    fqf: "FQF Accredited",
    title: "Teaching of TVET",
    desc: "For aspiring vocational trainers and educators. Covers lesson planning, delivery, assessment and facilitation skills for technical and vocational settings.",
    icon: GraduationCap,
    img: imgTVET,
    entry: [
      "Minimum age: 18 years",
      "Year 12 pass or equivalent",
      "Relevant trade or vocational experience preferred",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["TVET Trainer", "Vocational Educator", "Skills Facilitator", "Training Coordinator"],
  },
  {
    id: "carpentry",
    category: "Trades",
    level: "Level 3",
    duration: "6 Months",
    mode: "Full-Time",
    campus: "Nadi",
    fqf: "FQF Accredited",
    title: "Carpentry",
    desc: "Professional carpentry skills including framing, joinery, finishing and construction techniques for residential and commercial building projects.",
    icon: Wrench,
    img: imgCarpentry,
    entry: [
      "Minimum age: 16 years",
      "Year 10 pass or equivalent",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
      "2 passport-size photos",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["Carpenter", "Construction Worker", "Joinery Specialist", "Self-Employed Tradesperson"],
  },
  {
    id: "welding",
    category: "Trades",
    level: "Level 3",
    duration: "Contact Us",
    mode: "Full-Time",
    campus: "Nadi",
    fqf: "FQF Accredited",
    title: "Fabrication & Welding",
    desc: "Metal fabrication, welding techniques, blueprint reading and safety practices for industrial and construction environments.",
    icon: Hammer,
    img: imgWelding,
    entry: [
      "Minimum age: 16 years",
      "Year 10 pass or equivalent",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
      "2 passport-size photos",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["Welder", "Metal Fabricator", "Industrial Technician", "Self-Employed Tradesperson"],
  },
  {
    id: "fashion",
    category: "Creative",
    level: "Level 3",
    duration: "Contact Us",
    mode: "Full-Time",
    campus: "Nadi",
    fqf: "FQF Accredited",
    title: "Fashion Design",
    desc: "Garment construction, pattern making, design principles and fabric selection for aspiring designers and dressmakers.",
    icon: Scissors,
    img: imgFashion,
    entry: [
      "Minimum age: 16 years",
      "Year 10 pass or equivalent",
      "LLN&D Pre-Entry Assessment",
      "Certified copy of birth certificate",
      "Current CV",
      "2 passport-size photos",
    ],
    fees: "Contact the admissions office for current fee schedule. Payment plans may be available.",
    outcomes: ["Fashion Designer", "Dressmaker / Tailor", "Garment Technician", "Self-Employed Designer"],
  },
];

const categories = ["All", "Healthcare & Community", "Counselling", "Education", "Trades", "Creative"];

const courseOptions = courses.map(c => `${c.title} (${c.level})`);

export default function Courses() {
  const [active, setActive]       = useState("All");
  const [expanded, setExpanded]   = useState(null);
  const [enquirySent, setEnquirySent] = useState(false);

  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <span className="eyebrow">OUR COURSES</span>
            <h1>Training Programs &amp; <em>Qualifications</em></h1>
            <p>Nationally accredited qualifications across healthcare, counselling, trades and education — all under the Fiji Qualifications Framework (FQF).</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link to="/admissions" className="btn primary">How to Apply <ArrowRight size={17} /></Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Enquire on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="filter-bar">
        <div className="container filter-inner">
          {categories.map(c => (
            <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => { setActive(c); setExpanded(null); }}>{c}</button>
          ))}
        </div>
      </section>

      {/* COURSES — expandable detail cards */}
      <Section eyebrow="FEATURED PROGRAMS" title="Explore Our Qualifications">
        <div className="course-detail-grid">
          {filtered.map((course) => {
            const I = course.icon;
            const isOpen = expanded === course.id;
            return (
              <motion.article key={course.id} className={`course-detail-card ${isOpen ? "open" : ""}`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fade}>
                {/* IMAGE */}
                <div className="cd-img">
                  <img src={course.img} alt={course.title} loading="lazy" />
                  <span className="cd-cat-badge"><I size={14} /> {course.category}</span>
                </div>

                {/* SUMMARY */}
                <div className="cd-body">
                  <div className="cd-tags">
                    <span className="course-tag level-tag"><Award size={12} /> {course.level}</span>
                    <span className="course-tag"><Clock3 size={12} /> {course.duration}</span>
                    <span className="course-tag"><MapPin size={12} /> {course.campus}</span>
                    <span className="course-tag accred-tag"><Check size={12} /> {course.fqf}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p className="cd-desc">{course.desc}</p>

                  <button className="cd-toggle" onClick={() => setExpanded(isOpen ? null : course.id)}>
                    {isOpen ? "Hide Details" : "View Entry Requirements & Details"}
                    <ChevronDown size={16} className={isOpen ? "rotated" : ""} />
                  </button>

                  {/* EXPANDED DETAIL */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className="cd-expanded" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="cd-expanded-grid">
                          <div>
                            <h4><BookOpen size={15} /> Entry Requirements</h4>
                            <ul>
                              {course.entry.map(e => <li key={e}><Check size={13} />{e}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4><Award size={15} /> Career Outcomes</h4>
                            <ul>
                              {course.outcomes.map(o => <li key={o}><Check size={13} />{o}</li>)}
                            </ul>
                            <h4 style={{marginTop:18}}><GraduationCap size={15} /> Fees</h4>
                            <p className="cd-fees">{course.fees}</p>
                          </div>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="btn primary" style={{marginTop:16,display:"inline-flex"}}>
                          <MessageCircle size={15} /> Enquire About This Course
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="full-course-note">
          <p>We also offer <strong>Tiling (Level 1, 2 &amp; 3)</strong> and <strong>Painting (Level 3)</strong>.</p>
          <p>Contact us for the complete course list, current intake dates and fee details.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 18 }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={16} /> WhatsApp Us</a>
            <Link to="/contact" className="btn light">Contact Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </Section>

      {/* ONLINE ENQUIRY FORM */}
      <section className="quick-enquiry-band">
        <div className="container">
          <div className="qe-inner">
            <div className="qe-copy">
              <span className="eyebrow" style={{color:"#6fc9b8"}}>ONLINE ENQUIRY</span>
              <h2>Enquire About a Course</h2>
              <p>Select your course of interest, preferred campus and share your contact details. Our admissions team will respond promptly.</p>
              <div className="qe-contacts">
                <a href={WA} target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp Us</a>
                <a href={VIBER_NADI} target="_blank" rel="noreferrer" style={{background:"rgba(126,87,194,.15)",borderColor:"rgba(126,87,194,.35)",color:"#9c6fe4"}}>&#x2706; Viber Nadi</a>
                <a href={VIBER_SUVA} target="_blank" rel="noreferrer" style={{background:"rgba(126,87,194,.15)",borderColor:"rgba(126,87,194,.35)",color:"#9c6fe4"}}>&#x2706; Viber Suva</a>
                <Link to="/contact"><MapPin size={14} /> Find Our Campuses</Link>
              </div>
            </div>
            {enquirySent ? (
              <div className="qe-success">
                <div className="qe-success-icon"><Check size={22} /></div>
                <h3>Enquiry Received!</h3>
                <p>Thank you. Our admissions team will contact you shortly.</p>
                <button className="text-link" style={{color:"#6fc9b8"}} onClick={() => setEnquirySent(false)}>Send another enquiry</button>
              </div>
            ) : (
              <form className="qe-form" onSubmit={e => { e.preventDefault(); setEnquirySent(true); }}>
                <div className="qe-row">
                  <input required placeholder="Full Name" />
                  <input required placeholder="Phone Number (+679...)" />
                </div>
                <input type="email" required placeholder="Email Address" />
                <select required defaultValue="">
                  <option value="" disabled>Select Course of Interest</option>
                  {courseOptions.map(c => <option key={c}>{c}</option>)}
                </select>
                <select defaultValue="">
                  <option value="" disabled>Preferred Campus</option>
                  <option>Nadi Campus</option>
                  <option>Suva Campus</option>
                </select>
                <textarea rows="3" placeholder="Any questions or additional information..." />
                <button className="btn primary" type="submit" style={{width:"100%"}}>Send Enquiry <Send size={15} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Not Sure Which Course to Choose?</h2>
            <p>Each course has specific entry requirements. Contact us before enrolling to confirm your eligibility.</p>
          </div>
          <div className="cta-btns">
            <Link to="/admissions" className="btn primary">View Requirements <ArrowRight size={17} /></Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Ask Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
