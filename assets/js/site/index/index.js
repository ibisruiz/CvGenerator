
const inputNombre = document.getElementById("nombreField");
const inputCargo = document.getElementById("cargoField");
const inputPerfil = document.getElementById("perfilField");
const inputCorreo = document.getElementById("correoField");
const inputTelefono = document.getElementById("telefonoField");
const inputPaginaWeb = document.getElementById("paginawebField");
const inputHobby = document.getElementById("hobbyField");
const inputEmpleo = document.getElementById("empleoField");
const inputEducacion = document.getElementById("educacionField");
const inputSkills = document.getElementById("skillsField");


Limpiar = () => {

    inputNombre.value = "";
    inputNombre.focus();
    inputNombre.classList.remove("input-error");

    inputCargo.value = "";
    inputCargo.classList.remove("input-error");

    inputPerfil.value = "";
    inputPerfil.classList.remove("input-error");

    inputCorreo.value = "";
    inputCorreo.classList.remove("input-error");

    inputTelefono.value = "";
    inputTelefono.classList.remove("input-error");

    inputPaginaWeb.value = "";
    inputPaginaWeb.classList.remove("input-error");

    inputHobby.value = "";
    inputHobby.classList.remove("input-error");

    inputEmpleo.value = "";
    inputEmpleo.classList.remove("input-error");

    inputEducacion.value = "";
    inputEducacion.classList.remove("input-error");

    inputSkills.value = "";
    inputSkills.classList.remove("input-error");

}


function Validate() {

    let isValid = true;

    const valueNombre = inputNombre.value;

    if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
        inputNombre.classList.add("input-error");
        isValid = false;

    } else {
        inputNombre.classList.remove("input-error");
    }


    const valueCargo = inputCargo.value;

    if (valueCargo == "" || valueCargo == null || valueCargo == undefined) {
        inputCargo.classList.add("input-error");
        isValid = false;

    } else {
        inputCargo.classList.remove("input-error");
    }


    const valuePerfil = inputPerfil.value;

    if (valuePerfil == "" || valuePerfil == null || valuePerfil == undefined) {
        inputPerfil.classList.add("input-error");
        isValid = false;

    } else {
        inputPerfil.classList.remove("input-error");
    }


    const valueCorreo = inputCorreo.value;

    if (valueCorreo == "" || valueCorreo == null || valueCorreo == undefined) {
        inputCorreo.classList.add("input-error");
        isValid = false;

    } else {
        inputCorreo.classList.remove("input-error");
    }


    const valueTelefono = inputTelefono.value;

    if (valueTelefono == "" || valueTelefono == null || valueTelefono == undefined) {
        inputTelefono.classList.add("input-error");
        isValid = false;

    } else {
        inputTelefono.classList.remove("input-error");
    }


    const valuePaginaWeb = inputPaginaWeb.value;

    if (valuePaginaWeb == "" || valuePaginaWeb == null || valuePaginaWeb == undefined) {
        inputPaginaWeb.classList.add("input-error");
        isValid = false;

    } else {
        inputPaginaWeb.classList.remove("input-error");
    }


    const valueHobby = inputHobby.value;

    if (valueHobby == "" || valueHobby == null || valueHobby == undefined) {
        inputHobby.classList.add("input-error");
        isValid = false;

    } else {
        inputHobby.classList.remove("input-error");
    }


    const valueEmpleo = inputEmpleo.value;

    if (valueEmpleo == "" || valueEmpleo == null || valueEmpleo == undefined) {
        inputEmpleo.classList.add("input-error");
        isValid = false;

    } else {
        inputEmpleo.classList.remove("input-error");
    }


    const valueEducacion = inputEducacion.value;

    if (valueEducacion == "" || valueEducacion == null || valueEducacion == undefined) {
        inputEducacion.classList.add("input-error");
        isValid = false;

    } else {
        inputEducacion.classList.remove("input-error");
    }


    const valueSkills = inputSkills.value;

    if (valueSkills == "" || valueSkills == null || valueSkills == undefined) {
        inputSkills.classList.add("input-error");
        isValid = false;

    } else {
        inputSkills.classList.remove("input-error");
    }

    return isValid;
}

CreateCV = () => {

    if (Validate()) {

        const mainContainer = document.getElementById("cv-container");

        const cvNombre = inputNombre.value;
        const cvCargo = inputCargo.value;
        const cvPerfil = inputPerfil.value;
        const cvCorreo = inputCorreo.value;
        const cvTelefono = inputTelefono.value;
        const cvPaginaWeb = inputPaginaWeb.value;
        const cvHobby = inputHobby.value;
        const cvEmpleo = inputEmpleo.value;
        const cvEducacion = inputEducacion.value;
        const cvSkills = inputSkills.value;


        const dashesP = document.createElement("p");
        dashesP.innerText = "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------";

        const divRow = document.createElement("div");
        divRow.setAttribute("class", "row");

        const divColmd3 = document.createElement("div");
        divColmd3.setAttribute("class", "col-md-3 offset-3 bg-light p-2 text-dark bg-opacity-50");

        const divVacio1 = document.createElement("div");

        const imagen = document.createElement("img");
        imagen.setAttribute("src", "./assets/images/profile.png");
        imagen.setAttribute("class", "w-75 p-3");

        const h1_1 = document.createElement("h1");
        h1_1.innerText = cvNombre;

        const h3_cargo = document.createElement("h2");
        h3_cargo.innerText = cvCargo;

        const br1 = document.createElement("br");

        const h4_1 = document.createElement("h4");
        h4_1.setAttribute("class", "bg-dark text-light");
        h4_1.innerText = "Perfil";

        const p1 = document.createElement("p");
        p1.innerText = cvPerfil;

        const br2 = document.createElement("br");

        const h4_2 = document.createElement("h4");
        h4_2.setAttribute("class", "bg-dark text-light");
        h4_2.innerText = "Contacto";

        const p2 = document.createElement("p");
        p2.innerText = cvCorreo;

        const p3 = document.createElement("p");
        p3.innerText = cvTelefono;

        const p4 = document.createElement("p");
        p4.innerText = cvPaginaWeb;

        const br3 = document.createElement("br");

        const h4_3 = document.createElement("h4");
        h4_3.setAttribute("class", "bg-dark text-light");
        h4_3.innerText = "Hobby";

        const p5 = document.createElement("p");
        p5.innerText = Separador(cvHobby);

        const divColmd4 = document.createElement("div");
        divColmd4.setAttribute("class","col-md-4 bg-light p-2 text-dark bg-opacity-50");

        const divVacio2 = document.createElement("div");

        const h4_4 = document.createElement("h4");
        h4_4.setAttribute("class", "bg-dark text-light");
        h4_4.innerText = "Empleos";

        const p6 = document.createElement("p");
        p6.innerText = Separador(cvEmpleo);

        const br4 = document.createElement("br");
        
        const br5 = document.createElement("br");
        
        const br6 = document.createElement("br");
        
        const br7 = document.createElement("br");

        const h4_5 = document.createElement("h4");
        h4_5.setAttribute("class", "bg-dark text-light");
        h4_5.innerText = "Educacion";

        const p7 = document.createElement("p");
        p7.innerText = Separador(cvEducacion);

        const br8 = document.createElement("br");
        
        const br9 = document.createElement("br");
        
        const br10 = document.createElement("br");
        
        const br11 = document.createElement("br");

        const h4_6 = document.createElement("h4");
        h4_6.setAttribute("class", "bg-dark text-light");
        h4_6.innerText = "Skills";

        const p8 = document.createElement("p");
        p8.innerText = Separador(cvSkills);

        const divBtn = document.createElement("div");
        divBtn.setAttribute("class", "btn-dlt");

        const btnEliminar = document.createElement("button");
        btnEliminar.setAttribute("type", "button");
        btnEliminar.setAttribute("class", "btn btn-outline-danger w-25");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.addEventListener("click", function(){

            if (confirm ("Esta seguro que desea eliminar este registro?")){

                mainContainer.removeChild(dashesP);
                mainContainer.removeChild(divRow);
            }

        });
        


        divVacio1.appendChild(imagen);
        divVacio1.appendChild(h1_1);
        divVacio1.appendChild(h3_cargo);
        divVacio1.appendChild(br1);
        divVacio1.appendChild(h4_1);
        divVacio1.appendChild(p1);
        divVacio1.appendChild(br2);
        divVacio1.appendChild(h4_2);
        divVacio1.appendChild(p2);
        divVacio1.appendChild(p3);
        divVacio1.appendChild(p4);
        divVacio1.appendChild(br3);
        divVacio1.appendChild(h4_3);
        divVacio1.appendChild(p5);

        divVacio2.appendChild(h4_4);
        divVacio2.appendChild(p6);
        divVacio2.appendChild(br4);
        divVacio2.appendChild(br5);
        divVacio2.appendChild(br6);
        divVacio2.appendChild(br7);
        divVacio2.appendChild(h4_5);
        divVacio2.appendChild(p7);
        divVacio2.appendChild(br8);
        divVacio2.appendChild(br9);
        divVacio2.appendChild(br10);
        divVacio2.appendChild(br11);
        divVacio2.appendChild(h4_6);
        divVacio2.appendChild(p8);

        divColmd3.appendChild(divVacio1);

        divColmd4.appendChild(divVacio2);

        divBtn.appendChild(btnEliminar);

        divRow.appendChild(divColmd3);
        divRow.appendChild(divColmd4);
        divRow.appendChild(divBtn);

        mainContainer.appendChild(dashesP);
        mainContainer.appendChild(divRow);


        //alert(" Good to go!");
    } else {
        alert("Complete la informacion");
    }

}

function Separador(texto)
{
    if(!texto) return [];
    let valores = texto.split(' ');
    
    return valores.map(text=> text? text.trim() : undefined).join(', ');
    
}