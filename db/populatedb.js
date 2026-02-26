const { Client } = require("pg");

const VIEWS = `
CREATE VIEW all_cars AS
SELECT model_name, brand_name, type, items.id, car_color, horsepower, car_description FROM items
JOIN car_brand ON items.brand_id = car_brand.id
JOIN car_type ON items.type_id = car_type.id;

`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `${process.env.DB_URL}`,
  });
  await client.connect();
  await client.query(VIEWS);
  await client.end();
  console.log("done");
}

main();
