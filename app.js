const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "9946 5792",
  "hero.kicker": "Hawalli, Kuwait · AC &amp; HVAC services",
  "hero.title": "Stay cool all year<br>with AC that works.",
  "hero.sub": "Air conditioning and HVAC services for homes and businesses across Kuwait — open every day from 9 AM to 11 PM.",
  "hero.cta1": "Book a visit", "hero.cta2": "See services",
  "trust.t1t": "Open every day", "trust.t1d": "9:00 AM – 11:00 PM daily",
  "trust.t2t": "Repair · Install · Maintain", "trust.t2d": "Split &amp; central AC",
  "trust.t3t": "Homes &amp; businesses", "trust.t3d": "Serving all of Kuwait",
  "stats.samedayNum": "Daily", "stats.sameday": "9 AM – 11 PM",
  "stats.tradesNum": "Split + central", "stats.trades": "AC systems covered",
  "stats.rateNum": "HVAC", "stats.rate": "service specialists",
  "stats.visitNum": "Homes &amp; businesses", "stats.visit": "across Kuwait",
  "services.kicker": "What we do", "services.title": "Complete AC care under one roof",
  "services.s1t": "AC repair &amp; servicing", "services.s1d": "Faulty ACs diagnosed and repaired — cooling restored fast.",
  "services.s2t": "Central AC service", "services.s2d": "Central and ducted systems serviced for even, reliable cooling.",
  "services.s3t": "AC installation", "services.s3d": "New split and window units installed and commissioned properly.",
  "services.s4t": "Duct cleaning", "services.s4d": "Ductwork cleaned for healthier air and better airflow.",
  "services.s5t": "Gas refilling", "services.s5d": "Refrigerant refills for weak cooling — performance tested after.",
  "services.s6t": "Annual maintenance", "services.s6d": "Scheduled servicing that keeps your AC running at its best.",
  "why.kicker": "Why choose us", "why.title": "AC experts you can rely on",
  "why.intro": "Cooling is not optional in Kuwait — our team keeps your AC running at its best, with clear pricing agreed before we start.",
  "why.l1t": "Upfront pricing", "why.l1d": "You approve the price before we begin — no surprises.",
  "why.l2t": "Open till 11 PM", "why.l2d": "Open every day, 9 AM to 11 PM — we fit around your schedule.",
  "why.l3t": "Homes and businesses", "why.l3d": "Villas, apartments and businesses — serving all of Kuwait from Hawalli.",
  "why.l4t": "Easy to reach", "why.l4d": "Based in Hawalli — call or WhatsApp on 9946 5792.",
  "gallery.kicker": "Our work", "gallery.title": "Clean work, done properly",
  "gallery.c1": "Outdoor units serviced and checked",
  "gallery.c2": "New AC installations, clean finish",
  "gallery.c3": "Filter cleaning without the mess",
  "reviews.kicker": "What people say", "reviews.title": "Trusted across Kuwait",
  "reviews.more": "Find us on Google — see our location and reviews",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "We are open every day from 9:00 AM to 11:00 PM.",
  "faq.q2": "Which areas do you serve?",
  "faq.a2": "We are based in Hawalli and serve homes and businesses across Kuwait.",
  "faq.q3": "Do you service central AC systems?",
  "faq.a3": "Yes — we service split, window and central AC systems.",
  "faq.q4": "How do I book a visit?",
  "faq.a4": "Call or WhatsApp us on 9946 5792 and tell us what needs fixing — we will take it from there.",
  "contact.kicker": "Get in touch", "contact.title": "Book your visit",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Daily: 9:00 AM – 11:00 PM",
  "contact.cta": "Call to book", "contact.cta2": "WhatsApp us",
  "footer.tag": "AC &amp; HVAC services · Hawalli, Kuwait"
}};

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  const val = I18N.en[key];
  if (val !== undefined) el.innerHTML = val;
  else console.warn("missing i18n key:", key);
});

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
