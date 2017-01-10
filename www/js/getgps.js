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
			
			var nline = [
				['Langstone Campus', 50.796784, -1.041907, 1],
				['Locksway Road', 50.796795, -1.042146, 2],
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
			  gestureHandling: 'greedy'
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
			
			//绘制路线
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
