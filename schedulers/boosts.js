const a222_0x2606=['error','default','findById','exec','0\x200\x200\x20*\x20*\x20*','user','save','boosts','Logger','exports','Scheduler','test','client','../models/Guild','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','boostResetMonth','getMonth','updateMany'];(function(_0x5f1cb5,_0x4d1351){const _0x2606da=function(_0x138dc8){while(--_0x138dc8){_0x5f1cb5['push'](_0x5f1cb5['shift']());}},_0x3225e1=function(){const _0x247957={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x389def,_0x55299d,_0x438067,_0x3ff343){_0x3ff343=_0x3ff343||{};let _0x16ecf2=_0x55299d+'='+_0x438067,_0x203c3b=0x0;for(let _0x3f5cef=0x0,_0x9c625b=_0x389def['length'];_0x3f5cef<_0x9c625b;_0x3f5cef++){const _0x1fdb4e=_0x389def[_0x3f5cef];_0x16ecf2+=';\x20'+_0x1fdb4e;const _0x503b03=_0x389def[_0x1fdb4e];_0x389def['push'](_0x503b03),_0x9c625b=_0x389def['length'],_0x503b03!==!![]&&(_0x16ecf2+='='+_0x503b03);}_0x3ff343['cookie']=_0x16ecf2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2ff9d2,_0x584755){_0x2ff9d2=_0x2ff9d2||function(_0xc2f3e3){return _0xc2f3e3;};const _0x48e31a=_0x2ff9d2(new RegExp('(?:^|;\x20)'+_0x584755['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4baa54=function(_0x1635f7,_0x473823){_0x1635f7(++_0x473823);};return _0x4baa54(_0x2606da,_0x4d1351),_0x48e31a?decodeURIComponent(_0x48e31a[0x1]):undefined;}},_0xa0a39b=function(){const _0x295812=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x295812['test'](_0x247957['removeCookie']['toString']());};_0x247957['updateCookie']=_0xa0a39b;let _0xcad5d2='';const _0x55a6a1=_0x247957['updateCookie']();if(!_0x55a6a1)_0x247957['setCookie'](['*'],'counter',0x1);else _0x55a6a1?_0xcad5d2=_0x247957['getCookie'](null,'counter'):_0x247957['removeCookie']();};_0x3225e1();}(a222_0x2606,0xcc));const a222_0x3225=function(_0x5f1cb5,_0x4d1351){_0x5f1cb5=_0x5f1cb5-0x1ab;let _0x2606da=a222_0x2606[_0x5f1cb5];return _0x2606da;};const a222_0x412c83=a222_0x3225,a222_0xa0a39b=function(){let _0x55a6a1=!![];return function(_0x389def,_0x55299d){const _0x438067=_0x55a6a1?function(){if(_0x55299d){const _0x3ff343=_0x55299d['apply'](_0x389def,arguments);return _0x55299d=null,_0x3ff343;}}:function(){};return _0x55a6a1=![],_0x438067;};}(),a222_0x247957=a222_0xa0a39b(this,function(){const _0x16ecf2=function(){const _0x548fd8=a222_0x3225,_0x203c3b=_0x16ecf2[_0x548fd8(0x1ab)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x548fd8(0x1ac));return!_0x203c3b[_0x548fd8(0x1bb)](a222_0x247957);};return _0x16ecf2();});a222_0x247957();'use strict';const tesseract_1=require('@bastion/tesseract'),Config_1=require('../models/Config'),Guild_1=require(a222_0x412c83(0x1bd));module[a222_0x412c83(0x1b9)]=class Boosts extends tesseract_1[a222_0x412c83(0x1ba)]{constructor(){const _0x30b24d=a222_0x412c83;super(_0x30b24d(0x1b7),{'cronTime':_0x30b24d(0x1b4)}),this[_0x30b24d(0x1b3)]=async()=>{const _0x22e1c2=_0x30b24d;try{const _0x3f5cef=await Config_1['default'][_0x22e1c2(0x1b2)](this[_0x22e1c2(0x1bc)][_0x22e1c2(0x1b5)]['id']),_0x9c625b=new Date()[_0x22e1c2(0x1ae)]();if(_0x9c625b===_0x3f5cef[_0x22e1c2(0x1ad)])return;await Guild_1[_0x22e1c2(0x1b1)][_0x22e1c2(0x1af)]({},{'$unset':{'boosts':0x1}}),_0x3f5cef['boostResetMonth']=_0x9c625b,await _0x3f5cef[_0x22e1c2(0x1b6)]();}catch(_0x1fdb4e){tesseract_1[_0x22e1c2(0x1b8)][_0x22e1c2(0x1b0)](_0x1fdb4e);}};}};