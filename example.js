 function init(){
      document.addEventListener("deviceready", onDeviceReady, false);
     
    }
  
  
function onDeviceReady(){
 
var tabsdemo = angular.module('tabsdemo', []);
angular.module('tabsdemo', ['ui.bootstrap']);
angular.module('tabsdemo').controller('tabsCtrl', function ($scope) {
  $scope.tabs = [
    { title:'Tab1 ', content:'tab1.html' },
    { title:'Tab2', content:'tab2.html'},
    { title:'Tab3', content:'tab3.html'}
  ];

  FastClick.attach(document.body);
});

angular.module('tabsdemo').controller('newCtrl', function ($scope) {
    $scope.cards = [
      { title: '11', content: 'tab1.html' },
      { title: '2', content: 'tab2.html' },
      { title: '3', content: 'tab3.html' }
    ];


    var chartingOptions = {
        chart: {
            renderTo: 'container',
            type: 'scatter'
        },
        series: [{
            name: 'a',
            data: [],
        }]

    };

    var chart = new Highcharts.Chart(chartingOptions);

 
    $scope.addValue = function () {
       
        var chart = $('#container').highcharts();
        chart.series[0].addPoint([
            $scope.valueY,
            $scope.valueX
        ]);
    };
    

});

    
    var domElement = document
    angular.bootstrap(domElement, ["tabsdemo"]);
    


  
    
}



