const a398_0x21de=['model','__esModule','defineProperty','constructor','Case','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','default','mongoose','index','apply','compile','Schema','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x22ada8,_0x21de04){const _0x162dfb=function(_0x38f276){while(--_0x38f276){_0x22ada8['push'](_0x22ada8['shift']());}};const _0xfb4bac=function(){const _0x5970eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xe0b14b,_0x3c4ab6,_0x266493,_0x254c0b){_0x254c0b=_0x254c0b||{};let _0x43c30a=_0x3c4ab6+'='+_0x266493;let _0x39f1e9=0x0;for(let _0x19d6af=0x0,_0x15ea48=_0xe0b14b['length'];_0x19d6af<_0x15ea48;_0x19d6af++){const _0x4c321d=_0xe0b14b[_0x19d6af];_0x43c30a+=';\x20'+_0x4c321d;const _0x25a3c5=_0xe0b14b[_0x4c321d];_0xe0b14b['push'](_0x25a3c5);_0x15ea48=_0xe0b14b['length'];if(_0x25a3c5!==!![]){_0x43c30a+='='+_0x25a3c5;}}_0x254c0b['cookie']=_0x43c30a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1ac180,_0x429e09){_0x1ac180=_0x1ac180||function(_0x4b8cfd){return _0x4b8cfd;};const _0x3e046d=_0x1ac180(new RegExp('(?:^|;\x20)'+_0x429e09['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x113eca=function(_0x45cc23,_0x4d0b10){_0x45cc23(++_0x4d0b10);};_0x113eca(_0x162dfb,_0x21de04);return _0x3e046d?decodeURIComponent(_0x3e046d[0x1]):undefined;}};const _0x44e19f=function(){const _0x2edeee=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2edeee['test'](_0x5970eb['removeCookie']['toString']());};_0x5970eb['updateCookie']=_0x44e19f;let _0x1feb4f='';const _0x11f80b=_0x5970eb['updateCookie']();if(!_0x11f80b){_0x5970eb['setCookie'](['*'],'counter',0x1);}else if(_0x11f80b){_0x1feb4f=_0x5970eb['getCookie'](null,'counter');}else{_0x5970eb['removeCookie']();}};_0xfb4bac();}(a398_0x21de,0xf5));const a398_0x162d=function(_0x22ada8,_0x21de04){_0x22ada8=_0x22ada8-0x0;let _0x162dfb=a398_0x21de[_0x22ada8];return _0x162dfb;};const a398_0x5970eb=function(){let _0x113eca=!![];return function(_0x4b8cfd,_0x45cc23){const _0x4d0b10=_0x113eca?function(){if(_0x45cc23){const _0x2edeee=_0x45cc23[a398_0x162d('0x3')](_0x4b8cfd,arguments);_0x45cc23=null;return _0x2edeee;}}:function(){};_0x113eca=![];return _0x4d0b10;};}();const a398_0x38f276=a398_0x5970eb(this,function(){const _0x18acb1=function(){const _0x2a4ef8=_0x18acb1[a398_0x162d('0xa')](a398_0x162d('0x6'))()[a398_0x162d('0x4')](a398_0x162d('0xd'));return!_0x2a4ef8[a398_0x162d('0xc')](a398_0x38f276);};return _0x18acb1();});a398_0x38f276();'use strict';Object[a398_0x162d('0x9')](exports,a398_0x162d('0x8'),{'value':!![]});const mongoose=require(a398_0x162d('0x1'));const caseSchema=new mongoose[(a398_0x162d('0x5'))]({'guild':{'type':String,'required':!![],'ref':'Guild'},'number':{'type':Number,'required':!![],'default':0x1},'messageId':{'type':String,'required':!![]}});caseSchema[a398_0x162d('0x2')]({'guild':0x1,'number':0x1},{'unique':!![]});exports[a398_0x162d('0x0')]=mongoose[a398_0x162d('0x7')](a398_0x162d('0xb'),caseSchema);