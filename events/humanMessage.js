const a575_0x2728=['gamification','Logger','Constants','push','tag','Team','default','reply','experience','level','makeRequest','COLORS','react','exports','random','channel','handleVotingChannels','replaceMessageVariables','setTimeout','handleTriggers','author','content','reaction','handleInstantResponses','createDM','/chat/instant?message=','save','map','../models/Role','../utils/omnic','locale','handleDirectMessageRelay','credit','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','@bastion/tesseract','findOne','../utils/emojis','fetchApplication','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','success','computeLevel','json','catch','DEFAUL_CURRENCY_REWARD_MULTIPLIER','cache','constructor','handleGamification','enabled','discord.js','_id','splice','replace','floor','set','\x20Trigger','apply','has','parse','filter','findById','compile','Level-up\x20Reward','humanMessage','../models/TextChannel','levelUp','length','getString','roles','user','document','displayAvatarURL','send','owner','get','responseMessage','handleLevelRoles','messages','MAX_EXPERIENCE','ModuleManagerEvent','trigger','LEVELED\x20UP!','recentUsers','includes','guild','responseReaction','stringify','remove','add','IRIS','member','indexOf','response','test','bastion.name','client','../models/Config'];(function(_0x20ac08,_0x272876){const _0x432e76=function(_0x12f18e){while(--_0x12f18e){_0x20ac08['push'](_0x20ac08['shift']());}};const _0x5238a7=function(){const _0x47b405={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13191f,_0x4378da,_0x1a067f,_0x668028){_0x668028=_0x668028||{};let _0x237f8d=_0x4378da+'='+_0x1a067f;let _0x291666=0x0;for(let _0x3dee5d=0x0,_0x5212e9=_0x13191f['length'];_0x3dee5d<_0x5212e9;_0x3dee5d++){const _0x231fad=_0x13191f[_0x3dee5d];_0x237f8d+=';\x20'+_0x231fad;const _0x4acc4e=_0x13191f[_0x231fad];_0x13191f['push'](_0x4acc4e);_0x5212e9=_0x13191f['length'];if(_0x4acc4e!==!![]){_0x237f8d+='='+_0x4acc4e;}}_0x668028['cookie']=_0x237f8d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3c84ba,_0x90003){_0x3c84ba=_0x3c84ba||function(_0x4606a5){return _0x4606a5;};const _0x1d1ed1=_0x3c84ba(new RegExp('(?:^|;\x20)'+_0x90003['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4ba5e5=function(_0x2853fe,_0x1c0822){_0x2853fe(++_0x1c0822);};_0x4ba5e5(_0x432e76,_0x272876);return _0x1d1ed1?decodeURIComponent(_0x1d1ed1[0x1]):undefined;}};const _0x18fcf0=function(){const _0x155ac9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x155ac9['test'](_0x47b405['removeCookie']['toString']());};_0x47b405['updateCookie']=_0x18fcf0;let _0xa8791c='';const _0x4447f2=_0x47b405['updateCookie']();if(!_0x4447f2){_0x47b405['setCookie'](['*'],'counter',0x1);}else if(_0x4447f2){_0xa8791c=_0x47b405['getCookie'](null,'counter');}else{_0x47b405['removeCookie']();}};_0x5238a7();}(a575_0x2728,0xed));const a575_0x432e=function(_0x20ac08,_0x272876){_0x20ac08=_0x20ac08-0x0;let _0x432e76=a575_0x2728[_0x20ac08];return _0x432e76;};const a575_0x47b405=function(){let _0x2da929=!![];return function(_0x2f0e8,_0x59a71c){const _0x34ae10=_0x2da929?function(){if(_0x59a71c){const _0x4a4889=_0x59a71c[a575_0x432e('0xd')](_0x2f0e8,arguments);_0x59a71c=null;return _0x4a4889;}}:function(){};_0x2da929=![];return _0x34ae10;};}();const a575_0x12f18e=a575_0x47b405(this,function(){const _0x2bddd8=function(){const _0xa12a30=_0x2bddd8[a575_0x432e('0x3')](a575_0x432e('0x5c'))()[a575_0x432e('0x12')](a575_0x432e('0x57'));return!_0xa12a30[a575_0x432e('0x32')](a575_0x12f18e);};return _0x2bddd8();});a575_0x12f18e();'use strict';const tesseract_1=require(a575_0x432e('0x58'));const discord_js_1=require(a575_0x432e('0x6'));const emojis=require(a575_0x432e('0x5a'));const gamification=require('../utils/gamification');const omnic=require(a575_0x432e('0x53'));const variables=require('../utils/variables');const Config_1=require(a575_0x432e('0x35'));const Role_1=require(a575_0x432e('0x52'));const TextChannel_1=require(a575_0x432e('0x15'));const Trigger_1=require('../models/Trigger');module[a575_0x432e('0x43')]=class HumanMessageEvent extends tesseract_1[a575_0x432e('0x24')]{constructor(){super(a575_0x432e('0x14'));this[a575_0x432e('0x21')]=async(_0xd25ad7,_0x3a18ca)=>{const _0x1b976c=await Role_1[a575_0x432e('0x3c')]['find']({'guild':_0xd25ad7[a575_0x432e('0x29')]['id'],'level':{'$exists':!![]}});const _0xdbe0a5=_0x1b976c[a575_0x432e('0x10')](_0x666eff=>_0x666eff[a575_0x432e('0x3f')]!==_0x3a18ca&&_0xd25ad7[a575_0x432e('0x29')][a575_0x432e('0x19')][a575_0x432e('0x2')][a575_0x432e('0xe')](_0x666eff[a575_0x432e('0x7')]));const _0x8fb1ca=_0x1b976c[a575_0x432e('0x10')](_0x5be733=>_0x5be733[a575_0x432e('0x3f')]===_0x3a18ca&&_0xd25ad7[a575_0x432e('0x29')]['roles'][a575_0x432e('0x2')][a575_0x432e('0xe')](_0x5be733[a575_0x432e('0x7')]));if(_0x8fb1ca[a575_0x432e('0x17')]){await _0xd25ad7['member'][a575_0x432e('0x19')][a575_0x432e('0x2d')](_0x8fb1ca['map'](_0x127dda=>_0x127dda[a575_0x432e('0x7')]));await _0xd25ad7[a575_0x432e('0x2f')]['roles'][a575_0x432e('0x2c')](_0xdbe0a5[a575_0x432e('0x51')](_0x1f1288=>_0x1f1288[a575_0x432e('0x7')]));}};this['handleGamification']=async _0xa35d02=>{const _0x4afa98=this[a575_0x432e('0x27')][a575_0x432e('0x1f')](_0xa35d02[a575_0x432e('0x29')]['id'])||[];if(_0x4afa98[a575_0x432e('0x28')](_0xa35d02['author']['id']))return;const _0x1b0291=_0xa35d02['client'];const _0x2637b4=_0xa35d02[a575_0x432e('0x29')];const _0x433574=_0xa35d02[a575_0x432e('0x2f')];if(!_0x2637b4[a575_0x432e('0x1b')][a575_0x432e('0x36')]||!_0x2637b4['document'][a575_0x432e('0x36')][a575_0x432e('0x5')])return;if(_0x433574['document'][a575_0x432e('0x3f')]>=gamification['MAX_LEVEL']||_0x433574['document']['experience']>=gamification[a575_0x432e('0x23')](_0x2637b4[a575_0x432e('0x1b')][a575_0x432e('0x36')]['multiplier']))return;_0x433574[a575_0x432e('0x1b')][a575_0x432e('0x3e')]+=0x1;const _0x52e286=gamification[a575_0x432e('0x5f')](_0x433574[a575_0x432e('0x1b')][a575_0x432e('0x3e')],_0x2637b4[a575_0x432e('0x1b')][a575_0x432e('0x36')]['multiplier']);_0x433574[a575_0x432e('0x1b')][a575_0x432e('0x3f')]=_0x52e286;if(_0x52e286>_0x433574[a575_0x432e('0x1b')][a575_0x432e('0x3f')]){await _0x433574[a575_0x432e('0x56')](_0x52e286*gamification[a575_0x432e('0x1')],a575_0x432e('0x13'),_0x433574[a575_0x432e('0x1b')]);if(_0x2637b4[a575_0x432e('0x1b')]['gamification'][a575_0x432e('0x22')]){_0xa35d02['channel']['send']({'embed':{'color':tesseract_1[a575_0x432e('0x38')][a575_0x432e('0x41')][a575_0x432e('0x2e')],'fields':[{'name':a575_0x432e('0x26'),'value':_0x1b0291['locale'][a575_0x432e('0x18')](_0x2637b4[a575_0x432e('0x1b')][a575_0x432e('0x5d')],'info',a575_0x432e('0x16'),_0xa35d02[a575_0x432e('0x4a')][a575_0x432e('0x3a')],_0x433574['document'][a575_0x432e('0x3f')])}]}})[a575_0x432e('0x0')](()=>{});}this[a575_0x432e('0x21')](_0xa35d02,_0x433574[a575_0x432e('0x1b')][a575_0x432e('0x3f')])[a575_0x432e('0x0')](tesseract_1[a575_0x432e('0x37')]['error']);}await _0x433574[a575_0x432e('0x1b')][a575_0x432e('0x50')]();_0x4afa98[a575_0x432e('0x39')](_0xa35d02[a575_0x432e('0x4a')]['id']);this[a575_0x432e('0x27')][a575_0x432e('0xb')](_0xa35d02[a575_0x432e('0x29')]['id'],_0x4afa98);_0xa35d02['client'][a575_0x432e('0x48')](()=>{const _0x16af90=this[a575_0x432e('0x27')][a575_0x432e('0x1f')](_0xa35d02['guild']['id']);_0x16af90[a575_0x432e('0x8')](_0x16af90[a575_0x432e('0x30')](_0xa35d02[a575_0x432e('0x4a')]['id']),0x1);this[a575_0x432e('0x27')]['set'](_0xa35d02[a575_0x432e('0x29')]['id'],_0x16af90);},0x32c8);};this[a575_0x432e('0x49')]=async _0x56be1d=>{if(!_0x56be1d['content'])return;const _0x38e96d=await Trigger_1[a575_0x432e('0x3c')]['find']({'guild':_0x56be1d['guild']['id']});const _0x1c7603=[];const _0x4bb2b0=[];for(const _0xafc303 of _0x38e96d){const _0x1db041=new RegExp(_0xafc303[a575_0x432e('0x25')][a575_0x432e('0x9')](/\?/g,'.')[a575_0x432e('0x9')](/\*+/g,'.*'),'ig');if(!_0x1db041[a575_0x432e('0x32')](_0x56be1d[a575_0x432e('0x4b')]))continue;if(_0xafc303['responseMessage']){_0x1c7603[a575_0x432e('0x39')](_0xafc303[a575_0x432e('0x20')]);}if(_0xafc303[a575_0x432e('0x2a')]){const _0xe5e5d7=emojis['parseEmoji'](_0xafc303[a575_0x432e('0x2a')]);if(_0xe5e5d7){_0x4bb2b0[a575_0x432e('0x39')](_0xe5e5d7[a575_0x432e('0x4c')]);}}}if(_0x1c7603[a575_0x432e('0x17')]){_0x56be1d[a575_0x432e('0x45')][a575_0x432e('0x1d')]({'embed':{...JSON[a575_0x432e('0xf')](variables[a575_0x432e('0x47')](JSON[a575_0x432e('0x2b')](_0x1c7603[Math[a575_0x432e('0xa')](Math[a575_0x432e('0x44')]()*_0x1c7603[a575_0x432e('0x17')])]),_0x56be1d)),'footer':{'text':_0x56be1d[a575_0x432e('0x34')][a575_0x432e('0x54')]['getConstant'](a575_0x432e('0x33'))+a575_0x432e('0xc')}}});}if(_0x4bb2b0['length']){_0x56be1d[a575_0x432e('0x42')](_0x4bb2b0[Math[a575_0x432e('0xa')](Math[a575_0x432e('0x44')]()*_0x4bb2b0[a575_0x432e('0x17')])]);}};this['handleVotingChannels']=async _0x5c83ac=>{const _0x3ddd2a=await TextChannel_1[a575_0x432e('0x3c')][a575_0x432e('0x59')]({'_id':_0x5c83ac[a575_0x432e('0x45')]['id'],'voting':!![]});if(!_0x3ddd2a)return;_0x5c83ac[a575_0x432e('0x42')]('👍')['catch'](()=>{});_0x5c83ac['react']('👎')[a575_0x432e('0x0')](()=>{});};this[a575_0x432e('0x4d')]=async _0x4e18d1=>{if(!_0x4e18d1['content'])return;const _0x4b6c94=await omnic[a575_0x432e('0x40')](a575_0x432e('0x4f')+encodeURIComponent(_0x4e18d1[a575_0x432e('0x4b')]))['then'](_0x19199b=>_0x19199b[a575_0x432e('0x60')]());if(_0x4b6c94['status']!==a575_0x432e('0x5e'))return;const _0x32816b=_0x4b6c94[a575_0x432e('0x31')][a575_0x432e('0x3d')]instanceof Array?_0x4b6c94[a575_0x432e('0x31')][a575_0x432e('0x3d')]:[_0x4b6c94['response'][a575_0x432e('0x3d')]];for(const _0x5e5622 of _0x32816b){await _0x4e18d1['channel']['send'](_0x5e5622)[a575_0x432e('0x0')](()=>{});}};this[a575_0x432e('0x55')]=async _0x50ffb3=>{const _0x49b24f=await Config_1[a575_0x432e('0x3c')][a575_0x432e('0x11')](_0x50ffb3[a575_0x432e('0x34')][a575_0x432e('0x1a')]['id']);if(_0x49b24f['relayDirectMessages']&&_0x50ffb3[a575_0x432e('0x4b')]){const _0x5509dd=await _0x50ffb3[a575_0x432e('0x34')][a575_0x432e('0x5b')]();const _0x50d68e=_0x5509dd[a575_0x432e('0x1e')]instanceof discord_js_1[a575_0x432e('0x3b')]?_0x5509dd['owner']['owner'][a575_0x432e('0x1a')]:_0x5509dd[a575_0x432e('0x1e')];if(_0x50ffb3[a575_0x432e('0x4a')]['id']===_0x50d68e['id'])return;const _0x12fc70=await _0x50d68e[a575_0x432e('0x4e')]();await _0x12fc70[a575_0x432e('0x1d')]({'embed':{'color':tesseract_1[a575_0x432e('0x38')][a575_0x432e('0x41')][a575_0x432e('0x2e')],'author':{'name':_0x50ffb3[a575_0x432e('0x4a')][a575_0x432e('0x3a')],'iconURL':_0x50ffb3[a575_0x432e('0x4a')][a575_0x432e('0x1c')]({'dynamic':!![],'size':0x40})},'description':_0x50ffb3[a575_0x432e('0x4b')],'footer':{'text':_0x50ffb3['author']['id']}}});}};this['exec']=async _0x3e3be8=>{if(_0x3e3be8[a575_0x432e('0x29')]){this[a575_0x432e('0x4')](_0x3e3be8)['catch'](()=>{});this[a575_0x432e('0x49')](_0x3e3be8)[a575_0x432e('0x0')](()=>{});this[a575_0x432e('0x46')](_0x3e3be8)['catch'](()=>{});}else{this[a575_0x432e('0x4d')](_0x3e3be8)['catch'](()=>{});this['handleDirectMessageRelay'](_0x3e3be8)[a575_0x432e('0x0')](()=>{});}};this[a575_0x432e('0x27')]=new Map();}};