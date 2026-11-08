# Midnight Pantry (prototyp v2)

Pionowy auto battler / roguelike na jedną rękę. Lodówka babci broni się nocą przed Pleśnią.

- `index.html` to cały prototyp w jednym pliku (bez frameworka, bez builda). Otwórz go w przeglądarce telefonu.
- Plik nie ma własnego `<!doctype>`/`<head>`, bo jest też publikowany jako Claude Artifact, który dokłada szkielet strony.
- Postęp (magnesy, przepisy, najlepsza noc) zapisuje się w `localStorage`.
- Katalog leży poza `src/` i `public/`, więc nie trafia do builda portfolio.

## Zasady v2 (uproszczone po pierwszym teście)

1. Rano targ: 3 karty, każdy składnik kosztuje 3 okruszki. Ustawiasz je na 5 półkach.
2. Nocą walka jest sekwencją starć: najwyższy składnik kontra pierwszy potwór, oba biją naraz.
   Każda zdolność odpala się w jednym nazwanym momencie (Start nocy, W starciu, Po starciu, Po zepsuciu, Rano).
3. Systemy odblokowują się po kolei: noc 1 tylko kupowanie, noc 2 przepisy, noc 3 łączenie i nowe składniki, noc 5 najmocniejsze składniki.
4. 10 nocy, 5 serc Zakwasu, bossowie w nocy 5 i 10. Magnesy i przepisy zostają na lodówce między runami.

Wycięte z v1 (do ewentualnego powrotu później): przyprawy, gałka ognia, kiszenie okruszków, myszy i mole, walka w czasie rzeczywistym.
