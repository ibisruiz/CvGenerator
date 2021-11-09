
const inputName = document.getElementById("nombre");
const inputCargo = document.getElementById("cargo");
const inputPerfil = document.getElementById("perfil");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputPaginaWeb = document.getElementById("paginaweb");
const inputHobby = document.getElementById("hobby");
const inputEmpleos = document.getElementById("empleos");
const inputEducacion = document.getElementById("educacion");
const inputSkills = document.getElementById("skills");



function generateCV(){
    let issvalid = Validation();

    if (issvalid){
        
        
        const mainContainer = document.getElementById("cv-container");

        const divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class","card cvgenMainDiv");

        const divCardHeader = document.createElement("div"); 
        divCardHeader.setAttribute("class", "card-header bg-secondary text-white cvgenHeader");

        const h1header = document.createElement("h1"); 
        h1header.setAttribute("class", "card-title");
        h1header.innerText ="HOJA DE VIDA";

        const divMainRow = document.createElement("div");
        divMainRow.setAttribute("class","row");

        // Generador Columna Izquierda

        const divCardBody1 = document.createElement("div");
        divCardBody1.setAttribute("class","card-body col-md-6");

        const ul_1 = document.createElement("ul");
        ul_1.setAttribute("class","list-group list-group-flush");

        const li_a = document.createElement("li");
        li_a.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_a.innerText = "Nombre completo";

        const li_1 = document.createElement("li");
        li_1.setAttribute("class","list-group-item");
        li_1.innerText = inputName.value;

        const li_b = document.createElement("li");
        li_b.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_b.innerText = "Cargo";

        const li_2 = document.createElement("li");
        li_2.setAttribute("class","list-group-item");
        li_2.innerText = inputCargo.value;

        const li_c = document.createElement("li");
        li_c.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_c.innerText = "Perfil";

        const li_3 = document.createElement("li");
        li_3.setAttribute("class","list-group-item");
        li_3.innerText = inputPerfil.value;

        const li_d = document.createElement("li");
        li_d.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_d.innerText = "Correo electrónico";

        const li_4 = document.createElement("li");
        li_4.setAttribute("class","list-group-item");
        li_4.innerText = inputCorreo.value;

        const li_e = document.createElement("li");
        li_e.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_e.innerText = "Telefóno";

        const li_5 = document.createElement("li");
        li_5.setAttribute("class","list-group-item");
        li_5.innerText = inputTelefono.value;


        // Generador Columna Derecha

        const divCardBody2 = document.createElement("div");
        divCardBody2.setAttribute("class","card-body col-md-6");

        const ul_2 = document.createElement("ul");
        ul_2.setAttribute("class","list-group list-group-flush");

        const li_f = document.createElement("li");
        li_f.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_f.innerText = "Pagina web";

        const li_6 = document.createElement("li");
        li_6.setAttribute("class","list-group-item");
        li_6.innerText = inputPaginaWeb.value;

        const li_g = document.createElement("li");
        li_g.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_g.innerText = "Hobby";

        const li_7 = document.createElement("li");
        li_7.setAttribute("class","list-group-item");
        li_7.innerText = Separador(inputHobby.value);

        const li_h = document.createElement("li");
        li_h.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_h.innerText = "Empleos anteriores";

        const li_8 = document.createElement("li");
        li_8.setAttribute("class","list-group-item");
        li_8.innerText = Separador(inputEmpleos.value);

        const li_i = document.createElement("li");
        li_i.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_i.innerText = "Educación";

        const li_9 = document.createElement("li");
        li_9.setAttribute("class","list-group-item");
        li_9.innerText = Separador(inputEducacion.value);

        const li_j = document.createElement("li");
        li_j.setAttribute("class","list-group-item bg-success cvgenTitles text-white");
        li_j.innerText = "Skills";

        const li_10 = document.createElement("li");
        li_10.setAttribute("class","list-group-item");
        li_10.innerText = Separador(inputSkills.value);
       


        const divBtnEliminar = document.createElement("div");
        divBtnEliminar.setAttribute("class", "stylebtn2");

        const BtnEliminar = document.createElement("button");
        BtnEliminar.setAttribute("class", "btn btn-danger stylebtn2");
        BtnEliminar.innerText = ("Eliminar");
        BtnEliminar.addEventListener("click", function(){

            if(confirm("Esta accion no se puede deshacer. Desea Eliminar este curriculum?")){
                mainContainer.removeChild(divPrincipal);
            }
        });

        
        mainContainer.appendChild(divPrincipal);


        // Card body 1
        divCardBody1.appendChild(ul_1);

        ul_1.appendChild(li_a);
        ul_1.appendChild(li_1);
        ul_1.appendChild(li_b);
        ul_1.appendChild(li_2);
        ul_1.appendChild(li_c);
        ul_1.appendChild(li_3);
        ul_1.appendChild(li_d);
        ul_1.appendChild(li_4);
        ul_1.appendChild(li_e);
        ul_1.appendChild(li_5);

        // Card body 2
        divCardBody2.appendChild(ul_2);
        divCardBody2.appendChild(divBtnEliminar);

        ul_2.appendChild(li_f);
        ul_2.appendChild(li_6);
        ul_2.appendChild(li_g);
        ul_2.appendChild(li_7);
        ul_2.appendChild(li_h);
        ul_2.appendChild(li_8);
        ul_2.appendChild(li_i);
        ul_2.appendChild(li_9);
        ul_2.appendChild(li_j);
        ul_2.appendChild(li_10);

        divBtnEliminar.appendChild(BtnEliminar);

        // div 2 row
        divMainRow.appendChild(divCardBody1);
        divMainRow.appendChild(divCardBody2);

        // main div
        divPrincipal.appendChild(divCardHeader);
        divPrincipal.appendChild(divMainRow);

        // Header
        divCardHeader.appendChild(h1header);


        Clear();
   
    } else{
        alert("Debe completar todos los campos");
    }
 

}

function Separador(texto)
{
    if(!texto) return [];
    let valores = texto.split(' ');
    
    return valores.map(text=> text? text.trim() : undefined).join(', ');
    
}

function Validation (){

    let isvalid = true;


    //validacion del campo nombre
    const valueName = inputName.value;

    if (valueName == "" || valueName == null || valueName == undefined){
        isvalid = false;
        inputName.classList.add("input-error");
    } else {
        inputName.classList.remove("input-error");
    }

    //validacion del campo cargo
    const valueCargo = inputCargo.value;
 
    if (valueCargo == "" || valueCargo == null || valueCargo == undefined){
         isvalid = false;
         inputCargo.classList.add("input-error");
    } else {
        inputCargo.classList.remove("input-error");
    }
     

    //validacion del campo perfil
    const valuePerfil = inputPerfil.value;
 
    if (valuePerfil == "" || valuePerfil == null || valuePerfil == undefined){
         isvalid = false;
         inputPerfil.classList.add("input-error");
        } else {
            inputPerfil.classList.remove("input-error");
        }

    //validacion del campo correo
    const valueCorreo = inputCorreo.value;
 
    if (valueCorreo == "" || valueCorreo == null || valueCorreo == undefined){
         isvalid = false;
         inputCorreo.classList.add("input-error");
        } else {
            inputCorreo.classList.remove("input-error");
        }

    //validacion del campo telefono
    const valueTelefono = inputTelefono.value;
 
    if (valueTelefono == "" || valueTelefono == null || valueTelefono == undefined){
         isvalid = false;
         inputTelefono.classList.add("input-error");
        } else {
            inputTelefono.classList.remove("input-error");
        }
    //validacion del campo paginaweb
    const valuePaginaWeb = inputPaginaWeb.value;
 
    if (valuePaginaWeb == "" || valuePaginaWeb == null || valuePaginaWeb == undefined){
         isvalid = false;
         inputPaginaWeb.classList.add("input-error");
        } else {
            inputPaginaWeb.classList.remove("input-error");
        }

    //validacion del campo hobby
    const valueHobby = inputHobby.value;
 
    if (valueHobby == "" || valueHobby == null || valueHobby == undefined){
         isvalid = false;
         inputHobby.classList.add("input-error");
        } else {
            inputHobby.classList.remove("input-error");
        }

    //validacion del campo empleos
    const valueEmpleos = inputEmpleos.value;
  
    if (valueEmpleos == "" || valueEmpleos == null || valueEmpleos == undefined){
          isvalid = false;
          inputEmpleos.classList.add("input-error");
        } else {
            inputEmpleos.classList.remove("input-error");
        }

    //validacion del campo educacion
    const valueEducacion = inputEducacion.value;
 
    if (valueEducacion == "" || valueEducacion == null || valueEducacion == undefined){
         isvalid = false;
         inputEducacion.classList.add("input-error");
        } else {
            inputEducacion.classList.remove("input-error");
        }

    //validacion del campo skills
    const valueSkills = inputSkills.value;
 
    if (valueSkills == "" || valueSkills == null || valueSkills == undefined){
         isvalid = false;
         inputSkills.classList.add("input-error");
        } else {
            inputSkills.classList.remove("input-error");
        }
    

        return isvalid;

}

function Clear (){
    inputName.value = "";
     inputName.focus();
     inputName.classList.remove("input-error");

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

    inputEmpleos.value = "";
    inputEmpleos.classList.remove("input-error");

    inputEducacion.value = "";
    inputEducacion.classList.remove("input-error");

    inputSkills.value = "";
    inputSkills.classList.remove("input-error");

}


