import Image from "next/image";
import Link from "next/link";

const bookingUrl =
  "https://www.znanylekarz.pl/justyna-jasinska-2/fizjoterapeuta/krakow";

const keepShortWords = (text: string) =>
  text.replace(/(^|[\s(])([aAiIoOuUwWzZ]) /g, "$1$2\u00a0");

const navItems: Array<[label: string, href: string | null]> = [
  ["O mnie", "#o-mnie"],
  ["Oferta", "#oferta"],
  ["Umów się", bookingUrl],
  ["Współpraca", "#wspolpraca"],
  ["Sklep", "#sklep"],
  ["Kontakt", "#kontakt"],
];

const marqueeItems = [
  "fizjoterapia niemowląt",
  "fizjoterapia dzieci",
  "wady postawy",
  "bruksizm",
  "TMJ",
  "fizjoterapia stomatologiczna",
  "terapia manualna",
  "współpraca z logopedą",
];

const trustItems = [
  {
    title: "10+ lat doświadczenia",
    text: "w pracy z dziećmi, niemowlętami i pacjentami ortopedycznymi",
  },
  {
    title: "200+ zadowolonych pacjentów",
    text: "objętych indywidualną fizjoterapią i diagnostyką",
  },
  {
    title: "Certyfikowana terapeutka MTI IFOMPT",
    text: "terapia manualna, fizjoterapia stomatologiczna i pediatryczna",
  },
];

const offerGroups = [
  {
    title: "Fizjoterapia niemowląt",
    text: "Wspieram prawidłowy rozwój ruchowy niemowląt, pomagając w trudnościach pojawiających się na różnych etapach rozwoju. Terapia jest zawsze dobierana indywidualnie do potrzeb dziecka i jego aktualnych możliwości.",
    image: "/images/offer-infants-therapy.jpg",
    alt: "Fizjoterapia niemowląt w gabinecie",
    items: [
      "asymetria ułożeniowa i preferowanie jednej strony",
      "nieprawidłowe napięcie mięśniowe",
      "trudności z unoszeniem i kontrolą głowy",
      "opóźniony lub nieprawidłowy rozwój ruchowy",
      "problemy z obrotem, podporami, siadem i raczkowaniem",
      "kręcz szyi",
      "KISS Syndrom",
      "kolki i problemy z karmieniem u niemowląt",
    ],
  },
  {
    title: "Fizjoterapia dzieci",
    text: "Pomagam dzieciom w kształtowaniu prawidłowej postawy ciała i pracy stóp, wspierając ich harmonijny rozwój oraz zapobiegając pogłębianiu się nieprawidłowości. Terapia obejmuje zarówno ćwiczenia, jak i naukę zaleceń do domu.",
    image: "/images/offer-children-therapy.png",
    alt: "Fizjoterapia dzieci i praca z rozwojem ruchowym",
    items: [
      "wady i zaburzenia postawy ciała",
      "skolioza i asymetrie",
      "płaskostopie i inne nieprawidłowości ustawienia stóp",
      "koślawość lub szpotawość kolan",
      "nieprawidłowe wzorce chodu i ruchu",
    ],
  },
  {
    title: "Fizjoterapia stomatologiczna i współpraca z logopedą",
    text: "Pomagam w terapii dolegliwości związanych z napięciem i funkcjonowaniem mięśni twarzy, żuchwy oraz stawu skroniowo-żuchwowego. Współpracuję również z logopedą, wspierając terapię zaburzeń w obrębie aparatu żucia i funkcji orofacjalnych.",
    image: "/images/offer-dental-therapy.jpg",
    alt: "Fizjoterapia stomatologiczna i praca ze stawem skroniowo-żuchwowym",
    items: [
      "bruksizm i zaciskanie zębów",
      "bóle i napięcia w obrębie żuchwy, twarzy i szyi",
      "zaburzenia i ograniczenia ruchomości stawu skroniowo-żuchwowego",
      "napięcia mięśniowe w obrębie twarzy i jamy ustnej",
      "wsparcie terapii logopedycznej i miofunkcjonalnej",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Wywiad i diagnostyka",
    text: "Zaczynam od rozmowy, obserwacji i badania manualnego. Szukam zależności między objawem, napięciem, ruchem, karmieniem, postawą lub pracą stawu skroniowo-żuchwowego.",
    note: "najpierw zrozumienie problemu",
  },
  {
    number: "02",
    title: "Terapia dobrana do przyczyny",
    text: "Dobieram techniki manualne, pracę z tkankami i edukację do konkretnej osoby. Tłumaczę prostym językiem, co robimy i dlaczego właśnie ten element ma znaczenie.",
    note: "terapia bez przypadkowych działań",
  },
  {
    number: "03",
    title: "Plan i zalecenia do domu",
    text: "Rodzic lub pacjent wychodzi z gabinetu z jasnym planem: co obserwować, co ćwiczyć, czego unikać i kiedy warto wrócić na kontrolę lub włączyć innego specjalistę.",
    note: "konkretne kolejne kroki",
  },
];

const cooperationTopics = [
  {
    title: "Kiedy włączyć fizjoterapeutę",
    text: "Wskazówki, przy których objawach i trudnościach dziecka warto poszerzyć terapię logopedyczną o ocenę fizjoterapeutyczną.",
  },
  {
    title: "Napięcia twarzy, szyi i tułowia",
    text: "Praktyczne spojrzenie na to, jak napięcie w ciele może wpływać na karmienie, funkcję jamy ustnej i przebieg terapii.",
  },
  {
    title: "Wędzidełko i przygotowanie do zabiegu",
    text: "Omówienie pracy przed podcięciem wędzidełka oraz po zabiegu, z uwzględnieniem zaleceń dla rodzica.",
  },
  {
    title: "Spójny plan dla rodzica",
    text: "Ułożenie prostego języka komunikacji i wspólnych zaleceń, aby rodzic wiedział, co robić między wizytami.",
  },
];

const reviews = [
  {
    author: "Karolina P.",
    date: "30 lipca 2026",
    context: "fizjoterapia stomatologiczna",
    text: "Pacjentka docenia profesjonalizm, dużą wiedzę i spokojną komunikację podczas przygotowania do operacji ortognatycznej oraz rehabilitacji po zabiegu.",
  },
  {
    author: "KBM",
    date: "7 lipca 2026",
    context: "wizyta z niemowlęciem",
    text: "Pacjentka podkreśla dokładny wywiad, spokojne badanie i konkretne ćwiczenia do domu. Po zastosowaniu zaleceń zauważyła poprawę karmienia i snu dziecka.",
  },
  {
    author: "Monika W.",
    date: "3 lipca 2026",
    context: "fizjoterapia dziecka",
    text: "Rodzic zwraca uwagę na świetne podejście do dziecka, zaangażowanie oraz ćwiczenia dobrane tak, aby mały pacjent chętnie z nimi pracował.",
  },
  {
    author: "Nadia",
    date: "27 czerwca 2026",
    context: "pierwsza wizyta dziecka",
    text: "Opinia podkreśla miłą atmosferę, zaangażowanie i dobre podejście do dziecka już podczas pierwszego spotkania.",
  },
  {
    author: "KW",
    date: "25 czerwca 2026",
    context: "fizjoterapia stomatologiczna",
    text: "Pacjentka zwraca uwagę na spokojną atmosferę, profesjonalizm i jasne wyjaśnienie celu ćwiczeń przy pracy ze stawem skroniowo-żuchwowym.",
  },
  {
    author: "Justyna",
    date: "25 czerwca 2026",
    context: "fizjoterapia dziecka",
    text: "Rodzic opisuje kompleksowe podejście, równoległą pracę w kilku obszarach i zauważalną poprawę u dziecka po wcześniejszych poszukiwaniach pomocy.",
  },
  {
    author: "Ewelina",
    date: "17 czerwca 2026",
    context: "ocena rozwoju dziecka",
    text: "Opinia opisuje całościowe badanie dziecka, dokładne omówienie zaleceń oraz wyjaśnienie, co obserwować i jak wspierać rozwój w domu.",
  },
  {
    author: "MM",
    date: "15 czerwca 2026",
    context: "fizjoterapia stomatologiczna",
    text: "Pacjentka docenia skupienie, bieżące wyjaśnianie przebiegu terapii oraz zestaw ćwiczeń do domu, po których zauważyła pierwszą poprawę.",
  },
  {
    author: "Kamila",
    date: "9 czerwca 2026",
    context: "fizjoterapia dziecka",
    text: "Rodzic podkreśla wartościowe wizyty i bardzo dobre podejście do dziecka podczas kolejnych spotkań.",
  },
  {
    author: "Iwona",
    date: "8 czerwca 2026",
    context: "pierwsza wizyta dziecka",
    text: "Opinia zwraca uwagę na profesjonalizm oraz praktyczne ćwiczenia, które rodzic mógł nagrać i łatwiej wykonywać w domu.",
  },
];

export default function Home() {
  return (
    <main className="hero-preview">
      <header className="site-header" aria-label="Główna nawigacja">
        <a className="brand" href="#top" aria-label="Justyna Jasińska, strona główna">
          <span className="brand-name">
            Justyna Jasińska
          </span>
          <small>Fizjoterapia pediatryczna i stomatologiczna</small>
        </a>
        <nav className="desktop-nav" aria-label="Sekcje strony">
          <a
            className="nav-social"
            href="https://www.instagram.com/fizjoterapia_z_glowa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Justyny Jasińskiej"
          >
            <span className="nav-social-icon" aria-hidden="true" />
          </a>
          {navItems.map(([label, href]) =>
            href ? (
              <a key={label} href={href}>
                {keepShortWords(label)}
              </a>
            ) : (
              <span key={label} aria-disabled="true">
                {keepShortWords(label)}
              </span>
            ),
          )}
        </nav>
        <a className="header-cta" href={bookingUrl}>
          Umów się
        </a>
      </header>

      <section className="hero hero-background" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{keepShortWords("Fizjoterapia niemowląt, dzieci i stawu skroniowo-żuchwowego w Krakowie")}</p>
          <h1>{keepShortWords("Pomagam znaleźć przyczynę problemu, a nie tylko łagodzić objawy")}</h1>
          <p className="lead">
            {keepShortWords("Łączę fizjoterapię pediatryczną, stomatologiczną, terapię manualną i współpracę z logopedą, aby wspierać prawidłowy rozwój dziecka oraz komfort funkcjonowania pacjentów z napięciami, bruksizmem i problemami stawu skroniowo-żuchwowego.")}
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={bookingUrl}>
              Umów się na wizytę
            </a>
          </div>
          <ul className="trust-strip" aria-label="Główne obszary pomocy">
            {trustItems.map((item) => (
              <li key={item.title}>
                <strong>{keepShortWords(item.title)}</strong>
                <span>{keepShortWords(item.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="marquee-band" aria-label="Najważniejsze obszary pracy">
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item}>
                {keepShortWords(item)}
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`repeat-${item}`}>
                {keepShortWords(item)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="o-mnie">
        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              src="/images/about-justyna-o-mnie.png"
              alt="Justyna Jasińska w jasnym gabinecie fizjoterapii pediatrycznej"
              width={1023}
              height={1537}
              unoptimized
              sizes="(min-width: 820px) 42vw, 100vw"
            />
          </div>
          <div className="about-copy reveal">
            <div className="about-editorial-intro">
              <p className="eyebrow">O mnie</p>
              <blockquote>
                {keepShortWords("Najważniejsze jest dla mnie, aby rodzic rozumiał, co dzieje się z dzieckiem, skąd mogą wynikać trudności i jakie kroki warto podjąć dalej")}
              </blockquote>
            </div>
            <div className="about-text">
              <p>
                {keepShortWords("Od ponad 10 lat pracuję jako fizjoterapeutka, zdobywając doświadczenie w placówkach ortopedycznych, poradni pedagogiczno-psychologicznej oraz centrum stomatologicznym. Jestem certyfikowaną Terapeutką Manualną MTI według standardów IFOMPT, terapeutką integracji sensorycznej oraz absolwentką Akademii Fizjoterapii Stomatologicznej. Obecnie kontynuuję szkolenie MTII, a od 2021 roku asystuję na kursach Terapii Manualnej NOMPT PL.")}
              </p>
              <p>
                {keepShortWords("W gabinecie pracuję z niemowlętami, dziećmi i pacjentami z problemami w obrębie stawu skroniowo-żuchwowego. Łączę diagnostykę manualną, wiedzę pediatryczną, fizjoterapię stomatologiczną i współpracę z logopedami, aby patrzeć na problem szerzej niż tylko przez pryzmat pojedynczego objawu.")}
              </p>
              <p>
                {keepShortWords("Moim celem jest znalezienie przyczyny dolegliwości oraz jasne wyjaśnienie jej pacjentowi lub rodzicom dziecka. Dzięki temu terapia staje się bardziej zrozumiała, a rodzic może aktywnie uczestniczyć w procesie wspierania rozwoju dziecka.")}
              </p>
            </div>
            <Link className="about-course-tile" href="/kursy">
              <span>Kursy i szkolenia</span>
              <strong>{keepShortWords("Zobacz rozwój zawodowy Justyny")}</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="offer-feature reveal">
          <div className="offer-feature-copy">
            <div className="section-heading">
              <p className="eyebrow">Oferta</p>
              <h2>{keepShortWords("W czym mogę pomóc?")}</h2>
              <p className="section-lead">
                {keepShortWords("Od napięć i asymetrii u dzieci po bruksizm i problemy stawu skroniowo-żuchwowego - każdą terapię dobieram indywidualnie, szukając źródła problemu.")}
              </p>
            </div>
          </div>
        </div>
        <div className="offer-paths">
          {offerGroups.map((item) => (
            <article className="offer-path reveal" key={item.title}>
              <div className="offer-path-media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  unoptimized
                  sizes="(min-width: 1100px) 31vw, (min-width: 700px) 50vw, 100vw"
                />
              </div>
              <div className="offer-path-copy">
                <h3>{keepShortWords(item.title)}</h3>
                <p>{keepShortWords(item.text)}</p>
                <ul>
                  {item.items.map((point) => (
                    <li key={point}>{keepShortWords(point)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section" id="metoda">
        <div className="section method-inner">
          <div className="section-heading method-heading reveal">
            <p className="eyebrow">Sposób pracy</p>
            <h2>{keepShortWords("Pracuję z przyczyną, nie tylko z objawem")}</h2>
            <p className="section-lead">
              {keepShortWords("Każda wizyta ma spokojny, czytelny rytm: od rozmowy i badania, przez terapię, po zalecenia, które rodzic lub pacjent naprawdę rozumie.")}
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card reveal" key={step.number}>
                <span className="process-number">{step.number}</span>
                <span className="process-icon" aria-hidden="true">{step.number === "01" ? "?" : step.number === "02" ? "+" : ">"}</span>
                <h3>{keepShortWords(step.title)}</h3>
                <p>{keepShortWords(step.text)}</p>
                <small>{keepShortWords(step.note)}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading reviews-heading reveal">
          <p className="eyebrow">Opinie i zaufanie</p>
          <h2>{keepShortWords("Rodzice i pacjenci doceniają spokojne tłumaczenie, dokładność i jasny plan po wizycie")}</h2>
          <p className="section-lead">
            {keepShortWords("Wybrane opinie pochodzą z profilu Justyny na ZnanyLekarz. Poniżej pokazuję krótkie streszczenia dziesięciu opinii pacjentów.")}
          </p>
        </div>
        <div className="reviews-marquee" aria-label="Przesuwane opinie pacjentów">
          <div className="reviews-track">
            {[0, 1].map((group) => (
              <div className="reviews-group" aria-hidden={group === 1} key={group}>
                {reviews.map((review) => (
                  <article className="review-card" key={`${group}-${review.author}-${review.date}`}>
                    <span>{keepShortWords(review.context)}</span>
                    <p>{keepShortWords(review.text)}</p>
                    <footer>
                      <strong>{review.author}</strong>
                      <small>{review.date}</small>
                    </footer>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a className="reviews-source reveal" href={`${bookingUrl}#profile-reviews`}>
          Zobacz opinie na ZnanyLekarz
        </a>
      </section>

      <section className="booking-section" id="umow-sie">
        <div className="booking-inner reveal">
          <p className="eyebrow">Rezerwacja</p>
          <h2>{keepShortWords("Umów wizytę przez ZnanyLekarz")}</h2>
          <a className="primary-button" href={bookingUrl}>
            Umów się na wizytę
          </a>
        </div>
      </section>

      <section className="section cooperation-section" id="wspolpraca">
        <div className="cooperation-heading reveal">
          <p className="eyebrow">Współpraca</p>
          <h2>{keepShortWords("Wsparcie dla logopedów i gabinetów logopedycznych")}</h2>
          <p className="section-lead">
            {keepShortWords("Prowadzę wewnętrzne szkolenia dla gabinetów logopedycznych dotyczące współpracy fizjoterapeuty i logopedy w procesie terapeutycznym dzieci. Pokazuję, kiedy warto włączyć fizjoterapię, jak czytać napięcia i jak planować wspólne działania.")}
          </p>
          <a className="secondary-button" href="#kontakt">
            Zapytaj o współpracę
          </a>
        </div>
        <div className="cooperation-content">
          <div className="cooperation-photos reveal" aria-label="Zdjęcia ze szkolenia i pracy manualnej">
            <Image
              className="cooperation-photo-main"
              src="/images/cooperation-training-6978.jpg"
              alt="Justyna Jasińska podczas szkolenia z pracy manualnej w obrębie twarzy i żuchwy"
              width={1050}
              height={1400}
              unoptimized
              sizes="(min-width: 820px) 34vw, 100vw"
            />
            <Image
              className="cooperation-photo-side"
              src="/images/cooperation-training-6958.jpg"
              alt="Obserwacja technik manualnych podczas szkolenia dla specjalistów"
              width={1050}
              height={1400}
              unoptimized
              sizes="(min-width: 820px) 22vw, 50vw"
            />
          </div>
          <div className="cooperation-topics">
            {cooperationTopics.map((topic) => (
              <article className="cooperation-topic reveal" key={topic.title}>
                <h3>{keepShortWords(topic.title)}</h3>
                <p>{keepShortWords(topic.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-section" id="sklep" aria-label="Sklep i materiały edukacyjne">
        <div className="shop-inner reveal">
          <div className="shop-copy">
            <p className="eyebrow">Sklep</p>
            <h2>{keepShortWords("Wkrótce materiały edukacyjne dla rodziców")}</h2>
            <p>
              {keepShortWords("Pracuję nad e-bookami, webinarami i prostymi materiałami, które pomogą rodzicom spokojniej rozumieć rozwój dziecka, napięcia, karmienie oraz codzienną pracę zaleconą po wizycie.")}
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="contact-copy reveal">
          <p className="eyebrow">Kontakt</p>
          <h2>Masz pytanie przed pierwszą wizytą?</h2>
          <p>
            {keepShortWords("Napisz krótko, co Cię niepokoi. Formularz nie zastępuje wizyty, ale pomaga ustalić, czy fizjoterapia pediatryczna, stomatologiczna lub współpraca z logopedą będzie dobrym kierunkiem.")}
          </p>
          <div className="contact-list" aria-label="Dane kontaktowe">
            <a href={bookingUrl}>ZnanyLekarz: profil Justyny Jasińskiej</a>
            <a href="mailto:J.Jasinska.fizjo@gmail.com">E-mail: J.Jasinska.fizjo@gmail.com</a>
            <a href="https://www.instagram.com/fizjoterapia_z_glowa/" target="_blank" rel="noreferrer">
              Instagram: fizjoterapia_z_glowa
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Justyna Jasińska</strong>
          <span>{keepShortWords("Fizjoterapia pediatryczna i stomatologiczna")}</span>
        </div>
      </footer>

    </main>
  );
}
