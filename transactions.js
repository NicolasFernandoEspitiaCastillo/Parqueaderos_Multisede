const session = db.getMongo().startSession();

try {
  session.startTransaction();

  const parqueos = session.getDatabase("Parqueaderos_Multisede").parqueos;
  const zonas = session.getDatabase("Parqueaderos_Multisede").zonas;

  const nuevoParqueo = {
    vehiculo_id: ObjectId("6866b6f2e0cccb8b371e4ba7"),
    usuario_id: ObjectId("6865a36a3c1bbd10332ee8b8"),
    sede_id: ObjectId("686554833c1bbd10332ee893"),
    zona_id: ObjectId("686563163c1bbd10332ee89d"),
    hora_entrada: new Date(),
    hora_salida: null,
    tiempo_total: null,
    costo: null,
    activo: true
  };

  parqueos.insertOne(nuevoParqueo, { session });

  const updateResult = zonas.updateOne(
    { _id: ObjectId("686563163c1bbd10332ee89d"), cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } },
    { session }
  );

  if (updateResult.modifiedCount === 0) {
    throw new Error("No hay cupos disponibles en la zona.");
  }

  session.commitTransaction();
  print("✅ Transacción completada con éxito.");

} catch (error) {
  session.abortTransaction();
  print("❌ Transacción abortada. Motivo: " + error.message);
} finally {
  session.endSession();
}
