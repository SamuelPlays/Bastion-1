const a101_0x389c=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','@bastion/tesseract','member','author','deaf','INVALID_COMMAND_SYNTAX','locale','catch','errors','user','tag','set','COLORS','document','getString','rolePosition','Command','unauthorized','resolveGuildMember','constructor','setDeaf','DiscordError','info','guild','apply','BASTION_ERROR_TYPE','memberSetDeaf','channel','voice','canManage','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','DEAFEN_MEMBERS','deaf\x20--user\x20USER_ID\x20--\x20REASON','client'];(function(_0x46cfe1,_0x1e65a8){const _0x389c6b=function(_0x338c2e){while(--_0x338c2e){_0x46cfe1['push'](_0x46cfe1['shift']());}},_0x56a4a6=function(){const _0x44da36={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x389ce4,_0x40fbca,_0x39b8fc,_0x5986d2){_0x5986d2=_0x5986d2||{};let _0x360b4d=_0x40fbca+'='+_0x39b8fc,_0x3c5cb9=0x0;for(let _0xd2a4b=0x0,_0xb33590=_0x389ce4['length'];_0xd2a4b<_0xb33590;_0xd2a4b++){const _0x38ce71=_0x389ce4[_0xd2a4b];_0x360b4d+=';\x20'+_0x38ce71;const _0x5f40bb=_0x389ce4[_0x38ce71];_0x389ce4['push'](_0x5f40bb),_0xb33590=_0x389ce4['length'],_0x5f40bb!==!![]&&(_0x360b4d+='='+_0x5f40bb);}_0x5986d2['cookie']=_0x360b4d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3db2b4,_0x32d457){_0x3db2b4=_0x3db2b4||function(_0x1ede68){return _0x1ede68;};const _0x4531d5=_0x3db2b4(new RegExp('(?:^|;\x20)'+_0x32d457['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4b04b6=function(_0x5a03db,_0x54d3c3){_0x5a03db(++_0x54d3c3);};return _0x4b04b6(_0x389c6b,_0x1e65a8),_0x4531d5?decodeURIComponent(_0x4531d5[0x1]):undefined;}},_0x6d6e51=function(){const _0xd1392f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xd1392f['test'](_0x44da36['removeCookie']['toString']());};_0x44da36['updateCookie']=_0x6d6e51;let _0x5e5c5e='';const _0x118404=_0x44da36['updateCookie']();if(!_0x118404)_0x44da36['setCookie'](['*'],'counter',0x1);else _0x118404?_0x5e5c5e=_0x44da36['getCookie'](null,'counter'):_0x44da36['removeCookie']();};_0x56a4a6();}(a101_0x389c,0x106));const a101_0x56a4=function(_0x46cfe1,_0x1e65a8){_0x46cfe1=_0x46cfe1-0x1e1;let _0x389c6b=a101_0x389c[_0x46cfe1];return _0x389c6b;};const a101_0x516c93=a101_0x56a4,a101_0x6d6e51=function(){let _0x118404=!![];return function(_0x389ce4,_0x40fbca){const _0x39b8fc=_0x118404?function(){const _0x881e44=a101_0x56a4;if(_0x40fbca){const _0x5986d2=_0x40fbca[_0x881e44(0x1f0)](_0x389ce4,arguments);return _0x40fbca=null,_0x5986d2;}}:function(){};return _0x118404=![],_0x39b8fc;};}(),a101_0x44da36=a101_0x6d6e51(this,function(){const _0x360b4d=function(){const _0x119240=a101_0x56a4,_0x3c5cb9=_0x360b4d[_0x119240(0x1eb)](_0x119240(0x1fb))()['constructor'](_0x119240(0x1f6));return!_0x3c5cb9['test'](a101_0x44da36);};return _0x360b4d();});a101_0x44da36();'use strict';const tesseract_1=require(a101_0x516c93(0x1fd)),errors=require('../../utils/errors');module['exports']=class Deaf extends tesseract_1[a101_0x516c93(0x1e8)]{constructor(){const _0x545043=a101_0x516c93;super(_0x545043(0x200),{'description':'It\x20allows\x20you\x20to\x20deafen\x20(and\x20undeafen)\x20users\x20in\x20the\x20server.\x20Deafened\x20users\x20can\x27t\x20listen\x20anything\x20in\x20the\x20server\x27s\x20voice\x20channels.','triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':[_0x545043(0x1e3)],'string':[_0x545043(0x1e1)]},'scope':_0x545043(0x1ef),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x545043(0x1f8)],'userPermissions':[_0x545043(0x1f8)],'syntax':[_0x545043(0x1f9),'deaf\x20--unset\x20--user\x20USER_ID\x20--\x20REASON']}),this['exec']=async(_0xd2a4b,_0xb33590)=>{const _0x449441=_0x545043,_0x38ce71=this[_0x449441(0x1fa)]['resolver'][_0x449441(0x1ea)](_0xd2a4b[_0x449441(0x1ef)],_0xb33590['user']);if(!_0x38ce71)throw new errors[(_0x449441(0x1ed))](errors[_0x449441(0x1f1)][_0x449441(0x201)],this['name']);if(_0xd2a4b[_0x449441(0x1ff)]['id']!==_0xd2a4b[_0x449441(0x1ef)]['ownerID']&&!_0xd2a4b[_0x449441(0x1fe)][_0x449441(0x1f5)](_0x38ce71))return await _0xd2a4b[_0x449441(0x1f3)][_0x449441(0x1f7)]({'embed':{'color':tesseract_1['Constants'][_0x449441(0x1e4)]['RED'],'title':this[_0x449441(0x1fa)]['locale']['getString'](_0xd2a4b[_0x449441(0x1ef)][_0x449441(0x1e5)][_0x449441(0x1fc)],_0x449441(0x204),_0x449441(0x1e9)),'description':this['client']['locale'][_0x449441(0x1e6)](_0xd2a4b[_0x449441(0x1ef)][_0x449441(0x1e5)][_0x449441(0x1fc)],'errors',_0x449441(0x1e7),_0xd2a4b[_0x449441(0x1ff)][_0x449441(0x1e2)],_0x38ce71[_0x449441(0x1e1)][_0x449441(0x1e2)])}})[_0x449441(0x203)](()=>{});const _0x5f40bb=_0xb33590['_']['join']('\x20')||'-';await _0x38ce71[_0x449441(0x1f4)][_0x449441(0x1ec)](!!_0xb33590[_0x449441(0x1e3)],_0x5f40bb),await _0xd2a4b['channel']['send']({'embed':{'color':tesseract_1['Constants'][_0x449441(0x1e4)]['ORANGE'],'description':_0xb33590[_0x449441(0x1e3)]?this[_0x449441(0x1fa)][_0x449441(0x202)][_0x449441(0x1e6)](_0xd2a4b[_0x449441(0x1ef)][_0x449441(0x1e5)][_0x449441(0x1fc)],'info',_0x449441(0x1f2),_0xd2a4b[_0x449441(0x1ff)][_0x449441(0x1e2)],_0x38ce71['user']['tag']):this[_0x449441(0x1fa)][_0x449441(0x202)][_0x449441(0x1e6)](_0xd2a4b[_0x449441(0x1ef)][_0x449441(0x1e5)][_0x449441(0x1fc)],_0x449441(0x1ee),'memberUnsetDeaf',_0xd2a4b[_0x449441(0x1ff)][_0x449441(0x1e2)],_0x38ce71[_0x449441(0x1e1)][_0x449441(0x1e2)]),'fields':[{'name':'Reason','value':_0x5f40bb}],'footer':{'text':_0x38ce71['id']}}})[_0x449441(0x203)](()=>{});};}};