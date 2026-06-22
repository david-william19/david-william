// app/about/page.tsx
import { ImageStack, ImageStackProps } from "@/components/ImageStack";
import ExperienceList from "./_components/ExperienceList";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { mySkills } from "@/data/skills";

const showedCertificates: ImageStackProps[] = [
  {
    url: "/images/certificates/dicoding-backend.png",
    alt: "dicoding-backend",
    id: 1,
  },
  {
    url: "/images/certificates/dicoding-swift.png",
    alt: "dicoding-swift",
    id: 2,
  },
  {
    url: "/images/certificates/dicoding-fundamental-ios.png",
    alt: "dicoding-fundamental-ios",
    id: 3,
  },
];

const showedCompetitions: ImageStackProps[] = [
  { url: "/images/certificates/bncc-winner.png", alt: "bncc-winner", id: 4 },
  { url: "/images/certificates/bncc-peserta.png", alt: "bncc-peserta", id: 5 },
  { url: "/images/certificates/itp-webdev.png", alt: "itp-webdev", id: 6 },
];

function SectionCard({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <section
      className={cn(
        "rounded-xl p-5 md:p-6 bg-gradient-to-br from-[#252525a5] to-[#002118] shadow-sm",
        "ring-1 ring-white/5",
        "transition-transform hover:scale-[1.01] hover:shadow-md",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children }: React.PropsWithChildren) {
  return (
    <h3 className="text-[#9bafab] font-poppins font-semibold text-xl tracking-wide mb-4">
      {children}
    </h3>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 min-h-screen flex items-center my-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">
        {/* Sidebar About */}
        <SectionCard className="md:col-span-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/david-nobg.png"
                alt="David W."
                width={200}
                height={200}
                className="object-cover grayscale object-[50%_75%]"
              />
            </div>
            <div>
              <div className="font-semibold text-neutral-200">
                David W. De Costa
              </div>
              <div className="text-sm text-neutral-400">
                Frontend / Software Developer
              </div>
            </div>
          </div>

          <ul className="text-sm text-neutral-300 leading-relaxed mt-5">
            <li>👨‍💻 Frontend dev who loves tinkering with Next.js</li>
            <li>✨ Obsessed with clean & fast UIs</li>
            <li>🧠 Geek for architecture & testing</li>
            <li>🤖 Sprinkles a bit of AI to make apps smarter</li>
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-10">
            {mySkills.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-200 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </SectionCard>

        {/* Experiences */}
        <SectionCard className="md:col-span-9">
          <SectionTitle>Experiences</SectionTitle>
          <ExperienceList />
        </SectionCard>

        {/* Certificates / Competitions / Others */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionCard>
            <SectionTitle>Certificate</SectionTitle>
            <ImageStack images={showedCertificates} />
          </SectionCard>

          <SectionCard>
            <SectionTitle>Competitions</SectionTitle>
            <ImageStack images={showedCompetitions} />
          </SectionCard>

          <SectionCard>
            <SectionTitle>Others</SectionTitle>
            <ImageStack images={showedCertificates} />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
