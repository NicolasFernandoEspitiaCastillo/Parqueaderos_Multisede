// 3 sedes en distintas ciudades.

db.sedes.insertMany([{ciudad: "Bogotá"}, {ciudad: "Bucaramanga"}, {ciudad: "Medellín"}])


// 5 zonas por sede, con cupos, precios y tipos de vehículo permitidos.

// Bogotá :

db.zonas.insertMany([
  {
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    nombre: "A1",
    capacidad_maxima: 5,
    cupos_disponibles: 2,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    nombre: "A2",
    capacidad_maxima: 6,
    cupos_disponibles: 3,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    nombre: "B1",
    capacidad_maxima: 7,
    cupos_disponibles: 5,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    nombre: "B2",
    capacidad_maxima: 5,
    cupos_disponibles: 1,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    nombre: "C1",
    capacidad_maxima: 6,
    cupos_disponibles: 4,
    tarifa_por_hora: 1000,
    tipo_vehiculo: ["bicicleta"],
  },
]);


//Bucaramanga : 

db.zonas.insertMany([
  {
    sede_id: ObjectId('686554833c1bbd10332ee894'),
    nombre: "A1",
    capacidad_maxima: 7,
    cupos_disponibles: 3,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee894'),
    nombre: "A2",
    capacidad_maxima: 6,
    cupos_disponibles: 2,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee894'),
    nombre: "B1",
    capacidad_maxima: 6,
    cupos_disponibles: 6,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee894'),
    nombre: "B2",
    capacidad_maxima: 5,
    cupos_disponibles: 4,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee894'),
    nombre: "C1",
    capacidad_maxima: 7,
    cupos_disponibles: 3,
    tarifa_por_hora: 1000,
    tipo_vehiculo: ["bicicleta"],
  },
]);


// Medellín : 


db.zonas.insertMany([
  {
    sede_id: ObjectId('686554833c1bbd10332ee895'),
    nombre: "A1",
    capacidad_maxima: 7,
    cupos_disponibles: 5,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee895'),
    nombre: "A2",
    capacidad_maxima: 6,
    cupos_disponibles: 3,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee895'),
    nombre: "B1",
    capacidad_maxima: 5,
    cupos_disponibles: 3,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee895'),
    nombre: "B2",
    capacidad_maxima: 7,
    cupos_disponibles: 5,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId('686554833c1bbd10332ee895'),
    nombre: "C1",
    capacidad_maxima: 5,
    cupos_disponibles: 2,
    tarifa_por_hora: 1000,
    tipo_vehiculo: ["bicicleta"],
  },
]);


// 10 empleados distribuidos entre las sedes.

db.usuarios.insertMany([
{
      nombre: "Carlos Méndez",
      cedula: "1098457321",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee893")
    },
    {
      nombre: "Luisa Rodríguez",
      cedula: "1032567811",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee893")
    },
    {
      nombre: "Andrés Martínez",
      cedula: "1045678912",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee893")
    },
    {
      nombre: "Patricia Herrera",
      cedula: "1067890123",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee893")
    },
    {
      nombre: "Roberto Silva",
      cedula: "1078901234",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee894")
    },
    {
      nombre: "Sandra Vargas",
      cedula: "1089012345",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee894")
    },
    {
      nombre: "Diego Ramírez",
      cedula: "1090123456",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee894")
    },
    {
      nombre: "Carmen Jiménez",
      cedula: "1101234567",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee895")
    },
    {
      nombre: "Miguel Ortega",
      cedula: "1112345678",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee895")
    },
    {
      nombre: "Alejandra Morales",
      cedula: "1123456789",
      rol: "empleado",
      sede_id: ObjectId("686554833c1bbd10332ee895")
    }
])
  

// 15 clientes con sus datos completos.


db.usuarios.insertMany([
{
      nombre: "María Torres",
      cedula: "1003456789",
      rol: "cliente"
    },
    {
      nombre: "Julián Pérez",
      cedula: "1012345678",
      rol: "cliente"
    },
    {
      nombre: "Andrea Gómez",
      cedula: "1023456790",
      rol: "cliente"
    },
    {
      nombre: "Fernando Castro",
      cedula: "1034567891",
      rol: "cliente"
    },
    {
      nombre: "Claudia Ramos",
      cedula: "1045678902",
      rol: "cliente"
    },
    {
      nombre: "Ricardo Delgado",
      cedula: "1056789013",
      rol: "cliente"
    },
    {
      nombre: "Natalia Vega",
      cedula: "1067890124",
      rol: "cliente"
    },
    {
      nombre: "Gabriel Ruiz",
      cedula: "1078901235",
      rol: "cliente"
    },
    {
      nombre: "Valentina Suárez",
      cedula: "1089012346",
      rol: "cliente"
    },
    {
      nombre: "Sebastián Moreno",
      cedula: "1090123457",
      rol: "cliente"
    },
    {
      nombre: "Camila Guerrero",
      cedula: "1101234568",
      rol: "cliente"
    },
    {
      nombre: "Alejandro Figueroa",
      cedula: "1112345679",
      rol: "cliente"
    },
    {
      nombre: "Daniela Cortés",
      cedula: "1123456780",
      rol: "cliente"
    },
    {
      nombre: "Mauricio Salazar",
      cedula: "1134567891",
      rol: "cliente"
    },
    {
      nombre: "Paola Restrepo",
      cedula: "1145678902",
      rol: "cliente"
    }])
