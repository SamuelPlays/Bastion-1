const a462_0x2e75=['Available\x20Languages','map','COLORS','languages','info','send','tag','apply','../../utils/arrays','channel','save','toLowerCase','@bastion/tesseract','exports','catch','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','languageUnavailable','GREEN','locale','includes','getString','set','toUpperCase','client','IRIS','compile','constructor','availableLocales','language','document','guild','getLocales','Constants'];(function(_0x3841c7,_0x2e759f){const _0x2e6486=function(_0x446ed8){while(--_0x446ed8){_0x3841c7['push'](_0x3841c7['shift']());}};const _0x193104=function(){const _0x4e6711={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x544c72,_0x108a61,_0x3beb9c,_0x4e02d4){_0x4e02d4=_0x4e02d4||{};let _0x194213=_0x108a61+'='+_0x3beb9c;let _0x1b2f5d=0x0;for(let _0x2510b6=0x0,_0x4e7a19=_0x544c72['length'];_0x2510b6<_0x4e7a19;_0x2510b6++){const _0x4d9661=_0x544c72[_0x2510b6];_0x194213+=';\x20'+_0x4d9661;const _0x557ea8=_0x544c72[_0x4d9661];_0x544c72['push'](_0x557ea8);_0x4e7a19=_0x544c72['length'];if(_0x557ea8!==!![]){_0x194213+='='+_0x557ea8;}}_0x4e02d4['cookie']=_0x194213;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8b59b7,_0x344016){_0x8b59b7=_0x8b59b7||function(_0x51a862){return _0x51a862;};const _0x538c0a=_0x8b59b7(new RegExp('(?:^|;\x20)'+_0x344016['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1076a6=function(_0x4fedd7,_0xd2c41f){_0x4fedd7(++_0xd2c41f);};_0x1076a6(_0x2e6486,_0x2e759f);return _0x538c0a?decodeURIComponent(_0x538c0a[0x1]):undefined;}};const _0x1e30e7=function(){const _0x2a4945=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a4945['test'](_0x4e6711['removeCookie']['toString']());};_0x4e6711['updateCookie']=_0x1e30e7;let _0x23e48b='';const _0x43a9e6=_0x4e6711['updateCookie']();if(!_0x43a9e6){_0x4e6711['setCookie'](['*'],'counter',0x1);}else if(_0x43a9e6){_0x23e48b=_0x4e6711['getCookie'](null,'counter');}else{_0x4e6711['removeCookie']();}};_0x193104();}(a462_0x2e75,0x150));const a462_0x2e64=function(_0x3841c7,_0x2e759f){_0x3841c7=_0x3841c7-0x0;let _0x2e6486=a462_0x2e75[_0x3841c7];return _0x2e6486;};const a462_0x4e6711=function(){let _0x2343e5=!![];return function(_0x3a8506,_0x302420){const _0x2a3011=_0x2343e5?function(){if(_0x302420){const _0x2a9981=_0x302420[a462_0x2e64('0x1')](_0x3a8506,arguments);_0x302420=null;return _0x2a9981;}}:function(){};_0x2343e5=![];return _0x2a3011;};}();const a462_0x446ed8=a462_0x4e6711(this,function(){const _0x439417=function(){const _0x231a7e=_0x439417[a462_0x2e64('0x14')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a462_0x2e64('0x13')](a462_0x2e64('0x9'));return!_0x231a7e['test'](a462_0x446ed8);};return _0x439417();});a462_0x446ed8();'use strict';const tesseract_1=require(a462_0x2e64('0x6'));const arrays=require(a462_0x2e64('0x2'));module[a462_0x2e64('0x7')]=class Languages extends tesseract_1['Command']{constructor(){super('languages',{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20languages\x20available\x20in\x20Bastion\x20and\x20set\x20one\x20of\x20them\x20as\x20the\x20default\x20language\x20for\x20your\x20server.','triggers':[],'arguments':{'alias':{'set':['s']},'string':[a462_0x2e64('0xf')]},'scope':a462_0x2e64('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a462_0x2e64('0x1e'),'languages\x20--set\x20LANGUAGE']});this['exec']=async(_0x1c2217,_0xcc9cce)=>{const _0xc378c2=_0x1c2217[a462_0x2e64('0x18')];const _0x2f0dfa=this[a462_0x2e64('0x11')][a462_0x2e64('0xc')][a462_0x2e64('0x19')]()[a462_0x2e64('0x1c')](_0x2f0290=>_0x2f0290[a462_0x2e64('0x10')]());if(_0xcc9cce[a462_0x2e64('0xf')]){const _0xb8daf9=_0xcc9cce[a462_0x2e64('0xf')][a462_0x2e64('0x5')]();if(!_0x2f0dfa[a462_0x2e64('0xd')](_0xb8daf9)){throw new Error(this[a462_0x2e64('0x11')]['locale']['getString'](_0x1c2217[a462_0x2e64('0x18')][a462_0x2e64('0x17')][a462_0x2e64('0x16')],'errors',a462_0x2e64('0xa')));}_0xc378c2[a462_0x2e64('0x17')][a462_0x2e64('0x16')]=_0xb8daf9;await _0xc378c2['document'][a462_0x2e64('0x4')]();return await _0x1c2217[a462_0x2e64('0x3')][a462_0x2e64('0x20')]({'embed':{'color':tesseract_1[a462_0x2e64('0x1a')][a462_0x2e64('0x1d')][a462_0x2e64('0xb')],'description':this[a462_0x2e64('0x11')][a462_0x2e64('0xc')][a462_0x2e64('0xe')](_0x1c2217[a462_0x2e64('0x18')]['document'][a462_0x2e64('0x16')],a462_0x2e64('0x1f'),'guildLanguageUpdate',_0x1c2217['author'][a462_0x2e64('0x0')],_0xb8daf9['toUpperCase']())}})[a462_0x2e64('0x8')](()=>{});}await _0x1c2217['channel'][a462_0x2e64('0x20')]({'embed':{'color':tesseract_1[a462_0x2e64('0x1a')][a462_0x2e64('0x1d')][a462_0x2e64('0x12')],'title':a462_0x2e64('0x1b'),'description':this['client'][a462_0x2e64('0xc')][a462_0x2e64('0xe')](_0x1c2217[a462_0x2e64('0x18')]['document'][a462_0x2e64('0x16')],a462_0x2e64('0x1f'),a462_0x2e64('0x15')),'fields':[{'name':'Languages','value':arrays['toBulletList'](_0x2f0dfa)}]}})[a462_0x2e64('0x8')](()=>{});};}};