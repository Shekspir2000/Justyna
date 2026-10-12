import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the current homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Justyna Jasińska \| Fizjoterapia pediatryczna i stomatologiczna Kraków<\/title>/i);
  assert.match(html, /Skuteczna terapia zaczyna się od znalezienia przyczyny problemu/);
  assert.match(html, /Dla pacjenta/);
  assert.match(html, /Dla specjalisty/);
  assert.match(html, /W.trakcie wizyty zajmujemy się dolegliwościami/);
  assert.match(html, /id="o-mnie"/);
  assert.match(html, /id="oferta"/);
  assert.match(html, /id="kontakt"/);
  assert.match(html, /offer-infants-headroom\.png/);
  assert.match(html, /offer-children-back-exam\.png/);
  assert.match(html, /offer-logopedics-headroom\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("server-renders courses and all service routes", async () => {
  const routes = [
    ["/kursy", /Poniżej przedstawiam listę moich kursów/],
    ["/uslugi/fizjoterapia-niemowlat", /Fizjoterapia niemowląt/],
    ["/uslugi/fizjoterapia-dzieci", /Fizjoterapia dzieci/],
    ["/uslugi/fizjoterapia-stomatologiczna", /FIZJOTERAPIA STOMATOLOGICZNA/],
    ["/uslugi/szkolenia-dla-gabinetow-logopedycznych", /SZKOLENIA DLA GABINETÓW LOGOPEDYCZNYCH/],
  ];

  for (const [pathname, expectedText] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pathname);
    const html = await response.text();
    assert.match(html, expectedText, pathname);

    if (pathname === "/uslugi/fizjoterapia-stomatologiczna") {
      assert.match(html, /bruksizm i.zaciskanie zębów \(zaciskanie i.zgrzytanie zębami\)/i);
      assert.match(html, /napięciowe bóle głowy/i);
    }

    if (pathname === "/uslugi/szkolenia-dla-gabinetow-logopedycznych") {
      assert.match(html, /W.celu poznania szczegółowej oferty szkolenia proszę o.kontakt mailowy/i);
      assert.match(html, /mailto:j\.jasinska@gmail\.com/i);
      assert.doesNotMatch(html, /Umów się na spotkanie/i);
      assert.doesNotMatch(html, /Umów konsultację i/i);
    }

  }
});
