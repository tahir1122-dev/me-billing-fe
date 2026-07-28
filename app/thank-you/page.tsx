import Link from "next/link";

export const metadata = {
  title: "Thank You | Me Billing",
  description: "Thank you for contacting Me Billing.",
};

export default function ThankYouPage() {
  return (
    <main className="flex-1 w-full bg-[#FFFDF5] font-outfit min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-[#1A6B3A]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#1A6B3A]">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#162018] mb-6">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-[#162018]/70 mb-10 max-w-lg mx-auto leading-relaxed">
          Your submission has been received successfully. Our team will review your information and get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#155a30] text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          Return to Home
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
