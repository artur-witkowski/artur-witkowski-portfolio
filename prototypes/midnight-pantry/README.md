# Midnight Pantry (prototyp v3)

Pionowy auto battler / roguelike na jedną rękę. Składniki z lodówki bronią kuchni przed Pleśnią przez 10 nocy.

- `index.html` to cały prototyp w jednym pliku (bez frameworka, bez builda). Otwórz go w przeglądarce telefonu.
- Plik nie ma własnego `<!doctype>`/`<head>`, bo jest też publikowany jako Claude Artifact, który dokłada szkielet strony.
- Postęp (najlepsza noc, ugotowane dania ★★★) zapisuje się w `localStorage`.
- Katalog leży poza `src/` i `public/`, więc nie trafia do builda portfolio.

## Kierunek v3 (po drugim teście)

- Wygląd: pixel-art z efektem CRT i mocnymi reakcjami (inspiracja Balatro) + rysunkowe postacie z grubym konturem (inspiracja Isaac / Wildfrost).
  Sprite'y są rysowane kodem w 32×32, dostają kontur i cieniowanie, potem są skalowane bez wygładzania.
- Bohaterami są same składniki z buźkami.
- Rząd 5 miejsc jak w Super Auto Pets, pierwszy z lewej walczy pierwszy.
- Łączenie jak w TFT: 3 kupione kopie automatycznie łączą się w formę ★★, kolejne 3 w danie ★★★
  (np. Ziemniak → Pieczony ziemniak → Placki).
- Rzadkość składników to kolor ramki karty: szary od nocy 1, niebieski od 3, fioletowy od 5.
- Dźwięki generowane w przeglądarce (Web Audio), wyciszanie przyciskiem ♪.

Wycięte względem v2: przepisy z sąsiednich półek (zastąpione ewolucją przez łączenie).
