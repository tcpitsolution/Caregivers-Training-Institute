import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BookOpen, Check, GraduationCap,
  HeartHandshake, MapPin, MessageCircle, ShieldCheck,
  Sparkles, Target, Users, Zap
} from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA } from "../components/Nav";

const images = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  classroom: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
  instructor: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  teamwork: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
};

const values = [
  ["Excellence", "We are committed to delivering high-quality training that meets national standards and exceeds learner expectations.", Award],
  ["Integrity", "We operate with honesty, transparency and accountability in everything we do.", ShieldCheck],
  ["Inclusivity", "We welcome learners from all backgrounds and create an environment where everyone can thrive.", Users],
  ["Empowerment", "We believe education transforms lives — we equip learners with skills, confidence and purpose.", Zap],
  ["Relevance", "Our programs are designed around real industry needs, ensuring graduates are workplace-ready.", BookOpen],
  ["Community", "We are committed to strengthening Fiji's communities through skilled, compassionate professionals.", HeartHandshake],
];

const milestones = [
  ["Founded", "Caregivers Training Institute was established to address the growing demand for skilled healthcare and community care workers in Fiji."],
  ["FQF Accreditation", "All programs were formally accredited under the Fiji Qualifications Framework (FQF), ensuring nationally recognised qualifications."],
  ["HEC Recognition", "The institute received recognition from the Fiji Higher Education Commission (HEC), affirming its commitment to quality tertiary education."],
  ["Suva Campus Opens", "A second campus was established in Suva, expanding access to quality vocational training for learners across Fiji's capital."],
  ["12 Qualifications", "The institute now offers 12 nationally accredited qualifications spanning healthcare, counselling, trades and education."],
];

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <span className="eyebrow"><Sparkles size={13} /> ABOUT US</span>
            <h1>Who We Are &amp; <em>Why We Exist</em></h1>
            <p>Pacific Health &amp; Skills Institute is dedicated to building skilled, confident and compassionate professionals across Fiji through nationally accredited vocational training.</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link to="/courses" className="btn primary">Explore Courses <ArrowRight size={17} /></Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Enquire Now</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <Section eyebrow="OUR STORY" title="A History of Purpose-Driven Education">
        <div className="about-grid">
          <div className="collage">
            <motion.img className="collage-main" src={images.classroom} alt="Students in class" loading="lazy" initial={{ opacity: 0, scale: 1.06 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, ease: "easeOut" }} />
            <motion.img className="collage-small one" src={images.instructor} alt="Instructor" loading="lazy" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .2, ease: "easeOut" }} />
            <div className="experience"><span>PHSI</span><b>Est. in Fiji.</b></div>
          </div>
          <div className="about-copy">
            <p className="lead">Caregivers Training Institute T/A Pacific Health &amp; Skills Institute was founded with a clear purpose: to provide Fiji with a pipeline of skilled, work-ready professionals in healthcare, community care, trades and education.</p>
            <p>What began as a focused response to the shortage of trained caregivers in Fiji has grown into a multi-campus institute offering 12 nationally accredited qualifications. From our Nadi campus to our Suva campus, we have consistently expanded our reach while maintaining our commitment to quality, practical and accessible education.</p>
            <p>Today, PHSI is recognised by the Fiji Higher Education Commission (HEC) and all our qualifications are accredited under the Fiji Qualifications Framework (FQF) — giving our graduates credentials that are respected across Fiji and the Pacific.</p>
            <div className="check-list">
              {["FQF Accredited Qualifications", "HEC Recognised Institute", "Two Campuses — Nadi & Suva", "12 National Qualifications", "Experienced Industry Trainers", "Practical, Career-Focused Learning"].map(x => <span key={x}><Check size={16} />{x}</span>)}
            </div>
          </div>
        </div>
      </Section>

      {/* VISION & MISSION */}
      <Section eyebrow="VISION & MISSION" title="What Drives Us Forward" dark>
        <div className="vm-full-grid">
          <motion.div className="vm-full-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <Target size={32} />
            <h3>Our Vision</h3>
            <p>To be Fiji's leading provider of quality vocational and professional training that empowers individuals, strengthens communities and contributes to a skilled and prosperous Pacific.</p>
          </motion.div>
          <motion.div className="vm-full-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <Sparkles size={32} />
            <h3>Our Mission</h3>
            <p>To deliver accessible, practical and nationally accredited training that equips learners with the skills, confidence and values needed for meaningful employment, professional growth and lifelong learning.</p>
          </motion.div>
          <motion.div className="vm-full-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <HeartHandshake size={32} />
            <h3>Our Commitment</h3>
            <p>We are committed to maintaining the highest standards of education, supporting every learner on their journey, and continuously improving our programs to meet the evolving needs of industry and community.</p>
          </motion.div>
        </div>
      </Section>

      {/* VALUES */}
      <Section eyebrow="OUR VALUES" title="The Principles That Guide Us">
        <div className="feature-grid" style={{ background: "none", border: "none", gap: 16 }}>
          {values.map(([title, desc, I], i) => (
            <motion.div key={title} className="outcome-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <I size={26} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* MILESTONES */}
      <Section eyebrow="OUR JOURNEY" title="Growth &amp; Development" dark>
        <div className="timeline">
          {milestones.map(([title, desc], i) => (
            <motion.div key={title} className="timeline-item" initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .55, delay: i * 0.08, ease: "easeOut" }}>
              <div className="timeline-dot">{i + 1}</div>
              <div className="timeline-body">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP COMMITMENT */}
      <Section eyebrow="LEADERSHIP" title="Our Commitment to Quality Education">
        <div className="leadership-grid">
          <motion.div className="leadership-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="lead">At PHSI, leadership means accountability — to our learners, our industry partners, and the communities we serve.</p>
            <p>Our management team and trainers bring a wealth of industry experience and a shared passion for transforming lives through education. We invest in our trainers, continuously review our curriculum, and maintain close relationships with industry to ensure our graduates are always in demand.</p>
            <p>We hold ourselves to the standards set by the Fiji Qualifications Framework and the Fiji Higher Education Commission — not just because it is required, but because our learners deserve nothing less.</p>
            <div className="check-list" style={{ marginTop: 24 }}>
              {["Qualified & Experienced Trainers", "Industry-Aligned Curriculum", "Regular Program Reviews", "Learner Support Services", "Transparent Admissions Process", "Commitment to Continuous Improvement"].map(x => <span key={x}><Check size={16} />{x}</span>)}
            </div>
          </motion.div>
          <motion.div className="leadership-img-wrap" initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, ease: "easeOut" }}>
            <img src={images.teamwork} alt="PHSI team and students" loading="lazy" />
            <div className="leadership-badge">
              <GraduationCap size={20} />
              <span>Quality Education<br /><small>FQF &amp; HEC Compliant</small></span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CAMPUSES */}
      <Section eyebrow="OUR CAMPUSES" title="Two Locations Across Fiji">
        <div className="campus-about-grid">
          {[
            { name: "Nadi Campus", addr: "Naicker Street, Nakurakura Sub-Division, Nadi, Fiji", phone: "+679 670 1089", img: images.students },
            { name: "Suva Campus", addr: "Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji", phone: "+679 998 0764", img: images.instructor },
          ].map(({ name, addr, phone, img }) => (
            <motion.div key={name} className="campus-about-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <img src={img} alt={name} loading="lazy" />
              <div className="campus-about-info">
                <h3>{name}</h3>
                <p><MapPin size={14} /> {addr}</p>
                <p><a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a></p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Join PHSI?</h2>
            <p>Explore our courses and take the first step toward a rewarding career.</p>
          </div>
          <div className="cta-btns">
            <Link to="/admissions" className="btn primary">How to Apply <ArrowRight size={17} /></Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
