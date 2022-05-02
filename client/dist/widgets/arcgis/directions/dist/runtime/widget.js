System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/widgets/Directions","esri/layers/FeatureLayer","esri/Graphic"],(function(e,i){var r={},u={},l={},t={},d={},o={};return{setters:[function(e){r.DataSourceManager=e.DataSourceManager,r.DataSourceStatus=e.DataSourceStatus,r.EsriFieldType=e.EsriFieldType,r.JimuFieldType=e.JimuFieldType,r.React=e.React,r.css=e.css,r.dataSourceUtils=e.dataSourceUtils,r.jsx=e.jsx,r.polished=e.polished},function(e){u.JimuMapViewComponent=e.JimuMapViewComponent},function(e){l.SVG=e.SVG,l.defaultMessages=e.defaultMessages,l.hooks=e.hooks},function(e){t.default=e.default},function(e){d.default=e.default},function(e){o.default=e.default}],execute:function(){e((()=>{var e={24925:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS40MTQxOCAxMEw5Ljk5OTk3IDEuNDE0MjFMMTguNTg1OCAxMEw5Ljk5OTk3IDE4LjU4NThMMS40MTQxOCAxMFpNMC43MDcwNzcgMTAuNzA3MUMwLjMxNjU1MyAxMC4zMTY2IDAuMzE2NTU0IDkuNjgzNDIgMC43MDcwNzggOS4yOTI5TDkuMjkyODYgMC43MDcxMDhDOS42ODMzOSAwLjMxNjU4MyAxMC4zMTY2IDAuMzE2NTg0IDEwLjcwNzEgMC43MDcxMDlMMTkuMjkyOSA5LjI5MjlDMTkuNjgzNCA5LjY4MzQyIDE5LjY4MzQgMTAuMzE2NiAxOS4yOTI5IDEwLjcwNzFMMTAuNzA3MSAxOS4yOTI5QzEwLjMxNjYgMTkuNjgzNCA5LjY4MzM5IDE5LjY4MzQgOS4yOTI4NiAxOS4yOTI5TDAuNzA3MDc3IDEwLjcwNzFaTTE0Ljg5NyA4LjY2NkwxMS41ODMgMTIuMDE4QzExLjQ3NTIgMTEuNjM0MyAxMS4zNDIzIDExLjI1ODIgMTEuMTg1IDEwLjg5MkwxNC4xMDMgOC4wNkwxNC44OTcgOC42NjZaTTcuNzA5OTcgOEg5Ljk5OTk3VjdINS45OTk5N1YxMUg2Ljk5OTk3VjguNzA2TDguMzI5OTcgMTAuMDMxQzkuNDgyOTcgMTEuMyA5Ljk5OTk3IDExLjk4NyA5Ljk5OTk3IDE0LjVWMTVIMTFWMTQuNUMxMS4xNTk2IDEyLjI3MzQgMTAuNDYyOCAxMS4wNyA5LjA1MTk3IDkuMzRMNy43MDk5NyA4WiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K"},94129:e=>{"use strict";e.exports=o},99818:e=>{"use strict";e.exports=d},35254:e=>{"use strict";e.exports=t},26826:e=>{"use strict";e.exports=u},48891:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=l}},i={};function s(r){var u=i[r];if(void 0!==u)return u.exports;var l=i[r]={exports:{}};return e[r](l,l.exports,s),l.exports}s.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return s.d(i,{a:i}),i},s.d=(e,i)=>{for(var r in i)s.o(i,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},s.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var p={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(p),s.d(p,{default:()=>E});var e=s(48891),i=s(26826),r=s(30726),u=s(35254),l=s(99818),t=s(94129);const d={includeDefaultSources:!1,locationEnabled:!1,maxSuggestions:6};function o(e){return`${e}_output_stop`}function n(e){return`${e}_output_direction_point`}function T(e){return`${e}_output_direction_line`}function y(e){return`${e}_output_route`}e.JimuFieldType.Number,e.EsriFieldType.OID,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.OID,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.OID,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.Date,e.EsriFieldType.Date,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.String,e.EsriFieldType.String,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.OID,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Double,e.JimuFieldType.Number,e.EsriFieldType.Integer,e.JimuFieldType.Number,e.EsriFieldType.Integer;const m={_widgetLabel:"Directions"};var a=s(24925),F=s.n(a);const{useEffect:b,useState:c,useRef:g,useCallback:D,useMemo:N}=e.React,E=l=>{var t,d,s;const{config:p,id:a,portalSelf:E}=l,{searchConfig:I,routeConfig:x}=p,w=null===(t=l.useMapWidgetIds)||void 0===t?void 0:t[0],[A,O]=c(null),h=g(null),C=g(null),L=g(null),k=r.hooks.useTranslate(m,r.defaultMessages),z=N((()=>k("findAddressOrPlace")),[k]),_=null===(s=null===(d=null==E?void 0:E.helperServices)||void 0===d?void 0:d.route)||void 0===s?void 0:s.url,U=D((e=>{O(e)}),[]);return b((()=>{function i(){var e,i;(null===(i=null===(e=C.current)||void 0===e?void 0:e.view)||void 0===i?void 0:i.map)&&C.current.destroy(),h.current&&(h.current.innerHTML="")}return w&&(null==A?void 0:A.view)&&h.current&&function(){i();const r=document.createElement("div");r.className="directions-container",h.current.innerHTML="",h.current.appendChild(r),C.current=new u.default({id:a,container:r,view:null==A?void 0:A.view,routeServiceUrl:(null==x?void 0:x.routeServiceUrl)||_||"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",searchProperties:M(I,z)}),C.current.viewModel.routeParameters.returnRoutes=!0,C.current.viewModel.routeParameters.returnDirections=!0,C.current.viewModel.routeParameters.returnStops=!0,S(a),L.current=C.current.watch("lastRoute",(()=>{C.current.lastRoute?function(i,r){var u,l,t;const d=e.DataSourceManager.getInstance().getDataSource(o(i)),s=e.DataSourceManager.getInstance().getDataSource(y(i)),p=e.DataSourceManager.getInstance().getDataSource(n(i)),m=e.DataSourceManager.getInstance().getDataSource(T(i));v(d,"point",j(null===(u=r.stops)||void 0===u?void 0:u.toArray())),v(s,"polyline",j(r.routeInfo?[r.routeInfo]:[])),v(p,"point",j(null===(l=r.directionPoints)||void 0===l?void 0:l.toArray())),v(m,"polyline",j(null===(t=r.directionLines)||void 0===t?void 0:t.toArray())),f(d),f(s),f(p),f(m)}(a,C.current.lastRoute):S(a)}))}(),w||i(),()=>{var e;null===(e=L.current)||void 0===e||e.remove(),i()}}),[a,null==A?void 0:A.view,w,I,null==x?void 0:x.routeServiceUrl,_,z]),(0,e.jsx)("div",{className:"widget-directions jimu-widget"},w?(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:w,onActiveViewChange:U}):(0,e.jsx)("div",{className:"w-100 h-100 bg-light-200 d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"text-center"},(0,e.jsx)(r.SVG,{size:20,src:F(),className:"d-inline-block",color:"var(--black)"}),(0,e.jsx)("p",{className:"widget-label mt-2"},k("_widgetLabel")))),(0,e.jsx)("div",{ref:h,css:J}))},J=e.css`
  width: 100% !important;
  height: 100% !important;
  .widget-label{
    font-size: ${e.polished.rem(14)};
    font-weight: 400;
  }
  .directions-container{
    width: 100% !important;
    height: 100% !important;
    .esri-search{
      .esri-search__container{
        .esri-search__sources-button{
          z-index: 0;
          border-top: none;
          border-right: solid 1px var(--light-300);
          border-bottom: none;
          border-left: none;
          margin-right: 1px;
        }
        .esri-search__input-container{
          margin: auto;
          .esri-search__clear-button{
            z-index: 0;
            right: 4px;
          }
        }
      }
    }
    .esri-directions__panel-content{
      padding: 0 0 20px 0;
    }
  }
`;function M(e,i){var r,u,l;const t=Object.assign({},d),o=(null===(r=null==e?void 0:e.generalConfig)||void 0===r?void 0:r.hint)||i;return o&&(t.allPlaceholder=o),"number"==typeof(null===(u=null==e?void 0:e.suggestionConfig)||void 0===u?void 0:u.maxSuggestions)&&(t.maxSuggestions=e.suggestionConfig.maxSuggestions),"boolean"==typeof(null===(l=null==e?void 0:e.suggestionConfig)||void 0===l?void 0:l.isUseCurrentLoation)&&(t.locationEnabled=e.suggestionConfig.isUseCurrentLoation),Array.isArray(null==e?void 0:e.dataConfig)&&(t.sources=e.dataConfig.map((e=>({url:e.geocodeURL,name:e.label,placeholder:e.hint||i})))),t}function S(i){const r=e.DataSourceManager.getInstance().getDataSource(o(i)),u=e.DataSourceManager.getInstance().getDataSource(y(i)),l=e.DataSourceManager.getInstance().getDataSource(n(i)),t=e.DataSourceManager.getInstance().getDataSource(T(i));I(r),I(u),I(l),I(t)}function I(i){i&&(i.setStatus(e.DataSourceStatus.NotReady),i.setCountStatus(e.DataSourceStatus.NotReady))}function f(i){i&&(i.setStatus(e.DataSourceStatus.Unloaded),i.setCountStatus(e.DataSourceStatus.Unloaded))}function v(i,r,u){if(!i)return;const t=i.getSchema().fields[i.getIdField()];i.layer=new l.default({id:i.id,fields:e.dataSourceUtils.changeJimuFieldsToJSAPIFields(i.getSchema().fields,t),objectIdField:null==t?void 0:t.name,geometryType:r,source:u}),i.addSourceVersion()}function j(e){return e?e.map((e=>{if(!e)return new t.default;const i=e.toPortalJSON();return t.default.fromJSON({attributes:i.attributes,geometry:i.geometry,symbol:i.symbol,popupTemplate:i.popupTemplate})})):[]}})(),p})())}}}));