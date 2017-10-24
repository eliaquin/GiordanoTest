new Vue({
    el: "#app",
    data: {
        Amigo: {
            Nombre: "",
            Edad: 0
        },
        Amigos: [],
        urlGuardarAmigo: "http://localhost:54199/api/data/guardaramigo",
        urlBuscarAmigos: "http://localhost:54199/api/data/buscaramigos"
    },
    methods: {
        guardarAmigos: function () {
            var vm = this;
            axios.post(this.urlGuardarAmigo, this.Amigo)
                .then(function (result) {
                    var funciono = result.data;
                    if (funciono) {
                        vm.Amigo.Nombre = "";
                        vm.Amigo.Edad = 0;
                        vm.buscarAmigos();
                        return;
                    }
                    alert("No se guardó");
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        buscarAmigos: function () {
            var vm = this;
            axios.get(this.urlBuscarAmigos)
                .then(function (result) {
                    vm.Amigos = result.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    computed: {
        camposLlenos: function() {
            return this.Amigo.Nombre.length > 0 && this.Amigo.Edad > 0;
        }
    },
    beforeMount: function() {
        this.buscarAmigos();
    }
});



//var guardarAmigos = function () {
//    var nombre = document.getElementById("nombreAmigo").value;
//    var edad = document.getElementById("edadAmigo").value;

//    var obj = { Nombre: nombre, Edad: edad };
//    console.log(obj);

//    var url = "http://localhost:54199/api/data/guardaramigo";
    
//    axios.post(url, obj)
//        .then(function (result) {
//            var funciono = result.data;
//            if (funciono) {
//                document.getElementById("nombreAmigo").value = '';
//                document.getElementById("edadAmigo").value = '';
//                alert("Se guardo bien");
//                return;
//            } 
//            alert("No se guardó");
//        })
//        .catch(function(error) {
//            console.log(error);
//        });
//};