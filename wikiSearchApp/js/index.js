//Run jQuery
$(document).ready(function(){
	//on click run search
	$('#searchBut').click(function(){
		//capture search input
		var searchQuery = $('#searchQuery').val();
		//api-url search input
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchQuery +"&format=json&callback=?";
		
		$.ajax({
			type:"GET",
			url:url,
			async:false,
			dataType:"json",
			success: function(data){
				$('#output').html('');
				for(var i=0; i<data[1].length; i++){
					$('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
				}
				$('#searchQuery').val('');
			},
			error: function(error){
				alert("Error");
			}
		});
	});

	$('#searchQuery').keypress(function(e){
		if(e.which===13){
			$('#searchBut').click();
		}
	});
});