"use client";

import { useState, useEffect } from "react";

interface CalendarDay {
  date: number;
  day: string;
  isSelected: boolean;
  isWeekend: boolean;
}

interface BookingCalendarProps {
  onDateSelect?: (date: string, formattedDate: string) => void;
  selectedDateFromForm?: string;
}

export default function BookingCalendar({
  onDateSelect,
  selectedDateFromForm,
}: BookingCalendarProps) {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(3);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState("");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getWeekDays = () => {
    const today = new Date(currentYear, currentMonth, 1);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + currentWeekOffset * 7);

    const dayOfWeek = startDate.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(startDate);
    monday.setDate(startDate.getDate() + mondayOffset);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      const dayName = dayNames[i];
      const isWeekend = dayName === "Sat" || dayName === "Sun";

      weekDays.push({
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: dayName,
        isSelected: false,
        isWeekend: isWeekend,
        fullDate: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
      });
    }
    return weekDays;
  };

  const [weekDays, setWeekDays] = useState(getWeekDays());

  useEffect(() => {
    setWeekDays(getWeekDays());
  }, [currentYear, currentMonth, currentWeekOffset]);

  const formatDateForForm = (year: number, month: number, date: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
  };

  const formatDateForDisplay = (
    date: number,
    day: string,
    month: number,
    year: number,
  ) => {
    const dayMap: { [key: string]: string } = {
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
      Sun: "Sunday",
    };
    return `${dayMap[day]}, ${monthNames[month]} ${date}, ${year}`;
  };

  useEffect(() => {
    if (selectedDateFromForm) {
      const [year, month, date] = selectedDateFromForm.split("-").map(Number);
      if (year !== currentYear || month - 1 !== currentMonth) {
        setCurrentYear(year);
        setCurrentMonth(month - 1);
        setCurrentWeekOffset(0);
      }
      setSelectedDate(date);
      const dayObj = weekDays.find(
        (d) => d.date === date && d.month === month - 1,
      );
      if (dayObj) {
        setSelectedDay(dayObj.day);
      }
    }
  }, [selectedDateFromForm]);

  const handleDateSelect = (day: any) => {
    setSelectedDate(day.date);
    setSelectedDay(day.day);

    const formattedDate = formatDateForForm(day.year, day.month, day.date);
    const displayDate = formatDateForDisplay(
      day.date,
      day.day,
      day.month,
      day.year,
    );

    if (onDateSelect) {
      onDateSelect(formattedDate, displayDate);
    }
  };

  const previousWeek = () => {
    setCurrentWeekOffset(currentWeekOffset - 1);
    setSelectedDate(null);
  };

  const nextWeek = () => {
    setCurrentWeekOffset(currentWeekOffset + 1);
    setSelectedDate(null);
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setCurrentWeekOffset(0);
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setCurrentWeekOffset(0);
    setSelectedDate(null);
  };

  const getFullDayName = (day: string) => {
    const dayMap: { [key: string]: string } = {
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
      Sun: "Sunday",
    };
    return dayMap[day] || day;
  };

  const getMonthDisplay = () => {
    return `${monthNames[currentMonth]} ${currentYear}`;
  };

  const availableDays = weekDays.filter((day) => !day.isWeekend).length;

  // Check if selected date is weekend
  const isSelectedWeekend =
    selectedDate && weekDays.find((d) => d.date === selectedDate)?.isWeekend;

  return (
    <div
      className="w-full relative rounded-2xl flex flex-col p-4 overflow-hidden isolate z-0 transition-all duration-300"
      style={{
        background:
          "linear-gradient(160deg, #1e1b4b 0%, #2e1a5e 50%, #0a0a1a 100%)",
        boxShadow:
          "0 8px 32px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.3)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
          <span className="font-bold text-[17px] text-white tracking-tight">
            Select a Date
          </span>
        </div>
        <span className="text-[9px] text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full font-medium">
          Mon-Fri Only
        </span>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mt-2 mb-3 flex-shrink-0">
        <div className="flex items-center gap-1">
          <button
            onClick={previousMonth}
            className="p-1.5 rounded-lg hover:bg-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="#a78bfa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="font-semibold text-[13px] text-purple-300 min-w-[130px] text-center">
            {getMonthDisplay()}
          </span>
          <button
            onClick={nextMonth}
            className="p-1.5 rounded-lg hover:bg-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="#a78bfa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={previousWeek}
            className="p-1.5 rounded-lg hover:bg-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="#a78bfa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-[9px] text-purple-400/60">WEEK</span>
          <button
            onClick={nextWeek}
            className="p-1.5 rounded-lg hover:bg-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="#a78bfa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Days Grid */}
      <div className="flex items-center justify-center gap-1.5 mb-3 flex-shrink-0">
        {weekDays.map((day) => (
          <button
            key={`${day.year}-${day.month}-${day.date}`}
            onClick={() => handleDateSelect(day)}
            className={`flex flex-col items-center justify-center w-11 h-[65px] rounded-xl gap-1 transition-all duration-200 outline-none flex-shrink-0 cursor-pointer
              ${
                selectedDate === day.date && selectedDay === day.day
                  ? "bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-purple-400 shadow-lg shadow-purple-500/30 scale-95"
                  : day.isWeekend
                    ? "bg-white/5 border border-white/10 hover:bg-purple-500/10"
                    : "bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-105"
              }
            `}
          >
            <span
              className={`font-bold text-[15px] leading-none tracking-tight transition-colors
                ${selectedDate === day.date && selectedDay === day.day ? "text-white" : day.isWeekend ? "text-slate-500" : "text-slate-200"}
              `}
            >
              {day.date}
            </span>
            <span
              className={`font-medium text-[8px] leading-none uppercase tracking-wide transition-colors
                ${selectedDate === day.date && selectedDay === day.day ? "text-purple-300" : day.isWeekend ? "text-slate-600" : "text-slate-500"}
              `}
            >
              {day.day}
            </span>
            {day.month !== currentMonth && !day.isWeekend && (
              <span className="text-[6px] text-purple-400/50 mt-0.5">
                {monthNames[day.month].slice(0, 3)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-[8px] text-slate-400">Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-300"></div>
          <span className="text-[8px] text-slate-400">Selected</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <span className="text-[8px] text-slate-400">
            Weekend (No Booking)
          </span>
        </div>
      </div>

      {/* Selected Date Divider */}
      <div className="flex items-center gap-2 mb-2 flex-shrink-0">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <span className="font-semibold text-[10px] text-purple-300/70 uppercase tracking-wider flex-shrink-0 text-center">
          {selectedDate && selectedDay
            ? `${getFullDayName(selectedDay)}, ${monthNames[weekDays.find((d) => d.date === selectedDate)?.month || currentMonth]} ${selectedDate}, ${weekDays.find((d) => d.date === selectedDate)?.year || currentYear}`
            : "CHOOSE A DATE (MON-FRI)"}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Status Message - Changes based on selected date */}
      <div className="flex-1 flex flex-col gap-1 overflow-y-auto min-h-0 pr-0.5">
        <div className="flex items-center justify-between h-full py-2">
          {selectedDate ? (
            isSelectedWeekend ? (
              <div className="flex items-center gap-2 mx-auto">
                <svg
                  className="w-3 h-3 text-red-400/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium text-[10px] text-red-400/70">
                  No booking available on weekends
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mx-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-medium text-[10px] text-green-400/70">
                  Ready for booking
                </span>
              </div>
            )
          ) : (
            <div className="flex items-center gap-2 mx-auto">
              <svg
                className="w-3 h-3 text-purple-400/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-[10px] text-purple-400/40">
                {availableDays} days available this week (Mon-Fri)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </div>
  );
}
