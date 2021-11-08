module.exports = (pool)=>{

    async function addFruit(theFruit){
        var fruit = theFruit.type;
        var price = theFruit.price;

        let checkFruit = await pool.query(`select type from fruitbasket where type = $1`,[fruit]);
        if(checkFruit.rowCount === 0){
            await pool.query(`insert into fruitbasket (type,qty,price) values ($1,$2,$3)`,[fruit,1,price])
        }
    }


    async function findFruit(find){
        let fruit = find.type;
        let fruits = await pool.query(`select * from fruitbasket where type = $1`, [fruit]);
        fruits = fruits.rows;
        return fruits;
    }

    async function updateQty(basket){
        const fruitType = basket.type;
        let checkFruit = (`select * from fruitbasket where type = $1`,[fruitType]);
        if(checkFruit.rowCount !== 0){
            await pool.query(`update fruitbasket set qty = qty + 1 where type = $1`,[fruitType]);
            return "updated"
        }
    }

  

    async function totalPrice(theFruit){
        let fruit = theFruit.type;
        let priceByQty = await pool.query(`select qty, price from fruitbasket where type = $1`, [fruit]);
        priceByQty = priceByQty.rows;
        let totalPrice = priceByQty[0].qty * priceByQty[0].price;
        return totalPrice;
    }

    async function sumFruits(theFruit){
        let fruit = theFruit.type;
        let allFruit = await pool.query(`select qty from fruitbasket where type = $1`, [fruit]);
       let sum = allFruit.rows[0].qty;
        return sum;
    }

    return {
        addFruit,
        findFruit,
        updateQty,
        sumFruits,        
        totalPrice
    }
}