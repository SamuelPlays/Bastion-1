const a600_0x5088=['Inviter','Constants','maxAge','apply','Listener','exports','../utils/durations','push','code','Expires','@bastion/tesseract','exec','humanize','LISTENER_MODE','temporary','Invite\x20Channel','inviteCreate','channel','guild','maxUses','createdTimestamp','compile','createLog','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','between','test','toString','Temporary\x20Membership','tag'];(function(_0x5527c5,_0x508812){const _0x3a303b=function(_0x493acf){while(--_0x493acf){_0x5527c5['push'](_0x5527c5['shift']());}};const _0x21dd6f=function(){const _0x4972ab={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18f1c7,_0x24e7ca,_0x50f30a,_0x42c181){_0x42c181=_0x42c181||{};let _0x2c6970=_0x24e7ca+'='+_0x50f30a;let _0x84c7db=0x0;for(let _0x22b7e6=0x0,_0x329175=_0x18f1c7['length'];_0x22b7e6<_0x329175;_0x22b7e6++){const _0x54a527=_0x18f1c7[_0x22b7e6];_0x2c6970+=';\x20'+_0x54a527;const _0x2fc648=_0x18f1c7[_0x54a527];_0x18f1c7['push'](_0x2fc648);_0x329175=_0x18f1c7['length'];if(_0x2fc648!==!![]){_0x2c6970+='='+_0x2fc648;}}_0x42c181['cookie']=_0x2c6970;},'removeCookie':function(){return'dev';},'getCookie':function(_0x440472,_0x10a42c){_0x440472=_0x440472||function(_0x275a35){return _0x275a35;};const _0x23483b=_0x440472(new RegExp('(?:^|;\x20)'+_0x10a42c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x52a1e9=function(_0x34c565,_0x16fb97){_0x34c565(++_0x16fb97);};_0x52a1e9(_0x3a303b,_0x508812);return _0x23483b?decodeURIComponent(_0x23483b[0x1]):undefined;}};const _0x47e1b3=function(){const _0x4e51a0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4e51a0['test'](_0x4972ab['removeCookie']['toString']());};_0x4972ab['updateCookie']=_0x47e1b3;let _0x268221='';const _0x18daf9=_0x4972ab['updateCookie']();if(!_0x18daf9){_0x4972ab['setCookie'](['*'],'counter',0x1);}else if(_0x18daf9){_0x268221=_0x4972ab['getCookie'](null,'counter');}else{_0x4972ab['removeCookie']();}};_0x21dd6f();}(a600_0x5088,0x7a));const a600_0x3a30=function(_0x5527c5,_0x508812){_0x5527c5=_0x5527c5-0x0;let _0x3a303b=a600_0x5088[_0x5527c5];return _0x3a303b;};const a600_0x4972ab=function(){let _0x2584e2=!![];return function(_0x5e2de8,_0x328f95){const _0x366993=_0x2584e2?function(){if(_0x328f95){const _0x8a6af0=_0x328f95[a600_0x3a30('0x1')](_0x5e2de8,arguments);_0x328f95=null;return _0x8a6af0;}}:function(){};_0x2584e2=![];return _0x366993;};}();const a600_0x493acf=a600_0x4972ab(this,function(){const _0xfd78df=function(){const _0x33533c=_0xfd78df[a600_0x3a30('0x16')](a600_0x3a30('0x15'))()[a600_0x3a30('0x13')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x33533c[a600_0x3a30('0x18')](a600_0x493acf);};return _0xfd78df();});a600_0x493acf();'use strict';const tesseract_1=require(a600_0x3a30('0x8'));const durations=require(a600_0x3a30('0x4'));module[a600_0x3a30('0x3')]=class InviteCreateListener extends tesseract_1[a600_0x3a30('0x2')]{constructor(){super('inviteCreate',{'mode':tesseract_1[a600_0x3a30('0x1d')][a600_0x3a30('0xb')]['ON']});this[a600_0x3a30('0x9')]=async _0x212548=>{const _0x1a8856=_0x212548[a600_0x3a30('0x10')];const _0x575f43=[{'name':'Invite\x20Code','value':_0x212548[a600_0x3a30('0x6')],'inline':!![]},{'name':a600_0x3a30('0xd'),'value':_0x212548[a600_0x3a30('0xf')],'inline':!![]}];if(_0x212548['inviter']){_0x575f43['push']({'name':a600_0x3a30('0x1c'),'value':_0x212548['inviter'][a600_0x3a30('0x1b')],'inline':!![]});}if(_0x212548['maxUses']){_0x575f43['push']({'name':'Max\x20Uses','value':_0x212548[a600_0x3a30('0x11')][a600_0x3a30('0x19')](),'inline':!![]});}if(_0x212548['maxAge']){_0x575f43[a600_0x3a30('0x5')]({'name':a600_0x3a30('0x7'),'value':durations[a600_0x3a30('0xa')](durations[a600_0x3a30('0x17')](_0x212548[a600_0x3a30('0x0')]*0x3e8)),'inline':!![]});}_0x1a8856[a600_0x3a30('0x14')]({'event':a600_0x3a30('0xe'),'fields':_0x575f43,'footer':_0x212548[a600_0x3a30('0xc')]?a600_0x3a30('0x1a'):undefined,'timestamp':_0x212548[a600_0x3a30('0x12')]});};}};