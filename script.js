function chooseOption(option) {
    let dialogText = document.getElementById("dialog-text");
    let character = document.getElementById("character");

    if (option === 'commission') {
        dialogText.innerText = "This is my catalog. U can take a look, no worries!";
        character.src = "character-smile.png"; // Ganti ekspresi karakter
    } else if (option === 'gallery') {
        dialogText.innerText = "This is my personal drawing";
        character.src = "character-happy.png";
    } else if (option === 'wip') {
        dialogText.innerText = "My WIP";
        character.src = "character-thinking.png";
    }
}
