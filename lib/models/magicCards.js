const pool = require('../utils/pool');

module.exports = class Card {
  id;
  name;
  color;
  cmc;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
    this.cmc = row.cmc;
    this.type = row.type;
  }
};
