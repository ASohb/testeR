const firebaseConfig = {
    apiKey: "AIzaSyDMw6nwbYmBidQzFG5PWJhkEMLMPd2tYjw",
    authDomain: "teste-lista-a053e.firebaseapp.com",
    databaseURL: "https://teste-lista-a053e-default-rtdb.firebaseio.com",
    projectId: "teste-lista-a053e",
    storageBucket: "teste-lista-a053e.appspot.com",
    messagingSenderId: "760040794568",
    appId: "1:760040794568:web:d7b1436337f083f13b38fd"
  };


  firebase.initializeApp(firebaseConfig);

  function enviar(){
     var Nome = document.getElementById("nome").value;
     console.log(Nome);

     var nomesRef = firebase.database().ref("nomes")
      nomesRef.push({
        nome:Nome
      })
      document.getElementById("nome").value = "";

     
  }

  function lista() {
    console.log("função lista foi chamada");
  
    // Referência ao nó "nomes" no banco de dados
    var nomesRef = firebase.database().ref("nomes");
  
    nomesRef.on('value', function(snapshot) {
      // Limpar a lista antes de exibir os dados
      var listaDiv = document.getElementById("lista");
      listaDiv.innerHTML = "";
  
      //Busca os dados no banco
      snapshot.forEach(function(childSnapshot) {
        var nome = childSnapshot.val().nome;
  
        // Criar um elemento para exibir o nome
        var nomeElement = document.createElement("p");
        nomeElement.textContent = nome;
  
        // Adicionar o elemento à div "lista"
        listaDiv.appendChild(nomeElement);
      });
    });
  }
  