import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Check, MessageCircle, ShieldCheck, Clock3, BadgeCheck, FileText, Users } from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA } from "../components/Nav";

const conditions = [
  {
    icon: Check,
    title: "Eligibility",
    desc: "Certificates are issued only to participants who have completed all required training sessions and met the assessment criteria.",
  },
  {
    icon: Award,
    title: "Accreditation & Processing",
    desc: "Certificate processing is overseen by the Fiji Higher Education Commission (HEC). All National Qualifications are accredited under the Fiji Qualifications Framework (FQF), ensuring compliance with national standards.",
  },
  {
    icon: Users,
    title: "Collection Process",
    desc: "Certificates may be collected in person from the Administration Office. Students will be notified once their certificate is ready for release.",
  },
  {
    icon: FileText,
    title: "Outstanding Fees",
    desc: "Certificates will not be released until all outstanding fees have been settled in full.",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    desc: "Each certificate is officially signed and stamped by the Institute and recognised under HEC's accreditation process to confirm authenticity.",
  },
];

const qualifications = [
  ["National Qualification — Aged Care & Community Care", "Level 3", "8 Months", "FQF Accredited"],
  ["National Qualification — Aged Care & Community Care", "Level 2", "4 Months", "FQF Accredited"],
  ["National Certificate in Counselling", "Level 5", "6 Months", "FQF Accredited"],
  ["National Certificate in Counselling", "Level 4", "6 Months", "FQF Accredited"],
  ["National Certificate in Teaching of TVET", "Level 4", "7 Months", "FQF Accredited"],
  ["Provider Qualification — Wall & Floor Tiling", "Level 3", "6 Months", "FQF Accredited"],
  ["National Certificate in Tiling", "Level 2", "4 Months", "FQF Accredited"],
  ["National Certificate in Tiling", "Level 1", "4 Months", "FQF Accredited"],
  ["National Certificate in Carpentry", "Level 3", "6 Months", "FQF Accredited"],
  ["National Certificate in Fabrication & Welding", "Level 3", "Contact Us", "FQF Accredited"],
  ["National Certificate in Fashion Design", "Level 3", "Contact Us", "FQF Accredited"],
  ["National Certificate in Painting", "Level 3", "Contact Us", "FQF Accredited"],
];

export default function Certificates() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <span className="eyebrow">CERTIFICATES</span>
            <h1>Your Nationally Accredited <em>Certificate</em></h1>
            <p>All qualifications are accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC).</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link to="/admissions" className="btn primary">Start Enrolling <ArrowRight size={17} /></Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Ask on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACCREDITATION BADGES */}
      <section className="stats">
        <div className="container stats-grid">
          {[
            ["FQF Accredited", "Fiji Qualifications Framework", Award],
            ["HEC Recognised", "Fiji Higher Education Commission", ShieldCheck],
            ["Officially Signed", "Signed & stamped by the Institute", BadgeCheck],
            ["Nationally Valid", "Recognised across Fiji", Check],
          ].map(([a, b, I]) => <div className="stat" key={a}><I /><div><b>{a}</b><span>{b}</span></div></div>)}
        </div>
      </section>

      {/* CONDITIONS */}
      <Section eyebrow="CERTIFICATE ISSUANCE" title="Certificates — Conditions & Process">
        <p style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: 700, marginBottom: 40 }}>
          Certificates are provided to students upon successful completion of the training program, subject to the following conditions:
        </p>
        <div className="cert-grid">
          {conditions.map(({ icon: I, title, desc }, idx) => (
            <motion.div key={title} className="cert-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: idx * 0.08 }}>
              <div className="cert-icon"><I size={22} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* QUALIFICATIONS TABLE */}
      <Section eyebrow="AVAILABLE QUALIFICATIONS" title="Certificates We Issue" dark>
        <div className="qual-table">
          <div className="qual-header">
            <span>Qualification</span>
            <span>Level</span>
            <span>Duration</span>
            <span>Status</span>
          </div>
          {qualifications.map(([name, level, duration, status], i) => (
            <motion.div key={name + level} className="qual-row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.05 }}>
              <span>{name}</span>
              <span><span className="course-tag level-tag-dark">{level}</span></span>
              <span><span className="course-tag dur-tag-dark">{duration}</span></span>
              <span><span className="course-tag accred-tag-dark"><Check size={12} /> {status}</span></span>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/courses" className="btn primary">View All Courses <ArrowRight size={17} /></Link>
        </div>
      </Section>

      {/* PROCESS STEPS */}
      <Section eyebrow="CERTIFICATE JOURNEY" title="From Enrolment to Certificate">
        <div className="process">
          {[
            ["01", "Enrol", "Submit your application and supporting documents to secure your place in the program.", FileText],
            ["02", "Complete Training", "Attend all required sessions and meet the assessment criteria for your qualification.", Award],
            ["03", "Receive Certificate", "Collect your officially signed and stamped certificate from the Administration Office.", BadgeCheck],
          ].map(([n, t, d, I]) => <div className="step" key={n}><span>{n}</span><I /><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </Section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Earn Your Certificate?</h2>
            <p>Contact us to find the right course and start your enrolment today.</p>
          </div>
          <div className="cta-btns">
            <Link to="/admissions" className="btn primary">Apply Now <ArrowRight size={17} /></Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      <a className="floating-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    </>
  );
}
