QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#3').click();
	$('#4').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 134 , "Passed!" );
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#1').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 4 , "Passed!" );
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#8').click();
	$('#minus').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 5 , "Passed!" );
});