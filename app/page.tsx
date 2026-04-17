import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import EfficiencySection from "@/components/sections/EfficiencySection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TourSection from "@/components/sections/TourSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full bg-white relative">
        <Hero />

        {/* Safeguard Section */}
        <section className="w-full bg-[#ecf7fc] py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <h3 className="text-xl sm:text-2xl font-medium text-slate-800 max-w-xl text-center lg:text-left">
                We safeguard your practice with full security and HIPAA compliance.
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-90">
                <img src="/images/safguard 1.png" alt="AICPA SOC"
                  className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] object-contain mix-blend-multiply" />

                <img src="/images/safguard 2.png" alt="PCI Security Standards"
                  className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] object-contain mix-blend-multiply" />

                <img src="/images/safguard 3.png" alt="HITRUST CSF"
                  className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] object-contain mix-blend-multiply" />

                <img src="/images/safguard 4.png" alt="HIPAA"
                  className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        <TrustSection />
        <EfficiencySection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <TourSection />
        <ContactSection />
      </main>
    </>
  );
}

