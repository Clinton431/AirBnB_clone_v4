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
