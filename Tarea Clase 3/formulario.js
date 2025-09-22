document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const toggleBtn = document.getElementById("toggle-contraste");

  // ---- Cambiar contraste ----
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("contraste");
    toggleBtn.textContent = document.body.classList.contains("contraste")
      ? "Desactivar Contraste"
      : "Activar Contraste";
  });

  // ---- Función de validación de cada campo ----
  function validarCampo(campo, errorElemento, mensajeError) {
    if (!campo.checkValidity()) {
      errorElemento.textContent = mensajeError;
      return false;
    } else {
      errorElemento.textContent = "";
      return true;
    }
  }

  // ---- Definición de campos y mensajes ----
  const campos = {
    nombre: {
      input: document.getElementById("nombre"),
      error: document.getElementById("nombre-error"),
      mensaje: "⚠ El nombre debe iniciar con mayúscula y solo contener letras."
    },
    apellido: {
      input: document.getElementById("apellido"),
      error: document.getElementById("apellido-error"),
      mensaje: "⚠ El apellido debe iniciar con mayúscula y solo contener letras."
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
      mensaje: "⚠ Ingrese un correo válido (ej: usuario@dominio.com)."
    },
    fecha: {
      input: document.getElementById("fecha"),
      error: document.getElementById("fecha-error"),
      mensaje: "⚠ Seleccione una fecha entre 1900 y 2025."
    },
    pais: {
      input: document.getElementById("pais"),
      error: document.getElementById("pais-error"),
      mensaje: "⚠ Debe seleccionar un país."
    }
  };

  // ---- Validación en tiempo real ----
  Object.values(campos).forEach(({ input, error, mensaje }) => {
    input.addEventListener("input", () => {
      validarCampo(input, error, mensaje);
    });
    input.addEventListener("blur", () => {
      validarCampo(input, error, mensaje);
    });
  });

  // ---- Validación final al enviar ----
  form.addEventListener("submit", (e) => {
    let valido = true;
    Object.values(campos).forEach(({ input, error, mensaje }) => {
      if (!validarCampo(input, error, mensaje)) {
        valido = false;
      }
    });
    if (!valido) {
      e.preventDefault();
    }
  });
});
