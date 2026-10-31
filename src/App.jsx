import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import logo from "./image.png";

// ── EmailJS config — replace with your real IDs from emailjs.com ──
const EJS_SERVICE  = "YOUR_SERVICE_ID";
const EJS_TEMPLATE = "YOUR_TEMPLATE_ID";
const EJS_PUBLIC   = "YOUR_PUBLIC_KEY";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function SplashScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="splash-inner"
        initial={{ opacity: 0, scale: 0.82, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={logo}
          alt="Caregivers Training Institute"
          className="splash-logo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.p
          className="splash-name"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          Caregivers Training Institute
        </motion.p>
        <motion.small
          className="splash-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          T/A Pacific Health &amp; Skills Institute
        </motion.small>
        <motion.div
          className="splash-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 1.1, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

const INIT_MESSAGES = [{ from: "bot", text: "Hi there! 👋 I'm the PHSI Assistant. I can help you with courses, admissions, campus locations, certificates, and more. What would you like to know?" }];

const COURSES = [
  "Aged Care & Community Care — Level 3 (8 months)",
  "Aged Care & Community Care — Level 2 (4 months)",
  "Counselling — Level 5 (6 months)",
  "Counselling — Level 4 (6 months)",
  "Teaching of TVET — Level 4 (7 months)",
  "Wall & Floor Tiling — Level 3 (6 months)",
  "Tiling — Level 2 (4 months)",
  "Tiling — Level 1 (4 months)",
  "Carpentry — Level 3 (6 months)",
  "Fabrication & Welding — Level 3",
  "Fashion Design — Level 3",
  "Painting — Level 3",
];

function getBotReply(text) {
  const q = text.toLowerCase();

  if (q.includes("course") || q.includes("program") || q.includes("qualification") || q.includes("offer") || q.includes("study"))
    return `We offer 12 nationally accredited qualifications:\n\n${COURSES.map((c, i) => `${i + 1}. ${c}`).join("\n")}\n\nAll are accredited under the Fiji Qualifications Framework (FQF). Would you like details on any specific course?`;

  if (q.includes("aged care") || q.includes("community care"))
    return "Aged Care & Community Care is available at Level 2 (4 months) and Level 3 (8 months). It covers personal care, communication, safety, and working with diverse clients. FQF accredited.";

  if (q.includes("counsel"))
    return "We offer Counselling at Level 4 and Level 5 — each 6 months. Covers therapeutic communication, case management, and ethical practice. FQF accredited.";

  if (q.includes("tvet") || q.includes("teaching"))
    return "The National Certificate in Teaching of TVET is a Level 4 qualification (7 months). It covers lesson planning, delivery, assessment, and facilitation skills for vocational trainers.";

  if (q.includes("tiling"))
    return "We offer Tiling at Level 1 (4 months), Level 2 (4 months), and Level 3 (6 months). Covers wall & floor tiling, surface preparation, grouting, and finishing.";

  if (q.includes("carpentry"))
    return "National Certificate in Carpentry — Level 3 (6 months). Covers framing, joinery, finishing, and construction techniques for residential and commercial projects.";

  if (q.includes("weld") || q.includes("fabricat"))
    return "National Certificate in Fabrication & Welding — Level 3. Covers metal fabrication, welding techniques, blueprint reading, and safety. Contact us for current duration.";

  if (q.includes("fashion") || q.includes("design") || q.includes("sewing"))
    return "National Certificate in Fashion Design — Level 3. Covers garment construction, pattern making, design principles, and fabric selection. Contact us for current duration.";

  if (q.includes("paint"))
    return "National Certificate in Painting — Level 3. Covers surface preparation, paint application, colour theory, and finishing for residential and commercial properties. Contact us for current duration.";

  if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("tuition") || q.includes("pay"))
    return "Fees vary depending on the course selected. For accurate fee information, I'd recommend contacting our admissions team directly — they'll be happy to help! 😊\n\nNadi: +679 670 1089\nSuva: +679 998 0764\n\nOr share your name, phone & email and I'll pass your enquiry to the admin right away.";

  if (q.includes("accredit") || q.includes("certificate") || q.includes("fqf") || q.includes("hec"))
    return "All our qualifications are accredited under the Fiji Qualifications Framework (FQF) and overseen by the Fiji Higher Education Commission (HEC). Certificates are officially signed, stamped, and nationally recognised.";

  if (q.includes("apply") || q.includes("enrol") || q.includes("admission") || q.includes("register"))
    return "To enrol you'll need:\n1. Filled application form\n2. LLN&D Pre-Entry Assessment\n3. 2 passport photos\n4. Certified birth certificate copy\n5. Certified FNPF Joint Card or TIN copy\n6. Current CV\n\nYou can apply in person, via email, or online. Want me to send your enquiry to our admissions team? Just share your name, phone & email.";

  if (q.includes("document") || q.includes("requirement"))
    return "Required documents for enrolment:\n1. Filled application form\n2. LLN&D Pre-Entry Assessment\n3. 2 passport-size photos\n4. Certified colour copy of birth certificate\n5. Certified FNPF Joint Card or TIN\n6. Current CV\n\nNote: Each course may have additional specific requirements. Contact us to confirm.";

  if (q.includes("location") || q.includes("address") || q.includes("where") || q.includes("campus"))
    return "We have two campuses:\n\n📍 Nadi Campus\nNaicker Street, Nakurakura Sub-Division, Nadi, Fiji\nPhone: +679 670 1089\n\n📍 Suva Campus\nLevel 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji\nPhone: +679 998 0764";

  if (q.includes("hour") || q.includes("open") || q.includes("time") || q.includes("when"))
    return "We are open Monday to Friday, 8:00 AM – 5:00 PM. Closed on weekends and public holidays.";

  if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("number"))
    return "📞 Nadi Campus: +679 670 1089 / +679 963 1888\n📞 Suva Campus: +679 998 0764 / +679 879 1035\n\nViber Nadi: +679 877 2184\nViber Suva: +679 253 0644\n\nOpen Mon–Fri, 8:00 AM – 5:00 PM.";

  if (q.includes("duration") || q.includes("long") || q.includes("month"))
    return "Course durations vary:\n• 4 months — Aged Care L2, Tiling L1 & L2\n• 6 months — Counselling L4 & L5, Tiling L3, Carpentry L3\n• 7 months — Teaching of TVET L4\n• 8 months — Aged Care L3\n• Contact us — Welding, Fashion Design, Painting";

  if (q.includes("nadi"))
    return "Nadi Campus:\n📍 Naicker Street, Nakurakura Sub-Division, Nadi, Fiji\n📞 +679 670 1089 / +679 963 1888\nViber: +679 877 2184\nOpen Mon–Fri, 8:00 AM – 5:00 PM.";

  if (q.includes("suva"))
    return "Suva Campus:\n📍 Level 3, Gurbachan Singh Building, Raojibhai Patel Street, Suva, Fiji\n📞 +679 998 0764 / +679 879 1035\nViber: +679 253 0644\nOpen Mon–Fri, 8:00 AM – 5:00 PM.";

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("helo"))
    return "Hello! 😊 How can I help you today? You can ask me about our courses, admissions, campus locations, fees, certificates, or anything else about Pacific Health & Skills Institute.";

  if (q.includes("thank"))
    return "You're welcome! 😊 Feel free to ask if you have any other questions. We're here to help!";

  return "I'm not sure about that, but I'd love to help! You can ask me about:\n• Our courses & qualifications\n• Admissions & documents\n• Campus locations\n• Fees (contact admin)\n• Certificates & accreditation\n• Opening hours\n\nOr share your name, phone & email and I'll connect you with our admissions team directly! 😊";
}

// ── Contact collection flow ──
const CONTACT_STEPS = ["name", "phone", "email", "done"];

function GlobalChatbot() {
  const [chat, setChat]       = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [messages, setMessages] = useState(INIT_MESSAGES);
  const [collecting, setCollecting] = useState(false);
  const [step, setStep]       = useState(0);
  const [contactData, setContactData] = useState({ name: "", phone: "", email: "" });
  const [sending, setSending] = useState(false);
  const inputRef = useRef(null);
  const msgEndRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setGreeting(true), 2800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMsg = (from, text) => setMessages(m => [...m, { from, text }]);

  const startCollect = () => {
    setCollecting(true);
    setStep(0);
    setContactData({ name: "", phone: "", email: "" });
    addMsg("bot", "Sure! Please share your full name:");
  };

  const sendEmail = async (data) => {
    setSending(true);
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name:  data.name,
        from_phone: data.phone,
        from_email: data.email,
        subject:    "New Inquiry — PHSI Website Chatbot",
        message:    `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`,
      }, EJS_PUBLIC);
      addMsg("bot", `✅ Done! Your enquiry has been sent to our admissions team. We'll get back to you soon, ${data.name}! 😊\n\nIn the meantime, feel free to call us:\nNadi: +679 670 1089\nSuva: +679 998 0764`);
    } catch {
      addMsg("bot", `Thanks ${data.name}! We've noted your details. Our team will contact you at ${data.phone} or ${data.email} soon.\n\nYou can also call us directly:\nNadi: +679 670 1089\nSuva: +679 998 0764`);
    }
    setSending(false);
    setCollecting(false);
    setStep(0);
  };

  const handleCollectStep = (text) => {
    if (step === 0) {
      const updated = { ...contactData, name: text };
      setContactData(updated);
      addMsg("user", text);
      addMsg("bot", `Nice to meet you, ${text}! 😊 What's your phone number?`);
      setStep(1);
    } else if (step === 1) {
      const updated = { ...contactData, phone: text };
      setContactData(updated);
      addMsg("user", text);
      addMsg("bot", "Great! And your email address?");
      setStep(2);
    } else if (step === 2) {
      const updated = { ...contactData, email: text };
      setContactData(updated);
      addMsg("user", text);
      addMsg("bot", "Sending your enquiry to our admissions team... ⏳");
      sendEmail(updated);
    }
  };

  const send = (text) => {
    if (!text.trim() || sending) return;
    if (collecting) {
      handleCollectStep(text.trim());
      return;
    }
    addMsg("user", text);
    const botReply = getBotReply(text);
    addMsg("bot", botReply);
    // If reply mentions contacting admin, offer to collect details
    if (botReply.includes("share your name") || botReply.includes("admissions team")) {
      setTimeout(() => {
        addMsg("bot", "Would you like me to send your enquiry directly to our admissions team? Just click below 👇");
      }, 600);
    }
  };

  const QUICK = ["What courses do you offer?", "How do I apply?", "Where are you located?", "What are the fees?", "Opening hours?"];

  return (
    <>
      <div className="robot-wrap">
        <AnimatePresence>
          {!chat && greeting && (
            <motion.div
              className="robot-greeting"
              initial={{ opacity: 0, y: -14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <span>👋 Hi! I'm here to help you.<br />Ask me anything about our courses!</span>
              <button className="robot-greeting-close" onClick={() => setGreeting(false)}><X size={13} /></button>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="robot-btn"
          onClick={() => { setChat(true); setGreeting(false); }}
          aria-label="Open assistant"
        >
          <span className="robot-icon"><span className="robot-icon-mouth" /></span>
        </button>
      </div>

      <AnimatePresence>
        {chat && (
          <motion.div className="chat-box" initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}>
            <div className="chat-head">
              <span><Bot size={18} /> PHSI Assistant</span>
              <button onClick={() => setChat(false)}><X size={18} /></button>
            </div>
            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.from}`} style={{ whiteSpace: "pre-line" }}>{m.text}</div>
              ))}
              {!collecting && (
                <button
                  className="chat-contact-btn"
                  onClick={startCollect}
                >
                  📩 Send enquiry to admissions team
                </button>
              )}
              <div ref={msgEndRef} />
            </div>
            <div className="quick">
              {QUICK.map(q => (
                <button key={q} onClick={() => { if (!collecting) send(q); }}>{q}</button>
              ))}
            </div>
            <div className="chat-input">
              <input
                ref={inputRef}
                placeholder={collecting ? (step === 0 ? "Your full name..." : step === 1 ? "Your phone number..." : "Your email address...") : "Ask a question..."}
                disabled={sending}
                onKeyDown={e => {
                  if (e.key === "Enter" && e.currentTarget.value.trim()) {
                    send(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
              <button
                disabled={sending}
                onClick={() => {
                  if (inputRef.current?.value.trim()) {
                    send(inputRef.current.value);
                    inputRef.current.value = "";
                  }
                }}
              ><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [splash, setSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {splash && <SplashScreen key="splash" onDone={() => setSplash(false)} />}
      </AnimatePresence>
      {!splash && (
        <BrowserRouter>
          <ScrollToTop />
          <div className="site">
            <Nav />
            <main style={{ paddingTop: 78 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <GlobalChatbot />
        </BrowserRouter>
      )}
    </>
  );
}
