import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    classInterested: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", classInterested: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Contact & Admissions Inquiry</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Map & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="St. Kanakadasa School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.620023420846!2d78.354143417391!3d12.548810600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac532822da816b%3A0xc6cf6d6288b89cf!2sBargur%2C%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details Card */}
            <div className="bg-lightbg rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-textmuted text-sm mt-1 leading-relaxed">
                      Kanakadasa Avenue, Ammeri,<br />
                      Bargur – 635104, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <div className="text-textmuted text-sm mt-1 flex flex-col gap-1">
                      <a href="tel:+919489110668" className="hover:text-primary transition-colors">+91 94891 10668</a>
                      <a href="tel:+919489110669" className="hover:text-primary transition-colors">+91 94891 10669</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <div className="text-textmuted text-sm mt-1 flex flex-col gap-1">
                      <a href="mailto:kanakadasaschool@gmail.com" className="hover:text-primary transition-colors">kanakadasaschool@gmail.com</a>
                      <a href="mailto:admissions@kanakadasaschool.in" className="hover:text-primary transition-colors">admissions@kanakadasaschool.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Form decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10" />

            <h3 className="font-heading font-bold text-2xl text-primary mb-2">Quick Inquiry</h3>
            <p className="text-sm text-textmuted mb-8">Fill out the form below and our admissions team will contact you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="classInterested" className="block text-sm font-medium text-gray-700 mb-1">Class Interested In</label>
                  <select
                    id="classInterested"
                    name="classInterested"
                    value={formData.classInterested}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select Class</option>
                    <option value="Pre-KG / LKG / UKG">Pre-KG / LKG / UKG</option>
                    <option value="Class I - V">Class I - V (Primary)</option>
                    <option value="Class VI - X">Class VI - X (Secondary)</option>
                    <option value="Class XI - XII">Class XI - XII (Senior Secondary)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Inquiry Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-auto px-8 btn-navy justify-center py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <><Send size={20} /> Submit Inquiry</>
                )}
              </button>

              {status === "success" && (
                <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200 text-center animate-pulse">
                  Thank you! Your inquiry has been submitted successfully.
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200 text-center">
                  Oops! Something went wrong. Please try calling us instead.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
