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
          <option v-for="district in districts[selectedCity]" :value="district">
            {{ district }}
          </option>
        </select>

        <label for="bank">은행:</label>
        <select v-model="selectedBank" id="bank">
          <option v-for="bank in bankname" :value="bank">
            {{ bank }}
          </option>
        </select>
        <button @click.prevent="searchLocation">찾기</button>
      </form>
    </div>
    <div class="map-container">
      <div id="map"></div>
    </div>
    <h1>{{ selectedCity }} {{ selectedDistrict }} {{ selectedBank }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import jsonData from "@/assets/data.json";

console.log(jsonData);

const selectedCity = ref("");
const selectedDistrict = ref("");
const selectedBank = ref("");

const cities = ref([
  "서울시",
  "부산시",
  "대구시",
  "인천시",
  "광주시",
  "대전시",
  "울산시",
  "세종시",
  "제주시",
  "경기도",
  "강원도",
  "충청북도",
  "층청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
]);
const districts = ref({
  서울시: [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ],
  부산시: [
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "강서구",
    "해운대구",
    "사하구",
    "금정구",
    "연제구",
    "수영구",
    "사상구",
  ],
  대구시: [
    "중구",
    "동구",
    "서구",
    "남구",
    "북구",
    "수성구",
    "달서구",
    "달성군",
    "군위군",
  ],
  인천시: [
    "중구",
    "동구",
    "미추홀구",
    "연수구",
    "남동구",
    "부평구",
    "계양구",
    "서구",
    "강화군",
    "옹진군",
  ],
  광주시: ["동구", "서구", "남구", "북구", "광산구"],
  대전시: ["동구", "중구", "서구", "유성구", "대덕구"],
  울산시: ["중구", "남구", "동구", "북구", "울주군"],
  세종시: [
    "조치원읍",
    "연기면",
    "연동면",
    "부강면",
    "금남면",
    "장군면",
    "연서면",
    "전의면",
    "전동면",
    "소정면",
    "한솔동",
    "새롬동",
    "나성동",
    "도담동",
    "어진동",
    "해밀동",
    "아름동",
    "종촌동",
    "고운동",
    "소담동",
    "반곡동",
    "보람동",
    "대평동",
    "다정동",
  ],
  경기도: [
    "수원시 장안구",
    "수원시 권선구",
    "수원시 팔달구",
    "수원시 영통구",
    "성남시 수정구",
    "성남시 중원구",
    "성남시 분당구",
    "의정부시",
    "안양시 만안구",
    "안양시 동안구",
    "부천시",
    "광명시",
    "동두천시",
    "평택시",
    "안산시 상로구",
    "안산시 단원구",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "구리시",
    "남양주시",
    "오산시",
    "시흥시",
    "군포시",
    "의왕시",
    "하남시",
    "용인시 처인구",
    "용인시 기흥구",
    "용인시 수지구",
    "파주시",
    "이천시",
    "안성시",
    "김포시",
    "화성시",
    "광주시",
    "양주시",
    "포천시",
    "여주시",
    "연천군",
    "가평군",
    "양평군",
  ],
  강원도: [
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "태백시",
    "속초시",
    "삼척시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군",
  ],
  충청북도: [
    "청주시 상당구",
    "청주시 흥덕구",
    "청주시 서원구",
    "청주시 청원구",
    "충주시",
    "제천시",
    "보은군",
    "옥천군",
    "영동군",
    "증평군",
    "진천군",
    "괴산군",
    "음성군",
    "단양군",
  ],
  충청남도: [
    "천안시 동남구",
    "천안시 서북구",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "금산군",
    "부여군",
    "서천군",
    "청양군",
    "홍성군",
    "예산군",
    "태안군",
  ],
  전라북도: [
    "전주시 완산구",
    "전주시 덕진구",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
  ],
  전라남도: [
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군",
  ],
  경상북도: [
    "포항시 남구",
    "포항시 북구",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군",
    "예천군",
    "봉화군",
    "울진군",
    "울릉군",
  ],
  경상남도: [
    "창원시 의창구",
    "창원시 성산구",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 진해구",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "의령군",
    "함안군",
    "창녕군",
    "고성군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거창군",
    "합천군",
  ],
  제주시: ["제주시", "서귀포시"],
});

const bankname = ref([
  "한국은행",
  "KB국민은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "SC제일은행",
  "한국씨티은행",
  "한국산업은행",
  "중소기업은행",
  "한국수출입은행",
  "NH농협은행",
  "수협은행",
  "대구은행",
  "부산은행",
  "경남은행",
  "광주은행",
  "전북은행",
  "제주은행",
]);

const mapKey = "69f10657a5bf01e678763ab544de5adb";
let map = null;
let infowindow = null;
let ps = null;

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 5,
  };
  // 지도 객체를 등록합니다.
  // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
  map = new kakao.maps.Map(container, options);

  infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  ps = new kakao.maps.services.Places(map);
  ps.categorySearch("BK9", placesSearchCB, { useMapBounds: true });
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
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    for (let i = 0; i < data.length; i++) {
      displayMarker(data[i]);
    }
  }
}
// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
    );
    infowindow.open(map, marker);
  });
}

onMounted(async () => {
  if (window.kakao && window.kakao.maps) {
    initMap();
    console.log("if b", infowindow);
  } else {
    const script = document.createElement("script");
    /* global kakao */
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapKey}&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(initMap);
    };
  }
});

// ... (existing imports and variables)

const searchLocation = async () => {
  try {
    // Get the coordinates (latitude, longitude) of the selected district
    const selectedDistrictData = jsonData.DB.find(
      (data) => data.행정구역 === selectedDistrict.value
    );

    if (selectedDistrictData) {
      const lat = selectedDistrictData.위도;
      const lng = selectedDistrictData.경도;
      // Search for nearby banks using Kakao Maps Places API
      const places = await ps.keywordSearch(
        "은행",
        (results, status) => {
          if (status === kakao.maps.services.Status.OK) {
            // Display nearby bank markers on the map
            results.forEach((place) => displayMarker(place));
          } else {
            console.error("Places API request failed:", status);
          }
        },
        { location: new kakao.maps.LatLng(lat, lng), radius: 1000 }
      );

      // Center the map around the selected district and nearby banks
      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(new kakao.maps.LatLng(lat, lng));
      places.forEach((place) =>
        bounds.extend(new kakao.maps.LatLng(place.y, place.x))
      );
      map.setBounds(bounds);
    }
  } catch (error) {
    console.error("Error during location search:", error);
  }
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
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
  color: #1e4b4c;
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
  border: 1px solid #1e4b4c;
  border-radius: 5px;
}

select {
  flex: 1;
}

button {
  background-color: #1e4b4c;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0d2c2d;
}

.map-container {
  margin-bottom: 20px;
}

#map {
  width: 100%;
  height: 300px;
  border: 1px solid #1e4b4c;
  border-radius: 10px;
}
</style>
<!-- 
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
          <option v-for="district in districts[selectedCity]" :value="district">
            {{ district }}
          </option>
        </select>

        <label for="bank">은행:</label>
        <select v-model="selectedBank" id="bank">
          <option v-for="bank in bankname" :value="bank">
            {{ bank }}
          </option>
        </select>
        <button @click.prevent="searchLocation">찾기</button>
      </form>
    </div>
    <div class="map-container">
      <div id="map"></div>
    </div>
    <h1>{{ selectedCity }} {{ selectedDistrict }} {{ selectedBank }}</h1>

    <div class="bank-list" v-if="foundBanks.length > 0">
      <h2>찾은 은행 목록</h2>
      <ul>
        <li v-for="bank in foundBanks" :key="bank.id">{{ bank.place_name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import jsonData from "@/assets/data.json";

const selectedCity = ref("서울시"); // 기본값으로 서울시를 선택
const selectedDistrict = ref("종로구"); // 기본값으로 종로구를 선택
const selectedBank = ref("한국은행"); // 기본값으로 한국은행을 선택

const cities = ref([
  "서울시",
  "부산시",
  "대구시",
  "인천시",
  "광주시",
  "대전시",
  "울산시",
  "세종시",
  "제주시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
]);
const districts = ref({
  // ... (이전 코드와 동일)
});

const bankname = ref([
  "한국은행",
  "KB국민은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "SC제일은행",
  "한국씨티은행",
  "한국산업은행",
  "중소기업은행",
  "한국수출입은행",
  "NH농협은행",
  "수협은행",
  "대구은행",
  "부산은행",
  "경남은행",
  "광주은행",
  "전북은행",
  "제주은행",
]);

const foundBanks = ref([]);

const mapKey = "69f10657a5bf01e678763ab544de5adb";
let map = null;
let infowindow = null;
let ps = null;

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 5,
  };
  map = new kakao.maps.Map(container, options);
  infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  ps = new kakao.maps.services.Places(map);
  ps.categorySearch("BK9", placesSearchCB, { useMapBounds: true });
};

const displayDistrictMarkers = (jsonData) => {
  jsonData.DB.forEach((data) => {
    const districtMarker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(data.위도, data.경도),
      map: map,
    });
  });
};

function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    for (let i = 0; i < data.length; i++) {
      displayMarker(data[i]);
    }
  }
}

function displayMarker(place) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
    );
    infowindow.open(map, marker);
  });
}

onMounted(async () => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapKey}&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(initMap);
    };
  }
});

const searchLocation = async () => {
  try {
    const selectedDistrictData = jsonData.DB.find(
      (data) => data.행정구역 === selectedDistrict.value
    );

    if (selectedDistrictData) {
      const lat = selectedDistrictData.위도;
      const lng = selectedDistrictData.경도;

      const places = await ps.keywordSearch(
        "은행",
        (results, status) => {
          if (status === kakao.maps.services.Status.OK) {
            foundBanks.value = results;
            results.forEach((place) => displayMarker(place));
          } else {
            console.error("Places API request failed:", status);
          }
        },
        { location: new kakao.maps.LatLng(lat, lng), radius: 1000 }
      );

      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(new kakao.maps.LatLng(lat, lng));
      places.forEach((place) =>
        bounds.extend(new kakao.maps.LatLng(place.y, place.x))
      );
      map.setBounds(bounds);
    }
  } catch (error) {
    console.error("Error during location search:", error);
  }
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
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
  color: #1e4b4c;
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
  border: 1px solid #1e4b4c;
  border-radius: 5px;
}

select {
  flex: 1;
}

button {
  background-color: #1e4b4c;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0d2c2d;
}

.map-container {
  margin-bottom: 20px;
}

#map {
  width: 100%;
  height: 300px;
  border: 1px solid #1e4b4c;
  border-radius: 10px;
}

.bank-list {
  margin-top: 20px;
}

.bank-list h2 {
  color: #1e4b4c;
}

.bank-list ul {
  list-style: none;
  padding: 0;
}

.bank-list li {
  margin-bottom: 5px;
  font-size: 14px;
}
</style> -->
