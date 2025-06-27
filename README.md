# 🅿️ Campus Parking – Backend con MongoDB

## 📌 Introducción

Campus Parking es una empresa que administra múltiples parqueaderos ubicados en diferentes ciudades. Actualmente utilizan hojas de cálculo locales para registrar información, lo que genera duplicación de datos, errores y dificulta el acceso unificado a la información.

Han decidido migrar a una base de datos NoSQL para aprovechar la flexibilidad de MongoDB. Tu rol como desarrollador backend será diseñar esta solución, poblarla con datos de prueba realistas, implementar consultas analíticas, manejar la seguridad del sistema con control de roles, y demostrar el uso de transacciones.

---

## ✅ Funcionalidad esperada

El sistema debe permitir:

- Registro de vehículos (carro, moto, bicicleta, camión, etc.) con su respectiva información.
- Gestión de usuarios, clasificados como:
  - **Administrador**: acceso total.
  - **Empleado de sede**: acceso limitado a la sede.
  - **Cliente**: acceso solo a su información y disponibilidad de zonas.
- Control de sedes, cada una con varias zonas, capacidad máxima, tipos de vehículos permitidos y tarifas definidas.
- Registro de ingresos y salidas de vehículos:
  - Sede y zona donde se estaciona.
  - Hora de entrada y salida.
  - Tiempo total y costo calculado automáticamente.
- Acceso al histórico de parqueos por usuario.
- Reportes de ocupación por sede, zona, tipo de vehículo.
- Control de cupos restantes en cada zona.
- Registro de ingresos a través de una transacción MongoDB que asegure la consistencia entre las zonas y parqueos.

---

## 📁 Estructura del repositorio

```
📁 [Directorio del proyecto]
├── db_config.js           # Creación de colecciones con $jsonSchema e índices
├── test_dataset.js        # Poblamiento de la base con datos de prueba realistas
├── aggregations.js        # Consultas analíticas usando el framework de agregación
├── roles.js               # Definición de roles y control de acceso
├── transactions.js        # Transacción funcional entre colecciones
└── README.md              # Documentación completa del sistema
```
---

## 🧱 db_config.js

### Objetivo

Definir y crear todas las colecciones del sistema.

### Cada colección incluye:

- Validaciones con `$jsonSchema`:
  - Tipos de datos (`string`, `int`, `date`, etc.)
  - Campos requeridos
  - Reglas de negocio (`enum`, rangos, estructuras embebidas)
- Índices:
  - Simples (ej: `placa`, `cedula`)
  - Compuestos (ej: `zona` + `estado`)

### Colecciones obligatorias

- `usuarios`
- `vehiculos`
- `sedes`
- `zonas`
- `parqueos`

---

## 🧪 test_dataset.js

### Objetivo

Poblar el sistema con datos de prueba coherentes y variados usando `insertMany`.

### Debe incluir:

- 3 **sedes** en distintas ciudades.
- 5 **zonas por sede**, con cupos, precios y tipos de vehículo permitidos.
- 10 **empleados** distribuidos entre las sedes.
- 15 **clientes** con sus datos completos.
- 30 **vehículos**, de al menos 4 tipos diferentes, asignados a los clientes.
- 50 **registros de parqueos**, mezclando sedes, zonas y tipos de vehículos. Algunos deben estar actualmente activos (sin hora de salida).

---

## 📊 aggregations.js

### Objetivo

Resolver las siguientes preguntas usando **agregaciones de MongoDB**. Cada consulta debe estar comentada y explicada.

### Consultas:

1. ¿Cuántos parqueos se registraron por sede en el último mes?
2. ¿Cuáles son las zonas más ocupadas en cada sede?
3. ¿Cuál es el ingreso total generado por parqueo en cada sede?
4. ¿Qué cliente ha usado más veces el parqueadero?
5. ¿Qué tipo de vehículo es más frecuente por sede?
6. Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).
7. Mostrar los vehículos parqueados actualmente en cada sede.
8. Listar zonas que han excedido su capacidad de parqueo en algún momento.

---

## 🔐 roles.js

### Objetivo

Crear y asignar **roles con diferentes permisos** sobre la base de datos.

### Roles:

#### 👨‍💼 Administrador
- Lectura y escritura total.
- Puede crear usuarios y modificar configuración.

#### 🧑‍🔧 Empleado de sede
- Solo lectura de clientes y vehículos.
- Puede registrar ingresos y salidas de parqueos.
- Solo puede acceder a zonas y sedes donde trabaja.

#### 👤 Cliente
- Solo lectura de su propia información.
- Lectura de su historial de parqueos.
- Lectura general de disponibilidad de zonas y precios.

### Implementación

Usar `db.createRole()` y `db.grantRolesToUser()` correctamente.

#### Ejemplo:

```js
db.createUser({
  user: "empleado1",
  pwd: "1234",
  roles: [
    { role: "empleadoSede", db: "campusParkingDB" }
  ]
});
```

---

## 🔄 transactions.js

### 🎯 Objetivo

Crear una **transacción MongoDB** entre al menos dos colecciones para garantizar la consistencia de los datos.

---

### 🧪 Escenario sugerido: Registrar un nuevo ingreso

Cuando un vehículo entra a una zona de parqueo, el sistema debe:

1. Insertar un nuevo documento en la colección `parqueos`.
2. Disminuir en uno el campo `cupos_disponibles` en la colección `zonas`.

Estas dos operaciones deben ejecutarse **dentro de una misma transacción**, garantizando que **ambas ocurran o ninguna ocurra**.

---

### 🧱 Requisitos que debe cumplir la transacción

- Inicio de sesión con `startSession()`.
- Inicio de la transacción con `session.startTransaction()`.
- Ejecución de ambas operaciones dentro del contexto de la sesión.
- Uso de `try/catch` para el manejo de errores.
- Confirmación de la transacción con `commitTransaction()` o cancelación con `abortTransaction()` en caso de error.
- Comentarios explicativos en cada paso del código.

---

### 🧩 Ejemplo de estructura de código (resumen)

```js
const session = db.getMongo().startSession();
session.startTransaction();

try {
  // 1. Insertar nuevo parqueo
  db.parqueos.insertOne({
    usuario_id: ObjectId("..."),
    vehiculo_id: ObjectId("..."),
    sede_id: ObjectId("..."),
    zona_id: ObjectId("..."),
    hora_entrada: new Date(),
    activo: true
  }, { session });

  // 2. Actualizar zona, disminuyendo cupos disponibles
  db.zonas.updateOne(
    { _id: ObjectId("..."), cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } },
    { session }
  );

  // 3. Confirmar la transacción
  session.commitTransaction();
  print("✅ Transacción completada exitosamente");

} catch (error) {
  // 4. Revertir si hay error
  session.abortTransaction();
  print("❌ Transacción abortada. Error: " + error.message);
} finally {
  // 5. Finalizar la sesión
  session.endSession();
}



