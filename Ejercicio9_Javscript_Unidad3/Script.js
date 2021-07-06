main();

function main (){
    //concederAccesoSiMayorDeEdad();
    consultarVariosUsuarios(3);
}

function concederAccesoSiMayorDeEdad(NombreDeUsuario = "Usuario 1"){
    let age  = prompt(NombreDeUsuario +", por favor ingrese su edad");
    if (age >= 18){
        alert (`Si su edad es `+ age +`, usted es mayor de edad`);
        console.log("Acceso concedido");
        hasAcces = true;
    } else {
        alert (`Su edad no le permite acceder.`);
        console.log("Acceso denegado");
        hasAcces = false;
    }
    return hasAcces;
}

function consultarVariosUsuarios(cantidadDeUsuarios){
    let usuarios = []; // Lista de permisos de los usuarios
    
    for (numeroDeUsuario=1;numeroDeUsuario<=cantidadDeUsuarios;numeroDeUsuario++){
        // Setea el nombre del usuario segun su numero de orden
        nombreDeUsuario = "Usuario n°"+ numeroDeUsuario;
        
        // Asigna el acceso al usuario como buleano.
        elUsuarioActualTieneAcceso = concederAccesoSiMayorDeEdad(nombreDeUsuario);

        // Informacion por consola para saber que valor obtuvo el usuario.
        if (elUsuarioActualTieneAcceso == true){
            console.log("El usuario numero " + numeroDeUsuario + " tiene acceso");
        } else {
            console.log("El usuario numero " + numeroDeUsuario + " no tiene acceso");
        }

        // Agrega el valor booleano del usuario al array.
        usuarios.push(elUsuarioActualTieneAcceso);

        // Devuelve el array por consola
        console.log("Permisos:" + usuarios);        
    }

}
