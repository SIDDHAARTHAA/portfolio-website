'use client'
import { Mail, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from 'sonner'

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", message: "", contact: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        toast.loading('Sending your message...')

        const payload = {
            data: [
                {
                    Name: form.name,
                    Message: form.message,
                    Contact: form.contact,
                    Date: new Date().toLocaleString(),
                },
            ],
        }

        try {
            const res = await fetch('https://sheetdb.io/api/v1/8x4apz8a6o6dd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            toast.dismiss() // remove loading

            if (res.ok) {
                toast.success('Message sent 🎉')
                setForm({ name: '', message: '', contact: '' })
            } else {
                toast.error('Something went wrong 😕')
            }
        } catch (err) {
            toast.dismiss()
            toast.error('Error sending message 💀')
            console.error(err)
        }
    }


    return (
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-6 mb-20">
            <div className="w-full p-6 border border-card-border rounded-2xl shadow bg-muted/20 flex flex-col gap-6 max-w-5xl">
                <h1 className="text-4xl font-bold flex items-center gap-2 text-left">
                    <Send size={28} className="text-primary" />
                    Hit Me Up 👋
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Jhon Doe"
                        className="px-4 py-2 rounded-xl border border-card-border bg-muted focus:outline-none"
                        required
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Lets discuss something interesting about tech.."
                        className="px-4 py-2 rounded-xl border border-card-border bg-muted focus:outline-none"
                        required
                    />

                    <input
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        type="text"
                        placeholder="How can I reach you back? (email, phone..)"
                        className="px-4 py-2 rounded-xl border border-card-border bg-muted focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-primary text-white rounded-xl px-4 py-2 hover:opacity-90 transition-all"
                    >
                        Send Message
                    </button>
                </form>
                <p className="items-center justify-center flex mt-3">or</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="mailto:siddhaartha09@gmail.com" className="p-3 rounded-full bg-muted border border-card-border hover:scale-105 transition">
                        <Mail size={20} />
                    </a>
                    <a href="https://www.instagram.com/siddhaartha_bs" target="_blank" className="p-3 rounded-full bg-muted border border-card-border hover:scale-105 transition">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/siddhaartha-b-s-16802b2b7" target="_blank" className="p-3 rounded-full bg-muted border border-card-border hover:scale-105 transition">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/sid_likescoding" target="_blank" className="p-3 rounded-full bg-muted border border-card-border hover:scale-105 transition">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}