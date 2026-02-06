import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // ✅ Formspree submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xkovwero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message Sent ✅",
          description: "I received your message. I’ll reply soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Form submit failed");
      }
    } catch (err) {
      toast({
        title: "Error ❌",
        description: "Something went wrong. Try again.",
      });
    }

    setLoading(false);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Saurav,%20I'd%20like%20to%20discuss%20a%20website%20project`,
      '_blank'
    );
  };


  {/* Social Links */}
<div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
  <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

  <div className="flex gap-4">

    <a
      href={contact.social.github}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition"
    >
      <Github className="h-6 w-6 text-gray-300" />
    </a>

    <a
      href={contact.social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition"
    >
      <Linkedin className="h-6 w-6 text-gray-300" />
    </a>

    <a
      href={contact.social.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition"
    >
      <Twitter className="h-6 w-6 text-gray-300" />
    </a>

  </div>
</div>


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Your Website
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch and let's discuss how I can help your business grow online
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE SAME — no change */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-sm bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-emerald-500/20">
                  <MessageCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Quick Response on WhatsApp</h3>
                  <p className="text-gray-300">Get instant replies and fast support</p>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg font-semibold rounded-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* ✅ RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">

                <Input
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  required
                />

               <Textarea
  name="message"
  rows={6}
  value={formData.message}
  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
  placeholder="Your Message"
  required
  className="text-white placeholder:text-gray-500 bg-white/5 border-white/20"
/>


                <Button type="submit" disabled={loading} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
