const a624_0xf8b1=['apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','TextChannel','mongoose','Poll','Guild','__esModule','compile','model','constructor'];(function(_0x1f6ac3,_0xf8b12f){const _0x43aed7=function(_0x3127cc){while(--_0x3127cc){_0x1f6ac3['push'](_0x1f6ac3['shift']());}};const _0x4731b3=function(){const _0x4b835e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x505d63,_0x25f944,_0x2862f2,_0x19aac4){_0x19aac4=_0x19aac4||{};let _0x5546d9=_0x25f944+'='+_0x2862f2;let _0xf07923=0x0;for(let _0x3706af=0x0,_0x573f68=_0x505d63['length'];_0x3706af<_0x573f68;_0x3706af++){const _0x3b2287=_0x505d63[_0x3706af];_0x5546d9+=';\x20'+_0x3b2287;const _0xf9558b=_0x505d63[_0x3b2287];_0x505d63['push'](_0xf9558b);_0x573f68=_0x505d63['length'];if(_0xf9558b!==!![]){_0x5546d9+='='+_0xf9558b;}}_0x19aac4['cookie']=_0x5546d9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48f1a6,_0x18ca1c){_0x48f1a6=_0x48f1a6||function(_0x4ec256){return _0x4ec256;};const _0x39ce3b=_0x48f1a6(new RegExp('(?:^|;\x20)'+_0x18ca1c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x180f67=function(_0x5507e0,_0x3e03af){_0x5507e0(++_0x3e03af);};_0x180f67(_0x43aed7,_0xf8b12f);return _0x39ce3b?decodeURIComponent(_0x39ce3b[0x1]):undefined;}};const _0x36134f=function(){const _0x3cc7d6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3cc7d6['test'](_0x4b835e['removeCookie']['toString']());};_0x4b835e['updateCookie']=_0x36134f;let _0x195c6d='';const _0x69ae8=_0x4b835e['updateCookie']();if(!_0x69ae8){_0x4b835e['setCookie'](['*'],'counter',0x1);}else if(_0x69ae8){_0x195c6d=_0x4b835e['getCookie'](null,'counter');}else{_0x4b835e['removeCookie']();}};_0x4731b3();}(a624_0xf8b1,0xe8));const a624_0x43ae=function(_0x1f6ac3,_0xf8b12f){_0x1f6ac3=_0x1f6ac3-0x0;let _0x43aed7=a624_0xf8b1[_0x1f6ac3];return _0x43aed7;};const a624_0x4b835e=function(){let _0x180f67=!![];return function(_0x4ec256,_0x5507e0){const _0x3e03af=_0x180f67?function(){if(_0x5507e0){const _0x3cc7d6=_0x5507e0[a624_0x43ae('0xa')](_0x4ec256,arguments);_0x5507e0=null;return _0x3cc7d6;}}:function(){};_0x180f67=![];return _0x3e03af;};}();const a624_0x3127cc=a624_0x4b835e(this,function(){const _0x1d5e7c=function(){const _0x32870d=_0x1d5e7c[a624_0x43ae('0x9')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a624_0x43ae('0x7')](a624_0x43ae('0x0'));return!_0x32870d[a624_0x43ae('0x1')](a624_0x3127cc);};return _0x1d5e7c();});a624_0x3127cc();'use strict';Object['defineProperty'](exports,a624_0x43ae('0x6'),{'value':!![]});const mongoose=require(a624_0x43ae('0x3'));const pollSchema=new mongoose['Schema']({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a624_0x43ae('0x2')},'guild':{'type':String,'required':!![],'ref':a624_0x43ae('0x5')},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose[a624_0x43ae('0x8')](a624_0x43ae('0x4'),pollSchema);