/*
  created by Jeff
  Co-with Liam

  Bug waitting for fixed:
  1.bus return time problem;
  2.when minute = 01, only can get 1
  3.unable to use timeout 


*/


          // 等待加载PhoneGap
          document.addEventListener("deviceready", onDeviceReady, false);

          // PhoneGap加载完毕
          function onDeviceReady() {
            var options = { enableHighAccuracy: true };
            navigator.geolocation.getCurrentPosition(onSuccess, onError,options);
          }



          // 获取位置信息成功时调用的回调函数
          function onSuccess(position) {
            var element = document.getElementById('geolocation');
            /*element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                      'Longitude: '          + position.coords.longitude             + '<br />' +
                      'Altitude: '           + position.coords.altitude              + '<br />' +
                      'Accuracy: '           + position.coords.accuracy              + '<br />' +
                      'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                      'Heading: '            + position.coords.heading               + '<br />' +
                      'Speed: '              + position.coords.speed                 + '<br />' +
                      'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/

            // alert('Position return successful');
            console.log('Position return successful');
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('lat:', latitude, 'long:', longitude);

            //    Google Maps API set center:
            map.setCenter({ lat: latitude, lng: longitude});
          }

          // onError回调函数接收一个PositionError对象
          function onError(error) {
            alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
          }

          var map;

		  //初始化地图
          function initMap() {

			//Set up markers 设置标记
			/*var stop1 = {lat: 50.796784, lng: -1.041907};
			var stop2 = {lat: 50.7940405, lng: -1.0552931};
			var stop3 = {lat: 50.7945695, lng: -1.0690367};
			var stop4 = {lat: 50.7958546, lng: -1.075254};
			var stop5 = {lat: 50.7955254, lng:-1.0931081};
			var stop6 = {lat: 50.7950578, lng:-1.0954583};*/

			//Set Marker's LatLng 设置标记点
			var locations = [
				['Langstone Campus', 50.796784, -1.041907, 4],
				['Locksway Road', 50.793440, -1.056964,4],
				['Goldsmith Avenue', 50.794917, -1.069517,4],
				['Fratton Railway Station', 50.796025, -1.075952,4],
				['Winston Churchill Ave', 50.795470, -1.092348,4],
				['Cambridge Road', 50.794527, -1.096987,4],
			];

			var lineLocations = [
				//Langstone - Locksway
				{lat: 50.796784, lng: -1.041907},
				{lat: 50.796795, lng: -1.042146},
				{lat: 50.795749, lng: -1.042149},
				{lat: 50.795749, lng: -1.042248},
				{lat: 50.794421, lng: -1.042239},
				{lat: 50.793835, lng: -1.046299},
				{lat: 50.794178, lng: -1.048975},
				{lat: 50.793904, lng: -1.051111},
				{lat: 50.793650, lng: -1.054983},
				{lat: 50.793654, lng: -1.055911},
				{lat: 50.793440, lng: -1.056964},
				//Locksway - Goldsmith
				{lat: 50.793131, lng: -1.057850},
				{lat: 50.792447, lng: -1.057217},
				{lat: 50.792111, lng: -1.056692},
				{lat: 50.792243, lng: -1.057287},
				{lat: 50.792285, lng: -1.057670},
				{lat: 50.793879, lng: -1.062317},
				{lat: 50.794182, lng: -1.063426},
				{lat: 50.794604, lng: -1.066567},
				{lat: 50.794776, lng: -1.067047},
				{lat: 50.794947, lng: -1.067068},
				{lat: 50.794974, lng: -1.067319},
				{lat: 50.794824, lng: -1.067402},
				{lat: 50.794710, lng: -1.068042},
				{lat: 50.794917, lng: -1.069517},
				//Goldsmith - Fratton
				{lat: 50.795995, lng: -1.074740},
				{lat: 50.796051, lng: -1.075728},
				{lat: 50.796027, lng: -1.075974},
				//Fratton - Winston
				{lat: 50.795968, lng: -1.076340},
				{lat: 50.795805, lng: -1.076588},
				{lat: 50.795592, lng: -1.076796},
				{lat: 50.795579, lng: -1.077153},
				{lat: 50.795651, lng: -1.077326},
				{lat: 50.795137, lng: -1.079183},
				{lat: 50.794862, lng: -1.079159},
				{lat: 50.794771, lng: -1.079379},
				{lat: 50.794770, lng: -1.079689},
				{lat: 50.794893, lng: -1.079917},
				{lat: 50.794993, lng: -1.079946},
				{lat: 50.795043, lng: -1.081037},
				{lat: 50.794890, lng: -1.083442},
				{lat: 50.794923, lng: -1.084884},
				{lat: 50.795132, lng: -1.087674},
				{lat: 50.795302, lng: -1.088549},
				{lat: 50.795226, lng: -1.088765},
				{lat: 50.795333, lng: -1.088990},
				{lat: 50.795285, lng: -1.089716},
				{lat: 50.795470, lng: -1.092348},
				//Winston - Cambridge
				{lat: 50.795539, lng: -1.093676},
				{lat: 50.795492, lng: -1.094226},
				{lat: 50.795204, lng: -1.094908},
				{lat: 50.794977, lng: -1.095218},
				{lat: 50.794623, lng: -1.095528},
				{lat: 50.794280, lng: -1.095688},
				{lat: 50.794651, lng: -1.095946},
				{lat: 50.794755, lng: -1.096183},
				{lat: 50.794749, lng: -1.096461},
				{lat: 50.794527, lng: -1.096987},
				//Return Line
				{lat: 50.794749, lng: -1.096461},
				{lat: 50.794919, lng: -1.096142},
				{lat: 50.795058, lng: -1.095952},
				{lat: 50.795631, lng: -1.095686},
				{lat: 50.795990, lng: -1.095615},
				{lat: 50.796140, lng: -1.095159},
				{lat: 50.795823, lng: -1.094235},
				{lat: 50.795698, lng: -1.093895},
				{lat: 50.795563, lng: -1.093272},
				{lat: 50.795470, lng: -1.092348},


			];

			//Set basic attributes
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 50.791499, lng: -1.0815219},
              zoom: 14,
			  gestureHandling: 'greedy',
			  mapTypeControl: false,
			  zoomControl:false,
			  streetViewControl:false,
			  fullscreenControl: false,
            });

			//Init marker name 设置标记名弹窗变量
			var infowindow = new google.maps.InfoWindow();

			//Init marker and Counter var
			var marker, i;

			var stopImage = './asset/img/stopMarker.png';

			//Set a loop to spawn markers 根据位置数量循环加载标记点
			for (i = 0; i < locations.length; i++){
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1],locations[i][2]),
					animation: google.maps.Animation.DROP,
					icon: stopImage,
					map:map
				});

				//set up cilck event to display infoWindow & name
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
					  infowindow.setContent(locations[i][0]);
					  infowindow.open(map, marker);
					}
				})(marker,i));
			}

			/*uniBus_Current = new google.mpas.Marker({
				position: if()
			});*/

			//Draw Line 绘制路线
			var unibusLine = new google.maps.Polyline({
				path: lineLocations,
				geodesic: true,
				strokeColor: '#5a498f',
				strokeOpacity:1.0,
				strokeWeight: 9
			});

			marker.setMap(map);
			unibusLine.setMap(map);
			console.log('set marker');

			console.log('initMap');


        }


	//Station Calculate
  //get realtime
  var currentTime;
  function timeRefresh(){
    var d = new Date();
    var hours = d.getHours();
    var minute = d.getMinutes();

    console.log(minute);
    currentTime = parseInt(hours.toString()+minute);
    return currentTime;
  }
  //timeRefresh();
  setTimeout(timeRefresh(), 60000);
  console.log(currentTime);

	var currentStation;
	var nextStation;
	var stopStation;
  var nextInfo;
  var nextMin;
  var userCStation = 5;
	var currentMinute = getMin(currentTime);
	var t1=[740, 820, 900, 940, 1020, 1100, 1140, 1220, 1300, 1320, 1400, 1440, 1520, 1600, 1640, 1720, 1800, 1840, 1900]; //Bus1 Start time Each
	var busStation=['Langstone Campus', 'Locks Way Road','Goldsmith Avenue (Lidi)','Goldsmith Avenue (Milton Park)', 'Fratton Railway Station', 'Winston Churchill Ave', 'Cambridge Road'];
	var possTime = [00,03,05,07,08,09,10,13,14,15,20,23,25,27,28,29,30,33,34,35,40,43,45,47,48,49,50,53,55,57];

	function getMin(time){
		var time;
		sTime = time.toString();
		sMinOut = sTime.substr(sTime.length-2);
		minOut = parseInt(sMinOut);
		var currentMinute = minOut;
		return currentMinute;
	}

	function toEnd(prev){

		var prev;
		var prevMin = getMin(prev);
		endTime = prev + 37;
		if(getMin(endTime) >= 60){
			endTime = (endTime + 100) - 60;
		}
		return endTime;

	}


	function checkStation(time){

		var time;
		var timeMin = currentMinute;

		for(i=0; i<t1.length; i++){
			if(time >= t1[i] && time <= toEnd(t1[i])){
				findStation(timeMin);
				stopStation = currentStation;
				console.log('Get Station Successful')
				}

			}
			return stopStation;
		}

		function findStation(ts){
			var ts;
			switch (ts){
				case 00: case 20: case 40: case 55: case 15: case 35:
				for(i = 0; i<t1.length; i++){
					if(currentTime != t1[i]){
						cSN = 6;
						currentStation = busStation[currentStation];
						break;
					}else{
						cSN = 0;
						currentStation = busStation[currentStation];
						break;
					}
				}

					case 57: case 17: case 37:
					cSN = 0;
					currentStation = busStation[cSN];
					break;

					case 43: case 03: case 23:
					cSN = 1;
					currentStation = busStation[cSN];
					break;

					case 47: case 07: case 27: case 10: case 30: case 50:
					cSN = 2;
					currentStation = busStation[cSN];
					break;

					case 14: case 34: case 54:
					cSN = 2;
					currentStation = busStation[cSN];
					break;

					case 49: case 09: case 29: case 08: case 28: case 48:
					cSN = 4;
					currentStation = busStation[cSN];
					break;

					case 53: case 13: case 33: case 05: case 25: case 45:
					cSN = 5;
					currentStation = busStation[cSN];
					break;

					default:
					currentStation = "enroute";
					break;


			}
			return currentStation;
		}


		function checkPosition(timeNow){
			var timeNow;
			var minNow = getMin(timeNow);
			var cal;
			for(i=0; i<possTime.length; i++){
				cal = minNow - possTime[i];
				if(cal < 0){
					break;
				}
			}

			nST = possTime[i+1];
			nextStation = findStation(nST);
			return [nextStation, nST];
		}

    function nextTime(nSTn){
      var nSTn = nST;
      if(currentMinute<nSTn){
        nextMin = nSTn - currentMinute;
      }

      if(currentMinute>nSTn){
        var num = possTime.lastIndexOf(nSTn)
        nextMin = possTime[num+1];
      }

      if(currentMinute == nSTn){
        nextMin = 0;
      }

      returnMin = nextMin + 32;

      return [nextMin,returnMin];
    }

    function main(){
  		if(currentTime<740 && currentTime > 1900){
  			busStatus = 0;
  			console.log('Not in service')
  		}else{
  			checkPosition(currentTime);
  			checkStation(currentTime);
        nextTime(nST);
        var nextbus = document.getElementById('next');
  			if( stopStation != 'enroute'){
  				busStatus = 1;
          v = 'Bus now stop at: ' + stopStation + '. Next station is: ' + nextStation + nextMin + 'min';
          nextbus.innerHTML = v;
  				console.log(v);
  			}else{
  				busStatus = 10;
          v = 'Enroute: ' + '. Next station is: ' + nextStation + ' <br>To Library: ' + nextMin + 'min';
          nextbus.innerHTML = v;
          console.log('nextMin: '+nextMin);
  				console.log('Bus now enroute: ' + '. Next station is: ' + nextStation);
  			}
  		}
    }
    //main();
    setTimeout(main(), 60000);
