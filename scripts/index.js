function timingFunc(){
  const hourVal = document.querySelector('.hour-val');
  const minuteVal = document.querySelector('.minute-val');
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const hourPlus = document.querySelector('.hourPlus');
  const hourMinus = document.querySelector('.hourMinus');
  const minutePlus = document.querySelector('.minutePlus');
  const minuteMinus = document.querySelector('.minuteMinus');

  hour.innerHTML = hourVal.value
  minute.innerHTML = minuteVal.value

  hourPlus.onclick = function(){
    hourVal.value++;
    timingFunc()
    if(hourVal.value >= 24){
      hourVal.value = 0;
      timingFunc()
    }
  }
  hourMinus.onclick = function(){
    hourVal.value--;
    timingFunc()
    if(hourVal.value <= 1){
      hourVal.value = 23;
      timingFunc()
    }
  }
  minutePlus.onclick = function(){
    minuteVal.value++;
    timingFunc()
    if(minuteVal.value >= 60){
      minuteVal.value = 1;
      timingFunc()
    }
  }
  minuteMinus.onclick = function(){
    minuteVal.value--;
    timingFunc()
    if(minuteVal.value <= 1){
      minuteVal.value = 59;
      timingFunc()
    }
  }
}

window.onload = timingFunc;


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

$(function() {
  $('.ozon__item-with-img').click(function() {
    $('.ozon__item-with-img').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.ozon__item').click(function() {
    $('.ozon__item').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$(function() {
  $('.seo-meta__body').click(function() {
    $('.seo-meta__body').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

$( function() {
  $( "#calendar" ).datepicker({
    changeMonth: true, 
    changeYear: true, 
    beforeShowDay: function(date){
			var dayOfWeek = date.getDay();
			if (dayOfWeek == 6){
				return [false];
			} else {
				return [true];
			}
		}
  });
} );

