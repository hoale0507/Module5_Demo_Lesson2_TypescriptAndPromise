 const buyNewCar = (money, car) => {
    return new Promise((resolve, reject) => {
        if (money > 20000) {
            resolve(`Co the mua dc xe ${car}`);
        }
        else {
            reject(`Khong the mua dc xe ${car}`);
        }
    });
};
let money = 50000;
let result = buyNewCar(money, 'Mercedes').then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});
//# sourceMappingURL=promise.js.map