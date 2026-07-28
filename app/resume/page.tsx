"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResumePage() {
    const router = useRouter();
    const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
            setErrorMsg("");
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
            setFileName(e.dataTransfer.files[0].name);
            setErrorMsg("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent double submission
        if (status === "submitting") return;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !selectedFile) {
            setErrorMsg("Please fill in all required fields and attach your resume.");
            setStatus("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setErrorMsg("Please enter a valid email address.");
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setErrorMsg("");

        try {
            const formData = new FormData();
            formData.append("first_name", firstName.trim());
            formData.append("last_name", lastName.trim());
            formData.append("email", email.trim());
            formData.append("phone", phone.trim());
            if (description.trim()) formData.append("description", description.trim());
            
            // Extract job title from URL if present
            const urlParams = new URLSearchParams(window.location.search);
            const jobTitle = urlParams.get('job');
            if (jobTitle) {
                formData.append("job_title", jobTitle);
            }
            
            formData.append("resume", selectedFile);

            const res = await fetch("/api/resume/resumeSubmisson", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setDescription("");
                setFileName("");
                setSelectedFile(null);
                setErrorMsg("");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                router.push("/thank-you");
            } else {
                setStatus("error");
                setErrorMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch (error: any) {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
        }
    };

    return (
        <main className="flex-1 w-full bg-[#FFFDF5] font-outfit min-h-screen">
            {/* Hero Section */}
            <div className="w-full relative overflow-hidden bg-[#162018] font-cormorant pt-32 pb-24 lg:pt-40 lg:pb-32">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/carrersbg.png"
                        alt="Join our team"
                        fill
                        className="object-cover opacity-30"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111A13]/90 via-[#111A13]/80 to-[#111A13]" />
                </div>

                <section className="relative z-10 w-full px-4 sm:px-6 lg:px-8 container mx-auto max-w-4xl text-center">
                    <span className="text-[#C8920A] font-bold tracking-widest text-xs block mb-4 uppercase font-outfit">
                        — Build Your Career
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-medium text-white leading-[1.1] mb-6 font-cormorant">
                        Join Our <span className="text-[#C8920A] italic">Professional Team</span>
                    </h1>
                    <p className="text-white/80 text-lg sm:text-[19px] leading-relaxed max-w-2xl mx-auto font-medium font-outfit">
                        Take the next step in your career with MeBilling. Submit your resume below, and our recruitment team will review your qualifications for current and future opportunities.
                    </p>
                </section>
            </div>

            {/* Form Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-white rounded-[24px] shadow-[0_8px_30px_-5px_rgba(26,107,58,0.08)] border border-[#1A6B3A]/10 p-8 sm:p-12">

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-20 h-20 bg-[#1A6B3A]/10 rounded-full flex items-center justify-center mb-6 text-[#1A6B3A]">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-cormorant font-medium text-[#162018] mb-4">Application Submitted</h3>
                                <p className="text-[#162018]/70 font-outfit text-[16px] max-w-md mx-auto leading-relaxed">
                                    Thank you for your interest in MeBilling. Your resume has been received successfully, and our team will be in touch shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 px-8 py-3 rounded-full border border-[#1A6B3A] text-[#1A6B3A] font-bold text-sm hover:bg-[#1A6B3A] hover:text-white transition-all font-outfit"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="firstName" className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => { setFirstName(e.target.value); setErrorMsg(""); }}
                                            className="w-full px-5 py-3.5 bg-[#FCFBF5] border border-[#E8E6DD] rounded-xl focus:outline-none focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A] transition-all text-[15px] text-[#162018]"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="lastName" className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => { setLastName(e.target.value); setErrorMsg(""); }}
                                            className="w-full px-5 py-3.5 bg-[#FCFBF5] border border-[#E8E6DD] rounded-xl focus:outline-none focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A] transition-all text-[15px] text-[#162018]"
                                            placeholder="Second Name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); }}
                                            className="w-full px-5 py-3.5 bg-[#FCFBF5] border border-[#E8E6DD] rounded-xl focus:outline-none focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A] transition-all text-[15px] text-[#162018]"
                                            placeholder="abc@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => { setPhone(e.target.value); setErrorMsg(""); }}
                                            className="w-full px-5 py-3.5 bg-[#FCFBF5] border border-[#E8E6DD] rounded-xl focus:outline-none focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A] transition-all text-[15px] text-[#162018]"
                                            placeholder="+92-3XX-XXXXXXX"
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="description" className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">Description</label>
                                    <textarea 
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows={4}
                                        className="w-full px-5 py-3.5 bg-[#FCFBF5] border border-[#E8E6DD] rounded-xl focus:outline-none focus:border-[#C8920A] focus:ring-1 focus:ring-[#C8920A] transition-all text-[15px] text-[#162018] resize-y"
                                        placeholder="Tell us a bit about yourself..."
                                    />
                                </div>

                                {/* Upload Field */}
                                <div className="flex flex-col gap-2 mt-2">
                                    <label className="text-[13px] font-bold tracking-wide text-[#162018] uppercase">Resume / CV *</label>

                                    <div
                                        className={`w-full border-2 border-dashed rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center transition-all cursor-pointer relative
                                            ${isDragging ? "border-[#C8920A] bg-[#C8920A]/5" : "border-[#E8E6DD] bg-[#FCFBF5] hover:border-[#1A6B3A]/40 hover:bg-[#1A6B3A]/5"}
                                            ${fileName ? "border-solid border-[#1A6B3A] bg-[#1A6B3A]/5" : ""}
                                        `}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                        />

                                        {fileName ? (
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-12 h-12 bg-[#1A6B3A]/10 text-[#1A6B3A] rounded-full flex items-center justify-center mb-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                        <polyline points="14 2 14 8 20 8"></polyline>
                                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                                        <polyline points="10 9 9 9 8 9"></polyline>
                                                    </svg>
                                                </div>
                                                <span className="text-[#1A6B3A] font-bold text-[15px] mb-1">{fileName}</span>
                                                <span className="text-[#162018]/50 text-[13px]">Click to replace</span>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-12 h-12 bg-white shadow-sm text-[#C8920A] rounded-full flex items-center justify-center mb-4 border border-[#E8E6DD]">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                        <polyline points="17 8 12 3 7 8"></polyline>
                                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                                    </svg>
                                                </div>
                                                <span className="text-[#162018] font-bold text-[15px] mb-1">Click to upload or drag and drop</span>
                                                <span className="text-[#162018]/50 text-[13px]">Supported formats: .pdf, .doc, .docx</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Error message */}
                                {errorMsg && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[14px] font-medium flex items-center gap-3">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                        {errorMsg}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-4 rounded-xl bg-[#1A6B3A] hover:bg-[#13522C] text-white font-bold text-[15px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1A6B3A]/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-[#162018]/50 text-[12px] font-medium mt-2">
                                    By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-[#C8920A]">Privacy Policy</a>.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
