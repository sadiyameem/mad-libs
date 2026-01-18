function createStory() {
    let noun = document.getElementById("noun");
    let verb = document.getElementById("verb");
    let color = document.getElementById("color");
    let adjective = document.getElementById("adjective").value;
    let place = document.getElementById("place").value;
    let animal = document.getElementById("animal").value;
    let emotion = document.getElementById("emotion").value;
    let food = document.getElementById("food").value;

    let story = document.getElementById("story");

    story.innerHTML = 
    "I met a " + noun.value + 
    " who could " + verb.value + 
    " really well. He wore a " + color.value + 
    " shirt." + " It was a " + adjective + 
    " day when we went to the " + place + "." +
    " Suddenly, a " + animal + " appeared and made me feel " + emotion + "." +
    " Then we ate some " + food + " together. ";
}