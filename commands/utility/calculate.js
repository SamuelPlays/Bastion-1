const a150_0x6fb5=['INVALID_COMMAND_SYNTAX','It\x20allows\x20you\x20to\x20evaluate\x20mathematical\x20expressions\x20and\x20see\x20their\x20result.','test','length','\x0a...','COLORS','join','../../utils/errors','calc','calculate','calculate\x20--\x20EXPRESSION','constructor','```js\x0a','apply','toString','exports','sanitize','DiscordError','BASTION_ERROR_TYPE','name','IRIS','INPUT','Command','Constants','```','@bastion/tesseract'];(function(_0x1655c6,_0x26cdd6){const _0x6fb5f0=function(_0x169ce6){while(--_0x169ce6){_0x1655c6['push'](_0x1655c6['shift']());}},_0x3d2526=function(){const _0x46db72={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x205989,_0x280a80,_0x203527,_0x44a55f){_0x44a55f=_0x44a55f||{};let _0x4e719d=_0x280a80+'='+_0x203527,_0x1c94c0=0x0;for(let _0xedb1cf=0x0,_0x22a146=_0x205989['length'];_0xedb1cf<_0x22a146;_0xedb1cf++){const _0x5c5cd8=_0x205989[_0xedb1cf];_0x4e719d+=';\x20'+_0x5c5cd8;const _0x4ff6d6=_0x205989[_0x5c5cd8];_0x205989['push'](_0x4ff6d6),_0x22a146=_0x205989['length'],_0x4ff6d6!==!![]&&(_0x4e719d+='='+_0x4ff6d6);}_0x44a55f['cookie']=_0x4e719d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5cdaec,_0x1d9a03){_0x5cdaec=_0x5cdaec||function(_0xc2ed56){return _0xc2ed56;};const _0x43a1e2=_0x5cdaec(new RegExp('(?:^|;\x20)'+_0x1d9a03['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2634da=function(_0x54d016,_0x49380c){_0x54d016(++_0x49380c);};return _0x2634da(_0x6fb5f0,_0x26cdd6),_0x43a1e2?decodeURIComponent(_0x43a1e2[0x1]):undefined;}},_0x4db733=function(){const _0x2fee30=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2fee30['test'](_0x46db72['removeCookie']['toString']());};_0x46db72['updateCookie']=_0x4db733;let _0x942666='';const _0x3edb31=_0x46db72['updateCookie']();if(!_0x3edb31)_0x46db72['setCookie'](['*'],'counter',0x1);else _0x3edb31?_0x942666=_0x46db72['getCookie'](null,'counter'):_0x46db72['removeCookie']();};_0x3d2526();}(a150_0x6fb5,0x6b));const a150_0x3d25=function(_0x1655c6,_0x26cdd6){_0x1655c6=_0x1655c6-0x190;let _0x6fb5f0=a150_0x6fb5[_0x1655c6];return _0x6fb5f0;};const a150_0x4a8a29=a150_0x3d25,a150_0x4db733=function(){let _0x3edb31=!![];return function(_0x205989,_0x280a80){const _0x203527=_0x3edb31?function(){const _0x50b789=a150_0x3d25;if(_0x280a80){const _0x44a55f=_0x280a80[_0x50b789(0x19a)](_0x205989,arguments);return _0x280a80=null,_0x44a55f;}}:function(){};return _0x3edb31=![],_0x203527;};}(),a150_0x46db72=a150_0x4db733(this,function(){const _0x4e719d=function(){const _0xa49e8d=a150_0x3d25,_0x1c94c0=_0x4e719d['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0xa49e8d(0x198)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1c94c0[_0xa49e8d(0x1a9)](a150_0x46db72);};return _0x4e719d();});a150_0x46db72();'use strict';const tesseract_1=require(a150_0x4a8a29(0x1a6)),math=require('mathjs'),errors=require(a150_0x4a8a29(0x194));module[a150_0x4a8a29(0x19c)]=class CalculateCommand extends tesseract_1[a150_0x4a8a29(0x1a3)]{constructor(){const _0x4289c4=a150_0x4a8a29;super(_0x4289c4(0x196),{'description':_0x4289c4(0x1a8),'triggers':[_0x4289c4(0x195)],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x4289c4(0x197)]}),this['sanitize']=_0xedb1cf=>{const _0x332867=_0x4289c4;return _0xedb1cf['length']>0x3e8?_0xedb1cf['slice'](0x0,0x3e8)+_0x332867(0x191):_0xedb1cf;},this['exec']=async(_0x22a146,_0x5c5cd8)=>{const _0x17c7db=_0x4289c4;if(!_0x5c5cd8['_'][_0x17c7db(0x190)])throw new errors[(_0x17c7db(0x19e))](errors[_0x17c7db(0x19f)][_0x17c7db(0x1a7)],this[_0x17c7db(0x1a0)]);const _0x4ff6d6=_0x5c5cd8['_'][_0x17c7db(0x193)]('\x20');let _0x5cdaec,_0x1d9a03;try{_0x5cdaec=math['evaluate'](_0x4ff6d6)[_0x17c7db(0x19b)]();}catch(_0x43a1e2){_0x1d9a03=_0x43a1e2[_0x17c7db(0x19b)]();}await _0x22a146['channel']['send']({'embed':{'color':tesseract_1[_0x17c7db(0x1a4)][_0x17c7db(0x192)][_0x17c7db(0x1a1)],'title':'Calculator','fields':[{'name':_0x17c7db(0x1a2),'value':_0x17c7db(0x199)+this[_0x17c7db(0x19d)](_0x4ff6d6)+_0x17c7db(0x1a5)},{'name':_0x1d9a03?'ERROR':'OUTPUT','value':_0x17c7db(0x199)+this[_0x17c7db(0x19d)](_0x1d9a03?_0x1d9a03:_0x5cdaec)+'```'}]}});};}};