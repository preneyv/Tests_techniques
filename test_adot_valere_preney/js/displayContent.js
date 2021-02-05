
/**
 * 
 * @param {*} obj qui sera ajouté au DOM
 * Pour chaque ligne de text comprise dans la propriété content de obj on crée un élément span,
 * on lui défini ses propres propriétés de styles définies dans la propriété content de obj aussi.
 * on lui attribut une classe de départ (voir startClass dans l'objet text)
 * puis on l'ajoute à son élément parent.
 */
function setElementText(obj){
    var parent = document.querySelector(`.${obj.parent}`);
    obj.content.forEach(elt=>{
        var text = document.createElement('span');
            text.appendChild(document.createTextNode(elt.text.toUpperCase()));
            if(elt.letterSpacing)text.style.letterSpacing=elt.letterSpacing;
            if(elt.marginBottom)text.style.marginBottom = elt.marginBottom;
            if(elt.fontSize)text.style.fontSize = elt.fontSize;
            text.classList.add(obj.startClass);
            parent.appendChild(text);
    })
}

/**
 * @param {*} obj objet qui se verra attribué une classe pour lancer son apparition
 * Pour chaque élément de l'élément père on modifie leur classe. On supprime celle départ et on ajoute celle 
 * qui permettra la transition. 
 * La méthode setInterval() permet de différé le changement de classe et donner un effet de d'ajout successif
 */
function animEntreeText(obj){

    var eltParent = document.querySelector(`.${obj.parent}`).children;
       var i =0;
       var timer =  setInterval(function(){

            eltParent[i].classList.remove(obj.startClass);
            eltParent[i].classList.add(obj.endClass);
            i++;
            if(i>=eltParent.length)
                clearInterval(timer)
       },obj.timeBeforeAdd || 100)
}

/**
 * 
 * @param {*} obj élément qui se verra retiré du DOM
 * Pour chaque élément du père on lui enlève la classe précédemment attribuée et on lui ajoute la classe qui lui permettra 
 * de se retirer de la vue. Puis on supprime les élément du DOM
 */
function animSortieText(obj){
    var eltParent = document.querySelector(`.${obj.parent}`);
        
        for(var item of eltParent.children)
        {
            if(obj.endClass)item.classList.remove(obj.endClass)
            if(obj.leaveClass)item.classList.add(obj.leaveClass)
        }
        var time = setTimeout(()=>{
            while(eltParent.firstChild)
            {
                eltParent.removeChild(eltParent.firstChild)
            }
        },500)
}

/**
 * 
 * @param {*} obj élément qui sera ajouté au DOM
 * Ici le cas est un peu différent que du simple text. Je ne pouvais donc pas utiliser les méthodes précédentes pour
 * l'ajout au DOM.
 * On crée alors les différents éléments permettant l'ajout du btn. Le tout sera gréffé à un nouvel élément créé par la ligne
 * 91.
 */
function setElementMeetBtn(obj){

    var parent = document.createElement('div')
    
    var icon = document.createElement('span')
    icon.classList.add('material-icons')
    icon.appendChild(document.createTextNode('location_on'))

    var text = document.createElement('span')
    text.appendChild(document.createTextNode(obj.content[0].text.toUpperCase()))

    parent.appendChild(icon)
    parent.appendChild(text)

    var parentOfParent = document.createElement('div')
    parentOfParent.appendChild(parent)
    parent.classList.add(obj.startClass)

    document.querySelector('#top_ctn').insertBefore(parentOfParent,document.querySelector('.panelInfo'))
    parentOfParent.classList.add(obj.parent)

}

/**
 * 
 * @param {*} obj objet qui va être créé dans un élément iframe 
 * Cette méthode crée un élément iframe, lui ajoute des attributs, une classe qui lui donnera un style de départ 
 * (voir .beforeTranslateFromBottom dans style.css)
 * et on l'ajoute à son élément père
 */
function setElementMap(obj){
        var iframe = document.createElement('iframe')
        iframe.setAttribute('src',obj.content[0].src)
        iframe.setAttribute('allowfullscreen', '')
        iframe.classList.add(obj.startClass)
        document.querySelector(`#${obj.parent}`).appendChild(iframe)  
}

/**
 * 
 * @param {*} obj objet qui se verra ajouter l'animation d'entrée par le bas
 * On change simplement de classe permettant la transition
 * (voir .afterTranslateFromBottom dans style.css)
 *   
 */
function animEntreeMap(obj){

    var eltParent = document.querySelector(`#${obj.parent}`).children;
    eltParent[1].addEventListener('load',()=>{
        eltParent[1].classList.remove(obj.startClass);
        eltParent[1].classList.add(obj.endClass);
    })
   


}

export {animEntreeText, animSortieText, setElementText, setElementMeetBtn, setElementMap,animEntreeMap}
