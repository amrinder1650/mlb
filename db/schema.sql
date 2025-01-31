DROP DATABASE IF EXISTS mlb;

create DATABASE mlb;

\c mlb;

create table teams (
  id SERIAL PRIMARY KEY,
  team text,
  wins numeric,
  losses numeric,
  win_pecentage numeric GENERATED ALWAYS AS (wins/(wins+losses+0.000000000000000000000000001)) STORED
);

create table schedule (
  id SERIAL PRIMARY KEY,
  date date,
  time time,
  home text,
  away text,
  home_score int,
  away_score int,
  finished boolean,
  winner text,
  loser text
);

-- \i /Users/amrindersingh/hrrpp36/mlb/mlb/db/schema.sql (<--PATH OF FILE)
-- insert into teams (team, wins, losses) values ('Richmond', 2, 1);
