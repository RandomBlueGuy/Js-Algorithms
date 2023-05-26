let prods = [
     { nombre: 'Arroz', precio: 5 },
     { nombre: 'Pan', precio: 3 },
     { nombre: 'Tomate', precio: 8 },
     { nombre: 'Leche', precio: 15 },
];

function productosBaratos(prods) {
     const resArr = [];
     prods.map((product) => {
          if (product.precio > 4 && product.precio < 11) {
               resArr.push(product.nombre);
          }
     });
     return resArr;
}
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]

console.log('----------------------------------');

function descifrar(word, obj) {
     const newStr = [];

     word.split('').map((char) => {
          if (obj.hasOwnProperty(char)) {
               newStr.push((char = obj[char]));
          } else {
               newStr.push(char);
          }
     });

     return newStr.join('');
}

console.log(descifrar('h0l4', { 0: 'o', 4: 'a' })); // "hola"
console.log(descifrar('pyrmizo', { y: 'e', z: 's' })); // "permiso"
console.log(descifrar('igual', { h: 'n' })); // "igual"

console.log('----------------------------------');

const persona = {
     peso: 65,
     estatura: 1.8,
     bmi: function () {
          return this.peso / (this.estatura * this.estatura);
     },
};

console.log(persona.bmi()); // 20.061728395061728

console.log('----------------------------------');

const max = (arr) => {
     let max = 0;

     arr.map((item) => {
          max <= item ? (max = item) : max;
     });

     return max;
};

console.log(max([1, 2, 3, 4])); // 4
console.log(max([63, 85, 39, 24, 3])); // 85
