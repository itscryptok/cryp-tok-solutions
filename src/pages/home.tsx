import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const accentColors = [
    "hsl(212 62% 48%)",   // 01 Prolice AI — blue
    "hsl(38 85% 55%)",   // 02 Bimyem Expressions — yellow
    "hsl(212 62% 48%)",   // 03 REMU — blue
    "hsl(38 85% 55%)",   // 04 Accentrop Lab — yellow
    "hsl(212 62% 48%)",   // 05 Jhirah — blue
    "hsl(38 85% 55%)",   // 06 Prolorg — yellow
    "hsl(212 62% 48%)",   // 07 Thinsk Media — blue
    "hsl(38 85% 55%)",   // 08 Captain Tok — yellow
    "hsl(212 62% 48%)",   // 09 Paigent — blue
    "hsl(38 85% 55%)",   // 10 Made Kids — yellow
    "hsl(212 62% 48%)",   // 11 Praygent — blue
    "hsl(38 85% 55%)",   // 12 Data Clawd — yellow
    "hsl(212 62% 48%)",   // 13 Moomi — blue
    "hsl(38 85% 55%)",   // 14 Lafsvegas — yellow
    "hsl(212 62% 48%)",   // 15 Emogee — blue
    "hsl(38 85% 55%)",   // 16 Recoupa — yellow
    "hsl(212 62% 48%)",   // 17 Fix Messy — blue
    "hsl(38 85% 55%)",   // 18 Atlas Games — yellow
  ];

  const apps = [
    { name: "Prolice AI", url: "https://aipad2earn.com", description: "Hire AI experts on demand" },
    { name: "Bimyem Expressions", url: "https://bimyemexpressions.com", description: "African hair braiding salon" },
    { name: "REMU", url: "https://emus.onrender.com", description: "Resource for Effective Ministry Upgrade" },
    { name: "Accentrop Lab", url: "https://accentrop.com", description: "Test your accent before your AI robot tests you." },
    { name: "Jhirah", url: "https://jhirah.com", description: "Businesses grow 3x faster, Customers get loyalty rewards" },
    { name: "Prolorg", url: "https://prolorg.com", description: "Get discovered for the next big opportunity" },
    { name: "Thinsk Media", url: "https://thinskmedia.com", description: "AI-powered Digital Marketing" },
    { name: "Captain Tok", url: "https://captaintok.com", description: "Books & Consulting" },
    { name: "Paigent", url: "https://paigent.app", description: "Build income from Photography" },
    { name: "Made Kids", url: "https://madekidsmk.com", description: "Mentorship for content creators" },
    { name: "Praygent", url: "https://praygent.app", description: "Prayer content creators" },
    { name: "Data Clawd", url: "https://dataclawd.io", description: "Data Supply Chain" },
    { name: "Moomi", url: "https://moomi.pro", description: "AI agentic COO" },
    { name: "Lafsvegas", url: "https://lafsvegas.com", description: "Content Creator Prediction" },
    { name: "Emogee", url: "https://emogee.me", description: "Get emotional insights" },
    { name: "Recoupa", url: "https://recoupafi.com", description: "Coming soon" },
    { name: "Fix Messy", url: "https://fixmessy.grok.me", description: "Reorganize any space from a photo" },
    { name: "Atlas Games", url: "https://atlasgames.grok.me", description: "Game studio" },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans overflow-x-hidden">
      {/* Editorial Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-background border-b border-white/10 uppercase tracking-widest text-xs font-semibold">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" data-testid="link-logo-home">
          <img src="/logo.png" alt="Cryp Tok Solutions" className="h-8 w-8 object-contain" />
          <span className="font-display font-bold text-sm tracking-widest">Cryp Tok Solutions</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#apps" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-primary transition-colors">Mission</a>
        </div>
        <a href="https://thinskmedia.com" target="_blank" rel="noopener noreferrer" data-testid="link-partner-with-us">
          <Button variant="outline" className="hidden md:inline-flex rounded-none border-white/20 hover:bg-primary hover:text-white hover:border-primary uppercase text-xs tracking-widest h-10 px-6">
            Partner with us
          </Button>
        </a>
      </nav>

      {/* Brutalist Split Hero */}
      <section className="pt-[73px] flex flex-col lg:flex-row border-b border-white/10">
        <div className="flex-1 lg:basis-[58%] flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-primary text-sm font-bold tracking-widest uppercase mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary block"></span>
              The Next Era
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-extrabold leading-[0.9] tracking-tighter uppercase mb-8 text-foreground/90">
              Building <br/>
              <span className="text-primary">Real</span> <br/>
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mb-12">
              Building the Future, One App at a Time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apps" data-testid="link-explore-portfolio">
                <Button size="lg" className="rounded-none h-16 px-8 text-sm uppercase tracking-widest bg-primary hover:bg-white hover:text-black text-white font-bold transition-all w-full sm:w-auto">
                  Explore Portfolio <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#about" data-testid="link-learn-about-us">
                <Button size="lg" variant="outline" className="rounded-none h-16 px-8 text-sm uppercase tracking-widest border-white/20 hover:bg-white/5 w-full sm:w-auto">
                  Learn About Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="hidden lg:block flex-1 relative lg:min-h-full bg-secondary overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-background/40 z-10 pointer-events-none"></div>
          <img 
            src="/hero-bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale contrast-[1.2] opacity-80"
          />
        </div>
      </section>

      {/* Slide-in Tag Strip */}
      <div className="border-b border-white/10 py-5 px-6 lg:px-16 bg-primary/5 overflow-hidden">
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {[
            "AI-POWERED", "EVERYDAY APPS", "BUILT FOR PEOPLE", "REAL SOLUTIONS",
            "10 APPS", "ONE MISSION", "PRODUCTIVITY", "COMMUNITY", "CREATIVITY",
            "INNOVATION", "FINTECH", "EDTECH", "HEALTH TECH", "BUILDING THE FUTURE",
          ].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 font-display font-bold text-xs uppercase tracking-widest text-white/50 bg-white/[0.03]"
            >
              <span className="text-primary text-xs">✦</span>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Editorial Apps List */}
      <section id="apps" className="pb-16 border-b border-white/10">
        <div className="px-6 lg:px-16 mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">Our Apps</h2>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 text-primary"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </motion.div>
        </div>

        <div className="border-t border-white/10">
          {apps.map((app, index) => (
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={index}
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between px-6 lg:px-16 py-8 md:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              {/* Per-app accent bar: even index = right side, odd index = left side */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[6px]"
                style={{ backgroundColor: accentColors[index] ?? "hsl(212 62% 48%)" }}
              />
              
              <div className="flex items-center gap-8 md:gap-16 mb-4 md:mb-0">
                <span className="text-xl font-mono text-white/20 group-hover:text-primary transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-6 md:gap-12 pl-16 md:pl-0">
                <p className="text-lg text-muted-foreground max-w-xs">
                  {app.description}
                </p>
                <div className="hidden md:flex h-12 w-12 rounded-full border border-white/20 items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Brutalist About Section */}
      <section id="about" className="py-24 lg:py-32 border-b border-white/10 relative">
        <div className="px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
            <div className="lg:col-span-4 flex flex-col justify-between">
              <h2 className="font-display text-5xl font-bold uppercase tracking-tight leading-none mb-8">Intelligence <br/> Applied</h2>
              <div className="w-full h-full min-h-[300px] border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 z-0"></div>
                <div className="text-7xl font-display font-black text-primary z-10">100%</div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground font-bold z-10">AI-Native Ecosystem</div>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:pl-16 flex flex-col justify-center">
              <div className="text-2xl md:text-4xl leading-snug font-light text-foreground/90 max-w-4xl">
                Cryp Tok Solutions, registered as Cryp Tok in the state of Texas, believes the true power of AI isn't in laboratories or research papers. <span className="text-primary font-medium">It's in the hands of everyday users, solving everyday problems.</span>
                <br/><br/>
                We are a collective of engineers, designers, and strategists moving at the speed of thought to build tools that augment human potential rather than replace it.
              </div>
              
              <div className="grid grid-cols-2 gap-px bg-white/10 mt-16 border border-white/10">
                <div className="bg-background p-8 md:p-12">
                  <div className="text-5xl font-display font-bold text-white mb-2">09</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Live Products</div>
                </div>
                <div className="bg-background p-8 md:p-12">
                  <div className="text-5xl font-display font-bold text-white mb-2">TX</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 lg:px-16 pt-16 border-t border-white/10">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-12 text-muted-foreground">Why Everyday-use Apps</h3>
          <div className="grid md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "01", title: "Built for Real Life", desc: "We focus on the friction people feel every single day — career, creativity, faith, income — and build tools that remove it." },
              { num: "02", title: "Accessible by Design", desc: "Powerful technology should not require a manual. Our apps are crafted so anyone can pick them up and immediately feel the difference." },
              { num: "03", title: "Impact at Scale", desc: "Everyday apps reach everyday people. When millions use a tool daily, even small improvements compound into massive societal change." }
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="p-10 lg:p-14 flex flex-col hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-xl font-mono text-primary mb-8">{feature.num}</div>
                <h3 className="font-display text-2xl font-bold uppercase mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brutalist Footer */}
      <footer className="border-t border-white/10 bg-background pt-24 pb-12 px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-6 w-6 bg-primary rounded-none" />
              <span className="font-display font-bold text-2xl uppercase tracking-widest">Cryp Tok Solutions</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Building the Future, One App at a Time.
            </p>
          </div>
          <a href="#apps" className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-white/5 hover:text-primary transition-colors">
            Portfolio
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-sm font-mono text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Cryp Tok Solutions.</p>
          <div className="flex gap-8">
            <span>All rights reserved.</span>
            <span>Registered in Texas</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
