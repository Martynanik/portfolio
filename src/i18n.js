import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
    .use(initReactI18next)
    .init({
        debug: true,
        resources: {
            en: {
                logo: {
                    "position": "Junior developer"
                },
                toolbar: {
                    "work": "Work",
                    "about": "About",
                    "contact": "Contact",
                    "faq": "FAQ"
                },
                work: {
                    "chat": "Chatting app",
                    "ticket": "Ticket booking app",
                    "tamagotchi": "Tamagotchi game",
                    "plant": "Plant watering game",
                    "recipe": "Recipe fetching app"
                },
                home: {
                    "first": "Hello! My name is Martyna Nikšaitė, a junior front-end developer based in Lithuania. I specialize in creating simple, minimalistic websites with a main focus on user experience and clean design. My guiding principle is that simplicity is the key.",
                    "second": "In addition to my love of technology and design, I am also interested in languages, history and have a huge passion for travelling.",

                },
                contact: {
                    "contactQuestion": "Want a visually appealing, user-friendly website that you can take control of and update yourself?",
                    "reachOut": "Reach out to me today!"
                },
                faq: {
                    "questionOne": "Which programming language do you work with?",
                    "answerOne": "I chose to work with JavaScript because of its dominance in web development, its robust ecosystem, and the availability of powerful tools like React and Node.js, all backed by a vast developer community.",
                    "questionTwo": "Where did you get inspiration for this particular website?",
                    "answerTwo": "I personally prefer simple, minimalistic website designs that are not overly crowded and is easy to navigate in order to provide best user experience. Then it come to design I was mostly inspired by Keita Yamada work.",
                    "questionThree": "Where can I find more of your work?",
                    "answerThree": "You can visit my GitHub on this ",
                    "link": "link"
                },
                about: {
                    "institutionOne": "Vilnius University",
                    "positionOne": "Student",
                    "universityOne": "Bachelor in Scandinavian studies",
                    "universityTwo": "Participated in international student exchange",
                    ////GIRILE
                    "institutionTwo": "UAB Girile",
                    "positionTwo": "Team manager",
                    "girileOne": "Demonstrated ability in increasing team performance",
                    "girileTwo": "Performed extensive staff training, resulting in improved output",
                    "girileThree": "Promoted team collaboration resulting in innovative solutions",
                    "girileFour": "Adapt in motivating team members to achieve high standards",
                    ////SWEDBANK
                    "institutionThree": "Swedbank",
                    "positionThree": "Lending Operations",
                    "swedbankOne": "Experience in quality control resulting in improved product standards",
                    "swedbankTwo": "Consistently prioritised tasks to meet tight deadlines",
                    "swedbankThree": "Managed and administered housing loan documentation",
                    "swedbankFour": "Acquired experience in real estate financing",
                    "swedbankFive": "Prepared, reviewed, and disbursed loan agreements",
                    "swedbankSix": "Maintained communication with Swedish customers and document preparation",
                    /////CODE ACADEMY
                    "institutionFour": "Code Academy",
                    "positionFour": "FrontEnd TypeScript course",
                    "courseOne": "HTML: Mastered the fundamentals of structuring and organizing web content with semantic markup",
                    "courseTwo": "Bootstrap: Gained expertise in building responsive, mobile-first web pages using Bootstrap's pre-built components and grid system",
                    "courseThree": "CSS: Developed skills in styling, layout techniques, and creating responsive designs that adapt seamlessly to different devices.",
                    "courseFour": "JavaScript: Acquired a strong foundation in JavaScript, enabling the creation of dynamic, interactive web applications",
                    "courseFive": "TypeScript: Enhanced my coding practices with TypeScript, leveraging static typing for more reliable and maintainable development",
                    "courseSix": "React: Learned to build user interfaces using React's component-based architecture and effectively manage application state",
                    "courseSeven": "Next.js: Explored server-side rendering and static site generation with Next.js, optimizing web applications for performance and SEO",
                    "courseEight": "Node.js: Developed backend skills with Node.js, building scalable server-side applications in JavaScript",
                    "courseNine": "MongoDB: Gained proficiency in working with MongoDB, creating and managing NoSQL databases for efficient data handling"
                },
            },
            lt: {
                logo: {
                    "position": "Jaunesnioji programuotoja"
                },
                toolbar: {
                    "work": "Darbai",
                    "about": "Apie",
                    "contact": "Susisiekite",
                    "faq": "DUK"
                },
                work: {
                    "chat": "Susirašinėjimo svetainė",
                    "ticket": "Bilietų užsakinėjimas",
                    "tamagotchi": "Tamagotchi žaidimas",
                    "plant": "Augalų laistymo žaidimas",
                    "recipe": "Receptų puslapis"
                },
                home: {
                    "first" :"Sveiki! Mano vardas Martyna Nikšaitė, esu pradedančioji programuotoja iš Lietuvos. Specializuojuosi kuriant paprastas, minimalistines svetaines, daug dėmesio skiriu naudotojų patirčiai ir švariam dizainui. Savo darbuose vadovaujuosi principu \"simplicity is the key\".",
                    "second": "Be meilės technologijoms ir dizainui, taip pat domiuosi kalbomis, istorija ir turiu didžiuliulę aistrą keliauti.",
                },
                contact: {
                    "contactQuestion": "Norite vizualiai patrauklios, patogios svetainės, kurią galėtumėte valdyti ir atnaujinti patys?",
                    "reachOut": "Susiekite su manimi dabar!"
                },
                faq: {
                    "questionOne": "Su kuria programavimo kalba dirbi?",
                    "answerOne": "Pasirinkau dirbti su JavaScript kalba dėl jos dominuojančios pozicijos tinklalapių kūrimo procese, didelės kūrėjų bendruomenė ir galingų įrankių, tokių kaip „React“ ir „Node.js“ prieinamumo.",
                    "questionTwo": "Kas tave ikvepė kuriant šį puslapio dizainą?",
                    "answerTwo": "Asmeniškai man labiau patinka paprastas, minimalistinis svetainių dizainas, kuris nėra perkrautas bei jame lengva naviguoti, taip siekiant užtikrinti geriausia vartotojo patirtį. Kalbant apie dizainą, mane labiausiai įkvėpė Keitos Yamada darbai.",
                    "questionThree": "Kur galėčiau rasti daugiau tavo darbų?",
                    "answerThree": "Galite apsilankyti mano GitHub svetainėje paspaudus ant šios ",
                    "link": "nuorodos"
                },
                about: {
                    "institutionOne": "Vilnius University",
                    "positionOne": "Studentė",
                    "universityOne": "Skandinavistikos magistro studijos",
                    "universityTwo": "Dalyvavau tarpatutinėje mainų programoje Švedijoje metus laiko",
                    ////GIRILE
                    "institutionTwo": "UAB Girile",
                    "positionTwo": "Komandos vadovė",
                    "girileOne": "Parodytas gebėjimas didinti komandos darbo našumą",
                    "girileTwo": "Atlikau personalo mokymus, kuris pagerino darbo rezultatus",
                    "girileThree": "Gebu motyvuoti komandos narius siekiant aukštesnių rezultatų",
                    ////SWEDBANK
                    "institutionThree": "Swedbank",
                    "positionThree": "Švedų kalbos specialistė",
                    "swedbankOne": "Tvarkiau ir administravau būsto paskolų dokumentaciją",
                    "swedbankTwo": "Nuolat prioritetizavau užduotis, kad spėčiau įvykdyti griežtus terminus",
                    "swedbankThree": "Patirtis kokybės kontrolėje, kuri pagerino paslaugų standartus",
                    "swedbankFour": "Įgijau patirties nekilnojamojo turto finansavime",
                    "swedbankFive": "Rengiau, peržiūrėjau ir išmokėjau paskolų sutartis",
                    "swedbankSix": "Palaikiau ryšį su Švedijos klientais ir rengiau jiems dokumentus",
                    /////CODE ACADEMY
                    "institutionFour": "Code Academy",
                    "positionFour": "FrontEnd TypeScript kursas",
                    "courseOne": "HTML: Įvaldytos pagrindinės žinios apie internetinio turinio struktūrizavimą ir organizavimą ",
                    "courseTwo": "Bootstrap: Įgyta patirtis kuriant responsyvius, \"mobile-first\" tinklalapius naudojant Bootstrap iš anksto sukurtus komponentus",
                    "courseThree": "CSS: Išvystytas gebėjimas stilizuoti, taikyti maketavimo technikas ir kurti dizainus, kurie sklandžiai prisitaiko prie skirtingų įrenginių",
                    "courseFour": "JavaScript: Įgytas stiprus pagrindas JavaScript programavimo kalboje, leidžiantis kurti dinamines ir interaktyvius internetinius puslapius",
                    "courseFive": "TypeScript: Patobulinti kodavimo įgūdžiai naudojant TypeScript, pritaikant statinį tipavimą patikimesniam ir lengviau prižiūrimam programavimui",
                    "courseSix": "React: Išmokau naudoti React komponentinę architektūrą ir efektyviai valdyti programos būseną",
                    "courseSeven": "Next.js: Ištyrinėjau serverio pusės atvaizdavimą ir statinė svetainių generaciją naudojant Next.js, optimizuojant puslapių našumą",
                    "courseEight": "Node.js: Igyjau backend įgūdžių su Node.js, kuriant \"server-side\" programas JavaScript kalba",
                    "courseNine": "MongoDB: Įgyta kompetencija dirbant su MongoDB, kuriant ir valdant NoSQL duomenų bazes efektyviam duomenų tvarkymui"

                }

            },
            se: {
                logo: {
                    "position": "Webbutvecklare"
                },
                toolbar: {
                    "work": "Mina projekt",
                    "about": "Om mig",
                    "contact": "Kontakt",
                    "faq": "Vanliga frågor"

                },
                work: {
                    "chat": "Chattapp",
                    "ticket": "Biljettbokningsapp",
                    "tamagotchi": "Tamagotchi spel",
                    "plant": "Växt vattning spel",
                    "recipe": "Recept webbsida"
                },
                home: {
                    "first" :"Hej! Jag heter Martyna Nikšaitė, jag är en nybörjarprogrammerare från Litauen. Jag  fokuserar på att skapa enkla, minimalistiska webbsidor med stort fokus på användarupplevelse och ren design. Mitt moto  är \"simplicity is the key\".",
                    "second": "Förutom mitt intresse för teknik och design, är jag också väldigt intresserad av språk och historia, och jag älskar verkligen att resa.",
                },
                contact: {
                    "contactQuestion": "Vill du ha en snygg och användarvänlig webbplats som du själv kan hantera och uppdatera?",
                    "reachOut": "Hör av dig idag!"
                },
                faq: {
                    "questionOne": "Vilka programmeringsspråk jobbar du med?",
                    "answerOne": "Jag har valt att arbeta med JavaScript på grund av dess starka ställning inom webbutveckling, det robusta ekosystemet och de kraftfulla verktygen som React och Node.js, samt den stora utvecklargemenskapen som finns.",
                    "questionTwo": "Varifrån fick du inspiration för just den här webbplatsen?",
                    "answerTwo": "Jag föredrar personligen enkla och minimalistiska webbdesigns som inte är för röriga och är lätta att navigera för bästa användarupplevelse. När det kommer till design inspirerades jag mest av Keita Yamadas arbete.",
                    "questionThree": "Var kan jag hitta mer av ditt arbete?",
                    "answerThree": "Du kan besöka min GitHub via denna ",
                    "link": "länk"
                },
                about: {
                    "institutionOne": "Vilnius Universitet",
                    "positionOne": "Student",
                    "universityOne": "Kandidatexamen i Skandinaviska studier",
                    "universityTwo": "Deltog i internationellt studentutbyte",
                    ////GIRILE
                    "institutionTwo": "UAB Girile",
                    "positionTwo": "Teamledare",
                    "girileOne": "Visade förmåga att öka kollegornas motivation",
                    "girileTwo": "Genomförde omfattande personalutbildning, vilket resulterade i förbättrad produktion",
                    "girileThree": "Främjade teamsamarbete som resulterade i innovativa lösningar",
                    "girileFour": "Lyckades motivera kollegor att uppnå högre mål."
                    ,
                    ////SWEDBANK
                    "institutionThree": "Swedbank",
                    "positionThree": "Låneavdelningen",
                    "swedbankOne": "Erfarenhet av kvalitetskontroll, vilket ledde till förbättrade produktstandarder",
                    "swedbankTwo": "Prioriterade uppgifter för att möta strikta tidsfrister",
                    "swedbankThree": "Hanterade och administrerade bostadslånedokumentation",
                    "swedbankFour": "Fick erfarenhet inom fastighetsfinansiering",
                    "swedbankFive": "Förberedde, granskade och distribuerade låneavtal",
                    "swedbankSix": "Upprätthöll kommunikation med svenska kunder och dokumentförberedelser",
                    /////CODE ACADEMY
                    "institutionFour": "Code Academy",
                    "positionFour": "FrontEnd TypeScript-kurs",
                    "courseOne": "HTML: Behärskade grunderna i att strukturera och organisera webbinnehåll med semantisk markup",
                    "courseTwo": "Bootstrap: Fick erfarenhet i att bygga responsiva, mobilanpassade webbsidor med Bootstraps förbyggda komponenter och gridsystem",
                    "courseThree": "CSS: Utvecklade färdigheter i styling, layouter och skapandet av responsiva designlösningar som anpassar sig sömlöst till olika enheter.",
                    "courseFour": "JavaScript: Förvärvade en stark grund i JavaScript, vilket möjliggör skapandet av dynamiska, interaktiva webbapplikationer",
                    "courseFive": "TypeScript: Förbättrade mina kunskap med TypeScript genom att använda statisk typning för mer tillförlitlig och underhållbar utveckling",
                    "courseSix": "React: Lärde mig bygga användargränssnitt med Reacts komponentbaserade arkitektur och hantera applikationsstatus effektivt",
                    "courseSeven": "Next.js: Utforskade server-side rendering och statisk webbplatsgenerering med Next.js, vilket optimerade webbapplikationers prestanda och SEO",
                    "courseEight": "Node.js: Utvecklade backend-färdigheter med Node.js, genom att bygga skalbara serverapplikationer i JavaScript",
                    "courseNine": "MongoDB: Förvärvade kompetens i att arbeta med MongoDB, skapa och hantera NoSQL-databaser för effektiv datahantering"
                }


            }
        },
        lng: "lt",


        interpolation: {
            escapeValue: false
        }
    });


export default i18n;