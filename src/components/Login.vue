<template>

  <div style="width: 500px;height: 500px;" id="mymap">

  </div>

</template>

<script>
  // import Map from 'ol/map';
  // import View from 'ol/view';
  // import TileLayer from 'ol/layer/tile';
  // import XYZ from 'ol/source/xyz';
  // import TileGrid from 'ol/tilegrid/TileGrid';
  // import TileImage from 'ol/source/TileImage';



  // import {Map,View} from '.js/gis';


    export default {
        name: "login",
   created(){


   },
      mounted(){

        var map = new ol.Map({
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          target: 'mymap',
          controls: ol.control.defaults({
            attributionOptions: {
              collapsible: false
            }
          }),
          view: new ol.View({
            center: [0, 0],
            zoom: 2
          })
        });



        // var mymap=  new Map({
        //   target: 'mymap',
        //   // layers: [
        //   //   new TileLayer({
        //   //     source: new XYZ({
        //   //       url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        //   //     })
        //   //   })
        //   // ],
        //   view: new View({
        //     center: [0, 0],
        //     zoom: 2
        //   })
        // });
        //
        // var resolutions = [];
        // for (var i = 0; i < 19; i++) {
        //   resolutions[i] = Math.pow(2, 18 - i);
        // }
        // var tilegrid = new TileGrid({
        //   origin: [0, 0],
        //   resolutions: resolutions
        // });
        // var baidu_source = new TileImage({
        //   //  projection: projection,
        //   tileGrid: tilegrid,
        //   tileUrlFunction: function (tileCoord, pixelRatio, proj) {
        //     if (!tileCoord) {
        //       return "";
        //     }
        //     var z = tileCoord[0];
        //     var x = tileCoord[1];
        //     var y = tileCoord[2];
        //
        //     if (x < 0) {
        //       x = "M" + (-x);
        //     }
        //     if (y < 0) {
        //       y = "M" + (-y);
        //     }
        //     return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + x + "&y=" + y + "&z=" + z + "&styles=pl&udt=20151021&scaler=1&p=1";
        //   }
        // });
        // var baiduLayer = new TileLayer({
        //   source: baidu_source
        // });
        // mymap.addLayer(baiduLayer);
        //
        //
        //
        //
        // console.log(mymap);



      }


    }
</script>
