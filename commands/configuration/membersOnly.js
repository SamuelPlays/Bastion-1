const a26_0x1a0e=['exports','tag','language','Command','COLORS','test','constructor','apply','guild','info','send','document','membersOnly','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','locale','catch','client','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Members\x20Only\x20mode\x20in\x20the\x20server.\x20If\x20enabled,\x20only\x20the\x20members\x20who\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server\x20can\x20use\x20Bastion.','Constants','channel','membersOnlyEnable','RED','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','author'];(function(_0x4440b9,_0x494cca){const _0x1a0ea9=function(_0x42cc14){while(--_0x42cc14){_0x4440b9['push'](_0x4440b9['shift']());}},_0x3df010=function(){const _0x318e82={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x330e68,_0x53bf24,_0x34ea67,_0x3a9e1e){_0x3a9e1e=_0x3a9e1e||{};let _0x452983=_0x53bf24+'='+_0x34ea67,_0x34fc73=0x0;for(let _0x43e903=0x0,_0x2e2560=_0x330e68['length'];_0x43e903<_0x2e2560;_0x43e903++){const _0x28a5cf=_0x330e68[_0x43e903];_0x452983+=';\x20'+_0x28a5cf;const _0x3669b6=_0x330e68[_0x28a5cf];_0x330e68['push'](_0x3669b6),_0x2e2560=_0x330e68['length'],_0x3669b6!==!![]&&(_0x452983+='='+_0x3669b6);}_0x3a9e1e['cookie']=_0x452983;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4b47b5,_0x24c964){_0x4b47b5=_0x4b47b5||function(_0x36b74d){return _0x36b74d;};const _0x2aeaf2=_0x4b47b5(new RegExp('(?:^|;\x20)'+_0x24c964['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3c3f9e=function(_0x138b5b,_0xfc6fdd){_0x138b5b(++_0xfc6fdd);};return _0x3c3f9e(_0x1a0ea9,_0x494cca),_0x2aeaf2?decodeURIComponent(_0x2aeaf2[0x1]):undefined;}},_0x39da3f=function(){const _0xca7210=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xca7210['test'](_0x318e82['removeCookie']['toString']());};_0x318e82['updateCookie']=_0x39da3f;let _0x317797='';const _0xf643ca=_0x318e82['updateCookie']();if(!_0xf643ca)_0x318e82['setCookie'](['*'],'counter',0x1);else _0xf643ca?_0x317797=_0x318e82['getCookie'](null,'counter'):_0x318e82['removeCookie']();};_0x3df010();}(a26_0x1a0e,0x1db));const a26_0x3df0=function(_0x4440b9,_0x494cca){_0x4440b9=_0x4440b9-0x162;let _0x1a0ea9=a26_0x1a0e[_0x4440b9];return _0x1a0ea9;};const a26_0xfa20a5=a26_0x3df0,a26_0x39da3f=function(){let _0xf643ca=!![];return function(_0x330e68,_0x53bf24){const _0x34ea67=_0xf643ca?function(){const _0x459d55=a26_0x3df0;if(_0x53bf24){const _0x3a9e1e=_0x53bf24[_0x459d55(0x169)](_0x330e68,arguments);return _0x53bf24=null,_0x3a9e1e;}}:function(){};return _0xf643ca=![],_0x34ea67;};}(),a26_0x318e82=a26_0x39da3f(this,function(){const _0x452983=function(){const _0x13c812=a26_0x3df0,_0x34fc73=_0x452983['constructor'](_0x13c812(0x170))()[_0x13c812(0x168)](_0x13c812(0x179));return!_0x34fc73[_0x13c812(0x167)](a26_0x318e82);};return _0x452983();});a26_0x318e82();'use strict';const tesseract_1=require(a26_0xfa20a5(0x16f));module[a26_0xfa20a5(0x162)]=class MembersOnlyCommand extends tesseract_1[a26_0xfa20a5(0x165)]{constructor(){const _0x35603e=a26_0xfa20a5;super(_0x35603e(0x16e),{'description':_0x35603e(0x174),'triggers':[],'arguments':{},'scope':_0x35603e(0x16a),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[]}),this['exec']=async _0x43e903=>{const _0x513695=_0x35603e,_0x2e2560=_0x43e903[_0x513695(0x16a)];_0x2e2560[_0x513695(0x16d)]['membersOnly']?(_0x2e2560['document'][_0x513695(0x16e)]=undefined,delete _0x2e2560[_0x513695(0x16d)][_0x513695(0x16e)]):_0x2e2560[_0x513695(0x16d)][_0x513695(0x16e)]=!![],await _0x2e2560[_0x513695(0x16d)]['save'](),await _0x43e903[_0x513695(0x176)][_0x513695(0x16c)]({'embed':{'color':_0x2e2560['document']['membersOnly']?tesseract_1[_0x513695(0x175)][_0x513695(0x166)]['GREEN']:tesseract_1[_0x513695(0x175)]['COLORS'][_0x513695(0x178)],'description':this[_0x513695(0x173)][_0x513695(0x171)]['getString'](_0x43e903[_0x513695(0x16a)][_0x513695(0x16d)][_0x513695(0x164)],_0x513695(0x16b),_0x2e2560[_0x513695(0x16d)][_0x513695(0x16e)]?_0x513695(0x177):'membersOnlyDisable',_0x43e903[_0x513695(0x17a)][_0x513695(0x163)])}})[_0x513695(0x172)](()=>{});};}};