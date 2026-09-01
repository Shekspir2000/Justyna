import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const bookingUrl =
  "https://www.znanylekarz.pl/justyna-jasinska-2/fizjoterapeuta/krakow";

const keepShortWords = (text: string) =>
  text.replace(/(^|[\s(])([aAiIoOuUwWzZ]) /g, "$1$2\u00a0");

const services = [
  {
    slug: "fizjoterapia-niemowlat",
    title: "Fizjoterapia niemowląt",
    intro:
      "Wspieram prawidłowy rozwój ruchowy niemowląt, pomagając w trudnościach pojawiających się na różnych etapach rozwoju. Terapia jest zawsze dobierana indywidualnie do potrzeb dziecka i jego aktualnych możliwości.",
    image: "/images/offer-infants-therapy.jpg",
    alt: "Fizjoterapia niemowląt w gabinecie",
    listTitle: "W jakich problemach może pomóc terapia?",
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
    slug: "fizjoterapia-dzieci",
    title: "Fizjoterapia dzieci",
    intro:
      "Pomagam dzieciom w kształtowaniu prawidłowej postawy ciała i pracy stóp, wspierając ich harmonijny rozwój oraz zapobiegając pogłębianiu się nieprawidłowości. Terapia obejmuje zarówno ćwiczenia, jak i naukę zaleceń do domu.",
    image: "/images/offer-children-therapy.png",
    alt: "Fizjoterapia dzieci i praca z rozwojem ruchowym",
    listTitle: "W jakich problemach może pomóc terapia?",
    items: [
      "wady i zaburzenia postawy ciała",
      "skolioza i asymetrie",
      "płaskostopie i inne nieprawidłowości ustawienia stóp",
      "koślawość lub szpotawość kolan",
      "nieprawidłowe wzorce chodu i ruchu",
    ],
  },
  {
    slug: "fizjoterapia-stomatologiczna",
    title: "FIZJOTERAPIA STOMATOLOGICZNA",
    intro:
      "Pomagam w terapii dolegliwości związanych z napięciem i funkcjonowaniem mięśni twarzy, żuchwy oraz stawu skroniowo-żuchwowego. Współpracuję również z logopedą, wspierając terapię zaburzeń w obrębie aparatu żucia i funkcji orofacjalnych.",
    image: "/images/offer-dental-therapy.jpg",
    alt: "Fizjoterapia stomatologiczna i praca ze stawem skroniowo-żuchwowym",
    listTitle: "W jakich problemach może pomóc terapia?",
    items: [
      "bruksizm i zaciskanie zębów",
      "bóle i napięcia w obrębie żuchwy, twarzy i szyi",
      "zaburzenia i ograniczenia ruchomości stawu skroniowo-żuchwowego",
      "napięcia mięśniowe w obrębie twarzy i jamy ustnej",
      "wsparcie terapii logopedycznej i miofunkcjonalnej",
    ],
  },
  {
    slug: "szkolenia-dla-gabinetow-logopedycznych",
    title: "SZKOLENIA DLA GABINETÓW LOGOPEDYCZNYCH",
    intro:
      "Prowadzę wewnętrzne szkolenia dla gabinetów logopedycznych dotyczące współpracy fizjoterapeuty i logopedy w procesie terapeutycznym dzieci i niemowląt. Pokazuję, kiedy warto włączyć fizjoterapię i jak planować wspólne działania terapeutyczne.",
    image: "/images/offer-logopedics-training.jpg",
    alt: "Szkolenie dla gabinetów logopedycznych z pracy fizjoterapeutycznej",
    listTitle: "",
    items: [],
  },
];

const findService = (slug: string) =>
  services.find((service) => service.slug === slug);

const visitSteps = [
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

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  services.map((service) => ({ slug: service.slug }));

export const generateMetadata = async ({ params }: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return {
      title: "Usługa | Justyna Jasińska",
    };
  }

  return {
    title: `${service.title} | Justyna Jasińska`,
    description: service.intro,
  };
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="service-page">
      <header className="course-page-header">
        <Link className="brand" href="/#top" aria-label="Powrót na stronę główną">
          <span className="brand-name">
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

      <section className="service-hero">
        <div className="service-hero-image">
          <Image
            src={service.image}
            alt={service.alt}
            width={1400}
            height={900}
            unoptimized
            priority
            sizes="(min-width: 820px) 1180px, 100vw"
          />
        </div>
        <div className="service-hero-copy">
          <p className="eyebrow">Oferta</p>
          <h1>{keepShortWords(service.title)}</h1>
          <p>{keepShortWords(service.intro)}</p>
          <a className="primary-button" href={bookingUrl}>
            Umów się na spotkanie
          </a>
        </div>
      </section>

      <section className="service-detail">
        {service.items.length > 0 ? (
          <div className="service-detail-card">
            <h2>{keepShortWords(service.listTitle)}</h2>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{keepShortWords(item)}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="service-detail-card">
            <h2>{keepShortWords(service.title)}</h2>
            <p>{keepShortWords(service.intro)}</p>
          </div>
        )}
      </section>

      <section className="method-section service-method">
        <div className="section method-inner">
          <div className="section-heading method-heading">
            <h2>Jak wygląda wizyta</h2>
          </div>

          <div className="process-grid">
            {visitSteps.map((step) => (
              <article className="process-card" key={step.number}>
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

      <section className="service-cta">
        <p className="eyebrow">Konsultacja</p>
        <h2>{keepShortWords("Umów konsultację i sprawdź, jaki kierunek terapii będzie najlepszy")}</h2>
        <div className="service-cta-actions">
          <a className="primary-button" href={bookingUrl}>
            Umów się na spotkanie
          </a>
          <Link className="secondary-button" href="/#oferta">
            Wróć do oferty
          </Link>
        </div>
      </section>
    </main>
  );
}
