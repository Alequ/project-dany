
/*Filter  */
$(function() {

    var ft = $.filtrify("productList", "here", {
        close : true,
        callback : function( query, match, mismatch ) {
            if ( mismatch.length ) $("div#reset").show();
            else $("div#reset").hide();
        }
    });

    $("div#reset span").click(function() {
        ft.reset();
    });

});

/*Jpages  */

$(function() {
    /* initiate plugin */
    $("div.holder").jPages({
        containerID: "productList",
        perPage : 16
    });
});
