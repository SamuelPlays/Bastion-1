const a130_0x5a34=['rocketLeague','test','https://rocketleague.media.zestyio.com/Rocket-League-Logo-Full_On-Dark-Vertical.f1cb27a519bdb5b6ed34049a5b86e317.png','includes','@bastion/tesseract','toTitleCase','stats','../../utils/strings','channel','PLAYER_NOT_FOUND','INVALID_COMMAND_SYNTAX','platform','Season\x20Reward','DiscordError','wins','send','\x20Wins','xboxone','toUpperCase','/playerstats/rocketleague/','COLORS','steam','season_rewards','join','platforms','json','toLowerCase','exec','Level\x20','level','../../utils/errors','ps4','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','rocketLeague\x20USERNAME\x20--platform\x20PLATFORM','length','exports','user_name','BASTION_ERROR_TYPE'];(function(_0x45ef75,_0x5f0eeb){const _0x5a34fe=function(_0x8e72d){while(--_0x8e72d){_0x45ef75['push'](_0x45ef75['shift']());}},_0x102938=function(){const _0x8bb5f2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2efd89,_0x87c3bc,_0x1b47dc,_0x165e91){_0x165e91=_0x165e91||{};let _0x16b599=_0x87c3bc+'='+_0x1b47dc,_0x3590fc=0x0;for(let _0x26b5f4=0x0,_0x4dc530=_0x2efd89['length'];_0x26b5f4<_0x4dc530;_0x26b5f4++){const _0x54e579=_0x2efd89[_0x26b5f4];_0x16b599+=';\x20'+_0x54e579;const _0x479701=_0x2efd89[_0x54e579];_0x2efd89['push'](_0x479701),_0x4dc530=_0x2efd89['length'],_0x479701!==!![]&&(_0x16b599+='='+_0x479701);}_0x165e91['cookie']=_0x16b599;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e570c,_0x4b9d50){_0x5e570c=_0x5e570c||function(_0x39b5d0){return _0x39b5d0;};const _0x401206=_0x5e570c(new RegExp('(?:^|;\x20)'+_0x4b9d50['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x49a56d=function(_0x33be78,_0x284369){_0x33be78(++_0x284369);};return _0x49a56d(_0x5a34fe,_0x5f0eeb),_0x401206?decodeURIComponent(_0x401206[0x1]):undefined;}},_0x2b7a41=function(){const _0x3057d6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3057d6['test'](_0x8bb5f2['removeCookie']['toString']());};_0x8bb5f2['updateCookie']=_0x2b7a41;let _0x487693='';const _0x3ffdb1=_0x8bb5f2['updateCookie']();if(!_0x3ffdb1)_0x8bb5f2['setCookie'](['*'],'counter',0x1);else _0x3ffdb1?_0x487693=_0x8bb5f2['getCookie'](null,'counter'):_0x8bb5f2['removeCookie']();};_0x102938();}(a130_0x5a34,0x10d));const a130_0x1029=function(_0x45ef75,_0x5f0eeb){_0x45ef75=_0x45ef75-0xd8;let _0x5a34fe=a130_0x5a34[_0x45ef75];return _0x5a34fe;};const a130_0x271421=a130_0x1029,a130_0x2b7a41=function(){let _0x3ffdb1=!![];return function(_0x2efd89,_0x87c3bc){const _0x1b47dc=_0x3ffdb1?function(){if(_0x87c3bc){const _0x165e91=_0x87c3bc['apply'](_0x2efd89,arguments);return _0x87c3bc=null,_0x165e91;}}:function(){};return _0x3ffdb1=![],_0x1b47dc;};}(),a130_0x8bb5f2=a130_0x2b7a41(this,function(){const _0x16b599=function(){const _0x5158be=a130_0x1029,_0x3590fc=_0x16b599[_0x5158be(0xe1)](_0x5158be(0xe2))()[_0x5158be(0xe1)](_0x5158be(0xe4));return!_0x3590fc[_0x5158be(0xeb)](a130_0x8bb5f2);};return _0x16b599();});a130_0x8bb5f2();'use strict';const tesseract_1=require(a130_0x271421(0xee)),constants=require('../../utils/constants'),errors=require(a130_0x271421(0xdf)),omnic=require('../../utils/omnic'),strings=require(a130_0x271421(0xf1));module[a130_0x271421(0xe7)]=class RocketLeagueCommand extends tesseract_1['Command']{constructor(){const _0x4bf457=a130_0x271421;super(_0x4bf457(0xea),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Rocket\x20League\x20player\x20in\x20any\x20supported\x20platform.','triggers':[],'arguments':{'alias':{'platform':['p']},'string':[_0x4bf457(0xf5)]},'scope':_0x4bf457(0xe3),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rocketLeague\x20USERNAME',_0x4bf457(0xe5)]}),this[_0x4bf457(0xdc)]=async(_0x26b5f4,_0x4dc530)=>{const _0x434897=_0x4bf457;if(!_0x4dc530['_'][_0x434897(0xe6)])throw new errors[(_0x434897(0xf7))](errors[_0x434897(0xe9)][_0x434897(0xf4)],this['name']);const _0x54e579=_0x4dc530['_'][_0x434897(0xd8)]('\x20'),_0x479701=_0x4dc530[_0x434897(0xf5)]&&this[_0x434897(0xd9)][_0x434897(0xed)](_0x4dc530['platform'][_0x434897(0xdb)]())?_0x4dc530[_0x434897(0xf5)][_0x434897(0xdb)]():this[_0x434897(0xd9)][0x0],_0x5e570c=await omnic['makeRequest'](_0x434897(0xfd)+_0x479701+'/'+encodeURIComponent(_0x54e579)),_0x4b9d50=await _0x5e570c[_0x434897(0xda)]();if(!_0x4b9d50[_0x434897(0xe8)])throw new Error(_0x434897(0xf3));await _0x26b5f4[_0x434897(0xf2)][_0x434897(0xf9)]({'embed':{'color':constants[_0x434897(0xfe)]['ROCKET_LEAGUE'],'author':{'name':_0x4b9d50[_0x434897(0xe8)]+'\x20/\x20'+_0x54e579},'title':'Rocket\x20League\x20-\x20Player\x20Stats','fields':[{'name':_0x434897(0xf6),'value':_0x434897(0xdd)+_0x4b9d50[_0x434897(0x100)]?_0x4b9d50[_0x434897(0x100)][_0x434897(0xde)]+(_0x4b9d50[_0x434897(0x100)][_0x434897(0xf8)]?_0x4b9d50['season_rewards']['wins']+_0x434897(0xfa):''):'-'},...Object['keys'](_0x4b9d50[_0x434897(0xf0)])['map'](_0x401206=>({'name':strings[_0x434897(0xef)](_0x401206),'value':_0x4b9d50[_0x434897(0xf0)][_0x401206],'inline':!![]}))],'thumbnail':{'url':_0x434897(0xec)},'footer':{'text':_0x479701[_0x434897(0xfc)]()+'\x20•\x20Powered\x20by\x20Rocket\x20League'}}});},this[_0x4bf457(0xd9)]=[_0x4bf457(0xff),_0x4bf457(0xe0),_0x4bf457(0xfb)];}};