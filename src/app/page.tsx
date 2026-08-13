"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";
import { FaSearch, FaShieldAlt, FaHeart, FaTruck, FaFileInvoiceDollar } from "react-icons/fa";
import { Loader3, Loader2, Loader1, Loader4, Loader5 } from "react-icons/loader";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectSeparator, Option} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const heroTitle = "Trusted Safe and Security Solutions Supplier in Kenya and East Africa";
const heroSubtitle = "Premium safes, vaults, and security storage solutions for banks, SACCOs, governments, businesses, and homeowners";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Contact Bar */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-6 text-sm text-diplomatic-gray">
            <FaPhone className="h-4 w-4 text-primary" /> +254-722-762-071 / +254-724-252-971
            <FaEnvelope className="h-4 w-4 text-primary" /> info@diplomatic.co.ke
            <FaMapPin className="h-4 w-4 text-primary" /> Maasai Mall, Ongata Rongai, Nairobi
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/+254722762071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-diplomatic-gold text-diplomatic-navy rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
              <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-diplomatic-navy to-diplomatic-charcoal min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Loader1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 opacity-20" />
          <Loader2 className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 h-32 w-32 opacity-10 rotate-6" />
          <Loader3 className="absolute bottom-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-32 w-32 opacity-10 rotate-12" />
          <Loader4 className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2 h-32 w-32 opacity-10 rotate-18" />
          <Loader5 className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 h-32 w-32 opacity-10 rotate-24" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-diplomatic-gray mb-8 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              href="/safes"
              variant="default"
              className="py-3 px-6 text-lg font-medium"
            >
              <Loader1 className="mr-2" /> Explore Safes
            </Button>
            <Button
              asChild
              href="/request-a-quote"
              variant="primary"
              className="py-3 px-6 text-lg font-medium"
            >
              Request a Quote
            </Button>
            <a
              href="https://wa.me/+254722762071?text=Hi,%20I'm%20interested%20in%20Diplomatic%20safes%20for%20my%20home/%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 text-lg font-medium bg-diplomatic-gold text-diplomatic-navy rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-diplomatic-gray/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-medium">Trusted Supplier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-diplomatic-gray">East Africa's leading safe distributor with partnerships with reputable manufacturers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-medium">Quality Brands</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-diplomatic-gray">Diplomat Safe and other trusted manufacturers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-medium">Installation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-diplomatic-gray">Professional delivery and installation across Kenya</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-medium">East Africa Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-diplomatic-gray">Nairobi, Mombasa, Kisumu, and beyond</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assets/img/safes/119ek.png?ver=3.0"
                alt="Home Safe 119EK"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-diplomatic-navy">Home Safes</h3>
                <p className="text-sm text-diplomatic-gray mt-1">10 models available</p>
              </div>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assets/img/safes/530ek.png?ver=3.0"
                alt="Office Safe 530EK"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-diplomatic-navy">Office Safes</h3>
                <p className="text-sm text-diplomatic-gray mt-1">Commercial security solutions</p>
              </div>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assets/img/safes/060ehk.png?ver=3.0"
                alt="Hotel Safe 060EHK"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-diplomatic-navy">Hotel Safes</h3>
                <p className="text-sm text-diplomatic-gray mt-1">Hospitality security</p>
              </div>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assets/img/safes/w300ehk.png?ver=3.0"
                alt="Double Door Safe W300EHK"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-diplomatic-navy">Vault Doors</h3>
                <p className="text-sm text-diplomatic-gray mt-1">Strong room solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Type Solutions Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Solutions by Customer Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Banks & Financial Institutions</h3>
              <p className="text-sm text-diplomatic-gray mt-2">High-security vaults, time-delay safes, and deposit solutions</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaHeart className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">SACCOs & Cooperatives</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Affordable secure storage for savings and documents</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaTruck className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Government Institutions</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Compliance-grade security for archives and assets</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaSearch className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Businesses & Corporate</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Office security for equipment, documents, and valuables</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Homeowners & Individuals</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Home safes for documents, jewellery, and firearms</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaTruck className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Hotels & Hospitality</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Guest room safes and staff deposit solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diplomatic-navy mb-6">Why Choose Diplomatic Office Supplies?</h2>
              <ul className="space-y-4 text-diplomatic-gray">
                <li className="flex items-start">
                  <FaShieldAlt className="h-5 w-5 text-diplomatic-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Premium Quality</h4>
                    <p>ECB-S certified fire and burglary protection for maximum security</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaTruck className="h-5 w-5 text-diplomatic-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Professional Installation</h4>
                    <p>Expert delivery and installation across East Africa</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMapPin className="h-5 w-5 text-diplomatic-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Nationwide Coverage</h4>
                    <p>Serving Kenya, Uganda, Tanzania, and beyond</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaHeart className="h-5 w-5 text-diplomatic-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">3-Year Warranty</h4>
                    <p>Manufacturer's warranty against defects on all safes</p>
                  </div>
                </li>
              </ul>
              <Button asChild href="/request-a-quote" className="mt-6 py-3 px-6 text-lg font-medium">
                Get a Quote
              </Button>
            </div>
            <div className="space-y-4">
              <Image
                src="/assets/img/about/image1.png?ver=3.0"
                alt="Diplomatic Office Supplies team"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
              <Image
                src="/assets/img/about/image2.png?ver=3.0"
                alt="Diplomatic safe installation"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-diplometric-navy">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Trusted Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/img/diplomat-logo.png?ver=3.0"
                alt="Diplomat Safe logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <span className="text-white text-sm ml-2">Diplomat Safe</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                width={100}
                height={100}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-white text-sm ml-2">Approved Partner</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                width={100}
                height={100}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1l4 28a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2L23 3" />
              </svg>
              <span className="text-white text-sm ml-2">Premium Manufacturers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-10 w-10 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 3L9 5h6l-1 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2h6l1-2h-3l-2-6h-5l-2 6H4a2 2 0 0 1-2-2V5l1-2h3l2 6H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2l1 2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1z"/>
                  <path d="M9 3v2m0 4v2m0 4v2"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Delivery</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Secure transportation to your location</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-10 w-10 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2V7h2v5h4v5h2v-5h4v5h2v-5h4v5h2V7h2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2v-5H7zm7 10h2v5h2v-5h2v-5h2v5h2v-2h-2v5h2v-5h2v-2h-2v5h-2v-2h-2v5h-2V13z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Installation</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Professional installation by certified technicians</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-10 w-10 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2V7h2v5h4v5h2v-5h4v5h2v-5h4v5h2V7h2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2h2v-5H7zm7 10h2v5h2v-5h2v-5h2v5h2v-2h-2v5h2v-5h2v-2h-2v5h-2v-2h-2v5h-2V13z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Relocation</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Safe moving and repositioning services</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-10 w-10 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M2 3l4 28a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2L23 3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Lock Upgrades</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Electronic and mechanical lock replacement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-diplometric-charcoal/50 rounded-xl p-6">
              <p className="text-lg text-diplomatic-gray quotes">"Diplomatic Office Supplies delivered our bank vault on time and the installation was professional. Our clients feel safer already."</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-medium">Bank of Kenya</span>
                <span className="text-diplomatic-gray opacity-75">• Institutional Client</span>
              </div>
            </div>
            <div className="bg-diplometric-charcoal/50 rounded-xl p-6">
              <p className="text-lg text-diplomatic-gray quotes">"The team helped us choose the perfect safe for our SACCO. Excellent service and competitive pricing."</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-medium">Mombasa SACCO</span>
                <span className="text-diplomatic-gray opacity-75">• Financial Institution</span>
              </div>
            </div>
            <div className="bg-diplometric-charcoal/50 rounded-xl p-6">
              <p className="text-lg text-diplomatic-gray quotes">"Our home safe from Diplomatic has given us peace of mind. The digital lock is easy to use and very secure."</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-medium">John A.</span>
                <span className="text-diplomatic-gray opacity-75">• Homeowner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaFileInvoiceDollar className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Buying Guides</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Comprehensive guides to choosing the right safe</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaQuestionCircle className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">FAQs</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Frequently asked questions about safes and security</p>
            </div>
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="h-12 w-12 rounded-lg bg-diplomatic-gold/10 flex items-center justify-center mb-4">
                <FaBookOpen className="h-6 w-6 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safety Tips</h3>
              <p className="text-sm text-diplomatic-gray mt-2">Regular security tips and maintenance advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-diplomatic-navy to-diplomatic-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get a Quote Today</h2>
          <p className="text-diplomatic-gray mb-8 max-w-2xl mx-auto">
            Contact us for a customized quote on safes and security solutions for your institution or home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              href="/request-a-quote"
              variant="primary"
              className="py-3 px-8 text-lg font-medium"
            >
              Request a Quote
            </Button>
            <a
              href="https://wa.me/+254722762071?text=Hi,%20I%20need%20a%20quote%20for%20safes."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-lg font-medium bg-diplomatic-gold text-diplomatic-navy rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp Inquiry
            </a>
            <a
              href="tel:+254722762071"
              className="py-3 px-8 text-lg font-medium bg-diplomatic-gray text-white rounded-full hover:bg-diplomatic-navy transition-colors"
            >
              <FaPhone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 bg-diplometric-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Diplomatic Office Supplies Limited</h3>
              <p className="text-diplomatic-gray text-sm">
                Kenya's leading distributor of safes and security storage solutions. We partner with trusted manufacturers to provide premium security products to banks, SACCOs, government institutions, businesses, and homeowners across East Africa.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://wa.me/+254722762071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-diplometric-gold text-diplometric-navy rounded text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+254722762071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-diplometric-gray text-white rounded text-sm font-medium hover:bg-diplometric-navy transition-colors"
                >
                  Call
                </a>
                <a
                  href="mailto:info@diplomatic.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-diplometric-gray text-white rounded text-sm font-medium hover:bg-diplometric-navy transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-semibold text-white mb-4">Product Categories</h4>
              <ul className="space-y-2">
                <li><Link href="/safes/home-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Home Safes</Link></li>
                <li><Link href="/safes/office-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Office Safes</Link></li>
                <li><Link href="/safes/hotel-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Hotel Safes</Link></li>
                <li><Link href="/safes/gun-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Gun Safes</Link></li>
                <li><Link href="/safes/cash-deposit-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Cash Deposit Safes</Link></li>
                <li><Link href="/safes/data-safes" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Data / Media Safes</Link></li>
                <li><Link href="/safes/vault-doors" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Vault Doors / Strong Rooms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about-us" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">About Us</Link></li>
                <li><Link href="/certificates" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Certificates</Link></li>
                <li><Link href="/services" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">Services</Link></li>
                <li><Link href="/resources/faqs" className="text-diplomatic-gray hover:text-diplomatic-gold transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-diplomatic-gray text-sm">Maasai Mall, Ongata Rongai, Nairobi</li>
                <li className="text-diplomatic-gray text-sm">Monday - Friday: 8am - 5:30pm</li>
                <li className="text-diplomatic-gray text-sm">Saturday: 9am - 1pm</li>
                <li className="text-diplomatic-gray text-sm">Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-diplomatic-gray text-sm">2026 Diplomatic Office Supplies Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com/686964228153975"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diplomatic-gray hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/diplomat_safes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diplomatic-gray hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}