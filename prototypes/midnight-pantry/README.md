# Midnight Pantry (prototyp)

Pionowy auto battler / roguelike na jedną rękę. Lodówka babci broni się nocą przed Pleśnią.

- `index.html` to cały prototyp w jednym pliku (bez frameworka, bez builda). Otwórz go w przeglądarce telefonu.
- Plik nie ma własnego `<!doctype>`/`<head>`, bo jest też publikowany jako Claude Artifact, który dokłada szkielet strony.
- Postęp (magnesy, przepisy, najlepsza noc) zapisuje się w `localStorage`.
- Katalog leży poza `src/` i `public/`, więc nie trafia do builda portfolio.

## Pętla gry

1. Rano targ: kupujesz składniki (3 okruszki) i ustawiasz je na 5 półkach.
2. Najwyższa zajęta półka walczy pierwsza. Sąsiednie półki gotują przepisy (np. Ziemniak + Twaróg + Cebula = Pierogi).
3. Nocą walka toczy się automatycznie. Gracz steruje tylko ogniem (mały / średni / duży).
4. 10 nocy, bossowie w nocy 5 i 10. Magnesy na drzwiach lodówki zostają między runami.
