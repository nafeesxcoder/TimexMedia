"use client";

import { useState } from "react";
import { SERVICES } from "../lib/services";

const STEPS = [
  { num: 1, label: "Address" },
  { num: 2, label: "Services" },
  { num: 3, label: "Scheduling" },
  { num: 4, label: "Contact" },
  { num: 5, label: "Confirm" },
] as const;

type FormData = {
  // Address
  addressSearch: string;
  useManualAddress: boolean;
  street: string;
  city: string;
  state: string;
  zip: string;
  squareFootage: string;
  occupancy: string;
  accessType: string;
  lockboxCode: string;
  // Services
  selectedServices: string[];
  additionalServices: string;
  // Scheduling
  preferredDate: string;
  preferredTime: string;
  shootNotes: string;
  // Contact
  fullName: string;
  email: string;
  phone: string;
  company: string;
};

const initialFormData: FormData = {
  addressSearch: "",
  useManualAddress: false,
  street: "",
  city: "",
  state: "",
  zip: "",
  squareFootage: "",
  occupancy: "",
  accessType: "",
  lockboxCode: "",
  selectedServices: [],
  additionalServices: "",
  preferredDate: "",
  preferredTime: "",
  shootNotes: "",
  fullName: "",
  email: "",
  phone: "",
  company: "",
};

export default function BookNowForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const update = (updates: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const toggleService = (slug: string) => {
    setData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(slug)
        ? prev.selectedServices.filter((s) => s !== slug)
        : [...prev.selectedServices, slug],
    }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production you would send data to an API here
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8 md:p-10 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Request received
        </h3>
        <p className="text-gray-300 text-base sm:text-lg">
          Thanks for booking with Timex Media. We’ll reach out shortly to
          confirm your shoot and answer any questions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Stepper */}
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-wrap gap-2 sm:gap-4 min-w-0 justify-center">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className={`flex items-center gap-1.5 shrink-0 ${
                step === s.num ? "text-white" : "text-gray-400"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  step === s.num
                    ? "bg-brand text-white"
                    : "border border-white/30 bg-white/5"
                }`}
              >
                {s.num}
              </span>
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Address */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">Address</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Enter the property address below. For apartments or units, include
            the unit number.
          </p>
          {!data.useManualAddress ? (
            <>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  value={data.addressSearch}
                  onChange={(e) => update({ addressSearch: e.target.value })}
                  placeholder="Search or type an address..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={() => update({ useManualAddress: true })}
                className="text-brand-300 hover:text-brand text-sm font-medium underline underline-offset-2"
              >
                Enter manually
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={data.street}
                onChange={(e) => update({ street: e.target.value })}
                placeholder="Street address"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={data.city}
                  onChange={(e) => update({ city: e.target.value })}
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="text"
                  value={data.state}
                  onChange={(e) => update({ state: e.target.value })}
                  placeholder="State"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="text"
                  value={data.zip}
                  onChange={(e) => update({ zip: e.target.value })}
                  placeholder="ZIP"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <button
                type="button"
                onClick={() => update({ useManualAddress: false })}
                className="text-brand-300 hover:text-brand text-sm font-medium underline underline-offset-2"
              >
                Use address search instead
              </button>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Square footage (optional)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={data.squareFootage}
              onChange={(e) => update({ squareFootage: e.target.value })}
              placeholder="e.g. 2200"
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Is the property vacant or occupied?
            </label>
            <select
              value={data.occupancy}
              onChange={(e) => update({ occupancy: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-brand appearance-none bg-no-repeat bg-[length:20px] bg-[right_0.75rem_center] pr-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
              }}
            >
              <option value="">Select...</option>
              <option value="vacant">Vacant</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Access: Agent/Homeowner or Lockbox?
            </label>
            <select
              value={data.accessType}
              onChange={(e) => update({ accessType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-brand appearance-none bg-no-repeat bg-[length:20px] bg-[right_0.75rem_center] pr-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
              }}
            >
              <option value="">Select...</option>
              <option value="agent">
                Agent or homeowner will grant access
              </option>
              <option value="lockbox">Lockbox</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Lockbox code (optional)
            </label>
            <input
              type="text"
              value={data.lockboxCode}
              onChange={(e) => update({ lockboxCode: e.target.value })}
              placeholder="If using lockbox"
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
      )}

      {/* Step 2: Services */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">Services</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Choose one or more services for this shoot. We’ll confirm pricing
            and details after you submit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <label
                key={s.slug}
                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                  data.selectedServices.includes(s.slug)
                    ? "border-brand bg-brand/10"
                    : "border-white/20 bg-white/5 hover:border-white/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={data.selectedServices.includes(s.slug)}
                  onChange={() => toggleService(s.slug)}
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-white/5 text-brand focus:ring-brand"
                />
                <span className="text-white font-medium text-sm sm:text-base">
                  {s.title}
                </span>
              </label>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Other requests or notes (optional)
            </label>
            <textarea
              value={data.additionalServices}
              onChange={(e) => update({ additionalServices: e.target.value })}
              placeholder="e.g. drone only, same-day rush..."
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
            />
          </div>
        </div>
      )}

      {/* Step 3: Scheduling */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Scheduling
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Share your preferred date and time. We’ll confirm availability and
            send a calendar invite.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Preferred date
              </label>
              <input
                type="date"
                value={data.preferredDate}
                onChange={(e) => update({ preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Preferred time
              </label>
              <select
                value={data.preferredTime}
                onChange={(e) => update({ preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-brand appearance-none bg-no-repeat bg-[length:20px] bg-[right_0.75rem_center] pr-10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                }}
              >
                <option value="">Select...</option>
                <option value="morning">Morning (8–12)</option>
                <option value="afternoon">Afternoon (12–4)</option>
                <option value="evening">Evening (4–7)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Shoot notes (optional)
            </label>
            <textarea
              value={data.shootNotes}
              onChange={(e) => update({ shootNotes: e.target.value })}
              placeholder="Special instructions, pets, gate codes, etc."
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
            />
          </div>
        </div>
      )}

      {/* Step 4: Contact */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">Contact</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            How we’ll reach you to confirm the booking and send deliverables.
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full name *
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => update({ fullName: e.target.value })}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update({ email: e.target.value })}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              placeholder="(555) 123-4567"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Company or brokerage (optional)
            </label>
            <input
              type="text"
              value={data.company}
              onChange={(e) => update({ company: e.target.value })}
              placeholder="e.g. Timex Realty"
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
      )}

      {/* Step 5: Confirm */}
      {step === 5 && (
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">Confirm</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Review your booking details below, then submit to send your request.
          </p>
          <div className="rounded-xl border border-white/20 bg-white/5 p-4 sm:p-6 space-y-3 text-sm sm:text-base">
            <p className="text-gray-300">
              <span className="text-gray-500">Address:</span>{" "}
              {data.useManualAddress
                ? [data.street, data.city, data.state, data.zip]
                    .filter(Boolean)
                    .join(", ") || "—"
                : data.addressSearch || "—"}
            </p>
            {data.squareFootage && (
              <p className="text-gray-300">
                <span className="text-gray-500">Sq ft:</span>{" "}
                {data.squareFootage}
              </p>
            )}
            {data.occupancy && (
              <p className="text-gray-300">
                <span className="text-gray-500">Occupancy:</span>{" "}
                {data.occupancy}
              </p>
            )}
            {data.accessType && (
              <p className="text-gray-300">
                <span className="text-gray-500">Access:</span> {data.accessType}
              </p>
            )}
            <p className="text-gray-300">
              <span className="text-gray-500">Services:</span>{" "}
              {data.selectedServices.length
                ? data.selectedServices
                    .map((slug) => SERVICES.find((s) => s.slug === slug)?.title)
                    .join(", ")
                : "—"}
            </p>
            {(data.preferredDate || data.preferredTime) && (
              <p className="text-gray-300">
                <span className="text-gray-500">Preferred:</span>{" "}
                {data.preferredDate || ""}{" "}
                {data.preferredTime ? `· ${data.preferredTime}` : ""}
              </p>
            )}
            <p className="text-gray-300">
              <span className="text-gray-500">Contact:</span> {data.fullName},{" "}
              {data.email}, {data.phone}
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center pt-4">
        <div>
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Previous
            </button>
          )}
        </div>
        <div className="flex gap-3">
          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:opacity-90 transition-opacity"
            >
              Next step
            </button>
          ) : (
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Submit request
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
