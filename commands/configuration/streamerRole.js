const a475_0x47be=['name','It\x20allows\x20to\x20set\x20the\x20Streamer\x20Role\x20for\x20the\x20server.\x20When\x20a\x20member\x20goes\x20live\x20in\x20the\x20server,\x20they\x27re\x20assigned\x20to\x20this\x20role,\x20provided\x20they\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server.','streamerRoleSet','channel','getString','BASTION_ERROR_TYPE','language','tag','save','exports','../../utils/errors','COLORS','streamerRoleUnset','MANAGE_GUILD','@bastion/tesseract','resolver','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','send','document','Constants','locale','test','info','streamerRoleId','resolveRole','streamerRole\x20--remove','INVALID_COMMAND_SYNTAX','RED','client','ROLE_NOT_FOUND','guild','roleNotFound','remove','catch','constructor','streamerRole','return\x20/\x22\x20+\x20this\x20+\x20\x22/','GREEN','compile','streamerRole\x20ROLE','DiscordError','apply'];(function(_0x4e9722,_0x47befd){const _0x575b6e=function(_0x4b0d56){while(--_0x4b0d56){_0x4e9722['push'](_0x4e9722['shift']());}};const _0x3c4b3c=function(){const _0x27d654={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3a8f98,_0x38e163,_0x138b8b,_0x386304){_0x386304=_0x386304||{};let _0x124687=_0x38e163+'='+_0x138b8b;let _0x1f85c6=0x0;for(let _0x1f2af2=0x0,_0x525365=_0x3a8f98['length'];_0x1f2af2<_0x525365;_0x1f2af2++){const _0x10bd76=_0x3a8f98[_0x1f2af2];_0x124687+=';\x20'+_0x10bd76;const _0x1fa171=_0x3a8f98[_0x10bd76];_0x3a8f98['push'](_0x1fa171);_0x525365=_0x3a8f98['length'];if(_0x1fa171!==!![]){_0x124687+='='+_0x1fa171;}}_0x386304['cookie']=_0x124687;},'removeCookie':function(){return'dev';},'getCookie':function(_0x58bada,_0x26a38a){_0x58bada=_0x58bada||function(_0x474431){return _0x474431;};const _0x2a7af1=_0x58bada(new RegExp('(?:^|;\x20)'+_0x26a38a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x374629=function(_0x49006e,_0x8ad825){_0x49006e(++_0x8ad825);};_0x374629(_0x575b6e,_0x47befd);return _0x2a7af1?decodeURIComponent(_0x2a7af1[0x1]):undefined;}};const _0x5ef292=function(){const _0x13adcf=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x13adcf['test'](_0x27d654['removeCookie']['toString']());};_0x27d654['updateCookie']=_0x5ef292;let _0x3a35ef='';const _0x2a6ece=_0x27d654['updateCookie']();if(!_0x2a6ece){_0x27d654['setCookie'](['*'],'counter',0x1);}else if(_0x2a6ece){_0x3a35ef=_0x27d654['getCookie'](null,'counter');}else{_0x27d654['removeCookie']();}};_0x3c4b3c();}(a475_0x47be,0x1ae));const a475_0x575b=function(_0x4e9722,_0x47befd){_0x4e9722=_0x4e9722-0x0;let _0x575b6e=a475_0x47be[_0x4e9722];return _0x575b6e;};const a475_0x27d654=function(){let _0x59f939=!![];return function(_0x3c62f5,_0x50af2c){const _0x26bdcc=_0x59f939?function(){if(_0x50af2c){const _0x46bfaa=_0x50af2c[a475_0x575b('0x2a')](_0x3c62f5,arguments);_0x50af2c=null;return _0x46bfaa;}}:function(){};_0x59f939=![];return _0x26bdcc;};}();const a475_0x4b0d56=a475_0x27d654(this,function(){const _0x97ac26=function(){const _0xa9a72=_0x97ac26[a475_0x575b('0x23')](a475_0x575b('0x25'))()[a475_0x575b('0x27')](a475_0x575b('0x10'));return!_0xa9a72[a475_0x575b('0x16')](a475_0x4b0d56);};return _0x97ac26();});a475_0x4b0d56();'use strict';const tesseract_1=require(a475_0x575b('0xe'));const errors=require(a475_0x575b('0xa'));module[a475_0x575b('0x9')]=class StreamerRoleCommand extends tesseract_1['Command']{constructor(){super(a475_0x575b('0x24'),{'description':a475_0x575b('0x1'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':['remove']},'scope':a475_0x575b('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a475_0x575b('0xd')],'syntax':[a475_0x575b('0x28'),a475_0x575b('0x1a')]});this['exec']=async(_0x7178fa,_0x29c490)=>{if(!_0x29c490['_'][a475_0x575b('0x11')]&&!_0x29c490[a475_0x575b('0x21')])throw new errors[(a475_0x575b('0x29'))](errors[a475_0x575b('0x5')][a475_0x575b('0x1b')],this[a475_0x575b('0x0')]);const _0x29f676=_0x7178fa[a475_0x575b('0x1f')];let _0x4cc90f;if(_0x29c490['remove']){_0x29f676['document']['streamerRoleId']=undefined;delete _0x29f676[a475_0x575b('0x13')]['streamerRoleId'];}else{_0x4cc90f=this[a475_0x575b('0x1d')][a475_0x575b('0xf')][a475_0x575b('0x19')](_0x7178fa[a475_0x575b('0x1f')],_0x29c490['_']['join']('\x20'));if(!_0x4cc90f)throw new errors[(a475_0x575b('0x29'))](errors['BASTION_ERROR_TYPE'][a475_0x575b('0x1e')],this[a475_0x575b('0x1d')]['locale']['getString'](_0x7178fa['guild'][a475_0x575b('0x13')][a475_0x575b('0x6')],'errors',a475_0x575b('0x20')));_0x29f676['document']['streamerRoleId']=_0x4cc90f['id'];}await _0x29f676[a475_0x575b('0x13')][a475_0x575b('0x8')]();await _0x7178fa[a475_0x575b('0x3')][a475_0x575b('0x12')]({'embed':{'color':_0x29f676['document'][a475_0x575b('0x18')]?tesseract_1['Constants'][a475_0x575b('0xb')][a475_0x575b('0x26')]:tesseract_1[a475_0x575b('0x14')][a475_0x575b('0xb')][a475_0x575b('0x1c')],'description':this[a475_0x575b('0x1d')][a475_0x575b('0x15')][a475_0x575b('0x4')](_0x7178fa[a475_0x575b('0x1f')][a475_0x575b('0x13')][a475_0x575b('0x6')],a475_0x575b('0x17'),_0x29f676[a475_0x575b('0x13')]['streamerRoleId']?a475_0x575b('0x2'):a475_0x575b('0xc'),_0x7178fa['author'][a475_0x575b('0x7')],_0x4cc90f?_0x4cc90f['name']:'')}})[a475_0x575b('0x22')](()=>{});};}};