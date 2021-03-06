const bubbleSort = array => {
	 do {
    var swapped = false;
    for (	 i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);

	return array
}

module.exports = { bubbleSort };

// On^2 time complexity
// constant space complexity - no new array created 