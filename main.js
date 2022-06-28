"use strict";

const structure = {
    data: {},
    getData(){
        let res = {};
        for (let key in structure.data) {
            res[key] = structure.data[key].sort().join(' - ');
        }
        return res;
    }
}

function addWay(trainId, wayName) {
    if (!(trainId in structure.data)) {
        structure.data[trainId] = [];
    }
    structure.data[trainId].push(wayName);
    // TODO запуск этого метода сортирует основной массив. Надо ли это?
    return structure.getData();
}

addWay(123,'Д7');
addWay(123,'А3');
addWay(720,'1П');
addWay(108,'А9');
addWay(123,'А1');
addWay(108,'А1');
addWay(720,'3П');


console.log(structure.getData())