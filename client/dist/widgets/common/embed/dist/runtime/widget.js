System.register(["jimu-core","jimu-core/react","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t){var s={},o={},i={},r={};return{setters:[function(e){s.AppMode=e.AppMode,s.BaseVersionManager=e.BaseVersionManager,s.ExpressionPartType=e.ExpressionPartType,s.React=e.React,s.SessionManager=e.SessionManager,s.appActions=e.appActions,s.classNames=e.classNames,s.css=e.css,s.getAppStore=e.getAppStore,s.jsx=e.jsx,s.queryString=e.queryString,s.urlUtils=e.urlUtils,s.utils=e.utils},function(e){o.Fragment=e.Fragment},function(e){i.Alert=e.Alert,i.AlertButton=e.AlertButton,i.DynamicUrlResolver=e.DynamicUrlResolver,i.WidgetPlaceholder=e.WidgetPlaceholder},function(e){r.ParentType=e.ParentType,r.ViewVisibilityContext=e.ViewVisibilityContext,r.searchUtils=e.searchUtils,r.utils=e.utils}],execute:function(){e((()=>{var e={27587:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm0-1h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2ZM1 4h14v1H1V4Zm1.5-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-.646 9.646a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.207 10l2.647 2.646Zm4.292 0L12.793 10l-2.647-2.646a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 1 1-.708-.708ZM8.982 6.62a.5.5 0 0 1 .354.613l-1.553 5.795a.5.5 0 1 1-.966-.259L8.37 6.973a.5.5 0 0 1 .612-.354Z" fill="#000" fill-rule="nonzero"></path></svg>'},48891:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=o},74758:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{default:()=>p});var e,t=n(48891),s=n(51315),o=n(30726);function i(e){return t.css`
    &.widget-embed {
      width: 100%;
      height: 100%;
      position: relative;
      .load-err-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${e.colors.white};
        .mask-content{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .truncate-two {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
      }
      .bottom-alert {
        position: absolute;
        bottom: 0;
      }
    }
  `}!function(e){e.Url="url",e.Code="code"}(e||(e={}));const r={_widgetLabel:"Embed",embedHint:"Embed by URL or code",unSupportUrl:"It's not a valid URL.",unSupportIframeUrl:"Sorry, this content could not be embedded. It may restrict the embedding of content from other sites.",maxLimitTips:"HTML code exceeds the maximum character limit."},l=e=>{try{let t=JSON.stringify(e);return t=encodeURIComponent(t),t}catch(e){console.error(e)}};class c extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"The first release.",upgrader:t=>{var s,o;const i=null===(s=null==t?void 0:t.functionConfig)||void 0===s?void 0:s.embedType,r=null===(o=null==t?void 0:t.functionConfig)||void 0===o?void 0:o.content;return i?(t=t.set("embedType",i),t=i===e.Url?t.set("staticUrl",r):t.set("embedCode",r)):t=t.set("embedType",e.Url),t.without("functionConfig")}},{version:"1.4.0",description:"Enhance the URL editor.",upgrader:(s,o)=>{var i,r;const n=null==s?void 0:s.embedType,a=null==s?void 0:s.expression,c=null==s?void 0:s.staticUrl,d=null===(r=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appConfig)||void 0===r?void 0:r.widgets[o],u=null==d?void 0:d.useDataSourcesEnabled;if((null==a?void 0:a.name)&&(s=s.set("enableLabel",!0).set("label",a.name)),n===e.Url&&c){const e=`<p>${c}</p>`;s=s.set("expression",e)}else if(n===e.Url&&a&&!1!==u){const e=(e=>{let s="";const{parts:o}=e;if(o.length>0){let e=!1;const i={name:"",parts:[]};let r=0,n=0,a="";o.forEach((o=>{const{type:c,dataSourceId:d,exp:u}=o;if(e){if(i.name+=u,i.parts.push(o),d&&(a=d),c===t.ExpressionPartType.Operator&&"("===u)r++;else if(c===t.ExpressionPartType.Operator&&")"===u&&(n++,n===r)){r=0,n=0,e=!1;const o=t.utils.getUUID(),c=document&&document.createElement("exp");c.setAttribute("data-uniqueid",o),c.setAttribute("data-dsid",a),c.setAttribute("data-expression",l(i)),c.innerHTML=i.name,s+=c.outerHTML}return!1}if(c===t.ExpressionPartType.Field){const e=t.utils.getUUID(),i=document&&document.createElement("exp");i.setAttribute("data-uniqueid",e),i.setAttribute("data-dsid",d),i.setAttribute("data-expression",l({name:u,parts:[o]})),i.innerHTML=u,s+=i.outerHTML}else c===t.ExpressionPartType.String?s+=u.replace(/(^['|"]*|['|"]*$)/g,""):c===t.ExpressionPartType.Number?s+=u:c===t.ExpressionPartType.Function&&(e=!0,i.name=u,i.parts.push(o))}))}return`<p>${s}</p>`})(a);s=s.set("expression",e)}return s}},{version:"1.7.0",description:"Update some wrong config",upgrader:(e,t)=>{const s=null==e?void 0:e.expression;return e=e.set("expression",(e=>{const t=null==e?void 0:e.match(/\<exp((?!\<exp).)+\<\/exp\>/gim);let s=e;return t&&t.forEach((e=>{var t,o;const i=null===(t=e.match(/<exp[^>]*>([\s\S]*?)<\/exp>/))||void 0===t?void 0:t[1],r=i.match(/<span[^>]*>([\s\S]*?)<\/span>/),n=r&&(null===(o=i.match(/<span[^>]*>([\s\S]*?)<\/span>/))||void 0===o?void 0:o[1]);(!i.trim()||r&&!n.trim())&&(s=s.replace(e,""))})),s})(s)),e}}]}}const d=new c;var u=n(74758);class p extends t.React.PureComponent{constructor(s){super(s),this.isUrlResolved=e=>!/\<p((?!\<p).)+\<\/p\>/gim.test(e),this.iframeOnLoad=e=>{this.setState({isResetting:!1})},this.checkSafeDomain=e=>{let t=!1;if(!e)return t;const s=[".arcgis.com",".esri.com"];let o="";e.includes("https://")&&(o=e.substr(8).split("/")[0]);for(const e of s)if(o.includes(e)){t=!0;break}return t},this.processUrl=e=>{var s,o,i;if(!e)return e;const r=e.toLowerCase();if(/https:\/\/vimeo\.com\/.*/.test(r)){const s=(e=t.urlUtils.removeSearchFromUrl(e)).split("/");return`https://player.vimeo.com/video/${s[s.length-1]}`}if(/https:\/\/www\.youtube\.com\/watch\?.*v=.*/.test(r)){const o=null===(s=t.queryString.parseUrl(e))||void 0===s?void 0:s.query;return`https://www.youtube.com/embed/${null==o?void 0:o.v}`}if(/https:\/\/youtu\.be\/.*/.test(r)){const s=(e=t.urlUtils.removeSearchFromUrl(e)).split("/");return`https://www.youtube.com/embed/${s[s.length-1]}`}if(/https:\/\/www\.facebook\.com\/.*\/videos\/.*/.test(r))return`https://www.facebook.com/plugins/video.php?href=${r}&show_text=0`;this.checkURLFormat(e)||(e="about:blank");const n=[".maps.arcgis.com",".mapsdevext.arcgis.com",".mapsqa.arcgis.com"];let a="";e.includes("https://")&&(a=e.substr(8).split("/")[0]);let l=!1,c="";for(const e of n)if(a.includes(e)){switch(l=!0,e){case".maps.arcgis.com":c="prod";break;case".mapsdevext.arcgis.com":c="dev";break;case".mapsqa.arcgis.com":c="qa"}break}const d=window.jimuConfig.hostEnv;if(l&&c===d){const s=(0,t.getAppStore)().getState();if(s&&s.user){const t=null===(o=null==s?void 0:s.portalSelf)||void 0===o?void 0:o.urlKey,r=null===(i=null==s?void 0:s.portalSelf)||void 0===i?void 0:i.customBaseUrl;a&&t&&r&&(e=e.replace(a,`${t}.${r}`))}}return e},this.checkURLFormat=e=>{if(!e||""===e)return this.setState({errMessage:this.errMessages.unSupportUrl}),!1;if("about:blank"===e)return!1;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return this.setState({errMessage:this.errMessages.httpsCheck}),!1;if(new RegExp("^(([h][t]{2}[p][s])?://localhost)").test(e))return!0;const t=e.indexOf(".");return!(t<0||t===e.length-1)||(this.setState({errMessage:this.errMessages.unSupportUrl}),!1)},this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.fetchUrl=(e,s)=>{return o=this,i=void 0,n=function*(){const o=t.SessionManager.getInstance().getMainSession(),i=yield fetch(e,{method:"post",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({token:null==o?void 0:o.token,url:s})}).catch((e=>{console.error(e)}));if(!i)return Promise.resolve(null);const r=yield i.json().catch((e=>{console.error(e)}));return Promise.resolve(r)},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{l(n.next(e))}catch(e){t(e)}}function a(e){try{l(n.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(e){e(o)}))).then(s,a)}l((n=n.apply(o,i||[])).next())}));var o,i,r,n},this.isUsedDataSource=e=>{e||(e=this.props);const{useDataSources:t,useDataSourcesEnabled:s}=e;return s&&t&&t.length>0},this.reload=()=>{const{config:t}=this.props;if(this.ifr)if(t.embedType===e.Code){const e=this.ifr.srcdoc;this.ifr.srcdoc=e}else{const e=this.ifr.src;this.ifr.src=e}},this.loadContent=()=>{const{config:t}=this.props,{content:s}=this.state,{embedType:o}=t;this.ifr&&(o===e.Code?this.ifr.srcdoc=`<script>\n      if(window !== window.parent || window !== window.top){\n        window.parent = undefined\n        window.top = undefined\n        document.cookie = undefined\n        localStorage = undefined\n        sessionStorage = undefined\n      }\n    <\/script>${s}`:(this.ifr.removeAttribute("srcdoc"),this.ifr.removeAttribute("src"),setTimeout((()=>{this.ifr&&(this.ifr.src=this.processUrl(s))}),100)))},this.onHtmlResolved=e=>{const{config:t}=this.props,{enableLabel:s,label:o}=t,i=e?e.replace(/(^\s*|\s*$)/g,""):"",r=i.indexOf("{")>0&&s&&!!o,n=0===i.indexOf("{")||r;this.setState({content:e,reuseContent:e,resolveErr:n})};const{config:o}=s,{embedType:i,embedCode:n}=o;this.errMessages={httpsCheck:this.formatMessage("httpsUrlMessage"),unSupportUrl:this.formatMessage("unSupportUrl"),unSupportIframeUrl:this.formatMessage("unSupportIframeUrl")},this.checkUrl=this.checkUrl.bind(this);const a={content:i===e.Url?o.expression:n,reuseContent:"",loadErr:!1,resolveErr:!1,refreshFlag:!1,refreshInterval:10,refreshTimer:void 0,changeTimerFlag:!1,codeLimitExceeded:!1};this.state=a,this.shouldRenderIframeInView=!1}static getDerivedStateFromProps(e,t){if(!e||0===Object.keys(e).length||!t||0===Object.keys(t).length)return null;const{config:s}=e,{autoRefresh:o=!1,autoInterval:i=10}=s,{refreshFlag:r,refreshInterval:n}=t;return o!==r||i!==n?{refreshFlag:o,refreshInterval:i,changeTimerFlag:!0}:null}componentDidMount(){const{config:t}=this.props,{content:s}=this.state;s&&s.trim().length>0&&this.setState({isResetting:!0},(()=>{t.embedType===e.Url?this.isUrlResolved(s)&&this.checkUrl(this.processUrl(s)):this.loadContent()}))}componentDidUpdate(s,o){var i,r,n,a,l,c,d,p,h,m;const{appMode:f,config:v,sectionNavInfos:g,layoutId:w,id:b}=this.props,{embedCode:x,embedType:S,autoRefresh:y,autoInterval:U}=v,I=y!==s.config.autoRefresh||U!==s.config.autoInterval,{content:M,reuseContent:C,refreshFlag:T,refreshInterval:k,refreshTimer:E,changeTimerFlag:j}=this.state,{content:L}=o,R=(null===(r=null===(i=this.props)||void 0===i?void 0:i.stateProps)||void 0===r?void 0:r.codeLimitExceeded)||!1;if(this.setState({codeLimitExceeded:R}),(f!==s.appMode&&f===t.AppMode.Design||I)&&this.reload(),S!==s.config.embedType){const s=S===e.Url?C:x;this.setState({loadErr:!1,resolveErr:!1,codeLimitExceeded:!1,content:s}),this.props.dispatch(t.appActions.widgetStatePropChange(b,"codeLimitExceeded",!1))}else S===e.Code&&s.config.embedCode!==x&&this.setState({content:x});M!==L&&this.setState({isResetting:!!M,loadErr:!1},(()=>{S===e.Url?this.checkUrl(this.processUrl(M)):this.loadContent()}));const A=s.sectionNavInfos;if(this.needLoadContentInView&&g&&A!==g){const e=[];for(const t in g)g[t]!==(null==A?void 0:A[t])&&e.push(t);const s=(0,t.getAppStore)().getState(),o=null==s?void 0:s.appConfig,i=null===(n=null==s?void 0:s.appRuntimeInfo)||void 0===n?void 0:n.currentPageId,r=u.utils.getCurrentSizeMode(),f=o.mainSizeMode,v=null!==(d=null===(c=null===(l=null===(a=null==o?void 0:o.pages)||void 0===a?void 0:a[i])||void 0===l?void 0:l.layout)||void 0===c?void 0:c[r])&&void 0!==d?d:null===(m=null===(h=null===(p=null==o?void 0:o.pages)||void 0===p?void 0:p[i])||void 0===h?void 0:h.layout)||void 0===m?void 0:m[f],b=u.searchUtils.buildLayoutStructure(o,v,i,u.ParentType.Page,r),{sectionId:x}=u.searchUtils.findParentViewId(w,b);e.includes(x)&&this.loadContent()}if(!E&&T){const t=setInterval((()=>{if(S===e.Url){if(this.ifr){const e=this.ifr.src;this.ifr.src="",setTimeout((()=>{this.ifr&&(this.ifr.src=e)}),100)}}else{const e=this.ifr.srcdoc;this.ifr.srcdoc=e}}),60*k*1e3);this.setState({refreshTimer:t})}else E&&!T&&(clearInterval(E),this.setState({refreshTimer:void 0}));if(j&&!T){E&&clearInterval(E);const t=setInterval((()=>{if(S===e.Url){if(this.ifr){const e=this.ifr.src;this.ifr.src="",setTimeout((()=>{this.ifr&&(this.ifr.src=e)}),100)}}else{const e=this.ifr.srcdoc;this.ifr.srcdoc=e}}),60*k*1e3);this.setState({refreshTimer:t,changeTimerFlag:!1})}}checkUrl(e){var s,o,i;if(!this.checkURLFormat(e))return void this.setState({loadErr:!0});this.setState({loadErr:!1});const r=null===(i=null===(o=null===(s=(0,t.getAppStore)())||void 0===s?void 0:s.getState())||void 0===o?void 0:o.appRuntimeInfo)||void 0===i?void 0:i.appMode;if(window.jimuConfig.isInBuilder&&r!==t.AppMode.Run&&!window.jimuConfig.isInPortal||this.loadContent(),e.includes("{"))this.setState({resolveErr:!0});else if(e&&window.jimuConfig.isInBuilder&&r!==t.AppMode.Run&&!window.jimuConfig.isInPortal)return["https://www.facebook.com/plugins/video.php?show_text=0&href=","https://www.youtube.com/embed/","https://www.youtube-nocookie.com/embed/","https://player.vimeo.com/video/"].some((t=>e.includes(t)))?(this.setState({loadErr:!1}),void this.loadContent()):void this.fetchUrl(`${window.location.origin}/rest/check_url`,e).then((t=>{var s,o,i;let r=!0;if(t&&t.success){const n=t.data,a=null==n?void 0:n.status,l=['default-src "self"','frame-ancestors "none"'],c=e=>{let t=!1;return l.forEach((s=>{e.indexOf(s)>0&&(t=!0)})),t};if(a&&a<400){const t=null===(s=null==n?void 0:n.headers)||void 0===s?void 0:s["content-security-policy"];t&&c(t)&&(r=!1);const a=null===(i=null===(o=null==n?void 0:n.headers)||void 0===o?void 0:o["x-frame-options"])||void 0===i?void 0:i.toLowerCase();a&&("deny"===a?r=!1:"sameorigin"===a&&(this.isOriginSameAsLocation(e)||(r=!1)))}else r=!1}else r=!1;const n={loadErr:!r};r?this.loadContent():(n.isResetting=!1,n.errMessage=this.errMessages.unSupportIframeUrl),this.setState(n)}))}isOriginSameAsLocation(e){const t=[".arcgis.com",".esri.com"],s=window.location,o=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(e)||[],i={protocol:o[1]||"",host:o[2]||"",port:o[3]||""};let r="";for(const e of t)if(s.host.includes(e)){r=e;break}if(o[2].includes(r))return!0;const n=e=>e.port||{"http:":80,"https:":443}[e.protocol||s.protocol];return!!(i.protocol&&i.protocol===s.protocol&&i.host&&i.host===s.host&&i.host&&n(i)===n(s))}render(){const{isResetting:r,loadErr:a,errMessage:l,resolveErr:c,content:d,codeLimitExceeded:p}=this.state,{theme:h,id:m,config:f}=this.props,{embedCode:v,embedType:g,expression:w,enableLabel:b,label:x}=f;if(g===e.Code?!v:!w||"<p><br></p>"===w||"<p></p>"===w)return(0,t.jsx)(s.Fragment,null,(0,t.jsx)(o.WidgetPlaceholder,{widgetId:this.props.id,icon:n(27587),message:this.formatMessage("embedHint")}),p&&(0,t.jsx)("div",{className:"p-2 w-100",style:{position:"absolute",bottom:0}},(0,t.jsx)(o.Alert,{withIcon:!0,size:"small",type:"warning",text:this.formatMessage("maxLimitTips"),className:"w-100"})));let S=!0;return g===e.Url&&(S=!this.checkSafeDomain(d)),(0,t.jsx)(u.ViewVisibilityContext.Consumer,null,(({isInView:n,isInCurrentView:u})=>{let v=!0;return this.shouldRenderIframeInView||(v=!n||u,v&&(this.shouldRenderIframeInView=!0)),this.needLoadContentInView=n&&u,(0,t.jsx)(s.Fragment,null,v&&(0,t.jsx)("div",{className:"jimu-widget widget-embed",css:i(h)},S?(0,t.jsx)("iframe",{id:"ifrSandbox",className:`iframe-${m} w-100 h-100`,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-popups-to-escape-sandbox",allowFullScreen:!0,onLoad:this.iframeOnLoad,frameBorder:"0",ref:e=>{this.ifr=e},allow:"geolocation","data-testid":"embedSandbox"}):(0,t.jsx)("iframe",{id:"ifrSafe",className:`iframe-${m} w-100 h-100`,allowFullScreen:!0,onLoad:this.iframeOnLoad,frameBorder:"0",ref:e=>{this.ifr=e},allow:"geolocation","data-testid":"embedSafe"}),r&&(0,t.jsx)("div",{className:"jimu-secondary-loading"}),a&&(0,t.jsx)("div",{className:"mask text-center load-err-mask"},(0,t.jsx)("div",{className:"mask-content"},(0,t.jsx)(o.AlertButton,{buttonType:"tertiary",size:"small",type:"warning"}),l)),c&&(0,t.jsx)("div",{"data-testid":"test-expressionMask",className:"mask text-center load-err-mask"},(0,t.jsx)("div",{className:(0,t.classNames)("mask-content",{"truncate-two":!(b&&x)}),style:{width:"70%"},title:b&&x||d},b&&x||d)),g===e.Url&&(0,t.jsx)(o.DynamicUrlResolver,{widgetId:m,useDataSources:this.props.useDataSources,value:f.expression,onHtmlResolved:this.onHtmlResolved}),p&&(0,t.jsx)("div",{className:"bottom-alert p-2 w-100"},(0,t.jsx)(o.Alert,{withIcon:!0,size:"small",type:"warning",text:this.formatMessage("maxLimitTips"),className:"w-100"}))))}))}}p.versionManager=d,p.mapExtraStateProps=(e,t)=>{var s,o;return{appMode:null===(s=null==e?void 0:e.appRuntimeInfo)||void 0===s?void 0:s.appMode,sectionNavInfos:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos}}})(),a})())}}}));