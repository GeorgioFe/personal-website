import "../globals.css";
import SocialMediaSection from "@/components/contact/SocialMediaSection";
import FormSection from "@/components/contact/FormSection";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/footer/Footer";

export default function Contact() {
  return (
    <AnimatedSection>
        <main className="bg-black text-white min-h-screen">
          <div className="px-16 py-20 max-w-7xl">
            <h1 className="text-5xl font-medium tracking-tight">Let's Connect!</h1>
            <div className="mt-30 flex flex-col gap-20 md:flex-row md:items-start">
              <div className="md:flex-1">
                <FormSection />
              </div>
              <div className="md:flex-1">
                <SocialMediaSection />
              </div>
            </div>
          </div>
          <div className="-mt-8">
            <Footer/>
          </div>
        </main>
    </AnimatedSection>
  );
}