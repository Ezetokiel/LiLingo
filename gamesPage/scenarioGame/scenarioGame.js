const SCENARIOS = [{
    scenario: "If your parents ask you to go and do your homework, what should you say in reply?",
    option1: "No! I want to play my games",
    option2: "I hate homework!",
    option3: "Can't you do it for me?",
    correctOption: "I will go and do my homework now"
}, {
    scenario: "If your teachers ask you to hand in your homework but you have not done it, what should you say?",
    option1: "My Dog ate my homwork",
    option2: "I did not finish my homework",
    option3: "I hate homework!",
    correctOption: "Sorry, I did not do it. Can I get an extension?"
}, {
    scenario: "If someone gives you a gift you do not like, what should you say?",
    option1: "I hate this gift!",
    option2: "Please don't get this again",
    option3: "Thank you but I don't like it",
    correctOption: "Thank you for the gift!"
}, {
    scenario: "If your friend breaks your favourite toy, how should you respond?",
    option1: "I hate you! Why did you do that!",
    option2: "Punch him",
    option3: "Break his toy in return",
    correctOption: "Accept his apology and tell him to be more careful"
}, {
    scenario: "You are buying something in a store and need help. How should you talk to the shop assistant?",
    option1: "Help me get this now!",
    option2: "This shop is so bad!",
    option3: "You're a bad shop assistant",
    correctOption: "Could you help me find something?"
}];

let scenario = document.querySelector(".scenario");
let result = document.getElementById("result-text");
let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");
let buttonFour = document.getElementById("button-four");
let gameContainer = document.querySelector(".game-container");
let optionContainer = document.querySelector(".option-container");
let scenarioContainer = document.querySelector(".scenario-container");
let scenarioIndex = 1

function wrong(){
    result.innerText = "That was incorrect. Maybe try again?";
    result.classList.remove("hide");
}

function correct(){
    result.innerText = "That was correct. Good Job!"
    result.classList.remove("hide");
    setTimeout(replaceElements, 2000);
}

function replaceElements(){
    buttonOne.remove();
    buttonTwo.remove();
    buttonThree.remove();
    buttonFour.remove();
    scenario.remove()
    result.remove()

    if (scenarioIndex >= SCENARIOS.length){
        let end = document.createElement("h2");
        let endNode = document.createTextNode("Game complete!");
        end.appendChild(endNode);
        scenarioContainer.appendChild(end);
        end.setAttribute("class", "scenario");
        
        let endButton = document.createElement("a");
        let endButtonNode = document.createTextNode("Back to home page")
        endButton.appendChild(endButtonNode);
        optionContainer.appendChild(endButton);
        endButton.setAttribute("class", "back-to-homepage");
        endButton.setAttribute("href", "../../index.html")
    } else {
        scenario = document.createElement("h2");
        let scenarioNode = document.createTextNode(SCENARIOS[scenarioIndex].scenario);
        scenario.appendChild(scenarioNode);
        scenarioContainer.appendChild(scenario);
        scenario.setAttribute("class", "scenario");

        buttonOne = document.createElement("button");
        optionContainer.appendChild(buttonOne);
        buttonOne.setAttribute("class", "options");
        buttonOne.setAttribute("id", "button-one");

        buttonTwo = document.createElement("button");
        optionContainer.appendChild(buttonTwo);
        buttonTwo.setAttribute("class", "options");
        buttonTwo.setAttribute("id", "button-two");

        buttonThree = document.createElement("button");
        optionContainer.appendChild(buttonThree);
        buttonThree.setAttribute("class", "options");
        buttonThree.setAttribute("id", "button-three");

        buttonFour = document.createElement("button");
        optionContainer.appendChild(buttonFour);
        buttonFour.setAttribute("class", "options");
        buttonFour.setAttribute("id", "button-four");

        result = document.createElement("h3");
        let resultNode = document.createTextNode("That was correct! Good Job!");
        result.appendChild(resultNode);
        gameContainer.appendChild(result);
        result.setAttribute("class", "hide result");
        result.setAttribute("id", "result-text");

        let nodeOne;
        let nodeTwo;
        let nodeThree;
        let nodeFour;

        switch(scenarioIndex){
            case 1:
                nodeOne = document.createTextNode(SCENARIOS[scenarioIndex].option1);
                buttonOne.appendChild(nodeOne);
                buttonOne.setAttribute("onclick", "wrong()");
                nodeTwo = document.createTextNode(SCENARIOS[scenarioIndex].option2);
                buttonTwo.appendChild(nodeTwo);
                buttonFour.setAttribute("onclick", "wrong()");
                nodeThree = document.createTextNode(SCENARIOS[scenarioIndex].option3);
                buttonThree.appendChild(nodeThree);
                buttonThree.setAttribute("onclick", "wrong()");
                nodeFour = document.createTextNode(SCENARIOS[scenarioIndex].correctOption);
                buttonFour.appendChild(nodeFour);
                buttonFour.setAttribute("onclick", "correct()");
                break;
            
            case 2:
                nodeOne = document.createTextNode(SCENARIOS[scenarioIndex].correctOption);
                buttonOne.appendChild(nodeOne);
                buttonOne.setAttribute("onclick", "correct()");
                nodeTwo = document.createTextNode(SCENARIOS[scenarioIndex].option2);
                buttonTwo.appendChild(nodeTwo);
                buttonTwo.setAttribute("onclick", "wrong()");
                nodeThree = document.createTextNode(SCENARIOS[scenarioIndex].option3);
                buttonThree.appendChild(nodeThree);
                buttonThree.setAttribute("onclick", "wrong()");
                nodeFour = document.createTextNode(SCENARIOS[scenarioIndex].option1);
                buttonFour.appendChild(nodeFour);
                buttonFour.setAttribute("onclick", "wrong()");
                break;

            case 3:
                nodeOne = document.createTextNode(SCENARIOS[scenarioIndex].option1);
                buttonOne.appendChild(nodeOne);
                buttonOne.setAttribute("onclick", "wrong()");
                nodeTwo = document.createTextNode(SCENARIOS[scenarioIndex].correctOption);
                buttonTwo.appendChild(nodeTwo);
                buttonTwo.setAttribute("onclick", "correct()");
                nodeThree = document.createTextNode(SCENARIOS[scenarioIndex].option3);
                buttonThree.appendChild(nodeThree);
                buttonThree.setAttribute("onclick", "wrong()");
                nodeFour = document.createTextNode(SCENARIOS[scenarioIndex].option2);
                buttonFour.appendChild(nodeFour);
                buttonFour.setAttribute("onclick", "wrong()");
                break;

            case 4:
                nodeOne = document.createTextNode(SCENARIOS[scenarioIndex].option1);
                buttonOne.appendChild(nodeOne);
                buttonOne.setAttribute("onclick", "wrong()");
                nodeTwo = document.createTextNode(SCENARIOS[scenarioIndex].option3);
                buttonTwo.appendChild(nodeTwo);
                buttonTwo.setAttribute("onclick", "wrong()");
                nodeThree = document.createTextNode(SCENARIOS[scenarioIndex].correctOption);
                buttonThree.appendChild(nodeThree);
                buttonThree.setAttribute("onclick", "correct()");
                nodeFour = document.createTextNode(SCENARIOS[scenarioIndex].option2);
                buttonFour.appendChild(nodeFour);
                buttonFour.setAttribute("onclick", "wrong()");
                break;
            }
        };
    
    scenarioIndex += 1
};