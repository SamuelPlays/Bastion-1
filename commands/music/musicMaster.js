const a114_0x264c=['exec','RED','send','catch','musicMasterRoleAdd','GREEN','getString','Constants','info','../../utils/constants','musicDisabledPublic','MANAGE_GUILD','musicMaster\x20--role\x20ROLE_ID','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20Bastion\x27s\x20Music\x20Master\x20role.','resolver','author','musicMaster','guild','language','errors','role','name','document','@bastion/tesseract','music','exports','test','tag','apply','resolveRole','COLORS','constructor','save','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','musicMasterRoleRemove','client'];(function(_0x2e25de,_0x5b8659){const _0x264cb2=function(_0x1e0173){while(--_0x1e0173){_0x2e25de['push'](_0x2e25de['shift']());}},_0x4a915c=function(){const _0x41f4a6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2032dc,_0x43e65a,_0x15bc2e,_0x7cac68){_0x7cac68=_0x7cac68||{};let _0x5450ed=_0x43e65a+'='+_0x15bc2e,_0x39ada8=0x0;for(let _0x1349e9=0x0,_0x4c582b=_0x2032dc['length'];_0x1349e9<_0x4c582b;_0x1349e9++){const _0x4b797d=_0x2032dc[_0x1349e9];_0x5450ed+=';\x20'+_0x4b797d;const _0x5c3ca6=_0x2032dc[_0x4b797d];_0x2032dc['push'](_0x5c3ca6),_0x4c582b=_0x2032dc['length'],_0x5c3ca6!==!![]&&(_0x5450ed+='='+_0x5c3ca6);}_0x7cac68['cookie']=_0x5450ed;},'removeCookie':function(){return'dev';},'getCookie':function(_0x307a90,_0x313482){_0x307a90=_0x307a90||function(_0x4b1652){return _0x4b1652;};const _0x204954=_0x307a90(new RegExp('(?:^|;\x20)'+_0x313482['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x336ba3=function(_0x1c6f77,_0x1344ec){_0x1c6f77(++_0x1344ec);};return _0x336ba3(_0x264cb2,_0x5b8659),_0x204954?decodeURIComponent(_0x204954[0x1]):undefined;}},_0xb3894e=function(){const _0x3378cc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3378cc['test'](_0x41f4a6['removeCookie']['toString']());};_0x41f4a6['updateCookie']=_0xb3894e;let _0x326573='';const _0x1f9d4f=_0x41f4a6['updateCookie']();if(!_0x1f9d4f)_0x41f4a6['setCookie'](['*'],'counter',0x1);else _0x1f9d4f?_0x326573=_0x41f4a6['getCookie'](null,'counter'):_0x41f4a6['removeCookie']();};_0x4a915c();}(a114_0x264c,0x1c7));const a114_0x4a91=function(_0x2e25de,_0x5b8659){_0x2e25de=_0x2e25de-0x1a4;let _0x264cb2=a114_0x264c[_0x2e25de];return _0x264cb2;};const a114_0x532fb0=a114_0x4a91,a114_0xb3894e=function(){let _0x1f9d4f=!![];return function(_0x2032dc,_0x43e65a){const _0x15bc2e=_0x1f9d4f?function(){const _0x4fdf85=a114_0x4a91;if(_0x43e65a){const _0x7cac68=_0x43e65a[_0x4fdf85(0x1a9)](_0x2032dc,arguments);return _0x43e65a=null,_0x7cac68;}}:function(){};return _0x1f9d4f=![],_0x15bc2e;};}(),a114_0x41f4a6=a114_0xb3894e(this,function(){const _0x5450ed=function(){const _0x3ee606=a114_0x4a91,_0x39ada8=_0x5450ed[_0x3ee606(0x1ac)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x3ee606(0x1ac)](_0x3ee606(0x1ae));return!_0x39ada8[_0x3ee606(0x1a7)](a114_0x41f4a6);};return _0x5450ed();});a114_0x41f4a6();'use strict';const tesseract_1=require(a114_0x532fb0(0x1a4)),constants=require(a114_0x532fb0(0x1ba));module[a114_0x532fb0(0x1a6)]=class MusicMaster extends tesseract_1['Command']{constructor(){const _0xd45581=a114_0x532fb0;super(_0xd45581(0x1c1),{'description':_0xd45581(0x1be),'triggers':[],'arguments':{'alias':{'role':['r']},'string':[_0xd45581(0x1c5)]},'scope':_0xd45581(0x1c2),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0xd45581(0x1bc)],'syntax':[_0xd45581(0x1bd),_0xd45581(0x1c1)]}),this[_0xd45581(0x1b1)]=async(_0x1349e9,_0x4c582b)=>{const _0x13fa9f=_0xd45581,_0x4b797d=_0x1349e9[_0x13fa9f(0x1c2)];if(!_0x4b797d['document'][_0x13fa9f(0x1a5)]||!_0x4b797d[_0x13fa9f(0x1c7)][_0x13fa9f(0x1a5)]['enabled'])return await _0x1349e9['channel']['send']({'embed':{'color':tesseract_1[_0x13fa9f(0x1b8)][_0x13fa9f(0x1ab)][_0x13fa9f(0x1b2)],'description':this['client']['locale'][_0x13fa9f(0x1b7)](_0x1349e9['guild']['document'][_0x13fa9f(0x1c3)],_0x13fa9f(0x1c4),constants['isPublicBastion'](_0x1349e9[_0x13fa9f(0x1c0)])?_0x13fa9f(0x1bb):'musicDisabled')}})[_0x13fa9f(0x1b4)](()=>{});const _0x5c3ca6=this[_0x13fa9f(0x1b0)][_0x13fa9f(0x1bf)][_0x13fa9f(0x1aa)](_0x4b797d,_0x4c582b[_0x13fa9f(0x1c5)]);_0x4b797d[_0x13fa9f(0x1c7)][_0x13fa9f(0x1a5)]={..._0x4b797d[_0x13fa9f(0x1c7)]['music'],'roleId':_0x5c3ca6?_0x5c3ca6['id']:undefined},_0x4b797d[_0x13fa9f(0x1c7)][_0x13fa9f(0x1ad)](),await _0x1349e9['channel'][_0x13fa9f(0x1b3)]({'embed':{'color':_0x5c3ca6?tesseract_1['Constants']['COLORS'][_0x13fa9f(0x1b6)]:tesseract_1[_0x13fa9f(0x1b8)][_0x13fa9f(0x1ab)][_0x13fa9f(0x1b2)],'description':this[_0x13fa9f(0x1b0)]['locale'][_0x13fa9f(0x1b7)](_0x1349e9[_0x13fa9f(0x1c2)]['document']['language'],_0x13fa9f(0x1b9),_0x5c3ca6?_0x13fa9f(0x1b5):_0x13fa9f(0x1af),_0x1349e9[_0x13fa9f(0x1c0)][_0x13fa9f(0x1a8)],_0x5c3ca6?_0x5c3ca6[_0x13fa9f(0x1c6)]:null)}})[_0x13fa9f(0x1b4)](()=>{});};}};