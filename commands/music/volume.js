const a315_0x4f8f=['guild','length','errors','DiscordError','parseInt','@bastion/tesseract','setVolume','INVALID_COMMAND_SYNTAX','Constants','\x20•\x20','track','author','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','isMusicMaster','exports','locale','member','client','PINK','RED','isInteger','language','catch','../../utils/constants','connection','name','document','dispatcher','volume','voice','paused','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','BASTION_ERROR_TYPE','textChannel','channel','It\x20allows\x20you\x20to\x20set\x20the\x20volume\x20of\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','getString','../../utils/errors','tag','COLORS','apply','queue','enabled','test','music','musicDisabled'];(function(_0x69b2db,_0x4f8f06){const _0x525839=function(_0x2acb22){while(--_0x2acb22){_0x69b2db['push'](_0x69b2db['shift']());}};const _0x129a44=function(){const _0x387460={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3930f5,_0x4d08b8,_0x186dc7,_0x149e33){_0x149e33=_0x149e33||{};let _0x1d36a5=_0x4d08b8+'='+_0x186dc7;let _0x392e4b=0x0;for(let _0x468756=0x0,_0x22b47b=_0x3930f5['length'];_0x468756<_0x22b47b;_0x468756++){const _0x4af4c5=_0x3930f5[_0x468756];_0x1d36a5+=';\x20'+_0x4af4c5;const _0x45c7c4=_0x3930f5[_0x4af4c5];_0x3930f5['push'](_0x45c7c4);_0x22b47b=_0x3930f5['length'];if(_0x45c7c4!==!![]){_0x1d36a5+='='+_0x45c7c4;}}_0x149e33['cookie']=_0x1d36a5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x253129,_0x5e3127){_0x253129=_0x253129||function(_0x9f421){return _0x9f421;};const _0x5cd13d=_0x253129(new RegExp('(?:^|;\x20)'+_0x5e3127['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x52977d=function(_0x1b300e,_0x91b4a8){_0x1b300e(++_0x91b4a8);};_0x52977d(_0x525839,_0x4f8f06);return _0x5cd13d?decodeURIComponent(_0x5cd13d[0x1]):undefined;}};const _0x3ec163=function(){const _0x335d0a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x335d0a['test'](_0x387460['removeCookie']['toString']());};_0x387460['updateCookie']=_0x3ec163;let _0x3df066='';const _0x4a1a83=_0x387460['updateCookie']();if(!_0x4a1a83){_0x387460['setCookie'](['*'],'counter',0x1);}else if(_0x4a1a83){_0x3df066=_0x387460['getCookie'](null,'counter');}else{_0x387460['removeCookie']();}};_0x129a44();}(a315_0x4f8f,0x7f));const a315_0x5258=function(_0x69b2db,_0x4f8f06){_0x69b2db=_0x69b2db-0x0;let _0x525839=a315_0x4f8f[_0x69b2db];return _0x525839;};const a315_0x387460=function(){let _0x5c5398=!![];return function(_0x4a1f8c,_0x43fe88){const _0x42fb9f=_0x5c5398?function(){if(_0x43fe88){const _0x5457c6=_0x43fe88[a315_0x5258('0x8')](_0x4a1f8c,arguments);_0x43fe88=null;return _0x5457c6;}}:function(){};_0x5c5398=![];return _0x42fb9f;};}();const a315_0x2acb22=a315_0x387460(this,function(){const _0x19b305=function(){const _0x14ace8=_0x19b305['constructor'](a315_0x5258('0x1b'))()['compile'](a315_0x5258('0x2e'));return!_0x14ace8[a315_0x5258('0xb')](a315_0x2acb22);};return _0x19b305();});a315_0x2acb22();'use strict';const tesseract_1=require(a315_0x5258('0x13'));const constants=require(a315_0x5258('0x26'));const errors=require(a315_0x5258('0x5'));module[a315_0x5258('0x1d')]=class Volume extends tesseract_1['Command']{constructor(){super(a315_0x5258('0x2b'),{'description':a315_0x5258('0x3'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['volume\x2042']});this['exec']=async(_0x5a46d6,_0x33248b)=>{let _0x517f14=Number[a315_0x5258('0x12')](_0x33248b['_'][0x0]);if(!_0x33248b['_'][a315_0x5258('0xf')]||!Number[a315_0x5258('0x23')](_0x517f14))throw new errors[(a315_0x5258('0x11'))](errors[a315_0x5258('0x0')][a315_0x5258('0x15')],this[a315_0x5258('0x28')]);const _0x22ac12=_0x5a46d6['guild'];if(!_0x22ac12[a315_0x5258('0x29')]['music']||!_0x22ac12[a315_0x5258('0x29')]['music'][a315_0x5258('0xa')]){return await _0x5a46d6[a315_0x5258('0x2')][a315_0x5258('0x1a')]({'embed':{'color':tesseract_1[a315_0x5258('0x16')][a315_0x5258('0x7')][a315_0x5258('0x22')],'description':this[a315_0x5258('0x20')][a315_0x5258('0x1e')][a315_0x5258('0x4')](_0x5a46d6['guild'][a315_0x5258('0x29')][a315_0x5258('0x24')],a315_0x5258('0x10'),constants['isPublicBastion'](_0x5a46d6['author'])?'musicDisabledPublic':a315_0x5258('0xd'))}})[a315_0x5258('0x25')](()=>{});}if(!_0x5a46d6[a315_0x5258('0x1f')][a315_0x5258('0x1c')]())return;if(_0x22ac12[a315_0x5258('0xc')]['playing']&&_0x22ac12[a315_0x5258('0x2c')]&&_0x22ac12['voice'][a315_0x5258('0x27')][a315_0x5258('0x2a')]&&!_0x22ac12[a315_0x5258('0x2c')][a315_0x5258('0x27')][a315_0x5258('0x2a')][a315_0x5258('0x2d')]){_0x517f14=_0x517f14<0x1?0x1:_0x517f14>0xc8?0xc8:_0x517f14;_0x22ac12[a315_0x5258('0x2c')]['connection']['dispatcher'][a315_0x5258('0x14')](_0x517f14/0x64);const _0x29a027=_0x22ac12[a315_0x5258('0xc')][a315_0x5258('0x9')][0x0];_0x22ac12[a315_0x5258('0xc')][a315_0x5258('0x1')][a315_0x5258('0x1a')]({'embed':{'color':tesseract_1['Constants'][a315_0x5258('0x7')][a315_0x5258('0x21')],'title':'Volume','description':this[a315_0x5258('0x20')][a315_0x5258('0x1e')][a315_0x5258('0x4')](_0x5a46d6[a315_0x5258('0xe')][a315_0x5258('0x29')][a315_0x5258('0x24')],'info',a315_0x5258('0x14'),_0x5a46d6[a315_0x5258('0x19')][a315_0x5258('0x6')],_0x517f14),'footer':{'text':_0x29a027[a315_0x5258('0x18')]+a315_0x5258('0x17')+_0x22ac12[a315_0x5258('0x2c')][a315_0x5258('0x27')][a315_0x5258('0x2')]['name']}}})[a315_0x5258('0x25')](()=>{});}};}};