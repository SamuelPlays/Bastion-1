const a145_0x1f08=['Weight','Abilities','Mega','hidden','Gender\x20Ratio','default','message','Normal:\x20','Egg\x20Groups','Evolution\x20Line','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','family','Description','channel','Legendary\x20','gen','description','Discovered\x20in\x20generation\x20','pokemon','mega','Pokémon','error','COLORS','\x0aHidden:\x20','\x20->\x20','height','normal','starter','Constants','Number','length','DiscordError','gender','../../utils/errors','Ultra\x20Beast','exec','send','weight','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','Species','IRIS','@bastion/tesseract','sprite','constructor','Height','INVALID_COMMAND_SYNTAX','guild','types','exports','Types','join'];(function(_0xa8cef1,_0x3cbb86){const _0x1f0810=function(_0x45d837){while(--_0x45d837){_0xa8cef1['push'](_0xa8cef1['shift']());}},_0x2c0890=function(){const _0xa26842={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xc77b49,_0x28ba68,_0x3a6fbd,_0x62a5cd){_0x62a5cd=_0x62a5cd||{};let _0x2eb84e=_0x28ba68+'='+_0x3a6fbd,_0x26e3fb=0x0;for(let _0x23d346=0x0,_0x2d4b81=_0xc77b49['length'];_0x23d346<_0x2d4b81;_0x23d346++){const _0x44d39e=_0xc77b49[_0x23d346];_0x2eb84e+=';\x20'+_0x44d39e;const _0x5250ab=_0xc77b49[_0x44d39e];_0xc77b49['push'](_0x5250ab),_0x2d4b81=_0xc77b49['length'],_0x5250ab!==!![]&&(_0x2eb84e+='='+_0x5250ab);}_0x62a5cd['cookie']=_0x2eb84e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1cbcbd,_0x206bb9){_0x1cbcbd=_0x1cbcbd||function(_0x2fd1e9){return _0x2fd1e9;};const _0xfbde92=_0x1cbcbd(new RegExp('(?:^|;\x20)'+_0x206bb9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xfe1495=function(_0x1e6f52,_0x96578e){_0x1e6f52(++_0x96578e);};return _0xfe1495(_0x1f0810,_0x3cbb86),_0xfbde92?decodeURIComponent(_0xfbde92[0x1]):undefined;}},_0x28fa27=function(){const _0x4a2311=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a2311['test'](_0xa26842['removeCookie']['toString']());};_0xa26842['updateCookie']=_0x28fa27;let _0x54c781='';const _0x306fee=_0xa26842['updateCookie']();if(!_0x306fee)_0xa26842['setCookie'](['*'],'counter',0x1);else _0x306fee?_0x54c781=_0xa26842['getCookie'](null,'counter'):_0xa26842['removeCookie']();};_0x2c0890();}(a145_0x1f08,0xb9));const a145_0x2c08=function(_0xa8cef1,_0x3cbb86){_0xa8cef1=_0xa8cef1-0xe7;let _0x1f0810=a145_0x1f08[_0xa8cef1];return _0x1f0810;};const a145_0x38fd8f=a145_0x2c08,a145_0x28fa27=function(){let _0x306fee=!![];return function(_0xc77b49,_0x28ba68){const _0x3a6fbd=_0x306fee?function(){const _0x27dfa6=a145_0x2c08;if(_0x28ba68){const _0x62a5cd=_0x28ba68[_0x27dfa6(0x10d)](_0xc77b49,arguments);return _0x28ba68=null,_0x62a5cd;}}:function(){};return _0x306fee=![],_0x3a6fbd;};}(),a145_0xa26842=a145_0x28fa27(this,function(){const _0x2eb84e=function(){const _0x4979c4=a145_0x2c08,_0x26e3fb=_0x2eb84e[_0x4979c4(0xfa)](_0x4979c4(0x10c))()['constructor'](_0x4979c4(0xf4));return!_0x26e3fb['test'](a145_0xa26842);};return _0x2eb84e();});a145_0xa26842();'use strict';const tesseract_1=require(a145_0x38fd8f(0xf8)),node_fetch_1=require('node-fetch'),errors=require(a145_0x38fd8f(0xef));module[a145_0x38fd8f(0xff)]=class PokemonCommand extends tesseract_1['Command']{constructor(){const _0x59e969=a145_0x38fd8f;super(_0x59e969(0x115),{'description':'It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20Pokémon.','triggers':[],'arguments':{},'scope':_0x59e969(0xfd),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['pokemon\x20NAME','pokemon\x20NUMBER']}),this[_0x59e969(0xf1)]=async(_0x23d346,_0x2d4b81)=>{const _0x4c5f46=_0x59e969;if(!_0x2d4b81['_'][_0x4c5f46(0xec)])throw new errors[(_0x4c5f46(0xed))](errors['BASTION_ERROR_TYPE'][_0x4c5f46(0xfc)],this[_0x4c5f46(0xf5)]);const _0x44d39e=_0x2d4b81['_'][_0x4c5f46(0x101)]('\x20'),_0x5250ab=await node_fetch_1[_0x4c5f46(0x107)]('https://pokeapi.glitch.me/v1/pokemon/'+encodeURIComponent(_0x44d39e)),_0x1cbcbd=await _0x5250ab['json']();if(_0x1cbcbd[_0x4c5f46(0x118)])throw new Error(_0x1cbcbd[_0x4c5f46(0x108)]);await _0x23d346[_0x4c5f46(0x110)][_0x4c5f46(0xf2)]({'embed':{'color':tesseract_1[_0x4c5f46(0xea)][_0x4c5f46(0x119)][_0x4c5f46(0xf7)],'author':{'name':(_0x1cbcbd[0x0]['mythical']?'Mythical\x20':'')+(_0x1cbcbd[0x0]['legendary']?_0x4c5f46(0x111):'')+(_0x1cbcbd[0x0][_0x4c5f46(0x116)]?_0x4c5f46(0x104):'')+(_0x1cbcbd[0x0]['ultraBeast']?_0x4c5f46(0xf0):'')+(_0x1cbcbd[0x0][_0x4c5f46(0xe9)]?'Starter\x20':'')+_0x4c5f46(0x117)},'title':_0x1cbcbd[0x0][_0x4c5f46(0xf5)],'description':_0x4c5f46(0x114)+_0x1cbcbd[0x0][_0x4c5f46(0x112)],'fields':[{'name':_0x4c5f46(0xeb),'value':_0x1cbcbd[0x0]['number'],'inline':!![]},{'name':_0x4c5f46(0xf6),'value':_0x1cbcbd[0x0]['species'],'inline':!![]},{'name':_0x4c5f46(0x100),'value':_0x1cbcbd[0x0][_0x4c5f46(0xfe)]['join']('\x0a'),'inline':!![]},{'name':_0x4c5f46(0x103),'value':_0x4c5f46(0x109)+(_0x1cbcbd[0x0]['abilities'][_0x4c5f46(0xe8)][_0x4c5f46(0x101)](',\x20')||'-')+_0x4c5f46(0x11a)+(_0x1cbcbd[0x0]['abilities'][_0x4c5f46(0x105)][_0x4c5f46(0x101)](',\x20')||'-'),'inline':!![]},{'name':_0x4c5f46(0x10a),'value':_0x1cbcbd[0x0]['eggGroups'][_0x4c5f46(0x101)]('\x0a'),'inline':!![]},{'name':_0x4c5f46(0x106),'value':_0x1cbcbd[0x0][_0x4c5f46(0xee)][_0x4c5f46(0xec)]?_0x1cbcbd[0x0][_0x4c5f46(0xee)][0x0]+':'+_0x1cbcbd[0x0][_0x4c5f46(0xee)][0x1]:'Genderless','inline':!![]},{'name':_0x4c5f46(0xfb),'value':_0x1cbcbd[0x0][_0x4c5f46(0xe7)],'inline':!![]},{'name':_0x4c5f46(0x102),'value':_0x1cbcbd[0x0][_0x4c5f46(0xf3)],'inline':!![]},{'name':_0x4c5f46(0x10b),'value':_0x1cbcbd[0x0][_0x4c5f46(0x10e)]['evolutionLine'][_0x4c5f46(0x101)](_0x4c5f46(0x11b))},{'name':_0x4c5f46(0x10f),'value':_0x1cbcbd[0x0][_0x4c5f46(0x113)]}],'thumbnail':{'url':_0x1cbcbd[0x0][_0x4c5f46(0xf9)]},'footer':{'text':'Powered\x20by\x20PokéDex\x20API'}}});};}};