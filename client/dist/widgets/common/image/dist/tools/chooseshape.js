System.register(["jimu-core","jimu-ui","jimu-theme"],(function(l,a){var e={},t={},o={};return{setters:[function(l){e.Immutable=l.Immutable,e.React=l.React,e.ReactRedux=l.ReactRedux,e.classNames=l.classNames,e.css=l.css,e.getAppStore=l.getAppStore,e.i18n=l.i18n,e.jsx=l.jsx,e.moduleLoader=l.moduleLoader},function(l){t.Icon=l.Icon,t.Tooltip=l.Tooltip},function(l){o.withBuilderTheme=l.withBuilderTheme}],execute:function(){l((()=>{var l={24359:(l,a,e)=>{var t={"./chart-area.svg":23659,"./chart-pie.svg":74958,"./chart.svg":93108,"./circle-double.svg":74874,"./circle.svg":53720,"./data-source.svg":76637,"./data.svg":97197,"./ellipse.svg":33802,"./grid.svg":45531,"./hexagon.svg":97709,"./image.svg":41210,"./layer.svg":63980,"./list.svg":30512,"./page.svg":19672,"./pentagon.svg":36927,"./pill.svg":24555,"./placeholder-map.svg":14542,"./rectangle.svg":64986,"./rhombus.svg":2761,"./ring.svg":29704,"./square-border-rounded.svg":67660,"./square.svg":72180,"./tools.svg":67906,"./triangle.svg":61403,"./utility-group.svg":11167,"./utility.svg":13372,"./widget.svg":50687};function o(l){var a=i(l);return e(a)}function i(l){if(!e.o(t,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return t[l]}o.keys=function(){return Object.keys(t)},o.resolve=i,l.exports=o,o.id=24359},23659:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.97V14H15v1H2a1 1 0 0 1-1-1V1h1v11.5l2.645-5a1 1 0 0 1 1.16-.47 1 1 0 0 1 .39.225L8.1 9.524a.5.5 0 0 0 .78-.017l3.724-4.842a.5.5 0 0 1 .896.305Z" fill="#000"></path></svg>'},74958:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.53 12.282A7.014 7.014 0 0 0 15 7.972C15 4.39 12.328 1.433 8.875 1v6.609l4.655 4.673Zm-1.238 1.242A6.952 6.952 0 0 1 8 15c-3.866 0-7-3.146-7-7.027C1 4.39 3.672 1.433 7.125 1v7.337l5.167 5.187Z" fill="#000"></path></svg>'},93108:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.286 0h3.428v16H6.286V0Zm6.285 4.571H16V16h-3.429V4.571ZM3.43 9.143H0V16h3.429V9.143Z" fill="#000"></path></svg>'},74874:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-7 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#000"></path></svg>'},53720:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" fill="#000"></path></svg>'},76637:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 0a2 2 0 0 0-2 2v2h14.4V2a2 2 0 0 0-2-2H2.8Zm12.4 5.6H.8v4.8h14.4V5.6ZM.8 12h14.4v2a2 2 0 0 1-2 2H2.8a2 2 0 0 1-2-2v-2Zm4-10a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm0 6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm-1.2 7.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" fill="#000"></path></svg>'},97197:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0c3.534 0 6.4 1.075 6.4 2.4v2.4c0 1.325-2.865 2.4-6.4 2.4S1.6 6.125 1.6 4.8V2.427a.92.92 0 0 1 0-.027C1.6 1.075 4.465 0 8 0ZM1.6 6.774a.92.92 0 0 0 0 .053v2.374c0 1.325 2.866 2.4 6.4 2.4 3.535 0 6.4-1.075 6.4-2.4V6.8c0 1.325-2.865 2.4-6.4 2.4-3.534 0-6.4-1.075-6.4-2.4v-.027Zm0 4.4a.914.914 0 0 0 0 .053V13.6C1.6 14.925 4.467 16 8 16c3.535 0 6.4-1.075 6.4-2.4v-2.4c0 1.325-2.865 2.4-6.4 2.4-3.534 0-6.4-1.075-6.4-2.4v-.027Z" fill="#000"></path></svg>'},33802:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.314-3.582 6-8 6s-8-2.686-8-6 3.582-6 8-6 8 2.686 8 6Z" fill="#000"></path></svg>'},45531:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1h3v3H1V1Zm5.5 0h3v3h-3V1ZM15 1h-3v3h3V1ZM1 6.5h3v3H1v-3Zm8.5 0h-3v3h3v-3Zm2.5 0h3v3h-3v-3ZM4 12H1v3h3v-3Zm2.5 0h3v3h-3v-3Zm8.5 0h-3v3h3v-3Z" fill="#000"></path></svg>'},97709:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 0 6.929 4v8L8 16l-6.928-4V4L8 0Z" fill="#000"></path></svg>'},41210:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.728 8.981 10.286 4 16 12H0l4.571-5.714L6.728 8.98Z" fill="#000"></path></svg>'},63980:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.629 9.143 16 10.286 8 16l-8-5.714 1.371-1.143L8 13.714l6.629-4.571ZM8 0l8 5.714-8 5.715-8-5.715L8 0Z" fill="#000"></path></svg>'},30512:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H1v2h2V2Zm0 5H1v2h2V7Zm-2 5h2v2H1v-2ZM15 2H5v2h10V2ZM5 7h10v2H5V7Zm10 5H5v2h10v-2Z" fill="#000"></path></svg>'},19672:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4 14.4a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6V1.6A1.6 1.6 0 0 1 3.2 0h4.6a1 1 0 0 1 1 1v3.6a1 1 0 0 0 1 1h3.6a1 1 0 0 1 1 1v7.8ZM10.4 0v3a1 1 0 0 0 1 1h3l-4-4Zm-4 8H12v1.6H6.4V8Zm0 3.2H12v1.6H6.4v-1.6Zm-.8.8A.8.8 0 1 1 4 12a.8.8 0 0 1 1.6 0Zm-.8-2.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" fill="#000"></path></svg>'},36927:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 0 7.608 5.528-2.906 8.944H3.298L.392 5.528 8 0Z" fill="#000"></path></svg>'},24555:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="14" height="8" rx="4" fill="#000"></rect></svg>'},14542:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12.687 9.074.073-.133a.147.147 0 0 0 .017-.078l-.012-.142c-.002-.033-.042-.051-.068-.028l-.205.175a.05.05 0 0 1-.019.01l-.092.017a.042.042 0 0 0-.033.051l.019.077a.135.135 0 0 0 .093.097l.07.02a.134.134 0 0 0 .157-.066ZM13.8 9.389a.13.13 0 0 0 .058-.014l.141-.069c.002 0 .002 0 .003.002l.104.13c.005.006.013.01.023.01h.069a.028.028 0 0 0 .023-.046l-.108-.141-.047-.04-.382-.191-.092.036h-.07v-.001l-.026-.084a.027.027 0 0 0-.025-.019h-.093a.027.027 0 0 0-.027.028v.082h.06v.024c0 .03.023.055.052.06l.136.016h.001l.074.093c.023.028.019.097-.006.125v.001h.131V9.39ZM13.878 6.775l-.048.043a.294.294 0 0 0-.094.187.299.299 0 0 1-.082.178.496.496 0 0 1-.246.136l-.018.004-.076.062s-.022.11 0 .135c.009.012.049.01.061 0 .016-.012.017-.08.017-.08l.242-.087s.06.08.09.083c.012.002.042-.013.05-.025.032-.045.068-.208.068-.208a.546.546 0 0 0 .024-.113l.013-.143.108-.007.043-.087-.112-.011-.04-.067ZM9.427 10.12a.141.141 0 0 0 .245 0v-.334a.122.122 0 0 0-.187-.105.125.125 0 0 0-.058.105v.333ZM6.698 4.315l.144-.084.002-.006a.065.065 0 0 0-.026-.085.063.063 0 0 0-.031-.008h-.328l-.035-.038a.216.216 0 0 0-.157-.074L5.778 4l-.048.009a2.362 2.362 0 0 1-.048.009l-.289.122a.209.209 0 0 1-.076.018l-.464.023a.232.232 0 0 0-.099.028l-.26.148a.03.03 0 0 0-.015.024.03.03 0 0 0 .012.026c.02.015.014.047-.01.053l-.203.051a.03.03 0 0 0-.019.044l.068.112a.03.03 0 0 0 .02.014l.364.063c.056.01.106.04.14.086l.251.333.074.102a.094.094 0 0 1-.007.118l-.056.06a.093.093 0 0 0-.015.105l.183.37a.134.134 0 0 0 .081.068.223.223 0 0 0 .274-.142l.048-.137a.097.097 0 0 1 .04-.05l.204-.175a.24.24 0 0 1 .085-.046l.32-.088a.22.22 0 0 0 .148-.133l.151-.378a.227.227 0 0 0-.001-.172l-.03-.07a.227.227 0 0 1 .097-.28ZM4.03 4.643l.061-.11a.221.221 0 0 1 .088-.087l.504-.282-.057-.066-.572-.035a.203.203 0 0 0-.05.003l-.557.09a.232.232 0 0 0-.137.377l.125.148c.043.051.107.08.172.08h.224a.226.226 0 0 0 .199-.118ZM4.666 5.672l.052-.061c.013-.016.01-.04-.007-.051l-.162-.116-.569-.425a.137.137 0 0 0-.081-.027h-.224a.131.131 0 0 0-.095.04l-.118.115a.034.034 0 0 0-.003.047l.067.085c.006.01.018.015.03.014l.064-.006a.035.035 0 0 1 .038.033l.002.038c0 .005 0 .01-.002.016l-.03.073a.036.036 0 0 0 .006.036l.07.084a.032.032 0 0 0 .028.012l.068-.003a.035.035 0 0 0 .034-.035v-.147c0-.019.014-.034.032-.035l.094-.007c.008 0 .018.002.024.007l.174.133c.013.011.017.029.01.044l-.057.116a.033.033 0 0 1-.03.018l-.054.004a.036.036 0 0 0-.032.027.036.036 0 0 0 .032.044l.117.009c.024.001.048.01.069.024l.206.146c.014.01.03.008.043-.003l.065-.055a.03.03 0 0 0 .011-.018l.021-.083a.035.035 0 0 0-.004-.029l-.07-.11.022-.004a.037.037 0 0 1 .024.004l.091.054a.035.035 0 0 0 .044-.008ZM2.08 5.136h.07l.104.147c.014.018.03.033.05.044l.136.068c.018.01.04.015.061.015h.422V5.27l-.156-.056-.18-.097A.14.14 0 0 1 2.52 5.1l-.288-.166a.13.13 0 0 0-.067-.018h-.173a.136.136 0 0 0-.13.095l-.014.047a.14.14 0 0 0 .033.14l.061.062h.138v-.123ZM2.679 5.022l.11-.058a.139.139 0 0 1 .063-.015h.06c.052 0 .1.03.123.078l.044.092v.094h-.2v-.12l-.084-.043-.1.003-.016-.031ZM3.061 4.95l.1.164.08.047h.115l.116-.124-.088-.116-.225.028H3.06ZM2.414 4.698l.158.057a.12.12 0 0 1 .03.015l.109.073c.018.012.038.02.06.021l.2.02-.024-.124-.238-.132a.14.14 0 0 0-.065-.017h-.122l-.108.087ZM7.46 5.712l.058.092a.025.025 0 0 1-.001.028l-.044.06c-.004.008-.007.016-.004.022l.017.061a.02.02 0 0 0 .008.012l.092.072c.063.048.07.141.017.2l-.001.002a.138.138 0 0 1-.101.046h-.11a.025.025 0 0 1-.024-.031l.028-.11a.023.023 0 0 1 .014-.017l.049-.024c.01-.004.015-.015.013-.026l-.002-.03a.026.026 0 0 0-.02-.021l-.071-.015a.024.024 0 0 0-.027.014l-.016.035v.002l-.001.002-.035.118c-.003.011-.013.018-.024.018l-.11-.003a.024.024 0 0 1-.018-.007.024.024 0 0 1-.007-.017v-.127c0-.013.011-.024.024-.024l.058-.002c.008 0 .014-.004.02-.01l.053-.079A.027.027 0 0 0 7.3 5.94V5.82c0-.008.004-.015.01-.019l.115-.094a.024.024 0 0 1 .037.005Z" fill="#050505"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.073 5.1H14.7a.042.042 0 0 1-.04-.03l-.358-.069a.161.161 0 0 1-.088-.027l-.081-.055a.16.16 0 0 0-.088-.027s-.832-.43-1.922-.388c-.41.016-.77.222-.77.222a.033.033 0 0 0-.02.026l-.004.034a.033.033 0 0 1-.033.028l-.164-.004a.033.033 0 0 0-.034.032l-.459.016c-.04 0-.077.02-.1.053l-.041.06c-.03.045-.441.06-.441.06a.06.06 0 0 1-.036-.055v-.049c0-.017.006-.032.02-.044l.218-.2a.162.162 0 0 1 .087-.04l.136-.018a.06.06 0 0 0 .04-.024l.016-.024a.06.06 0 0 0-.028-.09l-.01-.005a.06.06 0 0 0-.047.004l-.104.061a.057.057 0 0 1-.03.008h-.101a.159.159 0 0 0-.114.049l-.244.252a.165.165 0 0 0-.042.08l-.023.11.016.047-.096.135-.087.087h-.081v-.087H9.45l-.028.11a.161.161 0 0 1-.098.11l-.081.032a.157.157 0 0 1-.156-.026l-.106-.086.284.015.032-.062S9 5.18 8.828 5.084c-.14-.08-.324-.013-.388.016a.147.147 0 0 0-.042.027l-.62.565a.162.162 0 0 0-.006.231l.058.061.083-.069a.057.057 0 0 1 .076.003l.155.146h.04l.146-.176a.057.057 0 0 0 .002-.072l-.019-.026a.06.06 0 0 1-.004-.066l.204-.334a.042.042 0 0 1 .052-.017l.036.018c.022.01.03.035.019.057l-.14.268a.134.134 0 0 0-.01.104l.023.071a.18.18 0 0 1-.03.146l-.087.12a.161.161 0 0 1-.134.064l-.254-.01a.046.046 0 0 1-.031-.013.047.047 0 0 1-.013-.032v-.042a.045.045 0 0 0-.046-.046.046.046 0 0 0-.045.042l-.007.074a.046.046 0 0 1-.045.042h-.024a.042.042 0 0 0-.03.012l-.414.386.06.088v.093a.057.057 0 0 1-.056.056h-.132c-.071 0-.127.06-.123.132l.001.018a.124.124 0 0 0 .119.116l.141.004a.16.16 0 0 0 .135-.068l.101-.144a.158.158 0 0 1 .13-.067h.097c.032 0 .064.01.09.028l.157.11c.03.022.033.068.004.092l-.088.077a.156.156 0 0 1-.104.04h-.55a.158.158 0 0 0-.126.064l-.425.573a.168.168 0 0 0-.032.096v.38c0 .035.011.069.032.097l.148.198c.013.016.02.036.027.055.01.033.036.08.1.08h.686s.172.005.172.12c0 .04-.001.08-.003.116a.162.162 0 0 0 .083.148c.048.028.099.077.099.155v.21a.203.203 0 0 1-.007.049.772.772 0 0 1-.079.178c-.036.054.015.135.052.182a.17.17 0 0 1 .035.102v.21s.016.076.088.109a.583.583 0 0 1 .097.05v.084c0 .09.071.16.16.16h.207s.094.008.155-.087l.28-.437s.04-.043 0-.12c-.04-.076-.021-.145-.021-.145l.19-.11s.09-.016.09-.141v-.136a.115.115 0 0 0-.018-.062l-.033-.057a.162.162 0 0 1 .021-.191l.395-.424s.104-.156.104-.235H9.49a.16.16 0 0 1-.136-.077l-.346-.576a.087.087 0 0 1 .033-.121.084.084 0 0 1 .112.03l.335.552-.001.05c0 .016.012.028.028.028.083 0 .327-.01.463-.13a.596.596 0 0 0 .143-.181.16.16 0 0 0-.038-.19l-.085-.076-.11.025-.197-.199a.063.063 0 0 1 .016-.1.06.06 0 0 1 .065.007l.307.238s.063.056.127.056h.18c.056 0 .108.03.136.078l.402.683s.06.056.094.054c.035-.003.082-.15.082-.15 0-.136.065-.266.176-.344l.138-.098a.158.158 0 0 1 .202.015l.085.083v.09c0 .014.012.027.028.027h.038l.036-.036h.042v.359c0 .04.015.08.043.109l.267.288v-.103a.159.159 0 0 0-.035-.1l-.125-.158a.159.159 0 0 1-.035-.1v-.109c0-.017.021-.026.033-.013l.162.167.004.105c.001.02.025.03.038.015l.229-.25s.066-.083 0-.152a5.405 5.405 0 0 0-.158-.154.05.05 0 0 1-.016-.039.05.05 0 0 1 .019-.038l.044-.037.11.002s-.023.052-.058.112c0 0 .017.096.123-.083.008-.007.036-.003.067.002.04.006.084.014.1-.002.06-.064.309-.407.309-.407s.032-.126-.043-.192c-.076-.066-.043-.147-.043-.147l.094-.082v-.058h-.244s.02-.13.194-.139l.031-.001c.011 0 .021 0 .03-.002a.132.132 0 0 1 .127.083c.006.016.01.034.01.052v.243l.036.004s.068.007.093-.084c0 0 .046-.013.046-.068v-.066l-.066-.08.107-.138a.122.122 0 0 1 .075-.045l.054-.011a.125.125 0 0 0 .08-.053l.247-.373a.165.165 0 0 0 .027-.09v-.102a.05.05 0 0 0-.05-.05h-.144s-.06-.07.022-.12c.057-.035.169-.128.232-.18a.155.155 0 0 1 .101-.038h.29a.16.16 0 0 0 .093-.03l.19-.137a.04.04 0 0 1 .025-.008c.082 0 .125.1.07.162l-.198.214a.158.158 0 0 0-.043.106l-.003.173c0 .032.026.06.059.06h.048l.259-.268a.125.125 0 0 0 .033-.066l.01-.056a.16.16 0 0 1 .155-.134h.114a.154.154 0 0 0 .104-.039l.159-.14a.043.043 0 0 1 .028-.01h.082a.042.042 0 0 0 .043-.044v-.08c0-.013.005-.024.013-.032l.062-.058a.156.156 0 0 1 .181-.024l.104.055a.061.061 0 0 0 .076-.016l.051-.065a.062.062 0 0 0 .012-.052.062.062 0 0 0-.033-.042l-.503-.25a5.427 5.427 0 0 0-.39-.014ZM8.141 7.024l.09-.078-.09.079-.133-.163a.053.053 0 0 1-.01-.019.053.053 0 0 0 .01.018l.133.163Zm.755.493h-.081a.13.13 0 0 1-.032-.004 9.127 9.127 0 0 1-.61-.186.062.062 0 0 1-.035-.045.063.063 0 0 1 .015-.055l.11-.117a.094.094 0 0 1 .13.005l.1.107.087-.016-.024-.064s-.01-.03-.021-.056c-.011-.027.048-.061.048-.061s.06-.006.06.088c0 .093.097.163.097.163h.332c.021 0 .035.023.024.04l-.059.113a.16.16 0 0 1-.141.088Zm.417-.503H9.2l-.083-.065a.057.057 0 0 0-.032-.01h-.108a.067.067 0 0 0-.044.017l-.078.07-.078.012a.053.053 0 0 1-.056-.026.055.055 0 0 1-.006-.02l-.011-.087a.09.09 0 0 1 .021-.069l.128-.145.058-.005-.003.026a.051.051 0 0 0 .05.058h.029a.069.069 0 0 0 .064-.042l.026-.058.12.02.01.087a.077.077 0 0 0 .026.048l.133.112v.025c0 .03-.023.052-.053.052Zm.574.093v.099h-.205l-.018-.099a.05.05 0 0 1 .008-.039l.011-.015a.052.052 0 0 0-.008-.069l-.096-.089v-.163l.14-.06h.072c.028 0 .052.019.06.046l.001.004c.006.02 0 .04-.013.056a.061.061 0 0 0-.015.031l-.013.085.113.105-.08.054.043.054Z" fill="#050505"></path><path d="M12.945 7.8c-.006-.015-.01-.022-.017-.021-.007 0-.018.009-.036.025a.11.11 0 0 0-.039.08c0 .02.003.04.012.062.007.018.02.032.028.032.025 0 .066-.14.052-.178ZM12.894 8.108a.116.116 0 0 1 .024.005l.014.004c.018.006.027.009.033.015.005.005.008.014.013.03l.004.014c.008.027.002.053-.018.07-.046.037-.038.057.03.072.047.01.061.024.061.062 0 .046-.003.046-.055.019-.03-.016-.06-.023-.065-.016-.007.007 0 .016.014.021.055.02.086.071.074.12-.014.057.014.066.059.02.048-.049.089.023.078.136-.004.038-.038.055-.09.043a.047.047 0 0 1-.022-.012.04.04 0 0 1-.013-.027c0-.024-.013-.029-.051-.02-.038.01-.05.006-.05-.018a.05.05 0 0 1 .03-.044c.013-.005.02-.009.02-.017 0-.008-.007-.019-.02-.038a.174.174 0 0 1-.03-.08c0-.02-.008-.037-.019-.037-.027 0-.088-.193-.063-.201.004-.002.009-.008.012-.016a.148.148 0 0 0 .009-.053c0-.04.003-.054.021-.052ZM12.8 8.567c.047-.044.072-.116.04-.116-.014 0-.082.079-.11.129-.03.052.009.045.07-.013ZM12.912 8.698a.02.02 0 0 1 .021.02c0 .011-.003.02-.008.02 0 0-.005 0-.007-.003a.064.064 0 0 1-.015-.017c-.007-.011-.003-.02.01-.02ZM13.254 8.913c-.013-.03-.03-.045-.044-.043-.014.001-.025.018-.03.05a.058.058 0 0 1-.01.026c.013.052.052.06.064.063h.004a.255.255 0 0 1 .025-.029.751.751 0 0 0 .014-.015l-.023-.052ZM13.082 8.894c.026-.004.035.015.011.043a.044.044 0 0 0-.008.015l-.057.01a.62.62 0 0 1-.036.005c-.038.006-.077.011-.1.037 0 .004.004.007.01.009.007.002.019.002.032-.001l.006-.003.005-.003.02-.002.064.008-.004.006h-.002l-.005.004-.013.008c-.03.026-.044.054-.034.067.008.012.015.04.015.062-.002.053-.066.067-.079.017-.006-.023-.01-.016-.012.021-.001.044-.011.057-.038.051-.02-.004-.035-.025-.035-.047a.142.142 0 0 0-.016-.065c-.008-.013-.006-.048.006-.078.007-.019.009-.028.01-.036l.002-.006.012-.032.018-.05-.003.001c.028-.026.056-.032.1-.022l.032.004a.15.15 0 0 0 .068-.012c.01-.005.02-.01.031-.011ZM13.36 9.136c0-.027-.034-.042-.092-.042a.445.445 0 0 0-.064.006c-.08.012-.103.027-.08.051.02.02.236.007.236-.015ZM5.866 9.362l-.35-.185a.222.222 0 0 0-.102-.026h-.101a.038.038 0 0 1-.037-.033.22.22 0 0 0-.218-.201h-.032a.217.217 0 0 1-.173-.088l-.048-.065a.216.216 0 0 0-.155-.086l-.262-.023a.028.028 0 0 1-.017-.007l-.043-.03c-.012-.007-.026-.009-.038 0l-.187.106a.216.216 0 0 1-.108.028h-.192a.037.037 0 0 1-.017-.004.146.146 0 0 1-.071-.133v-.112a.038.038 0 0 0-.023-.035.037.037 0 0 0-.014-.003h-.122a.037.037 0 0 1-.032-.019.038.038 0 0 1 0-.038l.057-.1a.044.044 0 0 0 .006-.02V8.2c0-.01-.004-.02-.011-.027a.037.037 0 0 0-.027-.011h-.066a.037.037 0 0 0-.03.017l-.038.06a.217.217 0 0 1-.184.1h-.054s-.086-.015-.086-.108v-.339a.097.097 0 0 1 .045-.067c.032-.02.107-.061.144-.081a.038.038 0 0 1 .043.005l.07.066c.007.007.015.01.024.01h.015c.022 0 .051 0 .057-.003.004-.002.004-.007.003-.014 0-.017 0-.046.045-.06.066-.019.109.04.109.04l.165.199a.037.037 0 0 0 .05.006l.023-.016a.038.038 0 0 0 .012-.05l-.002-.005a.223.223 0 0 1 .048-.28l.137-.118s.016-.01.024-.071c.005-.037.015-.09.021-.128l.021-.036.02-.036.297-.252a.036.036 0 0 1 .055.008c.014.022.038.046.069.045a.767.767 0 0 0 .208-.093.036.036 0 0 0 .019-.033v-.047l-.143.03a.038.038 0 0 1-.044-.031l-.016-.095a.038.038 0 0 0-.036-.03l-.143.015.018-.043a.043.043 0 0 1 .034-.027l.352-.037.056-.023.056-.023.071-.056a.038.038 0 0 0 .004-.055l-.396-.41a.039.039 0 0 0-.043-.008l-.118.057a.04.04 0 0 1-.038-.003L4.1 5.91a.036.036 0 0 0-.05.008l-.051.07a.033.033 0 0 0-.007.02l-.01.174c0 .011.003.02.011.029l.048.05a.038.038 0 0 1-.005.056l-.07.051a.037.037 0 0 1-.034.006l-.16.027a.22.22 0 0 0-.133-.13l-.08-.028a.222.222 0 0 1-.098-.35l.156-.19a.042.042 0 0 0 .007-.038l-.044-.115-.008-.012-.176-.19a.122.122 0 0 0-.21.065l-.001.01a.123.123 0 0 1-.12.104H2.54l-.05-.01a2.652 2.652 0 0 1-.04-.009l-.358-.162a2.003 2.003 0 0 0-.075-.018l-.33-.022a2.158 2.158 0 0 1-.092.015l-.148.058a.217.217 0 0 1-.124.01L.591 5.23a.212.212 0 0 0-.132.013l-.346.15a.038.038 0 0 0-.009.063l.09.077c.026.021.011.065-.022.066l-.136.003c-.02 0-.036.017-.036.037v.02c0 .02.016.036.036.037l.117.001c.04.002.051.056.015.072l-.101.046a.037.037 0 0 0-.022.037l.01.103a.22.22 0 0 0 .184.198l.072.012c.034.006.042.051.013.069l-.023.013c-.024.015-.024.05 0 .064l.012.006a.04.04 0 0 0 .035.003l.618-.282a.215.215 0 0 1 .237.04l.588.543a.22.22 0 0 1 .071.152l.02.415a.222.222 0 0 0 .048.128l.579.728c.01.014.03.018.045.01a.038.038 0 0 0 .014-.055s.365.383.4.399l.296.148a.22.22 0 0 0 .097.023h.147c.015 0 .028.008.033.021l.05.108V8.7l.001.001.002.003c.015.025.088.143.165.148.087.005.243 0 .243 0s.056-.001.056.06v.095a.036.036 0 0 1-.019.032c-.048.027-.172.107-.172.197v.212c0 .01.003.017.008.024.016.019.05.06.08.084.027.022.072.073.098.103l.013.014a.038.038 0 0 1 .008.024v.122a.04.04 0 0 1 .001.006l.001.007c.007.016.024.057.055.072.019.009.065.047.108.085a.222.222 0 0 1 .076.186l-.027.345-.003.02a.43.43 0 0 1-.003.02l-.119.45a1.75 1.75 0 0 0-.007.08l.012.185a.233.233 0 0 1-.01.095l-.044.126a.235.235 0 0 0-.007.125l.056.233a.123.123 0 0 0 .044.07l.057.045c.022.018.054.042.076.026.077-.054.12-.218.155-.353.015-.06.03-.115.044-.15.01-.023.067-.105.134-.202.11-.156.245-.35.244-.389l-.003-.09c0-.022.016-.038.037-.038h.114c.01 0 .02-.004.026-.012l.266-.294a.036.036 0 0 0 .01-.026v-.12c0-.021.017-.037.038-.037.045.002.12.002.145-.02.027-.021.097-.103.138-.15l.021-.024a.039.039 0 0 0 .01-.025v-.19c0-.055.02-.108.057-.15l.133-.148a.137.137 0 0 0-.043-.215ZM14.916 10.7l-.008.001c-.006.005.005.036.024.067.031.051.033.062.016.086-.017.025-.016.03.004.044.036.023.028.034-.022.03-.038-.004-.049.002-.07.039a.27.27 0 0 1-.078.074c-.071.044-.108.109-.06.109.013 0 .017.01.012.026-.01.032-.006.032.065-.002.041-.02.06-.038.066-.065a.065.065 0 0 1 .041-.048c.018-.006.032-.015.03-.019-.007-.018.033-.082.048-.077.02.006.08-.06.07-.076-.005-.006.001-.011.012-.011.022 0 .043-.048.03-.067-.004-.006-.023-.007-.043-.003-.024.005-.035.002-.035-.01 0-.02-.075-.089-.102-.097ZM12.885 9.274l-.486-.057a.119.119 0 0 1-.035-.01l-.118-.048a.144.144 0 0 1-.048-.032l-.39-.414a.05.05 0 0 0-.042-.015.047.047 0 0 0-.028.078l.41.466a.15.15 0 0 0 .063.04l.232.07a.128.128 0 0 0 .04.005h.397l.005-.083ZM13.85 9.535l-.02.057a.255.255 0 0 1-.27.17.05.05 0 0 1-.038-.027.05.05 0 0 1 .001-.047l.1-.186-.26.01a.254.254 0 0 0-.1.023l-.098.046a.249.249 0 0 0-.07.049l-.18.178a.24.24 0 0 1-.075.051l-.123.055a.259.259 0 0 0-.152.236v.02c0 .034.007.068.02.1l.096.228c.003.005.004.01.005.015a.11.11 0 0 0 .143.077l.245-.088a.248.248 0 0 1 .108-.013l.294.027c.08.006.15.05.193.12l.02.03a.254.254 0 0 0 .218.122h.118a.255.255 0 0 0 .182-.076l.13-.132a.26.26 0 0 0 .075-.183v-.173a.26.26 0 0 0-.082-.19l-.268-.248a.24.24 0 0 1-.06-.082l-.08-.175c-.017-.027-.06-.026-.071.006ZM13.322 9.25c.017.001.029.014.028.037 0 .015-.029.043-.064.063a.332.332 0 0 1-.068.032c-.016.004-.019-.005-.019-.027 0-.017.006-.031.014-.031.007 0 .03-.02.051-.043.02-.022.041-.032.058-.03ZM13.079 9.272c.16 0 .149.04-.013.048-.095.004-.12 0-.115-.021.005-.018.045-.027.128-.027ZM6.117 5.52h.09l.067.046.182-.047.033.081v.115l-.175.021a.133.133 0 0 1-.1-.028l-.153-.121.056-.067ZM8.12 4.551h-.23l-.056.04.197.25h.09l.082-.152.202.103.032-.048-.24-.169a.132.132 0 0 0-.076-.024ZM8.611 4.372h-.298l-.028.046.086.064a.13.13 0 0 0 .08.027h.16l.076-.08-.076-.057ZM3.042 4.379l-.197.074-.19.048.273.13.216-.07.072-.013-.057-.109-.117-.06ZM3.415 4.78h-.086v.043l.046.017.01.044.071.01.048.055.424-.014.024-.05-.037-.056h-.456l-.044-.049ZM3.03 4.884l-.033-.096.033-.018.127.01.03.029-.07.082-.087-.007ZM3.216 4.725l.016-.054.035-.024.034.013.058.025v.024h-.03l-.046.038-.067-.022Z" fill="#050505"></path><path d="m3.844 8.095-.083.037c-.01.005-.01.021 0 .024l.088.037.103-.017.167.115h.119s.081-.01.081-.032-.081-.033-.081-.033l-.172-.13h-.222ZM4.4 8.272s-.074.045-.065.066c.016.038.16 0 .16 0s.052-.048.043-.066c-.018-.031-.138 0-.138 0ZM14.162 10.93h-.28l.074.164h.066l.14-.165Z" fill="#050505"></path></svg>'},64986:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2h16v12H0V2Z" fill="#000"></path></svg>'},2761:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 0 8 8-8 8-8-8 8-8Z" fill="#000"></path></svg>'},29704:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="#000" stroke-width="2"></circle></svg>'},67660:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v12h12V2ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" fill="#000"></path></svg>'},72180:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h16v16H0V0Z" fill="#000"></path></svg>'},67906:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm6.66.062c1.1-.202 2.043.09 2.829.876a3.22 3.22 0 0 1 .688 3.532l1.587 1.588a.805.805 0 0 1 0 1.137l-.569.57a.805.805 0 0 1-1.137 0L8.47 12.176a3.22 3.22 0 0 1-3.532-.688c-.786-.786-1.078-1.728-.876-2.829a.402.402 0 0 1 .68-.212l1.618 1.619a.402.402 0 0 0 .569 0l1.138-1.138a.402.402 0 0 0 0-.569L6.448 6.742a.402.402 0 0 1 .212-.68Z" fill="#000"></path></svg>'},61403:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 1 8 14H0L8 1Z" fill="#000"></path></svg>'},11167:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V4a2 2 0 0 1 2-2h8a2 2 0 0 0-2-2H2Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm5.489 2.938c-.786-.786-1.728-1.078-2.829-.876a.402.402 0 0 0-.212.68l1.619 1.618a.402.402 0 0 1 0 .569l-1.138 1.138a.402.402 0 0 1-.569 0L6.742 8.448a.402.402 0 0 0-.68.212c-.202 1.1.09 2.043.876 2.829a3.22 3.22 0 0 0 3.532.688l1.588 1.587a.805.805 0 0 0 1.137 0l.57-.569a.805.805 0 0 0 0-1.137l-1.588-1.588a3.22 3.22 0 0 0-.688-3.532Z" fill="#000"></path></svg>'},13372:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.751a2 2 0 0 0-.495-1.317L12.098.683A2 2 0 0 0 10.592 0H3Zm3.325 3.077c1.376-.252 2.554.114 3.536 1.095a4.024 4.024 0 0 1 .86 4.416l1.985 1.984c.392.393.392 1.03 0 1.422l-.712.712a1.006 1.006 0 0 1-1.422 0L8.588 10.72a4.024 4.024 0 0 1-4.416-.86c-.981-.982-1.347-2.16-1.095-3.536a.503.503 0 0 1 .85-.265L5.95 8.083a.503.503 0 0 0 .711 0l1.422-1.422a.503.503 0 0 0 0-.71L6.06 3.926a.503.503 0 0 1 .265-.85Z" fill="#000"></path></svg>'},50687:l=>{l.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.667 4.667 11.333 0 16 4.667l-4.667 4.666-4.666-4.666ZM0 1.333V8h6.667V1.333H0ZM6.667 16H0V9.333h6.667V16ZM8 16V9.333h6.667V16H8Z" fill="#000"></path></svg>'},65603:l=>{l.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.022 11H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4.022A5.5 5.5 0 1 1 5.022 11Zm0-1A5.502 5.502 0 0 1 10 5.022V1H1v9h4.022Zm5.478 5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" fill="#000" fill-rule="nonzero"></path></svg>'},48891:l=>{"use strict";l.exports=e},34796:l=>{"use strict";l.exports=o},30726:l=>{"use strict";l.exports=t}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return l[e](o,o.exports,i),o.exports}i.d=(l,a)=>{for(var e in a)i.o(a,e)&&!i.o(l,e)&&Object.defineProperty(l,e,{enumerable:!0,get:a[e]})},i.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),i.r=l=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s),i.d(s,{default:()=>v});var l,a,e=i(48891),t=i(30726);!function(l){l.ByUpload="BYUPLOAD",l.ByStaticUrl="BYSTATICURL",l.ByDynamicUrl="BYDYNAMICURL"}(l||(l={})),function(l){l.Expression="EXPRESSION",l.Attachment="ATTACHMENT",l.Symbol="SYMBOL"}(a||(a={}));const o={imageSource:"Image source",imageNoneSource:"None",staticSource:"Static",dynamicSource:"Dynamic",imageSet:"Select an image",toolTip:"Tooltip",altText:"Alt text",imageSetLink:"Set link",imageShape:"Shape",imagePosition:"Position",imageFit:"Fit",imageFill:"Fill",imageAttachment:"Attachment",imageCustom:"Custom",imageAttachmentName:"Attachment name",imageSymbol:"Symbol",imageSymbolScale:"Symbol scale",imagerectangle:"Rectangle/Square",imagecircle:"Oval/Circle",imagehexagon:"Hexagon",imagepentagon:"Pentagon",imagerhombus:"Rhombus",imagetriangle:"Triangle",imageShapeSettings:"Shape settings",imageUploadBlankStatus:'Click the "{ButtonString}" button to select an image from your device.',imageDisplayQuality:"Image display quality",displayQualityTooltipWithLow:"Low",displayQualityTooltipWithMedium:"Medium",displayQualityTooltipWithHigh:"High",displayQualityTooltipWithOriginal:"Original"};var c=i(34796);class n extends e.React.PureComponent{constructor(){super(...arguments),this.cropShapeList=["square","circle","hexagon","pentagon","rhombus","triangle"],this.shapeClick=(l,a)=>{if(this.props.widgetConfig.functionConfig.imageParam&&this.props.widgetConfig.functionConfig.imageParam.cropParam&&this.props.widgetConfig.functionConfig.imageParam.cropParam.cropShape===this.cropShapeList[a])return;const t=l.currentTarget.getElementsByTagName("svg")&&l.currentTarget.getElementsByTagName("svg")[0];if(t){const l=e.moduleLoader.getJimuForBuilderModules().getAppConfigAction();let o=(0,e.Immutable)(this.props.widgetConfig),i=(0,e.Immutable)(o.functionConfig.imageParam?o.functionConfig.imageParam.cropParam:null);i||(i=(0,e.Immutable)({})),i=i.set("svgViewBox",t.getAttribute("viewBox")),i=i.set("svgPath",t.getElementsByTagName("path")[0].getAttribute("d")),i=i.set("cropShape",this.cropShapeList[a]),o=o.setIn(["functionConfig","imageParam","cropParam"],i),l.editWidgetConfig(this.props.id,o).exec()}}}getStyle(){const l=this.props.theme;return e.css`
      .widget-image-chooseshape-item {
        background-color: ${l.colors.palette.light[300]};
      }

      .widget-image-chooseshape-item:hover {
        cursor: 'pointer';
        background-color: ${l.colors.palette.light[500]};
      }

      .chooseshape-item-selected {
        background-color: ${l.colors.palette.light[500]};
      }
      `}getTooltipStyle(){const l=this.props.theme;return e.css`
      border: none;

      .tooltip {
        color: ${l.colors.black};
        background-color: ${l.colors.palette.light[600]};
        border-color: ${l.colors.palette.light[300]};
      }
    `}render(){const{id:l,appConfig:a,theme:s,widgetConfig:c}=this.props,n=a.widgets[l],r=window.parent._widgetSettingManager.getSettingI18nMessagesByUri(n.uri);return(0,e.jsx)("div",{style:{width:"50px"},css:this.getStyle()},this.cropShapeList.map(((l,a)=>{var n,v,g,h;const p=i(24359)(`./${l}.svg`),d="square"===l?"imagerectangle":`image${l}`,m=null!==(n=r[d])&&void 0!==n?n:o[d],u="rectangle"===l&&!(null===(v=c.functionConfig.imageParam)||void 0===v?void 0:v.cropParam)||(null===(h=null===(g=c.functionConfig.imageParam)||void 0===g?void 0:g.cropParam)||void 0===h?void 0:h.cropShape)===l;return(0,e.jsx)(t.Tooltip,{key:a,title:m,placement:"right-start",css:this.getTooltipStyle()},(0,e.jsx)("div",{className:(0,e.classNames)("w-100 d-flex justify-content-center align-items-center widget-image-chooseshape-item",{"chooseshape-item-selected":u}),style:{height:"40px"},onClick:l=>this.shapeClick(l,a)},(0,e.jsx)(t.Icon,{icon:p,color:s.colors.black})))})))}}const r=(0,c.withBuilderTheme)(n);class v{constructor(){this.index=0,this.id="choose-shape",this.classes={},this.isEmptySource=l=>!(l.functionConfig.imageParam&&l.functionConfig.imageParam.url||l.functionConfig.srcExpression||l.functionConfig.dynamicUrlType===a.Attachment)}getGroupId(){return null}getTitle(){const l=this.widgetId,a=e.i18n.getIntl(l);return a?a.formatMessage({id:"imageChooseShape",defaultMessage:"Shape"}):"Shape"}getIcon(){return i(65603)}onClick(l){return null}visible(l){const a=(0,e.getAppStore)().getState().appConfig.widgets[l.layoutItem.widgetId];if(a){const l=a.config;return!this.isEmptySource(l)}return!1}getSettingPanel(l){const a=l.layoutItem.widgetId;return this.classes[a]||(this.classes[a]=e.ReactRedux.connect((l=>{const t=(0,e.Immutable)(l.appConfig.widgets[a].config);return{id:a,appConfig:l.appConfig,queryObject:l.queryObject,widgetConfig:t}}))(r)),this.classes[a]}}})(),s})())}}}));