import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BookOpen, Bot, Check, ChevronDown,
  Clock3, HeartHandshake, GraduationCap, HeartPulse, MapPin,
  MessageCircle, Phone, Send, ShieldCheck, Sparkles, Star,
  Stethoscope, Users, X, Zap
} from "lucide-react";
import logo from "../image.png";
import { Section, fade } from "../components/Section";
import { WA, WA_NADI, WA_SUVA } from "../components/Nav";

const images = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  classroom: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  caregiver: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
  elderly: "https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1200&q=85",
  training: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  instructor: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
  teamwork: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
};

const highlights = [
  ["Aged Care & Community Care", "Level 2 & 3 National Qualifications — 4 to 8 months", HeartHandshake, images.caregiver],
  ["Counselling", "Level 4 & 5 National Certificates — 6 months each", Stethoscope, images.training],
  ["Carpentry & Tiling", "Level 1, 2 & 3 National Certificates", Users, images.elderly],
  ["Fashion Design", "Level 3 National Certificate", HeartPulse, images.instructor],
  ["Fabrication & Welding", "Level 3 National Certificate", ShieldCheck, images.classroom],
  ["Teaching (TVET)", "Level 4 National Certificate — 7 months", Zap, images.students],
];

const faqs = [
  ["What courses does the institute offer?", "We offer National Qualifications in Aged Care & Community Care (Level 2 & 3), Counselling (Level 4 & 5), Teaching of TVET (Level 4), Tiling (Level 1, 2 & 3), Carpentry (Level 3), Fabrication & Welding (Level 3), Fashion Design (Level 3), and Painting (Level 3)."],
  ["Who can join the training programs?", "Anyone interested in building professional skills can apply. Each course has its own entry requirements. Contact us before enrolling to confirm eligibility for your chosen program."],
  ["How can I contact the institute?", "Nadi Campus: +679 670 1089 | Suva Campus: +679 998 0764. You can also WhatsApp us using the buttons on this page."],
  ["Where are the campuses located?", "Nadi Campus: Naicker Street, Nakurakura Sub-Division, Nadi, Fiji. Suva Campus: Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji."],
  ["How do I apply?", "You can apply over the counter at our Admissions Office, via email with scanned documents, or through our online enquiry form on this website."],
  ["Are the qualifications accredited?", "Yes. All National Qualifications are accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC)."],
  ["What are the opening hours?", "Monday to Friday, 8:00 AM to 5:00 PM."],
];

const testimonials = [
  "Professional training, supportive instructors and a great learning environment. The practical approach helped me become more confident.",
  "A welcoming learning environment with a strong focus on practical skills and professional development.",
  "The training experience helped me understand the responsibility, communication and care involved in working with people.",
];

export default function Home() {
  const [faq, setFaq] = useState(null);
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hello! I'm the institute assistant. How can I help you today?" }]);

  const reply = (q) => {
    const lower = q.toLowerCase();
    let answer = "For current admissions, program availability and requirements, please contact us at +679 998 0764 (Suva) or +679 670 1089 (Nadi).";
    if (lower.includes("course") || lower.includes("program")) answer = "We offer Aged Care, Counselling, Carpentry, Tiling, Welding, Fashion Design, Painting, and Teaching (TVET). Visit our Courses page for full details.";
    if (lower.includes("location") || lower.includes("address")) answer = "Nadi: Naicker Street, Nakurakura Sub-Division. Suva: Level 3, Gurbachan Singh Building, Raojibhai Patel Street.";
    if (lower.includes("contact") || lower.includes("apply") || lower.includes("enrol")) answer = "Call +679 998 0764 (Suva) or +679 670 1089 (Nadi), or use the WhatsApp button to enquire directly.";
    if (lower.includes("hour") || lower.includes("open")) answer = "We are open Monday to Friday, 8:00 AM to 5:00 PM.";
    if (lower.includes("certificate") || lower.includes("accredit")) answer = "All qualifications are accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC).";
    setMessages(m => [...m, { from: "user", text: q }, { from: "bot", text: answer }]);
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero">
        <img src={images.hero} alt="Healthcare students and caregiver training" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade} className="hero-copy">
            <span className="hero-badge"><Sparkles size={15} /> PACIFIC HEALTH &amp; SKILLS INSTITUTE</span>
            <h1>Build a Career in <em>Professional Training</em></h1>
            <p>Nationally accredited qualifications in Aged Care, Counselling, Trades and more — practical, career-focused education in Fiji.</p>
            <div className="hero-actions">
              <Link to="/courses" className="btn primary">Explore Courses <ArrowRight size={17} /></Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> Chat on WhatsApp</a>
            </div>
            <div className="trust-line"><Check size={16} /> FQF Accredited <i /> <Check size={16} /> Nadi &amp; Suva Campuses <i /> <Check size={16} /> Mon–Fri 8am–5pm</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }} className="hero-card">
            <img src={logo} alt="Institute Logo" style={{height:48,width:"auto",objectFit:"contain",marginBottom:12,display:"block"}} />
            <span>Caregivers Training Institute</span>
            <strong>T/A Pacific Health &amp; Skills Institute</strong>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {[
            ["12+ Courses", "Across care, trades & education", GraduationCap],
            ["FQF Accredited", "Fiji Qualifications Framework", Award],
            ["2 Campuses", "Nadi & Suva, Fiji", MapPin],
            ["Mon–Fri 8–5", "Walk in or enquire online", Clock3],
          ].map(([a, b, I]) => <div className="stat" key={a}><I /><div><b>{a}</b><span>{b}</span></div></div>)}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="ABOUT THE INSTITUTE" title="Preparing Professionals for Better Care & Skilled Trades">
        <div className="about-grid">
          <div className="collage">
            <motion.img className="collage-main" src={images.classroom} alt="Students learning" loading="lazy" initial={{ opacity: 0, scale: 1.06 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, ease: "easeOut" }} />
            <motion.img className="collage-small one" src={images.instructor} alt="Instructor teaching" loading="lazy" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .2, ease: "easeOut" }} />
            <div className="experience"><span>PHSI</span><b>Learn with purpose.</b></div>
          </div>
          <div className="about-copy">
            <p className="lead">Caregivers Training Institute T/A Pacific Health &amp; Skills Institute provides nationally accredited qualifications designed to build confident, career-ready professionals across Fiji.</p>
            <p>Our programs span healthcare, community care, counselling, trades and education — all accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC).</p>
            <div className="check-list">
              {["FQF Accredited Qualifications", "HEC Recognised", "Practical Hands-On Training", "Nadi & Suva Campuses", "Experienced Trainers", "Career-Focused Programs"].map(x => <span key={x}><Check size={16} />{x}</span>)}
            </div>
            <Link to="/courses" className="text-link">View All Courses <ArrowRight size={17} /></Link>
          </div>
        </div>
      </Section>

      {/* COURSE HIGHLIGHTS */}
      <Section id="programs" eyebrow="OUR COURSES" title="Explore Our Training Programs">
        <div className="program-grid">
          {highlights.map(([title, desc, I, img], i) => (
            <motion.article key={title} className="program-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fade}>
              <div className="program-img">
                <motion.img src={img} alt={`${title} training`} loading="lazy" initial={{ opacity: 0, scale: 1.08 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .6, ease: "easeOut" }} />
                <span><I size={18} /></span>
              </div>
              <div className="program-body">
                <small>COURSE {String(i + 1).padStart(2, "0")}</small>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/courses" className="text-link" style={{ fontSize: 12 }}>View Details <ArrowRight size={16} /></Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/courses" className="btn primary">View All 12 Courses <ArrowRight size={17} /></Link>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section id="why" eyebrow="WHY CHOOSE US" title="A Learning Experience Built Around Real Skills" dark>
        <div className="feature-grid">
          {[
            ["01", "FQF Accredited", "All qualifications are accredited under the Fiji Qualifications Framework.", Award],
            ["02", "HEC Recognised", "Programs are overseen by the Fiji Higher Education Commission.", GraduationCap],
            ["03", "Practical Training", "Hands-on learning focused on real-world skills and workplace readiness.", BookOpen],
            ["04", "Two Campuses", "Conveniently located in both Nadi and Suva for your accessibility.", MapPin],
            ["05", "Experienced Trainers", "Learn from qualified trainers with industry experience.", HeartHandshake],
            ["06", "Career Focused", "Programs designed to prepare you for professional employment.", Zap],
          ].map(([n, t, d, I]) => (
            <motion.div className="feature" key={n} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="feature-no">{n}</span><I /><h3>{t}</h3><p>{d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="HOW IT WORKS" title="Your Journey to a New Career">
        <div className="process">
          {[
            ["01", "Enquire", "Contact us to learn about course options, entry requirements and eligibility.", MessageCircle],
            ["02", "Enrol", "Submit your application form and supporting documents to secure your place.", BookOpen],
            ["03", "Train & Qualify", "Complete your program and receive your nationally accredited certificate.", Award],
          ].map(([n, t, d, I]) => <div className="step" key={n}><span>{n}</span><I /><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="training-banner">
          <motion.img src={images.training} alt="Practical training" loading="lazy" initial={{ opacity: 0, scale: 1.06 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .75, ease: "easeOut" }} />
          <div>
            <span className="eyebrow">HANDS-ON LEARNING</span>
            <h3>Knowledge becomes confidence when you practice it.</h3>
            <p>Build practical habits, communication skills and professional awareness in a supportive learning environment across our Nadi and Suva campuses.</p>
            <Link to="/admissions" className="btn primary" style={{ marginTop: 20 }}>How to Apply <ArrowRight size={17} /></Link>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="students" eyebrow="STUDENT LIFE" title="Life at the Institute">
        <div className="gallery">
          {[images.students, images.classroom, images.instructor, images.teamwork, images.caregiver, images.elderly].map((img, i) => (
            <motion.div className={`gallery-item g${i + 1}`} key={img} initial={{ opacity: 0, scale: 1.07 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .6, delay: i * 0.07, ease: "easeOut" }}>
              <img src={img} alt="Student training at the institute" loading="lazy" />
              <span>{["Classroom learning", "Practical training", "Instructor interaction", "Student teamwork", "Caregiving skills", "Compassionate care"][i]}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="reviews" eyebrow="STUDENT VOICES" title="What Our Students Say">
        <p className="demo-note">Sample testimonials — replace with real student reviews from the Facebook page before launch.</p>
        <div className="review-grid">
          {testimonials.map((t, i) => (
            <div className="review" key={t}>
              <div className="stars">★★★★★</div>
              <p>"{t}"</p>
              <div className="review-person">
                <div className="avatar">{i + 1}</div>
                <span><b>Graduate</b><small>Pacific Health &amp; Skills Institute</small></span>
              </div>
            </div>
          ))}
        </div>
        <div className="google-card">
          <div className="google-mark">G</div>
          <div><strong>5.0 <span>★★★★★</span></strong><small>Google Rating · Based on available reviews</small></div>
          <a href="https://www.facebook.com/PacificHealthSkillsInstitute" target="_blank" rel="noreferrer" className="btn light">Facebook Page <ArrowRight size={16} /></a>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" eyebrow="FAQS" title="Questions, Answered">
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq ${faq === i ? "active" : ""}`} key={q}>
              <button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown size={19} /></button>
              <AnimatePresence>
                {faq === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{a}</p></motion.div>}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us today to find the right course for you.</p>
          </div>
          <div className="cta-btns">
            <Link to="/admissions" className="btn primary">How to Apply <ArrowRight size={17} /></Link>
            <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* FLOATING CHAT */}
      <a className="floating-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
      <button className="chat-launch" onClick={() => setChat(true)}><Bot size={18} /> Ask Our Assistant</button>
      <AnimatePresence>
        {chat && (
          <motion.div className="chat-box" initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}>
            <div className="chat-head"><span><Bot size={18} /> Institute Assistant</span><button onClick={() => setChat(false)}><X size={18} /></button></div>
            <div className="chat-messages">{messages.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}</div>
            <div className="quick">
              {["What courses do you offer?", "Where are you located?", "How can I apply?", "What are your hours?"].map(q => <button key={q} onClick={() => reply(q)}>{q}</button>)}
            </div>
            <div className="chat-input">
              <input placeholder="Ask a question..." onKeyDown={e => { if (e.key === "Enter" && e.currentTarget.value.trim()) { reply(e.currentTarget.value); e.currentTarget.value = ""; } }} />
              <button onClick={() => { const i = document.querySelector(".chat-input input"); if (i.value.trim()) { reply(i.value); i.value = ""; } }}><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
