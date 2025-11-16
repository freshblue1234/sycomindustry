import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sycom Industry | AI Solutions & Sybot Development in Rwanda",
  description: "Reach out to Sycom Industry for cutting-edge AI solutions, Sybot implementation, and custom application development tailored for African businesses.",
  keywords: "Sycom Industry, AI company Rwanda, Sybot, artificial intelligence Rwanda, contact AI developer, African AI solutions",
  openGraph: {
    title: "Contact Sycom Industry | Leading AI Solutions in Rwanda",
    description: "Partner with Rwanda's premier AI company for intelligent solutions that understand African business needs.",
    url: "https://www.sycom.rw/contact",
    siteName: "Sycom Industry",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.sycom.rw"),
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Sycom Industry"
        description="Partner with Rwanda's leading AI solutions provider. Our team is ready to discuss how Sybot and our custom AI applications can transform your business operations."
      />

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              title="Why Choose Sycom Industry"
              paragraph="As Rwanda's pioneering AI company, we combine deep technical expertise with local market understanding to deliver intelligent solutions that address African business challenges."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-10">
              <div className="flex items-center gap-3 bg-white dark:bg-dark p-4 rounded-lg shadow-sm border border-opacity-20 border-body-color dark:border-white dark:border-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark font-medium">Multilingual AI Support (Kinyarwanda, English, French)</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-dark p-4 rounded-lg shadow-sm border border-opacity-20 border-body-color dark:border-white dark:border-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark font-medium">Local Context Understanding for African Markets</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-dark p-4 rounded-lg shadow-sm border border-opacity-20 border-body-color dark:border-white dark:border-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark font-medium">Custom AI Solutions for Business Optimization</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-dark p-4 rounded-lg shadow-sm border border-opacity-20 border-body-color dark:border-white dark:border-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark font-medium">Continuous AI Learning & Development Cycles</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                Our team of AI experts is available to discuss your specific needs and develop tailored solutions for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+250784090113" className="font-medium hover:text-primary transition-colors">+250 784 090 113</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:sycomindustry@gmail.com" className="font-medium hover:text-primary transition-colors">sycomindustry@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
