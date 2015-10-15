google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    var data = google.visualization.arrayToDataTable([
            ['Country', '2014', '2000 Population'],
        ['United States', 16531070],
        ['Japan',5562887 ],
        ['Europe', 13006451]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
            title: 'Sales',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}