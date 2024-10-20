$(document).ready(function() {
    function initializeOrdinanceTable() {
        $.ajax({
            url: 'data/ordinances.csv',
            dataType: 'text',
            success: function(data) {
                const rows = data.split('\n').slice(1); // Skip header row
                const parsedData = rows.map(row => {
                    const cols = row.split(',').map(col => col.trim()); // Trim each column
                    return {
                        "Document No": cols[0] || 'N/A',
                        "Tags": cols[1] || 'N/A',
                        "Title": cols[2] || 'N/A',
                        "Author": cols[3] || 'N/A',
                        "Co-author": cols[4] || 'N/A',
                        "Approved Date": cols[5] || 'N/A',
                        "File": cols[6] || 'N/A'
                    };
                });

                const table1 = $('#ordinancesTable').DataTable({
                    bFilter: false,
                    "data": parsedData,
                    "columns": [
                        { "data": "Document No" },
                        { "data": "Tags" },
                        { "data": "Title" },
                        { "data": "Author" },
                        { "data": "Co-author" },
                        { "data": "Approved Date" },
                        { "data": "File" }
                    ]
                });
                $('#ordinancesTable thead input').on('keyup change clear', function() {
                    const columnIdx = $(this).parent().index();
                    table1.column(columnIdx).search(this.value).draw();
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error loading CSV file: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }

    

    function initializeResolutionTable() {
        $.ajax({
            url: 'data/resolution.csv',
            dataType: 'text',
            success: function(data) {
                const rows = data.split('\n').slice(1); // Skip header row
                const parsedData = rows.map(row => {
                    const cols = row.split(',').map(col => col.trim()); // Trim each column
                    return {
                        "Document No": cols[0] || 'N/A',
                        "Tags": cols[1] || 'N/A',
                        "Title": cols[2] || 'N/A',
                        "Author": cols[3] || 'N/A',
                        "Co-author": cols[4] || 'N/A',
                        "Approved Date": cols[5] || 'N/A',
                        "File": cols[6] || 'N/A'
                    };
                });

                const table2= $('#resolutionTable').DataTable({
                    bFilter: false,
                    "data": parsedData,
                    "columns": [
                        { "data": "Document No" },
                        { "data": "Tags" },
                        { "data": "Title" },
                        { "data": "Author" },
                        { "data": "Co-author" },
                        { "data": "Approved Date" },
                        { "data": "File" }
                    ]
                });

                
                $('#resolutionTable thead input').on('keyup change clear', function() {
                    const columnIdx = $(this).parent().index();
                    table2.column(columnIdx).search(this.value).draw();
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error loading CSV file: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }
    initializeOrdinanceTable();
    initializeResolutionTable();
});
