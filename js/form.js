var formValid = document.getElementById('bouton_envoi');
var nom = document.getElementById('nom');
var sansNom = document.getElementById('sansNom');
var  adresse=document.getElementById('adresse');
var  sansAdresse=document.getElementById('sansAdresse');
var com=document.getElementById('com');
var sansCom=document.getElementById('sansCom');

function sendMail() {
    // <!--Encoder l'url mailto -->
    var url="mailto:"+encodeURIComponent("saye03d@gmail.com")
        +"?subject="+encodeURIComponent(document.getElementById("nom").value)
        +"&body="+encodeURIComponent(document.getElementById("mail").value+' '+
        document.getElementById("adresse").value+' '+
        document.getElementById("tel").value+' '+
        document.getElementById("cours").value+' '+
        document.getElementById("com").value);
    // <!--Ouvrir client messagerie-->
    document.location=url;
}
formValid.addEventListener('click', validation);

function validation(event){
    //Si le champ est vide
    if (nom.validity.valueMissing){
        event.preventDefault();
        sansNom.textContent = 'nom non saisie';
        sansNom.style.color = 'red';
    }else{
        sansNom.textContent = '';
    }
    if (adresse.validity.valueMissing){
        event.preventDefault();
        document.getElementById('sansAdresse').textContent="saisie l'adresse";
        sansAdresse.style.color = 'red';
    }else{
        sansAdresse.textContent = '';
    }
    if (com.validity.valueMissing){
        event.preventDefault();
        sansCom.textContent = 'commentaire non saisie';
        sansCom.style.color = 'red';
    }else{
        sansCom.textContent = '';
    }
}


    