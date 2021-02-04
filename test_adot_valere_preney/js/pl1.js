import * as dspFc from './displayContent.js'
/**
 * objet representant l'icone Krys du plan de travail 1
 */
var icone={
    src : '../assets/logo.png',
    startClass : 'iconeStart',
    endClass: 'iconeEnd',
    setElement: function(){
        document.querySelector('.icone').classList.add(this.startClass);
       
    },
    animSortie: function(){
        document.querySelector('.icone').classList.remove(this.startClass);
        document.querySelector('.icone').classList.add(this.endClass);
        document.querySelector('.icone').parentNode.style.justifyContent="flex-start"
    }
}

/**
 * objet representant le texte du plan de travail 1
 */
var text={
    content: [{text:'prêts', fontSize:"2rem"},{text:"pour la rentrée", fontSize:"2rem"},{text:"des séries",fontSize : "2rem"}],
    startClass : 'textEnterSlide',
    endClass : 'textFinishEnterSlide',
    leaveClass : 'textLeaveFade',
    parent : 'textDiv',
    setElement: function(){dspFc.setElementText(this)},
    animEntree:function(){dspFc.animEntreeText(this)},
    animSortie:function(){dspFc.animSortieText(this)}
}

/**
 * Objet représentant la vidéo du plan de travail 1
 */
var video={
    src: '../assets/video.mp4',
    width:"100",
    height: '100',
    parent : 'elt_btm',
    setElement : function(){
        var eltParent = document.querySelector(`.${this.parent}`)
        var divVideo = document.createElement('video');
        divVideo.setAttribute('autoplay', 'true');
        divVideo.setAttribute('loop', 'true');
        divVideo.muted = "true";

        var source = document.createElement('source');
        source.setAttribute('src',this.src);
        source.setAttribute('type', 'video/mp4');

        divVideo.appendChild(source);
        eltParent.appendChild(divVideo);
    }
}

var pl1 = [icone,text, video]
export {pl1}