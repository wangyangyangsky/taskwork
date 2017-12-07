//计算停车价格
module.exports.stopFee = function stopFee(sfee,s){
    var sfee,s;
    if(s > 0)
    {
        sfee = 0.25 * s;
    }
    return sfee;
}

//计算行走总价格
module.exports.Fee = function Fee(sfee,km){
    var km;
    var fee;
    if(km <= 2){
        fee = 6 + sfee;
        return fee;
    }

    if((km > 2)&&(km <= 8)){
       fee =Math.round(6 + (km - 2) * 0.8 + sfee);
       return fee;
    }

    if(km > 8){
        fee = Math.round(6 + 6 * 0.8 + 1.5 * 0.8  * (km - 8) + sfee);
        return fee;
    }

}
