// var message = "in global";
// console.log("global: message = " + message);
// var a = function () {
// 	var message = "inside a";
// 	console.log("a: message = " + message);
// 	function b () {
// 		console.log("b: message = " + message);
// 	}
// 	b();
// }
// a();


// var x;
// console.log(x);
// if (x == undefined) {
// 	console.log("x is undefined");
// }
// x = 5;
// console.log(x);
// if (x == undefined) {
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x is defined");
// }


// var string = "Hello";
// string += " World"
// console.log(string + "!");
// console.log(undefined / 5);

// var x = 4, y = 4;
// console.log(x == y);
// x = "4";
// console.log(x == y);
// // Strict equality
// console.log(x === y);
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	sum += i;
// }
// console.log(sum);
// function orderdish (sideDish) {
// 	sideDish = sideDish || "whatever";
// 	// if (sideDish === undefined) {
// 	// 	sideDish = "whatever";
// 	// }
// 	console.log("Chicken with " + sideDish);
// }
// orderdish("noodles");
// orderdish();

// var company = new Object();
// company.name = "Facebook";
// console.log(company);
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// console.log(company);
// company.ceo.favcolor = "Blue";
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
// console.log(company["name"]);

// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favcolor: "Blue"
// 	},
// 	$stock: 110
// };
// console.log(facebook);

// function multiply(x, y) {
// 	return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	}
// 	return myFunc;
// }
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// function doOpOn (x, operation) {
// 	return operation(x);
// }

// var result = doOpOn (5, multiplyBy3);
// console.log(result);
// result = doOpOn(100, doubleAll);
// console.log(result);

// function test() {
// 	console.log(this);
// 	this.myName = "Shardul";
// 	console.log("Hello Everyone!");
// }
// test();
// console.log(window.myName);

// function Circle (radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea = function () {
// 	return Math.PI * Math.pow(this.radius, 2);
// }
// var myCircle = new Circle(10);
// console.log(myCircle.getArea());


// var literalCircle = {
// 	radius: 10,
// 	getArea: function () {
// 		var self = this;
// 		console.log(this);
// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// }
// console.log(literalCircle.getArea());

// var array = new Array();
// array[0] = "Everyone";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};
// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);
// var names = ["eqeq", 'efefq', 'wqqwwddddd'];
// console.log(names);
// names[100] = "qedqjqjj";
// var i = 0;
// for (var i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// };
// var names2 = ["eqeq", 'efefq', 'wqqwwddddd'];
// var myObj = {
// 	name: "eqeq",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }



// function makeMultiplier (multiplier) {
// 	return (
// 		function (x) {
// 			return  multiplier * x;
// 		}
// 	);
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));



// console.log(document.getElementById("name"));
// console.log(document instanceof HTMLDocument);
// document.addEventListener("DOMContentLoaded",
// 	function (event) {
// 		function sayHello (event) {
// 			console.log(event);
// 			this.textContent = "Said it!";
// 			var name = document.getElementById("name").value;
// 			var message = "<h2>Hello " + name + "!</h2>";
// 			document.getElementById("content").innerHTML = message;
// 			if (name === "student") {
// 				var title = document.querySelector("#title").textContent;
// 				title += " & Lovin' it!"
// 				document.querySelector("#title").textContent = title;
// 			}
// 		}
// 		document.querySelector("button").addEventListener("click", sayHello);
// 		// document.querySelector("button").onclick = sayHello;
// 		document.querySelector("body").addEventListener("mousemove",
// 			function (event) {
// 				if (event.shiftKey === true) {
// 					console.log("x: " + event.clientX);
// 					console.log("y: " + event.clientY);
// 				}
// 			}
// 		);
// 	}
// );




document.addEventListener("DOMContentLoaded",
	function (event) {
		document.querySelector("button")
			.addEventListener("click", function () {
				var self = this;
				$ajaxUtils
					.sendGetRequest("/data/name.json",
						function (res) {
							var message = 
								res.firstName + " " + res.lastName
							if (res.likesChineseFood) {
								message += " likes Chinese Food";
							}
							else {
								message += " doesn't like Chinese Food";
							}
							message += " and uses ";
							message += res.numberOfDisplays + 1;
							message += " displays for coding."
							document.querySelector("#content")
								.innerHTML = "<h2>" + message + "</h2>"
						});

			});
	}
);