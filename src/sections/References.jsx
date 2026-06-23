import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const references = [
  {
    quote:
      "I taught Shakil Data Structures and closely observed his problem-solving approach. He shows strong analytical thinking and consistent dedication to learning.",
    author: "Rakibul Hasan",
    role: "Course Instructor, Data Structures",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", // TODO: replace with real photo if available
  },
  {
    quote:
      "Shakil has been an active part of Decoder Squad, showing real enthusiasm for development and a willingness to take on challenges.",
    author: "Shayshab Azad Kanon",
    role: "CEO, Decoder Squad",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", // TODO: replace with real photo if available
  },
];

export const References = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % references.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + references.length) % references.length
    );
  };
  return (
    <section id="references" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            REFERENCES
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            People who can{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              vouch for me.
            </span>
          </h2>
        </div>

        {/* References Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Reference */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{references[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={references[activeIdx].avatar}
                  alt={references[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {references[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {references[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* References Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {references.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};