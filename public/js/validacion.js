var pass1 = document.getElementById("contraseña1");
var tagP = document.getElementById("validation");

pass1.onblur = function() {
    var pass = document.getElementById("contraseña").value;
    var pass1text=pass1.value;
    console.log(pass,pass1text)
    if(pass===pass1text) {
        pass1.className="succesfull"
        if(tagP.childNodes.length>0)
        tagP.removeChild(tagP.childNodes[0])

        tagP.appendChild(document.createTextNode("Contraseñas coinciden"))
        tagP.className="succesfull"
    } else {
        pass1.className="incorrect"
        if(tagP.childNodes.length>0)
        tagP.removeChild(tagP.childNodes[0])
        tagP.appendChild(document.createTextNode("Contraseñas no coinciden"))
        tagP.className="incorrect"
    }
}