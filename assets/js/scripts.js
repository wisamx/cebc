/* LOAD SERMONS */

jQuery(document).ready(function(){

	if (jQuery('body').hasClass('home')) {
		jQuery(window).scroll(function(){
			var headerTop = jQuery('.site-header').offset().top;
			if (headerTop > 100) {
				jQuery('.site-header').addClass('sticky');
			} else {
				jQuery('.site-header').removeClass('sticky');
			}
		});
	}	

    /*var data;
    jQuery.ajax({
    type: "GET",  
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRR6HwfElvArNDMu4awPJzX_66RgU-igdILS80lwmy330kF3992iDKATgkk_fsLsojsGktMTY8t2Eb_/pub?gid=0&single=true&output=csv",
    dataType: "text",
    success: function(response)
    {
        data = jQuery.csv.toArrays(response);
        generateHtmlTable(data);
    }
    });

    function generateHtmlTable(data) {
        
    var html = '<table  class="table table-condensed table-hover table-striped">';

    if(typeof(data[0]) === 'undefined') {
        return null;
    } else {
        jQuery.each(data, function( index, row ) {
        //bind header
        if(index == 0) {
            html += '<thead>';
            html += '<tr>';
            jQuery.each(row, function( index, colData ) {
                html += '<th>';
                html += colData;
                html += '</th>';
            });
            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';
        } else {
            html += '<tr>';
            jQuery.each(row, function( index, colData ) {
                html += '<td>';
                html += colData;
                html += '</td>';
            });
            html += '</tr>';
        }
        });
        html += '</tbody>';
        html += '</table>';
        jQuery('#csv-display').append(html + 'xxxxxxxxxxx');
    }
    }*/


});