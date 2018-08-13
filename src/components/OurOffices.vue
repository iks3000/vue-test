<template>
  <div class="our-office-block">
    <div class="our-office-block__wrapper">
      <div>
        <h2 class="our-office-block__title">Our Offices</h2>
        <div class="tabs">
          <ul>
            <li class="our-office-block__tabs" :class="{'is-active' : isActiveTab(0)}"><a @click="activeTab = 0" v-model="searchAddressInput">Kyiv</a></li>
            <li class="our-office-block__tabs" :class="{'is-active' : isActiveTab(1)}"><a @click="activeTab = 1" v-model="searchAddressInput">New york</a></li>
            <li class="our-office-block__tabs" :class="{'is-active' : isActiveTab(2)}"><a @click="activeTab = 2" v-model="searchAddressInput">Guangzhou</a></li>
            <li class="our-office-block__tabs" :class="{'is-active' : isActiveTab(3)}"><a @click="activeTab = 3" v-model="searchAddressInput">Barcelona</a></li>
          </ul>
        </div>
        <div class="tab-panel" v-if="isActiveTab(0)">
          <p class="tab-panel__title">Global Message Services Ukraine LLC</p>
          <p class="tab-panel__text">
            Kuiv, Stepan Bandera, 33<br>
            02066<br>
            Ukraine
          </p>
        </div>
        <div class="tab-panel" v-if="isActiveTab(1)">
          <p class="tab-panel__title">Global Message Services USA LLC</p>
          <p class="tab-panel__text">
            New york, 5 avenue, 15<br>
            10003<br>
            USA
          </p>
        </div>
        <div class="tab-panel" v-if="isActiveTab(2)">
          <p class="tab-panel__title">Global Message Services China LLC</p>
          <p class="tab-panel__text">
            Guangzhou, Dongfeng W rd, 195<br>
            510000<br>
            China
          </p>
        </div>
        <div class="tab-panel" v-if="isActiveTab(3)">
          <p class="tab-panel__title">Global Message Services Spain LLC</p>
          <p class="tab-panel__text">
            Barcelona, Carrer de Mallorca, 300<br>
            08037<br>
            Spain
          </p>
        </div>
      </div>
      <div id="myMap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurOffices',
  data() {
    return {
      activeTab: 0,
      searchAddressInput: ''
    }
  },

  methods: {
    isActiveTab(id) { return this.activeTab === id },

  },

  mounted: function() {
    //console.log("map: ", google.maps)
    var map = new google.maps.Map(document.getElementById('myMap'), {
      center: {lat:50.489260, lng: 30.489407},
      zoom: 12,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    });
    var goldStar = {
      path: 'M-15,0a15,15 0 1,0 30,0a15,15 0 1,0 -30,0',
      fillColor: '#3db565',
      fillOpacity: 1,
      scale: 1,
      strokeColor: '#3db565',
      strokeWeight: 14
    };
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: goldStar,
      map: map
    });
  }
}
</script>
