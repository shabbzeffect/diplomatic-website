/** @type {import('next').MetaData} */
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">About Us</h1>
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
          <h2 className="text-4xl font-bold text-white mb-4">Trusted Safe Security Solutions in Kenya</h2>
          <p className="text-diplomatic-gray text-2xl mb-8 max-w-2xl mx-auto">
            Diplomatic Office Supplies Limited is a Kenyan company and leading distributor of safes and security storage solutions within East Africa. We have created trusting partnerships with reputable manufacturers such as Diplomat Safe to provide quality safes and security products.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-diplomatic-navy mb-6">Company Overview</h2>
              <p className="text-diplometric-gray text-lg mb-6">
                Diplomatic Office Supplies Limited has been serving the Kenyan market as the premier distributor of safes and security storage solutions. Our commitment to quality, reliability, and customer service has made us the trusted choice for banks, SACCOs, government institutions, businesses, and homeowners across East Africa.
              </p>
              <ul className="space-y-3 text-diplometric-gray">
                <li className="flex items-start">
                  <FaMapPin className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">Maasai Mall, Ongata Rongai, Nairobi</span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">+254-722-762-071 / +254-724-252-971</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">info@diplomatic.co.ke</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/assets/img/about/image1.png?ver=3.0"
                alt="Diplomatic Office Supplies team"
                width={500}
                height={400}
                className="rounded-lg object-cover h-full"
              />
              <Image
                src="/assets/img/about/image2.png?ver=3.0"
                alt="Diplomatic safe installation"
                width={500}
                height={400}
                className="rounded-lg object-cover mt-6 h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTarget className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-xl font-bold text-diplomatic-navy">Our Mission</h3>
              <p className="text-diplometric-gray mb-4">
                "DOSL offers tested security solutions for the protection of all kinds of valuables and data against burglary, fire and other possible threats. We are here to help you find the perfect solution to meet your exact security requirements."
              </p>
              <p className="text-diplometric-gray text-sm">
                At DOSL we advise our clients on planning and installation, as well as service and maintenance. Our goal is being the preferred supplier for our customers supplying always the best possible solutions and services.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaCheckCircle className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-xl font-bold text-diplomatic-navy">Our Values</h3>
              <ul className="space-y-2 text-diplometric-gray">
                <li>Integrity - Honest and transparent business practices</li>
                <li>Quality - Premium products from trusted manufacturers</li>
                <li>Reliability - Consistent service and support</li>
                <li>Security - Prioritizing client safety above all</li>
                <li>Professionalism - Expert guidance and service</li>
              </ul>
            </div>
            <div>
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaUsers className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h3 className="text-xl font-bold text-diplomatic-navy">Customer Sectors</h3>
              <p className="text-diplometric-gray text-sm">
                We serve a diverse range of sectors including Banks, SACCOs, Government institutions, Private organizations, Public organizations, Businesses, Retail chains, Hotels, and Individual homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-6 text-center">Why Customers Trust Diplomatic Office Supplies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h4 className="font-medium text-diplometric-navy">ECB-S Certified</h4>
              <p className="text-diplometric-gray text-sm mt-2">
                Grade 1 & Grade 2 security certification per EU standards
              </p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTruck className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h4 className="font-medium text-diplometric-navy">Professional Installation</h4>
              <p className="text-diplometric-gray text-sm mt-2">
                Certified technicians with banking sector experience
              </p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 bg-diplometric-charcoal/50">
              <div className="h-10 w-10 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaHeart className="h-5 w-5 text-diplometric-gold" />
              </div>
              <h4 className="font-medium text-diplometric-navy">3-Year Warranty</h4>
              <p className="text-diplometric-gray text-sm mt-2">
                Manufacturer's warranty against defects on all products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Location */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-diplomatic-navy mb-6">Showroom Location</h2>
              <p className="text-diplometric-gray mb-4">
                Visit our showroom to see our range of safes and security solutions in person.
              </p>
              <ul className="space-y-2 text-diplometric-gray">
                <li className="flex items-start">
                  <FaMapPin className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">Maasai Mall, Ongata Rongai, Nairobi, Kenya</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">Monday - Friday: 8am to 5:30pm</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">Saturday: 9am to 1pm</span>
                </li>
                <li className="flex items-start">
                  <FaTimes className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                  <span className="ml-3 text-sm">Sunday: Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/assets/img/about/image2.png?ver=3.0"
                alt="Diplomatic showroom exterior"
                width={500}
                height={400}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-diplomatic-navy to-diplomatic-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-diplomatic-gray mb-8 max-w-2xl mx-auto">
            Contact our team for product inquiries, quotation requests, or security consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              href="/contact-us"
              variant="primary"
              className="py-3 px-8 text-lg font-medium"
            >
              Contact Us
            </Button>
            <a
              href="https://wa.me/+254722762071?text=Hi,%20I%20have%20a%20question%20about%20your%20safes."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-lg font-medium bg-diplometric-gold text-diplometric-navy rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+254722762071"
              className="py-3 px-8 text-lg font-medium bg-diplometric-gray text-white rounded-full hover:bg-diplometric-navy transition-colors"
            >
              <FaPhone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}