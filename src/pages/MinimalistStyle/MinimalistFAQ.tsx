import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Wie weit im Voraus sollten wir dich für unsere Hochzeit anfragen?",
    answer: "Am besten meldet ihr euch direkt bei mir, sobald euer Hochzeitsdatum und eure Location feststehen. Besonders für Termine an Samstagen in der Hauptsaison (Mai bis Oktober) bin ich oft schon 9 bis 12 Monate im Voraus ausgebucht. Da ich nach dem \"First come, first serve\"-Prinzip arbeite, sichert ein frühzeitiges Kennenlernen euren Wunschtermin."
  },
  {
    question: "Können wir uns vor der festen Buchung persönlich kennenlernen?",
    answer: "Unbedingt! Mir ist es extrem wichtig, dass die Chemie zwischen uns zu 100 % stimmt, da ich euch an eurem intimsten und emotionalsten Tag begleite. Wir können uns sehr gerne ganz unverbindlich bei mir in Hannover Misburg treffen oder uns per Video-Call austauschen. Erst wenn wir beide merken, dass wir absolut auf einer Wellenlänge sind, machen wir die Buchung vertraglich fix."
  },
  {
    question: "Begleitest du auch Hochzeiten außerhalb Hannover und wie hoch sind die Fahrtkosten?",
    answer: "Ja, ich liebe es zu reisen und begleite Hochzeiten in ganz Deutschland und für Destination Weddings sogar weltweit! Die ersten 50 Kilometer ab meinem Standort sind im Paketpreis bereits komplett inklusive. Für jeden weiteren gefahrenen Kilometer berechne ich lediglich eine faire Pauschale von 0,40 Euro. Bei Distanzen über 150 Kilometern besprechen wir individuelle Lösungen für eine einfache, günstige Hotelübernachtung."
  },
  {
    question: "Siehst du dir die Hochzeitslocation vor dem großen Tag an?",
    answer: "Eine persönliche Vorabbesichtigung der Location ist meistens nicht zwingend notwendig. Oft ändert sich das Licht durch den Sonnenstand oder das Wetter am Hochzeitstag ohnehin. Ich bin sehr erfahren darin, mich schnell auf neue Umgebungen einzustellen und treffe am Hochzeitstag immer frühzeitig ein, um die besten Spots für unser Paarshooting und die Gruppenbilder im perfekten Licht zu scouten. Gerne könnt ihr mir vorab Bilder Location und Umgebung schicken, damit wir schon vorab schöne Spots ausfindig machen können."
  },
  {
    question: "Kommst du alleine oder arbeitest du mit einem Zweitfotografen (Second Shooter) oder einer Assistenz?",
    answer: "In der Regel begleite ich eure Hochzeit alleine und habe weitreichende Erfahrung darin, alle wichtigen Perspektiven souverän einzufangen. Bei sehr großen Hochzeitsgesellschaften (ab ca. 100 Gästen) oder wenn ihr möchtet, dass das Getting-Ready von Braut und Bräutigam morgens zeitgleich an verschiedenen Orten dokumentiert wird, empfehle ich die Hinzubuchung eines erfahrenen Zweitfotografen aus meinem professionellen Netzwerk.\n\nOptional kann ich euch anbieten meine Freundin Katharina als Assistenz mitzubringen. Eine Assistenz entlastet den Fotografen bei der Logistik und Gästekoordination, sodass dieser sich voll auf die künstlerische Arbeit konzentrieren kann. Zudem ermöglicht sie durch zusätzliche Perspektiven eine lückenlose Dokumentation und bietet technische Sicherheit in unwiederholbaren Momenten. Beim Paarshooting fungiert die Assistenz als wertvolles zweites Paar Augen für die Details. Während der Fotograf sich auf Licht, Komposition und Emotionen konzentriert, achtet die Assistenz darauf, dass Haare und Make-up perfekt sitzen, richtet die Schleppe des Brautkleids und zupft störende Falten im Anzug zurecht."
  },
  {
    question: "Wie viele Bilder erhalten wir von unserer Hochzeit?",
    answer: "Das hängt immer davon ab, wie viel an eurem Tag passiert und wie viele Gäste ihr habt. Als Richtwert: Pro Stunde könnt ihr mit 50 bis 100 final bearbeiteten Bildern rechnen. Ich sortiere unvorteilhafte Bilder, Testschüsse oder geschlossene Augen vorab sorgfältig aus. Ihr bekommt von mir keine überfüllte Festplatte mit anstrengenden Dopplungen, sondern eine liebevoll kuratierte Galerie."
  },
  {
    question: "Bearbeitest du alle Fotos und bekommen wir auch die unbearbeiteten RAW-Dateien?",
    answer: "Jedes einzelne Foto, das ihr von mir erhaltet, ist professionell in meinem charakteristischen Bildstil bearbeitet (Feinschliff von Belichtung, Farbgebung, Kontrasten und Bildschnitt). Unbearbeitete RAW-Dateien gebe ich grundsätzlich nicht heraus. Sie sind wie die rohen Zutaten in einer Sterneküche – erst durch meine Bearbeitung entsteht das finale Kunstwerk, für das ihr mich gebucht habt. Durch die neusten Bildbearbeitungswerkzeuge und KI-Tools habe ich viele Möglichkeiten auf eure individuellen Wünsche einzugehen."
  },
  {
    question: "Retuschierst du uns dünner oder entfernst du Falten auf den Fotos?",
    answer: "Mein Fokus liegt auf dokumentarischer, echter und authentischer Fotografie. Ich optimiere Farben und Licht, um euch im besten Glanz erstrahlen zu lassen, und entferne gerne temporäre Dinge wie einen störenden Pickel oder einen blauen Fleck. Ich verändere jedoch keine Körperformen (\"Beauty-Retusche\"), mache niemanden künstlich dünner und bügele keine Lachfalten weg. Ihr seid wunderschön, genau so wie ihr seid! Solltet ihr dennoch dringende Anpassungswünsche haben, habe ich mit den neusten Bildbearbeitungswerkzeugen und KI-Tools sehr viele Möglichkeiten eure Wünsche zu verwirklichen."
  },
  {
    question: "Bietest du auch ein Kennenlern-Shooting (Engagement-Shooting) vor der Hochzeit an?",
    answer: "Sehr gerne! Ein Engagement-Shooting ein paar Monate vor der Hochzeit ist die absolut perfekte Gelegenheit, um die Scheu vor der Kamera abzulegen und uns in Action besser kennenzulernen. Es fühlt sich eher an wie ein entspannter Spaziergang in der Natur. Die professionellen Bilder, die dabei entstehen, könnt ihr zudem ideal für eure \"Save the Date\"- oder Einladungskarten nutzen."
  },
  {
    question: "Wie viel Zeit sollten wir am Hochzeitstag für das Paarshooting und Gruppenfotos einplanen?",
    answer: "Für das Paarshooting solltet ihr idealerweise 45 bis 60 Minuten einplanen. Sehr gerne können wir das auch aufteilen: 30 Minuten am Nachmittag und 20 Minuten während des magischen Sonnenuntergangs (\"Golden Hour\"). Für die Gruppenfotos hängt die Dauer natürlich von der Anzahl der Gäste und der Anzahl der Konstellationen ab. Ich empfehle eine Liste mit maximal 10-15 festen Konstellationen vorzubereiten. Delegiert das Einsammeln der Gäste an eure Trauzeugen – so sind wir in entspannten 15 bis 20 Minuten durch!"
  },
  {
    question: "Wie gehst du mit Gästen um, die während der Trauung selbst fotografieren wollen?",
    answer: "Ich bin sehr entspannt und habe grundsätzlich nichts gegen fotografierende Gäste. Allerdings empfehle ich euch von Herzen eine \"Unplugged Ceremony\" – also eine Trauung komplett ohne Handys und Kameras. Eure Gäste sind viel präsenter, ihr blickt beim Einzug in emotionale, weinende oder lachende Gesichter statt auf Displays, und ich habe freie Bahn für ungestörte, wunderschöne Aufnahmen. Baut dafür einfach ein kleines Schild am Eingang auf oder lasst euren Trauredner eine kurze Ansage machen!"
  },
  {
    question: "Wir stehen nicht gerne vor der Kamera und fühlen uns unfotogen. Ist das ein Problem?",
    answer: "Überhaupt nicht, das höre ich tatsächlich von 90 % meiner Paare! Keine Sorge, ihr müsst keine professionellen Models sein. Mein Ansatz ist rein dokumentarisch. Ich zwinge euch in keine steifen Katalog-Posen und ihr müsst nicht auf Kommando lächeln. Seid einfach ihr selbst, fokussiert euch aufeinander, geht ein Stück spazieren und ignoriert mich weitestgehend. Ich fange die echten, ungestellten Momente ein – ganz ohne Druck und Stress."
  },
  {
    question: "Was passiert, wenn es an unserem Hochzeitstag regnet? Fallen die Fotos dann ins Wasser?",
    answer: "Lasst euch vom Wetterbericht bloß nicht die Laune verderben! Entgegen der landläufigen Meinung liefert ein wolkiger Himmel das weichste und schmeichelhafteste Licht für Porträts (keine harten Schatten im Gesicht). Sollte es wirklich regnen, schnappen wir uns coole, transparente Regenschirme oder nutzen schöne überdachte Bereiche eurer Location. Schlechtes Wetter ist oft eine echte Chance für dramatische, einzigartige und epische Bilder, die sonst niemand hat!",
    image: "https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_2400/v1775495572/hochzeitspaar-unter-regenschirm-in-der-natur-schloss-salder-salzgitter.webp"
  },
  {
    question: "Was passiert bei einem Notfall, wenn du am Hochzeitstag krank wirst?",
    answer: "Dass ich ausfalle, ist glücklicherweise in meiner bisherigen Karriere noch nie passiert. Sollte es durch höhere Gewalt oder plötzliche, schwere Krankheit dennoch eintreten, lasse ich euch nicht allein. Ich bin extrem gut in einem starken Netzwerk professioneller Fotografen-Kollegen vernetzt, die einen identischen Qualitätsanspruch und Bildstil haben. Ich versuche mich schnellstmöglich um einen adäquaten, verlässlichen Ersatz für euch zu kümmern."
  },
  {
    question: "Wann und wie müssen wir bezahlen? Wird eine Anzahlung fällig?",
    answer: "Um euren Hochzeitstermin fest und verbindlich in meinem Kalender zu reservieren, wird mit der Vertragsunterzeichnung eine Terminreservierungsgebühr (Anzahlung) in Höhe von 30 % des Paketpreises fällig. Die Restsumme stellt absolut keinen Stress am Hochzeitstag dar – ihr bekommt ganz entspannt nach eurer Hochzeit eine Rechnung per E-Mail, die ihr bequem innerhalb von 7 Tagen überweisen könnt."
  },
  {
    question: "Wann und in welcher Form erhalten wir unsere fertigen Hochzeitsfotos?",
    answer: "Die finale, liebevolle Bildbearbeitung ist ein zeitintensiver Prozess und dauert in der Hochsaison in der Regel 4 bis 6 Wochen. Aber keine Sorge: Bereits 2 Tage nach der Hochzeit erhaltet ihr von mir ein kleines \"Sneak Peek\" mit euren Top 10 bis 15 Highlights für erste Danksagungen oder Social Media! Die fertigen Bilder bekommt ihr dann alle in höchster Auflösung über eine passwortgeschützte Online-Galerie zum Download."
  },
  {
    question: "Erhalten unsere Fotos ein störendes Wasserzeichen oder Logo?",
    answer: "Nein, definitiv nicht. Ihr erhaltet alle eure bearbeiteten Hochzeitsfotos in höchster Druckauflösung und völlig frei von störenden Logos, Schriftzügen oder Wasserzeichen. Ihr sollt die Bilder ungestört genießen und euch große Leinwände in euer Wohnzimmer hängen können, ohne dass mein Name quer über dem Bild steht."
  },
  {
    question: "Dürfen wir die Bilder auf unseren Social Media Profilen posten und teilen?",
    answer: "Ja, absolut! Ihr erhaltet von mir die vollen, uneingeschränkten privaten Nutzungsrechte für eure Bilder. Ihr dürft und sollt die Fotos sehr gerne mit euren Familien, Freunden und auf euren privaten Social-Media-Kanälen teilen. Ich freue mich dabei immer riesig, wenn ihr mich (z.B. auf Instagram) als Fotograf verlinkt oder namentlich erwähnt!"
  },
  {
    question: "Dürfen unsere Dienstleister (Location, Florist, Visagistin) die Fotos für ihre Werbung nutzen?",
    answer: "Da ihr ausschließlich die privaten Nutzungsrechte erwerbt, dürft ihr die Bilder leider nicht einfach an Dritte für deren kommerzielle Werbung weitergeben. Aber keine Sorge: Wenn eure Location, das Make-up-Team oder die Floristen die Bilder für ihre Website oder Instagram nutzen möchten, bittet sie einfach, sich kurz direkt mit mir in Verbindung zu setzen. Ich stelle den Kollegen das Material nach Klärung der Bildrechte (Namensnennung) sehr gerne zur Verfügung!"
  },
  {
    question: "Werden unsere Hochzeitsbilder im Internet veröffentlicht? Muss ich das erlauben?",
    answer: "Ich lebe als Fotograf davon, zukünftigen Brautpaaren meine aktuelle Arbeit zu zeigen. Daher biete ich eine Rabattoption in Höhe von 10 % des Paketpreises an um die Fotos zur Eigenwerbung nutzen zu dürfen. Fotos, die ich zur Eigenwerbung verwende, werden ohne Nennung der Nachnamen veröffentlicht. Im Durchschnitt veröffentliche ich weniger als 25% der Hochzeiten, die zur Veröffentlichung frei gegeben wurden.\n\nBei einer Veröffentlichung zeigen wir hauptsächlich Fotos vom Brautpaar, der Location und der Dekoration und nennen niemals eure vollständigen Namen, aber natürlich kommen zur Vervollständigung der Hochzeitsreportage auch einige Fotos mit Gästen in die Auswahl. Eine Beschränkung, dass ausschließlich Fotos des Brautpaares verwendet werden dürfen, würde mich bei der Hochzeitsreportage leider zu sehr einschränken. Logischerweise zeige ich nur ästhetische Bilder. Die Veröffentlichung erfolgt v.a. auf meinen Webseiten und Social Media oder auch in Hochzeitsblogs und in Printmedien.\n\nAber: Das ist absolut freiwillig! Wenn ihr das aus Gründen der Privatsphäre nicht möchtet, respektiere ich das zu 100 %."
  }
];

const AccordionItem = ({ question, answer, image, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-[#141414]/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-[#141414] group-hover:text-[#141414]/60 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#141414]/40"
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
              <p className="max-w-3xl text-[#141414]/70 text-base md:text-lg leading-relaxed whitespace-pre-line">
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

export const MinimalistFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-[#f5f2ed] text-[#141414] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[#141414]">Häufig gestellte Fragen</h1>
          <p className="text-[#141414]/40 tracking-widest uppercase text-xs md:text-sm">Alles, was ihr wissen müsst</p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm">
          {FAQ_DATA.map((item, idx) => (
            <AccordionItem
              key={idx}
              {...item}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
