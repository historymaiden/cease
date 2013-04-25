// JavaScript Document
	$(document).ready(function(){
		{
		  $('#challengeModal').foundation('reveal', {
			  animation: 'fade',
			  animationSpeed: 400,
			  closeOnBackgroundClick: false,
			  dismissModalClass: 'challengeModal-skip-link'
			});
		}
		 setTimeout(function(){
			 $("#challengeModal").foundation('reveal', 'open');
			}, 1000);
		//$("#heartTimeline").setSize($("#heartTimeline:parent").width());
				
		buildCharts();

	
	});