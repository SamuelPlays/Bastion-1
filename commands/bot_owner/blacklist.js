const a222_0x458b=['length','COLORS','servers','\x20Blacklisted\x20Users','tag','save','DiscordError','@bastion/tesseract','blacklist\x20--users\x20USER_ID\x20--remove','locale','constructor','errors','filter','../../utils/snowflake','bastionBlacklistUpdate','It\x20allows\x20you\x20to\x20blacklist\x20users\x20and\x20servers\x20that.\x20Blacklisted\x20servers\x20and\x20users\x20don\x27t\x20have\x20access\x20to\x20Bastion\x27s\x20commands.','guild','remove','includes','isValid','INVALID_COMMAND_SYNTAX','catch','return\x20/\x22\x20+\x20this\x20+\x20\x22/','author','blacklist\x20--servers\x20SERVER_ID\x20--remove','../../models/Config','send','blacklistedGuildIds','Servers','user','language','client','toBulletList','push','Constants','Command','\x20Blacklisted\x20Servers\x20/\x20','apply','channel','name','compile','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Users','blacklist\x20--users\x20USER_ID','blacklist','blacklist\x20--servers\x20SERVER_ID','BASTION_ERROR_TYPE','../../utils/arrays','users','blacklistedUserIds'];(function(_0x3133e2,_0x458bb8){const _0x195e0f=function(_0x1f2cf5){while(--_0x1f2cf5){_0x3133e2['push'](_0x3133e2['shift']());}};const _0x35cce4=function(){const _0x139b30={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x951644,_0x2066d0,_0x1c1754,_0x4a3c0b){_0x4a3c0b=_0x4a3c0b||{};let _0x209786=_0x2066d0+'='+_0x1c1754;let _0x19b394=0x0;for(let _0x7fe651=0x0,_0x59e0ac=_0x951644['length'];_0x7fe651<_0x59e0ac;_0x7fe651++){const _0xe98e94=_0x951644[_0x7fe651];_0x209786+=';\x20'+_0xe98e94;const _0x58375d=_0x951644[_0xe98e94];_0x951644['push'](_0x58375d);_0x59e0ac=_0x951644['length'];if(_0x58375d!==!![]){_0x209786+='='+_0x58375d;}}_0x4a3c0b['cookie']=_0x209786;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3c18d5,_0x38dbcb){_0x3c18d5=_0x3c18d5||function(_0x151ca9){return _0x151ca9;};const _0x1fc655=_0x3c18d5(new RegExp('(?:^|;\x20)'+_0x38dbcb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2fa5ca=function(_0x450ff9,_0x2c7155){_0x450ff9(++_0x2c7155);};_0x2fa5ca(_0x195e0f,_0x458bb8);return _0x1fc655?decodeURIComponent(_0x1fc655[0x1]):undefined;}};const _0x505375=function(){const _0xe754d1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe754d1['test'](_0x139b30['removeCookie']['toString']());};_0x139b30['updateCookie']=_0x505375;let _0x2dbef7='';const _0x3070d7=_0x139b30['updateCookie']();if(!_0x3070d7){_0x139b30['setCookie'](['*'],'counter',0x1);}else if(_0x3070d7){_0x2dbef7=_0x139b30['getCookie'](null,'counter');}else{_0x139b30['removeCookie']();}};_0x35cce4();}(a222_0x458b,0x132));const a222_0x195e=function(_0x3133e2,_0x458bb8){_0x3133e2=_0x3133e2-0x0;let _0x195e0f=a222_0x458b[_0x3133e2];return _0x195e0f;};const a222_0x139b30=function(){let _0x33ebcd=!![];return function(_0x241d91,_0x8c351c){const _0x1bdbd9=_0x33ebcd?function(){if(_0x8c351c){const _0x10aef0=_0x8c351c[a222_0x195e('0x1f')](_0x241d91,arguments);_0x8c351c=null;return _0x10aef0;}}:function(){};_0x33ebcd=![];return _0x1bdbd9;};}();const a222_0x1f2cf5=a222_0x139b30(this,function(){const _0x387c9a=function(){const _0x54e8cc=_0x387c9a[a222_0x195e('0x4')](a222_0x195e('0x10'))()[a222_0x195e('0x22')](a222_0x195e('0x23'));return!_0x54e8cc['test'](a222_0x1f2cf5);};return _0x387c9a();});a222_0x1f2cf5();'use strict';const tesseract_1=require(a222_0x195e('0x1'));const Config_1=require(a222_0x195e('0x13'));const arrays=require(a222_0x195e('0x29'));const errors=require('../../utils/errors');const snowflake=require(a222_0x195e('0x7'));module['exports']=class Blacklist extends tesseract_1[a222_0x195e('0x1d')]{constructor(){super(a222_0x195e('0x26'),{'description':a222_0x195e('0x9'),'triggers':[],'arguments':{'array':[a222_0x195e('0x2e'),a222_0x195e('0x2a')],'boolean':[a222_0x195e('0xb')],'string':[a222_0x195e('0x2e'),a222_0x195e('0x2a')]},'scope':a222_0x195e('0xa'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a222_0x195e('0x25'),a222_0x195e('0x27'),a222_0x195e('0x2'),a222_0x195e('0x12')]});this['exec']=async(_0x45d3f4,_0x225bcd)=>{const _0x5e3085=await Config_1['default']['findById'](this[a222_0x195e('0x19')][a222_0x195e('0x17')]['id']);const _0x42533e=_0x225bcd['servers']?_0x225bcd[a222_0x195e('0x2e')][a222_0x195e('0x6')](_0x1d1048=>snowflake[a222_0x195e('0xd')](_0x1d1048)):[];const _0x3e7202=_0x225bcd[a222_0x195e('0x2a')]?_0x225bcd[a222_0x195e('0x2a')][a222_0x195e('0x6')](_0xa13276=>snowflake['isValid'](_0xa13276)):[];if(!_0x42533e[a222_0x195e('0x2c')]&&!_0x3e7202[a222_0x195e('0x2c')])throw new errors[(a222_0x195e('0x0'))](errors[a222_0x195e('0x28')][a222_0x195e('0xe')],this[a222_0x195e('0x21')]);const _0x56bdda=[];if(_0x42533e[a222_0x195e('0x2c')]){if(_0x225bcd[a222_0x195e('0xb')])_0x5e3085[a222_0x195e('0x15')]=_0x5e3085[a222_0x195e('0x15')][a222_0x195e('0x6')](_0x1f3e46=>!_0x42533e['includes'](_0x1f3e46));else _0x5e3085[a222_0x195e('0x15')]=[..._0x3e7202,..._0x5e3085['blacklistedGuildIds']];_0x5e3085[a222_0x195e('0x15')]=[...new Set(_0x5e3085[a222_0x195e('0x15')])];_0x56bdda[a222_0x195e('0x1b')]({'name':a222_0x195e('0x16'),'value':arrays[a222_0x195e('0x1a')](_0x42533e),'inline':!![]});}if(_0x42533e[a222_0x195e('0x2c')]){if(_0x225bcd[a222_0x195e('0xb')])_0x5e3085[a222_0x195e('0x2b')]=_0x5e3085[a222_0x195e('0x2b')][a222_0x195e('0x6')](_0x2354e4=>!_0x3e7202[a222_0x195e('0xc')](_0x2354e4));else _0x5e3085[a222_0x195e('0x2b')]=[..._0x3e7202,..._0x5e3085['blacklistedUserIds']];_0x5e3085[a222_0x195e('0x2b')]=[...new Set(_0x5e3085[a222_0x195e('0x2b')])];_0x56bdda['push']({'name':a222_0x195e('0x24'),'value':arrays['toBulletList'](_0x3e7202),'inline':!![]});}_0x5e3085[a222_0x195e('0x31')]();await _0x45d3f4[a222_0x195e('0x20')][a222_0x195e('0x14')]({'embed':{'color':tesseract_1[a222_0x195e('0x1c')][a222_0x195e('0x2d')]['PUPIL'],'title':'Bastion\x27s\x20Blacklist','description':this[a222_0x195e('0x19')][a222_0x195e('0x3')]['getString'](_0x45d3f4['guild']['document'][a222_0x195e('0x18')],a222_0x195e('0x5'),_0x42533e[a222_0x195e('0x2c')]||_0x3e7202['length']?a222_0x195e('0x8'):'bastionBlacklistUnchanged',_0x45d3f4[a222_0x195e('0x11')][a222_0x195e('0x30')]),'fields':_0x56bdda,'footer':{'text':_0x5e3085['blacklistedGuildIds'][a222_0x195e('0x2c')]+a222_0x195e('0x1e')+_0x5e3085[a222_0x195e('0x2b')][a222_0x195e('0x2c')]+a222_0x195e('0x2f')}}})[a222_0x195e('0xf')](()=>{});};}};