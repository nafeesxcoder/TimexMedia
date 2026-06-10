import { NextRequest, NextResponse } from "next/server";
import pricingData from "@/app/data/pricing.json";
import businessData from "@/app/data/business.json";
import faqData from "@/app/data/faq.json";
import responsesData from "@/app/data/responses.json";
import type { PricingData, BusinessData, FAQData, ResponsesData } from "@/app/data/types";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const pricing = pricingData as unknown as PricingData;
const business = businessData as unknown as BusinessData;
const faq = faqData as unknown as FAQData;
const responses = responsesData as unknown as ResponsesData;

// Helper function to safely get pricing text
function getPricingText() {
  try {
    const photography = pricing.services?.photography;
    const videography = pricing.services?.videography;
    const drone = pricing.services?.drone;
    const threeD = pricing.services?.threeD_tours;
    const addOns = pricing.addOns;
    
    let photographyText = "";
    if (photography) {
      photographyText = `- Basic: $${photography.basic?.price || 199} (${photography.basic?.includes?.join(", ") || "20 photos"})
- Standard: $${photography.standard?.price || 299} (${photography.standard?.includes?.join(", ") || "35 photos + floor plan"})
- Premium: $${photography.premium?.price || 449} (${photography.premium?.includes?.join(", ") || "50+ photos + virtual staging"})`;
    }
    
    let videoText = "";
    if (videography) {
      videoText = `- Basic: $${videography.basic?.price || 399} (${videography.basic?.includes?.join(", ") || "60-sec walkthrough"})
- Premium: $${videography.premium?.price || 699} (${videography.premium?.includes?.join(", ") || "2-3 min + drone"})`;
    }
    
    let droneText = "";
    if (drone) {
      droneText = `- Basic Aerial: $${drone.basic?.price || 249} (${drone.basic?.includes?.join(", ") || "10 aerial photos"})
- Full Property: $${drone.full?.price || 449} (${drone.full?.includes?.join(", ") || "25+ photos + video"})`;
    }
    
    let threeDText = "";
    if (threeD) {
      threeDText = `- Standard: $${threeD.standard?.price || 349} (${threeD.standard?.includes?.join(", ") || "3D tour, 6 months hosting"})
- Premium: $${threeD.premium?.price || 549} (${threeD.premium?.includes?.join(", ") || "4K, 12 months hosting"})`;
    }
    
    let addonsText = "";
    if (addOns && addOns.length > 0) {
      addonsText = addOns.map((addon) => `- ${addon.name}: $${addon.price}`).join("\n");
    }
    
    return { photographyText, videoText, droneText, threeDText, addonsText };
  } catch (error) {
    console.error("Error reading pricing:", error);
    return {
      photographyText: "- Basic: $199, Standard: $299, Premium: $449",
      videoText: "- Basic: $399, Premium: $699",
      droneText: "- Basic Aerial: $249, Full Property: $449",
      threeDText: "- Standard: $349, Premium: $549",
      addonsText: "- Twilight Photos: $99, Rush Delivery: $75, Virtual Staging: $49"
    };
  }
}

// Helper function to safely get business text
function getBusinessText() {
  try {
    const company = business.company;
    const contact = business.contact;
    const hours = business.hours;
    const serviceArea = business.serviceArea;
    
    return {
      name: company?.name || "Timex Media",
      email: contact?.email || "info@timexmedia.com",
      phone: contact?.phone || "+1 (512) 555-0123",
      hours: `${hours?.monday_friday?.open || "9:00"}-${hours?.monday_friday?.close || "18:00"} Mon-Fri, ${hours?.saturday?.open || "10:00"}-${hours?.saturday?.close || "16:00"} Sat`,
      serviceArea: serviceArea?.primary?.join(", ") || "Austin, Round Rock, Cedar Park"
    };
  } catch (error) {
    return {
      name: "Timex Media",
      email: "info@timexmedia.com",
      phone: "+1 (512) 555-0123",
      hours: "Mon-Fri 9am-6pm, Sat 10am-4pm",
      serviceArea: "Austin, Round Rock, Cedar Park"
    };
  }
}

// Helper function to safely get FAQ text
function getFAQText() {
  try {
    const faqs = faq.faqs;
    if (!faqs || faqs.length === 0) return "";
    return faqs.slice(0, 5).map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");
  } catch (error) {
    return "";
  }
}

// Build system prompt dynamically
function buildSystemPrompt() {
  const pricingData = getPricingText();
  const businessData = getBusinessText();
  const faqText = getFAQText();
  
  return `You are "TimeX", an AI customer support assistant for ${businessData.name}.

ABOUT:
- Real estate photography, videography, drone services, and 3D virtual tours
- Contact: ${businessData.email} | ${businessData.phone}
- Hours: ${businessData.hours}
- Service Area: ${businessData.serviceArea}

📸 PHOTOGRAPHY PRICES (USE ONLY THESE):
${pricingData.photographyText}

🎥 VIDEO PRICES:
${pricingData.videoText}

🚁 DRONE PRICES:
${pricingData.droneText}

🏠 3D TOUR PRICES:
${pricingData.threeDText}

➕ ADD-ONS:
${pricingData.addonsText}

${faqText ? `FAQs:\n${faqText}` : ""}

RULES:
- NEVER invent prices. Use ONLY exact prices from above
- Keep responses short (2-3 sentences)
- Be friendly, professional, and helpful
- If user asks for custom quote, ask for name and email first
- If user wants to book, ask for name, email, address, and preferred date`;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const fullMessages = [
      { role: "system", content: buildSystemPrompt() },
      ...messages,
    ];

    let reply = "";

    // Try Groq first
    if (GROQ_API_KEY && GROQ_API_KEY !== "") {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: fullMessages,
            temperature: 0.3,
            max_tokens: 350,
          }),
        });

        const data = await response.json();
        reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return NextResponse.json({ reply, success: true });
        }
      } catch (error) {
        console.error("Groq API error:", error);
      }
    }
    
    // Fallback to OpenAI
    if (OPENAI_API_KEY && OPENAI_API_KEY !== "") {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: fullMessages,
            temperature: 0.3,
            max_tokens: 350,
          }),
        });

        const data = await response.json();
        reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return NextResponse.json({ reply, success: true });
        }
      } catch (error) {
        console.error("OpenAI API error:", error);
      }
    }
    
    // No API key - use fallback
    const lastMessage = messages[messages.length - 1]?.content || "";
    reply = getFallbackResponse(lastMessage);
    
    return NextResponse.json({ reply, success: true });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: responses.fallback || "I'm temporarily unavailable. Please email info@timexmedia.com", success: false },
      { status: 500 }
    );
  }
}

function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();
  
  if (msg.includes("photo") || msg.includes("photography")) {
    return "📸 **Photography Packages:**\n• Basic: $199 (20 photos, 2 bedrooms)\n• Standard: $299 (35 photos + floor plan)\n• Premium: $449 (50+ photos + virtual staging)\n\nWhich one interests you?";
  }
  if (msg.includes("drone") || msg.includes("aerial")) {
    return "🚁 **Drone Services:**\n• Basic Aerial: $249 (10 photos)\n• Full Property: $449 (25+ photos + video clips)\n\nBoth include FAA licensed pilots!";
  }
  if (msg.includes("video") || msg.includes("videography")) {
    return "🎥 **Video Packages:**\n• Basic: $399 (60-sec walkthrough)\n• Premium: $699 (2-3 min + drone + cinematic)\n\nWant to see samples?";
  }
  if (msg.includes("3d") || msg.includes("virtual") || msg.includes("matterport")) {
    return "🏠 **3D Virtual Tours:**\n• Standard: $349 (6 months hosting)\n• Premium: $549 (4K + 12 months hosting + tags)\n\nPerfect for luxury listings!";
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("kitne")) {
    return "💰 **Our Pricing:**\n• Photography: $199+\n• Video: $399+\n• Drone: $249+\n• 3D Tours: $349+\n\nWhich service are you looking for?";
  }
  if (msg.includes("book") || msg.includes("schedule")) {
    return "📅 **Book a Shoot:**\nPlease share:\n1. Your name\n2. Email address\n3. Property address\n4. Preferred date\n\nI'll get you confirmed!";
  }
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    return "👋 Hello! Welcome to Timex Media. I'm TimeX, your AI assistant. How can I help you today?";
  }
  
  return responsesData.fallback || "✨ Thanks for reaching out! We offer photography ($199+), video ($399+), drone ($249+), and 3D tours ($349+). What would you like to know?";
}