const datbase = require("./datbase");

module.exports = function main(inputs) {
    var inputsall = [];
    var result = [];
    var free = [];
    var i = 0;

    
    while (i < inputs.length){
        let temp = {};
        if(inputs[i].indexOf('-') >= 0){
            let arr = inputs[i].split('-');
            temp["barcode"] = arr[0];
            temp["num"] = arr[1];
            inputsall.push(temp);
            i ++;
            continue;
        }else {
            temp["barcode"] = inputs[i];
            temp["num"] = inputs.lastIndexOf(inputs[i]) - inputs.indexOf(inputs[i]) + 1;
            inputsall.push(temp);
            i += temp["num"];
        }
    }

    var allItems = datbase.loadAllItems();
    var promotions = datbase.loadPromotions();
    for (i = 0; i < inputsall.length; i ++){
        let name, barcode, j;

 
        for(j = 0; j < allItems.length; j ++){
            if(allItems[j].barcode == inputsall[i].barcode){
                barcode = allItems[j].barcode;
                name = allItems[j].name;
                break;
            }
        }

        
        if(promotions[0].barcodes.indexOf(barcode) >= 0 && inputsall[i].num >= 2){
            let temp = {};
            temp["name"] = name;
            temp["num"] = 1;
            temp["unit"] = allItems[j].unit;
            temp["price"] = allItems[j].price;
            free.push(temp);
        }

         
        let temp = {};
        temp["name"] = name;
        temp["unit"] = allItems[j].unit;
        temp["price"] = allItems[j].price;
        temp["num"] = inputsall[i].num;
        temp["sumPrice"] = (allItems[j].price * inputsall[i].num);
        result.push(temp);
    }

  
    for(let i = 0; i < result.length; i ++){
        for(let j = 0; j < free.length; j ++){
            if(result[i].name === free[j].name){
                result[i].sumPrice -= free[j].price;
            }
        }
    }

  
    var expectText = '***<没钱赚商店>购物清单***\n',
        sum = 0,
        freeSum = 0;
    for(let i = 0; i < result.length; i ++){
        expectText += "名称：" + result[i].name + "，数量：" + result[i].num + result[i].unit +
            "，单价：" + result[i].price.toFixed(2) + "(元)，小计：" +
            result[i].sumPrice.toFixed(2) + "(元)\n";
        sum += parseFloat(result[i].sumPrice);
    }
    expectText += '----------------------\n' +
                  '挥泪赠送商品：\n';
    for(let i = 0; i < free.length; i ++){
        expectText += "名称：" + free[i].name + "，数量：" + free[i].num + free[i].unit + "\n";
        freeSum += parseFloat(free[i].price);
    }
    expectText += '----------------------\n' +
                  '总计：' + sum.toFixed(2) + '(元)\n' +
                  '节省：' + freeSum.toFixed(2) + '(元)\n' +
                  '**********************';
    console.log(expectText);
};