# Midnight Pantry (prototyp v6)

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
- Dźwięki generowane w przeglądarce (Web Audio), wyciszanie przyciskiem ♪.

## Ekonomia i poziomy (v5)

- Składniki mają poziomy I–IV (kolor ramki karty, znaczek z cyfrą rzymską, podstawka na półce).
  Ceny: I = 3, II = 4, III = 5, IV = 6 monet. Legendarne IV: Dynia i Kurczak.
- Szanse na poziomy rosną z każdą nocą i są widoczne na blacie (tabela `ODDS` w kodzie).
- Co rano 10 monet, niewydane przepadają (jak w Super Auto Pets). Dostawa (nowe karty) kosztuje 1.
- Sprzedaż zwraca 100% wydanej kwoty, także za połączone kopie. Składnik z półki można przeciągnąć na blat, żeby sprzedać.
- TRZYMAJ zostawia kartę na blacie przy dostawie i do następnego ranka.
- Zdolności, które nagradzają częste zmiany: Jabłko (przy sprzedaży wzmacnia losowy składnik), Twaróg (rośnie przy każdej dostawie).

## Seed i Danie dnia (v6)

- Całe losowanie gry (sklep, poziomy, cele zdolności) idzie z generatora z seedem (`mulberry32`), a animacje dalej używają `Math.random`.
  Ten sam seed i te same ruchy dają ten sam przebieg.
- Ruchy gracza są zapisywane w `run.log` (`b` kup, `s` sprzedaj, `r` dostawa, `h` trzymaj, `w` zamiana, `n` noc). To podstawa pod powtórki,
  sprawdzanie wyników na serwerze i duchy do asynchronicznego PvP.
- DANIE DNIA: seed z dzisiejszej daty, ten sam dla wszystkich. Wynik = 100 × przetrwane noce + 25 × serca + 300 za wygraną + 50 za nowe dania ★★★.
  Rekord dnia zapisuje się lokalnie (na razie bez serwera i rankingu online).

## Grafika v6

- Drzwi lodówki są w 3D: front, grubość krawędzi i wewnętrzna strona z półkami na jajka, słoiki i masło.
  Przy otwieraniu kamera się oddala, drzwi skręcają w perspektywie, wypływa zimna mgła, mruga lampa i kamera wchodzi do środka.
- Wnętrze lodówki ma ściany boczne i sufit w perspektywie, lampę LED, żeberka na tylnej ścianie, uszczelkę i szklaną półkę z grubością.
