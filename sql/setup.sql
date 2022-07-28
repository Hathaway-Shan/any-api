-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists magic;

CREATE table magic (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  color VARCHAR NOT NULL,
  cmc VARCHAR NOT NULL,
  type VARCHAR NOT NULL
);

INSERT INTO magic (name, color, cmc, type) VALUES
('Lightning Bolt', 'red', 'r', 'instant'),
('Swords to Plowshares', 'white', 'w', 'instant'),
('Ancestral Recall', 'blue', 'u', 'instant'),
('Thoughtseize', 'black', 'b', 'sorcery'),
('Birds of Paradise', 'green', 'g', 'creature');
