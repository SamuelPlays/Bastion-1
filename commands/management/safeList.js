const a96_0x3b0a=['locale','MANAGE_GUILD','NO_LINK_FILTER_SAFE_LIST_EXISTS','tag','guild','link','linkFilterSafeListRemove','delete','resolveRole','length','exports','NO_INVITE_FILTER_SAFE_LIST_EXISTS','Invite\x20Filter\x20-\x20Safe\x20List','filters','DiscordError','text','safeList\x20--link\x20CHANNEL\x20|\x20ROLE','Link\x20Filter\x20-\x20Safe\x20List','safeList\x20--link\x20CHANNEL\x20|\x20ROLE\x20--delete','safeList\x20--invite','safeList\x20--invite\x20CHANNEL\x20|\x20ROLE','linkFilterSafeListAdd','push','IRIS','RED','news','role','@bastion/tesseract','It\x20allows\x20you\x20to\x20add\x20members\x20or\x20roles\x20to\x20a\x20safe\x20list\x20that\x20prevents\x20their\x20messages\x20from\x20being\x20filtered\x20by\x20invite\x20filter\x20or\x20link\x20filter\x20in\x20the\x20server.','resolveGuildChannel','default','safeList','info','safeList\x20--invite\x20CHANNEL\x20|\x20ROLE\x20--delete','document','toObject','inviteFilter','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','linkFilter','inviteFilterSafeListRemove','test','whitelist','../../utils/errors','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','filter','client','Constants','constructor','apply','invite','exec','COLORS','language','overwrite','GREEN','author','join','map','safeList\x20--link','getString','send','save','resolver','channel','findById','ROLE_OR_CHANNEL_NOT_FOUND'];(function(_0x22bd93,_0xde961c){const _0x3b0a79=function(_0x24a5a8){while(--_0x24a5a8){_0x22bd93['push'](_0x22bd93['shift']());}},_0x3aecd2=function(){const _0x1bf523={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18059d,_0x2374d2,_0x14c127,_0x1e3803){_0x1e3803=_0x1e3803||{};let _0x4f0873=_0x2374d2+'='+_0x14c127,_0xeebab9=0x0;for(let _0x4357dc=0x0,_0x21634a=_0x18059d['length'];_0x4357dc<_0x21634a;_0x4357dc++){const _0x474b8e=_0x18059d[_0x4357dc];_0x4f0873+=';\x20'+_0x474b8e;const _0x80359c=_0x18059d[_0x474b8e];_0x18059d['push'](_0x80359c),_0x21634a=_0x18059d['length'],_0x80359c!==!![]&&(_0x4f0873+='='+_0x80359c);}_0x1e3803['cookie']=_0x4f0873;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3a6a25,_0x36a04c){_0x3a6a25=_0x3a6a25||function(_0x4ccc43){return _0x4ccc43;};const _0x163994=_0x3a6a25(new RegExp('(?:^|;\x20)'+_0x36a04c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5e0f9d=function(_0x4d96a4,_0x21e45c){_0x4d96a4(++_0x21e45c);};return _0x5e0f9d(_0x3b0a79,_0xde961c),_0x163994?decodeURIComponent(_0x163994[0x1]):undefined;}},_0x510bbd=function(){const _0xbfd3c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xbfd3c['test'](_0x1bf523['removeCookie']['toString']());};_0x1bf523['updateCookie']=_0x510bbd;let _0x1e2044='';const _0x2f041b=_0x1bf523['updateCookie']();if(!_0x2f041b)_0x1bf523['setCookie'](['*'],'counter',0x1);else _0x2f041b?_0x1e2044=_0x1bf523['getCookie'](null,'counter'):_0x1bf523['removeCookie']();};_0x3aecd2();}(a96_0x3b0a,0x1d2));const a96_0x3aec=function(_0x22bd93,_0xde961c){_0x22bd93=_0x22bd93-0x176;let _0x3b0a79=a96_0x3b0a[_0x22bd93];return _0x3b0a79;};const a96_0x415444=a96_0x3aec,a96_0x510bbd=function(){let _0x2f041b=!![];return function(_0x18059d,_0x2374d2){const _0x14c127=_0x2f041b?function(){const _0x1c500f=a96_0x3aec;if(_0x2374d2){const _0x1e3803=_0x2374d2[_0x1c500f(0x1aa)](_0x18059d,arguments);return _0x2374d2=null,_0x1e3803;}}:function(){};return _0x2f041b=![],_0x14c127;};}(),a96_0x1bf523=a96_0x510bbd(this,function(){const _0x4f0873=function(){const _0x23bdb8=a96_0x3aec,_0xeebab9=_0x4f0873['constructor'](_0x23bdb8(0x1a5))()[_0x23bdb8(0x1a9)](_0x23bdb8(0x19e));return!_0xeebab9[_0x23bdb8(0x1a1)](a96_0x1bf523);};return _0x4f0873();});a96_0x1bf523();'use strict';const tesseract_1=require(a96_0x415444(0x194)),Guild_1=require('../../models/Guild'),errors=require(a96_0x415444(0x1a3));module[a96_0x415444(0x183)]=class SafeListCommand extends tesseract_1['Command']{constructor(){const _0x299a89=a96_0x415444;super(_0x299a89(0x198),{'description':_0x299a89(0x195),'triggers':[],'arguments':{'boolean':[_0x299a89(0x1ab),_0x299a89(0x17e),_0x299a89(0x180)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x299a89(0x17a)],'syntax':[_0x299a89(0x18c),_0x299a89(0x18d),_0x299a89(0x19a),_0x299a89(0x1b4),_0x299a89(0x189),_0x299a89(0x18b)]}),this[_0x299a89(0x1ac)]=async(_0x4357dc,_0x21634a)=>{const _0x4a5bff=_0x299a89;if(_0x21634a['invite']){const _0x474b8e=await Guild_1[_0x4a5bff(0x197)][_0x4a5bff(0x177)](_0x4357dc[_0x4a5bff(0x17d)]['id']);if(_0x21634a['_']&&_0x21634a['_']['length']){const _0x80359c=_0x21634a['_'][_0x4a5bff(0x1b2)]('\x20'),_0x3a6a25=this[_0x4a5bff(0x1a7)][_0x4a5bff(0x1b8)][_0x4a5bff(0x196)](_0x4357dc[_0x4a5bff(0x17d)],_0x80359c,[_0x4a5bff(0x188),_0x4a5bff(0x192)]),_0x36a04c=this[_0x4a5bff(0x1a7)]['resolver'][_0x4a5bff(0x181)](_0x4357dc[_0x4a5bff(0x17d)],_0x80359c),_0x163994=_0x3a6a25||_0x36a04c||undefined;if(!_0x163994)throw new Error('ROLE_OR_CHANNEL_NOT_FOUND');const _0x5e0f9d=_0x474b8e[_0x4a5bff(0x19c)]();if(_0x21634a['delete']){if(_0x5e0f9d[_0x4a5bff(0x186)]&&_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)]&&_0x5e0f9d[_0x4a5bff(0x186)]['inviteFilter'][_0x4a5bff(0x1a2)]){_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)]=_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)][_0x4a5bff(0x1a6)](_0x4ccc43=>_0x4ccc43!==_0x163994['id']);if(!_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)]['whitelist']['length'])delete _0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)];}}else{if(!_0x5e0f9d['filters'])_0x5e0f9d[_0x4a5bff(0x186)]={};if(_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)]){if(_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)])_0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)][_0x4a5bff(0x18f)](_0x163994['id']);else _0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)][_0x4a5bff(0x1a2)]=[_0x163994['id']];}else _0x5e0f9d[_0x4a5bff(0x186)][_0x4a5bff(0x19d)]={'enabled':!![],'whitelist':[_0x163994['id']]};}return _0x474b8e[_0x4a5bff(0x1af)](_0x5e0f9d),await _0x474b8e[_0x4a5bff(0x1b7)](),await _0x4357dc[_0x4a5bff(0x176)][_0x4a5bff(0x1b6)]({'embed':{'color':_0x21634a[_0x4a5bff(0x180)]?tesseract_1['Constants'][_0x4a5bff(0x1ad)][_0x4a5bff(0x191)]:tesseract_1[_0x4a5bff(0x1a8)][_0x4a5bff(0x1ad)][_0x4a5bff(0x1b0)],'description':this[_0x4a5bff(0x1a7)]['locale'][_0x4a5bff(0x1b5)](_0x4357dc['guild'][_0x4a5bff(0x19b)]['language'],_0x4a5bff(0x199),_0x21634a['delete']?_0x4a5bff(0x1a0):'inviteFilterSafeListAdd',_0x4357dc[_0x4a5bff(0x1b1)][_0x4a5bff(0x17c)],_0x163994[_0x4a5bff(0x1a4)])}});}if(_0x474b8e[_0x4a5bff(0x186)]&&_0x474b8e[_0x4a5bff(0x186)]['inviteFilter']&&_0x474b8e[_0x4a5bff(0x186)]['inviteFilter'][_0x4a5bff(0x1a2)])return await _0x4357dc['channel']['send']({'embed':{'color':tesseract_1[_0x4a5bff(0x1a8)][_0x4a5bff(0x1ad)][_0x4a5bff(0x190)],'title':_0x4a5bff(0x185),'description':_0x474b8e[_0x4a5bff(0x186)][_0x4a5bff(0x19d)]['whitelist'][_0x4a5bff(0x1b3)](_0x4d96a4=>{const _0xc18f36=_0x4a5bff,_0x21e45c=this[_0xc18f36(0x1a7)]['resolver'][_0xc18f36(0x196)](_0x4357dc[_0xc18f36(0x17d)],_0x4d96a4),_0xbfd3c=this[_0xc18f36(0x1a7)][_0xc18f36(0x1b8)][_0xc18f36(0x181)](_0x4357dc[_0xc18f36(0x17d)],_0x21634a['role']),_0x2f3c5e=_0x21e45c||_0xbfd3c||undefined;return _0x2f3c5e?_0x2f3c5e['name']:_0x4d96a4;})[_0x4a5bff(0x1b2)](',\x20')}});else throw new Error(_0x4a5bff(0x184));}if(_0x21634a['link']){const _0x597baa=await Guild_1[_0x4a5bff(0x197)][_0x4a5bff(0x177)](_0x4357dc[_0x4a5bff(0x17d)]['id']);if(_0x21634a['_']&&_0x21634a['_'][_0x4a5bff(0x182)]){const _0x4bf427=_0x21634a['_']['join']('\x20'),_0x5e96fc=this[_0x4a5bff(0x1a7)][_0x4a5bff(0x1b8)]['resolveGuildChannel'](_0x4357dc[_0x4a5bff(0x17d)],_0x4bf427,[_0x4a5bff(0x188),_0x4a5bff(0x192)]),_0x2180d1=this[_0x4a5bff(0x1a7)][_0x4a5bff(0x1b8)][_0x4a5bff(0x181)](_0x4357dc[_0x4a5bff(0x17d)],_0x4bf427),_0x530384=_0x5e96fc||_0x2180d1||undefined;if(!_0x530384)throw new Error(_0x4a5bff(0x178));const _0x5019bf=_0x597baa[_0x4a5bff(0x19c)]();if(_0x21634a['delete']){if(_0x5019bf['filters']&&_0x5019bf['filters'][_0x4a5bff(0x19f)]&&_0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)]){_0x5019bf[_0x4a5bff(0x186)]['linkFilter']['whitelist']=_0x5019bf['filters'][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)][_0x4a5bff(0x1a6)](_0x36c631=>_0x36c631!==_0x530384['id']);if(!_0x5019bf['filters'][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)][_0x4a5bff(0x182)])delete _0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)];}}else{if(!_0x5019bf[_0x4a5bff(0x186)])_0x5019bf[_0x4a5bff(0x186)]={};if(_0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)]){if(_0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)]['whitelist'])_0x5019bf['filters'][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)][_0x4a5bff(0x18f)](_0x530384['id']);else _0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)]=[_0x530384['id']];}else _0x5019bf[_0x4a5bff(0x186)][_0x4a5bff(0x19f)]={'enabled':!![],'whitelist':[_0x530384['id']]};}return _0x597baa['overwrite'](_0x5019bf),await _0x597baa[_0x4a5bff(0x1b7)](),await _0x4357dc[_0x4a5bff(0x176)][_0x4a5bff(0x1b6)]({'embed':{'color':_0x21634a['delete']?tesseract_1[_0x4a5bff(0x1a8)][_0x4a5bff(0x1ad)][_0x4a5bff(0x191)]:tesseract_1['Constants'][_0x4a5bff(0x1ad)][_0x4a5bff(0x1b0)],'description':this[_0x4a5bff(0x1a7)][_0x4a5bff(0x179)][_0x4a5bff(0x1b5)](_0x4357dc[_0x4a5bff(0x17d)]['document'][_0x4a5bff(0x1ae)],_0x4a5bff(0x199),_0x21634a['delete']?_0x4a5bff(0x17f):_0x4a5bff(0x18e),_0x4357dc[_0x4a5bff(0x1b1)][_0x4a5bff(0x17c)],_0x530384[_0x4a5bff(0x1a4)])}});}if(_0x597baa[_0x4a5bff(0x186)]&&_0x597baa[_0x4a5bff(0x186)]['linkFilter']&&_0x597baa['filters'][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)])return await _0x4357dc[_0x4a5bff(0x176)][_0x4a5bff(0x1b6)]({'embed':{'color':tesseract_1[_0x4a5bff(0x1a8)][_0x4a5bff(0x1ad)]['IRIS'],'title':_0x4a5bff(0x18a),'description':_0x597baa[_0x4a5bff(0x186)][_0x4a5bff(0x19f)][_0x4a5bff(0x1a2)][_0x4a5bff(0x1b3)](_0x5be812=>{const _0x1b9b63=_0x4a5bff,_0x1ef1ba=this['client'][_0x1b9b63(0x1b8)][_0x1b9b63(0x196)](_0x4357dc[_0x1b9b63(0x17d)],_0x5be812),_0x4a1f45=this[_0x1b9b63(0x1a7)][_0x1b9b63(0x1b8)][_0x1b9b63(0x181)](_0x4357dc[_0x1b9b63(0x17d)],_0x21634a[_0x1b9b63(0x193)]),_0x1c0fa6=_0x1ef1ba||_0x4a1f45||undefined;return _0x1c0fa6?_0x1c0fa6[_0x1b9b63(0x1a4)]:_0x5be812;})[_0x4a5bff(0x1b2)](',\x20')}});else throw new Error(_0x4a5bff(0x17b));}throw new errors[(_0x4a5bff(0x187))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[_0x4a5bff(0x1a4)]);};}};