function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index >= 0) {
      array.splice(index, 1);
    }
    return array;
  }

//Еще один способ реализации функции removeElement(array, item):
// function removeElement(array, item) {
//     const newArray = array.filter(element => element !== item);
//     return newArray;
//   }

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
