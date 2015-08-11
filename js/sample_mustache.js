(function() {
    $.getJSON('js/customer.json', function(data) {
        console.log(data);
        var template = $('#customers-template').html();
        var info = Mustache.to_html(template, data);
        $('#talktitles').html(info);

    });
})();
