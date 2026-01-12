import Image from "next/image";

type BoardMember = {
  name: string;
  role: string;
  major: string;
  image: string;
  linkedin: string;
};

const executiveBoard: BoardMember[] = [
  {
    name: "Tyler Spitzer-Wu",
    role: "President",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/tyler.jpg",
    linkedin: "https://www.linkedin.com/in/tspitzerwu/",
  },
  {
    name: "Sophia Liu",
    role: "VP Marketing",
    major: "Economics",
    image: "/images/about_pics/headshots/sophia.jpeg",
    linkedin: "https://www.linkedin.com/in/sophialiu12/",
  },
  {
    name: "Arjun Suri",
    role: "VP Recruitment",
    major: "Industrial and Operations Engineering",
    image: "/images/about_pics/headshots/arjun.jpeg",
    linkedin: "https://www.linkedin.com/in/rjunsuri/",
  },
  {
    name: "Rio Tanabe",
    role: "VP Finance",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/rio.jpeg",
    linkedin: "https://www.linkedin.com/in/rio-tanabe-152696232/",
  },
  {
    name: "Pranav Joshi",
    role: "VP Professional Development",
    major: "Computer Science",
    image: "/images/about_pics/headshots/joshi.jpeg",
    linkedin: "https://www.linkedin.com/in/pranavv-joshi/",
  },
  {
    name: "Andy Liang",
    role: "VP Client Relations",
    major: "Computer Science + Economics",
    image: "/images/about_pics/headshots/andy.jpeg",
    linkedin: "https://www.linkedin.com/in/yanhang-liang/",
  },
  {
    name: "Dana Clocker",
    role: "VP External Affairs",
    major: "Information Analysis",
    image: "/images/about_pics/headshots/dana.jpeg",
    linkedin: "https://www.linkedin.com/in/dana-clocker/",
  },
  {
    name: "Colin Madden",
    role: "VP Community",
    major: "Civil Engineering",
    image: "/images/about_pics/headshots/colin.jpeg",
    linkedin: "https://www.linkedin.com/in/colinkmadden/",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-white md:text-7xl font-semibold leading-[1.1] tracking-tight">
        What is URB Consulting?
      </h1>
      
      {/* Intro + Executive Board */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Image src="/images/about_pics/groupM.jpg" alt="URB Consulting" width={1600} height={1500} className="w-full h-96 md:h-[600px] object-cover" />
        </div>
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-foreground/90">
            URB Consulting is rooted in the University of Michigan&apos;s Urban Technology program. 
            The founding of the club was inspired by a need for students in the Urban Tech program to gain professional experience. 
            We set out to create those opportunities ourselves by building a consulting group focused on 
            interdisciplinary projects for companies building technology spanning the physical and digital worlds.
            <br /><br />
            Now, we are proudly associated with the Taubman College of Architecture and Urban Planning, 
            the School of Information, and the College of Engineering, and we recruit members from across the 
            University&apos;s 19 colleges. Our strength is rooted in this diversity of backgrounds, with current members 
            having experience across technology, consulting, real estate, finance, startups, automotive, and more!
          </p>
        </div>
        
      </section>
      
      {/* Executive Board Grid */}
      <section className="mt-16">
        <h2 className="text-3xl text-white md:text-5xl font-semibold tracking-tight">Executive Board</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {executiveBoard.map((member) => (
            <div key={member.name} className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <Image
                src={member.image}
                alt={member.name}
                width={800}
                height={1000}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-foreground/90">{member.role}</p>
                <p className="text-foreground/80">{member.major}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


