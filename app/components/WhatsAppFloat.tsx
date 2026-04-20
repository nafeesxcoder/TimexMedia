"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

type Position = "bottom-right" | "bottom-left";

type WhatsAppFloatProps = {
  phoneNumber?: string;
  message?: string;
  position?: Position;
  pulseAnimation?: boolean;
};

const positionClasses: Record<Position, string> = {
  "bottom-right":
    "right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6 md:right-8 md:bottom-8",
  "bottom-left":
    "left-[max(1rem,env(safe-area-inset-left))] bottom-[max(1rem,env(safe-area-inset-bottom))] sm:left-6 sm:bottom-6 md:left-8 md:bottom-8",
};

const panelAlignClasses: Record<Position, string> = {
  "bottom-right": "right-0",
  "bottom-left": "left-0",
};

export function WhatsAppFloat({
  phoneNumber = "+15595053443",
  message = "Hello! I'm interested in Timex Media services. Can you help me?",
  position = "bottom-right",
  pulseAnimation = true,
}: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Clean phone number: remove any non-digit characters
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`fixed z-[100] ${positionClasses[position]}`}>
      <div className="relative h-14 w-14 shrink-0">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="wa-panel"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`absolute bottom-full mb-3 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-green-500/25 bg-white shadow-xl ${panelAlignClasses[position]}`}
            >
              <div className="flex items-center justify-between bg-green-600 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                    <IoChatbubbleEllipsesOutline
                      className="h-5 w-5"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    WhatsApp
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-white transition-colors hover:bg-white/10"
                  aria-label="Close"
                >
                  <IoClose className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="bg-gray-50 p-4">
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Hi there! Chat with us on WhatsApp for quick assistance with
                  real estate photography and marketing.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden />
                  Start chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg ring-2 ring-white/30 transition-shadow hover:bg-green-700 hover:ring-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp menu" : "Open WhatsApp chat"}
        >
          {pulseAnimation && !isOpen && (
            <span
              className="absolute inset-0 rounded-full bg-green-600 opacity-60 motion-safe:animate-ping"
              aria-hidden
            />
          )}
          <FaWhatsapp className="relative z-[1] h-7 w-7" aria-hidden />
        </motion.button>
      </div>
    </div>
  );
}
