const a20_0x189b=['It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','fetchPremiumTier','save','MANAGE_GUILD','gambling','DiscordError','test','PREMIUM_MEMBERSHIP_REQUIRED','gambling\x20--multiplier\x201..13','COLORS','multiplier','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','tag','Constants','exec','errors','gamblingDisable','send','apply','constructor','catch','getString','document','RED','locale','@bastion/tesseract','../../utils/errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','client','toString','Gambling\x20Reward\x20Multiplier','gamblingEnable','guild','BASTION_ERROR_TYPE','premiumGamblingMultiplier','info','exports','enabled','language','../../utils/omnic','../../utils/constants'];(function(_0x4d38e3,_0x4c01dc){const _0x189b76=function(_0x206ae3){while(--_0x206ae3){_0x4d38e3['push'](_0x4d38e3['shift']());}},_0x4ba915=function(){const _0x388ad5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x34620,_0x82b91b,_0x269615,_0x5b767b){_0x5b767b=_0x5b767b||{};let _0x29bcb7=_0x82b91b+'='+_0x269615,_0x2f564e=0x0;for(let _0x1ea26c=0x0,_0x2f87f5=_0x34620['length'];_0x1ea26c<_0x2f87f5;_0x1ea26c++){const _0x58eb98=_0x34620[_0x1ea26c];_0x29bcb7+=';\x20'+_0x58eb98;const _0x17c64b=_0x34620[_0x58eb98];_0x34620['push'](_0x17c64b),_0x2f87f5=_0x34620['length'],_0x17c64b!==!![]&&(_0x29bcb7+='='+_0x17c64b);}_0x5b767b['cookie']=_0x29bcb7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x171193,_0x2986c6){_0x171193=_0x171193||function(_0x39e908){return _0x39e908;};const _0x47a088=_0x171193(new RegExp('(?:^|;\x20)'+_0x2986c6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x510c5c=function(_0x4cc16b,_0x3a6397){_0x4cc16b(++_0x3a6397);};return _0x510c5c(_0x189b76,_0x4c01dc),_0x47a088?decodeURIComponent(_0x47a088[0x1]):undefined;}},_0x14b06b=function(){const _0x418fa5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x418fa5['test'](_0x388ad5['removeCookie']['toString']());};_0x388ad5['updateCookie']=_0x14b06b;let _0x270982='';const _0x323e10=_0x388ad5['updateCookie']();if(!_0x323e10)_0x388ad5['setCookie'](['*'],'counter',0x1);else _0x323e10?_0x270982=_0x388ad5['getCookie'](null,'counter'):_0x388ad5['removeCookie']();};_0x4ba915();}(a20_0x189b,0x103));const a20_0x4ba9=function(_0x4d38e3,_0x4c01dc){_0x4d38e3=_0x4d38e3-0x68;let _0x189b76=a20_0x189b[_0x4d38e3];return _0x189b76;};const a20_0x3f3492=a20_0x4ba9,a20_0x14b06b=function(){let _0x323e10=!![];return function(_0x34620,_0x82b91b){const _0x269615=_0x323e10?function(){const _0x5b5a00=a20_0x4ba9;if(_0x82b91b){const _0x5b767b=_0x82b91b[_0x5b5a00(0x73)](_0x34620,arguments);return _0x82b91b=null,_0x5b767b;}}:function(){};return _0x323e10=![],_0x269615;};}(),a20_0x388ad5=a20_0x14b06b(this,function(){const _0x29bcb7=function(){const _0x53ee3e=a20_0x4ba9,_0x2f564e=_0x29bcb7['constructor'](_0x53ee3e(0x7c))()[_0x53ee3e(0x74)](_0x53ee3e(0x6c));return!_0x2f564e[_0x53ee3e(0x91)](a20_0x388ad5);};return _0x29bcb7();});a20_0x388ad5();'use strict';const tesseract_1=require(a20_0x3f3492(0x7a)),constants=require(a20_0x3f3492(0x8a)),errors=require(a20_0x3f3492(0x7b)),omnic=require(a20_0x3f3492(0x89));module[a20_0x3f3492(0x86)]=class GamblingCommand extends tesseract_1['Command']{constructor(){const _0x421754=a20_0x3f3492;super(_0x421754(0x8f),{'description':_0x421754(0x8b),'triggers':[],'arguments':{'number':[_0x421754(0x6b)]},'scope':_0x421754(0x82),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x421754(0x8e)],'syntax':['gambling',_0x421754(0x69)]}),this[_0x421754(0x6f)]=async(_0x1ea26c,_0x2f87f5)=>{const _0x5407a3=_0x421754;if(_0x2f87f5[_0x5407a3(0x6b)]&&constants['isPublicBastion'](this[_0x5407a3(0x7e)]['user'])){const _0x171193=await omnic[_0x5407a3(0x8c)](_0x1ea26c[_0x5407a3(0x82)])[_0x5407a3(0x75)](()=>{});if(!_0x171193)throw new errors[(_0x5407a3(0x90))](errors[_0x5407a3(0x83)][_0x5407a3(0x68)],this['client'][_0x5407a3(0x79)][_0x5407a3(0x76)](_0x1ea26c[_0x5407a3(0x82)][_0x5407a3(0x77)][_0x5407a3(0x88)],_0x5407a3(0x70),_0x5407a3(0x84)));}const _0x58eb98=_0x1ea26c['guild'],_0x17c64b=_0x2f87f5[_0x5407a3(0x6b)]?!![]:!(_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)]&&_0x58eb98[_0x5407a3(0x77)]['gambling'][_0x5407a3(0x87)]);_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)]={'enabled':_0x17c64b,'multiplier':typeof _0x2f87f5[_0x5407a3(0x6b)]==='number'?_0x2f87f5[_0x5407a3(0x6b)]:_0x17c64b?_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)]&&_0x58eb98['document'][_0x5407a3(0x8f)][_0x5407a3(0x6b)]:undefined},await _0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8d)](),await _0x1ea26c[_0x5407a3(0x7d)][_0x5407a3(0x72)]({'embed':{'color':_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)][_0x5407a3(0x87)]?tesseract_1['Constants'][_0x5407a3(0x6a)]['GREEN']:tesseract_1[_0x5407a3(0x6e)][_0x5407a3(0x6a)][_0x5407a3(0x78)],'description':this['client']['locale'][_0x5407a3(0x76)](_0x1ea26c[_0x5407a3(0x82)]['document'][_0x5407a3(0x88)],_0x5407a3(0x85),_0x58eb98[_0x5407a3(0x77)]['gambling'][_0x5407a3(0x87)]?_0x5407a3(0x81):_0x5407a3(0x71),_0x1ea26c['author'][_0x5407a3(0x6d)]),'fields':_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)][_0x5407a3(0x87)]?[{'name':_0x5407a3(0x80),'value':_0x58eb98[_0x5407a3(0x77)][_0x5407a3(0x8f)]['multiplier']?_0x58eb98[_0x5407a3(0x77)]['gambling']['multiplier']['toString']():0x1[_0x5407a3(0x7f)](),'inline':!![]}]:[]}})[_0x5407a3(0x75)](()=>{});};}};