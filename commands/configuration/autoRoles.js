const a456_0x4d07=['PLATINUM','client','catch','../../utils/omnic','premiumAutoRoles','findByIdAndUpdate','toString','../../utils/errors','autoRolesAdd','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','author','RED','membershipLimitAutoRoles','PREMIUM_MEMBERSHIP_REQUIRED','autoRolesList','document','MANAGE_ROLES','IRIS','autoAssignable','autoRoles\x20--remove\x20ROLE','add','fetchPremiumTier','send','name','guild','autoRoles\x20--add\x20ROLE\x20--user','COLORS','\x20/\x20HUMANS','DiscordError','remove','ROLE_NOT_FOUND','autoRoles\x20--add\x20ROLE','BASTION_ERROR_TYPE','user','forUsers','getString','noAutoRoles','PremiumTier','length','GOLD','language','info','roles','resolveRole','AUTO_ROLES','cache','locale','_id','For\x20Humans','Command','exports','bot','GREEN','resolver','countDocuments','constructor','channel','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','push','LIMITED_PREMIUM_MEMBERSHIP','has','tag','autoRoles','join','get','toUpperCase','LIMITS','For\x20Bots','test','default','forBots','compile','errors','roleNotFound','autoRolesRemove'];(function(_0x44a22b,_0x4d07e2){const _0x734e2=function(_0x5bcb90){while(--_0x5bcb90){_0x44a22b['push'](_0x44a22b['shift']());}};const _0x370572=function(){const _0xa86e1b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36e9c7,_0x418ea3,_0x199a3d,_0x25ac2e){_0x25ac2e=_0x25ac2e||{};let _0x578899=_0x418ea3+'='+_0x199a3d;let _0x5af1a0=0x0;for(let _0x47d9b2=0x0,_0x1dcfd2=_0x36e9c7['length'];_0x47d9b2<_0x1dcfd2;_0x47d9b2++){const _0x3d48cf=_0x36e9c7[_0x47d9b2];_0x578899+=';\x20'+_0x3d48cf;const _0x9a21d5=_0x36e9c7[_0x3d48cf];_0x36e9c7['push'](_0x9a21d5);_0x1dcfd2=_0x36e9c7['length'];if(_0x9a21d5!==!![]){_0x578899+='='+_0x9a21d5;}}_0x25ac2e['cookie']=_0x578899;},'removeCookie':function(){return'dev';},'getCookie':function(_0x36a057,_0x14ead5){_0x36a057=_0x36a057||function(_0x3eae5a){return _0x3eae5a;};const _0x553bb3=_0x36a057(new RegExp('(?:^|;\x20)'+_0x14ead5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2f024b=function(_0xd0a985,_0x3d9aa8){_0xd0a985(++_0x3d9aa8);};_0x2f024b(_0x734e2,_0x4d07e2);return _0x553bb3?decodeURIComponent(_0x553bb3[0x1]):undefined;}};const _0x16f5de=function(){const _0x56b34d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x56b34d['test'](_0xa86e1b['removeCookie']['toString']());};_0xa86e1b['updateCookie']=_0x16f5de;let _0x9d1340='';const _0x440b35=_0xa86e1b['updateCookie']();if(!_0x440b35){_0xa86e1b['setCookie'](['*'],'counter',0x1);}else if(_0x440b35){_0x9d1340=_0xa86e1b['getCookie'](null,'counter');}else{_0xa86e1b['removeCookie']();}};_0x370572();}(a456_0x4d07,0x184));const a456_0x734e=function(_0x44a22b,_0x4d07e2){_0x44a22b=_0x44a22b-0x0;let _0x734e2=a456_0x4d07[_0x44a22b];return _0x734e2;};const a456_0xa86e1b=function(){let _0x4189ee=!![];return function(_0xca889e,_0x2bb879){const _0x44c9db=_0x4189ee?function(){if(_0x2bb879){const _0x13b5b8=_0x2bb879[a456_0x734e('0x31')](_0xca889e,arguments);_0x2bb879=null;return _0x13b5b8;}}:function(){};_0x4189ee=![];return _0x44c9db;};}();const a456_0x5bcb90=a456_0xa86e1b(this,function(){const _0xf0639c=function(){const _0x4a6243=_0xf0639c[a456_0x734e('0x2f')](a456_0x734e('0x32'))()[a456_0x734e('0x40')](a456_0x734e('0x1'));return!_0x4a6243[a456_0x734e('0x3d')](a456_0x5bcb90);};return _0xf0639c();});a456_0x5bcb90();'use strict';const tesseract_1=require('@bastion/tesseract');const Role_1=require('../../models/Role');const constants=require('../../utils/constants');const errors=require(a456_0x734e('0x4b'));const omnic=require(a456_0x734e('0x47'));module[a456_0x734e('0x2a')]=class AutoRoles extends tesseract_1[a456_0x734e('0x29')]{constructor(){super(a456_0x734e('0x37'),{'description':'It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':[a456_0x734e('0xc'),a456_0x734e('0x15')],'boolean':[a456_0x734e('0x2b'),a456_0x734e('0x19')],'string':['add','remove']},'scope':a456_0x734e('0x10'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a456_0x734e('0x8')],'userPermissions':['MANAGE_ROLES'],'syntax':['autoRoles',a456_0x734e('0x17'),'autoRoles\x20--add\x20ROLE\x20--bot',a456_0x734e('0x11'),a456_0x734e('0xb')]});this['exec']=async(_0x118534,_0x4bf999)=>{if(_0x4bf999[a456_0x734e('0xc')]){if(constants['isPublicBastion'](this['client']['user'])){const _0xb68566=await Role_1['default'][a456_0x734e('0x2e')]({'guild':_0x118534['guild']['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0xb68566>=constants['LIMITS'][a456_0x734e('0x24')]){const _0x5176c6=await omnic[a456_0x734e('0xd')](_0x118534[a456_0x734e('0x10')])['catch'](()=>{});if(_0x5176c6){if(_0x5176c6===omnic[a456_0x734e('0x1d')]['GOLD']&&_0xb68566>=constants[a456_0x734e('0x3b')]['GOLD'][a456_0x734e('0x24')]){throw new errors[(a456_0x734e('0x14'))](errors[a456_0x734e('0x18')][a456_0x734e('0x34')],this[a456_0x734e('0x45')][a456_0x734e('0x26')][a456_0x734e('0x1b')](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')][a456_0x734e('0x20')],a456_0x734e('0x41'),a456_0x734e('0x4'),constants[a456_0x734e('0x3b')][a456_0x734e('0x1f')][a456_0x734e('0x24')]));}else if(_0x5176c6===omnic[a456_0x734e('0x1d')][a456_0x734e('0x44')]&&_0xb68566>=constants[a456_0x734e('0x3b')][a456_0x734e('0x44')][a456_0x734e('0x24')]){throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a456_0x734e('0x34')],this['client'][a456_0x734e('0x26')][a456_0x734e('0x1b')](_0x118534['guild'][a456_0x734e('0x7')]['language'],a456_0x734e('0x41'),a456_0x734e('0x4'),constants[a456_0x734e('0x3b')]['PLATINUM'][a456_0x734e('0x24')]));}}else{throw new errors[(a456_0x734e('0x14'))](errors[a456_0x734e('0x18')][a456_0x734e('0x5')],this[a456_0x734e('0x45')][a456_0x734e('0x26')][a456_0x734e('0x1b')](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')]['language'],a456_0x734e('0x41'),a456_0x734e('0x48'),constants[a456_0x734e('0x3b')][a456_0x734e('0x24')]));}}}const _0x2cdffc=this[a456_0x734e('0x45')][a456_0x734e('0x2d')][a456_0x734e('0x23')](_0x118534[a456_0x734e('0x10')],_0x4bf999[a456_0x734e('0xc')][a456_0x734e('0x38')]('\x20'));if(!_0x2cdffc)throw new errors[(a456_0x734e('0x14'))](errors['BASTION_ERROR_TYPE'][a456_0x734e('0x16')],this[a456_0x734e('0x45')][a456_0x734e('0x26')]['getString'](_0x118534['guild']['document'][a456_0x734e('0x20')],a456_0x734e('0x41'),a456_0x734e('0x42')));const _0x262094=!(Number(_0x4bf999[a456_0x734e('0x2b')])^Number(_0x4bf999['user']))||_0x4bf999[a456_0x734e('0x2b')]||![];const _0x5969b4=!(Number(_0x4bf999[a456_0x734e('0x2b')])^Number(_0x4bf999[a456_0x734e('0x19')]))||_0x4bf999[a456_0x734e('0x19')]||![];await Role_1[a456_0x734e('0x3e')][a456_0x734e('0x49')](_0x2cdffc['id'],{'_id':_0x2cdffc['id'],'guild':_0x118534[a456_0x734e('0x10')]['id'],'autoAssignable':{'forBots':_0x262094,'forUsers':_0x5969b4}},{'upsert':!![]});await _0x118534['channel'][a456_0x734e('0xe')]({'embed':{'color':tesseract_1['Constants'][a456_0x734e('0x12')][a456_0x734e('0x2c')],'description':this[a456_0x734e('0x45')][a456_0x734e('0x26')]['getString'](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')][a456_0x734e('0x20')],a456_0x734e('0x21'),a456_0x734e('0x0'),_0x118534[a456_0x734e('0x2')][a456_0x734e('0x36')],_0x2cdffc[a456_0x734e('0xf')]),'fields':[{'name':a456_0x734e('0x3c'),'value':_0x262094[a456_0x734e('0x4a')]()[a456_0x734e('0x3a')](),'inline':!![]},{'name':a456_0x734e('0x28'),'value':_0x5969b4['toString']()[a456_0x734e('0x3a')](),'inline':!![]}],'footer':{'text':_0x2cdffc['id']}}})['catch'](()=>{});}else if(_0x4bf999[a456_0x734e('0x15')]){const _0x45bdf9=this[a456_0x734e('0x45')][a456_0x734e('0x2d')][a456_0x734e('0x23')](_0x118534[a456_0x734e('0x10')],_0x4bf999[a456_0x734e('0x15')][a456_0x734e('0x38')]('\x20'));if(!_0x45bdf9)throw new errors[(a456_0x734e('0x14'))](errors[a456_0x734e('0x18')]['ROLE_NOT_FOUND'],this['client'][a456_0x734e('0x26')][a456_0x734e('0x1b')](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')][a456_0x734e('0x20')],'errors',a456_0x734e('0x42')));await Role_1[a456_0x734e('0x3e')][a456_0x734e('0x49')](_0x45bdf9['id'],{'$unset':{'autoAssignable':0x1}});await _0x118534[a456_0x734e('0x30')][a456_0x734e('0xe')]({'embed':{'color':tesseract_1['Constants'][a456_0x734e('0x12')][a456_0x734e('0x3')],'description':this[a456_0x734e('0x45')][a456_0x734e('0x26')]['getString'](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')]['language'],a456_0x734e('0x21'),a456_0x734e('0x43'),_0x118534[a456_0x734e('0x2')]['tag'],_0x45bdf9[a456_0x734e('0xf')]),'footer':{'text':_0x45bdf9['id']}}})[a456_0x734e('0x46')](()=>{});}else{const _0x2ec9dd=await Role_1[a456_0x734e('0x3e')]['find']({'guild':_0x118534[a456_0x734e('0x10')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x2ec9dd[a456_0x734e('0x1e')]){throw new Error(this[a456_0x734e('0x45')][a456_0x734e('0x26')][a456_0x734e('0x1b')](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')][a456_0x734e('0x20')],'errors',a456_0x734e('0x1c')));}const _0x31a886=[];for(const _0x5a84f9 of _0x2ec9dd){if(!_0x118534[a456_0x734e('0x10')][a456_0x734e('0x22')]['cache'][a456_0x734e('0x35')](_0x5a84f9[a456_0x734e('0x27')])){await _0x5a84f9[a456_0x734e('0x15')]()[a456_0x734e('0x46')](()=>{});}_0x31a886[a456_0x734e('0x33')]({'name':_0x118534['guild'][a456_0x734e('0x22')][a456_0x734e('0x25')][a456_0x734e('0x39')](_0x5a84f9['_id'])[a456_0x734e('0xf')]||'-','value':_0x5a84f9[a456_0x734e('0x27')]+(Number(_0x5a84f9[a456_0x734e('0xa')][a456_0x734e('0x3f')])^Number(_0x5a84f9['autoAssignable'][a456_0x734e('0x1a')])&&_0x5a84f9[a456_0x734e('0xa')]['forBots']?'\x20/\x20BOTS':'')+(Number(_0x5a84f9[a456_0x734e('0xa')][a456_0x734e('0x3f')])^Number(_0x5a84f9[a456_0x734e('0xa')][a456_0x734e('0x1a')])&&_0x5a84f9[a456_0x734e('0xa')][a456_0x734e('0x1a')]?a456_0x734e('0x13'):'')});}await _0x118534[a456_0x734e('0x30')][a456_0x734e('0xe')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a456_0x734e('0x9')],'title':'Auto\x20Roles','description':this['client']['locale'][a456_0x734e('0x1b')](_0x118534[a456_0x734e('0x10')][a456_0x734e('0x7')]['language'],a456_0x734e('0x21'),a456_0x734e('0x6')),'fields':_0x31a886}})[a456_0x734e('0x46')](()=>{});}};}};