// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [
      {
      type: "overview",
      date: "2018",
      text: {
        headline: "WHERE TO BUY?",
        text: "<p>You can find many shopping malls in Hong Kong.<br>Click button at right for more information!</p>"
      },
      media: {
        url: "https://images.pexels.com/photos/264489/pexels-photo-264489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        credit: "Hong Kong",
        caption: ""
      }
    },
     {
      date: "2018",
      text: {
        headline: "Mira Place",
        text: "<p>Tel：(852) 2314 8886<br>地址：九龍尖沙咀彌敦道132號美麗華廣場一期2樓215-23號舖<br>營業時間：星期日至四及公眾假期 上午11:00 - 下午10:00 星期五、六及公眾假期前一天 上午11:00 - 下午11:00</p>"
      },
      location: {
        name: "",
        icon: icon,
        lat: 22.301,
        lon: 114.1721,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Miramar_Shopping_Centre_Atrium_2015.JPG/500px-Miramar_Shopping_Centre_Atrium_2015.JPG",
        type: 		"image",
        credit: "Hong Kong",
        caption: ""
      }
    },
     {
      date: "2018",
      text: {
        headline: "Cityplaza",
        text: "<p>Tel：(852) 2907 0302<br>地址：太古城道18號太古城中心4樓 401店<br>營業時間：星期日至四及公眾假期 上午11:00 - 下午10:00 星期五、六及公眾假期前一天 上午11:00 - 下午11:00</p> "
      },
      location: {
        name: "",
        icon:icon,
        lat: 22.285833,
        lon: 114.217778,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cityplaza_Phase_1_Atrium_201401.jpg/400px-Cityplaza_Phase_1_Atrium_201401.jpg",
        type: "image",
        credit: "Hong Kong",
        caption: ""
      }
    },
    {
     date: "2018",
     text: {
       headline: "Festival Walk",
       text: "<p>Tel：(852) 2265 8586<br>地址：九龍塘達之路80號又一城L1-01店<br>營業時間：星期日至四及公眾假期 上午11:00 - 下午10:00 星期五、六及公眾假期前一天 上午11:00 - 下午11:00</p>"
     },
     location: {
       name: "",
       icon: icon,
       lat: 22.3372,
       lon: 114.174692,
       zoom: 16,
       line: true
     },
     media: {
       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Festival_Walkelevator_20070729.jpg/400px-Festival_Walkelevator_20070729.jpg",
       type: 		"image",
       credit: "Hong Kong",
       caption: ""
     }
   },
   {
    date: "2018",
    text: {
      headline: "East Point City",
      text: "<p>Tel：(852) 2628 5888<br>地址：新界將軍澳坑口東港城178-179 & 191-192店<br>營業時間：星期日至四及公眾假期 上午11:00 - 下午10:00 星期五、六及公眾假期前一天 上午11:00 - 下午11:00</p>"
    },
    location: {
      name: "",
      icon: icon,
      lat: 22.31636,
      lon: 114.26516,
      zoom: 16,
      line: true
    },
    media: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2014%E5%B9%B4%E6%9D%B1%E6%B8%AF%E5%9F%8E%E4%B8%80%E6%A8%93%E5%B1%95%E8%A6%BD%E5%A0%B4.jpg/500px-2014%E5%B9%B4%E6%9D%B1%E6%B8%AF%E5%9F%8E%E4%B8%80%E6%A8%93%E5%B1%95%E8%A6%BD%E5%A0%B4.jpg",
      type: 		"image",
      credit: "Hong Kong",
      caption: ""
    }
  },
    ] // end of slides
  }
}

// create custom icon
    var icon = L.icon({
        iconUrl: 'https://img.icons8.com/doodle/50/000000/marker.png',
        iconSize: [30, 30], // size of the icon
        popupAnchor: [0,-15]
        });

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}
