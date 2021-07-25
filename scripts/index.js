$( function() {
  var dateFormat = "",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'с dd.mm.yy',
        minDate: -20, 
        maxDate: "+1M +10D"
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: -20, 
      dateFormat: 'по dd.mm.yy',
      maxDate: "+1M +10D"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );


var options = {
  series: [{
    name: 'series1',
    data: [60, 85, 75, 120, 100, 109, 97]
    }],
  chart: {
    height: 350,
    type: 'area',
    fontFamily: 'Proxima Nova',

    toolbar: {
      show: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"]
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();