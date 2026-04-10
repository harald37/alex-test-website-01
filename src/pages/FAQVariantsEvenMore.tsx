import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Calendar, Camera, Image, Shield, CreditCard, Users, CloudRain, Heart, LayoutGrid, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

// Re-using the exact same data
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

export const FAQVariantsEvenMore = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="bg-surface min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">FAQ Kategorien (Teil 3)</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">Die letzten 10 Konzepte (Varianten 16-25)</p>
        </div>

        {/* 16. Brutalist Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">16. Brutalist (Kantig & Auffällig)</h2>
          <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-wrap gap-4 mb-12 border-b-4 border-black pb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 font-mono font-bold uppercase text-xs border-2 border-black transition-colors",
                    activeCategory === cat ? "bg-black text-white" : "bg-white text-black hover:bg-yellow-400"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <div key={idx} className="border-2 border-black">
                  <button 
                    onClick={() => setOpenIndex(openIndex === `brutalist-${idx}` ? null : `brutalist-${idx}`)}
                    className="w-full p-4 flex justify-between items-center text-left bg-zinc-50 hover:bg-yellow-100 transition-colors"
                  >
                    <span className="font-bold font-sans text-lg">{item.question}</span>
                    <span className="font-mono text-2xl leading-none">{openIndex === `brutalist-${idx}` ? "-" : "+"}</span>
                  </button>
                  {openIndex === `brutalist-${idx}` && (
                    <div className="p-4 border-t-2 border-black bg-white">
                      <p className="font-mono text-sm leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. Terminal Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">17. Terminal / Code Style</h2>
          <div className="max-w-4xl mx-auto bg-zinc-950 rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-xs text-zinc-500">faq.sh</span>
            </div>
            <div className="p-8 font-mono text-sm text-green-400">
              <div className="mb-8">
                <span className="text-zinc-500">$</span> select_category --list<br/>
                <div className="flex flex-wrap gap-4 mt-4">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "hover:text-white transition-colors",
                        activeCategory === cat ? "text-white bg-green-900/50 px-2" : "text-green-600"
                      )}
                    >
                      [{cat}]
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-zinc-500">$</span> fetch_questions --category="{activeCategory}"<br/>
                {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                  <div key={idx} className="pl-4 border-l border-zinc-800">
                    <button 
                      onClick={() => setOpenIndex(openIndex === `term-${idx}` ? null : `term-${idx}`)}
                      className="text-left hover:text-white transition-colors flex gap-2"
                    >
                      <span className="text-zinc-500">{">"}</span> {item.question}
                    </button>
                    {openIndex === `term-${idx}` && (
                      <div className="mt-2 text-zinc-400 whitespace-pre-line pl-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 18. Bottom Sheet (Simulated) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">18. Bottom Sheet (App Style)</h2>
          <div className="max-w-md mx-auto bg-zinc-100 h-[600px] rounded-[3rem] shadow-xl overflow-hidden relative border-8 border-white">
            <div className="p-8 h-full flex flex-col justify-center items-center text-center">
              <h3 className="font-serif text-3xl mb-4">FAQ</h3>
              <p className="text-zinc-500 text-sm mb-8">Wähle ein Thema aus, um die Antworten zu sehen.</p>
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 bg-white rounded-full text-xs shadow-sm hover:shadow-md transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <AnimatePresence>
              {activeCategory !== "Alle" && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute inset-x-0 bottom-0 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] h-[80%] flex flex-col"
                >
                  <div className="p-6 border-b border-zinc-100 flex justify-between items-center shrink-0">
                    <h4 className="font-serif text-xl">{activeCategory}</h4>
                    <button onClick={() => setActiveCategory("Alle")} className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500">
                      <Minus size={16} />
                    </button>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1">
                    {FAQ_DATA.filter(item => item.category === activeCategory).map((item, idx) => (
                      <AccordionItem
                        key={item.question}
                        {...item}
                        isOpen={openIndex === `sheet-${idx}`}
                        onClick={() => setOpenIndex(openIndex === `sheet-${idx}` ? null : `sheet-${idx}`)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 19. Grid of Expanding Cards */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">19. Expanding Cards</h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-4 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-xs transition-all border",
                    activeCategory === cat ? "bg-zinc-900 text-white border-zinc-900" : "bg-transparent text-zinc-500 border-zinc-200 hover:border-zinc-900"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <motion.div 
                  key={idx}
                  layout
                  onClick={() => setOpenIndex(openIndex === `expand-${idx}` ? null : `expand-${idx}`)}
                  className={cn(
                    "bg-white p-8 rounded-3xl shadow-sm cursor-pointer border border-transparent hover:border-zinc-200 transition-colors",
                    openIndex === `expand-${idx}` ? "md:col-span-2" : ""
                  )}
                >
                  <h3 className="font-serif text-xl mb-2 pr-8 relative">
                    {item.question}
                    <ArrowRight size={20} className={cn("absolute right-0 top-1 transition-transform", openIndex === `expand-${idx}` ? "rotate-90" : "")} />
                  </h3>
                  <AnimatePresence>
                    {openIndex === `expand-${idx}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-500 mt-6 whitespace-pre-line leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 20. Carousel Style */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">20. Horizontal Carousel</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-6">
              {CATEGORIES.filter(cat => cat !== "Alle").map(cat => (
                <div key={cat} className="snap-center shrink-0 w-[85vw] md:w-[600px] bg-white p-8 md:p-12 rounded-[2rem] shadow-sm">
                  <h3 className="font-serif text-3xl italic mb-8 border-b border-zinc-100 pb-4">{cat}</h3>
                  <div className="h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    {FAQ_DATA.filter(item => item.category === cat).map((item, idx) => (
                      <AccordionItem
                        key={item.question}
                        {...item}
                        isOpen={openIndex === `carousel-${cat}-${idx}`}
                        onClick={() => setOpenIndex(openIndex === `carousel-${cat}-${idx}` ? null : `carousel-${cat}-${idx}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 21. Sidebar Icons Only */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">21. Sidebar (Nur Icons)</h2>
          <div className="max-w-5xl mx-auto flex gap-8">
            <div className="w-20 shrink-0 bg-white rounded-[2rem] shadow-sm py-8 flex flex-col items-center gap-6 sticky top-40 h-fit">
              {CATEGORIES.map(cat => {
                const Icon = cat === "Alle" ? LayoutGrid : FAQ_DATA.find(item => item.category === cat)?.icon || Camera;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-all group relative",
                      activeCategory === cat ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900"
                    )}
                  >
                    <Icon size={20} />
                    <span className="absolute left-full ml-4 px-3 py-1 bg-zinc-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex-1 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm">
              <h3 className="font-serif text-3xl italic mb-8">{activeCategory}</h3>
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `iconbar-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `iconbar-${idx}` ? null : `iconbar-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 22. Split Screen Hover */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">22. Split Screen Hover (Desktop)</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 min-h-[600px] bg-white rounded-[2rem] shadow-sm overflow-hidden">
            <div className="bg-zinc-900 text-white p-12 flex flex-col justify-center">
              <h3 className="font-serif text-4xl italic mb-12">Themen</h3>
              <div className="space-y-4">
                {CATEGORIES.filter(cat => cat !== "Alle").map(cat => (
                  <div
                    key={cat}
                    onMouseEnter={() => setActiveCategory(cat)}
                    className={cn(
                      "text-2xl md:text-4xl font-serif transition-colors cursor-pointer",
                      activeCategory === cat ? "text-white" : "text-zinc-700 hover:text-zinc-400"
                    )}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 overflow-y-auto">
              {FAQ_DATA.filter(item => item.category === activeCategory || (activeCategory === "Alle" && item.category === CATEGORIES[1])).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `hover-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `hover-${idx}` ? null : `hover-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 23. Sticky Scrollspy (Simulated) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">23. Sticky Header</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden h-[600px] flex flex-col">
            <div className="bg-zinc-50 p-6 border-b border-zinc-200 flex overflow-x-auto hide-scrollbar gap-4 shrink-0">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors",
                    activeCategory === cat ? "bg-zinc-900 text-white" : "bg-white text-zinc-500 hover:bg-zinc-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="p-8 overflow-y-auto flex-1">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `sticky-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `sticky-${idx}` ? null : `sticky-${idx}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 24. Editorial Magazine */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">24. Editorial Magazine</h2>
          <div className="max-w-5xl mx-auto bg-[#fdfbf7] p-12 md:p-20 border-x border-[#e8e4d9]">
            <div className="text-center mb-16">
              <h3 className="font-serif text-5xl md:text-7xl uppercase tracking-widest text-zinc-900 mb-8">The FAQ</h3>
              <div className="flex flex-wrap justify-center gap-6 border-y border-zinc-300 py-6">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "font-serif italic text-lg transition-colors",
                      activeCategory === cat ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-16">
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <div key={idx} className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <h4 className="font-serif text-2xl leading-snug">{item.question}</h4>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-serif text-lg text-zinc-600 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 25. Floating Action Button Menu (Simulated) */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">25. Floating Action Menu (Mobile Style)</h2>
          <div className="max-w-md mx-auto bg-white h-[600px] rounded-[3rem] shadow-xl overflow-hidden relative border-8 border-zinc-100">
            <div className="p-8 overflow-y-auto h-full pb-32">
              <h3 className="font-serif text-3xl italic mb-8">{activeCategory}</h3>
              {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  {...item}
                  isOpen={openIndex === `fab-${idx}`}
                  onClick={() => setOpenIndex(openIndex === `fab-${idx}` ? null : `fab-${idx}`)}
                />
              ))}
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white p-2 rounded-full shadow-2xl flex gap-2">
              {CATEGORIES.filter(cat => cat !== "Alle").map(cat => {
                const Icon = FAQ_DATA.find(item => item.category === cat)?.icon || Camera;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                      activeCategory === cat ? "bg-white text-zinc-900" : "hover:bg-zinc-800"
                    )}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
