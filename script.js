function findLargest(a, b, c) {
  //your code here
	  var largestNumber = num1;

  if (num2 > largestNumber) {
    largestNumber = num2;
  }

  if (num3 > largestNumber) {
    largestNumber = num3;
  }

  return largestNumber;
}
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
