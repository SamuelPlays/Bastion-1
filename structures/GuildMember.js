const a417_0x13ae=['isMusicMaster','kickThreshold','memberInfractions','error','\x20infractions.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','highest','length','../models/Member','banThreshold','music','constructor','test','client','comparePositionTo','guild','catch','bannable','canManage','language','../models/Transaction','Ban','Logger','user','balance','infractions','roles','info','has','kick','document','abs','clamp','GuildMember','send','getDocument','discord.js','COLORS','default','roleId','ownerID','compile','credit','clearInfractions','isOwner','push','cache','save','name','create','exports','ORANGE'];(function(_0x3a4a3f,_0x13ae26){const _0x237163=function(_0x3b31da){while(--_0x3b31da){_0x3a4a3f['push'](_0x3a4a3f['shift']());}};const _0x3bf643=function(){const _0x19e38e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d79d8,_0x1f1bcc,_0x876223,_0xaea9e){_0xaea9e=_0xaea9e||{};let _0x4b90b7=_0x1f1bcc+'='+_0x876223;let _0x23bc5c=0x0;for(let _0x2ef9fe=0x0,_0x25cd9a=_0x4d79d8['length'];_0x2ef9fe<_0x25cd9a;_0x2ef9fe++){const _0x4d0b97=_0x4d79d8[_0x2ef9fe];_0x4b90b7+=';\x20'+_0x4d0b97;const _0x1c2e6b=_0x4d79d8[_0x4d0b97];_0x4d79d8['push'](_0x1c2e6b);_0x25cd9a=_0x4d79d8['length'];if(_0x1c2e6b!==!![]){_0x4b90b7+='='+_0x1c2e6b;}}_0xaea9e['cookie']=_0x4b90b7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x352f13,_0x38f022){_0x352f13=_0x352f13||function(_0xaff76){return _0xaff76;};const _0x1f64fd=_0x352f13(new RegExp('(?:^|;\x20)'+_0x38f022['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x12ee37=function(_0x10aa02,_0x3e9c78){_0x10aa02(++_0x3e9c78);};_0x12ee37(_0x237163,_0x13ae26);return _0x1f64fd?decodeURIComponent(_0x1f64fd[0x1]):undefined;}};const _0x583242=function(){const _0x51cb63=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51cb63['test'](_0x19e38e['removeCookie']['toString']());};_0x19e38e['updateCookie']=_0x583242;let _0x515d7c='';const _0x131ad7=_0x19e38e['updateCookie']();if(!_0x131ad7){_0x19e38e['setCookie'](['*'],'counter',0x1);}else if(_0x131ad7){_0x515d7c=_0x19e38e['getCookie'](null,'counter');}else{_0x19e38e['removeCookie']();}};_0x3bf643();}(a417_0x13ae,0x159));const a417_0x2371=function(_0x3a4a3f,_0x13ae26){_0x3a4a3f=_0x3a4a3f-0x0;let _0x237163=a417_0x13ae[_0x3a4a3f];return _0x237163;};const a417_0x19e38e=function(){let _0x47f9a1=!![];return function(_0x5914aa,_0x1f5833){const _0x401954=_0x47f9a1?function(){if(_0x1f5833){const _0x3e851f=_0x1f5833['apply'](_0x5914aa,arguments);_0x1f5833=null;return _0x3e851f;}}:function(){};_0x47f9a1=![];return _0x401954;};}();const a417_0x3b31da=a417_0x19e38e(this,function(){const _0x2a7d48=function(){const _0x152f5d=_0x2a7d48[a417_0x2371('0x1e')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a417_0x2371('0x8')](a417_0x2371('0x18'));return!_0x152f5d[a417_0x2371('0x1f')](a417_0x3b31da);};return _0x2a7d48();});a417_0x3b31da();'use strict';const tesseract_1=require('@bastion/tesseract');const discord_js_1=require(a417_0x2371('0x3'));const Member_1=require(a417_0x2371('0x1b'));const Transaction_1=require(a417_0x2371('0x27'));const numbers=require('../utils/numbers');module[a417_0x2371('0x11')]=class BastionGuildMember extends discord_js_1[a417_0x2371('0x0')]{constructor(_0xeb7759,_0xc7e7d2,_0x45bb0c){super(_0xeb7759,_0xc7e7d2,_0x45bb0c);}[a417_0x2371('0x25')](_0x4406f0){if(this['id']===this[a417_0x2371('0x22')][a417_0x2371('0x7')])return!![];if(_0x4406f0['id']===this[a417_0x2371('0x22')][a417_0x2371('0x7')])return![];if(this['id']===_0x4406f0['id'])return![];return this[a417_0x2371('0x2d')]['highest'][a417_0x2371('0x21')](_0x4406f0['roles'][a417_0x2371('0x19')])>0x0;}async[a417_0x2371('0x2')](){return await Member_1['default']['findOne']({'user':this['id'],'guild':this['guild']['id']});}[a417_0x2371('0x13')](){if(this[a417_0x2371('0x2a')][a417_0x2371('0xb')]())return!![];return this['guild'][a417_0x2371('0x31')][a417_0x2371('0x1d')]&&this['guild'][a417_0x2371('0x31')][a417_0x2371('0x1d')][a417_0x2371('0x6')]&&this[a417_0x2371('0x2d')][a417_0x2371('0xd')][a417_0x2371('0x2f')](this['guild'][a417_0x2371('0x31')][a417_0x2371('0x1d')][a417_0x2371('0x6')]);}async['addInfraction'](_0x4b75e5){const _0x7765ac=await this['getDocument']();if(_0x7765ac['infractions']){_0x7765ac[a417_0x2371('0x2c')][a417_0x2371('0xc')](_0x4b75e5);}else{_0x7765ac[a417_0x2371('0x2c')]=[_0x4b75e5];}const _0x4e15a=this['guild'][a417_0x2371('0x31')]?this[a417_0x2371('0x22')][a417_0x2371('0x31')]:await this[a417_0x2371('0x22')]['getDocument']();if(_0x4e15a[a417_0x2371('0x2c')]){const _0x4b002f=_0x7765ac['infractions'][a417_0x2371('0x1a')];let _0x1a6582;if(this['kickable']&&_0x7765ac[a417_0x2371('0x2c')]['length']===_0x4e15a['infractions'][a417_0x2371('0x14')]){_0x1a6582='Kick';await this[a417_0x2371('0x30')](_0x7765ac[a417_0x2371('0x2c')][a417_0x2371('0x1a')]+'\x20infractions.');}if(this[a417_0x2371('0x24')]&&_0x7765ac[a417_0x2371('0x2c')]['length']===_0x4e15a[a417_0x2371('0x2c')][a417_0x2371('0x1c')]){_0x1a6582=a417_0x2371('0x28');await this['ban']({'reason':_0x7765ac['infractions'][a417_0x2371('0x1a')]+a417_0x2371('0x17')});_0x7765ac['infractions']=undefined;delete _0x7765ac[a417_0x2371('0x2c')];}if(_0x1a6582){await this[a417_0x2371('0x1')]({'embed':{'color':tesseract_1['Constants'][a417_0x2371('0x4')][a417_0x2371('0x12')],'description':this['client']['locale']['getString'](_0x4e15a[a417_0x2371('0x26')],a417_0x2371('0x2e'),a417_0x2371('0x15')+_0x1a6582,this[a417_0x2371('0x22')][a417_0x2371('0xf')],_0x4b002f)}})[a417_0x2371('0x23')](()=>{});}}return _0x7765ac[a417_0x2371('0xe')]();}async[a417_0x2371('0xa')](){const _0x352976=this['document']?this[a417_0x2371('0x31')]:await this[a417_0x2371('0x2')]();_0x352976[a417_0x2371('0x2c')]=undefined;delete _0x352976['infractions'];return _0x352976['save']();}async[a417_0x2371('0x9')](_0x58a623,_0x3439b4,_0x148ccd){_0x58a623=Math[a417_0x2371('0x32')](_0x58a623);const _0x388052=_0x148ccd||await this['getDocument']();if(_0x58a623){_0x388052[a417_0x2371('0x2b')]=numbers[a417_0x2371('0x33')](_0x388052[a417_0x2371('0x2b')]+_0x58a623,Number['MAX_SAFE_INTEGER']);if(!_0x148ccd){await Transaction_1[a417_0x2371('0x5')]['create']({'guild':this['guild']['id'],'sender':this[a417_0x2371('0x20')][a417_0x2371('0x2a')]['id'],'receiver':_0x148ccd['user'],'amount':_0x58a623,'time':new Date(),'note':_0x3439b4})[a417_0x2371('0x23')](tesseract_1['Logger'][a417_0x2371('0x16')]);}}return _0x148ccd?_0x388052:_0x388052['save']();}async['debit'](_0x40035a,_0x469504,_0x5b0a04){_0x40035a=Math['abs'](_0x40035a);const _0x5b3c1a=_0x5b0a04||await this['getDocument']();if(_0x40035a){_0x5b3c1a[a417_0x2371('0x2b')]=numbers[a417_0x2371('0x33')](_0x5b3c1a[a417_0x2371('0x2b')]-_0x40035a,Number['MIN_SAFE_INTEGER']);if(!_0x5b0a04){await Transaction_1[a417_0x2371('0x5')][a417_0x2371('0x10')]({'guild':this['guild']['id'],'sender':_0x5b0a04[a417_0x2371('0x2a')],'receiver':this[a417_0x2371('0x20')]['user']['id'],'amount':_0x40035a,'time':new Date(),'note':_0x469504})[a417_0x2371('0x23')](tesseract_1[a417_0x2371('0x29')][a417_0x2371('0x16')]);}}return _0x5b0a04?_0x5b3c1a:_0x5b3c1a[a417_0x2371('0xe')]();}};