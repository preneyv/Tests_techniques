import * as dspFc from './displayContent.js'

/**
 * objet qui défini l'élement texte de plan de travail 4
 */
var text={
    content: [{text:'krys palaiseau-paris', fontSize:"2rem"},{text:"55 rue de paris", fontSize:"2rem"},{text:"91120 palaiseau",fontSize : "2rem"}],
    startClass : 'textEnterFade',
    endClass : 'textFinishEnterFade',
    parent : 'textDiv',
    setElement: function(){dspFc.setElementText(this)},
    animEntree:function(){dspFc.animEntreeText(this)},
}

/**
 * objet qui défini le bouton "me rendre en magasin " du plan  de travail 4
 */
var btn={
    content: [{text:"me rendre en magasin"}],
    startClass : 'textEnterFade',
    endClass : 'textFinishEnterFade',
    parent : 'divMeetBtn',
    timeBeforeAdd : 500,
    setElement: function(){dspFc.setElementMeetBtn(this)},
    animEntree:function(){dspFc.animEntreeText(this)},
}

/**
 * objet qui défini la carte du plan de travail 4
 */
var map={
    content: [{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10529.754403766576!2d2.2381997685348085!3d48.71621037927382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e678159844f161%3A0xc77c2aa489bdaf00!2sOpticien%20Krys%20Palaiseau%20-%20Paris!5e0!3m2!1sfr!2sfr!4v1612441520631!5m2!1sfr!2sfr"}],
    startClass : 'beforeTranslateFromBottom',
    endClass : 'afterTranslateFromBottom',
    parent : 'btm_ctn',
    timeBeforeAdd : 800,
    setElement: function(){dspFc.setElementMap(this)},
    animEntree:function(){dspFc.animEntreeMap(this)},
}


var pl4 = [text, btn, map]
export {pl4}