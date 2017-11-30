const main = require('../main/main');
const datbase = require('../main/datbase');

describe('pos', function () {
    var allItems;
    var inputs;
    var promotions;
    var result = [];
    var free = [];
    var inputsall = [];
    allItems = datbase.loadAllItems();
    promotions = datbase.loadPromotions();
    beforeEach(function () {
        allItems = datbase.loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it('should create inputsall',function(){
      
        inputsall = main.changeInputs(inputs,inputsall);
        var result =  [
            {barcode: 'ITEM000001', num: 5},
            {barcode: 'ITEM000003', num: '2'},
            {barcode: 'ITEM000005', num: 3}
        ];

        expect(inputsall).toEqual(result);
    });

    it('should forfree',function(){
        var result1 =  [
            {name: '雪碧', num: 1, unit: '瓶', price: 3},
            {name: '方便面', num: 1, unit: '袋', price: 4.5}
        ];
        var result =  [
            {barcode: 'ITEM000001', num: 5},
            {barcode: 'ITEM000003', num: '2'},
            {barcode: 'ITEM000005', num: 3}
        ];
        var inputsall =  [
            {barcode: 'ITEM000001', num: 5},
            {barcode: 'ITEM000003', num: '2'},
            {barcode: 'ITEM000005', num: 3}
        ];



        free= main.forFree(allItems,promotions,inputsall,result,free);
        expect(free).toEqual(result1);

    });



    it('should print correct text', function () {

        spyOn(console, 'log');

        main.print(result,free);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});