const a620_0x2863=['__esModule','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','defineProperty','compile','Schema','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','TextChannel'];(function(_0x3e4a65,_0x286358){const _0x646e70=function(_0x20f319){while(--_0x20f319){_0x3e4a65['push'](_0x3e4a65['shift']());}};const _0x3b4385=function(){const _0x280592={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1193f8,_0x1b1ca2,_0x26299a,_0x451c45){_0x451c45=_0x451c45||{};let _0x44474b=_0x1b1ca2+'='+_0x26299a;let _0x2735ed=0x0;for(let _0x507a00=0x0,_0x3bb7df=_0x1193f8['length'];_0x507a00<_0x3bb7df;_0x507a00++){const _0x3cee3b=_0x1193f8[_0x507a00];_0x44474b+=';\x20'+_0x3cee3b;const _0x5753c2=_0x1193f8[_0x3cee3b];_0x1193f8['push'](_0x5753c2);_0x3bb7df=_0x1193f8['length'];if(_0x5753c2!==!![]){_0x44474b+='='+_0x5753c2;}}_0x451c45['cookie']=_0x44474b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e8573,_0x58a801){_0x5e8573=_0x5e8573||function(_0x231106){return _0x231106;};const _0x5c0a1a=_0x5e8573(new RegExp('(?:^|;\x20)'+_0x58a801['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1db59a=function(_0x3eba94,_0x158da5){_0x3eba94(++_0x158da5);};_0x1db59a(_0x646e70,_0x286358);return _0x5c0a1a?decodeURIComponent(_0x5c0a1a[0x1]):undefined;}};const _0x460ea1=function(){const _0x58f557=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x58f557['test'](_0x280592['removeCookie']['toString']());};_0x280592['updateCookie']=_0x460ea1;let _0x28713d='';const _0x34f3ef=_0x280592['updateCookie']();if(!_0x34f3ef){_0x280592['setCookie'](['*'],'counter',0x1);}else if(_0x34f3ef){_0x28713d=_0x280592['getCookie'](null,'counter');}else{_0x280592['removeCookie']();}};_0x3b4385();}(a620_0x2863,0x169));const a620_0x646e=function(_0x3e4a65,_0x286358){_0x3e4a65=_0x3e4a65-0x0;let _0x646e70=a620_0x2863[_0x3e4a65];return _0x646e70;};const a620_0x280592=function(){let _0x1db59a=!![];return function(_0x231106,_0x3eba94){const _0x158da5=_0x1db59a?function(){if(_0x3eba94){const _0x58f557=_0x3eba94[a620_0x646e('0x7')](_0x231106,arguments);_0x3eba94=null;return _0x58f557;}}:function(){};_0x1db59a=![];return _0x158da5;};}();const a620_0x20f319=a620_0x280592(this,function(){const _0x4ac96f=function(){const _0x5dcc65=_0x4ac96f[a620_0x646e('0x5')](a620_0x646e('0x6'))()[a620_0x646e('0x3')](a620_0x646e('0x0'));return!_0x5dcc65[a620_0x646e('0x1')](a620_0x20f319);};return _0x4ac96f();});a620_0x20f319();'use strict';Object[a620_0x646e('0x2')](exports,a620_0x646e('0x9'),{'value':!![]});const mongoose=require('mongoose');const giveawaySchema=new mongoose[(a620_0x646e('0x4'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a620_0x646e('0x8')},'guild':{'type':String,'required':!![],'ref':'Guild'},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose['model']('Giveaway',giveawaySchema);