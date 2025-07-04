// 3 sedes en distintas ciudades.

db.sedes.insertMany([
  { ciudad: "Bogotá" },
  { ciudad: "Bucaramanga" },
  { ciudad: "Medellín" },
]);

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
    sede_id: ObjectId("686554833c1bbd10332ee894"),
    nombre: "A1",
    capacidad_maxima: 7,
    cupos_disponibles: 3,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee894"),
    nombre: "A2",
    capacidad_maxima: 6,
    cupos_disponibles: 2,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee894"),
    nombre: "B1",
    capacidad_maxima: 6,
    cupos_disponibles: 6,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee894"),
    nombre: "B2",
    capacidad_maxima: 5,
    cupos_disponibles: 4,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee894"),
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
    sede_id: ObjectId("686554833c1bbd10332ee895"),
    nombre: "A1",
    capacidad_maxima: 7,
    cupos_disponibles: 5,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee895"),
    nombre: "A2",
    capacidad_maxima: 6,
    cupos_disponibles: 3,
    tarifa_por_hora: 2000,
    tipo_vehiculo: ["moto"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee895"),
    nombre: "B1",
    capacidad_maxima: 5,
    cupos_disponibles: 3,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee895"),
    nombre: "B2",
    capacidad_maxima: 7,
    cupos_disponibles: 5,
    tarifa_por_hora: 3000,
    tipo_vehiculo: ["carro", "camion"],
  },
  {
    sede_id: ObjectId("686554833c1bbd10332ee895"),
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
    sede_id: ObjectId("686554833c1bbd10332ee893"),
  },
  {
    nombre: "Luisa Rodríguez",
    cedula: "1032567811",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee893"),
  },
  {
    nombre: "Andrés Martínez",
    cedula: "1045678912",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee893"),
  },
  {
    nombre: "Patricia Herrera",
    cedula: "1067890123",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee893"),
  },
  {
    nombre: "Roberto Silva",
    cedula: "1078901234",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee894"),
  },
  {
    nombre: "Sandra Vargas",
    cedula: "1089012345",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee894"),
  },
  {
    nombre: "Diego Ramírez",
    cedula: "1090123456",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee894"),
  },
  {
    nombre: "Carmen Jiménez",
    cedula: "1101234567",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee895"),
  },
  {
    nombre: "Miguel Ortega",
    cedula: "1112345678",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee895"),
  },
  {
    nombre: "Alejandra Morales",
    cedula: "1123456789",
    rol: "empleado",
    sede_id: ObjectId("686554833c1bbd10332ee895"),
  },
]);

// 15 clientes con sus datos completos.

db.usuarios.insertMany([
  {
    nombre: "María Torres",
    cedula: "1003456789",
    rol: "cliente",
  },
  {
    nombre: "Julián Pérez",
    cedula: "1012345678",
    rol: "cliente",
  },
  {
    nombre: "Andrea Gómez",
    cedula: "1023456790",
    rol: "cliente",
  },
  {
    nombre: "Fernando Castro",
    cedula: "1034567891",
    rol: "cliente",
  },
  {
    nombre: "Claudia Ramos",
    cedula: "1045678902",
    rol: "cliente",
  },
  {
    nombre: "Ricardo Delgado",
    cedula: "1056789013",
    rol: "cliente",
  },
  {
    nombre: "Natalia Vega",
    cedula: "1067890124",
    rol: "cliente",
  },
  {
    nombre: "Gabriel Ruiz",
    cedula: "1078901235",
    rol: "cliente",
  },
  {
    nombre: "Valentina Suárez",
    cedula: "1089012346",
    rol: "cliente",
  },
  {
    nombre: "Sebastián Moreno",
    cedula: "1090123457",
    rol: "cliente",
  },
  {
    nombre: "Camila Guerrero",
    cedula: "1101234568",
    rol: "cliente",
  },
  {
    nombre: "Alejandro Figueroa",
    cedula: "1112345679",
    rol: "cliente",
  },
  {
    nombre: "Daniela Cortés",
    cedula: "1123456780",
    rol: "cliente",
  },
  {
    nombre: "Mauricio Salazar",
    cedula: "1134567891",
    rol: "cliente",
  },
  {
    nombre: "Paola Restrepo",
    cedula: "1145678902",
    rol: "cliente",
  },
]);

// 30 vehículos, de al menos 4 tipos diferentes, asignados a los clientes.

db.vehiculos.insertMany([
  {
    placa: "JDK-823",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b5"),
  },
  {
    placa: "XMV-34G",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b5")
  }
]);

db.vehiculos.insertMany([
  {
    placa: "7298461023",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b6"),
  },
  {
    placa: "LPR-529",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b6")
  }
]);


db.vehiculos.insertMany([
  {
    placa: "QWX-89H",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b7"),
  },
  {
    placa: "CWK-583",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b7")
  }
]);


db.vehiculos.insertMany([
  {
    placa: "HGT-912",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b8")
  },
  {
    placa: "MNL-47F",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b8")
  },
  {
    placa: "4283905712",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b9")
  },
  {
    placa: "ZXC-735",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b9")
  },
  {
    placa: "LPD-12T",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8ba")
  },
  {
    placa: "1284960375",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8ba")
  },
  {
    placa: "BNV-004",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bb")
  },
  {
    placa: "TRD-81W",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bb")
  },
  {
    placa: "MPO-561",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bc")
  },
  {
    placa: "3957162830",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bc")
  },
  {
    placa: "YUI-17J",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bd")
  },
  {
    placa: "AKT-438",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bd")
  },
  {
    placa: "3029485710",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8be")
  },
  {
    placa: "QAZ-659",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8be")
  },
  {
    placa: "REW-35L",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bf")
  },
  {
    placa: "CNB-739",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8bf")
  },
  {
    placa: "1837465920",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c0")
  },
  {
    placa: "VBN-506",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c0")
  },
  {
    placa: "KLM-83H",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c1")
  },
  {
    placa: "DSE-271",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c1")
  },
  {
    placa: "9573846201",
    tipo_vehiculo: "bicicleta",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c2")
  },
  {
    placa: "HNC-583",
    tipo_vehiculo: "camion",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c2")
  },
  {
    placa: "WSX-67M",
    tipo_vehiculo: "moto",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c3")
  },
  {
    placa: "LOP-341",
    tipo_vehiculo: "carro",
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8c3")
  }
]);


// 50 registros de parqueos, mezclando sedes, zonas y tipos de vehículos. 
// Algunos deben estar actualmente activos (sin hora de salida).


db.parqueos.insertMany([{
 _id: ObjectId('6866fcd3e0cccb8b371e4bbe'),
  vehiculo_id: ObjectId('6866ad4be0cccb8b371e4ba0'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b5'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate('2025-06-06T13:41:23.000Z'),
  hora_salida: ISODate('2025-06-06T18:22:23.000Z'),
  tiempo_total: 4.68,
  costo: 14040,
  activo: false
},
{
  _id: ObjectId('6866fcd3e0cccb8b371e4bbf'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba2'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate('2025-06-25T04:03:53.000Z'),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
  _id: ObjectId('6866fcd3e0cccb8b371e4bc0'),
  vehiculo_id: ObjectId('6866b0d7e0cccb8b371e4ba5'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b7'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate('2025-06-21T16:19:01.000Z'),
  hora_salida: ISODate('2025-06-21T21:04:01.000Z'),
  tiempo_total: 4.75,
  costo: 14250,
  activo: false
},
{
  _id: ObjectId('6866fcd3e0cccb8b371e4bc1'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba7'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b8'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89d'),
  hora_entrada: ISODate('2025-06-09T09:46:15.000Z'),
  hora_salida: ISODate('2025-06-09T13:14:15.000Z'),
  tiempo_total: 3.47,
  costo: 6940,
  activo: false
},
{
  _id: ObjectId('6866fcd3e0cccb8b371e4bc2'),
  vehiculo_id: ObjectId('6866bf2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate('2025-06-29T06:21:32.000Z'),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
  _id: ObjectId('68670964e0cccb8b371e4bc3'),
  vehiculo_id: ObjectId('6866bf2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate('2025-06-20T15:12:54.000Z'),
  hora_salida: ISODate('2025-06-20T20:24:54.000Z'),
  tiempo_total: 5.2,
  costo: 15600,
  activo: false
},

{
  _id: ObjectId('68670694e0cccb8b371e4bc4'),
  vehiculo_id: ObjectId('6866b4bebcccb8b371e4ba1'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b5'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89d'),
  hora_entrada: ISODate("2025-06-11T07:32:17.000Z"),
  hora_salida: ISODate("2025-06-11T11:14:17.000Z"),
  tiempo_total: 3.7,
  costo: 7400,
  activo: false
},
{
  _id: ObjectId('68670694e0cccb8b371e4bc5'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba2'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-19T10:05:44.000Z"),
  hora_salida: ISODate("2025-06-19T12:41:44.000Z"),
  tiempo_total: 2.6,
  costo: 2600,
  activo: false
},
{
  _id: ObjectId('68670694e0cccb8b371e4bc6'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba9'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-14T11:47:59.000Z"),
  hora_salida: ISODate("2025-06-14T14:01:59.000Z"),
  tiempo_total: 2.23,
  costo: 6690,
  activo: false
},
{
  _id: ObjectId('68670694e0cccb8b371e4bc7'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba4'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b7'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89c'),
  hora_entrada: ISODate("2025-06-05T08:12:32.000Z"),
  hora_salida: ISODate("2025-06-05T13:02:32.000Z"),
  tiempo_total: 4.83,
  costo: 9660,
  activo: false
},
{
  _id: ObjectId('68670694e0cccb8b371e4bc8'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-17T15:40:41.000Z"),
  hora_salida: ISODate("2025-06-17T18:22:41.000Z"),
  tiempo_total: 2.7,
  costo: 8100,
  activo: false
},
{
  _id: ObjectId('68670694e0cccb8b371e4bc9'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-15T12:17:10.000Z"),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
  _id: ObjectId('68670694e0cccb8b371e4bca'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee894'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-10T07:45:39.000Z"),
  hora_salida: ISODate("2025-06-10T13:22:39.000Z"),
  tiempo_total: 5.62,
  costo: 16800,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb4f'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba3'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-07-01T23:52:10.924Z"),
  hora_salida: ISODate("2025-07-02T01:44:22.924Z"),
  tiempo_total: 1.87,
  costo: 5610,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb50'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-07-03T00:52:10.924Z"),
  hora_salida: ISODate("2025-07-03T05:31:46.924Z"),
  tiempo_total: 4.66,
  costo: 13980,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb51'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-16T00:52:10.924Z"),
  hora_salida: ISODate("2025-06-16T03:31:46.924Z"),
  tiempo_total: 2.66,
  costo: 7980,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb52'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-24T03:52:10.924Z"),
  hora_salida: ISODate("2025-06-24T08:14:58.924Z"),
  tiempo_total: 4.38,
  costo: 4380,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb53'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-06T21:52:10.924Z"),
  hora_salida: ISODate("2025-06-06T23:38:22.924Z"),
  tiempo_total: 1.77,
  costo: 5310,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb54'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba3'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-07-03T03:52:10.924Z"),
  hora_salida: ISODate("2025-07-03T06:26:58.924Z"),
  tiempo_total: 2.58,
  costo: 7740,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb55'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-15T02:52:10.924Z"),
  hora_salida: ISODate("2025-06-15T08:14:22.924Z"),
  tiempo_total: 5.37,
  costo: 16110,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb56'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-27T23:52:10.924Z"),
  hora_salida: ISODate("2025-06-28T04:35:22.924Z"),
  tiempo_total: 4.72,
  costo: 4720,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb57'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-21T23:52:10.924Z"),
  hora_salida: ISODate("2025-06-22T03:58:22.924Z"),
  tiempo_total: 4.07,
  costo: 4070,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb58'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-13T21:52:10.924Z"),
  hora_salida: ISODate("2025-06-14T01:03:34.924Z"),
  tiempo_total: 3.19,
  costo: 9570,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb59'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba3'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-16T21:52:10.924Z"),
  hora_salida: ISODate("2025-06-17T00:18:10.924Z"),
  tiempo_total: 2.3,
  costo: 6899,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5a'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-29T23:52:10.924Z"),
  hora_salida: ISODate("2025-06-30T03:44:22.924Z"),
  tiempo_total: 3.87,
  costo: 3870,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5b'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-29T00:52:10.924Z"),
  hora_salida: ISODate("2025-06-29T04:43:46.924Z"),
  tiempo_total: 3.86,
  costo: 11580,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5c'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bac'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bb'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-11T21:52:10.924Z"),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5d'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba7'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b8'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee89c'),
  hora_entrada: ISODate("2025-06-15T02:52:10.924Z"),
  hora_salida: ISODate("2025-06-15T06:49:10.924Z"),
  tiempo_total: 3.95,
  costo: 7900,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5e'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee895'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-20T03:52:10.924Z"),
  hora_salida: ISODate("2025-06-20T07:16:10.924Z"),
  tiempo_total: 3.4,
  costo: 3400,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb5f'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-11T01:52:10.924Z"),
  hora_salida: ISODate("2025-06-11T06:28:46.924Z"),
  tiempo_total: 4.61,
  costo: 4610,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb60'),
  vehiculo_id: ObjectId('6866b037e0cccb8b371e4ba3'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b6'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-15T03:52:10.924Z"),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb61'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-25T03:52:10.924Z"),
  hora_salida: ISODate("2025-06-25T09:01:46.924Z"),
  tiempo_total: 5.16,
  costo: 5160,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb62'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-16T23:52:10.924Z"),
  hora_salida: ISODate("2025-06-17T04:07:46.924Z"),
  tiempo_total: 4.26,
  costo: 12780,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb63'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-28T03:52:10.925Z"),
  hora_salida: ISODate("2025-06-28T07:59:58.925Z"),
  tiempo_total: 4.13,
  costo: 12390,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb64'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-07-01T01:52:10.925Z"),
  hora_salida: ISODate("2025-07-01T05:40:46.925Z"),
  tiempo_total: 3.81,
  costo: 3810,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb66'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba9'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-30T23:52:10.925Z"),
  hora_salida: ISODate("2025-07-01T05:35:58.925Z"),
  tiempo_total: 5.73,
  costo: 17190,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb67'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-23T21:52:10.925Z"),
  hora_salida: ISODate("2025-06-23T22:59:22.925Z"),
  tiempo_total: 1.12,
  costo: 1120,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb68'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-18T21:52:10.925Z"),
  hora_salida: ISODate("2025-06-18T23:54:34.925Z"),
  tiempo_total: 2.04,
  costo: 6120,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb69'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba7'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b8'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89d'),
  hora_entrada: ISODate("2025-06-27T22:52:10.925Z"),
  hora_salida: ISODate("2025-06-28T01:48:34.925Z"),
  tiempo_total: 2.94,
  costo: 5880,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb6a'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba7'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b8'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89d'),
  hora_entrada: ISODate("2025-06-05T21:52:10.925Z"),
  hora_salida: ISODate("2025-06-05T23:23:22.925Z"),
  tiempo_total: 1.52,
  costo: 3040,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb6b'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-13T00:52:10.925Z"),
  hora_salida: ISODate("2025-06-13T04:07:46.925Z"),
  tiempo_total: 3.26,
  costo: 3260,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb6c'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-07T02:52:10.925Z"),
  hora_salida: ISODate("2025-06-07T06:19:46.925Z"),
  tiempo_total: 3.46,
  costo: 3460,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb6d'),
  vehiculo_id: ObjectId('6866b0d7e0cccb8b371e4ba4'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b7'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89d'),
  hora_entrada: ISODate("2025-06-23T03:52:10.925Z"),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb6e'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-03T22:52:10.925Z"),
  hora_salida: ISODate("2025-06-04T03:56:58.925Z"),
  tiempo_total: 5.08,
  costo: 5080,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb6f'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-08T02:52:10.925Z"),
  hora_salida: ISODate("2025-06-08T07:07:10.925Z"),
  tiempo_total: 4.25,
  costo: 4250,
  activo: false
},
{
   _id: ObjectId('686709ce9e9d359bfb00eb70'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba9'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-10T03:52:10.925Z"),
  hora_salida: ISODate("2025-06-10T07:35:58.925Z"),
  tiempo_total: 3.73,
  costo: 11190,
  activo: false
},
{
   _id: ObjectId('686709ce9e9d359bfb00eb71'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-25T22:52:10.925Z"),
  hora_salida: ISODate("2025-06-26T00:49:46.925Z"),
  tiempo_total: 1.96,
  costo: 1960,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb72'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89e'),
  hora_entrada: ISODate("2025-06-28T03:52:10.925Z"),
  hora_salida: null,
  tiempo_total: null,
  costo: null,
  activo: true
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb73'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4baf'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-25T23:52:10.925Z"),
  hora_salida: ISODate("2025-06-26T01:39:34.925Z"),
  tiempo_total: 1.79,
  costo: 1790,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb74'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4bae'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8bc'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-15T02:52:10.925Z"),
  hora_salida: ISODate("2025-06-15T05:00:34.925Z"),
  tiempo_total: 2.14,
  costo: 6420,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb75'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba7'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b8'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89c'),
  hora_entrada: ISODate("2025-07-01T01:52:10.925Z"),
  hora_salida: ISODate("2025-07-01T05:44:58.925Z"),
  tiempo_total: 3.88,
  costo: 7760,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb76'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-09T22:52:10.925Z"),
  hora_salida: ISODate("2025-06-10T03:11:58.925Z"),
  tiempo_total: 4.33,
  costo: 4330,
  activo: false
},
{
    _id: ObjectId('686709ce9e9d359bfb00eb77'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba8'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee8a0'),
  hora_entrada: ISODate("2025-06-28T00:52:10.925Z"),
  hora_salida: ISODate("2025-06-28T04:07:10.925Z"),
  tiempo_total: 3.25,
  costo: 3250,
  activo: false
},
{
  _id: ObjectId('686709ce9e9d359bfb00eb78'),
  vehiculo_id: ObjectId('6866b6f2e0cccb8b371e4ba9'),
  usuario_id: ObjectId('6865a36a3c1bbd10332ee8b9'),
  sede_id: ObjectId('686554833c1bbd10332ee893'),
  zona_id: ObjectId('686563163c1bbd10332ee89f'),
  hora_entrada: ISODate("2025-06-28T21:52:10.925Z"),
  hora_salida: ISODate("2025-06-29T01:43:46.925Z"),
  tiempo_total: 3.86,
  costo: 11580,
  activo: false
}])
