$(document).ready(function() {
    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var checkedAmenities = [];
        // Loop through each checkbox
        $('input[type="checkbox"]:checked').each(function() {
            // Store the Amenity ID in the variable
            checkedAmenities.push($(this).data('id'));
        });
        // Update the h4 tag inside the Amenities div with the list of checked amenities
        $('#amenities h4').text(checkedAmenities.join(', '));
    });
});
$.ajax({
	url: 'http://0.0.0.0:5001/api/v1/status/',
	type: 'GET',
	success: function(data) {
		//Check if the status is "OK" and update the class of div#api_status accordingly
		if (data.status === 'OK') {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	},
	error: function(error) {
		// If there is an error, remove the class available
		$('#api_status').removeClass('available');
	}
});
