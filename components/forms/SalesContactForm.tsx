"use client";

import { useState } from "react";

export default function SalesContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const messageVal = formData.get("message") as string;

        if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
            setStatus("error");
            setMessage("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");
        const submitData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            description: messageVal, // Mapped to queries
            type: "sales", // Explicitly setting type to sales
        };

        try {
            const res = await fetch("/api/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus("success");
                setMessage("Message sent successfully!");
                const formElement = e.target as HTMLFormElement;
                formElement.reset();
            } else {
                setStatus("error");
                setMessage(data.error || "Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("An unexpected error occurred.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A6B3A] font-outfit">
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="mt-2 w-full rounded-lg border border-[#082610]/15 bg-white px-4 py-2.5 text-sm text-[#162018] placeholder:text-slate-400 focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A]/30 focus:outline-none font-outfit"
                    />
                </label>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A6B3A] font-outfit">
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="mt-2 w-full rounded-lg border border-[#082610]/15 bg-white px-4 py-2.5 text-sm text-[#162018] placeholder:text-slate-400 focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A]/30 focus:outline-none font-outfit"
                    />
                </label>
            </div>

            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A6B3A] font-outfit">
                Business Email
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mt-2 w-full rounded-lg border border-[#082610]/15 bg-white px-4 py-2.5 text-sm text-[#162018] placeholder:text-slate-400 focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A]/30 focus:outline-none font-outfit"
                />
            </label>

            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1A6B3A] font-outfit">
                Message
                <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-[#082610]/15 bg-white px-4 py-2.5 text-sm text-[#162018] placeholder:text-slate-400 focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A]/30 focus:outline-none font-outfit"
                />
            </label>

            <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-3 rounded-full bg-[#C8920A] hover:bg-[#b58308] px-7 py-3 text-sm font-bold text-black transition-all shadow-md font-outfit disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        Submitting...
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6B3A]">
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                    </>
                ) : (
                    <>
                        Submit
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6B3A]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                    </>
                )}
            </button>
            {message && (
                <div className={`p-3 mt-2 rounded text-sm ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {message}
                </div>
            )}
        </form>
    );
}
