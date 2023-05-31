// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
function intersection(array) {
    return array.reduce((firstArr, currentArr) => {
      const newArr = [];
      firstArr.forEach(el => {
        if (currentArr.includes(el)) {
          newArr.push(el);
        }
      })
      return newArr;
    })
  }