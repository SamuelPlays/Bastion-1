const a477_0xd9bf=['RED','MANAGE_GUILD','suggestions\x20--disable','send','constructor','exec','COLORS','exports','apply','Constants','suggestionsChannelId','tag','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','suggestionsEnable','guild','save','disable','compile','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20suggestions\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Suggestion\x20Channel\x20that\x20will\x20receive\x20the\x20suggestions,\x20suggested\x20by\x20the\x20server\x20members\x20using\x20the\x20`suggest`\x20command.','GREEN','Command','language','channel','client','author'];(function(_0x47cbbb,_0xd9bfa0){const _0xa708dd=function(_0x58b916){while(--_0x58b916){_0x47cbbb['push'](_0x47cbbb['shift']());}};const _0x1041e0=function(){const _0x27c103={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f6b51,_0x2ccd33,_0x497cf9,_0x48b6d9){_0x48b6d9=_0x48b6d9||{};let _0x5a16d2=_0x2ccd33+'='+_0x497cf9;let _0x1b00e4=0x0;for(let _0x16724b=0x0,_0x564bce=_0x3f6b51['length'];_0x16724b<_0x564bce;_0x16724b++){const _0x2a7d2b=_0x3f6b51[_0x16724b];_0x5a16d2+=';\x20'+_0x2a7d2b;const _0x4bcbe0=_0x3f6b51[_0x2a7d2b];_0x3f6b51['push'](_0x4bcbe0);_0x564bce=_0x3f6b51['length'];if(_0x4bcbe0!==!![]){_0x5a16d2+='='+_0x4bcbe0;}}_0x48b6d9['cookie']=_0x5a16d2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4ddbbc,_0x2907f6){_0x4ddbbc=_0x4ddbbc||function(_0x4227e6){return _0x4227e6;};const _0x59fb36=_0x4ddbbc(new RegExp('(?:^|;\x20)'+_0x2907f6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x24cfe=function(_0x4c5f94,_0x21ad13){_0x4c5f94(++_0x21ad13);};_0x24cfe(_0xa708dd,_0xd9bfa0);return _0x59fb36?decodeURIComponent(_0x59fb36[0x1]):undefined;}};const _0x33252e=function(){const _0x4b4b33=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b4b33['test'](_0x27c103['removeCookie']['toString']());};_0x27c103['updateCookie']=_0x33252e;let _0x4385eb='';const _0x37c845=_0x27c103['updateCookie']();if(!_0x37c845){_0x27c103['setCookie'](['*'],'counter',0x1);}else if(_0x37c845){_0x4385eb=_0x27c103['getCookie'](null,'counter');}else{_0x27c103['removeCookie']();}};_0x1041e0();}(a477_0xd9bf,0x76));const a477_0xa708=function(_0x47cbbb,_0xd9bfa0){_0x47cbbb=_0x47cbbb-0x0;let _0xa708dd=a477_0xd9bf[_0x47cbbb];return _0xa708dd;};const a477_0x27c103=function(){let _0x3ce092=!![];return function(_0x2bc3c3,_0x40c199){const _0x43223c=_0x3ce092?function(){if(_0x40c199){const _0x459d56=_0x40c199[a477_0xa708('0x14')](_0x2bc3c3,arguments);_0x40c199=null;return _0x459d56;}}:function(){};_0x3ce092=![];return _0x43223c;};}();const a477_0x58b916=a477_0x27c103(this,function(){const _0x12a79a=function(){const _0x3a1bf9=_0x12a79a[a477_0xa708('0x10')](a477_0xa708('0x19'))()[a477_0xa708('0x4')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a1bf9['test'](a477_0x58b916);};return _0x12a79a();});a477_0x58b916();'use strict';const tesseract_1=require('@bastion/tesseract');module[a477_0xa708('0x13')]=class Suggestions extends tesseract_1[a477_0xa708('0x7')]{constructor(){super('suggestions',{'description':a477_0xa708('0x5'),'triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':['disable']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a477_0xa708('0xd')],'syntax':['suggestions',a477_0xa708('0xe')]});this[a477_0xa708('0x11')]=async(_0x2bd253,_0x12736f)=>{const _0x1a9a69=_0x2bd253['guild'];if(_0x12736f[a477_0xa708('0x3')]){_0x1a9a69['document'][a477_0xa708('0x16')]=undefined;delete _0x1a9a69['document'][a477_0xa708('0x16')];}else{_0x1a9a69[a477_0xa708('0x18')][a477_0xa708('0x16')]=_0x2bd253[a477_0xa708('0x9')]['id'];}await _0x1a9a69[a477_0xa708('0x18')][a477_0xa708('0x2')]();await _0x2bd253['channel'][a477_0xa708('0xf')]({'embed':{'color':_0x1a9a69['document'][a477_0xa708('0x16')]?tesseract_1[a477_0xa708('0x15')][a477_0xa708('0x12')][a477_0xa708('0x6')]:tesseract_1[a477_0xa708('0x15')][a477_0xa708('0x12')][a477_0xa708('0xc')],'description':this[a477_0xa708('0xa')]['locale']['getString'](_0x2bd253[a477_0xa708('0x1')][a477_0xa708('0x18')][a477_0xa708('0x8')],'info',_0x1a9a69['document'][a477_0xa708('0x16')]?a477_0xa708('0x0'):'suggestionsDisable',_0x2bd253[a477_0xa708('0xb')][a477_0xa708('0x17')])}})['catch'](()=>{});};}};