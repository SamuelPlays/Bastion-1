const a104_0x2e52=['language','guild','getString','constructor','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','setNickname','errors','channel','catch','../../utils/errors','nickname\x20--user\x20USER_ID\x20--\x20REASON','test','COLORS','@bastion/tesseract','Constants','join','document','canManage','exec','apply','locale','author','send','rolePosition','name','ownerID','nick','nickRemove','client','BASTION_ERROR_TYPE','INVALID_COMMAND_SYNTAX','info','tag','KICK_MEMBERS','nickUpdate','user','member','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20nicknames\x20of\x20the\x20server\x20members.'];(function(_0xeb311b,_0xff443d){const _0x2e52d7=function(_0x3dcb58){while(--_0x3dcb58){_0xeb311b['push'](_0xeb311b['shift']());}},_0x35d632=function(){const _0x5c29ee={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2b8a54,_0x1e74db,_0x1e0f33,_0x17dd28){_0x17dd28=_0x17dd28||{};let _0x459065=_0x1e74db+'='+_0x1e0f33,_0x4a6696=0x0;for(let _0x1c8e8a=0x0,_0x206966=_0x2b8a54['length'];_0x1c8e8a<_0x206966;_0x1c8e8a++){const _0x2e613c=_0x2b8a54[_0x1c8e8a];_0x459065+=';\x20'+_0x2e613c;const _0x290a2e=_0x2b8a54[_0x2e613c];_0x2b8a54['push'](_0x290a2e),_0x206966=_0x2b8a54['length'],_0x290a2e!==!![]&&(_0x459065+='='+_0x290a2e);}_0x17dd28['cookie']=_0x459065;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42502f,_0x1fe814){_0x42502f=_0x42502f||function(_0x4804a4){return _0x4804a4;};const _0x963ac9=_0x42502f(new RegExp('(?:^|;\x20)'+_0x1fe814['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1d1ec4=function(_0x4dcb09,_0x3ea755){_0x4dcb09(++_0x3ea755);};return _0x1d1ec4(_0x2e52d7,_0xff443d),_0x963ac9?decodeURIComponent(_0x963ac9[0x1]):undefined;}},_0x5ce9ee=function(){const _0x5828ae=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5828ae['test'](_0x5c29ee['removeCookie']['toString']());};_0x5c29ee['updateCookie']=_0x5ce9ee;let _0x4e1d48='';const _0xd5f43d=_0x5c29ee['updateCookie']();if(!_0xd5f43d)_0x5c29ee['setCookie'](['*'],'counter',0x1);else _0xd5f43d?_0x4e1d48=_0x5c29ee['getCookie'](null,'counter'):_0x5c29ee['removeCookie']();};_0x35d632();}(a104_0x2e52,0x1e8));const a104_0x35d6=function(_0xeb311b,_0xff443d){_0xeb311b=_0xeb311b-0x14b;let _0x2e52d7=a104_0x2e52[_0xeb311b];return _0x2e52d7;};const a104_0x52fe17=a104_0x35d6,a104_0x5ce9ee=function(){let _0xd5f43d=!![];return function(_0x2b8a54,_0x1e74db){const _0x1e0f33=_0xd5f43d?function(){const _0x484129=a104_0x35d6;if(_0x1e74db){const _0x17dd28=_0x1e74db[_0x484129(0x14b)](_0x2b8a54,arguments);return _0x1e74db=null,_0x17dd28;}}:function(){};return _0xd5f43d=![],_0x1e0f33;};}(),a104_0x5c29ee=a104_0x5ce9ee(this,function(){const _0x459065=function(){const _0xa8480a=a104_0x35d6,_0x4a6696=_0x459065[_0xa8480a(0x161)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0xa8480a(0x163));return!_0x4a6696[_0xa8480a(0x16a)](a104_0x5c29ee);};return _0x459065();});a104_0x5c29ee();'use strict';const tesseract_1=require(a104_0x52fe17(0x16c)),errors=require(a104_0x52fe17(0x168));module['exports']=class Nickname extends tesseract_1[a104_0x52fe17(0x162)]{constructor(){const _0x466506=a104_0x52fe17;super('nickname',{'description':_0x466506(0x15d),'triggers':[],'arguments':{'alias':{'nick':'n','user':'u'},'array':[_0x466506(0x152)],'string':[_0x466506(0x152),_0x466506(0x15b)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x466506(0x159)],'userPermissions':[_0x466506(0x159)],'syntax':['nickname\x20--user\x20USER_ID\x20--nick\x20NICKNAME\x20--\x20REASON',_0x466506(0x169)]}),this[_0x466506(0x171)]=async(_0x1c8e8a,_0x206966)=>{const _0x16ac64=_0x466506,_0x2e613c=this[_0x16ac64(0x154)]['resolver']['resolveGuildMember'](_0x1c8e8a[_0x16ac64(0x15f)],_0x206966['user']);if(!_0x2e613c)throw new errors['DiscordError'](errors[_0x16ac64(0x155)][_0x16ac64(0x156)],this[_0x16ac64(0x150)]);if(_0x1c8e8a[_0x16ac64(0x14d)]['id']!==_0x1c8e8a[_0x16ac64(0x15f)][_0x16ac64(0x151)]&&!_0x1c8e8a[_0x16ac64(0x15c)][_0x16ac64(0x170)](_0x2e613c))return await _0x1c8e8a[_0x16ac64(0x166)]['send']({'embed':{'color':tesseract_1[_0x16ac64(0x16d)][_0x16ac64(0x16b)]['RED'],'title':this[_0x16ac64(0x154)][_0x16ac64(0x14c)]['getString'](_0x1c8e8a['guild'][_0x16ac64(0x16f)]['language'],_0x16ac64(0x165),'unauthorized'),'description':this['client']['locale'][_0x16ac64(0x160)](_0x1c8e8a['guild'][_0x16ac64(0x16f)][_0x16ac64(0x15e)],_0x16ac64(0x165),_0x16ac64(0x14f),_0x1c8e8a[_0x16ac64(0x14d)][_0x16ac64(0x158)],_0x2e613c[_0x16ac64(0x15b)][_0x16ac64(0x158)])}})[_0x16ac64(0x167)](()=>{});const _0x290a2e=_0x206966['_']['join']('\x20')||'-';await _0x2e613c[_0x16ac64(0x164)](_0x206966[_0x16ac64(0x152)][_0x16ac64(0x16e)]('\x20')||'',_0x290a2e),await _0x1c8e8a[_0x16ac64(0x166)][_0x16ac64(0x14e)]({'embed':{'color':tesseract_1[_0x16ac64(0x16d)][_0x16ac64(0x16b)]['ORANGE'],'description':_0x206966[_0x16ac64(0x152)]?this[_0x16ac64(0x154)][_0x16ac64(0x14c)][_0x16ac64(0x160)](_0x1c8e8a[_0x16ac64(0x15f)][_0x16ac64(0x16f)][_0x16ac64(0x15e)],_0x16ac64(0x157),_0x16ac64(0x15a),_0x1c8e8a[_0x16ac64(0x14d)]['tag'],_0x2e613c['user'][_0x16ac64(0x158)],_0x206966[_0x16ac64(0x152)]):this['client'][_0x16ac64(0x14c)][_0x16ac64(0x160)](_0x1c8e8a[_0x16ac64(0x15f)]['document'][_0x16ac64(0x15e)],'info',_0x16ac64(0x153),_0x1c8e8a[_0x16ac64(0x14d)][_0x16ac64(0x158)],_0x2e613c[_0x16ac64(0x15b)]['tag']),'fields':[{'name':'Reason','value':_0x290a2e}],'footer':{'text':_0x2e613c['id']}}})[_0x16ac64(0x167)](()=>{});};}};