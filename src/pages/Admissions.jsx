import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, FileText, Mail, MessageCircle, Monitor,
  Send, Users, AlertCircle, BookOpen, Briefcase, GraduationCap
} from "lucide-react";
import { Section, fade } from "../components/Section";
import { WA } from "../components/Nav";

const docs = [
  "Filled application form",
  "Completed LLN&D Pre-Entry Assessment",
  "Two passport-size photos",
  "A certified colour copy of birth certificate",
  "A certified colour copy of FNPF Joint Card or TIN",
  "Current CV",
];

const entryFactors = [
  ["Relevant Work Experience", "Relevant work experience in the industry may be required depending on the qualification.", Briefcase],
  ["Teaching / Community Background", "Previous experience in teaching, community work, or primary/secondary school settings (for TVET).", GraduationCap],
  ["Technical Skills", "Relevant technical skills and competencies for trade-based qualifications.", BookOpen],
  ["Literacy & Numeracy", "Basic literacy and numeracy skills assessed through the LLN&D Pre-Entry Assessment.", FileText],
  ["Course-Specific Requirements", "Other specific requirements applicable to the selected qualification — contact us to confirm.", AlertCircle],
];

const methods = [
  {
    icon: Users,
    title: "Over-the-Counter Submission",
    desc: "Visit the Institute's Admissions Office in person to collect, complete, and submit the required forms along with supporting documents.",
  },
  {
    icon: Mail,
    title: "Via Email",
    desc: "Completed application forms and scanned supporting documents may be submitted electronically to the designated admissions email address. You will receive confirmation once documents are verified.",
  },
  {
    icon: Monitor,
    title: "Online Submission",
    desc: "Apply directly through the Institute's online enquiry form. Complete forms digitally and upload supporting documents for faster processing.",
  },
];

export default function Admissions() {
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
            <span className="eyebrow">ADMISSIONS</span>
            <h1>How to <em>Enrol</em></h1>
            <p>Everything you need to know about applying to Caregivers Training Institute T/A Pacific Health &amp; Skills Institute.</p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a href="#apply-form" className="btn primary">Apply Now <ArrowRight size={17} /></a>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Ask on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENROLMENT DOCUMENTS */}
      <Section eyebrow="STEP 1 — DOCUMENTS" title="Enrolment Requirements">
        <div className="adm-grid">
          <div>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
              All applicants must provide the following documents when submitting their application. Please ensure all copies are certified where required.
            </p>
            <div className="doc-list">
              {docs.map((d, i) => (
                <motion.div key={d} className="doc-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.07 }}>
                  <span className="doc-num">{String(i + 1).padStart(2, "0")}</span>
                  <Check size={16} className="doc-check" />
                  <span>{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="adm-note-box">
            <AlertCircle size={22} />
            <h3>Important Notice</h3>
            <p>Each course or qualification has its own specific entry requirements and eligibility criteria. The requirements may vary depending on the nature, level, and technical requirements of the selected course.</p>
            <p>Prospective learners are encouraged to <strong>liaise with our team before enrolling</strong> to obtain introductory information, course details, eligibility requirements, and any specific prerequisites.</p>
            <p><strong>Meeting a general entry requirement does not automatically guarantee eligibility for every course.</strong> Entry requirements are course-specific and will be assessed according to the requirements of the qualification selected.</p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn primary" style={{ marginTop: 16 }}>Contact Us First <MessageCircle size={16} /></a>
          </div>
        </div>
      </Section>

      {/* ENTRY FACTORS */}
      <Section eyebrow="STEP 2 — ELIGIBILITY" title="Course Selection & Entry Requirements" dark>
        <p style={{ color: "#a9c0c2", lineHeight: 1.8, maxWidth: 700, marginBottom: 40 }}>
          Depending on the qualification, entry requirements may include one or more of the following. Our team will guide you through the specific requirements for your chosen course.
        </p>
        <div className="feature-grid">
          {entryFactors.map(([t, d, I], idx) => (
            <motion.div className="feature" key={t} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="feature-no">{String(idx + 1).padStart(2, "0")}</span>
              <I />
              <h3>{t}</h3>
              <p>{d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW TO APPLY */}
      <Section eyebrow="STEP 3 — APPLY" title="How to Submit Your Application">
        <div className="methods-grid">
          {methods.map(({ icon: I, title, desc }) => (
            <motion.div key={title} className="method-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <div className="method-icon"><I size={24} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ONLINE FORM */}
      <Section id="apply-form" eyebrow="ONLINE ENQUIRY" title="Send Us Your Enquiry">
        <div className="contact-grid">
          <div className="contact-copy">
            <p>Fill in the form and our admissions team will get back to you with the relevant information and next steps for your chosen course.</p>
            <div className="contact-items">
              <div><MessageCircle /><span><b>WhatsApp — Suva</b><small>+679 998 0764 / +679 879 1035</small></span></div>
              <div><MessageCircle /><span><b>WhatsApp — Nadi</b><small>+679 670 1089 / +679 877 2184</small></span></div>
              <div><Mail /><span><b>Email Enquiry</b><small>Submit via the form or visit us in person</small></span></div>
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
                    <option value="">Select a course</option>
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
                <label>Message / Questions<textarea rows="4" placeholder="Tell us what you would like to know..." /></label>
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
