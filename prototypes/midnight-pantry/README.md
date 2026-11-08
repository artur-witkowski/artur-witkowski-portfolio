# Midnight Pantry (prototyp v3)

Pionowy auto battler / roguelike na jedną rękę. Składniki z lodówki bronią kuchni przed Pleśnią przez 10 nocy.

- `index.html` to cały prototyp w jednym pliku (bez frameworka, bez builda). Otwórz go w przeglądarce telefonu.
- Plik nie ma własnego `<!doctype>`/`<head>`, bo jest też publikowany jako Claude Artifact, który dokłada szkielet strony.
- Postęp (najlepsza noc, ugotowane dania ★★★) zapisuje się w `localStorage`.
- Katalog leży poza `src/` i `public/`, więc nie trafia do builda portfolio.

## Kierunek v3 (po drugim teście)

- Wygląd: pixel-art z efektem CRT i mocnymi reakcjami (inspiracja Balatro) + rysunkowe postacie z grubym konturem (inspiracja Isaac / Wildfrost).
- Grafiki składników: paczka „16x16 Food” autorstwa ARoachIFoundOnMyPillow z OpenGameArt.org, licencja CC0
  (https://opengameart.org/content/16x16-food). Są osadzone w pliku jako data URI i skalowane ×3/×4 bez wygładzania.
  Potwory, serca i moneta są nadal rysowane kodem.
- Bohaterami są same składniki (bez głównej postaci).
- Rząd 5 miejsc jak w Super Auto Pets, pierwszy z lewej walczy pierwszy.
- Łączenie jak w TFT: 3 kupione kopie automatycznie łączą się w formę ★★, kolejne 3 w danie ★★★
  (np. Ziemniak → Frytki → Placki, Burak → Ćwikła → Barszcz).
- Rzadkość składników to kolor ramki karty: szary od nocy 1, niebieski od 3, fioletowy od 5.
- Dźwięki generowane w przeglądarce (Web Audio), wyciszanie przyciskiem ♪.

Wycięte względem v2: przepisy z sąsiednich półek (zastąpione ewolucją przez łączenie).
