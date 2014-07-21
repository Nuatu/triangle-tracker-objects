var Triangle = {
	initialize: function(a,b,c) {
		this.side1= a;
		this.side2= b;
		this.side3= c;
		isATriangle: function() {
			return ((this.side1+this.side2>=this.side3)&&(this.side1+this.side3>=this.side2)&&(this.side2+this.side3>=this.side1))
	}
}



$(document).ready(function(){
	$("form#sides").submit(function(event) {
  	event.preventDefault();


	})
})

