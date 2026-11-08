# Midnight Pantry: ranking Dania dnia (Cloudflare Worker + D1)

Backend rankingu dla aplikacji. W artifactcie na claude.ai ranking działa bez tego serwera,
na wspólnej bazie artifactu (kolekcja `lb`, jeden dokument na gracza).

## API

- `GET /daily/:date?limit=25` zwraca `{ rows: [{ player, name, score, night }] }`, najlepsi pierwsi.
- `POST /daily/:date` z `{ player, name, score, night, hp, seed, log }` zwraca `{ status: "saved" | "kept" }`.
  Na dzień zostaje tylko najlepszy wynik gracza.

Sprawdzane teraz: data (wczoraj–jutro względem UTC), seed równy seedowi dnia, zakresy wartości,
górna granica wyniku z nocy i serc, rozmiar logu. Jeszcze nie: odtworzenie `log` przez zasady gry
i przeliczenie wyniku na serwerze (wymaga wydzielenia logiki gry do wspólnego modułu).

## Wdrożenie

```bash
cd prototypes/midnight-pantry/server
npx wrangler d1 create midnight-pantry        # wklej database_id do wrangler.toml
npx wrangler d1 execute midnight-pantry --remote --file=schema.sql
npx wrangler deploy                           # wypisze adres, np. https://midnight-pantry-api.<konto>.workers.dev
```

Potem zbuduj aplikację z tym adresem:

```bash
cd ../app
MP_API=https://midnight-pantry-api.<konto>.workers.dev npm run sync
```

## Testy

`npm test` uruchamia Workera na SQLite w pamięci (Node 22.13+), bez Cloudflare.
