import Image from "next/image";

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

const credentialItems = [
  {
    title: "MTI IFOMPT",
    text: "certyfikowana terapeutka manualna według standardów IFOMPT",
  },
  {
    title: "w trakcie MTII",
    text: "kontynuacja szkolenia z terapii manualnej",
  },
  {
    title: "Integracja Sensoryczna",
    text: "terapia wspierająca rozwój i regulację dziecka",
  },
  {
    title: "Akademia Fizjoterapii Stomatologicznej",
    text: "fizjoterapia stomatologiczna, napięcia i praca z TMJ",
  },
];

const offerGroups = [
  {
    title: "Niemowlęta i małe dzieci",
    label: "Najczęstszy obszar pracy",
    text: "Spokojna ocena rozwoju, napięć, asymetrii, karmienia, komfortu leżenia, obracania i pierwszych wzorców ruchu.",
    items: ["fizjoterapia niemowląt", "kontrola rozwoju małego dziecka", "zalecenia zrozumiałe dla rodzica"],
  },
  {
    title: "Dzieci i wady postawy",
    label: "Rozwój, ruch i nawyki",
    text: "Praca z trudnościami ruchowymi, napięciami, opóźnieniami wzorców motorycznych oraz postawą starszych dzieci.",
    items: ["fizjoterapia dzieci", "wady postawy", "ćwiczenia możliwe do wdrożenia w domu"],
  },
  {
    title: "Staw skroniowo-żuchwowy i bruksizm",
    label: "Fizjoterapia stomatologiczna / TMJ",
    text: "Terapia napięć mięśni żucia, twarzy, szyi i obręczy barkowej przy zaciskaniu zębów, bólu, klikaniu lub przeciążeniu żuchwy.",
    items: ["bruksizm i napięcia mięśni żucia", "fizjoterapia stomatologiczna", "przygotowanie do leczenia ortodontycznego"],
  },
  {
    title: "Współpraca z logopedą",
    label: "Proces zespołowy",
    text: "Wsparcie dzieci przed podcięciem wędzidełka, przy trudnościach karmienia, napięciach i funkcji jamy ustnej oraz szkolenia dla gabinetów logopedycznych.",
    items: ["przygotowanie przed podcięciem wędzidełka", "współpraca fizjoterapeuty i logopedy", "szkolenia dla gabinetów logopedycznych"],
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
    author: "KBM",
    date: "26 lipca 2026",
    context: "wizyta z niemowlęciem",
    text: "Pacjentka podkreśla dokładny wywiad, spokojne badanie i konkretne ćwiczenia do domu. Po zastosowaniu zaleceń zauważyła poprawę karmienia i snu dziecka.",
  },
  {
    author: "Monika W.",
    date: "26 lipca 2026",
    context: "fizjoterapia dziecka",
    text: "Rodzic docenia delikatne podejście do małego dziecka, dużą wiedzę oraz instrukcje pokazane tak, aby można było bezpiecznie kontynuować pracę w domu.",
  },
  {
    author: "K.W.",
    date: "26 lipca 2026",
    context: "fizjoterapia stomatologiczna",
    text: "Pacjentka zwraca uwagę na spokojną atmosferę, profesjonalizm i jasne wyjaśnienie celu ćwiczeń przy pracy ze stawem skroniowo-żuchwowym.",
  },
  {
    author: "Ewelina",
    date: "24 lipca 2026",
    context: "ocena rozwoju dziecka",
    text: "Opinia opisuje całościowe badanie dziecka, dokładne omówienie zaleceń oraz wyjaśnienie, co obserwować i jak wspierać rozwój w domu.",
  },
];

export default function Home() {
  return (
    <main className="hero-preview">
      <header className="site-header" aria-label="Główna nawigacja">
        <a className="brand" href="#top" aria-label="Justyna Jasińska, strona główna">
          <span>Justyna Jasińska</span>
          <small>Fizjoterapia pediatryczna i stomatologiczna</small>
        </a>
        <nav className="desktop-nav" aria-label="Sekcje strony">
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
            <a className="secondary-button" href="#metoda">
              Zobacz, jak pracuję
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
        <div className="about-editorial-intro reveal">
          <p className="eyebrow">O mnie</p>
          <blockquote>
            {keepShortWords("Najważniejsze jest dla mnie, aby rodzic rozumiał, co dzieje się z dzieckiem, skąd mogą wynikać trudności i jakie kroki warto podjąć dalej")}
          </blockquote>
        </div>
        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              src="/images/justyna-pediatric-clinic-gray-scrubs.png"
              alt="Justyna Jasińska w jasnym gabinecie fizjoterapii pediatrycznej"
              width={1066}
              height={1600}
              unoptimized
              sizes="(min-width: 820px) 42vw, 100vw"
            />
          </div>
          <div className="about-copy reveal">
            <h2>{keepShortWords("Spokojna diagnoza, konkretne wyjaśnienie i terapia dobrana do potrzeb")}</h2>
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
            <div className="credentials">
              {credentialItems.map((item) => (
                <div key={item.title}>
                  <strong>{keepShortWords(item.title)}</strong>
                  <span>{keepShortWords(item.text)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="section-heading reveal">
          <p className="eyebrow">Oferta</p>
          <h2>{keepShortWords("Wybierz obszar, z którym chcesz przyjść na wizytę")}</h2>
          <p className="section-lead">
            {keepShortWords("Najmocniej wspieram niemowlęta i małe dzieci. Pracuję też z wadami postawy, napięciami żuchwy, bruksizmem, TMJ oraz w procesach prowadzonych wspólnie z logopedą.")}
          </p>
        </div>
        <div className="offer-feature reveal">
          <div>
            <p className="eyebrow">Pediatria na pierwszym miejscu</p>
            <h3>{keepShortWords("Jeśli nie masz pewności, czy rozwój dziecka przebiega prawidłowo, zaczynamy od spokojnego sprawdzenia sytuacji.")}</h3>
            <p>
              {keepShortWords("Podczas wizyty dokładnie przyglądam się napięciom, asymetrii, karmieniu, komfortowi leżenia, obracania oraz pierwszym wzorcom ruchu. Tłumaczę wszystko prostym językiem, aby rodzic wyszedł z gabinetu z jasnym planem działania, a nie z poczuciem niepokoju i listą trudnych pojęć.")}
            </p>
          </div>
          <Image
            src="/images/offer-img-5205-clear.jpg"
            alt="Delikatna praca manualna w gabinecie fizjoterapii"
            width={1350}
            height={1800}
            unoptimized
            sizes="(min-width: 820px) 50vw, 100vw"
          />
        </div>
        <div className="offer-paths">
          {offerGroups.map((item) => (
            <article className="offer-path reveal" key={item.title}>
              <span>{keepShortWords(item.label)}</span>
              <h3>{keepShortWords(item.title)}</h3>
              <p>{keepShortWords(item.text)}</p>
              <ul>
                {item.items.map((point) => (
                  <li key={point}>{keepShortWords(point)}</li>
                ))}
              </ul>
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

          <aside className="ifompt-panel reveal" aria-label="Wyjaśnienie standardu IFOMPT">
            <div className="ifompt-mark">
              <strong>IFOMPT</strong>
              <span>International Federation of Orthopaedic Manipulative Physical Therapists</span>
            </div>
            <p>
              {keepShortWords("IFOMPT to międzynarodowa federacja wyznaczająca standardy zaawansowanej fizjoterapii ortopedyczno-manualnej. Certyfikacja w tym nurcie oznacza pracę opartą na dokładnym badaniu, bezpieczeństwie, rozumowaniu klinicznym i terapii dobranej do przyczyny problemu, a nie wyłącznie do miejsca bólu.")}
            </p>
          </aside>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading reviews-heading reveal">
          <p className="eyebrow">Opinie i zaufanie</p>
          <h2>{keepShortWords("Rodzice i pacjenci doceniają spokojne tłumaczenie, dokładność i jasny plan po wizycie")}</h2>
          <p className="section-lead">
            {keepShortWords("Wybrane opinie pochodzą z profilu Justyny na ZnanyLekarz. Poniżej pokazuję krótkie streszczenia czterech opinii pacjentów.")}
          </p>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card reveal" key={`${review.author}-${review.date}`}>
              <span>{keepShortWords(review.context)}</span>
              <p>{keepShortWords(review.text)}</p>
              <footer>
                <strong>{review.author}</strong>
                <small>{review.date}</small>
              </footer>
            </article>
          ))}
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
            <a href="tel:+48000000000">Telefon: [TELEFON]</a>
            <a href="mailto:kontakt@justynajasinskafizjo.pl">E-mail: [E-MAIL]</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram: [INSTAGRAM]</a>
            <span>Adres gabinetu: [ADRES GABINETU], Kraków</span>
          </div>
        </div>
        <form className="contact-form reveal" aria-label="Formularz kontaktowy">
          <label>
            {keepShortWords("Imię i nazwisko")}
            <input name="name" type="text" autoComplete="name" placeholder="Anna Nowak" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" autoComplete="email" placeholder="anna@email.pl" />
          </label>
          <label>
            Telefon
            <input name="phone" type="tel" autoComplete="tel" placeholder="+48 ..." />
          </label>
          <label>
            Temat
            <select name="topic" defaultValue="">
              <option value="" disabled>Wybierz temat</option>
              <option>{keepShortWords("Wizyta z niemowlęciem")}</option>
              <option>Fizjoterapia dziecka</option>
              <option>Bruksizm / TMJ</option>
              <option>Współpraca logopedyczna</option>
            </select>
          </label>
          <label className="full">
            Wiadomość
            <textarea name="message" rows={5} placeholder="Napisz, co chcesz skonsultować." />
          </label>
          <label className="rodo full">
            <input type="checkbox" name="rodo" />
            <span>{keepShortWords("Wyrażam zgodę na kontakt w odpowiedzi na przesłaną wiadomość oraz przetwarzanie danych w tym celu. Szczegóły RODO zostaną uzupełnione w polityce prywatności.")}</span>
          </label>
          <button className="primary-button full" type="submit">
            Wyślij wiadomość
          </button>
        </form>
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
