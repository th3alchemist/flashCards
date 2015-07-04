var FcDeck;

function readWordListFile(file){
    var textType = /text.*/;
    if (file.type.match(textType)) {
        var reader = new FileReader();

        reader.onload = function(e) {
            FcDeckList = reader.result.split("\n");
            
            var FcDeck = JSON.parse(FcDeckList[0]);
            console.log(Object.keys(FcDeck));
        }

        reader.readAsText(file);	
    } else {
        console.log("File not supported!");
    }    
}