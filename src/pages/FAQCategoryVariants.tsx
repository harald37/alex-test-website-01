import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Calendar, Camera, Image, Shield, CreditCard, Users, CloudRain, Heart, ChevronDown, LayoutGrid } from "lucide-react";
import { cn } from "../lib/utils";

// Exakt die gleichen Daten wie in den anderen FAQ Dateien
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

// Exakt das gleiche AccordionItem wie in FAQ 1 (Classic Tabs)
const AccordionItem = ({ question, answer, image, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-zinc-800 group-hover:text-zinc-500 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-zinc-400"
        >
          <Plus aria-label="Antwort anzeigen" className="w-6 h-6" strokeWidth={1} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-6">
              <p className="max-w-3xl text-zinc-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {answer}
              </p>
              {image && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl rounded-xl overflow-hidden shadow-lg"
                >
                  <img 
                    src={image} 
                    alt="FAQ Illustration" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQCategoryVariants = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  // Helper to render the FAQ list so we don't repeat it 10 times
  const renderFAQList = (prefix: string) => (
    <div className="max-w-4xl mx-auto">
      {FAQ_DATA.filter(item => activeCategory === "Alle" || item.category === activeCategory).map((item, idx) => (
        <AccordionItem
          key={item.question}
          {...item}
          isOpen={openIndex === `${prefix}-${idx}`}
          onClick={() => setOpenIndex(openIndex === `${prefix}-${idx}` ? null : `${prefix}-${idx}`)}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-surface min-h-screen pb-32">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        <div className="mb-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl italic mb-4">FAQ Kategorie-Layouts</h1>
          <p className="font-sans uppercase tracking-widest text-[10px] text-zinc-400">10 neue Anordnungen für die Kategorie-Auswahl (mit dem Style von FAQ 1)</p>
        </div>

        {/* 1. Floating Pill Menu */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">1. Floating Pill Menu (Zentriert)</h2>
          <div className="max-w-4xl mx-auto mb-16 flex justify-center sticky top-24 z-50">
            <div className="bg-white/80 backdrop-blur-md border border-zinc-200 p-1.5 rounded-full shadow-lg flex overflow-x-auto hide-scrollbar max-w-full">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                    activeCategory === cat ? "bg-zinc-900 text-white shadow-md" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('pill')}
        </section>

        {/* 2. Left Sidebar Navigation */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">2. Left Sidebar Navigation</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <h3 className="font-serif text-3xl mb-8">Themen</h3>
              <div className="flex flex-col space-y-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "text-left px-6 py-4 rounded-xl text-lg transition-all border",
                      activeCategory === cat ? "bg-zinc-900 text-white border-zinc-900 shadow-md" : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              {renderFAQList('sidebar')}
            </div>
          </div>
        </section>

        {/* 3. Large Typography Header */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">3. Large Typography Header</h2>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "font-serif text-3xl md:text-5xl transition-all duration-500",
                    activeCategory === cat ? "text-zinc-900 italic" : "text-zinc-300 hover:text-zinc-500"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('typography')}
        </section>

        {/* 4. Grid of Cards */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">4. Grid of Icon Cards</h2>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map(cat => {
                const Icon = cat === "Alle" ? LayoutGrid : FAQ_DATA.find(item => item.category === cat)?.icon || Camera;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "flex flex-col items-center justify-center p-6 rounded-2xl border transition-all aspect-square",
                      activeCategory === cat ? "bg-zinc-900 text-white border-zinc-900 shadow-lg scale-105" : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                    )}
                  >
                    <Icon size={24} className="mb-3" />
                    <span className="text-xs font-medium text-center">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {renderFAQList('cards')}
        </section>

        {/* 5. Segmented Control */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">5. Segmented Control (iOS Style)</h2>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-zinc-200/50 p-1.5 rounded-2xl flex flex-wrap md:flex-nowrap gap-1">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    activeCategory === cat ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('segmented')}
        </section>

        {/* 6. Vertical Line Timeline */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">6. Vertical Line Timeline</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-3 relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-zinc-200" />
              <div className="space-y-8 relative">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="flex items-center gap-6 w-full text-left group"
                  >
                    <div className={cn(
                      "w-6 h-6 rounded-full border-4 flex-shrink-0 transition-all z-10",
                      activeCategory === cat ? "bg-zinc-900 border-zinc-100 scale-125" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                    )} />
                    <span className={cn(
                      "text-lg transition-all",
                      activeCategory === cat ? "font-serif italic text-zinc-900 text-xl" : "text-zinc-500 group-hover:text-zinc-700"
                    )}>
                      {cat}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-9">
              {renderFAQList('timeline')}
            </div>
          </div>
        </section>

        {/* 7. Minimalist Dots */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">7. Minimalist Dots</h2>
          <div className="max-w-4xl mx-auto mb-20 flex justify-center">
            <div className="flex items-center gap-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="group relative flex flex-col items-center justify-center w-12 h-12"
                >
                  <div className={cn(
                    "rounded-full transition-all duration-300",
                    activeCategory === cat ? "w-3 h-3 bg-zinc-900" : "w-2 h-2 bg-zinc-300 group-hover:bg-zinc-500 group-hover:w-3 group-hover:h-3"
                  )} />
                  <span className={cn(
                    "absolute top-full mt-2 text-xs whitespace-nowrap transition-all duration-300",
                    activeCategory === cat ? "opacity-100 font-medium text-zinc-900" : "opacity-0 group-hover:opacity-100 text-zinc-500"
                  )}>
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('dots')}
        </section>

        {/* 8. Modern Dropdown */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">8. Modern Dropdown Select</h2>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative max-w-sm mx-auto">
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none bg-white border-2 border-zinc-900 rounded-none px-6 py-4 pr-12 text-lg font-serif italic text-zinc-900 outline-none focus:ring-4 focus:ring-zinc-100 transition-all cursor-pointer"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-900 pointer-events-none" size={24} />
            </div>
          </div>
          {renderFAQList('dropdown')}
        </section>

        {/* 9. Numbered List */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">9. Numbered List</h2>
          <div className="max-w-5xl mx-auto mb-16 border-t border-zinc-200">
            <div className="flex flex-wrap">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex-1 min-w-[200px] p-6 text-left border-b border-zinc-200 transition-all group",
                    activeCategory === cat ? "bg-zinc-50" : "hover:bg-zinc-50/50"
                  )}
                >
                  <span className={cn(
                    "text-xs font-mono mb-2 block transition-colors",
                    activeCategory === cat ? "text-zinc-900 font-bold" : "text-zinc-400 group-hover:text-zinc-600"
                  )}>
                    0{idx + 1}
                  </span>
                  <span className={cn(
                    "text-lg transition-colors",
                    activeCategory === cat ? "font-serif italic text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
                  )}>
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('numbered')}
        </section>

        {/* 10. Horizontal Scroll Chips */}
        <section className="mb-40">
          <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">10. Horizontal Scroll Chips</h2>
          <div className="w-full mb-16 overflow-hidden">
            <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 md:justify-center pb-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-4 rounded-2xl text-sm font-medium transition-all whitespace-nowrap shrink-0 border-2",
                    activeCategory === cat ? "border-zinc-900 text-zinc-900 bg-zinc-50" : "border-transparent bg-white text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {renderFAQList('chips')}
        </section>

      </div>
    </div>
  );
};
