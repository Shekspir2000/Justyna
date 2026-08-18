import type { Metadata } from "next";
import Link from "next/link";

const bookingUrl =
  "https://www.znanylekarz.pl/justyna-jasinska-2/fizjoterapeuta/krakow";

const keepShortWords = (text: string) =>
  text.replace(/(^|[\s(])([aAiIoOuUwWzZ]) /g, "$1$2\u00a0");

const courses = [
  {
    year: "2026",
    items: [
      "BSPTS - Rigo Concept (Barcelona Scoliosis Physical Therapy School) - Level I, MedCoach, Kraków, 09.2026 r.",
      "BSPTS - Rigo Concept (Barcelona Scoliosis Physical Therapy School) - Base Level, MedCoach, Kraków, 07.2026 r.",
      "Diagnostyka obrazowa dla fizjoterapeutów. Moduł I, NOMPT PL, Zgierz, 06.2026 r.",
    ],
  },
  {
    year: "2025",
    items: [
      "Diagnostyka i terapia niemowląt i małych dzieci. Podejście osteopatyczne i neurologopedyczne w praktyce fizjoterapeutów i osteopatów, MedCoach, Kraków, 01.2025 r.",
      "XI Konferencja Terapeutów Manualnych wg standardów IFOMPT - NOMPT PL, 01.2025 r.",
    ],
  },
  {
    year: "2024",
    items: [
      "Holistyczna neurorozwojowa diagnostyka i terapia małego dziecka w wieku 0-18 m. ż., MedCoach, Kraków, 05.2024 r.",
      "Język - spojrzenie fizjoterapeuty, Logodemia, 04.2024 r.",
      "Ocena funkcjonalna traktu ustno-twarzowego. Mioterapia - podejście autorskie. Ewelina Mendala-Kwoczek, Łódź, 04.2024 r.",
      "Fizjoterapia stomatologiczna, 4 moduły - Akademia Fizjoterapii Stomatologicznej, Fizjodentika, Warszawa, 03-11.2024 r.",
      "Analiza mięśni mimicznych - warsztat praktyczny, 02.2024 r.",
      "Osteopatyczne podejście do badania noworodków i niemowląt, 02.2024 r.",
      "Strategie terapeutyczne w rehabilitacji małego dziecka w zgodzie z typowym rozwojem 0-12 m. ż., 01.2024 r.",
      "X Konferencja Terapeutów Manualnych wg standardów IFOMPT - NOMPT PL, 01.2024 r.",
    ],
  },
  {
    year: "2023",
    items: [
      "Szkolenie prosektoryjno-anatomiczne, Fizjosport, Katowice, 06.2023 r.",
      "IX Konferencja Terapeutów Manualnych wg standardów IFOMPT - NOMPT PL, 02.2023 r. Wystąpienie: \"Bóle głowy - kiedy działanie fizjoterapeuty ma sens?\"",
      "Terapia Manualna wg standardów IFOMPT, NOMPT PL, moduły doszkalające MT II, Kraków - w trakcie. Prowadzący: Instruktor MT e.V. IFK, PT/OMT Stanisław Legocki. Moduły: VI Repetytorium, V Dysfunkcje górnego odcinka szyjnego, IV Dysfunkcje przejścia odcinka szyjno-piersiowego kręgosłupa i kończyny górnej, III Dysfunkcje kompleksu miedniczno-udowego i kończyny dolnej, II Dysfunkcje regionu lędźwiowego odcinka kręgosłupa i kończyny dolnej, I Dysfunkcje piersiowego odcinka kręgosłupa.",
    ],
  },
  {
    year: "2022",
    items: [
      "Blackroll Breathing - reedukacja oddechowa, Warszawa, 12.2022 r.",
      "Terapia stawów skroniowo-żuchwowych (TMJ), FizjoSystem, Warszawa, 2022 r.",
      "VIII Konferencja Terapeutów Manualnych wg standardów IFOMPT - NOMPT PL, 02.2022 r. Wystąpienie: \"Ból głowy jako częsta, wtórna klasyfikacja w praktyce fizjoterapeuty, terapeuty manualnego NOMPT. Studium przypadków.\"",
    ],
  },
  {
    year: "2021-2020",
    items: [
      "Kurs Integracji Sensorycznej, I i II stopień, Pruszków, 2020 r. i 2021 r.",
      "Certyfikowany Terapeuta Manualny wg standardów IFOMPT MT I, 10 modułów. Prowadzący: Instruktor MT e.V. IFK, PT/OMT Stanisław Legocki. Egzamin: 06.2020 r.",
      "Podstawy rentgenodiagnostyki kończyny górnej, USM, Łódź, 2020 r.",
      "Podstawy rentgenodiagnostyki kończyny dolnej, USM, Łódź, 2020 r.",
      "Diagnostyka obrazowa kręgosłupa szyjnego, USM, Łódź, 2020 r.",
    ],
  },
  {
    year: "2019-2015",
    items: [
      "Leczenie zaburzeń synowialnego stawu skroniowo-żuchwowego, Holimedica, Warszawa, 2019 r.",
      "Stabilizacja kręgosłupa szyjnego i stawów skroniowo-żuchwowych, NOMPT PL, Kraków, 2018 r.",
      "Stabilizacja stawów obwodowych, NOMPT PL, Kraków, 2018 r.",
      "Stabilizacja centralna, NOMPT PL, Kraków, 2018 r.",
      "Terapia dysbalansu kręgosłupa, Projekt Masaż, Kraków, 2018 r.",
      "Terapia narzędziowa tkanek miękkich, Projekt Masaż, Warszawa, 2017 r.",
      "Diagnostyka i leczenie manualne w dysfunkcjach stawu kolanowego, Tromed, Łódź, 2017 r.",
      "Masaż tkanek głębokich i rozluźnianie mięśniowo-powięziowe z anatomią palpacyjną, Łódź, 2016 r.",
      "Masaż I i II stopnia, Gowork, Łódź, 2015 r.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Kursy i szkolenia | Justyna Jasińska",
  description:
    "Kursy, szkolenia i konferencje Justyny Jasińskiej z fizjoterapii pediatrycznej, stomatologicznej, terapii manualnej i pracy z dziećmi.",
};

export default function CoursesPage() {
  return (
    <main className="course-page">
      <header className="course-page-header">
        <Link className="brand" href="/#top" aria-label="Powrót na stronę główną">
          <span className="brand-name">
            <small className="brand-title">mgr fizjoterapii</small>
            Justyna Jasińska
          </span>
          <small>Fizjoterapia pediatryczna i stomatologiczna</small>
        </Link>
        <nav className="course-page-nav" aria-label="Nawigacja">
          <Link href="/#o-mnie">O mnie</Link>
          <Link href="/#oferta">Oferta</Link>
          <a href={bookingUrl}>Umów się</a>
        </nav>
      </header>

      <section className="course-hero">
        <p className="eyebrow">Kursy i szkolenia</p>
        <h1>{keepShortWords("Rozwój zawodowy, który wspiera spokojną i dokładną pracę z pacjentem")}</h1>
        <p>
          {keepShortWords("Poniżej znajduje się lista kursów, szkoleń i konferencji Justyny Jasińskiej z obszaru fizjoterapii pediatrycznej, stomatologicznej, terapii manualnej, diagnostyki obrazowej oraz pracy z dziećmi.")}
        </p>
      </section>

      <section className="course-list-section" aria-label="Lista kursów i szkoleń">
        {courses.map((group) => (
          <article className="course-year-group" key={group.year}>
            <h2>{group.year}</h2>
            <div className="course-list">
              {group.items.map((item) => (
                <p key={item}>{keepShortWords(item)}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="course-page-footer">
        <Link className="secondary-button" href="/#o-mnie">
          Wróć do strony głównej
        </Link>
        <a className="primary-button" href={bookingUrl}>
          Umów się na wizytę
        </a>
      </footer>
    </main>
  );
}
