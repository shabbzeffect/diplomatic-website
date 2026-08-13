/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";
import { FaShieldAlt, FaTruck, FaHeart, FaClipboardList } from "react-icons/fa";
import { Loader1, Loader2 } from "react-icons/loader";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectSeparator, Option } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

type ProductSpec = {
  key: string;
  value: string;
};

type Product = {
  id: string;
  name: string;
  model: string;
  category: string;
  image: string;
  external_dims: string;
  internal_dims: string;
  weight: string;
  capacity: string;
  fire_rating: string;
  cash_rating?: string;
  lock_type: string;
  shelves: string;
  warranty: string;
  description: string;
  use_cases: string[];
  delivery_info: string;
};

const productData: Product = {
  id: "119ek",
  name: "119EK Safe",
  model: "119EK",
  category: "home-safes",
  image: "/assets/img/safes/119ek.png?ver=3.0",
  external_dims: "H360 × W412 × D363mm",
  internal_dims: "H260 × W320 × D234mm",
  weight: "31kg",
  capacity: "19 Litres",
  fire_rating: "Fire Class 60 Paper",
  cash_rating: "N/A",
  lock_type: "Electronic Digital Lock + Key Lock",
  shelves: "1 Tray",
  warranty: "3 years against manufacturer's defects",
  description: "Compact home safe for documents, jewellery, and small valuables. Features electronic digital lock and key lock for dual security. Ideal for home offices and bedrooms.",
  use_cases: [
    "Home office document storage",
    "Jewellery and small valuables protection",
    "Bedroom personal safety",
    "Small business record keeping",
  ],
  delivery_info: "Free delivery within Nairobi. Installation services available upon request.",
};

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What fire rating does the 119EK safe have?",
    answer: "The 119EK safe has a Fire Class 60 Paper rating, protecting contents for 60 minutes at 800-1000°C.",
  },
  {
    question: "Does the 119EK safe come with a warranty?",
    answer: "Yes, all Diplomat safes come with a 3-year warranty against manufacturer's defects.",
  },
  {
    question: "What lock type does the 119EK use?",
    answer: "The 119EK uses an Electronic Digital Lock + Key Lock dual security system.",
  },
  {
    question: "Is the 119EK safe waterproof?",
    answer: "Diplomat safes undergo waterproof testing with sprinkler simulation, but are not designed for flood conditions.",
  },
  {
    question: "What is the capacity of the 119EK safe?",
    answer: "The 119EK safe has a capacity of 19 Litres, suitable for documents and small valuables.",
  },
];

export default function ProductDetailPage({
  params: { model },
}: {
  params: { model: string };
}) {
  const router = useRouter();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ enquiryData, setEnquiryData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    location: "",
    customerType: "",
    productInterest: productData.name,
    quantity: 1,
    intendedUse: "",
    budgetRange: "",
    preferredContactMethod: "Phone",
    message: "",
  });

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    setShowConfirmation(true);
    // Reset form after a delay
    setTimeout(() => {
      setShowConfirmation(false);
      setShowQuoteForm(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">
            {productData.name} - {productData.model}
          </h1>
          <Button
            asChild
            variant="outline"
            size="sm"
            onClick={() => router.back()}
          >
            ← Back to Safes
          </Button>
        </div>
      </header>

      {/* Product Gallery */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <div>
              <Image
                src={productData.image}
                alt={productData.name}
                width={800}
                height={600}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 py-1.5 text-sm"
                >
                  Zoom
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 py-1.5 text-sm"
                >
                  Fullscreen
                </Button>
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="text-xl font-bold text-diplomatic-navy mb-6">Key Specifications</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>External Dimensions</TableCell>
                    <TableCell>{productData.external_dims}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Internal Dimensions</TableCell>
                    <TableCell>{productData.internal_dims}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell>{productData.weight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capacity</TableCell>
                    <TableCell>{productData.capacity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fire Rating</TableCell>
                    <TableCell>{productData.fire_rating}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cash Rating</TableCell>
                    <TableCell>{productData.cash_rating !== "N/A" ? productData.cash_rating : "Not specified - request quote"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lock Type</TableCell>
                    <TableCell>{productData.lock_type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shelves</TableCell>
                    <TableCell>{productData.shelves}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Warranty</TableCell>
                    <TableCell>{productData.warranty}</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Action Buttons */}
              <div className="mt-6">
                <Button
                  asChild
                  href="https://wa.me/+254722762071?text=Hi,%20I'm%20interested%20in%20the%20%s20safe.%20Please%20send%20me%20details%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 text-lg font-medium bg-diplomatic-gold text-diplomatic-navy rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp Enquiry
                </Button>
                <Button
                  asChild
                  href="tel:+254722762071"
                  className="w-full py-3 px-6 mt-4 text-lg font-medium bg-diplometric-gray text-white rounded-full hover:bg-diplometric-navy transition-colors"
                >
                  <FaPhone className="mr-2 h-4 w-4" /> Call Now
                </Button>
                <Button
                  variant="primary"
                  onClick(() => setShowQuoteForm(true))
                  className="w-full py-3 px-6 mt-4 text-lg font-medium"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="py-8 bg-diplometric-charcoal/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-diplomatic-navy mb-4">Product Summary</h2>
              <p className="text-diplometric-gray">{productData.description}</p>
              <p className="text-diplometric-gray/60 text-sm mt-4">{productData.delivery_info}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-diplomatic-navy mb-4">Recommended Use Cases</h2>
              <ul className="space-y-3 text-diplometric-gray">
                {productData.use_cases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <FaHeart className="h-4 w-4 text-diplomatic-gold flex-shrink-0 mt-1" />
                    <span className="ml-3 text-sm">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-diplomatic-navy mb-6 text-center">Product FAQs</h2>
          <Accordion type="single">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quote Request Form */}
      {showQuoteForm && (
        <section className="py-8 bg-diplometric-navy">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Request a Quote - {productData.name}</h2>
            <AlertDialog open={true} onOpenChange={() => setShowQuoteForm(false)}>
              <AlertDialogHeader>
                <AlertDialogTitle>Request Quote for {productData.name}</AlertDialogTitle>
                <AlertDialogDescription>
                  Fill in the form below to request a customized quote for the {productData.name}.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <form onSubmit={handleEnquirySubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Full Name
                    </label>
                    <Input
                      value={enquiryData.fullName}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, fullName: e.target.value })
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={enquiryData.email}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={enquiryData.phoneNumber}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, phoneNumber: e.target.value })
                      }
                      placeholder="+2547xxxxxxxx"
                      required
                      pattern="^\\+?254\d{9,10}$"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Company Name
                    </label>
                    <Input
                      value={enquiryData.companyName}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, companyName: e.target.value })
                      }
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                    Location / County
                  </label>
                  <Input
                    value={enquiryData.location}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, location: e.target.value })
                    }
                    placeholder="Nairobi, Kenya"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Customer Type
                    </label>
                    <Select>
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                      Intended Use
                    </label>
                    <Input
                      value={enquiryData.intendedUse}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, intendedUse: e.target.value })
                      }
                      placeholder="e.g., Home office, document storage"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                    Quantity Required
                  </label>
                  <Input
                    type="number"
                    value={enquiryData.quantity}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, quantity: parseInt(e.target.value) || 1 })
                    }
                    min={1}
                    placeholder="1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                    Budget Range (Optional)
                  </label>
                  <Input
                    value={enquiryData.budgetRange}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, budgetRange: e.target.value })
                    }
                    placeholder="e.g., KES 50,000 - 100,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                    Preferred Contact Method
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <Option value="Phone">Phone call</Option>
                      <Option value="Email">Email</Option>
                      <Option value="WhatsApp">WhatsApp</Option>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-diplomatic-gray mb-2">
                    Message
                  </label>
                  <Input
                    placeholder="Additional details or special requirements"
                    value={enquiryData.message}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, message: e.target.value })
                    }
                    rows={3}
                    className="resize-none"
                  />
                </div>
                <AlertDialogFooter className="justify-end pt-4">
                  <AlertDialogCancel className="px-4 py-2 text-diplometric-gray hover:text-diplomatic-navy transition-colors">
                    Cancel
                  </AlertDialogCancel>
                  <Button
                    type="submit"
                    className="px-6 py-2 bg-diplometric-gold text-diplomatic-navy rounded font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Submit Quote Request
                  </Button>
                </AlertDialogFooter>
              </form>
            </AlertDialog>
          </div>
        </section>
      )}

      {/* Related Products */}
      {showConfirmation && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-diplomatic-navy mb-4">Quote Submitted Successfully</h2>
            <p className="text-diplometric-gray mb-6">
              Your quote request for the {productData.name} has been submitted. Our sales team will contact you shortly at {{enquiryData.phoneNumber}}.
            </p>
            <Button
              asChild
              href="/"
              className="py-3 px-6 text-lg font-medium"
            >
              Continue Shopping
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}