const a234_0x2403=['joinedTimestamp','GOLD','./omnic','BASTION_PLATINUM_USER','BASTION_GOLD_USER','constructor','apply','defineProperty','GUILD_NEW_MEMBER','PLATINUM','now','/badges/user/','GUILD_STAFF','resolveBadges','getMemberBadgeValue','GUILD_9Y_CLUB','keys','string','GUILD_3Y_CLUB','ownerID','guild','permissions','BADGES','getMembership','makeRequest','DIAMOND','GUILD_4Y_CLUB','GUILD_2Y_CLUB','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','MANAGE_GUILD','MANAGE_MESSAGES','GUILD_1Y_CLUB','COLORS','length','BASTION_DIAMOND_GUILD','GUILD_8Y_CLUB','push','has','MANAGE_EMOJIS','test','MANAGE_CHANNELS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','MANAGE_WEBHOOKS','GUILD_5Y_CLUB','MANAGE_ROLES','fetchBadges','BASTION_DIAMOND_USER'];(function(_0x3380a1,_0x5b279c){const _0x240354=function(_0x219790){while(--_0x219790){_0x3380a1['push'](_0x3380a1['shift']());}},_0x42d471=function(){const _0x5669e3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x30d826,_0x449b59,_0x446e42,_0x52605b){_0x52605b=_0x52605b||{};let _0x2a3091=_0x449b59+'='+_0x446e42,_0x264153=0x0;for(let _0x1362a9=0x0,_0x345cde=_0x30d826['length'];_0x1362a9<_0x345cde;_0x1362a9++){const _0x396f13=_0x30d826[_0x1362a9];_0x2a3091+=';\x20'+_0x396f13;const _0x4dc30b=_0x30d826[_0x396f13];_0x30d826['push'](_0x4dc30b),_0x345cde=_0x30d826['length'],_0x4dc30b!==!![]&&(_0x2a3091+='='+_0x4dc30b);}_0x52605b['cookie']=_0x2a3091;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2cd016,_0x461a99){_0x2cd016=_0x2cd016||function(_0x166cb2){return _0x166cb2;};const _0x4cbdcc=_0x2cd016(new RegExp('(?:^|;\x20)'+_0x461a99['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x198b5d=function(_0x3cb7ef,_0x5bb364){_0x3cb7ef(++_0x5bb364);};return _0x198b5d(_0x240354,_0x5b279c),_0x4cbdcc?decodeURIComponent(_0x4cbdcc[0x1]):undefined;}},_0x346fa5=function(){const _0xfda883=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xfda883['test'](_0x5669e3['removeCookie']['toString']());};_0x5669e3['updateCookie']=_0x346fa5;let _0x542043='';const _0xec7e54=_0x5669e3['updateCookie']();if(!_0xec7e54)_0x5669e3['setCookie'](['*'],'counter',0x1);else _0xec7e54?_0x542043=_0x5669e3['getCookie'](null,'counter'):_0x5669e3['removeCookie']();};_0x42d471();}(a234_0x2403,0x156));const a234_0x42d4=function(_0x3380a1,_0x5b279c){_0x3380a1=_0x3380a1-0xb0;let _0x240354=a234_0x2403[_0x3380a1];return _0x240354;};const a234_0x3ec218=a234_0x42d4,a234_0x346fa5=function(){let _0xec7e54=!![];return function(_0x30d826,_0x449b59){const _0x446e42=_0xec7e54?function(){const _0x3763b5=a234_0x42d4;if(_0x449b59){const _0x52605b=_0x449b59[_0x3763b5(0xd8)](_0x30d826,arguments);return _0x449b59=null,_0x52605b;}}:function(){};return _0xec7e54=![],_0x446e42;};}(),a234_0x5669e3=a234_0x346fa5(this,function(){const _0x2a3091=function(){const _0x54f46e=a234_0x42d4,_0x264153=_0x2a3091[_0x54f46e(0xd7)](_0x54f46e(0xcc))()[_0x54f46e(0xd7)](_0x54f46e(0xbf));return!_0x264153[_0x54f46e(0xca)](a234_0x5669e3);};return _0x2a3091();});a234_0x5669e3();'use strict';Object[a234_0x3ec218(0xd9)](exports,'__esModule',{'value':!![]}),exports[a234_0x3ec218(0xba)]=exports[a234_0x3ec218(0xc8)]=exports[a234_0x3ec218(0xb1)]=exports[a234_0x3ec218(0xd0)]=exports['resolveBadges']=void 0x0;const constants=require('./constants'),omnic=require(a234_0x3ec218(0xd4)),BADGES=require('../assets/badges.json'),resolveBadges=_0x1362a9=>{const _0x48866c=a234_0x3ec218,_0x345cde=[];for(let _0x396f13=0x0;_0x396f13<Object[_0x48866c(0xb3)](BADGES)[_0x48866c(0xc4)];_0x396f13++){const _0x4dc30b=0x1<<_0x396f13;if((_0x1362a9&_0x4dc30b)===_0x4dc30b)_0x345cde[_0x48866c(0xc7)](BADGES[Object[_0x48866c(0xb3)](BADGES)[_0x396f13]]);}return _0x345cde;};exports[a234_0x3ec218(0xb0)]=resolveBadges;const fetchBadges=(_0x2cd016,_0x461a99)=>{const _0xc5323a=a234_0x3ec218;return omnic[_0xc5323a(0xbb)](_0xc5323a(0xdd)+_0x2cd016+(_0x461a99?'/'+_0x461a99:''));};exports[a234_0x3ec218(0xd0)]=fetchBadges;const getMemberBadgeValue=_0x4cbdcc=>{const _0x4d3b0f=a234_0x3ec218;let _0x198b5d=0x0;if(_0x4cbdcc[_0x4d3b0f(0xb7)][_0x4d3b0f(0xb6)]===_0x4cbdcc['id'])_0x198b5d|=constants['BADGES']['GUILD_OWNER'];if(_0x4cbdcc[_0x4d3b0f(0xb8)][_0x4d3b0f(0xc8)](_0x4d3b0f(0xc0))||_0x4cbdcc[_0x4d3b0f(0xb8)][_0x4d3b0f(0xc8)](_0x4d3b0f(0xcf))||_0x4cbdcc[_0x4d3b0f(0xb8)][_0x4d3b0f(0xc8)](_0x4d3b0f(0xcb))||_0x4cbdcc['permissions']['has'](_0x4d3b0f(0xc1))||_0x4cbdcc[_0x4d3b0f(0xb8)][_0x4d3b0f(0xc8)](_0x4d3b0f(0xcd))||_0x4cbdcc[_0x4d3b0f(0xb8)][_0x4d3b0f(0xc8)]('MANAGE_NICKNAMES')||_0x4cbdcc['permissions'][_0x4d3b0f(0xc8)](_0x4d3b0f(0xc9)))_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xde)];if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc['joinedTimestamp']>=0x9*0x758f0dfc0)_0x198b5d|=constants['BADGES'][_0x4d3b0f(0xb2)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x8*0x758f0dfc0)_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xc6)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x7*0x758f0dfc0)_0x198b5d|=constants[_0x4d3b0f(0xb9)]['GUILD_7Y_CLUB'];else{if(Date['now']()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x6*0x758f0dfc0)_0x198b5d|=constants['BADGES']['GUILD_6Y_CLUB'];else{if(Date['now']()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x5*0x758f0dfc0)_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xce)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc['joinedTimestamp']>=0x4*0x758f0dfc0)_0x198b5d|=constants['BADGES'][_0x4d3b0f(0xbd)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc['joinedTimestamp']>=0x3*0x758f0dfc0)_0x198b5d|=constants['BADGES'][_0x4d3b0f(0xb5)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x2*0x758f0dfc0)_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xbe)];else{if(Date['now']()-_0x4cbdcc[_0x4d3b0f(0xd2)]>=0x1*0x758f0dfc0)_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xc2)];else{if(Date[_0x4d3b0f(0xdc)]()-_0x4cbdcc[_0x4d3b0f(0xd2)]<=0xd84b1800)_0x198b5d|=constants[_0x4d3b0f(0xb9)][_0x4d3b0f(0xda)];}}}}}}}}}return _0x198b5d;};exports[a234_0x3ec218(0xb1)]=getMemberBadgeValue;const has=(_0x166cb2,_0x3cb7ef)=>{const _0x39cb4c=a234_0x3ec218;if(typeof _0x3cb7ef===_0x39cb4c(0xb4))return(_0x166cb2&constants[_0x39cb4c(0xb9)][_0x3cb7ef])===constants[_0x39cb4c(0xb9)][_0x3cb7ef];return(_0x166cb2&_0x3cb7ef)===_0x3cb7ef;};exports[a234_0x3ec218(0xc8)]=has;const getMembership=_0x5bb364=>{const _0x56967c=a234_0x3ec218;if(exports[_0x56967c(0xc8)](_0x5bb364,'BASTION_DIAMOND_USER'))return{...BADGES[_0x56967c(0xd1)],'color':constants[_0x56967c(0xc3)][_0x56967c(0xbc)]};if(exports[_0x56967c(0xc8)](_0x5bb364,_0x56967c(0xc5)))return{...BADGES['BASTION_DIAMOND_GUILD'],'color':constants['COLORS'][_0x56967c(0xbc)]};if(exports[_0x56967c(0xc8)](_0x5bb364,'BASTION_PLATINUM_USER'))return{...BADGES['BASTION_PLATINUM_USER'],'color':constants[_0x56967c(0xc3)][_0x56967c(0xdb)]};if(exports[_0x56967c(0xc8)](_0x5bb364,'BASTION_PLATINUM_USER'))return{...BADGES[_0x56967c(0xd5)],'color':constants['COLORS'][_0x56967c(0xdb)]};if(exports[_0x56967c(0xc8)](_0x5bb364,_0x56967c(0xd6)))return{...BADGES[_0x56967c(0xd6)],'color':constants[_0x56967c(0xc3)][_0x56967c(0xd3)]};if(exports[_0x56967c(0xc8)](_0x5bb364,_0x56967c(0xd6)))return{...BADGES[_0x56967c(0xd6)],'color':constants['COLORS']['GOLD']};};exports['getMembership']=getMembership;