"use client";

import { Container } from "@/components/Container";
import Logo from "@/components/Logo";
import { Title } from "@/components/ui/text";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div className="space-y-6">
          <Title className="text-2xl text-dark-green font-black tracking-wider">
            Contact <Logo />
          </Title>

          <p className="text-gray-600 text-md">
            Have questions about your order, products, or anything else?
            We're here to help. Reach out to us anytime.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="text-sm">📍 Nagpur, Maharashtra, India</p>
            <p className="text-sm">📧 support@mvcart.com</p>
            <p className="text-sm">📞 +91 0000000000</p>
          </div>

          <div className="bg-blue-100 p-5 rounded-xl">
            <p className="text-blue-700 text-sm">
              Our support team usually responds within 24 hours.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION - FORM */}
        <div className="bg-white border shadow shadow-dark-green p-8">
          <Title className="text-2xl font-semibold mb-6">Send a Message</Title>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-dark-green text-white py-2 hover:bg-light-green transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-sm">{success}</p>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}