const TIPS = [{
    tip: "Tip 1: Be confident",
    description: "If you are naturally shy, you should still do your best to act confident it will go a long way. Some ways you can act more confident include refraining from fidgeting with things, standing up straight and thinking of what you are going to say beforehand This will become natural to you very quickly."
},{
    tip: "Tip 2: Respect your elders",
    description: "Examples of your elders include Parents, Grandparents, Teachers etc. Respecting your elders is basic manners.  This is because these elders have done much to help society change for the better throughout their lives and deserve to be respected."
},{
    tip: "Tip 3: Think before you say anything",
    description: "You should avoid saying things without thinking as this could make others feel bad or insulted, which will lead to them having a worse impression of you. You also wouldn't want people to misunderstand what you say, as this could also lead to communication issues."
},{
    tip: "Tip 4: Listening",
    description: "Listening is important when talking to someone as well. This is because everyone wants to feel that they are heard. You should pay attention when they are speaking and do not interrupt them in the middle of their sentence."
},{
    tip: "Tip 5: Controlling your emotions",
    description: "Even though you are sad or angry, you should still try to talk to others in a proper manner instead of speaking rudely. This is because when you are not in control of your emotions, it will might make you say things that are hurtful or unnecessary to others."
}];

let tip = document.querySelector(".tip");
let description = document.querySelector(".description");
let tipIndex = 0;

function previous(){
    if (tipIndex > 0){
        tipIndex -= 1;
        tip.innerHTML = TIPS[tipIndex].tip;
        description.innerHTML = TIPS[tipIndex].description;
    }
}

function next(){
    if (tipIndex < TIPS.length - 1){
        tipIndex += 1;
        tip.innerHTML = TIPS[tipIndex].tip;
        description.innerHTML = TIPS[tipIndex].description;
    }
}