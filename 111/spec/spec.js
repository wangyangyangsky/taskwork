const practice = require("../practice/practice-1");

describe("practice", function () {
    it("i bigger  than 2", function () {
        var i = 60;
        var result = practice.practice(i);
        expect(result).toEqual(i +" "+ "bottles of beer on the wall,"+" "+ i +" "+"bottles of beer.\n"+
            "Take one down and pass it around,"+ " "+ (i - 1) +" "+"bottles of beer on the wall.\n")
    });
    it("i equal to  2", function () {
        var i = 2;
        var result = practice.practice(i);
        expect(result).toEqual( i +" "+ "bottles of beer on the wall,"+" "+ i +" "+"bottles of beer.\n"+
            "Take one down and pass it around,"+ " "+ (i - 1) +" "+"bottle of beer on the wall.\n")
    });
    it("i equal to  1", function () {
        var i = 1;
        var result = practice.practice(i);
        expect(result).toEqual( i  +" "+ "bottle of beer on the wall,"+" "+ i +" "+"bottle of beer.\n"+
            "Take one down and pass it around,"+" "+"no more bottles of beer on the wall.\n"+
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.\n")
    });
});