
// CONSULTAS: 

// 1. ¿Cuántos parqueos se registraron por sede en el último mes?

db.parqueos.aggregate([
  {
    $match: {
      hora_entrada: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
      }
    }
  },
  {
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      _id: 0,
      sede: "$sede.ciudad",
      total_parqueos: 1
    }
  }
]);


// 2. ¿Cuáles son las zonas más ocupadas en cada sede?

db.parqueos.aggregate([
  {
    $group: {
      _id: { sede_id: "$sede_id", zona_id: "$zona_id" },
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  {
    $group: {
      _id: "$_id.sede_id",
      zona_mas_ocupada: { $first: "$_id.zona_id" },
      total_ocupaciones: { $first: "$total" }
    }
  },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_mas_ocupada",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      _id: 0,
      sede: "$sede.ciudad",
      zona_mas_ocupada: "$zona.nombre_zona",
      total_ocupaciones: 1
    }
  }
]);


// 3. ¿Cuál es el ingreso total generado por parqueo en cada sede?  

db.parqueos.aggregate([
  { $match: { activo: false } },
  {
    $group: {
      _id: "$sede_id",
      ingreso_total: { $sum: "$costo" }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      _id: 0,
      sede: "$sede.ciudad",
      ingreso_total: 1
    }
  }
]);


// 4. ¿Qué cliente ha usado más veces el parqueadero?

db.parqueos.aggregate([
  {
    $group: {
      _id: "$usuario_id",
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { cantidad: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      nombre: "$usuario.nombre",
      cedula: "$usuario.cedula",
      cantidad: 1
    }
  }
]);


// 5. ¿Qué tipo de vehículo es más frecuente por sede?

db.parqueos.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $group: {
      _id: { sede: "$sede_id", tipo: "$vehiculo.tipo_vehiculo" },
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { cantidad: -1 } },
  {
    $group: {
      _id: "$_id.sede",
      tipo_mas_frecuente: { $first: "$_id.tipo" },
      cantidad: { $first: "$cantidad" }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      _id: 0,
      sede: "$sede.ciudad",
      tipo_mas_frecuente: 1,
      cantidad: 1
    }
  }
]);


// 6. Dado un cliente, mostrar su historial de parqueos     
// (fecha, sede, zona, tipo de vehículo, tiempo y costo).

// {
//   _id: ObjectId("6865a36a3c1bbd10332ee8b9"),
//   nombre: "Jerry",
//   cedula: "55248655",
//   rol: "cliente"
// }

db.parqueos.aggregate([
  { $match: { usuario_id: ObjectId("6865a36a3c1bbd10332ee8b9") } },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      fecha_entrada: "$hora_entrada",
      fecha_salida: "$hora_salida",
      sede: "$sede.ciudad",
      zona: "$zona.nombre_zona",
      tipo_vehiculo: "$vehiculo.tipo_vehiculo",
      tiempo_total: 1,
      costo: 1
    }
  }
]);


// 7. Mostrar los vehículos parqueados actualmente en cada sede.

db.parqueos.aggregate([
  { $match: { activo: true } },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $group: {
      _id: "$sede._id",
      sede: { $first: "$sede.ciudad" },
      vehiculos_actuales: {
        $push: {
          placa: "$vehiculo.placa",
          tipo_vehiculo: "$vehiculo.tipo_vehiculo"
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      sede: 1,
      vehiculos_actuales: 1
    }
  }
]);


// 8. Listar zonas que han excedido su capacidad de parqueo en algún momento.

// En este momento no es posible saber con certeza si una zona ha superado su capacidad, 
// ya que no se está llevando un registro detallado por fecha y hora de los parqueos simultáneos.

// Sin embargo, como una aproximación, puedes identificar las zonas que tienen más registros de parqueo 
// que su capacidad máxima. Esto no garantiza que se hayan sobreocupado en un mismo momento, 
// pero sí puede darte una pista de que han estado al límite o muy utilizadas.

db.parqueos.aggregate([
  {
    $group: {
      _id: "$zona_id",
      total_parqueos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "zonas",
      localField: "_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $match: {
      $expr: { $gt: ["$total_parqueos", "$zona.capacidad_maxima"] }
    }
  },
  {
    $project: {
      _id: 0,
      zona: "$zona.nombre_zona",
      capacidad: "$zona.capacidad_maxima",
      total_parqueos: 1
    }
  }
]);
