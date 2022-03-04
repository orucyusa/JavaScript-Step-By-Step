let numbers = [];
const islemler = {
    push: function (data) {
        numbers.push(data);
    },
    pop: function () {
        numbers.pop();
    },
    swap: function () {
        var leng = numbers.length;
        if (leng > 1) {
            [numbers[leng - 1], numbers[leng - 2]] = [numbers[leng - 2], numbers[leng - 1]];
            window.alert("Değişen elemanlar : " + numbers[leng - 1] + " ve " + numbers[leng - 2]);
        }
        else {
            window.alert("Eleman eklemelisiniz...");
        }
    },
    topMostValue: function () {
        var max;
        if (numbers.length < 1) {
            window.alert("Hiç Eleman yok !");
        } else {
            console.log(max = Math.max.apply(null,numbers));
            window.alert("En büyük değer : " + max);
        }
    }
}
islemler.push(10);
console.log(numbers);
islemler.push(1);
console.log(numbers);
islemler.push(23);
console.log(numbers);
islemler.push(14);
console.log(numbers);
islemler.pop();
console.log(numbers);
islemler.swap();
console.log(numbers);
islemler.topMostValue();
console.log(numbers);

