import React from "react";

const OperatingHours = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const todayIndex = new Date().getDay(); // Sunday = 0
  const currentDay = todayIndex === 0 ? 6 : todayIndex - 1; // Adjust for Monday start

  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 border-b border-blue-400 inline-block mb-4 pb-1">
          Operating Hours
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          We are available every day to serve you.
        </p>

        {/* Hours Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-6 py-3 text-sm sm:text-base border-b border-gray-200 last:border-none transition-all duration-300
                ${
                  index === currentDay
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <span>{day}</span>
              <div className="flex items-center gap-2">
                <span>08:00 – 20:00</span>
                {index === currentDay && (
                  <span className="text-blue-600 border border-blue-500 text-xs px-2 py-[2px] rounded-sm">
                    Today
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
