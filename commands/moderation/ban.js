const a98_0x3ad4=['ban\x20--user\x20USER_ID\x20--\x20REASON','channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/errors','soft','apply','cache','ban','unauthorized','info','guild','COLORS','items','Reason','rolePosition','INVALID_COMMAND_SYNTAX','has','exec','ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON','Users\x20banned\x20in\x20','getString','test','document','Constants','BASTION_ERROR_TYPE','ORANGE','author','BAN_MEMBERS','page','locale','errors','name','members','tag','member','pages','join','unban','RED','language','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','Command','ban\x20--list','fetchBans','days','list','ownerID','client','\x20/\x20','DiscordError','paginate','It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','catch','canManage','get','ban\x20--list\x20--page\x203','exports','user','\x20of\x20','constructor','map'];(function(_0x5ee2e8,_0x215014){const _0x3ad49d=function(_0x106f6c){while(--_0x106f6c){_0x5ee2e8['push'](_0x5ee2e8['shift']());}},_0x1dbfee=function(){const _0x2263a6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3cd18f,_0x317871,_0x12251b,_0x14f2f6){_0x14f2f6=_0x14f2f6||{};let _0x1ff7aa=_0x317871+'='+_0x12251b,_0x4f1f0e=0x0;for(let _0x20c971=0x0,_0x4fe4e4=_0x3cd18f['length'];_0x20c971<_0x4fe4e4;_0x20c971++){const _0x171ecb=_0x3cd18f[_0x20c971];_0x1ff7aa+=';\x20'+_0x171ecb;const _0x586cab=_0x3cd18f[_0x171ecb];_0x3cd18f['push'](_0x586cab),_0x4fe4e4=_0x3cd18f['length'],_0x586cab!==!![]&&(_0x1ff7aa+='='+_0x586cab);}_0x14f2f6['cookie']=_0x1ff7aa;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2909dc,_0x3e4213){_0x2909dc=_0x2909dc||function(_0x1bbfbb){return _0x1bbfbb;};const _0x1dbd58=_0x2909dc(new RegExp('(?:^|;\x20)'+_0x3e4213['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x11a330=function(_0x357589,_0x4514dd){_0x357589(++_0x4514dd);};return _0x11a330(_0x3ad49d,_0x215014),_0x1dbd58?decodeURIComponent(_0x1dbd58[0x1]):undefined;}},_0x5cb015=function(){const _0x315d06=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x315d06['test'](_0x2263a6['removeCookie']['toString']());};_0x2263a6['updateCookie']=_0x5cb015;let _0x23e125='';const _0x28e204=_0x2263a6['updateCookie']();if(!_0x28e204)_0x2263a6['setCookie'](['*'],'counter',0x1);else _0x28e204?_0x23e125=_0x2263a6['getCookie'](null,'counter'):_0x2263a6['removeCookie']();};_0x1dbfee();}(a98_0x3ad4,0x7f));const a98_0x1dbf=function(_0x5ee2e8,_0x215014){_0x5ee2e8=_0x5ee2e8-0x114;let _0x3ad49d=a98_0x3ad4[_0x5ee2e8];return _0x3ad49d;};const a98_0xeef382=a98_0x1dbf,a98_0x5cb015=function(){let _0x28e204=!![];return function(_0x3cd18f,_0x317871){const _0x12251b=_0x28e204?function(){const _0x46e12b=a98_0x1dbf;if(_0x317871){const _0x14f2f6=_0x317871[_0x46e12b(0x116)](_0x3cd18f,arguments);return _0x317871=null,_0x14f2f6;}}:function(){};return _0x28e204=![],_0x12251b;};}(),a98_0x2263a6=a98_0x5cb015(this,function(){const _0x1ff7aa=function(){const _0x444e8e=a98_0x1dbf,_0x4f1f0e=_0x1ff7aa[_0x444e8e(0x14d)](_0x444e8e(0x139))()['constructor'](_0x444e8e(0x151));return!_0x4f1f0e[_0x444e8e(0x126)](a98_0x2263a6);};return _0x1ff7aa();});a98_0x2263a6();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a98_0xeef382(0x114)),pagination=require('../../utils/pagination');module[a98_0xeef382(0x14a)]=class Ban extends tesseract_1[a98_0xeef382(0x13b)]{constructor(){const _0x8bc59=a98_0xeef382;super(_0x8bc59(0x118),{'description':_0x8bc59(0x145),'triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[_0x8bc59(0x13f),_0x8bc59(0x115)],'default':{'days':0x0,'page':0x1},'number':['days',_0x8bc59(0x12d)],'string':[_0x8bc59(0x14b)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x8bc59(0x12c)],'userPermissions':[_0x8bc59(0x12c)],'syntax':[_0x8bc59(0x13c),_0x8bc59(0x149),_0x8bc59(0x14f),'ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON',_0x8bc59(0x123)]}),this[_0x8bc59(0x122)]=async(_0x20c971,_0x4fe4e4)=>{const _0x4cdc48=_0x8bc59;if(_0x4fe4e4[_0x4cdc48(0x13f)]){const _0x2909dc=await _0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x13d)](),_0x3e4213=pagination[_0x4cdc48(0x144)]([..._0x2909dc['values']()],_0x4fe4e4[_0x4cdc48(0x12d)]);return await _0x20c971[_0x4cdc48(0x150)][_0x4cdc48(0x13a)]({'embed':{'color':tesseract_1[_0x4cdc48(0x128)][_0x4cdc48(0x11c)][_0x4cdc48(0x12a)],'title':'Banned\x20Users','description':_0x4cdc48(0x124)+_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x130)],'fields':_0x3e4213[_0x4cdc48(0x11d)][_0x4cdc48(0x14e)](_0x1dbd58=>({'name':_0x1dbd58[_0x4cdc48(0x14b)][_0x4cdc48(0x132)]+_0x4cdc48(0x142)+_0x1dbd58['user']['id'],'value':_0x1dbd58['reason']||'-'})),'footer':{'text':'Page\x20'+_0x3e4213[_0x4cdc48(0x12d)]+_0x4cdc48(0x14c)+_0x3e4213[_0x4cdc48(0x134)]}}});}const _0x171ecb=this[_0x4cdc48(0x141)]['resolver']['resolveUser'](_0x4fe4e4[_0x4cdc48(0x14b)]);if(!_0x171ecb)throw new errors[(_0x4cdc48(0x143))](errors[_0x4cdc48(0x129)][_0x4cdc48(0x120)],this[_0x4cdc48(0x130)]);if(_0x20c971[_0x4cdc48(0x12b)]['id']!==_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x140)]&&_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x131)]['cache'][_0x4cdc48(0x121)](_0x171ecb['id'])&&!_0x20c971[_0x4cdc48(0x133)][_0x4cdc48(0x147)](_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x131)][_0x4cdc48(0x117)][_0x4cdc48(0x148)](_0x171ecb['id'])))return await _0x20c971['channel'][_0x4cdc48(0x13a)]({'embed':{'color':tesseract_1['Constants'][_0x4cdc48(0x11c)][_0x4cdc48(0x137)],'title':this[_0x4cdc48(0x141)]['locale']['getString'](_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x127)][_0x4cdc48(0x138)],_0x4cdc48(0x12f),_0x4cdc48(0x119)),'description':this[_0x4cdc48(0x141)][_0x4cdc48(0x12e)][_0x4cdc48(0x125)](_0x20c971['guild'][_0x4cdc48(0x127)][_0x4cdc48(0x138)],'errors',_0x4cdc48(0x11f),_0x20c971[_0x4cdc48(0x12b)][_0x4cdc48(0x132)],_0x171ecb[_0x4cdc48(0x132)])}})[_0x4cdc48(0x146)](()=>{});const _0x586cab=_0x4fe4e4['_'][_0x4cdc48(0x135)]('\x20')||'-';await _0x20c971['guild'][_0x4cdc48(0x131)][_0x4cdc48(0x118)](_0x171ecb,{'days':_0x4fe4e4[_0x4cdc48(0x13e)],'reason':_0x586cab}),_0x4fe4e4[_0x4cdc48(0x115)]&&await _0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x131)][_0x4cdc48(0x136)](_0x171ecb,_0x586cab),await _0x20c971['channel'][_0x4cdc48(0x13a)]({'embed':{'color':tesseract_1['Constants'][_0x4cdc48(0x11c)]['DARK_BUT_NOT_BLACK'],'description':_0x4fe4e4[_0x4cdc48(0x115)]?this['client']['locale'][_0x4cdc48(0x125)](_0x20c971[_0x4cdc48(0x11b)][_0x4cdc48(0x127)][_0x4cdc48(0x138)],_0x4cdc48(0x11a),'memberSoftBan',_0x20c971[_0x4cdc48(0x12b)][_0x4cdc48(0x132)],_0x171ecb[_0x4cdc48(0x132)]):this['client'][_0x4cdc48(0x12e)][_0x4cdc48(0x125)](_0x20c971['guild'][_0x4cdc48(0x127)][_0x4cdc48(0x138)],_0x4cdc48(0x11a),'guildBanAdd',_0x20c971[_0x4cdc48(0x12b)][_0x4cdc48(0x132)],_0x171ecb[_0x4cdc48(0x132)]),'fields':[{'name':_0x4cdc48(0x11e),'value':_0x586cab}],'footer':{'text':_0x171ecb['id']}}})[_0x4cdc48(0x146)](()=>{});};}};