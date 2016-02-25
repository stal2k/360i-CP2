$(document).ready(function () {
    
    function exportTableToCSV($table, filename) {

        var $rows = $table.find("tr"),

            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            tmpColDelim = String.fromCharCode(11), // vertical tab character
            tmpRowDelim = String.fromCharCode(0), // null character

            // actual delimiter characters for CSV format
            colDelim = '","',
            rowDelim = '"\r\n"',

            // Grab text from table into CSV formatted string
            csv = '"' + $rows.map(function (i, row) {
                var $row = $(row),
                    $cols = $row.find("td,th");

                return $cols.map(function (j, col) {
                    var $col = $(col),
                        text = $col.text();

                    return text.split('"').join('""'); // escape double quotes

                }).get().join(tmpColDelim);

            }).get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"',

            // Data URI
            csvData = new Blob([csv], { type: 'text/csv' });
				var csvUrl = URL.createObjectURL(csvData);
				$(this)
					.attr({
					'download': filename,
						'href': csvUrl,
						'target': '_blank'
				});
    }

    // This must be a hyperlink
    $(".export").on('click', function (event) {
        // CSV
        var dn = domainSelect.value.split('.').join('-')
        var dn2 = dn.replace(':', '-')
        var domain = dn2.split('/').join('')
        var date = moment().format("M_D_YY")
        var fn = 'SERP-Analytics' + '-' + domain + '-' + date + '.csv'
        exportTableToCSV.apply(this, [$('#dvData'), fn]);
        
        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
});