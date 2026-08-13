/** @type {import('next').MetaData} */
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectSeparator, Option } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

type Product = {
  id: string;
  name: string;
  model: string;
  image: string;
  external_dims: string;
  internal_dims: string;
  weight: string;
  capacity: string;
  fire_rating: string;
  lock_type: string;
  shelves: string;
};

const products: Product[] = [
  {
    id: "119ek",
    name: "119EK Safe",
    model: "119EK",
    image: "/assets/img/safes/119ek.png?ver=3.0",
    external_dims: "H360 × W412 × D363mm",
    internal_dims: "H260 × W320 × D234mm",
    weight: "31kg",
    capacity: "19 Litres",
    fire_rating: "Fire Class 60 Paper",
    lock_type: "Electronic Digital Lock + Key Lock",
    shelves: "1 Tray",
  },
  {
    id: "530ek",
    name: "530EK Safe",
    model: "530EK",
    image: "/assets/img/safes/530ek.png?ver=3.0",
    external_dims: "H522 × W404 × D440mm",
    internal_dims: "H410 × W300 × D300mm",
    weight: "53kg",
    capacity: "36 Litres",
    fire_rating: "Fire Class 60 Paper",
    lock_type: "Electronic Digital Lock + Key Lock",
    shelves: "1 Tray + 1 Shelf",
  },
  {
    id: "060ehk",
    name: "060EHK Safe",
    model: "060EHK",
    image: "/assets/img/safes/060ehk.png?ver=3.0",
    external_dims: "H660 × W470 × D470mm",
    internal_dims: "H480 × W350 × D300mm",
    weight: "80kg",
    capacity: "50 Litres",
    fire_rating: "Fire Class 90 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 1 Shelf",
  },
  {
    id: "070ehk",
    name: "070EHK Safe",
    model: "070EHK",
    image: "/assets/img/safes/070ehk.png?ver=3.0",
    external_dims: "H695 × W500 × D500mm",
    internal_dims: "H515 × W380 × D330mm",
    weight: "90kg",
    capacity: "64 Litres",
    fire_rating: "Fire Class 90 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 1 Shelf",
  },
  {
    id: "080ehk",
    name: "080EHK Safe",
    model: "080EHK",
    image: "/assets/img/safes/080ehk.png?ver=3.0",
    external_dims: "H876 × W520 × D520mm",
    internal_dims: "H676 × W380 × D330mm",
    weight: "122kg",
    capacity: "84 Litres",
    fire_rating: "Fire Class 90 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 1 Shelf",
  },
  {
    id: "100ehk",
    name: "100EHK Safe",
    model: "100EHK",
    image: "/assets/img/safes/100ehk.png?ver=3.0",
    external_dims: "H1020 × W655 × D560mm",
    internal_dims: "H780 × W475 × D350mm",
    weight: "201kg",
    capacity: "129 Litres",
    fire_rating: "Fire Class 120 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 2 Shelves",
  },
  {
    id: "120ehk",
    name: "120EHK Safe",
    model: "120EHK",
    image: "/assets/img/safes/120ehk.png?ver=3.0",
    external_dims: "H1220 × W655 × D560mm",
    internal_dims: "H980 × W475 × D350mm",
    weight: "228kg",
    capacity: "162 Litres",
    fire_rating: "Fire Class 120 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 2 Shelves",
  },
  {
    id: "130ehk",
    name: "130EHK Safe",
    model: "130EHK",
    image: "/assets/img/safes/130ehk.png?ver=3.0",
    external_dims: "H1445 × W775 × D650mm",
    internal_dims: "H1205 × W595 × D440mm",
    weight: "348kg",
    capacity: "315 Litres",
    fire_rating: "Fire Class 120 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 3 Shelves",
  },
  {
    id: "200ehk",
    name: "200EHK Safe",
    model: "200EHK",
    image: "/assets/img/safes/200ehk.png?ver=3.0",
    external_dims: "H1690 × W775 × D650mm",
    internal_dims: "H714 × W595 × D440mm",
    weight: "388kg",
    capacity: "379 Litres",
    fire_rating: "Fire Class 120 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "1 Tray + 3 Shelves",
  },
  {
    id: "w300ehk",
    name: "W300EHK Double Door",
    model: "W300EHK",
    image: "/assets/img/safes/w300ehk.png?ver=3.0",
    external_dims: "H1745 × W1200 × D720mm",
    internal_dims: "H1505 × W1020 × D510mm",
    weight: "560kg",
    capacity: "783 Litres",
    fire_rating: "Fire Class 120 Paper",
    lock_type: "Electronic Digital Lock + Handle + Key Lock",
    shelves: "2 Trays + 3 Shelves",
  },
];

type FilterOption = {
  value: string;
  label: string;
  icon?: ReactNode;
};

const filterOptions = {
  fireRating: [
    { value: "all", label: "All Fire Ratings" },
    { value: "60", label: "60 min Paper" },
    { value: "90", label: "90 min Paper" },
    { value: "120", label: "120 min Paper" },
  ],
  lockType: [
    { value: "all", label: "All Lock Types" },
    { value: "digital", label: "Electronic Digital" },
    { value: "handle", label: "Handle + Key" },
  ],
  brand: [
    { value: "all", label: "All Brands" },
    { value: "diplomat", label: "Diplomat Safe" },
  ],
  size: [
    { value: "all", label: "All Sizes" },
    { value: "compact", label: "Compact (up to 50L)" },
    { value: "medium", label: "Medium (50-150L)" },
    { value: "large", label: "Large (150L+)" },
  ],
};

export default function SafesCategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const [selectedFilters, setSelectedFilters] = useState({
    fireRating: "all",
    lockType: "all",
    brand: "all",
    size: "all",
  });

  const filteredProducts = products.filter((product) => {
    if (selectedFilters.fireRating !== "all" && product.fire_rating !== selectedFilters.fireRating) return false;
    if (selectedFilters.lockType !== "all" && product.lock_type !== selectedFilters.lockType) return false;
    if (selectedFilters.brand !== "all" && product.name.toLowerCase().indexOf(selectedFilters.brand) === -1) return false;
    if (selectedFilters.size === "compact" && parseInt(product.capacity) > 50) return false;
    if (selectedFilters.size === "medium" && (parseInt(product.capacity) < 50 || parseInt(product.capacity) > 150)) return false;
    if (selectedFilters.size === "large" && parseInt(product.capacity) < 150) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-diplomatic-navy">
            {category === "home-safes" ? "Home Safes" : category === "office-safes" ? "Office Safes" : category === "hotel-safes" ? "Hotel Safes" : "Safes"}
          </h1>
          <Button
            asChild
            variant="outline"
            className="py-2 px-4 text-sm"
            href="/safes"
          >
            Back to All Safes
          </Button>
        </div>
      </header>

      {/* Filters Section */}
      <section className="py-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-diplomatic-gray mb-2">Fire Rating</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select fire rating" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.fireRating.map((option) => (
                    <SelectSeparator key={option.value} />
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-diplomatic-gray mb-2">Lock Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select lock type" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.lockType.map((option) => (
                    <SelectSeparator key={option.value} />
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-diplomatic-gray mb-2">Brand</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.brand.map((option) => (
                    <SelectSeparator key={option.value} />
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-diplomatic-gray mb-2">Size</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.size.map((option) => (
                    <SelectSeparator key={option.value} />
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-diplometric-gray">
              <p>No products match your selected filters. Please adjust your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border/10"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-diplomatic-navy line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-diplometric-gray mt-2">{product.model}</p>
                    <p className="text-xs text-diplometric-gray/60 mt-1">{product.fire_rating}</p>
                  </div>
                  <div className="p-4 border-t border-border/10">
                    <Button
                      asChild
                      href={`/safes/${category}/${product.model.toLowerCase()}`}
                      variant="outline"
                      size="sm"
                      className="w-full py-2 text-sm font-medium"
                    >
                      View Details
                    </Button>
                    <Button
                      asChild
                      href="/request-a-quote"
                      variant="default"
                      size="sm"
                      className="w-full py-2 mt-2 text-sm font-medium"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Pagination */}
          {filteredProducts.length > 12 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="sm">
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-diplomatic-navy mb-6 text-center">Frequently Asked Questions</h2>
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
      </section>
    </div>
  );
}