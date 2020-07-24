$(function () {
	$("#navbarToggle").blur(function (event) {
		console.log("sjehad")
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});