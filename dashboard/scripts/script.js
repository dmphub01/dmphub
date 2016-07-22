$(function(){

    var ul = $('#upload ul');

    $('#drop a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
		
		
        $(this).parent().find('input').click();
		
    });

    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({

        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),
	
        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {
		 if($('#upload ul li').length==0)
		 {
			 
            var tpl = $('<li class="working"><img src="assets/images/Excel-2.png" width="48" height="48" /><p></p><span></span></li>');
			var nameoffile = data.files[0].name;		
			var extension = nameoffile.substr( (nameoffile.lastIndexOf('.') +1) );			
if($.inArray(extension, ['xls','xlsx']) == -1) {
    alert('invalid extension!');
}
             else
			 {
            // Append the file name and file size
            tpl.find('p').text(data.files[0].name)
                         .append('<i>' + formatFileSize(data.files[0].size) + '</i>');
		
            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);
			$("#disableButton").removeAttr('disabled');
			 }
		 }
		 else
		 {
			alert("Only 1 file Allowed");
				
			}
			
		
            // Initialize the knob plugin
            tpl.find('input').knob();

            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){

                if(tpl.hasClass('working')){

                tpl.fadeOut(function(){
                    tpl.remove();
					if($('.working').html()==undefined)
					$("#disableButton").attr('disabled',true);
                });
 }
            });

            // Automatically upload the file once it is added to the queue
            // var jqXHR = data.submit();
        },

        progress: function(e, data){

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },

        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });


    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }

});