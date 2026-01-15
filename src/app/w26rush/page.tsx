import Link from "next/link";
import ElectricBorder from "@/components/ElectricBorder";
import FuzzyText from "@/components/FuzzyText";

export default function StudentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-center text-urb-maize md:text-7xl font-semibold leading-[1.1] tracking-tight">
        W26 Rush
      </h1>
      <p className="mt-5 text-2xl md:text-3xl text-white text-center max-w-8xl mx-auto">
        UMich&apos;s first and only urban tech consulting organization wants to get to know you!
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="https://forms.gle/AYjZfYS5bDP6kyKj6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">
          Interest Form
        </Link>
        <Link href="https://tally.so/r/A7p7Xz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">
          Application
        </Link>
      </div>

      <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/_HmqW0Kmv98?autoplay=1&mute=1&playsinline=1"
            title="URB Consulting - W26 Rush"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Recruitment Timeline */}
      <section className="mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Recruitment Timeline</h2>

          {/* Open Rush */}
          <div className="mt-10 space-y-10">
            <h3 className="text-lg md:text-xl font-medium text-muted text-center">Open Rush</h3>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Monday 1/12</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Winterfest</div>
                <p className="mt-2 text-sm md:text-base text-muted">4:00pm - 7:00pm</p>
                <p className="text-sm md:text-base text-muted">Michigan Union Rogel Ballroom Table 9</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Come meet our members and ask any questions you might have!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Thursday 1/15</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">General Meeting 1 (Hybrid)</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">North University Building 1544 or <Link href="https://umich.zoom.us/j/3519980123" target="_blank" rel="noopener noreferrer" className="underline hover:text-urb-maize transition-colors">Zoom</Link></p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Please come to a General Meeting for your application to be considered! We recommend attending in person.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Friday 1/16</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">General Meeting 2 (Hybrid)</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">North Quad 2255 or <Link href="https://umich.zoom.us/j/3519980123" target="_blank" rel="noopener noreferrer" className="underline hover:text-urb-maize transition-colors">Zoom</Link></p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">After this meeting, our application is due on Sunday 1/18 at 11:59pm!</p>
              </div>
            </div>

            {/* Application Due Callout */}
            <div className="rounded-2xl bg-[#692c61] text-urb-maize p-6 text-center font-medium shadow-[0_0_0_1px_rgba(105,44,97,0.35)]">
              Application due Sunday 1/18 at 11:59pm
            </div>
          </div>

          {/* Closed Rush */}
          <div className="mt-12 space-y-10">
            <h3 className="text-lg md:text-xl font-medium text-muted text-center">Closed Rush</h3>

            

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Tuesday 1/20</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Optimization Challenge</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">Mason Hall 1427</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Hope you know how to make paper planes...</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Thursday 1/22</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Speed Dating</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">Location TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Prepare to answer some ridiculous questions (and also have a great time)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Monday 1/26</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Case Study Workshop</div>
                <p className="mt-2 text-sm md:text-base text-muted">7:00pm - 9:00pm</p>
                <p className="text-sm md:text-base text-muted">Location TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Work in a group to create and present a solution to a an urban technology problem.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Wednesday 1/28</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Optional Coffee Chats</div>
                <p className="mt-2 text-sm md:text-base text-muted">Times TBD</p>
                <p className="text-sm md:text-base text-muted">Locations TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Coffee chat an URB member if you have any questions before interviews!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Thursday 1/29, Friday 1/30</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Interviews</div>
                <p className="mt-2 text-sm md:text-base text-muted">Times TBD</p>
                <p className="text-sm md:text-base text-muted">Locations TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Individual interviews will be offered to qualified applicants so that we can learn as much about you as we can.</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <div className="mt-32 flex items-center justify-center">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
          RUSH URB
        </FuzzyText>
      </div>
    </main>
  );
}


