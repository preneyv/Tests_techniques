import * as dspFc from './displayContent.js'

/**
 * Objet texte du plan de travail 3
 */
var text={
    content: [{text:'2 paires à la vue :', fontSize : "2rem", letterSpacing:"0.5rem"},{text:"1 optique",fontSize : "4rem", letterSpacing:"1rem", marginBottom:"-1rem"},{text:"anti-lumière bleue",fontSize : "2rem", letterSpacing:"0.5rem", marginBottom:"2rem"}, {text:"+ 1 solaire", fontSize : "3rem", letterSpacing:"1rem"}],
    startClass : 'textEnterSlide',
    endClass : 'textFinishEnterSlide',
    leaveClass : 'textLeaveFade',
    parent : 'textDiv',
    setElement:function(){dspFc.setElementText(this)},
    animEntree:function(){dspFc.animEntreeText(this)},
    animSortie:function(){dspFc.animSortieText(this)}
}

/**
 * Objet information (celle du bas de la pub) du plan de travail 3
 * Il était nécessaire de l'intégrer dans ce module pour permettre son retrait une fois le plan de travail terminé
 */
var panelInfo={

    leaveClass : 'textLeaveFade',
    parent : 'panelInfo',
    animSortie: function(){dspFc.animSortieText(this)}

}

var pl3 = [text,panelInfo]
export {pl3}