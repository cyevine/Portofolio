function chooseOption(option) {
    let dialogText = document.getElementById("dialog-text");
    let character = document.getElementById("character");

    if (option === 'commission') {
        dialogText.innerText = "This is my catalog. U can take a look, no worries!";
        character.src = "character-smile.png"; // Ganti ekspresi karakter
    } else if (option === 'gallery') {
        dialogText.innerText = "Here's my drawing ^^";
        character.src = "character-happy.png";
    } else if (option === 'wip') {
        dialogText.innerText = "My WIP commision";
        character.src = "character-thinking.png";
    }
}
