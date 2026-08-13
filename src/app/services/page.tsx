/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";
import { FaShieldAlt, FaTruck, FaHeart, FaClipboardList, FaTools } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin"] });

export default function ServicesPage() {
  useRouter();

  const services = [
    {
      id: "delivery",
      title: "Safe Delivery",
      icon: <FaTruck className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Secure transportation of safes to your location with GPS tracking and trained personnel. We handle all types of safes from compact home units to large vault doors.",
      features: [
        "GPS-tracked transportation",
        "Trained personnel for valuable assets",
        "All safe types handled",
        "Insurance coverage during transit",
      ],
      cta: "Learn More",
      href: "/services/safe-delivery",
    },
    {
      id: "installation",
      title: "Safe Installation",
      icon: <FaMagicWand className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Professional installation by certified technicians with experience across banking, institutional, and residential sectors. Ensuring optimal security and functionality.",
      features: [
        "Certified installation technicians",
        "Site survey and measurement",
        "Optimal placement and anchoring",
        "Lock testing and configuration",
      ],
      cta: "Learn More",
      href: "/services/safe-installation",
    },
    {
      id: "relocation",
      title: "Safe Relocation",
      icon: <FaTools className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Safe moving and repositioning services for businesses upgrading or changing premises. Minimal downtime and maximum security throughout the process.",
      features: [
        "Expert safe moving services",
        "Minimal downtime guarantee",
        "Security integrity maintained",
        "Re-installation and testing",
      ],
      cta: "Learn More",
      href: "/services/safe-relocation",
    },
    {
      id: "maintenance",
      title: "Maintenance & Repairs",
      icon: <FaHeart className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Regular maintenance and repair services to keep your safe functioning optimally. Includes lock servicing, hinge adjustment, and interior restoration.",
      features: [
        "3-year warranty service coverage",
        "Lock maintenance and upgrades",
        "Hinge and door alignment",
        "Interior restoration and cleaning",
      ],
      cta: "Learn More",
      href: "/services/safe-maintenance",
    },
    {
      id: "lock-upgrades",
      title: "Lock Upgrades",
      icon: <FaShieldAlt className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Electronic and mechanical lock replacement and upgrades. Enhance your existing safe's security with the latest digital lock technology.",
      features: [
        "Electronic to digital lock upgrades",
        "Combination change services",
        "Biometric lock installation",
        "Compatible with all safe brands",
      ],
      cta: "Learn More",
      href: "/services/lock-upgrades",
    },
    {
      id: "consultation",
      title: "Security Consultation",
      icon: <FaClipboardList className="h-6 w-6 text-diplomatic-gold" />,
      description:
        "Professional security assessment and consultation for homes, businesses, and institutions. Helping you identify vulnerabilities and select the right security solutions.",
      features: [
        "On-site security assessment",
        "Customized security recommendations",
        "Risk assessment and mitigation",
        "Budget-conscious solutions",
      ],
      cta: "Learn More",
      href: "/services/security-consultation",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">Our Services</h1>
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardHeader className="p-0">
                  <div className="p-4 border-b border-border/10">
                    {service.icon}
                    <h3 className="text-lg font-medium text-diplomatic-navy">{service.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-diplometric-gray mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-diplometric-gray">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FaChevronRight className="h-3 w-3 text-diplometric-gold flex-shrink-0 mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-3 border-t border-border/10">
                  <Button
                    asChild
                    href={service.href}
                    variant="outline"
                    size="sm"
                    className="w-full py-2 text-sm font-medium"
                  >
                    {service.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pages Section */}
      <section className="py-16 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-diplomatic-navy mb-8 text-center">Detailed Service Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Safe Delivery */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTruck className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Delivery</h3>
              <p className="text-diplometric-gray mb-4">
                We provide secure transportation of safes to your location across Kenya and East Africa. Our GPS-tracked vehicles and trained personnel ensure your valuable assets arrive safely and securely.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>GPS-tracked transportation</li>
                <li>Trained personnel for valuable assets</li>
                <li>All safe types handled</li>
                <li>Insurance coverage during transit</li>
                <li>Appointment scheduling available</li>
              </ul>
            </div>

            {/* Safe Installation */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaMagicWand className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Installation</h3>
              <p className="text-diplometric-gray mb-4">
                Our certified technicians provide professional installation services for all Diplomat safe models. We conduct site surveys, ensure optimal placement and anchoring, and test all locks and mechanisms upon completion.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Certified installation technicians</li>
                <li>Site survey and measurement</li>
                <li>Optimal placement and anchoring</li>
                <li>Lock testing and configuration</li>
                <li>Manufacturer warranty compliance</li>
              </ul>
            </div>

            {/* Safe Relocation */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaTools className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Relocation</h3>
              <p className="text-diplometric-gray mb-4">
                Our safe relocation service is designed for businesses upgrading or changing premises. We minimize downtime and ensure your safe's security integrity is maintained throughout the move and re-installation process.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Expert safe moving services</li>
                <li>Minimal downtime guarantee</li>
                <li>Security integrity maintained</li>
                <li>Re-installation and testing</li>
                <li>Insurance coverage available</li>
              </ul>
            </div>

            {/* Maintenance & Repairs */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaHeart className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Maintenance & Repairs</h3>
              <p className="text-diplometric-gray mb-4">
                Regular maintenance keeps your safe functioning optimally and extends its lifespan. Our service includes lock servicing, hinge adjustment, interior restoration, and warranty-covered repairs for all Diplomat safe models.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>3-year warranty service coverage</li>
                <li>Lock maintenance and upgrades</li>
                <li>Hinge and door alignment</li>
                <li>Interior restoration and cleaning</li>
                <li>Emergency repair services</li>
              </ul>
            </div>

            {/* Lock Upgrades */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Lock Upgrades</h3>
              <p className="text-diplometric-gray mb-4">
                Enhance your existing safe's security with our lock upgrade services. From electronic to digital lock conversions to biometric installations, we compatibility with all safe brands and models.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>Electronic to digital lock upgrades</li>
                <li>Combination change services</li>
                <li>Biometric lock installation</li>
                <li>Compatible with all safe brands</li>
                <li>Manufacturer-approved components</li>
              </ul>
            </div>

            {/* Security Consultation */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-border/10">
              <div className="h-12 w-12 rounded-lg bg-diplometric-gold/10 flex items-center justify-center mb-4">
                <FaClipboardList className="h-5 w-5 text-diplomatic-gold" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Security Consultation</h3>
              <p className="text-diplometric-gray mb-4">
                Our security consultation service provides professional assessment and recommendations for homes, businesses, and institutions. We identify vulnerabilities, assess risks, and recommend customized security solutions within your budget.
              </p>
              <ul className="text-sm text-diplometric-gray space-y-1">
                <li>On-site security assessment</li>
                <li>Customized security recommendations</li>
                <li>Risk assessment and mitigation</li>
                <li>Budget-conscious solutions</li>
                <li>Compliance with insurance requirements</li>
              </ul>
            </div>

            {/* Safe Opening */}
            <div className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 bg-diplometric-red/50 border border-diplometric-red/50">
              <div className="h-12 w-12 rounded-lg bg-diplometric-red/10 flex items-center justify-center mb-4">
                <FaLock className="h-5 w-5 text-diplometric-red" />
              </div>
              <h3 className="text-lg font-medium text-diplomatic-navy">Safe Opening Services</h3>
              <p className="text-diplometric-gray mb-4">
                Professional safe opening services where lawful and properly verified. We adhere to strict ethical standards and legal requirements. Safe opening is only performed with proper ownership verification and for authorized purposes.
              </p>
              <ul className="text-sm text-diplometric-gray/60 space-y-1">
                <li>Lawful safe opening only</li>
                <li>Ownership verification required</li>
                <li>Authorized purposes only</li>
                <li>Non-destructive entry when possible</li>
                <li>Full documentation and reporting</li>
              </ul>
              <p className="text-diplometric-red text-sm mt-3">
                <strong>Important:</strong> Safe opening services are only performed with valid ownership documentation and for authorized purposes. We do not facilitate unauthorized access.
              </p>
              <Button
                asChild
                href="/contact-us"
                variant="outline"
                size="sm"
                className="mt-4 w-full py-2 text-sm font-medium"
              >
                Verify Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}