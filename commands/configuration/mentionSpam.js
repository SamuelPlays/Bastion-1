const a465_0x2189=['exec','document','guild','GREEN','RED','client','Command','mentionSpam','@bastion/tesseract','compile','channel','constructor','COLORS','catch','number','apply','locale','exports','author','mentionSpam\x20--threshold\x20NUMBER','MANAGE_GUILD','language','save','send','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','mentionSpamInfractionsDisable','Constants','test','getString','mentionSpamInfractionsEnable','threshold','tag'];(function(_0xc2eec0,_0x2189db){const _0x117df6=function(_0x237c8c){while(--_0x237c8c){_0xc2eec0['push'](_0xc2eec0['shift']());}};const _0x2c0a82=function(){const _0xb0246d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4edcd4,_0x1dda9a,_0x2db244,_0x2798fe){_0x2798fe=_0x2798fe||{};let _0x2945bf=_0x1dda9a+'='+_0x2db244;let _0x221c87=0x0;for(let _0x1fedbd=0x0,_0x4e5ff9=_0x4edcd4['length'];_0x1fedbd<_0x4e5ff9;_0x1fedbd++){const _0x514b87=_0x4edcd4[_0x1fedbd];_0x2945bf+=';\x20'+_0x514b87;const _0x37dc6c=_0x4edcd4[_0x514b87];_0x4edcd4['push'](_0x37dc6c);_0x4e5ff9=_0x4edcd4['length'];if(_0x37dc6c!==!![]){_0x2945bf+='='+_0x37dc6c;}}_0x2798fe['cookie']=_0x2945bf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37d471,_0x26e2fb){_0x37d471=_0x37d471||function(_0x120bb2){return _0x120bb2;};const _0x132566=_0x37d471(new RegExp('(?:^|;\x20)'+_0x26e2fb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2af155=function(_0x3c5c5e,_0x4533f3){_0x3c5c5e(++_0x4533f3);};_0x2af155(_0x117df6,_0x2189db);return _0x132566?decodeURIComponent(_0x132566[0x1]):undefined;}};const _0x48be85=function(){const _0x4af200=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4af200['test'](_0xb0246d['removeCookie']['toString']());};_0xb0246d['updateCookie']=_0x48be85;let _0x161e6f='';const _0x450ab9=_0xb0246d['updateCookie']();if(!_0x450ab9){_0xb0246d['setCookie'](['*'],'counter',0x1);}else if(_0x450ab9){_0x161e6f=_0xb0246d['getCookie'](null,'counter');}else{_0xb0246d['removeCookie']();}};_0x2c0a82();}(a465_0x2189,0x97));const a465_0x117d=function(_0xc2eec0,_0x2189db){_0xc2eec0=_0xc2eec0-0x0;let _0x117df6=a465_0x2189[_0xc2eec0];return _0x117df6;};const a465_0xb0246d=function(){let _0x5482b8=!![];return function(_0x1519d1,_0x87cf0c){const _0x3a9c73=_0x5482b8?function(){if(_0x87cf0c){const _0x4762ef=_0x87cf0c[a465_0x117d('0x18')](_0x1519d1,arguments);_0x87cf0c=null;return _0x4762ef;}}:function(){};_0x5482b8=![];return _0x3a9c73;};}();const a465_0x237c8c=a465_0xb0246d(this,function(){const _0x494315=function(){const _0x2649aa=_0x494315[a465_0x117d('0x14')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a465_0x117d('0x12')](a465_0x117d('0x1'));return!_0x2649aa[a465_0x117d('0x4')](a465_0x237c8c);};return _0x494315();});a465_0x237c8c();'use strict';const tesseract_1=require(a465_0x117d('0x11'));module[a465_0x117d('0x1a')]=class MentionSpamCommand extends tesseract_1[a465_0x117d('0xf')]{constructor(){super('mentionSpam',{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[a465_0x117d('0x7')]},'scope':a465_0x117d('0xb'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a465_0x117d('0x1d')],'syntax':[a465_0x117d('0x10'),a465_0x117d('0x1c')]});this[a465_0x117d('0x9')]=async(_0x99036,_0x54acc4)=>{const _0x475721=_0x99036[a465_0x117d('0xb')];_0x475721[a465_0x117d('0xa')]['mentionSpam']={..._0x475721[a465_0x117d('0xa')][a465_0x117d('0x10')],'threshold':typeof _0x54acc4[a465_0x117d('0x7')]===a465_0x117d('0x17')&&_0x54acc4['threshold']>0x1?_0x54acc4[a465_0x117d('0x7')]:undefined};await _0x475721[a465_0x117d('0xa')][a465_0x117d('0x1f')]();await _0x99036[a465_0x117d('0x13')][a465_0x117d('0x0')]({'embed':{'color':_0x475721[a465_0x117d('0xa')][a465_0x117d('0x10')][a465_0x117d('0x7')]?tesseract_1[a465_0x117d('0x3')][a465_0x117d('0x15')][a465_0x117d('0xc')]:tesseract_1[a465_0x117d('0x3')]['COLORS'][a465_0x117d('0xd')],'description':this[a465_0x117d('0xe')][a465_0x117d('0x19')][a465_0x117d('0x5')](_0x99036[a465_0x117d('0xb')][a465_0x117d('0xa')][a465_0x117d('0x1e')],'info',_0x475721[a465_0x117d('0xa')][a465_0x117d('0x10')][a465_0x117d('0x7')]?a465_0x117d('0x6'):a465_0x117d('0x2'),_0x99036[a465_0x117d('0x1b')][a465_0x117d('0x8')],_0x475721[a465_0x117d('0xa')][a465_0x117d('0x10')][a465_0x117d('0x7')])}})[a465_0x117d('0x16')](()=>{});};}};