const a346_0x3341=['text','send','constructor','/words/definitions/','../../utils/errors','Definitions','makeRequest','apply','compile','DiscordError','json','BASTION_ERROR_TYPE','Command','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','INVALID_COMMAND_SYNTAX','test','define','length','channel','toLowerCase','It\x20allows\x20you\x20to\x20look\x20up\x20definitions\x20for\x20the\x20specified\x20word.','partOfSpeech','@bastion/tesseract','slice','map','definitions','Constants'];(function(_0x21ba50,_0x334162){const _0x169bb4=function(_0x1f339e){while(--_0x1f339e){_0x21ba50['push'](_0x21ba50['shift']());}};const _0xbf4302=function(){const _0x247161={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x578753,_0x1cd209,_0x1ef6b5,_0x2e5fc6){_0x2e5fc6=_0x2e5fc6||{};let _0x238487=_0x1cd209+'='+_0x1ef6b5;let _0x35a3c2=0x0;for(let _0x597137=0x0,_0x370956=_0x578753['length'];_0x597137<_0x370956;_0x597137++){const _0x28ea1d=_0x578753[_0x597137];_0x238487+=';\x20'+_0x28ea1d;const _0x4671bd=_0x578753[_0x28ea1d];_0x578753['push'](_0x4671bd);_0x370956=_0x578753['length'];if(_0x4671bd!==!![]){_0x238487+='='+_0x4671bd;}}_0x2e5fc6['cookie']=_0x238487;},'removeCookie':function(){return'dev';},'getCookie':function(_0x44e88d,_0x2b0237){_0x44e88d=_0x44e88d||function(_0x552fbd){return _0x552fbd;};const _0x599ace=_0x44e88d(new RegExp('(?:^|;\x20)'+_0x2b0237['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4dd507=function(_0xae84d2,_0x273e95){_0xae84d2(++_0x273e95);};_0x4dd507(_0x169bb4,_0x334162);return _0x599ace?decodeURIComponent(_0x599ace[0x1]):undefined;}};const _0x3ffd86=function(){const _0x20302c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x20302c['test'](_0x247161['removeCookie']['toString']());};_0x247161['updateCookie']=_0x3ffd86;let _0x308334='';const _0x605f60=_0x247161['updateCookie']();if(!_0x605f60){_0x247161['setCookie'](['*'],'counter',0x1);}else if(_0x605f60){_0x308334=_0x247161['getCookie'](null,'counter');}else{_0x247161['removeCookie']();}};_0xbf4302();}(a346_0x3341,0xf1));const a346_0x169b=function(_0x21ba50,_0x334162){_0x21ba50=_0x21ba50-0x0;let _0x169bb4=a346_0x3341[_0x21ba50];return _0x169bb4;};const a346_0x247161=function(){let _0x33c686=!![];return function(_0x12178e,_0x112cc0){const _0x3a30eb=_0x33c686?function(){if(_0x112cc0){const _0x20aa8d=_0x112cc0[a346_0x169b('0x12')](_0x12178e,arguments);_0x112cc0=null;return _0x20aa8d;}}:function(){};_0x33c686=![];return _0x3a30eb;};}();const a346_0x1f339e=a346_0x247161(this,function(){const _0x92fd31=function(){const _0x55cd13=_0x92fd31[a346_0x169b('0xd')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a346_0x169b('0x13')](a346_0x169b('0x19'));return!_0x55cd13[a346_0x169b('0x1b')](a346_0x1f339e);};return _0x92fd31();});a346_0x1f339e();'use strict';const tesseract_1=require(a346_0x169b('0x6'));const errors=require(a346_0x169b('0xf'));const omnic=require('../../utils/omnic');module[a346_0x169b('0x18')]=class DefinitionsCommand extends tesseract_1[a346_0x169b('0x17')]{constructor(){super(a346_0x169b('0x9'),{'description':a346_0x169b('0x4'),'triggers':[a346_0x169b('0x0')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['definitions\x20WORD']});this['exec']=async(_0x57a700,_0xbcb402)=>{if(!_0xbcb402['_'][a346_0x169b('0x1')])throw new errors[(a346_0x169b('0x14'))](errors[a346_0x169b('0x16')][a346_0x169b('0x1a')],this['name']);const _0x34c964=_0xbcb402['_']['join']('\x20');const _0x349ea5=await omnic[a346_0x169b('0x11')](a346_0x169b('0xe')+_0x34c964);const _0x271d43=await _0x349ea5[a346_0x169b('0x15')]();await _0x57a700[a346_0x169b('0x2')][a346_0x169b('0xc')]({'embed':{'color':tesseract_1[a346_0x169b('0xa')]['COLORS']['IRIS'],'author':{'name':_0x34c964[a346_0x169b('0x3')]()},'title':a346_0x169b('0x10'),'fields':_0x271d43['filter'](_0x319794=>_0x319794[a346_0x169b('0xb')])[a346_0x169b('0x7')](0x0,0x5)[a346_0x169b('0x8')]((_0x2e425c,_0x18b753)=>({'name':_0x18b753+0x1+'.\x20'+(_0x2e425c[a346_0x169b('0x5')]||''),'value':_0x2e425c[a346_0x169b('0xb')][a346_0x169b('0x7')](0x0,0x400)})),'footer':{'text':'Powered\x20by\x20Century\x20Dictionary,\x20the\x20American\x20Heritage\x20Dictionary,\x20and\x20Wiktionary.'}}});};}};