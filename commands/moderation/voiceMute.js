const a523_0x8ecc=['voiceMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','locale','errors','@bastion/tesseract','constructor','member','compile','Constants','client','catch','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','ORANGE','BASTION_ERROR_TYPE','test','COLORS','channel','exports','MUTE_MEMBERS','set','tag','setMute','voice','language','canManage','resolveGuildMember','join','getString','It\x20allows\x20you\x20to\x20voice\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel.\x20Voice\x20muted\x20users\x20can\x27t\x20speak\x20in\x20the\x20voice\x20channels\x20they\x20are\x20muted.','Command','info','guild','Reason','user','resolver','rolePosition','send','document','unauthorized'];(function(_0x489ac5,_0x8ecc2){const _0x1eaa31=function(_0x2713e5){while(--_0x2713e5){_0x489ac5['push'](_0x489ac5['shift']());}};const _0x311703=function(){const _0x1820ef={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x58e927,_0x23d7e9,_0x46922f,_0x305f72){_0x305f72=_0x305f72||{};let _0x4599fa=_0x23d7e9+'='+_0x46922f;let _0x50250c=0x0;for(let _0x26d5a9=0x0,_0x3c830f=_0x58e927['length'];_0x26d5a9<_0x3c830f;_0x26d5a9++){const _0x598f1c=_0x58e927[_0x26d5a9];_0x4599fa+=';\x20'+_0x598f1c;const _0x46372f=_0x58e927[_0x598f1c];_0x58e927['push'](_0x46372f);_0x3c830f=_0x58e927['length'];if(_0x46372f!==!![]){_0x4599fa+='='+_0x46372f;}}_0x305f72['cookie']=_0x4599fa;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48e3cf,_0x496510){_0x48e3cf=_0x48e3cf||function(_0x461a4a){return _0x461a4a;};const _0x52bb93=_0x48e3cf(new RegExp('(?:^|;\x20)'+_0x496510['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3f5e1a=function(_0x4b36c3,_0x27a0d0){_0x4b36c3(++_0x27a0d0);};_0x3f5e1a(_0x1eaa31,_0x8ecc2);return _0x52bb93?decodeURIComponent(_0x52bb93[0x1]):undefined;}};const _0x4bc024=function(){const _0x503acf=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x503acf['test'](_0x1820ef['removeCookie']['toString']());};_0x1820ef['updateCookie']=_0x4bc024;let _0x54bc8d='';const _0x19e4c0=_0x1820ef['updateCookie']();if(!_0x19e4c0){_0x1820ef['setCookie'](['*'],'counter',0x1);}else if(_0x19e4c0){_0x54bc8d=_0x1820ef['getCookie'](null,'counter');}else{_0x1820ef['removeCookie']();}};_0x311703();}(a523_0x8ecc,0x195));const a523_0x1eaa=function(_0x489ac5,_0x8ecc2){_0x489ac5=_0x489ac5-0x0;let _0x1eaa31=a523_0x8ecc[_0x489ac5];return _0x1eaa31;};const a523_0x1820ef=function(){let _0x36b143=!![];return function(_0x97923b,_0x2f12af){const _0x20a478=_0x36b143?function(){if(_0x2f12af){const _0x4db497=_0x2f12af['apply'](_0x97923b,arguments);_0x2f12af=null;return _0x4db497;}}:function(){};_0x36b143=![];return _0x20a478;};}();const a523_0x2713e5=a523_0x1820ef(this,function(){const _0xaa3fc3=function(){const _0x4e92a0=_0xaa3fc3[a523_0x1eaa('0x1c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a523_0x1eaa('0x1e')](a523_0x1eaa('0x23'));return!_0x4e92a0[a523_0x1eaa('0x26')](a523_0x2713e5);};return _0xaa3fc3();});a523_0x2713e5();'use strict';const tesseract_1=require(a523_0x1eaa('0x1b'));const errors=require('../../utils/errors');module[a523_0x1eaa('0x2')]=class VoiceMute extends tesseract_1[a523_0x1eaa('0xe')]{constructor(){super('voiceMute',{'description':a523_0x1eaa('0xd'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':['set'],'string':['user']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a523_0x1eaa('0x3')],'userPermissions':[a523_0x1eaa('0x3')],'syntax':['voiceMute\x20--user\x20USER_ID\x20--\x20REASON',a523_0x1eaa('0x18')]});this['exec']=async(_0x58484a,_0x595d3b)=>{const _0x5a0e0d=this[a523_0x1eaa('0x20')][a523_0x1eaa('0x13')][a523_0x1eaa('0xa')](_0x58484a[a523_0x1eaa('0x10')],_0x595d3b[a523_0x1eaa('0x12')]);if(!_0x5a0e0d)throw new errors['DiscordError'](errors[a523_0x1eaa('0x25')]['INVALID_COMMAND_SYNTAX'],this['name']);if(_0x58484a[a523_0x1eaa('0x22')]['id']!==_0x58484a['guild']['ownerID']&&!_0x58484a[a523_0x1eaa('0x1d')][a523_0x1eaa('0x9')](_0x5a0e0d)){return await _0x58484a[a523_0x1eaa('0x1')][a523_0x1eaa('0x15')]({'embed':{'color':tesseract_1['Constants'][a523_0x1eaa('0x0')]['RED'],'title':this[a523_0x1eaa('0x20')][a523_0x1eaa('0x19')]['getString'](_0x58484a[a523_0x1eaa('0x10')][a523_0x1eaa('0x16')][a523_0x1eaa('0x8')],'errors',a523_0x1eaa('0x17')),'description':this[a523_0x1eaa('0x20')][a523_0x1eaa('0x19')][a523_0x1eaa('0xc')](_0x58484a['guild'][a523_0x1eaa('0x16')][a523_0x1eaa('0x8')],a523_0x1eaa('0x1a'),a523_0x1eaa('0x14'),_0x58484a['author'][a523_0x1eaa('0x5')],_0x5a0e0d[a523_0x1eaa('0x12')][a523_0x1eaa('0x5')])}})[a523_0x1eaa('0x21')](()=>{});}const _0x4313fd=_0x595d3b['_'][a523_0x1eaa('0xb')]('\x20')||'-';await _0x5a0e0d[a523_0x1eaa('0x7')][a523_0x1eaa('0x6')](!!_0x595d3b['set'],_0x4313fd);await _0x58484a[a523_0x1eaa('0x1')]['send']({'embed':{'color':tesseract_1[a523_0x1eaa('0x1f')]['COLORS'][a523_0x1eaa('0x24')],'description':_0x595d3b[a523_0x1eaa('0x4')]?this[a523_0x1eaa('0x20')][a523_0x1eaa('0x19')][a523_0x1eaa('0xc')](_0x58484a[a523_0x1eaa('0x10')]['document'][a523_0x1eaa('0x8')],a523_0x1eaa('0xf'),'memberSetVoiceMute',_0x58484a[a523_0x1eaa('0x22')][a523_0x1eaa('0x5')],_0x5a0e0d[a523_0x1eaa('0x12')][a523_0x1eaa('0x5')]):this[a523_0x1eaa('0x20')]['locale'][a523_0x1eaa('0xc')](_0x58484a['guild'][a523_0x1eaa('0x16')][a523_0x1eaa('0x8')],'info','memberUnsetVoiceMute',_0x58484a['author'][a523_0x1eaa('0x5')],_0x5a0e0d['user']['tag']),'fields':[{'name':a523_0x1eaa('0x11'),'value':_0x4313fd}],'footer':{'text':_0x5a0e0d['id']}}})['catch'](()=>{});};}};