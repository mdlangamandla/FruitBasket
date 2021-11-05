const assert = require('assert');
const pg = require('pg');
const FruitBasket = require('../fruit-servises/FruitBasket');

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit_backet';

const pool = new pg.Pool({
  connectionString,
});

const backetInst = FruitBasket(pool);


beforeEach(async () => {
  
});

describe('Fruit-Basket Tests', () => {
  it('create a new fruit basket for a given fruit type, qty & fruit price', async ()=>{
    await backetInst.addFruit({type:"Pineapple", price: 15.00});
  });
  it('Should find all fruits backet for the given fruit', async () => {
    assert.deepEqual([{ "id": 4, "price": "4.00", "qty": 1, "type": "Banana" }], await backetInst.findFruit({ type: "Mango" }));
  });
  it('It Should update to the Fruit backet.', async () => {
    assert.equal('updated', await backetInst.updateQty({ type: "Orange" }));
  });
  it('It should show the total price of a given fruit in the basket.', async () => {
    assert.equal(4.00, await backetInst.totalPrice({ type: "Banana" }));
  })
  it('It should show the sum of the total of the fruit baskets for a given type of fruit.', async () => {
    assert.equal(2, await backetInst.totalFruits({type:"Banana"}))
  });
})