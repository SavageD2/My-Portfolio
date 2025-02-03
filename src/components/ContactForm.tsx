"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      console.log("Message envoyé avec succès :", docRef.id);
      setSuccess(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="contact" className="py-16 px-8 bg-gray-800 min-h-screen pt-24"> 
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-gray-800"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg disabled:bg-blue-300"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
        {success && <p className="mt-4 text-center text-green-500">Message envoyé avec succès !</p>}
      </form>
    </motion.section>
  );
}
