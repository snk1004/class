(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d8025"],{"78f4":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("pan-thumb",{attrs:{image:e.image}}),e._v(" "),t("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:function(o){e.imagecropperShow=!0}}},[e._v("\n    Change Avatar\n  ")]),e._v(" "),t("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"http://123.206.55.50:11000/upload","lang-type":"en"},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1)},c=[],n=t("e814"),r=t.n(n),i=t("896b"),p=t("3cbc"),s={data:function(){return{imagecropperShow:!1,imagecropperKey:0,image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},components:{ImageCropper:i["a"],PanThumb:p["a"]},methods:{close:function(){this.imagecropperShow=!1},cropSuccess:function(e){this.image=e[0].path,this.imagecropperShow=!1}},mounted:function(){var e="showTip_abcd",o=window.localStorage.getItem(uid);o?(o=r()(o),1!=o&&2!=o||window.localStorage.setItem(e,1+o)):window.localStorage.setItem(e,1)}},l=s,m=t("2877"),u=Object(m["a"])(l,a,c,!1,null,null,null);o["default"]=u.exports}}]);