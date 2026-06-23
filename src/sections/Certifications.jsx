import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "InterviewQuest Explorer — Bronze Honor",
    issuer: "CPS Academy",
    date: "27th November, 2025",
    description:
      "Secured a place among the Top 50 in InterviewQuest-2, demonstrating strong commitment and a solid foundation in interview readiness.",
    link: "/certificates/interviewquest-explorer.pdf", // TODO: place the certificate file in public/certificates/ with this exact name, or update the path
  },
  {
    title: "InterviewQuest Explorer — Bronze Honor",
    issuer: "CPS Academy",
    date: "27th November, 2025",
    description:
      "Secured a place among the Top 50 in InterviewQuest-2, demonstrating strong commitment and a solid foundation in interview readiness.",
    link: "/certificates/interviewquest-explorer.pdf", // TODO: place the certificate file in public/certificates/ with this exact name, or update the path
  },

  // Add your second certificate here once you receive it — just uncomment and fill in:
  // {
  //   title: "Certificate Title Here",
  //   issuer: "Issuing Organization (e.g. Government Ministry / CCN)",
  //   date: "Month Year",
  //   description: "Short description of the training/certificate.",
  //   link: "/certificates/your-second-certificate.pdf",
  // },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Selected Awards & Achievements
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Certificates that reflect my commitment to growing as a developer
            and a learner.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-primary font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};