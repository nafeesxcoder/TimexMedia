"use client";

import { useState } from "react";

interface PropertyType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface PropertyTypeStepProps {
  onContinue?: (propertyType: string) => void;
  initialValue?: string;
}

export default function PropertyTypeStep({
  onContinue,
  initialValue = "Single-Family",
}: PropertyTypeStepProps) {
  const [selectedProperty, setSelectedProperty] =
    useState<string>(initialValue);

  const propertyTypes: PropertyType[] = [
    {
      id: "Single-Family",
      name: "Single-Family",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H7v8H5a2 2 0 0 1-2-2z" />
          <path d="M9 22v-4h6v4" />
        </svg>
      ),
    },
    {
      id: "Industrial",
      name: "Industrial",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </svg>
      ),
    },
    {
      id: "Multi-Family",
      name: "Multi-Family",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="8" width="20" height="14" rx="1" />
          <path d="M5 8V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4" />
          <path d="M8 12h8" />
          <path d="M12 12v6" />
        </svg>
      ),
    },
    {
      id: "Office",
      name: "Office",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <path d="M8 6h8" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
          <path d="M8 18h3" />
        </svg>
      ),
    },
    {
      id: "Retail",
      name: "Retail",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      id: "Hotel",
      name: "Hotel",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="1" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
    {
      id: "Other",
      name: "Other",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      ),
    },
  ];

  const handleContinue = () => {
    if (onContinue) {
      onContinue(selectedProperty);
    }
  };

  const selectedIcon = propertyTypes.find(
    (p) => p.id === selectedProperty,
  )?.icon;

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-400 font-medium">
              Step 1/13
            </span>
            <span className="text-xs text-gray-500">7%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[7%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">Property type</h3>
          <p className="text-sm text-gray-400 mt-1">
            Select the type of property you need to photograph
          </p>
        </div>

        {/* Selected Card - Single-Family */}
        <div
          className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer mb-4
            ${
              selectedProperty === "Single-Family"
                ? "bg-purple-500/20 border-purple-500 shadow-lg shadow-purple-500/20"
                : "bg-white/5 border-white/10 hover:border-purple-500/50"
            }
          `}
          onClick={() => setSelectedProperty("Single-Family")}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
              ${
                selectedProperty === "Single-Family"
                  ? "text-purple-400"
                  : "text-gray-400"
              }
            `}
            >
              {propertyTypes.find((p) => p.id === "Single-Family")?.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white">Single-Family</div>
              <div className="text-xs text-gray-400">
                Detached homes, villas, bungalows
              </div>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
              ${selectedProperty === "Single-Family" ? "border-purple-500" : "border-white/30"}
            `}
            >
              {selectedProperty === "Single-Family" && (
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              )}
            </div>
          </div>
        </div>

        {/* Other Property Types Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
          {propertyTypes
            .filter((p) => p.id !== "Single-Family")
            .map((property) => (
              <div
                key={property.id}
                onClick={() => setSelectedProperty(property.id)}
                className={`relative p-3 rounded-xl border transition-all duration-300 cursor-pointer text-center
                ${
                  selectedProperty === property.id
                    ? "bg-purple-500/20 border-purple-500 shadow-lg shadow-purple-500/20"
                    : "bg-white/5 border-white/10 hover:border-purple-500/50"
                }
              `}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                  ${
                    selectedProperty === property.id
                      ? "text-purple-400"
                      : "text-gray-400"
                  }
                `}
                  >
                    {property.icon}
                  </div>
                  <div className="font-medium text-white text-sm">
                    {property.name}
                  </div>
                </div>
                <div
                  className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 flex items-center justify-center
                ${selectedProperty === property.id ? "border-purple-500" : "border-white/30"}
              `}
                >
                  {selectedProperty === property.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Continue Button */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <button
            onClick={handleContinue}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/25"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
