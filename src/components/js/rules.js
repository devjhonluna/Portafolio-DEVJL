const nombreReglas = {
  required: {
    value: "true",
    message: "El Nombre completo es requerido",
  },
  minLength: {
    value: 2,
    message: "El nombre completo debe tener al menos 2 caracteres",
  },
  pattern: {
    value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/,
    message: "El Nombre completo No es valido",
  },
};

const correoReglas = {
  required: {
    value: "true",
    message: "El Correo electronico es requerido",
  },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "El Correo electronico No es valido",
  },
};

const mensajeReglas={
    required: {
      value: "true",
      message: "El Mensaje es requerido",
    },
    minLength: {
      value: 10,
      message: "El mensaje debe tener al menos 10 caracteres",
    },
  }

export { nombreReglas, correoReglas, mensajeReglas };
