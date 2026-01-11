function createStory() {
    let noun = document.getElementById("noun");
    let verb = document.getElementById("verb");
    let color = document.getElementById("color");
    let story = document.getElementById("story");

    story.innerHTML = "I met a " + noun.value + " who could " + verb.value + " very fast. He wore a " + color.value + " shirt.";
}