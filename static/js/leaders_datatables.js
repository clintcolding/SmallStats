// Datatables for hitting leaders
$(document).ready(function() {
    $('#hitting-leaders').DataTable( {
        "order": [[ 11, "desc"]],
        "pageLength": 25,
        "paging": true,
        "info": true,
        "searching": true,
        "scrollX": true,
        "aaSorting": []
    } );
// Datatables for pitching leaders
    $('#pitching-leaders').DataTable( {
        "order": [[ 5, "asc"]],
        "pageLength": 25,
        "paging": true,
        "info": true,
        "searching": true,
        "scrollX": true,
        "aaSorting": []
    } );
// Datatables for team leaders
    $('#team-leaders').DataTable( {
        "order": [[ 4, "desc"], [ 2, "desc"]],
        "pageLength": 25,
        "paging": true,
        "info": true,
        "searching": true,
        "scrollX": true,
        "aaSorting": []
} );
} );

// Ranking index that persists with search
$(document).ready(function() {
    $('#hitting-leaders, #pitching-leaders, #team-leaders').each(function(){ 
        var t = $(this).DataTable();
        t.on( 'order.dt search.dt', function () {
            t.column(0, { order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
        } ).draw(); 
    } )
}); 