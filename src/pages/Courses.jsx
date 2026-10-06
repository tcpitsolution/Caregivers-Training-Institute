import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Clock3, HeartHandshake, GraduationCap, Hammer,
  MessageCircle, Scissors, Stethoscope, Users, Wrench, Paintbrush, BookOpen
} from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA } from "../components/Nav";

const courses = [
  {
    id: "aged-care-l3",
    category: "Healthcare & Community",
    level: "Level 3",
    duration: "8 Months",
    title: "National Qualification — Aged Care & Community Care",
    desc: "A comprehensive qualification preparing students for professional roles in aged care and community support services. Covers personal care, communication, safety, and working with diverse clients.",
    icon: HeartHandshake,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "aged-care-l2",
    category: "Healthcare & Community",
    level: "Level 2",
    duration: "4 Months",
    title: "National Qualification — Aged Care & Community Care",
    desc: "An entry-level qualification providing foundational skills for working in aged care and community care environments. Ideal for those new to the care sector.",
    icon: HeartHandshake,
    img: "https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "counselling-l5",
    category: "Counselling",
    level: "Level 5",
    duration: "6 Months",
    title: "National Certificate in Counselling",
    desc: "An advanced counselling qualification developing professional skills in therapeutic communication, case management, and ethical practice for community and workplace settings.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "counselling-l4",
    category: "Counselling",
    level: "Level 4",
    duration: "6 Months",
    title: "National Certificate in Counselling",
    desc: "Builds foundational counselling competencies including active listening, communication, and supporting individuals through personal challenges in community or organisational contexts.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tvet-l4",
    category: "Education",
    level: "Level 4",
    duration: "7 Months",
    title: "National Certificate in Teaching of Technical & Vocational Education and Training",
    desc: "Designed for individuals working or aspiring to work as trainers and educators in technical and vocational settings. Covers lesson planning, delivery, assessment, and facilitation skills.",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiling-l3",
    category: "Trades",
    level: "Level 3",
    duration: "6 Months",
    title: "Provider Qualification — Wall & Floor Tiling",
    desc: "A professional-level tiling qualification covering advanced wall and floor tiling techniques, surface preparation, grouting, and quality finishing for residential and commercial projects.",
    icon: Hammer,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiling-l2",
    category: "Trades",
    level: "Level 2",
    duration: "4 Months",
    title: "National Certificate in Tiling",
    desc: "Intermediate tiling skills covering a range of tiling applications, materials, and installation methods for both wall and floor surfaces.",
    icon: Hammer,
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiling-l1",
    category: "Trades",
    level: "Level 1",
    duration: "4 Months",
    title: "National Certificate in Tiling",
    desc: "Entry-level tiling qualification introducing students to basic tiling tools, materials, safety practices, and fundamental installation techniques.",
    icon: Hammer,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "carpentry-l3",
    category: "Trades",
    level: "Level 3",
    duration: "6 Months",
    title: "National Certificate in Carpentry",
    desc: "Covers professional carpentry skills including framing, joinery, finishing, and construction techniques for residential and commercial building projects.",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "welding-l3",
    category: "Trades",
    level: "Level 3",
    duration: "Contact Us",
    title: "National Certificate in Fabrication & Welding",
    desc: "Develops skills in metal fabrication, welding techniques, blueprint reading, and safety practices for industrial and construction environments.",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fashion-l3",
    category: "Creative",
    level: "Level 3",
    duration: "Contact Us",
    title: "National Certificate in Fashion Design",
    desc: "Covers garment construction, pattern making, design principles, fabric selection, and fashion industry skills for aspiring designers and dressmakers.",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "painting-l3",
    category: "Trades",
    level: "Level 3",
    duration: "Contact Us",
    title: "National Certificate in Painting",
    desc: "Provides professional painting skills including surface preparation, paint application techniques, colour theory, and finishing for residential and commercial properties.",
    icon: Paintbrush,
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Healthcare & Community", "Counselling", "Education", "Trades", "Creative"];

export default function Courses() {
  const [active, setActive] = useState("All");

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
            <p>12 nationally accredited qualifications across healthcare, counselling, trades and education — all under the Fiji Qualifications Framework (FQF).</p>
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
            <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
      </section>

      {/* COURSES GRID */}
      <Section eyebrow={`${filtered.length} COURSE${filtered.length !== 1 ? "S" : ""}`} title="Explore Our Qualifications">
        <div className="program-grid">
          {filtered.map((course, i) => {
            const I = course.icon;
            return (
              <motion.article key={course.id} className="program-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fade}>
                <div className="program-img">
                  <motion.img src={course.img} alt={course.title} loading="lazy" initial={{ opacity: 0, scale: 1.08 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .6, ease: "easeOut" }} />
                  <span><I size={18} /></span>
                </div>
                <div className="program-body">
                  <small>{course.category} · {course.level}</small>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <div className="course-meta">
                    <span className="course-tag"><Clock3 size={13} /> {course.duration}</span>
                    <span className="course-tag level-tag">{course.level}</span>
                  </div>
                  <a href={WA} target="_blank" rel="noreferrer" className="text-link" style={{ fontSize: 12, marginTop: 12, display: "inline-flex" }}>Enquire Now <ArrowRight size={16} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ENTRY REQUIREMENTS BANNER */}
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

      <a className="floating-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    </>
  );
}
