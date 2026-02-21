const pool = require("./pool");

async function getCarBrands() {
  const { rows } = await pool.query("SELECT * FROM car_brand");
  // console.log(rows);
  return rows;
}

async function getCarTypes() {
  const { rows } = await pool.query("SELECT * FROM car_type");
  // console.log(rows);
  return rows;
}
async function createNewBrand(brandName) {
  await pool.query(
    `INSERT INTO car_brand (model_name) VALUES ('${brandName}')`,
  );
}

async function createNewType(typeName, typeDesc) {
  await pool.query(
    `INSERT INTO car_type (type, description) VALUES ('${typeName}', '${typeDesc}')`,
  );
}

module.exports = {
  getCarBrands,
  getCarTypes,
  createNewBrand,
  createNewType,
};
