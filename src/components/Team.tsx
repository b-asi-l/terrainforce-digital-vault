import { Tilt3D } from "./Tilt3D";
import { motion } from "framer-motion";
import george from "@/assets/team/george.png";
import pradeep from "@/assets/team/pradeep.png";
import reji from "@/assets/team/reji.png";

const team = [
  { img: george, role: "Founder Managing Director", name: "George P Mathew", bio: "George brings 23+ years of marketing and leadership experience. With a Master's in Commerce and a Diploma in Sales & Marketing, his visionary leadership and unwavering commitment to excellence drive Terrain Force's growth and innovation in the dynamic security industry." },
  { img: pradeep, role: "Founder Director / CFO", name: "Pradeep Pillai", bio: "Pradeep is a seasoned finance professional with 20+ years across diverse sectors. Previously Regional Finance Manager at Aramex East Africa and G4S Secure Solutions. He holds a Master's in Finance from Kerala University and is adept in Tally, Oracle ERP, and Sage Accpac." },
  { img: reji, role: "Director / CEO", name: "Reji K Rajan", bio: "Reji has 18+ years in the security industry, with notable tenure at TATA, Reliance, ING Vysya, and G4S. Since joining Terrain Force in 2021, he has driven remarkable growth, expanding operations to Tamil Nadu and establishing partnerships across India, scaling the workforce to 2,300+ in just one year." },
];

export function Team() {
  return (
    <section id="team" className="py-28 px-[5%] bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Leadership<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-5">Management <span className="text-brand">Team</span></h2>
        <p className="text-muted-foreground max-w-xl mb-14">A strong, honest management team and a robust support structure — driving growth, employee fulfilment, and profitability.</p>

        <div className="grid gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            >
              <Tilt3D intensity={4}>
                <article className="grid md:grid-cols-[auto,1fr] gap-9 p-10 border border-border rounded bg-surface hover:border-brand/40 shadow-card transition-all">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-brand shadow-glow shrink-0 mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-gradient-brand opacity-20" />
                    <img src={m.img} alt={`${m.name}, ${m.role} at Terrain Force`} className="relative w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[3px] uppercase text-brand mb-1">{m.role}</div>
                    <h3 className="font-cond text-3xl font-bold tracking-wider mb-3">{m.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  </div>
                </article>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
