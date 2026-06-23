import { SiCodeforces, SiCodechef, SiHackerrank, SiLeetcode } from "react-icons/si";

const codingProfiles = [
  {
    icon: SiCodeforces,
    name: "Codeforces",
    color: "#1F8ACB",
    handle: "Shajadul_Shakil",
    link: "https://codeforces.com/profile/Shajadul_Shakil",
    stat: "Max Rating : 838",
    subStat: "Newbie · 202 Problems Solved",
  },
  {
    icon: SiCodechef,
    name: "CodeChef",
    color: "#9B6B43",
    handle: "ahammed_shakil",
    link: "https://www.codechef.com/users/ahammed_shakil",
    stat: "Max Rating : 1313",
    subStat: "1★ · Div 4",
  },
  {
    icon: SiHackerrank,
    name: "HackerRank",
    color: "#00EA64",
    handle: "mdshakilahammed1",
    link: "https://www.hackerrank.com/profile/mdshakilahammed1",
    stat: "3 Badges Earned",
    subStat: "C++, C, 30 Days of Code",
  },
  {
    icon: SiLeetcode,
    name: "LeetCode",
    color: "#FFA116",
    handle: "Md_Shakil_Ahammed",
    link: "https://leetcode.com/u/Md_Shakil_Ahammed/",
    stat: "11 Problems Solved",
    subStat: "6 Easy · 5 Medium",
  },
];

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Competitive Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Where I{" "}
            <span className="font-serif italic font-normal text-white">
              sharpen my skills.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I regularly practice problem-solving and compete on these
            platforms to strengthen my logic and algorithmic thinking.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {codingProfiles.map((profile, idx) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 animate-fade-in group overflow-hidden flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Top section ~75% — icon + name + handle */}
              <div
                className="flex flex-col items-center justify-center gap-3 px-4 py-5 transition-colors duration-300"
                style={{
                  flex: "3 1 0%",
                  backgroundColor: `${profile.color}0D`,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${profile.color}1A` }}
                >
                  <profile.icon
                    className="w-6 h-6"
                    style={{ color: profile.color }}
                  />
                </div>
                <h3 className="text-base font-semibold text-center">
                  {profile.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  @{profile.handle}
                </p>
              </div>

              {/* Bottom section ~25% — stat + subStat */}
              <div
                className="flex flex-col justify-center gap-1 px-5 py-5 border-t border-border/50"
                style={{ flex: "1 1 0%" }}
              >
                <p className="text-lg font-bold text-primary px-2 leading-tight">
                  {profile.stat}
                </p>
                <p className="text-xs text-muted-foreground px-2 leading-tight">
                  {profile.subStat}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};