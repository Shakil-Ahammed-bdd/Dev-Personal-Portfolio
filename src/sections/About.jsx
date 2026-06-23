import { Code2, Lightbulb, Trophy, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code that's easy to build upon.",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    description:
      "Solving 600+ data structure and algorithm problems through competitive programming.",
  },
  {
    icon: Layers,
    title: "Full-Stack Mindset",
    description: "Comfortable working across frontend, backend, and database layers.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly exploring new tools and technologies to grow as a developer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              "Turning curiosity into code,"
              <span className="font-serif italic font-normal text-white">
                {" "}
                project by project.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science student and aspiring software engineer with a 
                strong interest in full-stack development. My journey started with 
                curiosity about how websites and applications work, and it has grown 
                into hands-on experience building real-world projects.
              </p>
              <p>
                I specialize in React, Node.js, and MongoDB, building everything from 
                job marketplace platforms to factory management systems. My approach 
                combines clean code practices with a focus on solving practical problems.
              </p>
              <p>
                When I'm not coding, you'll find me solving algorithmic problems on 
                CodeChef and Codeforces, exploring new web technologies, or working 
                on personal projects to sharpen my skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to keep building, keep learning, and grow into a software 
                engineer who creates solutions that genuinely help people."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};