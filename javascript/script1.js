$(document).ready(function(){
	console.log("Ready");
});
	
$(".abtn img").draggable({
	revert:true,
	proxy:'clone',
	onStartDrag:function()
	{
		//$(this).draggable('options').cursor='not-allowed';
		
		$(this).draggable('proxy').css('z-index', 10);
		$(this).draggable('proxy').css('height', '20%');
		$(this).draggable('proxy').css('width', 'auto');
	}
});
$(".ubtn").droppable({
	
	onDrop:function(e, source)
	{
		var sID = $(source).parent().attr('id');
		console.log(sID);
		var tID = $(this).attr('id');
		console.log(tID);
		if(sID == tID){
		console.log("Dropped");
		var pic = $(source).attr('src');
		$(this).css('background-image', 'url("'+pic+'")');
		$(this).css('background-size', 'cover');
		$(this).css('background-position', 'center center');
		}
	}

});
$(".ubtn").click(function(event){
	event.preventDefault();
	$(this).css('background-image', '');
	$(this).text($(this).attr("id"));
	
});

$(".ubtn").mouseover(function(event){
	console.log($(this).css('background-image'));
	if($(this).css('background-image') != 'none'){
	$(this).text("Remove");
	$(this).css('color', '#FF0000');
	}
	
});
$(".ubtn").mouseout(function(event){
	$(this).text($(this).attr("id"));
	$(this).css('color', '#000000');
	
});