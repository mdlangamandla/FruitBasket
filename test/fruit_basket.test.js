const assert = require('assert');
const pg = require('pg');
const FruitBasket = require('../servises/FruitBasket');

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit_backet';

const pool = new pg.Pool({
  connectionString,
});

const basketInst = FruitBasket(pool);


beforeEach(async () => {
  
});

describe('Fruit-Basket Unit Testing Exercise....', () => {
 
  it('It Should find all fruits basket for a given fruit.', async () => {
    assert.deepEqual([{ "id": 4, "price": "4.00", "qty": 1, "type": "Banana" }], 
    await basketInst.findFruit({ type: "Banana" }));
  });

  it('It Should update the Fruit basket.', async () => {
    assert.equal('updated', await basketInst.updateQty({ type: "Orange" }));
  });

  it('It should create a new fruit basket for a given fruit type, quantity & fruit price.', async ()=>{
    await basketInst.addFruit({type:"Pineapple", price: 15.00});
  });

  it('It should show the total price of a given fruit in the basket.', async () => {
    assert.equal(1.50, await basketInst.totalPrice({ type: "Naartjie" }));
  })

  it('It should show the sum of the total of the fruit baskets for a given type of fruit.', async () => {
    assert.equal(2, await basketInst.sumFruits({type:"Pineapple"}))
  });
  
})