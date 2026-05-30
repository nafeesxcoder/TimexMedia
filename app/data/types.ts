// app/data/types.ts

export interface Package {
  name: string;
  price: number;
  includes: string[];
  bestFor?: string;
  restrictions?: string;
  deliveryTime?: string;
  setupTime?: string;
}

export interface AddOn {
  name: string;
  price: number;
  description: string;
}

export interface PricingData {
  services: {
    photography: {
      basic: Package;
      standard: Package;
      premium: Package;
    };
    videography: {
      basic: Package;
      premium: Package;
    };
    drone: {
      basic: Package;
      full: Package;
    };
    threeD_tours: {
      standard: Package;
      premium: Package;
    };
  };
  addOns: AddOn[];
}

export interface BusinessData {
  company: {
    name: string;
    tagline: string;
    founded?: number;
    description?: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneFormatted?: string;
    whatsapp?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    social?: {
      instagram: string;
      facebook: string;
      linkedin: string;
      youtube: string;
    };
  };
  hours: {
    monday_friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday?: { closed: boolean };
  };
  serviceArea: {
    primary: string[];
    secondary?: string[];
  };
  paymentMethods?: string[];
  booking?: {
    depositPercentage?: number;
    minLeadTime?: string;
  };
}

export interface FAQData {
  faqs: Array<{
    id: number;
    question: string;
    answer: string;
    category: string;
    keywords?: string[];
  }>;
}

export interface ResponsesData {
  greetings: string[];
  farewells: string[];
  fallback: string;
  leadCapture: string;
  booking: string;
  priceNotFound?: string;
}