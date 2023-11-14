var db = firebase.apps[0].firestore();

const txtfullName = document.querySelector('#txtfullName');
const txtschoolGrade = document.querySelector('#txtschoolGrade');
const txtaboutMe = document.querySelector('#txtaboutMe');
const txtprofilePictureURL = document.querySelector('#txtprofilePictureURL');

// Cambia el selector para que coincida con el id actual del botón
const btnSaveData = document.querySelector('#btnSaveData');

btnSaveData.addEventListener('click', function () {
    // Obtener los valores de los campos de entrada
    const fullName = txtfullName.value;
    const schoolGrade = txtschoolGrade.value;
    const aboutMe = txtaboutMe.value;
    const profilePictureURL = txtprofilePictureURL.value;

    // Verificar que los campos no estén vacíos
    if (!fullName || !schoolGrade || !aboutMe || !profilePictureURL) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear un objeto con los datos a insertar en la base de datos
    const userData = {
        fullName: fullName,
        schoolGrade: schoolGrade,
        aboutMe: aboutMe,
        profilePictureURL: profilePictureURL,
        // Puedes agregar más campos según sea necesario
    };

    // Insertar datos en la colección "students"
    db.collection("students").add(userData)
        .then(function (docRef) {
            console.log("Datos insertados correctamente con ID: ", docRef.id);
            // Puedes redirigir a otra página o hacer otras acciones después de la inserción
            window.location.href = 'index.html';

        })
        .catch(function (error) {
            console.error("Error al insertar datos: ", error);
            alert("Error al insertar datos en la base de datos.");
        });
});
