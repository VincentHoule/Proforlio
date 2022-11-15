var Root =document.querySelector(':root');
var rs = getComputedStyle(Root);
const switche=document.getElementById('switch');
ChangementdeCouleur();
function OnOff(btn){
    btn.classList.toggle("fa-toggle-off");
    btn.classList.toggle("fa-toggle-on");
    
    ChangementdeCouleur(btn);
       
    
}
function ChangementdeCouleur(){
    if(switche.classList.contains("fa-toggle-on")){
    rs.getPropertyValue('--color-texte1')
    Root.style.setProperty('--color-texte1', 'rgb(0, 39, 57)');

    rs.getPropertyValue('--color-texte2')
    Root.style.setProperty('--color-texte2', 'rgb(0, 138, 139)');

    rs.getPropertyValue('--color-texte3')
    Root.style.setProperty('--color-texte3', 'rgb(85, 174, 168)');

    rs.getPropertyValue('--color-texte4')
    Root.style.setProperty('--color-texte4', 'rgb(150, 212, 199)');
    
    rs.getPropertyValue('--color-texte5')
    Root.style.setProperty('--color-texte5', 'rgb(0, 23, 53)');
        
    rs.getPropertyValue('--color-texte6')
    Root.style.setProperty('--color-texte6', 'rgb(194, 10, 10)');

    }
    else if(switche.classList.contains("fa-toggle-off")){
        rs.getPropertyValue('--color-texte1')
        Root.style.setProperty('--color-texte1', 'lightgoldenrodyellow');
    
        rs.getPropertyValue('--color-texte2')
        Root.style.setProperty('--color-texte2', 'coral');
    
        rs.getPropertyValue('--color-texte3')
        Root.style.setProperty('--color-texte3', 'chocolate');
    
        rs.getPropertyValue('--color-texte4')
        Root.style.setProperty('--color-texte4', 'rgb(171, 85, 24)');
        
        rs.getPropertyValue('--color-texte5')
        Root.style.setProperty('--color-texte5', 'rgb(255, 227, 125)');
            
        rs.getPropertyValue('--color-texte6')
        Root.style.setProperty('--color-texte6', 'rgb(90, 227, 255)');
    
    }

    

}
var Formulaire=document.getElementById('Formulaire')
function EnvEmail(){
    Formulaire.classList.toggle('Invisible');
}
Formulaire.addEventListener("submit", fermerPage);

function fermerPage(e){
    e.preventDefault();
    if(e.submitter.getAttribute("id")=="envoyer"){
        Formulaire.submit();
    }
}

