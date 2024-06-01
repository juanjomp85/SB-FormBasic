document
  .getElementById('miFormulario')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Muestra los valores en el resumen
    document.getElementById('resumenNombre').innerText = `Nombre: ${nombre}`;
    document.getElementById('resumenEmail').innerText = `Email: ${email}`;
    document.getElementById(
      'resumenPassword'
    ).innerText = `Password: ${password}`;

    // Oculta el formulario y muestra el resumen
    document.getElementById('miFormulario').style.display = 'none';
    document.getElementById('resumen').style.display = 'block';

    // Genera el PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`Nombre: ${nombre}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Password: ${password}`, 10, 30);

    doc.save(`resume_${email}.pdf`);
  });

document.getElementById('editar').addEventListener('click', function () {
  // Muestra el formulario y oculta el resumen
  document.getElementById('miFormulario').style.display = '';
  document.getElementById('resumen').style.display = 'none';
});
