const datbase = require("./datbase");

// module.exports.main = function main(inputs){
//     var inputsall = [];
//     var result = [];
//     var free = [];
//     var i = 0;
//     var allItems = datbase.loadAllItems();
//     var promotions = datbase.loadPromotions();
//
//     inputsall = changeInputs(inputs,inputsall);
//     free = forFree(allItems,promotions,inputsall,result,free);
//     result = summary(result,free);
//     expectText = print(result,free);
//     console.log(expectText);
// }




module.exports.changeInputs = function changeInputs(inputs,inputsall){
    var i= 0;
    while (i < inputs.length){
        var temp = {};
        if(inputs[i].indexOf('-') >= 0){
            var arr = inputs[i].split('-');
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
    return inputsall;
}

module.exports.forFree = function forFree(allItems,promotions,inputsall,result,free){
    var allItems = datbase.loadAllItems();
    var promotions = datbase.loadPromotions();
      for (var i = 0; i < inputsall.length; i ++) {
          var name, barcode, j;


          for (var j = 0; j < allItems.length; j++) {
              if (allItems[j].barcode == inputsall[i].barcode) {
                  barcode = allItems[j].barcode;
                  name = allItems[j].name;
                  break;
              }
          }


          if (promotions[0].barcodes.indexOf(barcode) >= 0 && inputsall[i].num >= 2) {
              var temp = {};
              temp["name"] = name;
              temp["num"] = 1;
              temp["unit"] = allItems[j].unit;
              temp["price"] = allItems[j].price;
              free.push(temp);
          }


          var temp = {};
          temp["name"] = name;
          temp["unit"] = allItems[j].unit;
          temp["price"] = allItems[j].price;
          temp["num"] = inputsall[i].num;
          temp["sumPrice"] = (allItems[j].price * inputsall[i].num);
          result.push(temp);


      }
    for(var i = 0; i < result.length; i ++){
        for(var j = 0; j < free.length; j ++){
            if(result[i].name === free[j].name){
                result[i].sumPrice -= free[j].price;
            }
        }
    }
return free;
}



module.exports.print = function print(result,free){
   var expectText = '***<没钱赚商店>购物清单***\n',
        sum = 0,
        freeSum = 0;
   for(var i = 0; i < result.length; i ++){
        expectText += "名称：" + result[i].name + "，数量：" + result[i].num + result[i].unit +
            "，单价：" + result[i].price.toFixed(2) + "(元)，小计：" +
            result[i].sumPrice.toFixed(2) + "(元)\n";
        sum += parseFloat(result[i].sumPrice);
    }
    expectText += '----------------------\n' +
                  '挥泪赠送商品：\n';
    for(var i = 0; i < free.length; i ++){
        expectText += "名称：" + free[i].name + "，数量：" + free[i].num + free[i].unit + "\n";
        freeSum += parseFloat(free[i].price);
    }
    expectText += '----------------------\n' +
                  '总计：' + sum.toFixed(2) + '(元)\n' +
                  '节省：' + freeSum.toFixed(2) + '(元)\n' +
                  '**********************';
    console.log(expectText);
    // return expectText;
};

