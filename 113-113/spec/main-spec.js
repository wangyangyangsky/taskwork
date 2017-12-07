const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("stopfee",function(){
        var result = 1,s=4;
        var sfee = main.stopFee(result,s);
        expect(sfee).toEqual(result);
    });

    it("sumfee",function(){
         var km = 1;
         var result = 7 ;
         var sfee = 1;
         var fee = main.Fee(sfee,km)
        expect(fee).toEqual(result);
    });

    it("sumfee",function(){
        var km = 5;
        var result = 9.4 ;
        var sfee = 1;
        var fee = main.Fee(sfee,km)
        expect(fee).toEqual(result);
    });

    it("sumfee",function(){
        var km = 10;
        var result = 14 ;
        var sfee = 1;
        var fee = main.Fee(sfee,km)
        expect(fee).toEqual(result);
    });



});
