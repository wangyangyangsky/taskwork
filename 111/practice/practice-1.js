module.exports.practice= function practice(i) {
    var i;
    var str = "";

    if(i > 2){
    str = +" "+ "bottles of beer on the wall,"+" "+ i +" "+"bottles of beer.\n"+
        "Take one down and pass it around,"+ " "+ (i - 1) +" "+"bottles of beer on the wall.\n";
    }
    if(i === 2){
    str = i +" "+ "bottles of beer on the wall,"+" "+ i +" "+"bottles of beer.\n"+
        "Take one down and pass it around,"+ " "+ (i - 1) +" "+"bottle of beer on the wall.\n";
    }
    if(i === 1) {
        str = i  +" "+ "bottle of beer on the wall,"+" "+ i +" "+"bottle of beer.\n"+
         "Take one down and pass it around,"+" "+"no more bottles of beer on the wall.\n"+
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    return str;
};

module.exports.sum= function sum(i) {
    var i;
    var str = "";
    for(i=99;i>0;i--){
        if (i > 2) {
            str += i + " " + "bottles of beer on the wall," + " " + i + " " + "bottles of beer.\n" +
                "Take one down and pass it around," + " " + (i - 1) + " " + "bottles of beer on the wall.\n";
        }
        if (i === 2) {
            str += i + " " + "bottles of beer on the wall," + " " + i + " " + "bottles of beer.\n" +
                "Take one down and pass it around," + " " + (i - 1) + " " + "bottle of beer on the wall.\n";
        }
        if (i === 1) {
            str += i + " " + "bottle of beer on the wall," + " " + i + " " + "bottle of beer.\n" +
                "Take one down and pass it around," + " " + "no more bottles of beer on the wall.\n" +
                "No more bottles of beer on the wall, no more bottles of beer.\n" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }
    }
    return str;
}

