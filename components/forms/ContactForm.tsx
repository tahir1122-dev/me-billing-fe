"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const organization = formData.get("organization") as string;
        const specialty = formData.get("specialty") as string;
        const queries = formData.get("queries") as string;

        if (!firstName?.trim() || !lastName?.trim() || !phone?.trim() || !email?.trim()) {
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
            phone: phone,
            organization: organization,
            specialty: specialty,
            description: queries,
        };

        try {
            const res = await fetch("/api/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            });

            const data = await res.json();
            console.log("Response Data:", data); // Check the raw res
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Your Name</label>
                    <input name="firstName" type="text" placeholder="First Name" required className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Last Name</label>
                    <input name="lastName" type="text" placeholder="Last Name" required className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Phone</label>
                    <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Email Address</label>
                    <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Organization</label>
                    <input name="organization" type="text" placeholder="Organization" className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                </div>
                <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Specialty</label>
                    <div className="relative">
                        <select name="specialty" className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white/50 appearance-none focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                            <option value="" className="bg-[#1A6B3A]">Select your specialty...</option>
                            <option value="behavioral" className="bg-[#1A6B3A]">Behavioral Health</option>
                            <option value="cardiology" className="bg-[#1A6B3A]">Cardiology</option>
                            <option value="emergency" className="bg-[#1A6B3A]">Emergency Medicine</option>
                            <option value="oncology" className="bg-[#1A6B3A]">Oncology</option>
                            <option value="other" className="bg-[#1A6B3A]">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="text-[10px] font-bold tracking-widest uppercase mb-2 block font-outfit" style={{ color: "rgba(255,255,255,0.6)" }}>Your Queries</label>
                <textarea
                    name="queries"
                    placeholder="Your queries"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-outfit text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50 resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-lg font-bold text-sm font-outfit flex items-center justify-center gap-3 transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#1A6B3A", color: "white" }}
            >
                {status === "loading" ? (
                    <>
                        Submitting...
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </>
                ) : (
                    <>
                        Submit
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </>
                )}
            </button>

            <p className="text-center text-[11px] font-outfit" style={{ color: "#C8920A" }}>
                Your information is protected under HIPAA. We do not share or sell your data.
            </p>
            {message && (
                <div className={`p-3 mt-2 rounded text-sm ${status === "success" ? "bg-green-900/50 text-green-100" : "bg-red-900/50 text-red-100"}`}>
                    {message}
                </div>
            )}
        </form>
    );
}