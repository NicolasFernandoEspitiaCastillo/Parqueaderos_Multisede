db.createCollection("zonas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
            "sede_id", 
            "nombre", 
            "capacidad_maxima", 
            "cupos_disponibles", 
            "tarifa_por_hora", 
            "tipo_vehiculo"
        ],
      properties: {
        sede_id: {
          bsonType: "objectId",
          description: "Referencia a la sede a la que pertenece la zona"
        },
        nombre_zona: {
          bsonType: "string",
          description: "Identificador o nombre de la zona"
        },
        capacidad_maxima: {
          bsonType: "int",
          minimum: 1,
          description: "Número total de cupos que puede tener esta zona"
        },
        cupos_disponibles: {
          bsonType: "int",
          minimum: 0,
          description: "Cupos actualmente disponibles"
        },
        tarifa_por_hora: {
          bsonType: "int",
          minimum: 0,
          description: "Costo por hora de parqueo"
        },
        tipo_vehiculo: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "string",
            enum: ["carro", "moto", "bicicleta", "camion"]
          },
          description: "Lista de tipos de vehículo aceptados en esta zona"
        }
      }
    }
  }
});


db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
            "nombre", 
            "cedula", 
            "rol"
        ],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre del usuario"
        },
        cedula: {
          bsonType: "string",
          description: "Cédula o documento de identidad"    
        },
        rol: {
          bsonType: "string",
          enum: ["cliente", "empleado", "administrador"],
          description: "Tipo de usuario"
        },
        sede_id: {
          bsonType: ["objectId", "null"],
          description: "Solo aplica si el usuario es empleado"
        }
      }
    }
  }
});


db.createCollection("sedes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ciudad"],
      properties: {
        ciudad: {
          bsonType: "string",
          enum: ["Bogotá", "Bucaramanga", "Medellín"],
          description: "Ciudad donde se encuentra la sede"
        }
      }
    }
  }
});


db.createCollection("vehiculos", {
  validator: {
    $expr: {
      $and: [
        { $in: ["$tipo_vehiculo", ["carro", "moto", "bicicleta", "camion"]] },
        { $ne: ["$usuario_id", null] },
        {
          $switch: {
            branches: [
              {
                case: { $eq: ["$tipo_vehiculo", "carro"] },
                then: { $regexMatch: { input: "$placa", regex: /^[A-Z]{3}-\d{3}$/ } }
              },
              {
                case: { $eq: ["$tipo_vehiculo", "moto"] },
                then: { $regexMatch: { input: "$placa", regex: /^[A-Z]{3}-\d{2}[A-Z]$/ } }
              },
              {
                case: { $eq: ["$tipo_vehiculo", "bicicleta"] },
                then: { $regexMatch: { input: "$placa", regex: /^\d{10}$/ } }
              },
              {
                case: { $eq: ["$tipo_vehiculo", "camion"] },
                then: { $regexMatch: { input: "$placa", regex: /^[A-Z]{3}-\d{3}$/ } }
              }
            ],
            default: false
          }
        }
      ]
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});


// db.createCollection("vehiculos", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [
//             "placa", 
//             "tipo_vehiculo", 
//             "usuario_id"
//         ],
//       properties: {
//         placa: {
//           bsonType: "string",
//           description: "Placa única del vehículo"
//         },
//         tipo: {
//           bsonType: "string",
//           enum: ["carro", "moto", "bicicleta", "camion"],
//           description: "Tipo de vehículo"
//         },
//         color: {
//           bsonType: "string",
//           description: "Color del vehículo"
//         },
//         marca: {
//           bsonType: "string",
//           description: "Marca del vehículo"
//         },
//         usuario_id: {
//           bsonType: "objectId",
//           description: "Referencia al usuario dueño del vehículo"
//         }
//       }
//     }
//   }
// });


db.createCollection("parqueos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
            "vehiculo_id", 
            "usuario_id", 
            "sede_id", 
            "zona_id", 
            "hora_entrada", 
            "activo"
        ],
      properties: {
        vehiculo_id: {
          bsonType: "objectId",
          description: "Vehículo parqueado"
        },
        usuario_id: {
          bsonType: "objectId",
          description: "Usuario que parquea el vehículo"
        },
        sede_id: {
          bsonType: "objectId",
          description: "Sede donde se realizó el parqueo"
        },
        zona_id: {
          bsonType: "objectId",
          description: "Zona específica dentro de la sede"
        },
        hora_entrada: {
          bsonType: "date",
          description: "Fecha y hora de entrada"
        },
        hora_salida: {
          bsonType: ["date", "null"],
          description: "Fecha y hora de salida (si ya salió)"
        },
        tiempo_total: {
          bsonType: ["double", "null"],
          description: "Tiempo total en horas (calculado)"
        },
        costo: {
          bsonType: ["int", "null"],
          description: "Costo total (calculado)"
        },
        activo: {
          bsonType: "bool",
          description: "Indica si el parqueo está en curso"
        }
      }
    }
  }
});
