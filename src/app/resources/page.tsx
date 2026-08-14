/** @type {import('next').MetaData} */
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin"] });

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplometric-navy">Resources</h1>
          <Button
            asChild
            variant="outline"
            className="py-2 px-4 text-sm"
            href="/"
          >
            Back to Home
          </Button>
        </div>
      </header>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Buying Guides */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaBookOpen className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Buying Guides</h3>
              <p className="text-diplometric-gray mb-4">
                Comprehensive guides to help you choose the right safe for your needs.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-2">
                <li>Home Safe Buying Guide</li>
                <li>Office Safe Buying Guide</li>
                <li>Fireproof Safe Buying Guide</li>
                <li>Bank Safe Buying Guide</li>
                <li>Safe Size and Capacity Guide</li>
              </ul>
              <Button
                asChild
                href="/resources/buying-guides"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                View All Guides
              </Button>
            </div>

            {/* FAQs */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaQuestionCircle className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">FAQs</h3>
              <p className="text-diplometric-gray mb-4">
                Answers to frequently asked questions about safes and security.
              </p>
              <Accordion type="single">
                <AccordionItem value="q1">
                  <AccordionTrigger>What fire rating do Diplomatic safes have?</AccordionTrigger>
                  <AccordionContent>
                    <p>Diplomatic safes come with fire ratings of 60, 90, and 120 minutes, protecting contents from heat and smoke during fire incidents.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>Do Diplomatic safes come with a warranty?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, all Diplomat safes come with a 3-year warranty against manufacturer's defects.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>What lock types are available?</AccordionTrigger>
                  <AccordionContent>
                    <p>All Diplomatic safes feature dual locking systems: Electronic Digital Lock + Key Lock, with some models also featuring a Handle + Key Lock option.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Safe Size Guide */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaRulerCombined className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Safe Size Guide</h3>
              <p className="text-diplometric-gray mb-4">
                Choose the right capacity for your valuables.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-2">
                <li>Compact (1-30 Litres): Home use, documents, jewellery</li>
                <li>Small (31-70 Litres): Home offices, small businesses</li>
                <li>Medium (71-150 Litres): Office environments, SACCOs</li>
                <li>Large (151-300 Litres): Banks, government institutions</li>
                <li>Extra Large (301+ Litres): Vault rooms, strong rooms</li>
              </ul>
              <Button
                asChild
                href="/resources/safe-size-guide"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Detailed Guide
              </Button>
            </div>

            {/* Maintenance Tips */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 bg-diplometric-charcoal/50">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTools className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Maintenance Tips</h3>
              <p className="text-diplometric-gray mb-4">
                Keep your safe in optimal condition with regular maintenance.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-2">
                <li>Lubricate locks every 6 months</li>
                <li>Check hinges and door alignment annually</li>
                <li>Clean interior with dry cloth</li>
                <li>Test digital locks quarterly</li>
                <li>Keep backup codes for electronic locks</li>
              </ul>
              <Button
                asChild
                href="/resources/maintenance-tips"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Read Full Tips
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochures Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplometric-navy mb-8 text-center">Downloadable Brochures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaFilePdf className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Home Safe Brochure</h3>
              <p className="text-diplometric-gray mb-4">
                Detailed specifications and features of our home safe range.
              </p>
              <a
                href="#"
                className="text-diplometric-gold hover:text-diplometric-navy transition-colors text-sm"
              >
                Download PDF (1.2MB)
              </a>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaFilePdf className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Office Safe Brochure</h3>
              <p className="text-diplometric-gray mb-4">
                Commercial security solutions brochure.
              </p>
              <a
                href="#"
                className="text-diplometric-gold hover:text-diplometric-navy transition-colors text-sm"
              >
                Download PDF (1.5MB)
              </a>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaFilePdf className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Bank Vault Brochure</h3>
              <p className="text-diplometric-gray mb-4">
                Premium vault and strong room solutions.
              </p>
              <a
                href="#"
                className="text-diplometric-gold hover:text-diplometric-navy transition-colors text-sm"
              >
                Download PDF (2.1MB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Optimized Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplometric-navy mb-8 text-center">Security Tips & Advice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Fire Prevention</h3>
              <p className="text-diplometric-gray mb-4">
                How safes protect your valuables from fire damage.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>60-120 minute fire ratings available</li>
                <li>Heat and smoke blocking technology</li>
                <li>Waterproof testing certified</li>
              </ul>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 bg-diplometric-charcoal/50">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaUserGroup className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Institutional Security</h3>
              <p className="text-diplometric-gray mb-4">
                Security solutions for banks, SACCOs, and government offices.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Bulk purchase options</li>
                <li>Site survey services</li>
                <li>Compliance-grade certifications</li>
              </ul>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaHeart className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplometric-navy">Home Security</h3>
              <p className="text-diplometric-gray mb-4">
                Protecting your home and family with the right safe.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Home safe selection guide</li>
                <li>Child safety considerations</li>
                <li>Insurance premium reductions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}