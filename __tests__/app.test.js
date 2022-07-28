const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('magic routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  //test for return of full list of DB items

  it('/magic returns a list of magic cards', async () => {
    const res = await request(app).get('/magic');
    expect(res.body.length).toEqual(5);
  });
  it('/magic/:id returns cards detail', async () => {
    const res = await request(app).get('/magic/1');
    const bolt = {
      id: '1',
      name: 'Lightning Bolt',
      color: 'red',
      cmc: 'r',
      type: 'instant',
    };
    expect(res.body).toEqual(bolt);
  });
});
