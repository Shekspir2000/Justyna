import Image from "next/image";

const bookingUrl = "[LINK_DO_ZNANYLEKARZ]";

const navItems = [
  ["O mnie", "#o-mnie"],
  ["Oferta", "#oferta"],
  ["Umów się", "#umow-sie"],
  ["Współpraca", "#wspolpraca"],
  ["Sklep", "#sklep"],
  ["Kontakt", "#kontakt"],
];

const trustItems = [
  "10+ lat doświadczenia",
  "terapeuta manualny IFOMPT",
  "fizjoterapia dzieci i niemowląt",
  "fizjoterapia stomatologiczna",
];

const offerItems = [
  {
    title: "Fizjoterapia niemowląt",
    label: "Najważniejszy obszar",
    text: "Ocena napięcia, asymetrii, preferencji ułożeniowych, trudności z karmieniem i rozwoju ruchowego. Spokojna praca z dzieckiem oraz jasne wskazówki dla rodzica.",
  },
  {
    title: "Fizjoterapia dzieci",
    label: "Rozwój i ruch",
    text: "Wsparcie dzieci z trudnościami ruchowymi, napięciami, opóźnieniami wzorców motorycznych i potrzebą mądrej kontroli rozwoju.",
  },
  {
    title: "Wady postawy",
    label: "Starsze dzieci",
    text: "Analiza postawy, nawyków, ustawienia miednicy, stóp i kręgosłupa. Terapia połączona z ćwiczeniami, które rodzina rozumie i potrafi wdrożyć.",
  },
  {
    title: "Fizjoterapia stomatologiczna / TMJ",
    label: "Staw skroniowo-żuchwowy",
    text: "Praca z napięciami twarzy, szyi i obręczy barkowej, ograniczeniami ruchu żuchwy, klikaniem, bólem i przeciążeniami w obrębie stawu.",
  },
  {
    title: "Bruksizm i napięcia mięśni żucia",
    label: "Komfort na co dzień",
    text: "Terapia mięśni żucia, edukacja o zaciskaniu zębów, oddechu i napięciu. Wsparcie dla osób z bólami głowy, twarzy i szyi.",
  },
  {
    title: "Przygotowanie do leczenia ortodontycznego",
    label: "Przed aparatem",
    text: "Ocena funkcji żuchwy, napięć i kompensacji, aby leczenie stomatologiczne i ortodontyczne miało lepsze warunki funkcjonalne.",
  },
  {
    title: "Przygotowanie przed podcięciem wędzidełka",
    label: "Z logopedą",
    text: "Ocena napięć i praca manualna przed zabiegiem oraz zalecenia, które pomagają przygotować tkanki i proces terapeutyczny.",
  },
  {
    title: "Współpraca z logopedą",
    label: "Proces zespołowy",
    text: "Łączenie perspektywy fizjoterapeutycznej i logopedycznej u dzieci, szczególnie przy trudnościach karmienia, napięciach i funkcji jamy ustnej.",
  },
  {
    title: "Szkolenia dla gabinetów logopedycznych",
    label: "Dla specjalistów",
    text: "Wewnętrzne szkolenia o tym, kiedy fizjoterapeuta może pomóc w procesie logopedycznym i jak budować wspólną ścieżkę terapii.",
  },
];

const processSteps = [
  ["01", "Dokładny wywiad", "Najpierw słucham historii: objawów, codziennych trudności, wcześniejszych konsultacji i tego, co najbardziej martwi rodzica lub pacjenta."],
  ["02", "Badanie manualne", "Sprawdzam napięcia, ruchomość, wzorce ruchowe, reakcje tkanek i możliwe powiązania między miejscem objawu a jego przyczyną."],
  ["03", "Terapia i edukacja", "Dobieram techniki do konkretnej osoby. Tłumaczę prostym językiem, co robimy, po co to robimy i jak rozpoznać zmianę."],
  ["04", "Zalecenia do domu", "Proces nie kończy się w gabinecie. Rodzic lub pacjent dostaje konkretne wskazówki, które wspierają efekt terapii."],
];

const audience = [
  ["Mama niemowlęcia lub małego dziecka", "Chcesz sprawdzić rozwój, napięcie, asymetrię, karmienie albo po prostu zrozumieć, czy wszystko idzie w dobrą stronę."],
  ["Rodzic starszego dziecka z wadą postawy", "Szukasz spokojnej oceny, sensownego planu i ćwiczeń, które nie będą kolejnym źródłem stresu w domu."],
  ["Osoba z bruksizmem lub problemami TMJ", "Zaciskasz zęby, boli Cię żuchwa, szyja albo głowa i potrzebujesz wyjaśnienia, skąd bierze się napięcie."],
  ["Logopeda lub gabinet logopedyczny", "Chcesz włączyć perspektywę fizjoterapeutyczną do procesu terapii dzieci i lepiej rozumieć napięcia oraz funkcję."],
];

const reviews = [
  "Justyna bardzo spokojnie tłumaczy, co widzi w badaniu i co możemy zrobić w domu. Po wizycie wreszcie wiedziałam, na co zwracać uwagę.",
  "Profesjonalna, ciepła i konkretna. Nie było pośpiechu, tylko dokładny wywiad, badanie i jasny plan dalszej pracy.",
  "Przy problemach ze stawem skroniowo-żuchwowym pierwszy raz ktoś połączył żuchwę, szyję i napięcia w jedną logiczną całość.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Główna nawigacja">
        <a className="brand" href="#top" aria-label="Justyna Jasińska, strona główna">
          <span>Justyna Jasińska</span>
          <small>Fizjoterapia pediatryczna i stomatologiczna</small>
        </a>
        <nav className="desktop-nav" aria-label="Sekcje strony">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={bookingUrl}>
          Umów się
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">Fizjoterapia dzieci, niemowląt i TMJ w Krakowie</p>
          <h1>Pomagam znaleźć przyczynę problemu, a nie tylko łagodzić objawy.</h1>
          <p className="lead">
            Łączę fizjoterapię pediatryczną, stomatologiczną, terapię manualną i współpracę z logopedą, aby wspierać prawidłowy rozwój dziecka oraz komfort funkcjonowania pacjentów z napięciami, bruksizmem i problemami stawu skroniowo-żuchwowego.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={bookingUrl}>
              Umów się na wizytę
            </a>
            <a className="secondary-button" href="#metoda">
              Zobacz, jak pracuję
            </a>
          </div>
          <ul className="trust-strip" aria-label="Najważniejsze informacje">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-media reveal">
          <Image
            src="/images/hero-img-6091.jpg"
            alt="Justyna Jasińska, fizjoterapeutka pediatryczna i stomatologiczna"
            width={1200}
            height={1800}
            priority
            sizes="(min-width: 820px) 40vw, 100vw"
          />
          <div className="photo-note">
            <strong>Justyna Jasińska</strong>
            <span>certyfikowana terapeutka manualna MTI wg standardów IFOMPT</span>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Szybkie obszary pomocy">
        <a href="#oferta">Niemowlęta i małe dzieci</a>
        <a href="#oferta">Wady postawy</a>
        <a href="#oferta">Bruksizm i TMJ</a>
        <a href="#wspolpraca">Współpraca z logopedą</a>
      </section>

      <section className="section about-section" id="o-mnie">
        <div className="section-heading reveal">
          <p className="eyebrow">O mnie</p>
          <h2>Spokojna diagnoza, konkretne wyjaśnienie i terapia dobrana do człowieka.</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              src="/images/justyna-praca.jpg"
              alt="Justyna Jasińska podczas terapii manualnej"
              width={1066}
              height={1600}
              sizes="(min-width: 820px) 42vw, 100vw"
            />
          </div>
          <div className="about-copy reveal">
            <p>
              Jestem fizjoterapeutką z ponad 10-letnim doświadczeniem. Pracowałam z pacjentami ortopedycznymi, w poradni psychologiczno-pedagogicznej oraz w centrum stomatologicznym, dlatego patrzę na objawy szerzej niż tylko przez pryzmat jednego miejsca bólu.
            </p>
            <p>
              Od 2021 roku asystuję na kursach Terapii Manualnej NOMPT PL. Jestem certyfikowaną terapeutką manualną MTI wg standardów IFOMPT, jestem w trakcie MTII, ukończyłam Akademię Fizjoterapii Stomatologicznej i pracuję także jako terapeutka Integracji Sensorycznej.
            </p>
            <p>
              Stale poszerzam wiedzę na kursach i konferencjach, ale w gabinecie najważniejsze pozostaje dla mnie proste, zrozumiałe wyjaśnienie: co się dzieje, skąd może wynikać problem i co możemy z tym zrobić krok po kroku.
            </p>
            <div className="credentials">
              <span>MTI IFOMPT</span>
              <span>w trakcie MTII</span>
              <span>Integracja Sensoryczna</span>
              <span>Akademia Fizjoterapii Stomatologicznej</span>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section" id="metoda">
        <div className="section split">
          <div className="section-heading reveal">
            <p className="eyebrow">Sposób pracy</p>
            <h2>Najpierw szukam przyczyny. Dopiero potem dobieram terapię.</h2>
          </div>
          <p className="section-lead reveal">
            Objaw bywa tylko końcówką historii. Dlatego każda wizyta zaczyna się od uważnej rozmowy i badania, a kończy zaleceniami, które rodzic lub pacjent naprawdę rozumie.
          </p>
        </div>
        <div className="process-grid section">
          {processSteps.map(([number, title, text]) => (
            <article className="process-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="section-heading reveal">
          <p className="eyebrow">Oferta</p>
          <h2>Najmocniej wspieram niemowlęta i małe dzieci, a obok tego pacjentów z napięciami żuchwy, bruksizmem i TMJ.</h2>
        </div>
        <div className="offer-feature reveal">
          <div>
            <p className="eyebrow">Pediatria na pierwszym miejscu</p>
            <h3>Kiedy rodzic nie wie, czy “tak ma być”, potrzebuje spokojnej odpowiedzi.</h3>
            <p>
              Na wizycie sprawdzamy rozwój dziecka, napięcia, asymetrie, karmienie, komfort leżenia, obracania i pierwszych wzorców ruchu. Rodzic wychodzi z gabinetu z jasnym planem, nie z listą straszących pojęć.
            </p>
          </div>
          <Image
            src="/images/terapia-manualna.jpg"
            alt="Delikatna praca manualna w gabinecie fizjoterapii"
            width={999}
            height={1500}
            sizes="(min-width: 820px) 50vw, 100vw"
          />
        </div>
        <div className="offer-grid">
          {offerItems.map((item) => (
            <article className="offer-card reveal" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tmj-band">
        <div className="tmj-image reveal">
          <Image
            src="/images/tmj-edukacja.jpg"
            alt="Edukacja pacjenta w fizjoterapii stomatologicznej"
            width={1000}
            height={1500}
            sizes="(min-width: 820px) 50vw, 100vw"
          />
        </div>
        <div className="tmj-copy reveal">
          <p className="eyebrow">Fizjoterapia stomatologiczna</p>
          <h2>Żuchwa rzadko działa w izolacji.</h2>
          <p>
            Przy bruksizmie, klikaniu, bólu twarzy czy napięciu mięśni żucia patrzę także na szyję, oddech, postawę, stres i codzienne nawyki. Celem jest nie tylko rozluźnić tkanki, ale pomóc Ci zrozumieć, dlaczego napięcie wraca.
          </p>
          <a className="secondary-button light" href="#umow-sie">
            Umów konsultację TMJ
          </a>
        </div>
      </section>

      <section className="section audience-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Dla kogo</p>
          <h2>Ta strona jest dla osób, które chcą zrozumieć problem, a nie tylko dostać szybkie ćwiczenie.</h2>
        </div>
        <div className="audience-grid">
          {audience.map(([title, text]) => (
            <article className="audience-card reveal" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="umow-sie">
        <div className="booking-inner reveal">
          <p className="eyebrow">Rezerwacja</p>
          <h2>Umów wizytę przez ZnanyLekarz.</h2>
          <p>
            Na tym etapie strona prowadzi do zewnętrznego profilu rezerwacji. Nie ma płatności online ani własnego systemu zapisów.
          </p>
          <a className="primary-button" href={bookingUrl}>
            Umów się na wizytę
          </a>
          <small>Link do podmiany: [LINK_DO_ZNANYLEKARZ]</small>
        </div>
      </section>

      <section className="section cooperation-section" id="wspolpraca">
        <div className="cooperation-copy reveal">
          <p className="eyebrow">Współpraca</p>
          <h2>Dla logopedów i gabinetów logopedycznych.</h2>
          <p>
            Prowadzę wewnętrzne szkolenia dla gabinetów logopedycznych dotyczące współpracy fizjoterapeuty i logopedy w procesie terapeutycznym dzieci. Pokazuję, kiedy warto włączyć fizjoterapię, jak czytać napięcia i jak planować wspólne działania.
          </p>
          <a className="secondary-button" href="#kontakt">
            Zapytaj o współpracę
          </a>
        </div>
        <div className="cooperation-panel reveal">
          <h3>Tematy współpracy</h3>
          <ul>
            <li>napięcia w obrębie twarzy, szyi i tułowia u dzieci,</li>
            <li>trudności karmienia i przygotowanie przed podcięciem wędzidełka,</li>
            <li>wspólne prowadzenie procesu terapeutycznego,</li>
            <li>komunikacja zaleceń dla rodzica prostym językiem.</li>
          </ul>
        </div>
      </section>

      <section className="shop-section" id="sklep">
        <div className="section shop-inner reveal">
          <div>
            <p className="eyebrow">Sklep</p>
            <h2>Wkrótce: e-booki, webinary i materiały edukacyjne dla rodziców.</h2>
          </div>
          <p>
            Sekcja jest przygotowana pod przyszłą rozbudowę. Na razie bez koszyka, płatności i zakupów online.
          </p>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Opinie i zaufanie</p>
          <h2>Ponad 200 zadowolonych pacjentów i miejsce na prawdziwe opinie z profili rezerwacyjnych.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <blockquote className="review-card reveal" key={review}>
              <p>{review}</p>
              <footer>Opinia pacjenta {index + 1}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="contact-copy reveal">
          <p className="eyebrow">Kontakt</p>
          <h2>Masz pytanie przed pierwszą wizytą?</h2>
          <p>
            Napisz krótko, co Cię niepokoi. Formularz nie zastępuje wizyty, ale pomaga ustalić, czy fizjoterapia pediatryczna, stomatologiczna lub współpraca z logopedą będzie dobrym kierunkiem.
          </p>
          <div className="contact-list" aria-label="Dane kontaktowe">
            <a href={bookingUrl}>ZnanyLekarz: [LINK_DO_ZNANYLEKARZ]</a>
            <a href="tel:+48000000000">Telefon: [TELEFON]</a>
            <a href="mailto:kontakt@justynajasinskafizjo.pl">E-mail: [E-MAIL]</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram: [INSTAGRAM]</a>
            <span>Adres gabinetu: [ADRES GABINETU], Kraków</span>
          </div>
        </div>
        <form className="contact-form reveal" aria-label="Formularz kontaktowy">
          <label>
            Imię i nazwisko
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
              <option>Wizyta z niemowlęciem</option>
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
            <span>Wyrażam zgodę na kontakt w odpowiedzi na przesłaną wiadomość oraz przetwarzanie danych w tym celu. Szczegóły RODO zostaną uzupełnione w polityce prywatności.</span>
          </label>
          <button className="primary-button full" type="submit">
            Wyślij wiadomość
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Justyna Jasińska</strong>
          <span>Fizjoterapia pediatryczna i stomatologiczna</span>
        </div>
        <p>
          SEO: fizjoterapia dzieci Kraków, fizjoterapia niemowląt Kraków, fizjoterapia stomatologiczna Kraków, fizjoterapeuta dziecięcy Kraków, bruksizm fizjoterapia Kraków.
        </p>
      </footer>

      <a className="mobile-booking" href={bookingUrl}>
        Umów się
      </a>
    </main>
  );
}
