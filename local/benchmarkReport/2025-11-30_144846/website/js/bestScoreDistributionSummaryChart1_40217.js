
var chart_bestScoreDistributionSummaryChart1_40217 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_40217'), {
    type: 'boxplot',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -92886,
                                    max: -92886,
                                    q1: -92886,
                                    q3: -92886,
                                    median: -92886,
                                    mean: -92886,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -103813,
                                    max: -103813,
                                    q1: -103813,
                                    q3: -103813,
                                    median: -103813,
                                    mean: -103813,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -110345,
                                    max: -110345,
                                    q1: -110345,
                                    q3: -110345,
                                    median: -110345,
                                    mean: -110345,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -92886,
                                    max: -92886,
                                    q1: -92886,
                                    q3: -92886,
                                    median: -92886,
                                    mean: -92886,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -103823,
                                    max: -103823,
                                    q1: -103823,
                                    q3: -103823,
                                    median: -103823,
                                    mean: -103823,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -109292,
                                    max: -109292,
                                    q1: -109292,
                                    q3: -109292,
                                    median: -109292,
                                    mean: -109292,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -92886,
                                    max: -92886,
                                    q1: -92886,
                                    q3: -92886,
                                    median: -92886,
                                    mean: -92886,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -104448,
                                    max: -104448,
                                    q1: -104448,
                                    q3: -104448,
                                    median: -104448,
                                    mean: -104448,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -109847,
                                    max: -109847,
                                    q1: -109847,
                                    q3: -109847,
                                    median: -109847,
                                    mean: -109847,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                display: true
            }
        },
watermark: {
    image: "website/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreDistributionSummaryChart1_40217.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_40217.resize();
});