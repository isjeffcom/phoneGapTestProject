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

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;


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
				['Goldsmith Avenue (Lidi)', 50.794917, -1.069517,4],
        ['Goldsmith Avenue (Milton Park)', 50.792572, -1.058592,4],
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



        }


	//Bus realtime location and user location-base timer Calculator (BL/ULBT)

  var uCS = 3; //user current station

  //To get current time
  function timeRefresh(){
    var d = new Date();
    var hours = d.getHours().toString();
    var minute = d.getMinutes().toString();
    hours = (minute.length = 2) ? hours : hours * 10; //For fix, if minute is 01-09 that the minute will become 1-9 that will cause time uncountable problem
    //currentTime = parseInt(hours+minute);
    currentTime = 811; // 4 debug
    return currentTime;
    console.log('c' + currentTime);
  }


  //NextStation and StopStation var
	var B1nextStation;
  var B2nextStation;
	var B1stopStation;
  var B2stopStation;
  var nextStation;
  var stopStation;

  //Next Minute var
  var B1nextMin;
  var B2nextMin;
  var left2CamTime;
  var left2LanTime;
  var left2CamTimeB2;
  var left2LanTimeB2;

  //Bus basic information
	var t1=[740, 820, 900, 940, 1020, 1100, 1140, 1220, 1300, 1340, 1420, 1500, 1540, 1620, 1700, 1740, 1820, 1900]; //Bus1 Start time Each
  var t2=[800, 840, 920, 1000, 1040, 1120, 1200, 1240, 1320, 1400, 1440, 1520, 1600, 1640, 1720, 1800, 1840]; //Bus2 Start time Each
  var stationGap = [3, 4, 2, 4, 2, 5, 5, 3, 2, 4, 3]; //Bus station gap time
	var busStation=['Langstone Campus', 'Locks Way Road(Milton)','Goldsmith Avenue (Lidi)', 'Fratton Railway Station', 'Winston Churchill Ave (Ibis Hotel)', 'Cambridge Road(Student Union)', 'Cambridge Road(Spinnaker Sports)', 'Winston Churchill Ave (Law Courts)', 'Fratton Railway Station', 'Goldsmith Avenue (Lidl)', 'Goldsmith Avenue (Milton Park)', 'Langstone Campus'];


	function getMin(time){
		var time;
		sTime = time.toString();
		sMinOut = sTime.substr(sTime.length-2);
		minOut = parseInt(sMinOut);
		var currentMinute = minOut;
		return currentMinute;
	}

  function getHour(htime){
		var htime;
		sTime = htime.toString();
    sHourOut = (sTime < 1000) ? sTime.substr(0,1) : sTime.substr(0,2);
		//sHourOut = sTime.substr(0,2);
		HourOut = parseInt(sHourOut);
		var currentHour = HourOut;
		return currentHour;
	}

  function timeMinus(mTimeA, mTimeB){

    var mTimeA;
    var mTimeB;
    var result = (getHour(mTimeA) == getHour(mTimeB)) ? mTimeA - mTimeB : (mTimeA - mTimeB) - 40;
    return result;

  }

  function timeAddFix(ct){
    var ct;
    rt = ((getMin(ct) > 60) ? (ct + 100) - 60 : ct);
    return rt;
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
		var timeMin = getMin(currentTime);

    //BUS1
		for(i=0; i<t1.length; i++){

        //if time is out of the session range that mean is bus break time
        if(time <= t1[i] && time >= toEnd(t1[i-1])){
          B1stopStation = busStation[0];
          B1nextStation = busStation[1];
          break;
        }

  			if(time > t1[i] && time < toEnd(t1[i])){


          findStation(t1[i]);
  				B1stopStation = stopStation;
          B1nextStation = nextStation;
          break;
        }

			}

    //BUS2

    for(i = 0; i<t2.length;i++){

      //if the time is after the final bus2 then there are no bus2 anymore
      var lastBus2 = t2[t2.length-1]
      if(time > toEnd(lastBus2)){
        B2stopStation = 99;
        B2nextStation = 99;
      }

      //if time is out of the session range that mean is bus break time
      if(time <= t2[i] && time >= toEnd(t2[i-1])){
        B2stopStation = busStation[0];
        B2nextStation = busStation[1];
        break;
      }

      //Time is on a session and its able to find the stopStation and nextStation
      if(time > t2[i] && time < toEnd(t2[i])){
        findStation(t2[i]);
        B2stopStation = stopStation;
        B2nextStation = nextStation;
        break;
      }


    }

			return [B1stopStation, B1nextStation, B2stopStation, B2nextStation];
	}

    //A function for find next station by bus start time.
    function findStation(ts){

      //ts = t[i] ts为起驶时间 ts is the start time
      var ts;
      var cS = ts;
      var cT = currentTime;

      for(i=0; i<stationGap.length;i++){
        cS = timeAddFix(cS + stationGap[i]);
        var cal = cT - cS;

        if(cal < 0){
          nextStation = ((i == 0) ? busStation[0] : busStation[i+1]);
          stopStation = 0;
          break;
        }

        if(cal == 0){
          nextStation = ((i+1 <= 12) ? busStation[i+2] : busStation[0]);
          stopStation = ((i == 0) ? busStation[i+1] : busStation[i+1]);
          break;
        }
      }

      return [nextStation, stopStation];
    }


    function nextMinByUcs(uCS){
      var uCS; //User Station
      var time = currentTime;

      for(i = 0; i<t1.length;i++){

          //if bus is in the last session
          if(i > t1.length-1 && typeof t2[i] == 'undefined'){

            LltS = t1[i];
            LltSx = t1[i];
            nUCSS = 11-uCS;

            for(s=0; s<uCS;s++){LltS = timeAddFix(LltS + stationGap[s]);}
            for(s=0; s<nUCSS;s++){LltSx = timeAddFix(LltSx + stationGap[s]);}

            lTcalS = timeMinus(LltS, currentTime);
            lTcalSx = timeMinus(LltSx, currentTime);

            left2CamTime = (lTcalS>0) ? lTcalS : 777;
            left2LanTime = (lTcalSx>0) ? lTcalSx : 777;

            left2CamTimeB2 = 99;
            left2LanTimeB2 = 99;

            break;
          }

          //Bus1

          if(time > t1[i] && time < toEnd(t1[i])){ //Get Session


            var NstationTime = t1[i]; //Get Start Time

            for(c=0; c<uCS;c++){NstationTime = timeAddFix(NstationTime + stationGap[c]);} //Add to the next time the bus about to stop

            //Departure
            if (time < t2[i]){ // If time < return start time which equal to bus2 depart start time
              var Llt = t1[i]; //Llt == start returned bus arriving time
              var Lltx = t2[i]; //Lltx == start departure bus arriving time
               //minus and return the result to check if user still can catch the bus
              nUCS = 11-uCS; //Opposite same station in one round.

              for(d=0; d<nUCS;d++){Llt = timeAddFix(Llt + stationGap[d]);} //Llt == calculate returned bus arriving time
              for(e=0; e<uCS;e++){Lltx = timeAddFix(Lltx + stationGap[e]);} //Lltx == calcute departure bus arriving time

              lTcal = timeMinus(NstationTime, currentTime);
              left2CamTime = (lTcal>0) ? lTcal : timeMinus(Lltx, currentTime);
              left2LanTime = timeMinus(Llt, currentTime);
              break;

            }



            //Return
            if (time > t2[i]){ // Don't change, t2 is right !!!
              var Llt = t2[i];
              var Lltx = t2[i];
              nUCS = 11-uCS;

              for(d=0; d<nUCS;d++){Llt = timeAddFix(Llt + stationGap[d]);}
              for(e=0; e<uCS;e++){Lltx = timeAddFix(Lltx + stationGap[e]);}


              lTcal = timeMinus(Llt, currentTime);
              left2LanTime = (lTcal>0) ? lTcal : timeMinus(Llt, currentTime);
              left2CamTime = timeMinus(Lltx, currentTime);

              break;
            }

            //TEST successful

          }
        }

      //BUS2
      for(i = 0; i<t2.length;i++){


              if(time > t2[i] && time < toEnd(t2[i])){
                if(typeof t2[i] == 'undefined'){    //if bus is in the last session

                  left2CamTimeB2 = 99;
                  left2LanTimeB2 = 99;
                  break;
                }

                var NstationTimeB2 = t2[i];
                for(c=0; c<uCS;c++){NstationTimeB2 = timeAddFix(NstationTimeB2 + stationGap[c]);}

                if (time < t1[i+1]){ // Don't change, t is right !!!

                  var LltB2 = t2[i]; //Llt == start returned bus arriving time
                  var LltxB2 = t1[i+1]; //Lltx == start departure bus arriving time
                   //minus and return the result to check if user still can catch the bus
                  nUCSB2 = 11-uCS; //Opposite same station in one round.


                  for(d=0; d<nUCSB2;d++){LltB2 = timeAddFix(LltB2 + stationGap[d]);} //Llt == calculate returned bus arriving time
                  for(e=0; e<uCS;e++){LltxB2 = timeAddFix(LltxB2 + stationGap[e]);} //Lltx == calcute departure bus arriving time

                  lTcalB2 = timeMinus(NstationTimeB2, currentTime);
                  left2CamTimeB2 = (lTcalB2>0) ? lTcal : timeMinus(LltxB2, currentTime);
                  left2LanTimeB2 = timeMinus(LltB2, currentTime);
                  break;

                }

                if (time > t1[i+1]){ // Don't change, t is right !!!

                  var LltB2 = t2[i];
                  var LltxB2 = t1[i+1];
                  nUCSB2 = 11-uCS;

                  for(d=0; d<nUCSB2;d++){LltB2 = timeAddFix(LltB2 + stationGap[d]);}
                  for(e=0; e<uCS;e++){LltxB2 = timeAddFix(LltxB2 + stationGap[e]);}


                  lTcalB2 = timeMinus(LltB2, currentTime);
                  left2LanTimeB2 = (lTcalB2>0) ? lTcalB2 : timeMinus(LltB2, currentTime);
                  left2CamTimeB2 = timeMinus(LltxB2, currentTime);

                  break;
                }

              }
      }


      //Fix a problem that if the time is out of the session that this function could return a undefined value cause uncountable final result.

      left2CamTime = (typeof left2CamTime == 'undefined') ? 99 : left2CamTime;
      left2CamTimeB2 = (typeof left2CamTimeB2 == 'undefined') ? 99 : left2CamTimeB2;
      left2LanTime = (typeof left2LanTime == 'undefined') ? 99 : left2LanTime;
      left2LanTimeB2 = (typeof left2LanTimeB2 == 'undefined') ? 99 : left2LanTimeB2;

      //Identify which bus is more approach to the user station and give a final return. 2017.01.16
      if(left2CamTime < 0 || left2CamTimeB2 < 0){
        leftCamTime = (left2CamTime > left2CamTimeB2) ? left2CamTime : left2CamTimeB2;

      }else{
        leftCamTime = (left2CamTime < left2CamTimeB2) ? left2CamTime : left2CamTimeB2;

      }

      if(left2LanTime < 0 || left2LanTimeB2 < 0){
        leftLanTime = (left2LanTime > left2LanTimeB2) ? left2LanTime : left2LanTimeB2;
      }else{
        leftLanTime = (left2LanTime < left2LanTimeB2) ? left2LanTime : left2LanTimeB2;
      }

      return [left2LanTime, left2CamTime, left2CamTimeB2, left2LanTimeB2, leftCamTime, leftLanTime];

      //B1nextStation =

    }







    function main(){
      timeRefresh();
      var nextbus = document.getElementById('next');
      var nextbus2 = document.getElementById('next2');
      var nearest = document.getElementById('nearest');
  		if(currentTime<740 || currentTime >= 1937){

  			bus1Status = 0;
        bus2Status = 0;
        v = 'University Bus not in services';
        nextbus.innerHTML = v;
        //nextbus2.innerHTML = c;

  		}else{
        nextMinByUcs(uCS);
  			checkStation(currentTime);
        v = 'Bus 1 currently stop at: ' + B1stopStation + ' Next is: ' + B1nextStation + '<br>Bus 2 currently stop at: ' + B2stopStation + ' Next is: ' + B2nextStation;
        k = 'To libray: ' + leftCamTime + ' To Langstone: ' + leftLanTime;
        s = busStation[uCS];
        nearest.innerHTML = s;
        nextbus.innerHTML = v;
        nextbus2.innerHTML = k;
        //console.log('B1 cam: ' + left2CamTime + ' B1 Lan:' + left2LanTime + ' B2 cam: ' + left2CamTimeB2 + ' B2 Lan: ' + left2LanTimeB2);
        //console.log('Final LeftCamTime: ' + leftCamTime + ' LeftLanTime: ' + leftLanTime);
    }
  }
  main();
  window.setInterval(main, 20000);

    //main();
    //setTimeout(main(), 6000);
