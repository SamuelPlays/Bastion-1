const a336_0x4c68=['It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20Pokémon.','constructor','COLORS','Mythical\x20','Gender\x20Ratio','eggGroups','evolutionLine','Height','pokemon','gender','\x0aHidden:\x20','abilities','exports','ultraBeast','node-fetch','exec','guild','apply','Genderless','length','Powered\x20by\x20PokéDex\x20API','family','join','name','channel','pokemon\x20NUMBER','Weight','Abilities','normal','Command','types','BASTION_ERROR_TYPE','default','mythical','IRIS','Legendary\x20','Starter\x20','Normal:\x20','gen','INVALID_COMMAND_SYNTAX','Constants','mega','\x20->\x20','return\x20/\x22\x20+\x20this\x20+\x20\x22/','DiscordError','Evolution\x20Line','@bastion/tesseract','hidden','Types','Ultra\x20Beast','legendary','description','https://pokeapi.glitch.me/v1/pokemon/','test','sprite','json','Egg\x20Groups','weight'];(function(_0x30fd14,_0x4c68f9){const _0x5320ef=function(_0x122c31){while(--_0x122c31){_0x30fd14['push'](_0x30fd14['shift']());}};const _0x96aff1=function(){const _0x2f9d1a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x669f13,_0x5eefb7,_0x4e9c75,_0x1c99b1){_0x1c99b1=_0x1c99b1||{};let _0x2e9647=_0x5eefb7+'='+_0x4e9c75;let _0x433a90=0x0;for(let _0x54efe2=0x0,_0xc58adb=_0x669f13['length'];_0x54efe2<_0xc58adb;_0x54efe2++){const _0x188df0=_0x669f13[_0x54efe2];_0x2e9647+=';\x20'+_0x188df0;const _0x42e7f9=_0x669f13[_0x188df0];_0x669f13['push'](_0x42e7f9);_0xc58adb=_0x669f13['length'];if(_0x42e7f9!==!![]){_0x2e9647+='='+_0x42e7f9;}}_0x1c99b1['cookie']=_0x2e9647;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1fed83,_0x3a97fd){_0x1fed83=_0x1fed83||function(_0x3d2b81){return _0x3d2b81;};const _0x5e33a3=_0x1fed83(new RegExp('(?:^|;\x20)'+_0x3a97fd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x389e0f=function(_0x276027,_0x2dc645){_0x276027(++_0x2dc645);};_0x389e0f(_0x5320ef,_0x4c68f9);return _0x5e33a3?decodeURIComponent(_0x5e33a3[0x1]):undefined;}};const _0x1d3e66=function(){const _0x138313=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x138313['test'](_0x2f9d1a['removeCookie']['toString']());};_0x2f9d1a['updateCookie']=_0x1d3e66;let _0x6cb68='';const _0x147b19=_0x2f9d1a['updateCookie']();if(!_0x147b19){_0x2f9d1a['setCookie'](['*'],'counter',0x1);}else if(_0x147b19){_0x6cb68=_0x2f9d1a['getCookie'](null,'counter');}else{_0x2f9d1a['removeCookie']();}};_0x96aff1();}(a336_0x4c68,0x131));const a336_0x5320=function(_0x30fd14,_0x4c68f9){_0x30fd14=_0x30fd14-0x0;let _0x5320ef=a336_0x4c68[_0x30fd14];return _0x5320ef;};const a336_0x2f9d1a=function(){let _0x801599=!![];return function(_0x34d312,_0x175fd6){const _0x3088f8=_0x801599?function(){if(_0x175fd6){const _0x28d1b9=_0x175fd6[a336_0x5320('0x2')](_0x34d312,arguments);_0x175fd6=null;return _0x28d1b9;}}:function(){};_0x801599=![];return _0x3088f8;};}();const a336_0x122c31=a336_0x2f9d1a(this,function(){const _0x2b1ced=function(){const _0x30b461=_0x2b1ced[a336_0x5320('0x2c')](a336_0x5320('0x1c'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x30b461[a336_0x5320('0x26')](a336_0x122c31);};return _0x2b1ced();});a336_0x122c31();'use strict';const tesseract_1=require(a336_0x5320('0x1f'));const node_fetch_1=require(a336_0x5320('0x39'));const errors=require('../../utils/errors');module[a336_0x5320('0x37')]=class PokemonCommand extends tesseract_1[a336_0x5320('0xe')]{constructor(){super(a336_0x5320('0x33'),{'description':a336_0x5320('0x2b'),'triggers':[],'arguments':{},'scope':a336_0x5320('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['pokemon\x20NAME',a336_0x5320('0xa')]});this[a336_0x5320('0x0')]=async(_0xc059d2,_0x460922)=>{if(!_0x460922['_'][a336_0x5320('0x4')])throw new errors[(a336_0x5320('0x1d'))](errors[a336_0x5320('0x10')][a336_0x5320('0x18')],this[a336_0x5320('0x8')]);const _0x517552=_0x460922['_'][a336_0x5320('0x7')]('\x20');const _0x4ba795=await node_fetch_1[a336_0x5320('0x11')](a336_0x5320('0x25')+encodeURIComponent(_0x517552));const _0x15d3d9=await _0x4ba795[a336_0x5320('0x28')]();if(_0x15d3d9['error'])throw new Error(_0x15d3d9['message']);await _0xc059d2[a336_0x5320('0x9')]['send']({'embed':{'color':tesseract_1[a336_0x5320('0x19')][a336_0x5320('0x2d')][a336_0x5320('0x13')],'author':{'name':(_0x15d3d9[0x0][a336_0x5320('0x12')]?a336_0x5320('0x2e'):'')+(_0x15d3d9[0x0][a336_0x5320('0x23')]?a336_0x5320('0x14'):'')+(_0x15d3d9[0x0][a336_0x5320('0x1a')]?'Mega':'')+(_0x15d3d9[0x0][a336_0x5320('0x38')]?a336_0x5320('0x22'):'')+(_0x15d3d9[0x0]['starter']?a336_0x5320('0x15'):'')+'Pokémon'},'title':_0x15d3d9[0x0][a336_0x5320('0x8')],'description':'Discovered\x20in\x20generation\x20'+_0x15d3d9[0x0][a336_0x5320('0x17')],'fields':[{'name':'Number','value':_0x15d3d9[0x0]['number'],'inline':!![]},{'name':'Species','value':_0x15d3d9[0x0]['species'],'inline':!![]},{'name':a336_0x5320('0x21'),'value':_0x15d3d9[0x0][a336_0x5320('0xf')][a336_0x5320('0x7')]('\x0a'),'inline':!![]},{'name':a336_0x5320('0xc'),'value':a336_0x5320('0x16')+(_0x15d3d9[0x0][a336_0x5320('0x36')][a336_0x5320('0xd')]['join'](',\x20')||'-')+a336_0x5320('0x35')+(_0x15d3d9[0x0][a336_0x5320('0x36')][a336_0x5320('0x20')][a336_0x5320('0x7')](',\x20')||'-'),'inline':!![]},{'name':a336_0x5320('0x29'),'value':_0x15d3d9[0x0][a336_0x5320('0x30')]['join']('\x0a'),'inline':!![]},{'name':a336_0x5320('0x2f'),'value':_0x15d3d9[0x0][a336_0x5320('0x34')]['length']?_0x15d3d9[0x0]['gender'][0x0]+':'+_0x15d3d9[0x0][a336_0x5320('0x34')][0x1]:a336_0x5320('0x3'),'inline':!![]},{'name':a336_0x5320('0x32'),'value':_0x15d3d9[0x0]['height'],'inline':!![]},{'name':a336_0x5320('0xb'),'value':_0x15d3d9[0x0][a336_0x5320('0x2a')],'inline':!![]},{'name':a336_0x5320('0x1e'),'value':_0x15d3d9[0x0][a336_0x5320('0x6')][a336_0x5320('0x31')][a336_0x5320('0x7')](a336_0x5320('0x1b'))},{'name':'Description','value':_0x15d3d9[0x0][a336_0x5320('0x24')]}],'thumbnail':{'url':_0x15d3d9[0x0][a336_0x5320('0x27')]},'footer':{'text':a336_0x5320('0x5')}}});};}};