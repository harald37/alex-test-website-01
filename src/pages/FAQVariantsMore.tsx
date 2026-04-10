import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Calendar, Camera, Image, Shield, CreditCard, Users, CloudRain, Heart, LayoutGrid, ChevronDown, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

// Re-using the exact same data to keep it consistent
const FAQ_DATA = [
  {
    category: "Buchung & Planung",
    icon: Calendar,
    question: "Wie weit im Voraus sollten wir dich für unsere Hochzeit anfragen?",
    answer: "Am besten meldet ihr euch direkt bei mir, sobald euer Hochzeitsdatum und eure Location feststehen. Besonders für Termine an Samstagen in der Hauptsaison (Mai bis Oktober) bin ich oft schon 9 bis 12 Monate im Voraus ausgebucht. Da ich nach dem \"First come, first serve\"-Prinzip arbeite, sichert ein frühzeitiges Kennenlernen euren Wunschtermin."
  },
  {
    category: "Buchung & Planung",
    icon: Users,
    question: "Können wir uns vor der festen Buchung persönlich kennenlernen?",
    answer: "Unbedingt! Mir ist es extrem wichtig, dass die Chemie zwischen uns zu 100 % stimmt, da ich euch an eurem intimsten und emotionalsten Tag begleite. Wir können uns sehr gerne ganz unverbindlich bei mir in Hannover Misburg treffen oder uns per Video-Call austauschen. Erst wenn wir beide merken, dass wir absolut auf einer Wellenlänge sind, machen wir die Buchung vertraglich fix."
  },
  {
    category: "Buchung & Planung",
    icon: Heart,
    question: "Bietest du auch ein Kennenlern-Shooting (Engagement-Shooting) vor der Hochzeit an?",
    answer: "Sehr gerne! Ein Engagement-Shooting ein paar Monate vor der Hochzeit ist die absolut perfekte Gelegenheit, um die Scheu vor der Kamera abzulegen und uns in Action besser kennenzulernen. Es fühlt sich eher an wie ein entspannter Spaziergang in der Natur. Die professionellen Bilder, die dabei entstehen, könnt ihr zudem ideal für eure \"Save the Date\"- oder Einladungskarten nutzen."
  },
  {
    category: "Der Hochzeitstag",
    icon: Camera,
    question: "Schießt du dir die Hochzeitslocation vor dem großen Tag an?",
    answer: "Eine persönliche Vorabbesichtigung der Location ist meistens nicht zwingend notwendig. Oft ändert sich das Licht durch den Sonnenstand oder das Wetter am Hochzeitstag ohnehin. Ich bin Profi darin, mich schnell auf neue Umgebungen einzustellen und treffe am Hochzeitstag immer frühzeitig ein, um die besten Spots für unser Paarshooting und die Gruppenbilder im perfekten Licht zu scouten. Gerne könnt ihr mir vorab Bilder Location und Umgebung schicken, damit wir schon vorab schöne Spots ausfindig machen können."
  },
  {
    category: "Der Hochzeitstag",
    icon: Users,
    question: "Kommst du alleine oder arbeitest du mit einem Zweitfotografen (Second Shooter) oder einer Assistenz?",
    answer: "In der Regel begleite ich eure Hochzeit alleine und habe weitreichende Erfahrung darin, alle wichtigen Perspektiven souverän einzufangen. Bei sehr großen Hochzeitsgesellschaften (ab ca. 100 Gästen) oder wenn ihr möchtet, dass das Getting-Ready von Braut und Bräutigam morgens zeitgleich an verschiedenen Orten dokumentiert wird, empfehle ich die Hinzubuchung eines erfahrenen Zweitfotografen aus meinem professionellen Netzwerk.\n\nOptional kann ich euch anbieten meine Freundin Katharina als Assistenz mitzubringen. Eine Assistenz entlastet den Fotografen bei der Logistik und Gästekoordination, sodass dieser sich voll auf die künstlerische Arbeit konzentrieren kann. Zudem ermöglicht sie durch zusätzliche Perspektiven eine lückenlose Dokumentation und bietet technische Sicherheit in unwiederholbaren Momenten. Beim Paarshooting fungiert die Assistenz als wertvolles zweites Paar Augen für die Details. Während der Fotograf sich auf Licht, Komposition und Emotionen konzentriert, achtet die Assistenz darauf, dass Haare und Make-up perfekt sitzen, richtet die Schleppe des Brautkleids und zupft störende Falten im Anzug zurecht."
  },
  {
    category: "Der Hochzeitstag",
    icon: Calendar,
    question: "Wie viel Zeit sollten wir am Hochzeitstag für das Paarshooting und Gruppenfotos einplanen?",
    answer: "Für das Paarshooting solltet ihr idealerweise 45 bis 60 Minuten einplanen. Sehr gerne können wir das auch aufteilen: 30 Minuten am Nachmittag und 20 Minuten während des magischen Sonnenuntergangs (\"Golden Hour\"). Für die Gruppenfotos hängt die Dauer natürlich von der Anzahl der Gäste und der Anzahl der Konstellationen ab. Ich empfehle eine Liste mit maximal 10-15 festen Konstellationen vorzubereiten. Delegiert das Einsammeln der Gäste an eure Trauzeugen – so sind wir in entspannten 15 bis 20 Minuten durch!"
  },
  {
    category: "Der Hochzeitstag",
    icon: Camera,
    question: "Wie gehst du mit Gästen um, die während der Trauung selbst fotografieren wollen?",
    answer: "Ich bin sehr entspannt und habe grundsätzlich nichts gegen fotografierende Gäste. Allerdings empfehle ich euch von Herzen eine \"Unplugged Ceremony\" – also eine Trauung komplett ohne Handys und Kameras. Eure Gäste sind viel präsenter, ihr blickt beim Einzug in emotionale, weinende oder lachende Gesichter statt auf Displays, und ich habe freie Bahn für ungestörte, wunderschöne Aufnahmen. Baut dafür einfach ein kleines Schild am Eingang auf oder lasst euren Trauredner eine kurze Ansage machen!"
  },
  {
    category: "Der Hochzeitstag",
    icon: Heart,
    question: "Wir stehen nicht gerne vor der Kamera und fühlen uns unfotogen. Ist das ein Problem?",
    answer: "Überhaupt nicht, das höre ich tatsächlich von 90 % meiner Paare! Keine Sorge, ihr müsst keine professionellen Models sein. Mein Ansatz ist rein dokumentarisch. Ich zwinge euch in keine steifen Katalog-Posen und ihr müsst nicht auf Kommando lächeln. Seid einfach ihr selbst, fokussiert euch aufeinander, geht ein Stück spazieren und ignoriert mich weitestgehend. Ich fange die echten, ungestellten Momente ein – ganz ohne Druck und Stress."
  },
  {
    category: "Der Hochzeitstag",
    icon: CloudRain,
    question: "Was passiert, wenn es an unserem Hochzeitstag regnet? Fallen die Fotos dann ins Wasser?",
    answer: "Lasst euch vom Wetterbericht bloß nicht die Laune verderben! Entgegen der landläufigen Meinung liefert ein wolkiger Himmel das weichste und schmeichelhafteste Licht für Porträts (keine harten Schatten im Gesicht). Sollte es wirklich regnen, schnappen wir uns coole, transparente Regenschirme oder nutzen schöne überdachte Bereiche eurer Location. Schlechtes Wetter ist oft eine echte Chance für dramatische, einzigartige und epische Bilder, die sonst niemand hat!",
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2400/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp"
  },
  {
    category: "Sicherheit & Finanzen",
    icon: Shield,
    question: "Was passiert bei einem Notfall, wenn du am Hochzeitstag krank wirst?",
    answer: "Dass ich ausfalle, ist glücklicherweise in meiner bisherigen Karriere noch nie passiert. Sollte es durch höhere Gewalt oder plötzliche, schwere Krankheit dennoch eintreten, lasse ich euch nicht allein. Ich bin extrem gut in einem starken Netzwerk professioneller Fotografen-Kollegen vernetzt, die einen identischen Qualitätsanspruch und Bildstil haben. Ich versuche mich schnellstmöglich um einen adäquaten, verlässlichen Ersatz für euch zu kümmern."
  },
  {
    category: "Sicherheit & Finanzen",
    icon: CreditCard,
    question: "Wann und wie müssen wir bezahlen? Wird eine Anzahlung fällig?",
    answer: "Um euren Hochzeitstermin fest und verbindlich in meinem Kalender zu reservieren, wird mit der Vertragsunterzeichnung eine Terminreservierungsgebühr (Anzahlung) in Höhe von 30 % des Paketpreises fällig. Die Restsumme stellt absolut keinen Stress am Hochzeitstag dar – ihr bekommt ganz entspannt nach eurer Hochzeit eine Rechnung per E-Mail, die ihr bequem innerhalb von 7 Tagen überweisen könnt."
  },
  {
    category: "Sicherheit & Finanzen",
    icon: Camera,
    question: "Begleitest du auch Hochzeiten außerhalb Hannover und wie hoch sind die Fahrtkosten?",
    answer: "Ja, ich liebe es zu reisen und begleite Hochzeiten in ganz Deutschland und für Destination Weddings sogar weltweit! Die ersten 50 Kilometer ab meinem Standort sind im Paketpreis bereits komplett inklusive. Für jeden weiteren gefahrenen Kilometer berechne ich lediglich eine faire Pauschale von 0,40 Euro. Bei Distanzen über 150 Kilometern besprechen wir individuelle Lösungen für eine einfache, günstige Hotelübernachtung."
  },
  {
    category: "Bilder & Bearbeitung",
    icon: Image,
    question: "Wie viele Bilder erhalten wir von unserer Hochzeit?",
    answer: "Das hängt immer davon ab, wie viel an eurem Tag passiert und wie viele Gäste ihr habt. Als Richtwert: Pro Stunde könnt ihr mit 50 bis 100 final bearbeiteten Bildern rechnen. Ich sortiere unvorteilhafte Bilder, Testschüsse oder geschlossene Augen vorab sorgfältig aus. Ihr bekommt von mir keine überfüllte Festplatte mit anstrengenden Dopplungen, sondern eine liebevoll kuratierte Galerie."
  },
  {
    category: "Bilder & Bearbeitung",
    icon: Image,
    question: "Bearbeitest du alle Fotos und bekommen wir auch die unbearbeiteten RAW-Dateien?",
    answer: "Jedes einzelne Foto, das ihr von mir erhaltet, ist professionell in meinem charakteristischen Bildstil bearbeitet (Feinschliff von Belichtung, Farbgebung, Kontrasten und Bildschnitt). Unbearbeitete RAW-Dateien gebe ich grundsätzlich nicht heraus. Sie sind wie die rohen Zutaten in einer Sterneküche – erst durch meine Bearbeitung entsteht das finale Kunstwerk, für das ihr mich gebucht habt. Durch die neusten Bildbearbeitungswerkzeuge und KI-Tools habe ich viele Möglichkeiten auf eure individuellen Wünsche einzugehen."
  },
  {
    category: "Bilder & Bearbeitung",
    icon: Camera,
    question: "Retuschierst du uns dünner oder entfernst du Falten auf den Fotos?",
    answer: "Mein Fokus liegt auf dokumentarischer, echter und authentischer Fotografie. Ich optimiere Farben und Licht, um euch im besten Glanz erstrahlen zu lassen, und entferne gerne temporäre Dinge wie einen störenden Pickel oder einen blauen Fleck. Ich verändere jedoch keine Körperformen (\"Beauty-Retusche\"), mache niemanden künstlich dünner und bügele keine Lachfalten weg. Ihr seid wunderschön, genau so wie ihr seid! Solltet ihr dennoch dringende Anpassungswünsche haben, habe ich mit den neusten Bildbearbeitungswerkzeugen und KI-Tools sehr viele Möglichkeiten eure Wünsche zu verwirklichen."
  },
  {
    category: "Bilder & Bearbeitung",
    icon: Calendar,
    question: "Wann und in welcher Form erhalten wir unsere fertigen Hochzeitsfotos?",
    answer: "Die finale, liebevolle Bildbearbeitung ist ein zeitintensiver Prozess und dauert in der Hochsaison in der Regel 4 bis 6 Wochen. Aber keine Sorge: Bereits 2 Tage nach der Hochzeit erhaltet ihr von mir ein kleines \"Sneak Peek\" mit euren Top 10 bis 15 Highlights für erste Danksagungen oder Social Media! Die fertigen Bilder bekommt ihr dann alle in höchster Auflösung über eine passwortgeschützte Online-Galerie zum Download."
  },
  {
    category: "Nutzungsrechte",
    icon: Shield,
    question: "Erhalten unsere Fotos ein störendes Wasserzeichen oder Logo?",
    answer: "Nein, definitiv nicht. Ihr erhaltet alle eure bearbeiteten Hochzeitsfotos in höchster Druckauflösung und völlig frei von störenden Logos, Schriftzügen oder Wasserzeichen. Ihr sollt die Bilder ungestört genießen und euch große Leinwände in euer Wohnzimmer hängen können, ohne dass mein Name quer über dem Bild steht."
  },
  {
    category: "Nutzungsrechte",
    icon: Users,
    question: "Dürfen wir die Bilder auf unseren Social Media Profilen posten und teilen?",
    answer: "Ja, absolut! Ihr erhaltet von mir die vollen, uneingeschränkten privaten Nutzungsrechte für eure Bilder. Ihr dürft und sollt die Fotos sehr gerne mit euren Familien, Freunden und auf euren privaten Social-Media-Kanälen teilen. Ich freue mich dabei immer riesig, wenn ihr mich (z.B. auf Instagram) als Fotograf verlinkt oder namentlich erwähnt!"
  },
  {
    category: "Nutzungsrechte",
    icon: Users,
    question: "Dürfen unsere Dienstleister (Location, Florist, Visagistin) die Fotos für ihre Werbung nutzen?",
    answer: "Da ihr ausschließlich die privaten Nutzungsrechte erwerbt, dürft ihr die Bilder leider nicht einfach an Dritte für deren kommerzielle Werbung weitergeben. Aber keine Sorge: Wenn eure Location, das Make-up-Team oder die Floristen die Bilder für ihre Website oder Instagram nutzen möchten, bittet sie einfach, sich kurz direkt mit mir in Verbindung zu setzen. Ich stelle den Kollegen das Material nach Klärung der Bildrechte (Namensnennung) sehr gerne zur Verfügung!"
  },
  {
    category: "Nutzungsrechte",
    icon: Image,
    question: "Werden unsere Hochzeitsbilder im Internet veröffentlicht? Muss ich das erlauben?",
    answer: "Ich lebe als Fotograf davon, zukünftigen Brautpaaren meine aktuelle Arbeit zu zeigen. Daher biete ich eine Rabattoption in Höhe von 10 % des Paketpreises an um die Fotos zur Eigenwerbung nutzen zu dürfen. Fotos, die ich zur Eigenwerbung verwende, werden ohne Nennung der Nachnamen veröffentlicht. Im Durchschnitt veröffentliche ich weniger als 25% der Hochzeiten, die zur Veröffentlichung frei gegeben wurden.\n\nBei einer Veröffentlichung zeigen wir hauptsächlich Fotos vom Brautpaar, der Location und der Dekoration und nennen niemals eure vollständigen Namen, aber natürlich kommen zur Vervollständigung der Hochzeitsreportage auch einige Fotos mit Gästen in die Auswahl. Eine Beschränkung, dass ausschließlich Fotos des Brautpaares verwendet werden dürfen, würde mich bei der Hochzeitsreportage leider zu sehr einschränken. Logischerweise zeige ich nur ästhetische Bilder. Die Veröffentlichung erfolgt v.a. auf meinen Webseiten und Social Media oder auch in Hochzeitsblogs und in Printmedien.\n\nAber: Das ist absolut freiwillig! Wenn ihr das aus Gründen der Privatsphäre nicht möchtet, respektiere ich das zu 100 %."
  }
];

const CATEGORIES = ["Alle", ...Array.from(new Set(FAQ_DATA.map(item => item.category)))];

const AccordionItem = ({ question, answer, image, isOpen, onClick }: any) => (
  <div className="border-b border-zinc-100 last:border-0">
    <button onClick={onClick} className="w-full py-6 flex justify-between items-center text-left group">
      <span className="text-lg font-serif text-zinc-800 group-hover:text-zinc-500 transition-colors pr-8">{question}</span>
      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-zinc-300 shrink-0">
        <Plus size={20} strokeWidth={1.5} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
          <div className="pb-6 space-y-6">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl whitespace-pre-line">{answer}</p>
            {image && (
              <div className="max-w-md rounded-lg overflow-hidden shadow-md">
                <img src={image} alt="FAQ" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQVariantsMore = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="bg-surface min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">FAQ Kategorien (Teil 2)</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">10 weitere Konzepte (Varianten 6-15)</p>
        </div>

        {/* 6. Dropdown Select (Mobile Friendly) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">6. Dropdown Select (Ideal für Mobile)</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8 max-w-xs mx-auto">
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-zinc-200 rounded-xl px-6 py-4 pr-12 text-sm font-medium outline-none focus:border-zinc-900 transition-colors cursor-pointer shadow-sm"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `dropdown-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `dropdown-${idx}` ? null : `dropdown-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 7. Masonry Grid */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">7. Masonry Grid (Karten-Layout)</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-lg text-sm transition-all",
                  activeCategory === cat ? "bg-zinc-900 text-white" : "bg-white text-zinc-500 hover:bg-zinc-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="columns-1 md:columns-2 gap-6 max-w-5xl mx-auto space-y-6">
            {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm break-inside-avoid">
                <div className="flex items-center gap-3 mb-4 text-zinc-400">
                  <item.icon size={16} />
                  <span className="text-[10px] uppercase tracking-widest">{item.category}</span>
                </div>
                <h3 className="font-serif text-xl mb-4">{item.question}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">{item.answer}</p>
                {item.image && (
                  <img src={item.image} alt="FAQ" className="w-full h-auto rounded-xl mt-6" referrerPolicy="no-referrer" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 8. Folder Tabs */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">8. Folder Tabs (Aktenordner)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto hide-scrollbar pl-4">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-4 rounded-t-2xl text-sm font-medium transition-all -ml-4 relative border border-b-0 border-zinc-200",
                    activeCategory === cat 
                      ? "bg-white text-zinc-900 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]" 
                      : "bg-zinc-100 text-zinc-400 hover:bg-zinc-50 z-0"
                  )}
                  style={{ zIndex: activeCategory === cat ? 10 : CATEGORIES.length - i }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="bg-white p-8 md:p-12 rounded-b-2xl rounded-tr-2xl shadow-sm border border-zinc-200 relative z-10 -mt-[1px]">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `folder-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `folder-${idx}` ? null : `folder-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 9. Timeline Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">9. Timeline Style</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />
            {CATEGORIES.filter(cat => cat !== "Alle").map((cat, catIdx) => (
              <div key={cat} className="mb-20 relative">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-zinc-900 rounded-full -translate-x-1/2 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_var(--bg-surface)]">
                  <span className="text-xs font-mono">{catIdx + 1}</span>
                </div>
                <div className={cn("pl-16 md:pl-0 md:w-1/2", catIdx % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16")}>
                  <h3 className="font-serif text-3xl italic mb-8 pt-1">{cat}</h3>
                  <div className="bg-white p-8 rounded-3xl shadow-sm text-left">
                    {FAQ_DATA.filter(item => item.category === cat).map((item, idx) => (
                      <AccordionItem
                        key={item.question}
                        {...item}
                        isOpen={openIndex === `timeline-${cat}-${idx}`}
                        onClick={() => setOpenIndex(openIndex === `timeline-${cat}-${idx}` ? null : `timeline-${cat}-${idx}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Minimalist Underline */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">10. Minimalist Underline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-8 mb-16 border-b border-zinc-200">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "pb-4 text-sm font-medium transition-all relative",
                    activeCategory === cat ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                  )}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900" />
                  )}
                </button>
              ))}
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `minimal-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `minimal-${idx}` ? null : `minimal-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 11. Hover Reveal Categories */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">11. Hover Reveal (Kategorien als große Blöcke)</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {CATEGORIES.filter(cat => cat !== "Alle").map((cat, i) => (
              <div key={cat} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm min-h-[300px] border border-zinc-100">
                <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center transition-opacity duration-500 group-hover:opacity-0 bg-white z-10">
                  <h3 className="font-serif text-4xl italic mb-4">{cat}</h3>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">Hover to view</p>
                </div>
                <div className="absolute inset-0 p-8 overflow-y-auto bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <h4 className="font-serif text-xl mb-6 border-b border-zinc-200 pb-4">{cat}</h4>
                  <ul className="space-y-4">
                    {FAQ_DATA.filter(item => item.category === cat).map((item, idx) => (
                      <li key={idx} className="text-sm text-zinc-600">
                        <span className="font-medium text-zinc-900 block mb-1">{item.question}</span>
                        <span className="line-clamp-2">{item.answer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Chatbot Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">12. Chatbot Style</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-[3rem] shadow-sm p-8 md:p-12 border border-zinc-100">
            <div className="flex gap-4 mb-8">
              <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-zinc-500" />
              </div>
              <div className="bg-zinc-50 p-4 rounded-2xl rounded-tl-none text-sm text-zinc-700">
                Hey! Zu welchem Thema hast du Fragen?
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-12 pl-14">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs transition-all border",
                    activeCategory === cat ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-2"
              >
                {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                  <AccordionItem
                    key={item.question}
                    {...item}
                    isOpen={openIndex === `chat-${idx}`}
                    onClick={() => setOpenIndex(openIndex === `chat-${idx}` ? null : `chat-${idx}`)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 13. Split Screen Right */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">13. Split Screen (Kategorien Rechts)</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm order-2 md:order-1">
              <h3 className="font-serif text-3xl italic mb-8">{activeCategory}</h3>
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `split-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `split-${idx}` ? null : `split-${idx}`)}
                />
              ))}
            </div>
            <div className="md:col-span-4 order-1 md:order-2">
              <div className="sticky top-40 bg-zinc-900 text-white p-8 rounded-3xl shadow-xl">
                <h4 className="font-serif text-xl mb-6">Themen</h4>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex justify-between items-center",
                        activeCategory === cat ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Tag Cloud */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">14. Tag Cloud</h2>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {CATEGORIES.map((cat, i) => {
                // Randomize sizes slightly for the "cloud" effect, but keep "Alle" large
                const sizeClass = cat === "Alle" ? "text-3xl md:text-5xl" : ["text-xl md:text-2xl", "text-2xl md:text-4xl", "text-lg md:text-xl"][i % 3];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "font-serif italic transition-all hover:scale-105",
                      sizeClass,
                      activeCategory === cat ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-500"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
              <AccordionItem
                key={item.question}
                {...item}
                isOpen={openIndex === `tag-${idx}`}
                onClick={() => setOpenIndex(openIndex === `tag-${idx}` ? null : `tag-${idx}`)}
              />
            ))}
          </div>
        </section>

        {/* 15. Accordion of Accordions */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">15. Accordion of Accordions (Kompakt)</h2>
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-sm">
            {CATEGORIES.filter(cat => cat !== "Alle").map((cat, catIdx) => (
              <div key={cat} className="border-b border-zinc-200 last:border-0">
                <button
                  onClick={() => setActiveCategory(activeCategory === cat ? "Alle" : cat)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="text-2xl font-serif italic text-zinc-900">{cat}</span>
                  <motion.div animate={{ rotate: activeCategory === cat ? 180 : 0 }}>
                    <ChevronDown size={24} className="text-zinc-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeCategory === cat && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-4 md:pl-8 border-l-2 border-zinc-100 ml-2 mt-2">
                        {FAQ_DATA.filter(item => item.category === cat).map((item, idx) => (
                          <AccordionItem
                            key={item.question}
                            {...item}
                            isOpen={openIndex === `nested-${cat}-${idx}`}
                            onClick={() => setOpenIndex(openIndex === `nested-${cat}-${idx}` ? null : `nested-${cat}-${idx}`)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
