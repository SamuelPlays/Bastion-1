const a423_0x43c7=['MANAGE_ROLES','GUILD_NEW_MEMBER','keys','BADGES','MANAGE_EMOJIS','compile','has','test','MANAGE_MESSAGES','MANAGE_GUILD','COLORS','makeRequest','length','GOLD','./constants','GUILD_4Y_CLUB','guild','MANAGE_CHANNELS','now','ownerID','GUILD_8Y_CLUB','../assets/badges.json','fetchBadges','GUILD_1Y_CLUB','BASTION_DIAMOND_GUILD','GUILD_7Y_CLUB','DIAMOND','BASTION_PLATINUM_USER','MANAGE_WEBHOOKS','__esModule','PLATINUM','getMembership','getMemberBadgeValue','GUILD_OWNER','MANAGE_NICKNAMES','BASTION_GOLD_USER','string','permissions','BASTION_DIAMOND_USER','constructor','defineProperty','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','./omnic','push','GUILD_9Y_CLUB','joinedTimestamp'];(function(_0x1851e8,_0x43c7b5){const _0x3abf57=function(_0xec6834){while(--_0xec6834){_0x1851e8['push'](_0x1851e8['shift']());}};const _0x55d58f=function(){const _0x125c36={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5117c5,_0x8ea1bd,_0x44f07e,_0x13a2db){_0x13a2db=_0x13a2db||{};let _0xc84356=_0x8ea1bd+'='+_0x44f07e;let _0x43a94c=0x0;for(let _0x4ee2ad=0x0,_0x592583=_0x5117c5['length'];_0x4ee2ad<_0x592583;_0x4ee2ad++){const _0x166b5a=_0x5117c5[_0x4ee2ad];_0xc84356+=';\x20'+_0x166b5a;const _0x2f6914=_0x5117c5[_0x166b5a];_0x5117c5['push'](_0x2f6914);_0x592583=_0x5117c5['length'];if(_0x2f6914!==!![]){_0xc84356+='='+_0x2f6914;}}_0x13a2db['cookie']=_0xc84356;},'removeCookie':function(){return'dev';},'getCookie':function(_0x50c7ea,_0xf839d5){_0x50c7ea=_0x50c7ea||function(_0x4da5dd){return _0x4da5dd;};const _0x18d1f1=_0x50c7ea(new RegExp('(?:^|;\x20)'+_0xf839d5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1fc919=function(_0x479d8a,_0x447217){_0x479d8a(++_0x447217);};_0x1fc919(_0x3abf57,_0x43c7b5);return _0x18d1f1?decodeURIComponent(_0x18d1f1[0x1]):undefined;}};const _0x409a5d=function(){const _0x461ee1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x461ee1['test'](_0x125c36['removeCookie']['toString']());};_0x125c36['updateCookie']=_0x409a5d;let _0x4d71fd='';const _0x2eb0da=_0x125c36['updateCookie']();if(!_0x2eb0da){_0x125c36['setCookie'](['*'],'counter',0x1);}else if(_0x2eb0da){_0x4d71fd=_0x125c36['getCookie'](null,'counter');}else{_0x125c36['removeCookie']();}};_0x55d58f();}(a423_0x43c7,0xca));const a423_0x3abf=function(_0x1851e8,_0x43c7b5){_0x1851e8=_0x1851e8-0x0;let _0x3abf57=a423_0x43c7[_0x1851e8];return _0x3abf57;};const a423_0x125c36=function(){let _0x14345d=!![];return function(_0x39accf,_0x11c113){const _0x53347a=_0x14345d?function(){if(_0x11c113){const _0xfe126b=_0x11c113['apply'](_0x39accf,arguments);_0x11c113=null;return _0xfe126b;}}:function(){};_0x14345d=![];return _0x53347a;};}();const a423_0xec6834=a423_0x125c36(this,function(){const _0x3442f4=function(){const _0x1f9127=_0x3442f4[a423_0x3abf('0x15')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a423_0x3abf('0x21')](a423_0x3abf('0x17'));return!_0x1f9127[a423_0x3abf('0x23')](a423_0xec6834);};return _0x3442f4();});a423_0xec6834();'use strict';Object[a423_0x3abf('0x16')](exports,a423_0x3abf('0xb'),{'value':!![]});exports['getMembership']=exports['has']=exports[a423_0x3abf('0xe')]=exports[a423_0x3abf('0x4')]=exports['resolveBadges']=void 0x0;const constants=require(a423_0x3abf('0x2a'));const omnic=require(a423_0x3abf('0x18'));const BADGES=require(a423_0x3abf('0x3'));exports['resolveBadges']=_0x40661e=>{const _0x2a5515=[];for(let _0x162b3a=0x0;_0x162b3a<Object['keys'](BADGES)[a423_0x3abf('0x28')];_0x162b3a++){const _0xd2dd41=0x1<<_0x162b3a;if((_0x40661e&_0xd2dd41)===_0xd2dd41)_0x2a5515[a423_0x3abf('0x19')](BADGES[Object[a423_0x3abf('0x1e')](BADGES)[_0x162b3a]]);}return _0x2a5515;};exports[a423_0x3abf('0x4')]=(_0x3bd973,_0x3bd0a2)=>{return omnic[a423_0x3abf('0x27')]('/badges/user/'+_0x3bd973+(_0x3bd0a2?'/'+_0x3bd0a2:''));};exports[a423_0x3abf('0xe')]=_0x2f86a8=>{let _0x113a4f=0x0;if(_0x2f86a8[a423_0x3abf('0x2c')][a423_0x3abf('0x1')]===_0x2f86a8['id'])_0x113a4f|=constants[a423_0x3abf('0x1f')][a423_0x3abf('0xf')];if(_0x2f86a8[a423_0x3abf('0x13')][a423_0x3abf('0x22')](a423_0x3abf('0x25'))||_0x2f86a8[a423_0x3abf('0x13')][a423_0x3abf('0x22')](a423_0x3abf('0x1c'))||_0x2f86a8[a423_0x3abf('0x13')]['has'](a423_0x3abf('0x2d'))||_0x2f86a8[a423_0x3abf('0x13')]['has'](a423_0x3abf('0x24'))||_0x2f86a8['permissions'][a423_0x3abf('0x22')](a423_0x3abf('0xa'))||_0x2f86a8[a423_0x3abf('0x13')]['has'](a423_0x3abf('0x10'))||_0x2f86a8[a423_0x3abf('0x13')][a423_0x3abf('0x22')](a423_0x3abf('0x20')))_0x113a4f|=constants[a423_0x3abf('0x1f')]['GUILD_STAFF'];if(Date['now']()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x9*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')][a423_0x3abf('0x1a')];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8['joinedTimestamp']>=0x8*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')][a423_0x3abf('0x2')];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x7*0x758f0dfc0)_0x113a4f|=constants['BADGES'][a423_0x3abf('0x7')];else if(Date['now']()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x6*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')]['GUILD_6Y_CLUB'];else if(Date['now']()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x5*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')]['GUILD_5Y_CLUB'];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8['joinedTimestamp']>=0x4*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')][a423_0x3abf('0x2b')];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8['joinedTimestamp']>=0x3*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')]['GUILD_3Y_CLUB'];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x2*0x758f0dfc0)_0x113a4f|=constants[a423_0x3abf('0x1f')]['GUILD_2Y_CLUB'];else if(Date['now']()-_0x2f86a8[a423_0x3abf('0x1b')]>=0x1*0x758f0dfc0)_0x113a4f|=constants['BADGES'][a423_0x3abf('0x5')];else if(Date[a423_0x3abf('0x0')]()-_0x2f86a8['joinedTimestamp']<=0xd84b1800)_0x113a4f|=constants[a423_0x3abf('0x1f')][a423_0x3abf('0x1d')];return _0x113a4f;};exports[a423_0x3abf('0x22')]=(_0x3dc139,_0xa2147f)=>{if(typeof _0xa2147f===a423_0x3abf('0x12')){return(_0x3dc139&constants[a423_0x3abf('0x1f')][_0xa2147f])===constants[a423_0x3abf('0x1f')][_0xa2147f];}return(_0x3dc139&_0xa2147f)===_0xa2147f;};exports[a423_0x3abf('0xd')]=_0x400add=>{if(exports[a423_0x3abf('0x22')](_0x400add,'BASTION_DIAMOND_USER')){return{...BADGES[a423_0x3abf('0x14')],'color':constants[a423_0x3abf('0x26')][a423_0x3abf('0x8')]};}if(exports[a423_0x3abf('0x22')](_0x400add,a423_0x3abf('0x6'))){return{...BADGES[a423_0x3abf('0x6')],'color':constants[a423_0x3abf('0x26')][a423_0x3abf('0x8')]};}if(exports[a423_0x3abf('0x22')](_0x400add,'BASTION_PLATINUM_USER')){return{...BADGES[a423_0x3abf('0x9')],'color':constants['COLORS'][a423_0x3abf('0xc')]};}if(exports['has'](_0x400add,a423_0x3abf('0x9'))){return{...BADGES['BASTION_PLATINUM_USER'],'color':constants['COLORS'][a423_0x3abf('0xc')]};}if(exports[a423_0x3abf('0x22')](_0x400add,'BASTION_GOLD_USER')){return{...BADGES[a423_0x3abf('0x11')],'color':constants[a423_0x3abf('0x26')][a423_0x3abf('0x29')]};}if(exports[a423_0x3abf('0x22')](_0x400add,'BASTION_GOLD_USER')){return{...BADGES[a423_0x3abf('0x11')],'color':constants[a423_0x3abf('0x26')][a423_0x3abf('0x29')]};}};