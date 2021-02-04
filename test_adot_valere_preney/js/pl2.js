import * as dspFc from './displayContent.js'
/**
 * Objet icone du plan de travail 2
 * change simplement un style de l'élément
 */
var icone={
    setElement:function(){
        document.querySelector('.ctnIcone').style.height="fit-content"
    }
}

/**
 * Objet texte du plan de travail 2
 */
var text={
    content: [{text:'avec', fontSize:"2rem"},{text:"le pack konnecté",letterSpacing : "0.5rem", marginBottom : "3rem", fontSize:"2rem"},{text:"à partir de",fontSize : "1.5rem"}, {text:"99€*", fontSize :"4rem"}],
    startClass : 'textEnterSlide',
    endClass : 'textFinishEnterSlide',
    leaveClass : 'textLeaveFade',
    parent : 'textDiv',
    setElement: function(){dspFc.setElementText(this)},
    animEntree:function(){dspFc.animEntreeText(this)},
    animSortie:function(){dspFc.animSortieText(this)}

}

/**
 * Objet information (celle du bas de la pub) du plan de travail 2
 */
var panelInfo={
    text:`
            * Prix de vente TTC conseillé en magasin. ** Du 24/08/2017 au 31/10/2017 
            Voir conditions complètes sur krys.com/offre-rentree-2017
            Dispositif médical. Consultez un professionnel de santé.
        `,
    parent : 'panelInfo',
    setElement: function(){
            var parent = document.querySelector(`.${this.parent}`);
           
                var text = document.createElement('span');
                text.appendChild(document.createTextNode(this.text));
                parent.appendChild(text);
            
    },
    
}

var pl2 = [icone,text,panelInfo]
export {pl2}