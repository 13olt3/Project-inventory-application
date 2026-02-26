const pool = require("./pool");

async function getCarBrands() {
  const { rows } = await pool.query("SELECT * FROM car_brand");
  return rows;
}
// console.log(rows);

async function getCarTypes() {
  const { rows } = await pool.query("SELECT * FROM car_type");
  // console.log(rows);
  return rows;
}
async function createNewBrand(brandName) {
  const values = [brandName];
  const query = `INSERT INTO car_brand (brand_name) VALUES ($1)`;
  await pool.query(query, values);
}

async function createNewType(typeName, typeDesc) {
  const values = [typeName, typeDesc];
  const query = `INSERT INTO car_type (type, description) VALUES ($1, $2)`;
  await pool.query(query, values);
}

async function createNewCar(carData) {
  const values = [
    carData.model_name,
    carData.car_color,
    carData.horsepower,
    carData.car_description,
    carData.brand_id,
    carData.type_id,
  ];
  const query = `INSERT INTO items (model_name, car_color, horsepower, car_description, brand_id, type_id)
    VALUES ($1,$2,$3,$4,$5,$6)`;
  await pool.query(query, values);
}

async function getAllCars() {
  const query = `SELECT * FROM all_cars`;
  const results = await pool.query(query);
  return results.rows;
}

async function deleteCar(carId) {
  const value = [carId];
  const query = `DELETE FROM items WHERE id = ($1)`;
  await pool.query(query, value);
}

async function getCarDetails(carId) {
  const value = [carId];
  const query = `SELECT * FROM all_cars WHERE id = ($1)`;
  const { rows } = await pool.query(query, value);
  return rows[0];
}

async function updateCarDetails(carData) {
  const query = `UPDATE items SET model_name = $1, car_color = $2, horsepower = $3, car_description = $4, brand_id = $5, type_id = $6 WHERE id = $7`;
  const values = [
    carData.model_name,
    carData.car_color,
    carData.horsepower,
    carData.car_description,
    carData.brand_id,
    carData.type_id,
    carData.car_id,
  ];
  await pool.query(query, values);
}

module.exports = {
  getCarBrands,
  getCarTypes,
  createNewBrand,
  createNewType,
  createNewCar,
  getAllCars,
  deleteCar,
  getCarDetails,
  updateCarDetails,
};
