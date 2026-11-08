# Midnight Pantry (prototyp v4)

Pionowy auto battler / roguelike na jedną rękę. Składniki z lodówki bronią kuchni przed Pleśnią przez 10 nocy.

- `index.html` to cały prototyp w jednym pliku (bez frameworka, bez builda). Otwórz go w przeglądarce telefonu.
- Plik nie ma własnego `<!doctype>`/`<head>`, bo jest też publikowany jako Claude Artifact, który dokłada szkielet strony.
- Postęp (najlepsza noc, ugotowane dania ★★★) zapisuje się w `localStorage`.
- Katalog leży poza `src/` i `public/`, więc nie trafia do builda portfolio.

## Grafiki (CC0)

- Jedzenie: „16x16 Food” autorstwa ARoachIFoundOnMyPillow, OpenGameArt.org, CC0 — https://opengameart.org/content/16x16-food
- Potwory: „32x32 Colorful Slimes” autorstwa AndHeGames, OpenGameArt.org, CC0 — https://opengameart.org/content/32x32-colorful-slimes
- Osadzone w pliku jako data URI, skalowane o całe wielokrotności bez wygładzania.
- Tekstury (emalia, szron, drewno, kafelki), patelnia i moneta są rysowane kodem w małej rozdzielczości.

## Kierunek

- Wygląd: pixel-art z efektem CRT i mocnymi reakcjami (inspiracja Balatro) + rysunkowe postacie (inspiracja Isaac / Wildfrost).
- Scena v4 to kuchnia o północy:
  - ekran tytułowy to zamknięte drzwi lodówki z literkami-magnesami i karteczką od Babci,
  - na górze zamrażalnik ze szronem, z którego wychodzą potwory,
  - pod nim oświetlone wnętrze lodówki ze szklaną półką na twoje składniki,
  - na dole drewniany blat z zakupami,
  - w HUD słoik z zakwasem (życie), kalendarz (noc) i zegar.
- Przejścia:
  - „Otwórz lodówkę” otwiera drzwi z błyskiem światła,
  - „Zamknij” zatrzaskuje drzwi i w środku robi się noc (gaśnie żarówka, świeci zamrażalnik, inny dźwięk buczenia),
  - potwory „rozmrażają się” jeden po drugim, a boss ma swój baner,
  - o świcie zegar dobiega 06:00, drzwi się zamykają i otwierają na dzień,
  - wypłata wychodzi jako paragon „Sklep u Babci”.
- Łączenie jak w TFT: 3 kupione kopie trafiają na patelnię (skwierczenie, para) i wyskakują jako ★★, kolejne 3 jako danie ★★★
  (np. Ziemniak → Frytki → Placki, Burak → Ćwikła → Barszcz). Dania ★★★ wiszą potem na drzwiach jako magnesy.
- Rząd 5 miejsc jak w Super Auto Pets, pierwszy z lewej walczy pierwszy. Zepsuty składnik zielenieje i spada z półki.
- Rzadkość składników to kolor ramki karty: szary od nocy 1, niebieski od 3, fioletowy od 5.
- Dźwięki generowane w przeglądarce (Web Audio), wyciszanie przyciskiem ♪.
