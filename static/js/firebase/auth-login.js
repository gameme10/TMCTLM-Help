var wait = function (tiempo) {
    return {
      then: function (f) {
        setTimeout(f, tiempo);
      },
    };
  };
  var getOptions = {
    source: "default",
  };
  var db = firebase.firestore();
  var email3array, docRef, email3, goToVar, rootvar ;
  email3 = localStorage.getItem("userEmail");
  email3array = email3.split("&");
  function waiter(goTo, root) {
    try {
      console.log("OK 0 " + email3array[0]);
      console.log("OK 1 " + email3array[1]);
      console.log("OK ALL " + email3array);
    } catch {
      ifLoggedIn();
      console.log("ERR: No has iniciado sesion");
    } finally {
      docRef = db.collection("user_license").doc(email3array[1]).get();
      goToVar = goTo
      rootvar = root
      imloggedin();
    }
  }
  
  // -- AQUI ESTA EL CODIGO DE GET
  
  //------------------------------
  
  // PONER LOS VAR ENCIMA DE ESTA LINEA
  
  function ifLoggedIn() {
    window.location.replace("login/index.html?onLogin=" + goToVar);
  }
