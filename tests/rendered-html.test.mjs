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
  assert.match(html, /Pomagam znaleźć przyczynę Twoich dolegliwości/);
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
    assert.match(await response.text(), expectedText, pathname);
  }
});
