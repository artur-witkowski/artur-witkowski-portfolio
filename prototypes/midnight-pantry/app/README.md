# Midnight Pantry: aplikacja (Capacitor 8)

Opakowanie prototypu w aplikację iOS i Android. Gra nadal żyje w jednym pliku `../index.html`
(ten sam plik jest publikowany jako Claude Artifact), a ten folder tylko z niego buduje aplikację.

## Jak odpalić

```bash
cd prototypes/midnight-pantry/app
npm install
npm run ios        # buduje www/, synchronizuje i otwiera Xcode
npm run android    # to samo dla Android Studio
```

- `npm run build` robi `www/index.html` z `../index.html`: dokłada `<!doctype>`, `<head>`, viewport z `viewport-fit=cover`
  i padding pod notch / pasek domowy, który w artifactcie dodaje claude.ai.
- `npm run sync` = build + `cap sync` (kopiuje `www/` do projektów natywnych).
- iOS używa Swift Package Manager (bez CocoaPods). Wymaga Xcode 16+.

## Co jest natywne

- `@capacitor/haptics`: wibracje przy trzaśnięciu drzwiami, łączeniu na patelni, ciosach i bossie.
  W przeglądarce i w artifactcie te wywołania nic nie robią.
- `@capacitor/status-bar`: ciemny pasek statusu nałożony na grę.

## Do zrobienia przed wydaniem

- Font Jersey 10 jest ładowany z Google Fonts; do aplikacji trzeba go dołączyć lokalnie (działanie offline).
- Ikona i splash (np. `@capacitor/assets`).
- Widget „Danie dnia” jako rozszerzenie WidgetKit w Swifcie, dane z gry przez App Group.
- Game Center / ranking online.
