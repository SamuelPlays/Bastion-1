const a285_0x4f2a=['lockdownChannelRemove','language','guild','update','document','exports','info','exec','tag','MANAGE_MESSAGES','MANAGE_GUILD','author','MANAGE_CHANNELS','Constants','client','send','permissionOverwrites','has','It\x20allows\x20you\x20lockdown\x20a\x20channel\x20in\x20the\x20server\x20from\x20users\x20who\x20don\x27t\x20have\x20permission\x20to\x20manage\x20messages\x20or\x20the\x20channel.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','COLORS','@bastion/tesseract','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','GREEN','remove','lockdownChannel','Command','compile','test','catch','lockdown\x20--remove','allow'];(function(_0x18bf5c,_0x4f2a1c){const _0x517aa2=function(_0x471670){while(--_0x471670){_0x18bf5c['push'](_0x18bf5c['shift']());}};const _0x11b4f=function(){const _0x44fdb1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x308a82,_0x5f18f0,_0x3b973f,_0x446590){_0x446590=_0x446590||{};let _0xb50cc5=_0x5f18f0+'='+_0x3b973f;let _0x475d4f=0x0;for(let _0x216dc7=0x0,_0x52c044=_0x308a82['length'];_0x216dc7<_0x52c044;_0x216dc7++){const _0x3e4a37=_0x308a82[_0x216dc7];_0xb50cc5+=';\x20'+_0x3e4a37;const _0x360c95=_0x308a82[_0x3e4a37];_0x308a82['push'](_0x360c95);_0x52c044=_0x308a82['length'];if(_0x360c95!==!![]){_0xb50cc5+='='+_0x360c95;}}_0x446590['cookie']=_0xb50cc5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1c38f4,_0x2b433c){_0x1c38f4=_0x1c38f4||function(_0x2ba73c){return _0x2ba73c;};const _0x2e3d78=_0x1c38f4(new RegExp('(?:^|;\x20)'+_0x2b433c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4a2e80=function(_0x42f4e8,_0x4b999b){_0x42f4e8(++_0x4b999b);};_0x4a2e80(_0x517aa2,_0x4f2a1c);return _0x2e3d78?decodeURIComponent(_0x2e3d78[0x1]):undefined;}};const _0x1d3c68=function(){const _0xc6e585=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xc6e585['test'](_0x44fdb1['removeCookie']['toString']());};_0x44fdb1['updateCookie']=_0x1d3c68;let _0x5986a0='';const _0x4b74fa=_0x44fdb1['updateCookie']();if(!_0x4b74fa){_0x44fdb1['setCookie'](['*'],'counter',0x1);}else if(_0x4b74fa){_0x5986a0=_0x44fdb1['getCookie'](null,'counter');}else{_0x44fdb1['removeCookie']();}};_0x11b4f();}(a285_0x4f2a,0xcc));const a285_0x517a=function(_0x18bf5c,_0x4f2a1c){_0x18bf5c=_0x18bf5c-0x0;let _0x517aa2=a285_0x4f2a[_0x18bf5c];return _0x517aa2;};const a285_0x44fdb1=function(){let _0x59a0c1=!![];return function(_0x554559,_0x45aaa6){const _0x313513=_0x59a0c1?function(){if(_0x45aaa6){const _0x3e9559=_0x45aaa6['apply'](_0x554559,arguments);_0x45aaa6=null;return _0x3e9559;}}:function(){};_0x59a0c1=![];return _0x313513;};}();const a285_0x471670=a285_0x44fdb1(this,function(){const _0x468b56=function(){const _0x2aae49=_0x468b56['constructor'](a285_0x517a('0xd'))()[a285_0x517a('0x16')](a285_0x517a('0x11'));return!_0x2aae49[a285_0x517a('0x17')](a285_0x471670);};return _0x468b56();});a285_0x471670();'use strict';const tesseract_1=require(a285_0x517a('0x10'));module[a285_0x517a('0x20')]=class LockdownCommand extends tesseract_1[a285_0x517a('0x15')]{constructor(){super('lockdown',{'description':a285_0x517a('0xc'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[a285_0x517a('0x13')]},'scope':a285_0x517a('0x1d'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a285_0x517a('0x6')],'userPermissions':[a285_0x517a('0x4')],'syntax':['lockdown',a285_0x517a('0x19')]});this[a285_0x517a('0x1')]=async(_0x434957,_0x36311b)=>{for(const _0x5866f9 of _0x434957['channel'][a285_0x517a('0xa')]['values']()){if(_0x5866f9['allow'][a285_0x517a('0xb')](a285_0x517a('0x3'))||_0x5866f9[a285_0x517a('0x1a')][a285_0x517a('0xb')](a285_0x517a('0x6')))continue;_0x5866f9[a285_0x517a('0x1e')]({'SEND_MESSAGES':_0x36311b['remove']?null:![]});}await _0x434957['channel'][a285_0x517a('0x9')]({'embed':{'color':_0x36311b[a285_0x517a('0x13')]?tesseract_1[a285_0x517a('0x7')]['COLORS'][a285_0x517a('0x12')]:tesseract_1[a285_0x517a('0x7')][a285_0x517a('0xf')]['ORANGE'],'description':this[a285_0x517a('0x8')]['locale'][a285_0x517a('0xe')](_0x434957[a285_0x517a('0x1d')][a285_0x517a('0x1f')][a285_0x517a('0x1c')],a285_0x517a('0x0'),_0x36311b[a285_0x517a('0x13')]?a285_0x517a('0x14'):a285_0x517a('0x1b'),_0x434957[a285_0x517a('0x5')][a285_0x517a('0x2')])}})[a285_0x517a('0x18')](()=>{});};}};