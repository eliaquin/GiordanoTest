var guardarAmigos = function() {
    var nombre = document.getElementById("nombreAmigo").value;
    var edad = document.getElementById("edadAmigo").value;

    var obj = { Nombre: nombre, Edad: edad };
    console.log(obj);

    var url = "http://localhost:54199/api/data/guardaramigo";
    
    axios.post(url, obj)
        .then(function (result) {
            var funciono = result.data;
            if (funciono) {
                document.getElementById("nombreAmigo").value = '';
                document.getElementById("edadAmigo").value = '';
                alert("Se guardo bien");
                return;
            } 
            alert("No se guardó");
        })
        .catch(function(error) {
            console.log(error);
        });
};