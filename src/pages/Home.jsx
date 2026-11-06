import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BookOpen, Check, ChevronDown, Send,
  Clock3, HeartHandshake, GraduationCap, HeartPulse, MapPin,
  MessageCircle, ShieldCheck, Sparkles,
  Stethoscope, Users, Zap
} from "lucide-react";
import logo from "../image.png";
import imgAgedCare    from "../images/Caring Connection in Home Health Care.png";
import imgCounselling from "../images/Warm Counselling Session in a Modern Office.png";
import imgTVET        from "../images/Interactive TVET Classroom Training.png";
import imgCarpentry   from "../images/Hands-On Carpentry Workshop.png";
import imgWelding     from "../images/Industrial Welding Workshop.png";
import imgFashion     from "../images/Fashion Design Studio Inspiration.png";
import { Section, fade } from "../components/Section";
import { WA, WA_NADI, WA_SUVA, VIBER_NADI, VIBER_SUVA } from "../components/Nav";

const images = {
  hero:       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  classroom:  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
  students:   "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  training:   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  instructor: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
  teamwork:   "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  caregiver:  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
  elderly:    "https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1200&q=85",
};

const highlights = [
  ["Aged Care & Community Care", "Level 2 & 3 — 4 to 8 months", HeartHandshake, imgAgedCare],
  ["Counselling",                "Level 4 & 5 — 6 months each",  Stethoscope,    imgCounselling],
  ["Teaching of TVET",           "Level 4 — 7 months",           GraduationCap,  imgTVET],
  ["Carpentry",                  "Level 3 — 6 months",           HeartPulse,     imgCarpentry],
  ["Fabrication & Welding",      "Level 3 — Contact Us",         ShieldCheck,    imgWelding],
  ["Fashion Design",             "Level 3 — Contact Us",         Zap,            imgFashion],
];

const faqs = [
  ["What courses does the institute offer?", "We offer National Qualifications in Aged Care & Community Care (Level 2 & 3), Counselling (Level 4 & 5), Teaching of TVET (Level 4), Tiling (Level 1, 2 & 3), Carpentry (Level 3), Fabrication & Welding (Level 3), Fashion Design (Level 3), and Painting (Level 3)."],
  ["Who can join the training programs?", "Anyone interested in building professional skills can apply. Each course has its own entry requirements. Contact us before enrolling to confirm eligibility for your chosen program."],
  ["How can I contact the institute?", "Nadi Campus: +679 670 1089 | Suva Campus: +679 275 8378. You can also WhatsApp us using the buttons on this page."],
  ["Where are the campuses located?", "Nadi Campus: Naicker Street, Nakurakura Sub-Division, Nadi, Fiji. Suva Campus: Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji."],
  ["How do I apply?", "You can apply over the counter at our Admissions Office, via email with scanned documents, or through our online enquiry form on this website."],
  ["Are the qualifications accredited?", "Yes. All National Qualifications are accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC)."],
  ["What are the opening hours?", "Monday to Friday, 8:00 AM to 5:00 PM."],
];

const testimonials = [
  { quote: "Professional training, supportive instructors and a great learning environment. The practical approach helped me become more confident.", name: "Mere T.", role: "Graduate — Aged Care Level 3" },
  { quote: "A welcoming learning environment with a strong focus on practical skills and professional development.", name: "Jone R.", role: "Graduate — Counselling Level 4" },
  { quote: "The training experience helped me understand the responsibility, communication and care involved in working with people.", name: "Salote V.", role: "Graduate — Community Care Level 2" },
];

const outcomes = [
  ["Aged Care Worker",         "Support elderly clients in residential or home-based care settings.",                HeartHandshake],
  ["Community Support Worker", "Assist individuals and families in community organisations.",                        Users],
  ["Counsellor / Support Officer", "Provide guidance and therapeutic support in community or workplace settings.",   Stethoscope],
  ["TVET Trainer / Educator",  "Deliver vocational training in schools, institutes or industry.",                    GraduationCap],
  ["Trades Professional",      "Work in carpentry, tiling, welding, painting or fashion design.",                    Zap],
  ["Self-Employment",          "Start your own business using your nationally recognised qualification.",             ShieldCheck],
];

const courseOptions = [
  "Aged Care & Community Care (Level 2)",
  "Aged Care & Community Care (Level 3)",
  "Counselling (Level 4)",
  "Counselling (Level 5)",
  "Teaching of TVET (Level 4)",
  "Carpentry (Level 3)",
  "Tiling (Level 1, 2 or 3)",
  "Fabrication & Welding (Level 3)",
  "Fashion Design (Level 3)",
  "Painting (Level 3)",
];

export default function Home() {
  const [faq, setFaq] = useState(null);
  const [enquirySent, setEnquirySent] = useState(false);

  return (
    <>
      {/* ANNOUNCEMENT STRIP */}
      <div className="announce-strip">
        <span className="announce-dot" />
        <strong>Enrolments Now Open</strong> — 2025 intake for all programs. Limited places available.
        <Link to="/admissions" className="announce-link">Apply Now <ArrowRight size={13} /></Link>
      </div>

      {/* HERO */}
      <section id="home" className="hero hero-bright">
        <img src={images.hero} alt="Healthcare students and caregiver training" className="hero-img" />
        <div className="hero-overlay hero-overlay-bright" />
        {/* bright teal colour wash */}
        <div className="hero-colour-wash" />
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade} className="hero-copy">
            <span className="hero-badge"><Sparkles size={15} /> PACIFIC HEALTH &amp; SKILLS INSTITUTE</span>
            <h1>Build a Rewarding Career in <em>Healthcare &amp; Skilled Trades</em></h1>
            <p>Nationally accredited qualifications in Aged Care, Counselling, Trades and more — practical, career-focused education delivered across Fiji.</p>
            <div className="hero-actions">
              <Link to="/admissions" className="btn primary">Apply Now <ArrowRight size={17} /></Link>
              <Link to="/courses"    className="btn hero-outline">Explore Courses <ArrowRight size={17} /></Link>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17} /> WhatsApp</a>
            </div>
            <div className="trust-line">
              <Check size={16} /> FQF Accredited <i />
              <Check size={16} /> HEC Recognised <i />
              <Check size={16} /> Nadi &amp; Suva Campuses
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }} className="hero-card">
            <img src={logo} alt="Institute Logo" style={{height:48,width:"auto",objectFit:"contain",marginBottom:12,display:"block"}} />
            <span>Caregivers Training Institute</span>
            <strong>T/A Pacific Health &amp; Skills Institute</strong>
            <div className="hero-card-tags">
              <span>FQF Accredited</span>
              <span>HEC Recognised</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRIGHT STATS BAR */}
      <section className="stats stats-bright">
        <div className="container stats-grid">
          {[
            ["12+",       "Courses Available",          GraduationCap],
            ["FQF",       "Accredited Qualifications",  Award],
            ["2",         "Campuses — Nadi & Suva",     MapPin],
            ["Mon–Fri",   "8:00 AM – 5:00 PM",          Clock3],
          ].map(([a, b, I]) => (
            <div className="stat" key={a}>
              <I size={26} />
              <div><b>{a}</b><span>{b}</span></div>
            </div>
          ))}
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
            <p>Established to address the growing demand for skilled professionals in Fiji's healthcare and trades sectors, PHSI has grown from a single campus to a two-campus institute offering 12 nationally recognised qualifications — all accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC).</p>
            <div className="vm-cards">
              <div className="vm-card">
                <span className="eyebrow" style={{marginBottom:6}}>OUR VISION</span>
                <p>To be Fiji's leading provider of quality vocational and professional training that empowers individuals and strengthens communities.</p>
              </div>
              <div className="vm-card">
                <span className="eyebrow" style={{marginBottom:6}}>OUR MISSION</span>
                <p>To deliver accessible, practical and nationally accredited training that equips learners with the skills, confidence and values needed for meaningful employment and lifelong growth.</p>
              </div>
            </div>
            <div className="check-list">
              {["FQF Accredited Qualifications","HEC Recognised","Practical Hands-On Training","Nadi & Suva Campuses","Experienced Trainers","Career-Focused Programs"].map(x => <span key={x}><Check size={16} />{x}</span>)}
            </div>
            <div style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:8}}>
              <Link to="/courses" className="text-link">View All Courses <ArrowRight size={17} /></Link>
              <Link to="/about"   className="text-link">About PHSI <ArrowRight size={17} /></Link>
            </div>
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
          <Link to="/courses" className="btn primary">View All Courses <ArrowRight size={17} /></Link>
        </div>
      </Section>

      {/* QUICK ENQUIRY FORM */}
      <section className="quick-enquiry-band">
        <div className="container">
          <div className="qe-inner">
            <div className="qe-copy">
              <span className="eyebrow" style={{color:"#6fc9b8"}}>ONLINE ENQUIRY</span>
              <h2>Interested in Joining PHSI?</h2>
              <p>Fill in your details and we'll get back to you with course information, entry requirements and enrolment guidance.</p>
              <div className="qe-contacts">
                <a href={WA_NADI}    target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp Nadi</a>
                <a href={WA_SUVA}    target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp Suva</a>
                <a href={VIBER_NADI} target="_blank" rel="noreferrer" style={{background:"rgba(126,87,194,.15)",borderColor:"rgba(126,87,194,.35)",color:"#9c6fe4"}}>&#x2706; Viber Nadi</a>
                <a href={VIBER_SUVA} target="_blank" rel="noreferrer" style={{background:"rgba(126,87,194,.15)",borderColor:"rgba(126,87,194,.35)",color:"#9c6fe4"}}>&#x2706; Viber Suva</a>
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
                <button className="btn primary" type="submit" style={{width:"100%"}}>Send Enquiry <Send size={15} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section id="why" eyebrow="WHY CHOOSE US" title="A Learning Experience Built Around Real Skills" dark>
        <div className="why-stats">
          {[["12+","Courses Offered"],["2","Campuses"],["FQF","Accredited"],["HEC","Recognised"]].map(([v, l]) => (
            <div className="why-stat" key={l}><strong>{v}</strong><span>{l}</span></div>
          ))}
        </div>
        <div className="feature-grid">
          {[
            ["01","FQF Accredited",    "All qualifications are accredited under the Fiji Qualifications Framework.",          Award],
            ["02","HEC Recognised",    "Programs are overseen by the Fiji Higher Education Commission.",                      GraduationCap],
            ["03","Practical Training","Hands-on learning focused on real-world skills and workplace readiness.",              BookOpen],
            ["04","Two Campuses",      "Conveniently located in both Nadi and Suva for your accessibility.",                  MapPin],
            ["05","Experienced Trainers","Learn from qualified trainers with industry experience.",                           HeartHandshake],
            ["06","Career Focused",    "Programs designed to prepare you for professional employment.",                       Zap],
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
            ["01","Enquire",        "Contact us to learn about course options, entry requirements and eligibility.", MessageCircle],
            ["02","Enrol",          "Submit your application form and supporting documents to secure your place.",   BookOpen],
            ["03","Train & Qualify","Complete your program and receive your nationally accredited certificate.",     Award],
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
              <span>{["Classroom learning","Practical training","Instructor interaction","Student teamwork","Caregiving skills","Compassionate care"][i]}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* GRADUATE OUTCOMES */}
      <Section id="outcomes" eyebrow="GRADUATE OUTCOMES" title="Where Our Graduates Work">
        <div className="feature-grid" style={{ background: "none", border: "none", gap: 16 }}>
          {outcomes.map(([title, desc, I]) => (
            <motion.div key={title} className="outcome-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <I size={26} /><h3>{title}</h3><p>{desc}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link to="/admissions" className="btn primary">Apply Now <ArrowRight size={17} /></Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="reviews" eyebrow="STUDENT VOICES" title="What Our Students Say">
        <p className="demo-note">Sample testimonials — replace with real student reviews before launch.</p>
        <div className="review-grid">
          {testimonials.map(({ quote, name, role }) => (
            <div className="review" key={name}>
              <div className="stars">★★★★★</div>
              <p>"{quote}"</p>
              <div className="review-person">
                <div className="avatar">{name[0]}</div>
                <span><b>{name}</b><small>{role}</small></span>
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
    </>
  );
}
