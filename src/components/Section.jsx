import React from "react";
import { motion } from "framer-motion";

export const fade = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };

export function Section({ id, eyebrow, title, children, dark = false }) {
  return (
    <section id={id} className={dark ? "section dark-section" : "section"}>
      <div className="container">
        {(eyebrow || title) && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fade} className="section-head">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
