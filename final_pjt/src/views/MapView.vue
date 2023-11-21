   <template>
    <div class="container">
      <h1>지도 검색</h1>
      <div class="search">
        <form action="#">
          <label for="city">시도:</label>
          <select v-model="selectedCity" id="city" @change="updateDistricts">
            <option v-for="city in cities" :value="city">{{ city }}</option>
          </select>
  
          <label for="district">시군구:</label>
          <select v-model="selectedDistrict" id="district">
            <option v-for="district in districts" :value="district">{{ district }}</option>
          </select>
  
          <label for="bank">은행:</label>
          <select name="은행" id="bank" v-model="bankname">
            <option value="kukmin">국민은행</option>
            <option value="shinhan">신한은행</option>
            <option value="woori">우리은행</option>
            <option value="hana">하나은행</option>
            <option value="saneop">산업은행</option>
            <option value="nonghyeop">농협</option>
            <option value="saemaeul">새마을금고</option>
            <option value="shinhyeop">신협</option>
            <option value="post">우체국</option>
            <option value="kieop">기업은행</option>
            <option value="busan">부산은행</option>
            <option value="daegu">대구은행</option>
            <option value="kwangju">광주은행</option>
            <option value="kn">경남은행</option>
            <option value="jb">전북은행</option>
            <option value="jj">제주은행</option>
            <option value="sh">수협</option>
          </select>
          <button @click.prevent="searchLocation">찾기</button>
        </form>
      </div>
      <div class="map-container">
        <div id="map"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import jsonData from '@/assets/data.json'

  console.log(jsonData)

  const selectedCity = ref('');
  const selectedDistrict = ref('');
  const cities = ref([]);
  const districts = ref([]);
  const bankname = ref();

  const mapKey = '69f10657a5bf01e678763ab544de5adb'
let map = null;
let infowindow = null;
let ps = null;

const initMap = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 5,
  };
  // 지도 객체를 등록합니다.
  // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
  map = new kakao.maps.Map(container, options);

  infowindow = new kakao.maps.InfoWindow({zIndex:1})
  ps = new kakao.maps.services.Places(map);
  ps.categorySearch('BK9', placesSearchCB, {useMapBounds:true});
};


const displayDistrictMarkers = (jsonData) => {
    jsonData.DB.forEach((data) => {
      const districtMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(data.위도, data.경도),
        map: map,
      });
    });
  };

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (let i=0; i<data.length; i++) {
            displayMarker(data[i]);    
        }       
    }
}
// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}

onMounted(async () => {
  if (window.kakao && window.kakao.maps) {
    initMap();
    console.log('if b',infowindow)
  } else {
    const script = document.createElement('script');
    /* global kakao */
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapKey}&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(initMap);
    }
  }
});

  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
  }
  
  .container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(30, 75, 76, 0.2);
  }
  
  h1 {
    text-align: center;
    color: #1E4B4C;
  }
  
  .search {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  select,
  button {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #1E4B4C;
    border-radius: 5px;
  }
  
  select {
    flex: 1;
  }
  
  button {
    background-color: #1E4B4C;
    color: #fff;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0D2C2D;
  }
  
  .map-container {
    margin-bottom: 20px;
  }
  
  #map {
    width: 100%;
    height: 300px;
    border: 1px solid #1E4B4C;
    border-radius: 10px;
  }
  </style>
  