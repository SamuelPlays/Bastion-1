const a509_0x4ffa=['resolver','language','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','roleCreate','join','mentionable','MANAGE_ROLES','rename','document','locale','roleDelete','getString','length','author','tag','test','channel','COLORS','edit','roles','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','roles\x20--create\x20NAME\x20--\x20REASON','BASTION_ERROR_TYPE','roleDeleteQuestion','Constants','INVALID_COMMAND_SYNTAX','catch','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','color','client','DiscordError','delete','hoist','Command','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','compile','../../utils/errors','roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON','info','resolveRole','name','exports','constructor','create','GREEN','guild','../../utils/confirmation','ArgumentTypes','send'];(function(_0x1fd7d7,_0x4ffa00){const _0x5d4163=function(_0x1c6011){while(--_0x1c6011){_0x1fd7d7['push'](_0x1fd7d7['shift']());}};const _0xbfea5b=function(){const _0x127f26={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2a6609,_0x301613,_0x44c5a9,_0x294ab4){_0x294ab4=_0x294ab4||{};let _0x55d648=_0x301613+'='+_0x44c5a9;let _0x3368f9=0x0;for(let _0xa4849b=0x0,_0x42a226=_0x2a6609['length'];_0xa4849b<_0x42a226;_0xa4849b++){const _0x4fc87c=_0x2a6609[_0xa4849b];_0x55d648+=';\x20'+_0x4fc87c;const _0x3edb0d=_0x2a6609[_0x4fc87c];_0x2a6609['push'](_0x3edb0d);_0x42a226=_0x2a6609['length'];if(_0x3edb0d!==!![]){_0x55d648+='='+_0x3edb0d;}}_0x294ab4['cookie']=_0x55d648;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1fa1ba,_0x292da2){_0x1fa1ba=_0x1fa1ba||function(_0x2a4ef1){return _0x2a4ef1;};const _0x10d511=_0x1fa1ba(new RegExp('(?:^|;\x20)'+_0x292da2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x51491e=function(_0xd071a9,_0x1e21f8){_0xd071a9(++_0x1e21f8);};_0x51491e(_0x5d4163,_0x4ffa00);return _0x10d511?decodeURIComponent(_0x10d511[0x1]):undefined;}};const _0x37c6ea=function(){const _0x21a46b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x21a46b['test'](_0x127f26['removeCookie']['toString']());};_0x127f26['updateCookie']=_0x37c6ea;let _0x59942c='';const _0xf9d2eb=_0x127f26['updateCookie']();if(!_0xf9d2eb){_0x127f26['setCookie'](['*'],'counter',0x1);}else if(_0xf9d2eb){_0x59942c=_0x127f26['getCookie'](null,'counter');}else{_0x127f26['removeCookie']();}};_0xbfea5b();}(a509_0x4ffa,0xe9));const a509_0x5d41=function(_0x1fd7d7,_0x4ffa00){_0x1fd7d7=_0x1fd7d7-0x0;let _0x5d4163=a509_0x4ffa[_0x1fd7d7];return _0x5d4163;};const a509_0x127f26=function(){let _0x12c192=!![];return function(_0x580c4c,_0x3afe68){const _0x6f3e72=_0x12c192?function(){if(_0x3afe68){const _0x3f23ae=_0x3afe68['apply'](_0x580c4c,arguments);_0x3afe68=null;return _0x3f23ae;}}:function(){};_0x12c192=![];return _0x6f3e72;};}();const a509_0x1c6011=a509_0x127f26(this,function(){const _0x188bbf=function(){const _0x27455d=_0x188bbf[a509_0x5d41('0xa')](a509_0x5d41('0x1'))()[a509_0x5d41('0x3')](a509_0x5d41('0x25'));return!_0x27455d[a509_0x5d41('0x20')](a509_0x1c6011);};return _0x188bbf();});a509_0x1c6011();'use strict';const tesseract_1=require('@bastion/tesseract');const confirmation_1=require(a509_0x5d41('0xe'));const errors=require(a509_0x5d41('0x4'));module[a509_0x5d41('0x9')]=class RolesCommand extends tesseract_1[a509_0x5d41('0x0')]{constructor(){super(a509_0x5d41('0x24'),{'description':a509_0x5d41('0x2c'),'triggers':[],'arguments':{'array':[a509_0x5d41('0xb'),a509_0x5d41('0x30'),a509_0x5d41('0x8'),a509_0x5d41('0x18')],'boolean':[a509_0x5d41('0x31'),a509_0x5d41('0x16')],'string':[a509_0x5d41('0xb'),a509_0x5d41('0x30'),a509_0x5d41('0x18')],'coerce':{'color':tesseract_1[a509_0x5d41('0x29')][a509_0x5d41('0xf')]['COLOR']}},'scope':a509_0x5d41('0xd'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a509_0x5d41('0x17')],'userPermissions':[a509_0x5d41('0x17')],'syntax':[a509_0x5d41('0x26'),a509_0x5d41('0x13'),'roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON',a509_0x5d41('0x5'),'roles\x20--delete\x20ROLE\x20--\x20REASON']});this[a509_0x5d41('0x2')]=async(_0x46e071,_0x350778)=>{const _0x5e8bee=_0x350778['_'][a509_0x5d41('0x15')]('\x20')||'-';if(_0x350778[a509_0x5d41('0xb')]&&_0x350778[a509_0x5d41('0xb')]['length']){const _0x1a6725=await _0x46e071[a509_0x5d41('0xd')]['roles'][a509_0x5d41('0xb')]({'data':{'name':_0x350778[a509_0x5d41('0xb')][a509_0x5d41('0x15')]('\x20'),'color':_0x350778[a509_0x5d41('0x2d')],'hoist':_0x350778[a509_0x5d41('0x31')],'mentionable':_0x350778[a509_0x5d41('0x16')]},'reason':_0x5e8bee});return await _0x46e071[a509_0x5d41('0x21')][a509_0x5d41('0x10')]({'embed':{'color':tesseract_1['Constants'][a509_0x5d41('0x22')][a509_0x5d41('0xc')],'description':this[a509_0x5d41('0x2e')][a509_0x5d41('0x1a')][a509_0x5d41('0x1c')](_0x46e071['guild'][a509_0x5d41('0x19')][a509_0x5d41('0x12')],a509_0x5d41('0x6'),a509_0x5d41('0x14'),_0x46e071['author'][a509_0x5d41('0x1f')],_0x1a6725['name'],_0x5e8bee)}})[a509_0x5d41('0x2b')](()=>{});}if(_0x350778[a509_0x5d41('0x30')]&&_0x350778[a509_0x5d41('0x30')][a509_0x5d41('0x1d')]){const _0x3ee6e1=this[a509_0x5d41('0x2e')][a509_0x5d41('0x11')][a509_0x5d41('0x7')](_0x46e071[a509_0x5d41('0xd')],_0x350778['delete']['join']('\x20'));const _0x3c887d=await confirmation_1['default'](_0x46e071,this[a509_0x5d41('0x2e')][a509_0x5d41('0x1a')]['getString'](_0x46e071['guild'][a509_0x5d41('0x19')][a509_0x5d41('0x12')],a509_0x5d41('0x6'),a509_0x5d41('0x28'),_0x46e071[a509_0x5d41('0x1e')][a509_0x5d41('0x1f')],_0x3ee6e1['name']));if(_0x3c887d){await _0x3ee6e1[a509_0x5d41('0x30')](_0x5e8bee);return await _0x46e071[a509_0x5d41('0x21')][a509_0x5d41('0x10')]({'embed':{'color':tesseract_1[a509_0x5d41('0x29')]['COLORS'][a509_0x5d41('0xc')],'description':this[a509_0x5d41('0x2e')][a509_0x5d41('0x1a')][a509_0x5d41('0x1c')](_0x46e071[a509_0x5d41('0xd')][a509_0x5d41('0x19')][a509_0x5d41('0x12')],'info',a509_0x5d41('0x1b'),_0x46e071['author']['tag'],_0x3ee6e1[a509_0x5d41('0x8')],_0x5e8bee)}})[a509_0x5d41('0x2b')](()=>{});}return!![];}if(_0x350778['rename']&&_0x350778[a509_0x5d41('0x18')]['length']&&_0x350778['name']&&_0x350778['name'][a509_0x5d41('0x1d')]){let _0xf03ac=this[a509_0x5d41('0x2e')][a509_0x5d41('0x11')][a509_0x5d41('0x7')](_0x46e071[a509_0x5d41('0xd')],_0x350778[a509_0x5d41('0x18')][a509_0x5d41('0x15')]('\x20'));_0xf03ac=await _0xf03ac[a509_0x5d41('0x23')]({'name':_0x350778['name']['join']('\x20')});return await _0x46e071[a509_0x5d41('0x21')][a509_0x5d41('0x10')]({'embed':{'color':tesseract_1[a509_0x5d41('0x29')]['COLORS'][a509_0x5d41('0xc')],'description':this['client']['locale']['getString'](_0x46e071[a509_0x5d41('0xd')][a509_0x5d41('0x19')][a509_0x5d41('0x12')],a509_0x5d41('0x6'),'roleRename',_0x46e071[a509_0x5d41('0x1e')][a509_0x5d41('0x1f')],_0xf03ac[a509_0x5d41('0x8')],_0x5e8bee)}})[a509_0x5d41('0x2b')](()=>{});}throw new errors[(a509_0x5d41('0x2f'))](errors[a509_0x5d41('0x27')][a509_0x5d41('0x2a')],this[a509_0x5d41('0x8')]);};}};