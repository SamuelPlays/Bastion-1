const a217_0x1265=['default','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','constructor','defineProperty','mongoose','model','Guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','TextChannel','__esModule'];(function(_0x3a597b,_0x2d5e04){const _0x12654e=function(_0x311d75){while(--_0x311d75){_0x3a597b['push'](_0x3a597b['shift']());}},_0x5f5706=function(){const _0x2fbdce={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa40f76,_0x186173,_0x548510,_0x256656){_0x256656=_0x256656||{};let _0x2b2e92=_0x186173+'='+_0x548510,_0x38dfaf=0x0;for(let _0x3745bd=0x0,_0x5d09c8=_0xa40f76['length'];_0x3745bd<_0x5d09c8;_0x3745bd++){const _0x1f4c3d=_0xa40f76[_0x3745bd];_0x2b2e92+=';\x20'+_0x1f4c3d;const _0x26d333=_0xa40f76[_0x1f4c3d];_0xa40f76['push'](_0x26d333),_0x5d09c8=_0xa40f76['length'],_0x26d333!==!![]&&(_0x2b2e92+='='+_0x26d333);}_0x256656['cookie']=_0x2b2e92;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43a8e6,_0x96ea39){_0x43a8e6=_0x43a8e6||function(_0x6499fb){return _0x6499fb;};const _0x307cde=_0x43a8e6(new RegExp('(?:^|;\x20)'+_0x96ea39['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4df9f2=function(_0x5a6e18,_0x4e82c9){_0x5a6e18(++_0x4e82c9);};return _0x4df9f2(_0x12654e,_0x2d5e04),_0x307cde?decodeURIComponent(_0x307cde[0x1]):undefined;}},_0x529299=function(){const _0x4522b1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4522b1['test'](_0x2fbdce['removeCookie']['toString']());};_0x2fbdce['updateCookie']=_0x529299;let _0x15d12f='';const _0xa64aa8=_0x2fbdce['updateCookie']();if(!_0xa64aa8)_0x2fbdce['setCookie'](['*'],'counter',0x1);else _0xa64aa8?_0x15d12f=_0x2fbdce['getCookie'](null,'counter'):_0x2fbdce['removeCookie']();};_0x5f5706();}(a217_0x1265,0x1b9));const a217_0x5f57=function(_0x3a597b,_0x2d5e04){_0x3a597b=_0x3a597b-0x165;let _0x12654e=a217_0x1265[_0x3a597b];return _0x12654e;};const a217_0x5ec548=a217_0x5f57,a217_0x529299=function(){let _0xa64aa8=!![];return function(_0xa40f76,_0x186173){const _0x548510=_0xa64aa8?function(){const _0x1172f4=a217_0x5f57;if(_0x186173){const _0x256656=_0x186173[_0x1172f4(0x166)](_0xa40f76,arguments);return _0x186173=null,_0x256656;}}:function(){};return _0xa64aa8=![],_0x548510;};}(),a217_0x2fbdce=a217_0x529299(this,function(){const _0x2b2e92=function(){const _0x9871cb=a217_0x5f57,_0x38dfaf=_0x2b2e92[_0x9871cb(0x167)](_0x9871cb(0x165))()[_0x9871cb(0x167)](_0x9871cb(0x16c));return!_0x38dfaf['test'](a217_0x2fbdce);};return _0x2b2e92();});a217_0x2fbdce();'use strict';Object[a217_0x5ec548(0x168)](exports,a217_0x5ec548(0x16e),{'value':!![]});const mongoose=require(a217_0x5ec548(0x169));exports[a217_0x5ec548(0x16f)]=mongoose[a217_0x5ec548(0x16a)](a217_0x5ec548(0x16d),new mongoose['Schema']({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':a217_0x5ec548(0x16b)},'language':{'type':String},'blacklisted':{'type':Boolean},'ignoredFilters':{'type':{'inviteFilter':{'type':Boolean},'linkFilter':{'type':Boolean},'messageFilter':{'type':Boolean}}},'voting':{'type':Boolean},'disabledCommands':{'type':[String]}}));