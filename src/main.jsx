import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Award, BookOpen, Bot, Check, ChevronDown, ChevronRight,
  Clock3, HeartHandshake, GraduationCap, HeartPulse, MapPin, Menu, MessageCircle,
  Phone, Send, ShieldCheck, Sparkles, Star, Stethoscope, Users, X, Zap
} from "lucide-react";
import "./styles.css";

const WA = "https://wa.me/6799980764?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20caregiving%20training%20programs.";

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

const programs = [
  ["Professional Caregiving", "Comprehensive training for individuals seeking a professional career in caregiving.", HeartHandshake, images.caregiver],
  ["Healthcare Support Skills", "Build practical knowledge and confidence for supporting people in care environments.", Stethoscope, images.training],
  ["Elderly Care", "Learn professional approaches to supporting elderly individuals with dignity and compassion.", Users, images.elderly],
  ["Patient Care", "Develop essential patient-support and caregiving skills for real-world situations.", HeartPulse, images.instructor],
  ["Personal Care & Assistance", "Learn safe and professional methods of assisting individuals with daily activities.", ShieldCheck, images.classroom],
  ["Practical Caregiving Skills", "Hands-on learning focused on practical caregiving situations and workplace readiness.", Zap, images.students],
];

const features = [
  ["01", "Practical Learning", "Focus on skills that students can apply in real caregiving environments.", BookOpen],
  ["02", "Professional Guidance", "Learn through structured guidance from experienced trainers.", GraduationCap],
  ["03", "Career Preparation", "Develop confidence and knowledge for professional caregiving.", Award],
  ["04", "Student-Centered Training", "A supportive environment designed around student development.", HeartHandshake],
  ["05", "Real-World Skills", "Training focused on practical caregiving situations.", Stethoscope],
  ["06", "Supportive Environment", "Encouragement and guidance throughout the learning journey.", Users],
];

const faqs = [
  ["What programs does the institute offer?", "The demo presents professional caregiving, healthcare support, elderly care, patient care, personal care and practical caregiving skills. Contact the institute for current program availability and details."],
  ["Who can join caregiving training?", "People interested in building skills for professional caregiving can enquire about the available programs and entry requirements."],
  ["How can I contact the institute?", "You can call +679 998 0764 or use the WhatsApp buttons throughout the website."],
  ["Where is the institute located?", "Caregivers Training Institute is located at 5CXF+26G, Nadi, Fiji."],
  ["How can I enquire about a program?", "Use the enquiry form or WhatsApp CTA and share the program you are interested in."],
  ["Is practical training included?", "The institute is presented around practical, career-focused learning. Confirm the exact practical components with the institute for your chosen program."],
  ["How can I apply?", "Use the enquiry form or contact the institute directly to ask about current admission and application steps."],
];

const testimonials = [
  "Professional training, supportive instructors and a great learning environment. The practical approach helped me become more confident in caregiving.",
  "A welcoming learning environment with a strong focus on practical skills and professional development.",
  "The training experience helped me understand the responsibility, communication and care involved in working with people.",
];

const scrollTo = (id, e) => { e?.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

const fade = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" } } };

function Section({ id, eyebrow, title, children, dark = false }) {
  return <section id={id} className={dark ? "section dark-section" : "section"}>
    <div className="container">
      {(eyebrow || title) && <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fade} className="section-head">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
      </motion.div>}
      {children}
    </div>
  </section>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [chat, setChat] = useState(false);
  const [faq, setFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hello! I’m the institute assistant. How can I help you today?" }]);

  const reply = (q) => {
    const lower = q.toLowerCase();
    let answer = "For current admissions, program availability and requirements, please contact the institute at +679 998 0764 or WhatsApp us.";
    if (lower.includes("program")) answer = "The demo includes Professional Caregiving, Healthcare Support, Elderly Care, Patient Care, Personal Care & Assistance, and Practical Caregiving Skills.";
    if (lower.includes("location")) answer = "We are at 5CXF+26G, Nadi, Fiji.";
    if (lower.includes("contact") || lower.includes("apply")) answer = "Call +679 998 0764 or use the WhatsApp button to enquire directly.";
    setMessages(m => [...m, { from: "user", text: q }, { from: "bot", text: answer }]);
  };

  const nav = ["Home", "About", "Programs", "Training", "Students", "Reviews", "FAQs", "Contact"];

  return <div className="site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context":"https://schema.org", "@type":"EducationalOrganization", "name":"Caregivers Training Institute",
      "address":{"@type":"PostalAddress","addressLocality":"Nadi","addressCountry":"Fiji","streetAddress":"5CXF+26G"},
      "telephone":"+6799980764", "url":"https://example.com/"
    })}} />

    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="/" onClick={e=>scrollTo("home",e)}><span className="brand-mark"><HeartPulse size={18}/></span><span><b>CARE GIVERS</b><small>TRAINING INSTITUTE</small></span></a>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          {nav.map(n => <a key={n} href="/" onClick={e=>{scrollTo(n.toLowerCase(),e);setMenu(false);}}>{n}</a>)}
        </div>
        <a className="nav-wa" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Us</a>
        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <img src={images.hero} alt="Healthcare students and caregiver training environment" className="hero-img"/>
        <div className="hero-overlay"/>
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={fade} className="hero-copy">
            <span className="hero-badge"><Sparkles size={15}/> PROFESSIONAL CAREGIVING EDUCATION</span>
            <h1>Build a Career in <em>Professional Caregiving</em></h1>
            <p>Practical training, professional guidance and industry-focused education designed to prepare compassionate caregivers for real-world care environments.</p>
            <div className="hero-actions">
              <a href="/" onClick={e=>scrollTo("programs",e)} className="btn primary">Explore Programs <ArrowRight size={17}/></a>
              <a href={WA} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={17}/> Chat on WhatsApp</a>
            </div>
            <div className="trust-line"><Check size={16}/> Practical Learning <i/> <Check size={16}/> Professional Training <i/> <Check size={16}/> Career-Focused Education</div>
          </motion.div>
          <motion.div initial={{opacity:0, x:35}} animate={{opacity:1, x:0}} transition={{duration:.8, delay:.2}} className="hero-card">
            <div className="mini-icon"><HeartHandshake/></div><span>Trusted Caregiving Training</span><strong>Professional • Practical • Career Focused</strong>
          </motion.div>
        </div>
      </section>

      <section className="stats"><div className="container stats-grid">
        {[
          ["Professional Training","Hands-on learning experience",GraduationCap],
          ["Practical Education","Real-world caregiving skills",HeartPulse],
          ["Career Focused","Training designed for professional growth",Award],
          ["Student Support","Guidance throughout your learning journey",Users]
        ].map(([a,b,I]) => <div className="stat" key={a}><I/><div><b>{a}</b><span>{b}</span></div></div>)}
      </div></section>

      <Section id="about" eyebrow="ABOUT THE INSTITUTE" title="Preparing Compassionate Professionals for Better Care">
        <div className="about-grid">
          <div className="collage">
            <motion.img className="collage-main" src={images.classroom} alt="Students learning healthcare skills" loading="lazy" initial={{opacity:0,scale:1.06}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7,ease:"easeOut"}}/>
            <motion.img className="collage-small one" src={images.instructor} alt="Instructor teaching healthcare students" loading="lazy" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6,delay:.2,ease:"easeOut"}}/>
            <div className="experience"><span>CARE</span><b>Learn with purpose.</b></div>
          </div>
          <div className="about-copy">
            <p className="lead">Caregivers Training Institute is focused on providing practical and professional caregiving education for students who want to build meaningful careers in the care sector.</p>
            <p>Students are encouraged to develop practical caregiving skills, professional confidence, communication skills, patient-care awareness, workplace readiness and responsible caregiving practices.</p>
            <div className="check-list">{["Practical caregiving skills","Professional confidence","Communication skills","Patient-care awareness","Workplace readiness","Responsible caregiving practices"].map(x=><span key={x}><Check size={16}/>{x}</span>)}</div>
            <a href="/" onClick={e=>scrollTo("programs",e)} className="text-link">Learn More About Us <ArrowRight size={17}/></a>
          </div>
        </div>
      </Section>

      <Section id="programs" eyebrow="OUR PROGRAMS" title="Explore Our Training Programs">
        <div className="program-grid">{programs.map(([title,desc,I,img],i)=><motion.article key={title} className="program-card" initial="hidden" whileInView="visible" viewport={{once:true,margin:"-50px"}} variants={fade}>
          <div className="program-img"><motion.img src={img} alt={`${title} training`} loading="lazy" initial={{opacity:0,scale:1.08}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-40px"}} transition={{duration:.6,ease:"easeOut"}}/><span><I size={18}/></span></div>
          <div className="program-body"><small>PROGRAM {String(i+1).padStart(2,"0")}</small><h3>{title}</h3><p>{desc}</p><button onClick={()=>{setProgram(title);document.getElementById("contact").scrollIntoView({behavior:"smooth"})}}>Learn More <ArrowRight size={16}/></button></div>
        </motion.article>)}</div>
      </Section>

      <Section id="training" eyebrow="WHY CHOOSE US" title="A Learning Experience Built Around Real Care" dark>
        <div className="feature-grid">{features.map(([n,t,d,I])=><motion.div className="feature" key={n} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fade}><span className="feature-no">{n}</span><I/><h3>{t}</h3><p>{d}</p></motion.div>)}</div>
      </Section>

      <Section eyebrow="TRAINING EXPERIENCE" title="Learn. Practice. Grow.">
        <div className="process">
          {[["01","Learn","Understand professional caregiving concepts and responsibilities.",BookOpen],["02","Practice","Develop practical skills through structured training.",HeartPulse],["03","Grow","Build confidence for your future career.",ArrowRight]].map(([n,t,d,I])=><div className="step" key={n}><span>{n}</span><I/><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="training-banner"><motion.img src={images.training} alt="Practical healthcare training" loading="lazy" initial={{opacity:0,scale:1.06}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-60px"}} transition={{duration:.75,ease:"easeOut"}}/><div><span className="eyebrow">HANDS-ON LEARNING</span><h3>Knowledge becomes confidence when you practice it.</h3><p>Build practical habits, communication skills and professional awareness in a supportive learning environment.</p></div></div>
      </Section>

      <Section id="students" eyebrow="STUDENT LIFE" title="Life at the Institute">
        <div className="gallery">
          {[images.students,images.classroom,images.instructor,images.teamwork,images.caregiver,images.elderly].map((img,i)=><motion.div className={`gallery-item g${i+1}`} key={img} initial={{opacity:0,scale:1.07}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-40px"}} transition={{duration:.6,delay:i*0.07,ease:"easeOut"}}><img src={img} alt="Student learning and training at the institute" loading="lazy"/><span>{["Classroom learning","Practical training","Instructor interaction","Student teamwork","Caregiving skills","Compassionate care"][i]}</span></motion.div>)}
        </div>
      </Section>

      <Section id="reviews" eyebrow="STUDENT VOICES" title="What Our Students Say">
        <p className="demo-note">Sample/demo testimonials — replace these with actual student reviews before launch.</p>
        <div className="review-grid">{testimonials.map((t,i)=><div className="review" key={t}><div className="stars">★★★★★</div><p>“{t}”</p><div className="review-person"><div className="avatar">{i+1}</div><span><b>Student</b><small>Sample testimonial</small></span></div></div>)}</div>
        <div className="google-card"><div className="google-mark">G</div><div><strong>5.0 <span>★★★★★</span></strong><small>Google Rating · Based on available reviews</small></div><a href="/" onClick={e=>scrollTo("contact",e)} className="btn light">View Reviews <ArrowRight size={16}/></a></div>
      </Section>

      <Section eyebrow="FACILITIES & SUPPORT" title="Everything You Need to Learn With Confidence">
        <div className="facility-grid">{[["Modern Learning Environment",GraduationCap],["Practical Training",Stethoscope],["Student Support",Users],["Interactive Classes",BookOpen],["Professional Guidance",Award],["Learning Resources",Zap]].map(([t,I])=><div className="facility" key={t}><I/><span>{t}</span><ChevronRight size={16}/></div>)}</div>
      </Section>

      <Section id="faqs" eyebrow="FAQS" title="Questions, Answered">
        <div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq ${faq===i?"active":""}`} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span><ChevronDown size={19}/></button><AnimatePresence>{faq===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div>
      </Section>

      <Section id="contact" eyebrow="START YOUR JOURNEY" title="Let's Start Your Caregiving Journey">
        <div className="contact-grid">
          <div className="contact-copy"><p>Have questions about our programs or training? Get in touch with the team and take the next step toward your caregiving education.</p>
            <div className="contact-items"><div><MapPin/><span><b>Nadi, Fiji</b><small>5CXF+26G, Nadi, Fiji</small></span></div><div><Phone/><span><b>+679 998 0764</b><small>Call the institute</small></span></div><div><MessageCircle/><span><b>WhatsApp Available</b><small>Quick enquiries and questions</small></span></div></div>
            <a href={WA} target="_blank" rel="noreferrer" className="btn primary">Talk to Us <MessageCircle size={17}/></a>
          </div>
          <form className="contact-form" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>{submitted?<div className="success"><div><Check/></div><h3>Enquiry received</h3><p>This is a frontend demo. Connect the form to your email/CRM/backend before launch.</p><button type="button" className="text-link" onClick={()=>setSubmitted(false)}>Send another enquiry</button></div>:<><div className="form-row"><label>Full Name<input required placeholder="Your name"/></label><label>Phone Number<input required placeholder="+679..." /></label></div><label>Email<input type="email" required placeholder="you@example.com"/></label><label>Program of Interest<select value={program} onChange={e=>setProgram(e.target.value)}><option value="">Select a program</option>{programs.map(p=><option key={p[0]}>{p[0]}</option>)}</select></label><label>Message<textarea rows="4" placeholder="Tell us what you would like to know..."/></label><button className="btn primary" type="submit">Send Enquiry <Send size={16}/></button></>}</form>
        </div>
      </Section>

      <section className="map-section"><div className="container map-card"><div><span className="eyebrow">VISIT OUR INSTITUTE</span><h2>Caregiving education in <em>Nadi, Fiji</em></h2><p>Caregivers Training Institute<br/>5CXF+26G, Nadi, Fiji</p><a className="btn primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=5CXF%2B26G%2C%20Nadi%2C%20Fiji">Get Directions <ArrowRight size={16}/></a></div><iframe title="Caregivers Training Institute map" loading="lazy" src="https://www.google.com/maps?q=5CXF%2B26G%2C%20Nadi%2C%20Fiji&output=embed"/></div></section>
    </main>

    <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="/" onClick={e=>scrollTo("home",e)}><span className="brand-mark"><HeartPulse size={18}/></span><span><b>CARE GIVERS</b><small>TRAINING INSTITUTE</small></span></a><p>Professional caregiving education designed to build confident, compassionate and career-ready professionals.</p></div><div><h4>Quick Links</h4>{nav.map(n=><a key={n} href="/" onClick={e=>scrollTo(n.toLowerCase(),e)}>{n}</a>)}</div><div><h4>Programs</h4>{programs.slice(0,5).map(p=><a key={p[0]} href="/" onClick={e=>scrollTo("programs",e)}>{p[0]}</a>)}</div><div><h4>Contact</h4><span>Nadi, Fiji</span><a href="tel:+6799980764">+679 998 0764</a><a href={WA} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom container"><span>© 2026 Caregivers Training Institute. All Rights Reserved.</span><span>Powered by <a href="https://www.tcpitsolution.in/" target="_blank" rel="noreferrer">TCP IT Solution</a></span></div></footer>

    <a className="floating-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/></a>
    <button className="chat-launch" onClick={()=>setChat(true)}><Bot size={18}/> Ask Our Assistant</button>
    <AnimatePresence>{chat&&<motion.div className="chat-box" initial={{opacity:0,y:20,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20}}><div className="chat-head"><span><Bot size={18}/> Institute Assistant</span><button onClick={()=>setChat(false)}><X size={18}/></button></div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={`msg ${m.from}`}>{m.text}</div>)}</div><div className="quick">{["Which programs do you offer?","Where are you located?","How can I apply?","How can I contact you?"].map(q=><button key={q} onClick={()=>reply(q)}>{q}</button>)}</div><div className="chat-input"><input placeholder="Ask a question..." onKeyDown={e=>{if(e.key==="Enter"&&e.currentTarget.value.trim()){reply(e.currentTarget.value);e.currentTarget.value=""}}}/><button onClick={()=>{const i=document.querySelector(".chat-input input");if(i.value.trim()){reply(i.value);i.value=""}}}><Send size={16}/></button></div></motion.div>}</AnimatePresence>
  </div>
}

createRoot(document.getElementById("root")).render(<App />);
