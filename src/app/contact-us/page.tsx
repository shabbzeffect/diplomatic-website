/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectSeparator, Option } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    location: "",
    customerType: "",
    productInterest: "",
    quantity: 1,
    intendedUse: "",
    budgetRange: "",
    preferredContactMethod: "Phone",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // In production, this would send to an API endpoint
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setShowSuccess(false);
      router.push("/");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">Contact Us</h1>
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

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-diplomatic-navy mb-6">Contact Details</h2>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-diplometric-gray">
                    <li className="flex items-start">
                      <FaPhone className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                      <span>
                        <strong>Phone:</strong> +254-722-762-071 / +254-724-252-971
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaEnvelope className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                      <span>
                        <strong>Email:</strong> info@diplomatic.co.ke
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaMapPin className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                      <span>
                        <strong>Address:</strong> Maasai Mall, Ongata Rongai, Nairobi, Kenya
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaCalendar className="h-4 w-4 text-diplometric-gold flex-shrink-0 mt-1" />
                      <span>
                        <strong>Business Hours:</strong> Monday - Friday 8am to 5:30pm, Saturday 9am to 1pm, Sunday Closed
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-semibold text-diplometric-navy mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/686964228153975"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-diplometric-gray text-white rounded text-sm font-medium hover:bg-diplometric-navy transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/diplomat_safes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-diplometric-gray text-white rounded text-sm font-medium hover:bg-diplometric-navy transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div>
              <h2 className="text-2xl font-bold text-diplomatic-navy mb-6">Request a Quote</h2>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Quote Request Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form onSubmit={handleSubmit}>
                    <FormField>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter your full name"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Company Name</FormLabel>
                      <Input
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="Your company (optional)"
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        placeholder="+2547xxxxxxxx"
                        required
                        pattern="^\\+?254\d{9,10}$"
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Location / County</FormLabel>
                      <Input
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="Nairobi, Kenya"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Customer Type</FormLabel>
                      <Select
                        value={formData.customerType}
                        onChange={(e) =>
                          setFormData({ ...formData, customerType: e.target.value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select customer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <Option value="Home">Homeowner</Option>
                          <Option value="Business">Business</Option>
                          <Option value="Bank">Bank</Option>
                          <Option value="SACCO">SACCO</Option>
                          <Option value="Government">Government</Option>
                          <Option value="Hotel">Hotel</Option>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Product of Interest</FormLabel>
                      <Input
                        value={formData.productInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, productInterest: e.target.value })
                        }
                        placeholdere.g., Home safe, Office safe, Vault door"
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Quantity Required</FormLabel>
                      <Input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })
                        }
                        min={1}
                        placeholder="1"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Intended Use</FormLabel>
                      <Input
                        value={formData.intendedUse}
                        onChange={(e) =>
                          setFormData({ ...formData, intendedUse: e.target.value })
                        }
                        placeholder="e.g., Home office, document storage, bank vault"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Budget Range (Optional)</FormLabel>
                      <Input
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        placeholder="e.g., KES 50,000 - 100,000"
                      />
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Preferred Contact Method</FormLabel>
                      <Select
                        value={formData.preferredContactMethod}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredContactMethod: e.target.value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <Option value="Phone">Phone call</Option>
                          <Option value="Email">Email</Option>
                          <Option value="WhatsApp">WhatsApp</Option>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormField>

                    <FormField>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Additional details or special requirements"
                        rows={4}
                        className="resize-none"
                        required
                      />
                      <FormMessage />
                    </FormField>

                    <FormField className="mt-4">
                      <FormLabel>
                        I consent to Diplomatic Office Supplies contacting me regarding this enquiry
                      </FormLabel>
                      <Select
                        value={formData.consent ? "yes" : "no"}
                        onChange={(e) =>
                          setFormData({ ...formData, consent: e.target.value === "yes" })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue className="flex items-center justify-between">
                            <span>No</span>
                            <svg
                              width={19}
                              height={19"
                              viewBox="0 0 19 19"
                              fill="none"
                              stroke="currentColor"
                              className="h-5 w-5 stroke-current"
                            >
                              <rect x="1" y="1" width="17" height="17" rx="2" ry="2" />
                              <path d="M7 10l5 5L19 2" />
                            </svg>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <Option value="no">No</Option>
                          <Option value="yes">Yes</Option>
                        </SelectContent>
                      </Select>
                    </FormField>

                    <Button type="submit" className="w-full py-3 px-6 mt-4 text-lg font-medium bg-diplometric-gold text-diplometric-navy rounded font-medium hover:bg-opacity-90 transition-colors">
                      Submit Quote Request
                    </Button>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Confirmation */}
      {showSuccess && (
        <section className="py-16 bg-diplometric-navy">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted Successfully</h2>
            <p className="text-diplometric-gray mb-6">
              Your quote request has been submitted. Our sales team will contact you shortly at the phone number or email provided.
            </p>
            <p className="text-diplometric-gray text-sm">
              Reference your enquiry details and expect contact within 24 hours.
            </p>
            <Button
              asChild
              href="/"
              className="py-3 px-6 text-lg font-medium"
            >
              Return to Homepage
            </Button>
          </div>
        </section>
      )}

      {/* Enquiry Error */}
      {showError && (
        <section className="py-16 bg-diplometric-red/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-diplometric-red mb-4">Error</h2>
            <p className="text-diplometric-red/80 mb-6">
              Please confirm you have checked the consent box before submitting.
            </p>
            <Button
              asChild
              href="/contact-us"
              className="py-3 px-6 text-lg font-medium bg-diplometric-red text-white rounded hover:bg-diplometric-red/80 transition-colors"
            >
              Try Again
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}