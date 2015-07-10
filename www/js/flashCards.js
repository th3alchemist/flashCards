var fcDeck;

function readWordListFile(file){
    
    var textType = /text.*/;
    if (file.type.match(textType)) {
        var reader = new FileReader();

        reader.onload = function(e) {
            fcDeck = reader.result.split("\n");
            updateOptions();
        }
        reader.readAsText(file);

    } else {
        console.log("File not supported!");
    }
}

function updateOptions(){
    console.log(fcDeck);
}