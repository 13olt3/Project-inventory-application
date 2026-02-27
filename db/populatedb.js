const { Client } = require("pg");

const VIEWS = `
DROP VIEW IF EXISTS all_cars;
CREATE VIEW all_cars AS
SELECT model_name, brand_name, type, items.id, car_color, horsepower, car_description FROM items
JOIN car_brand ON items.brand_id = car_brand.id
JOIN car_type ON items.type_id = car_type.id;

`;

const CREATE_TABLES = `
CREATE TABLE IF NOT EXISTS car_brand (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 brand_name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS car_type (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 type VARCHAR (255),
 description TEXT
);

CREATE TABLE IF NOT EXISTS items (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 model_name VARCHAR (255),
 car_color VARCHAR (255),
 horsepower INTEGER,
 car_description TEXT,
 brand_id INTEGER REFERENCES car_brand(id) ON DELETE RESTRICT,
 type_id INTEGER REFERENCES car_type(id) ON DELETE RESTRICT
);
`;

const POPULATE_TABLES = `
TRUNCATE items, car_brand, car_type RESTART IDENTITY CASCADE;

INSERT INTO car_brand (brand_name)
 VALUES 
 ('Toyota'),
 ('Honda'),
 ('Porsche'),
 ('Suzuki'),
 ('Ford'),
 ('Lexus'),
 ('Nissan'),
 ('Mazda'),
 ('BMW');

INSERT INTO car_type (type, description)
 VALUES
 ('Sedan', 'Standard shaped car with a pop open boot at the back.'),
 ('Hatchback', 'Similar to a sedan, however the boot is larger and incorporated into the car.'),
 ('4WD', 'All four wheels of this car push to move the car forward.'),
 ('Convertible', 'The top of this car can collapse to give unlimited headroom.');
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `${process.env.NEON_URL}`,
  });
  await client.connect();
  await client.query(CREATE_TABLES);
  console.log("tables created");
  await client.query(POPULATE_TABLES);
  console.log("tables populated");
  await client.query(VIEWS);
  console.log("views created");
  await client.end();
  console.log("done");
}

main();
