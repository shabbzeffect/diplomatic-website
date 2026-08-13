/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin"] });

export default function BankingInstitutionalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">
            Banking & Financial Institution Solutions
          </h1>
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-diplomatic-navy to-diplomatic-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Secure Financial Assets with Diplomat Safes
          </h2>
          <p className="text-diplomatic-gray text-2xl mb-8 max-w-2xl mx-auto">
            Specialized safe and vault solutions for banks, SACCOs, microfinance institutions, and financial organizations across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              href="/request-a-quote"
              variant="primary"
              className="py-3 px-8 text-lg font-medium"
            >
              Request Institutional Quote
            </Button>
            <a
              href="https://wa.me/+254722762071?text=Hi,%20I%20represent%20a%20bank/%20SACC%20and%20need%20institutional%20safe%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-lg font-medium bg-diplomatic-gold text-diplomatic-navy rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* B2B Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Institutional Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Banks */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Banks</h3>
              <p className="text-sm text-diplometric-gray mb-4">High-security vaults, time-delay safes, and currency deposit solutions for commercial banks and central banking institutions.</p>
              <ul className="text-diplometric-gray text-sm space-y-1">
                <li>Grade 1 & Grade 2 security vaults</li>
                <li>Currency cassette safes</li>
                <li>Night deposit safes</li>
                <li>Data and media safes</li>
                <li>Custom vault room solutions</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Site Survey Request
              </Button>
            </div>

            {/* SACCOs */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaHeart className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">SACCOs & Cooperatives</h3>
              <p className="text-sm text-diplometric-gray mb-4">Affordable secure storage for savings, member records, and valuable documents.</p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Home & office safe solutions</li>
                <li>Member record protection</li>
                <li>Group savings vaults</li>
                <li>3-year warranty on all units</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Get Quote
              </Button>
            </div>

            {/* Government */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaMapPin className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Government Institutions</h3>
              <p className="text-sm text-diplometric-gray mb-4">Compliance-grade security for government archives, records, and official assets.</p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Fire-rated document safes</li>
                <li>Burglary-resistant storage</li>
                <li>Long-term archive solutions</li>
                <li>Site survey & installation</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Consultation Booking
              </Button>
            </div>

            {/* NGOs */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaHandHelping className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">NGOs & Development Organizations</h3>
              <p className="text-sm text-diplometric-gray mb-4">Secure storage for project documents, equipment, and beneficiary records.</p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Portable safe solutions</li>
                <li>Field office security</li>
                <li>Document protection</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Request Quote
              </Button>
            </div>

            {/* Corporate Organizations */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaBuildingClass className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Corporate Organizations</h3>
              <p className="text-sm text-diplometric-gray mb-4">Executive safes for document protection and office security for staff valuables.</p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Executive desk safes</li>
                <li>Office vault systems</li>
                <li>Asset protection solutions</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Corporate Inquiry
              </Button>
            </div>

            {/* Schools & Universities */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaSchool className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Educational Institutions</h3>
              <p className="text-sm text-diplometric-gray mb-4">Secure storage for examination papers, staff records, and laboratory equipment.</p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Fire-resistant document safes</li>
                <li>Laboratory equipment storage</li>
                <li> examination paper protection</li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                School Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Purchase Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-diplomatic-navy mb-6">Bulk & Institutional Purchase</h2>
              <p className="text-diplometric-gray mb-6">
                For orders of 5 or more units, we offer specialized pricing and services:
              </p>
              <ul className="space-y-3 text-diplometric-gray">
                <li>
                  <FaTruck className="h-5 w-5 text-diplometric-gold flex-shrink-0 mr-3" /> 
                  Dedicated account management
                </li>
                <li>
                  <FaMapPin className="h-5 w-5 text-diplometric-gold flex-shrink-0 mr-3" /> 
                  Free site survey and measurement
                </li>
                <li>
                  <FaTruckLoading className="h-5 w-5 text-diplometric-gold flex-shrink-0 mr-3" /> 
                  Free delivery within Kenya
                </li>
                <li>
                  <FaUserCheck className="h-5 w-5 text-diplometric-gold flex-shrink-0 mr-3" /> 
                  Priority installation scheduling
                </li>
                <li>
                  <FaPercent className="h-5 w-5 text-diplometric-gold flex-shrink-0 mr-3" /> 
                  Volume discount pricing
                </li>
              </ul>
              <Button
                asChild
                href="/request-a-quote"
                variant="primary"
                className="mt-6 py-3 px-6 text-lg font-medium"
              >
                Bulk Quote Request
              </Button>
            </div>
            <div>
              <Image
                src="/assets/img/about/image1.png?ver=3.0"
                alt="Bank vault installation"
                width={500}
                height={400}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Our Services for Financial Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTruck className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Delivery & Logistics</h3>
              <p className="text-sm text-diplometric-gray mb-4">Secure transportation with GPS tracking and trained personnel for valuable assets.</p>
              <a href="/services/safe-delivery" className="text-diplometric-gold hover:text-diplomatic-navy transition-colors text-sm">Learn More</a>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaMagicWand className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Professional Installation</h3>
              <p className="text-sm text-diplometric-gray mb-4">Certified technicians with experience in banking and institutional installations.</p>
              <a href="/services/safe-installation" className="text-diplometric-gold hover:text-diplomatic-navy transition-colors text-sm">Learn More</a>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaUserGroup className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Bulk & Institutional Supply</h3>
              <p className="text-sm text-diplometric-gray mb-4">Streamlined procurement for large-scale projects and institutional contracts.</p>
              <a href="/services/bulk-supply" className="text-diplometric-gold hover:text-diplomatic-navy transition-colors text-sm">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-diplomatic-navy to-diplomatic-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Partner with Diplomatic for Your Security Needs</h2>
          <p className="text-diplomatic-gray mb-8 max-w-2xl mx-auto">
            Contact our B2B sales team for a site survey, quotation, or product consultation tailored to your institution's security requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              href="/request-a-quote"
              variant="primary"
              className="py-3 px-8 text-lg font-medium"
            >
              Request Institutional Quote
            </Button>
            <a
              href="https://wa.me/+254722762071?text=Hi,%20I%20represent%20%5Binstitution%5D%20and%20need%20secure%20storage%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-lg font-medium bg-diplomatic-gold text-diplomatic-navy rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp B2B
            </a>
            <a
              href="tel:+254722762071"
              className="py-3 px-8 text-lg font-medium bg-diplometric-gray text-white rounded-full hover:bg-diplometric-navy transition-colors"
            >
              <FaPhone className="mr-2 h-4 w-4" /> Call B2B Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}