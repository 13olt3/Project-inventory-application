const pool = require("./pool");

async function getCarBrands() {
  const { rows } = await pool.query("SELECT * FROM car_brand");
  console.log(rows);
  return rows;
}

module.exports = {
  getCarBrands,
};
