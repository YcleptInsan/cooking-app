var conversion = function (gallons) {
	return gallons * 3.78541;
  };
  var gallons = parseInt(prompt("Enter volume in gallons:"));
  var liters= conversion;
  alert(liters(gallons));
