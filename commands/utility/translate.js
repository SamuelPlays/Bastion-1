const a352_0xc2c8=['It\x20allows\x20you\x20to\x20translate\x20the\x20specified\x20text\x20from\x20one\x20language\x20to\x20another.','BASTION_ERROR_TYPE','Command','@k3rn31p4nic/google-translate-api','guild','translate\x20--to\x20LANGUAGE\x20--\x20TEXT','from','auto','apply','COLORS','translate','toLowerCase','toUpperCase','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','length','exec','test','IRIS','translate\x20--from\x20LANGUAGE\x20--to\x20LANGUAGE\x20--\x20TEXT','text','join','INVALID_COMMAND_SYNTAX','language','Powered\x20by\x20Google','Constants','@bastion/tesseract','compile'];(function(_0x388cd9,_0xc2c891){const _0x117df6=function(_0x7f6d2a){while(--_0x7f6d2a){_0x388cd9['push'](_0x388cd9['shift']());}};const _0x38de66=function(){const _0x258768={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1b9078,_0x157908,_0x21b860,_0x342f0e){_0x342f0e=_0x342f0e||{};let _0x45e854=_0x157908+'='+_0x21b860;let _0x15e154=0x0;for(let _0x5a1a20=0x0,_0xb46a4c=_0x1b9078['length'];_0x5a1a20<_0xb46a4c;_0x5a1a20++){const _0x1f3c9f=_0x1b9078[_0x5a1a20];_0x45e854+=';\x20'+_0x1f3c9f;const _0x659107=_0x1b9078[_0x1f3c9f];_0x1b9078['push'](_0x659107);_0xb46a4c=_0x1b9078['length'];if(_0x659107!==!![]){_0x45e854+='='+_0x659107;}}_0x342f0e['cookie']=_0x45e854;},'removeCookie':function(){return'dev';},'getCookie':function(_0x224f45,_0x3ce3c5){_0x224f45=_0x224f45||function(_0x34dacb){return _0x34dacb;};const _0x5b9813=_0x224f45(new RegExp('(?:^|;\x20)'+_0x3ce3c5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x6cb603=function(_0x2094f9,_0x14693b){_0x2094f9(++_0x14693b);};_0x6cb603(_0x117df6,_0xc2c891);return _0x5b9813?decodeURIComponent(_0x5b9813[0x1]):undefined;}};const _0x1105d5=function(){const _0x5cd912=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5cd912['test'](_0x258768['removeCookie']['toString']());};_0x258768['updateCookie']=_0x1105d5;let _0x1b70f0='';const _0x5f1dd2=_0x258768['updateCookie']();if(!_0x5f1dd2){_0x258768['setCookie'](['*'],'counter',0x1);}else if(_0x5f1dd2){_0x1b70f0=_0x258768['getCookie'](null,'counter');}else{_0x258768['removeCookie']();}};_0x38de66();}(a352_0xc2c8,0x151));const a352_0x117d=function(_0x388cd9,_0xc2c891){_0x388cd9=_0x388cd9-0x0;let _0x117df6=a352_0xc2c8[_0x388cd9];return _0x117df6;};const a352_0x258768=function(){let _0x3796f8=!![];return function(_0xce1e98,_0x58704f){const _0x5d407e=_0x3796f8?function(){if(_0x58704f){const _0x4fdfb2=_0x58704f[a352_0x117d('0x13')](_0xce1e98,arguments);_0x58704f=null;return _0x4fdfb2;}}:function(){};_0x3796f8=![];return _0x5d407e;};}();const a352_0x7f6d2a=a352_0x258768(this,function(){const _0x9174cc=function(){const _0x2189b8=_0x9174cc['constructor'](a352_0x117d('0x19'))()[a352_0x117d('0xa')](a352_0x117d('0x18'));return!_0x2189b8[a352_0x117d('0x0')](a352_0x7f6d2a);};return _0x9174cc();});a352_0x7f6d2a();'use strict';const tesseract_1=require(a352_0x117d('0x9'));const translate=require(a352_0x117d('0xe'));const errors=require('../../utils/errors');module[a352_0x117d('0x1a')]=class TranslateCommand extends tesseract_1[a352_0x117d('0xd')]{constructor(){super(a352_0x117d('0x15'),{'description':a352_0x117d('0xb'),'triggers':[],'arguments':{},'scope':a352_0x117d('0xf'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['translate\x20--\x20TEXT',a352_0x117d('0x10'),a352_0x117d('0x2')]});this[a352_0x117d('0x1c')]=async(_0x30d72d,_0x3c31a5)=>{if(!_0x3c31a5['_'][a352_0x117d('0x1b')])throw new errors['DiscordError'](errors[a352_0x117d('0xc')][a352_0x117d('0x5')],this['name']);const _0x26d7b9=_0x3c31a5['_'][a352_0x117d('0x4')]('\x20');const _0x3d920f=_0x3c31a5[a352_0x117d('0x11')]?_0x3c31a5[a352_0x117d('0x11')][a352_0x117d('0x16')]():a352_0x117d('0x12');const _0x5e9f0d=_0x3c31a5['to']?_0x3c31a5['to'][a352_0x117d('0x16')]():'en';const _0x4bba09=await translate(_0x26d7b9,{'from':_0x3d920f,'to':_0x5e9f0d});await _0x30d72d['channel']['send']({'embed':{'color':tesseract_1[a352_0x117d('0x8')][a352_0x117d('0x14')][a352_0x117d('0x1')],'title':'Translation','description':_0x4bba09[a352_0x117d('0x3')],'fields':[{'name':'Source\x20Language','value':_0x4bba09[a352_0x117d('0x11')][a352_0x117d('0x6')]['iso'][a352_0x117d('0x17')](),'inline':!![]},{'name':'Target\x20Language','value':_0x5e9f0d[a352_0x117d('0x17')](),'inline':!![]}],'footer':{'text':a352_0x117d('0x7')}}});};}};