-- Daily leaderboard: one row per player per day, best score kept.
CREATE TABLE IF NOT EXISTS scores (
  date       TEXT    NOT NULL,          -- YYYY-MM-DD of the daily dish
  player     TEXT    NOT NULL,          -- per-device id from the app
  name       TEXT    NOT NULL,          -- nickname, max 16 chars
  score      INTEGER NOT NULL,
  night      INTEGER NOT NULL,          -- nights survived
  hp         INTEGER NOT NULL,          -- hearts left
  seed       INTEGER NOT NULL,          -- must equal the daily seed for `date`
  log        TEXT    NOT NULL,          -- player actions, for replay checks later
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (date, player)
);
CREATE INDEX IF NOT EXISTS scores_by_day ON scores (date, score DESC);
