var calculator = {
	memory : 0 ,
	number : 0 ,
	count  : 0 ,
    fuhao  : "",
	dot    : 0,
	numberPressed : function(num) {
		console.log("number pressed: "+num) ;
		if(this.dot==0){
		this.number = this.number * 10 + num ;
		this.count=this.number;
			calculatorUI.setDisplay(this.number) ;
		}
		if(this.dot==1){
			hash=$("#display").html()+num;
			this.number=Number(hash);
			calculatorUI.setDisplay(this.number) ;
			
		
		}
	},
	operatorPressed : function(operator) {
		console.log("operator pressed: "+operator) ;
	
	this.memory=Number(calculatorUI.getDisplay()) ;
	this.fuhao=operator;
	this.number=0;
	this.dot=0;
	hashf = "#" +operator 
		calculatorUI.setDisplay2($(hashf).html()) ;
		
	},
	equalPressed : function() {
		console.log("equal pressed") ;
		if(this.fuhao=="plus"){
			this.count=this.memory+this.number;
			}
		if(this.fuhao=="minus"){
			this.count=this.memory-this.number;
			}
		if(this.fuhao=="multiply"){
			this.count=this.memory*this.number;
			}
		if(this.fuhao=="divide"){
			this.count=this.memory/this.number;
			}
			this.number=0;
			this.dot=0;
		calculatorUI.setDisplayc(this.count) ;
		
	},
	dotPressed : function() {
		console.log("dot pressed") ;
		hashd=calculatorUI.getDisplay()+".";
		this.dot=1;
		this.number=0;
		calculatorUI.setDisplay2(hashd) ;
		
		
	},
	clearPressed : function() {
		console.log("clear pressed") ;
		this.number=0;
		calculatorUI.setDisplay(this.number);
	},
	allClearPressed : function() {
		console.log("all clear pressed") ;
		this.count=0;
		this.memory=0;
		this.number=0 ,
	    this.dot=0,
		calculatorUI.setDisplayc(this.count) ;
	},
};
var calculatorUI = {
    operators : [ "plus" , "minus" , "multiply" , "divide" ] ,
	initialize : function() {
		for(i=0;i<10;i++) {
			hash = "#" + i ;
			$(hash).click(function() {
				calculator.numberPressed(Number($(this).attr("id"))) ;
			});
		}
		for(i=0;i<this.operators.length;i++) {
			hash = "#" + this.operators[i] ;
			$(hash).click(function() {
				calculator.operatorPressed($(this).attr("id")) ;
			}) ;
		}
		$("#equal").click(function() {
			calculator.equalPressed() ;

		});
		$("#dot").click(function() {
			
			calculator.dotPressed() ;
		});
		$("#C").click(function() {
			calculator.clearPressed() ;
		});
		$("#AC").click(function() {
			calculator.allClearPressed() ;
		});
	},
	setDisplay : function() {
	    $("#display").text(calculator.number) ; 	
	},
	setDisplayc : function() {
	    $("#display").text(calculator.count) ; 	
	},
	setDisplay2 : function(a) {
	    $("#display").html(a) ; 	
	},
	getDisplay : function() {
		return $("#display").text() ;
	}
};
$(document).ready(function() {
	calculatorUI.initialize() ;
});