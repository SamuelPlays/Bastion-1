const a94_0x2a2b=['roles','length','buy','isPublicBastion','roleStoreRemove','user','guild','info','Command','../../utils/constants','debit','locale','unlist','It\x20allows\x20you\x20to\x20set\x20up\x20a\x20Role\x20Store\x20in\x20the\x20server.\x20Server\x20managers\x20can\x20sell\x20roles\x20in\x20the\x20server\x20and\x20members\x20can\x20buy\x20them\x20with\x20Bastion\x20Coins.','MAX_SAFE_INTEGER','default','Paid\x20Role','cache','_id','tag','LIMITS','map','Roles\x20Store','INSUFFICIENT_BALANCE','ROLE_NOT_FOUND','PremiumTier','NO_PERMISSION','apply','GOLD','GREEN','IRIS','resolver','../../utils/omnic','premiumPaidRoles','roleStore\x20ROLE\x20--sell\x20AMOUNT','permissions','join','PLATINUM','Constants','LIMITED_PREMIUM_MEMBERSHIP','roleStore\x20ROLE\x20--buy','countDocuments','add','name','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','roleStoreAdd','price','PAID_ROLES','RED','send','member','MANAGE_ROLES','document','../../utils/errors','save','COLORS','getString','findOneAndUpdate','language','catch','client','find','roleNotFound','channel','DiscordError','author','../../models/Role','has','BASTION_ERROR_TYPE','exports','errors','membershipLimitPaidRoles','roleStore','sell','../../utils/numbers','NO_ROLES_ON_SALE','PREMIUM_MEMBERSHIP_REQUIRED','get'];(function(_0x3d26ff,_0x4d5196){const _0x2a2bc6=function(_0x5f4cbf){while(--_0x5f4cbf){_0x3d26ff['push'](_0x3d26ff['shift']());}},_0x2d4b3d=function(){const _0x3bd29d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x585fd9,_0x5da350,_0x589b3f,_0x46bbf2){_0x46bbf2=_0x46bbf2||{};let _0x5e9bad=_0x5da350+'='+_0x589b3f,_0x57659d=0x0;for(let _0x39f7b5=0x0,_0x3af25b=_0x585fd9['length'];_0x39f7b5<_0x3af25b;_0x39f7b5++){const _0x5debb8=_0x585fd9[_0x39f7b5];_0x5e9bad+=';\x20'+_0x5debb8;const _0x28ce67=_0x585fd9[_0x5debb8];_0x585fd9['push'](_0x28ce67),_0x3af25b=_0x585fd9['length'],_0x28ce67!==!![]&&(_0x5e9bad+='='+_0x28ce67);}_0x46bbf2['cookie']=_0x5e9bad;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26ed59,_0x269eb1){_0x26ed59=_0x26ed59||function(_0x2622db){return _0x2622db;};const _0x1229c2=_0x26ed59(new RegExp('(?:^|;\x20)'+_0x269eb1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2a036d=function(_0x173c89,_0x4458f6){_0x173c89(++_0x4458f6);};return _0x2a036d(_0x2a2bc6,_0x4d5196),_0x1229c2?decodeURIComponent(_0x1229c2[0x1]):undefined;}},_0xa04e81=function(){const _0x4b9de9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b9de9['test'](_0x3bd29d['removeCookie']['toString']());};_0x3bd29d['updateCookie']=_0xa04e81;let _0x2d1116='';const _0x3b0fe8=_0x3bd29d['updateCookie']();if(!_0x3b0fe8)_0x3bd29d['setCookie'](['*'],'counter',0x1);else _0x3b0fe8?_0x2d1116=_0x3bd29d['getCookie'](null,'counter'):_0x3bd29d['removeCookie']();};_0x2d4b3d();}(a94_0x2a2b,0x1a3));const a94_0x2d4b=function(_0x3d26ff,_0x4d5196){_0x3d26ff=_0x3d26ff-0x12d;let _0x2a2bc6=a94_0x2a2b[_0x3d26ff];return _0x2a2bc6;};const a94_0xe9e9d9=a94_0x2d4b,a94_0xa04e81=function(){let _0x3b0fe8=!![];return function(_0x585fd9,_0x5da350){const _0x589b3f=_0x3b0fe8?function(){const _0x1dc0bb=a94_0x2d4b;if(_0x5da350){const _0x46bbf2=_0x5da350[_0x1dc0bb(0x179)](_0x585fd9,arguments);return _0x5da350=null,_0x46bbf2;}}:function(){};return _0x3b0fe8=![],_0x589b3f;};}(),a94_0x3bd29d=a94_0xa04e81(this,function(){const _0x5e9bad=function(){const _0x59529a=a94_0x2d4b,_0x57659d=_0x5e9bad['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x59529a(0x13c));return!_0x57659d['test'](a94_0x3bd29d);};return _0x5e9bad();});a94_0x3bd29d();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require(a94_0xe9e9d9(0x152)),constants=require(a94_0xe9e9d9(0x167)),errors=require(a94_0xe9e9d9(0x145)),numbers=require(a94_0xe9e9d9(0x15a)),omnic=require(a94_0xe9e9d9(0x130));module[a94_0xe9e9d9(0x155)]=class RoleStoreCommand extends tesseract_1[a94_0xe9e9d9(0x166)]{constructor(){const _0x48f74b=a94_0xe9e9d9;super(_0x48f74b(0x158),{'description':_0x48f74b(0x16b),'triggers':[],'arguments':{'boolean':['buy','unlist'],'number':[_0x48f74b(0x159)],'coerce':{'sell':_0x39f7b5=>numbers['clamp'](_0x39f7b5,0x1,Number[_0x48f74b(0x16c)])}},'scope':_0x48f74b(0x164),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[],'syntax':[_0x48f74b(0x158),_0x48f74b(0x132),_0x48f74b(0x138),'roleStore\x20ROLE\x20--unlist']}),this['exec']=async(_0x3af25b,_0x5debb8)=>{const _0x573b78=_0x48f74b;if(_0x5debb8['_'][_0x573b78(0x15f)]){const _0x26ed59=this['client'][_0x573b78(0x12f)]['resolveRole'](_0x3af25b[_0x573b78(0x164)],_0x5debb8['_'][_0x573b78(0x134)]('\x20'));if(!_0x26ed59)throw new errors['DiscordError'](errors[_0x573b78(0x154)][_0x573b78(0x176)],this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)][_0x573b78(0x14a)],_0x573b78(0x156),_0x573b78(0x14e)));if(_0x5debb8[_0x573b78(0x159)]>0x0){if(constants[_0x573b78(0x161)](this['client'][_0x573b78(0x163)])){const _0x269eb1=await Role_1[_0x573b78(0x16d)][_0x573b78(0x139)]({'guild':_0x3af25b[_0x573b78(0x164)]['id'],'price':{'$exists':!![],'$ne':null}});if(_0x269eb1>=constants['LIMITS']['PAID_ROLES']){const _0x1229c2=await omnic['fetchPremiumTier'](_0x3af25b[_0x573b78(0x164)])['catch'](()=>{});if(_0x1229c2){if(_0x1229c2===omnic[_0x573b78(0x177)][_0x573b78(0x17a)]&&_0x269eb1>=constants[_0x573b78(0x172)][_0x573b78(0x17a)][_0x573b78(0x13f)])throw new errors[(_0x573b78(0x150))](errors[_0x573b78(0x154)][_0x573b78(0x137)],this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)]['language'],_0x573b78(0x156),_0x573b78(0x157),constants[_0x573b78(0x172)]['GOLD'][_0x573b78(0x13f)]));else{if(_0x1229c2===omnic[_0x573b78(0x177)][_0x573b78(0x135)]&&_0x269eb1>=constants[_0x573b78(0x172)][_0x573b78(0x135)][_0x573b78(0x13f)])throw new errors[(_0x573b78(0x150))](errors[_0x573b78(0x154)][_0x573b78(0x137)],this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)][_0x573b78(0x14a)],_0x573b78(0x156),'membershipLimitPaidRoles',constants[_0x573b78(0x172)][_0x573b78(0x135)]['PAID_ROLES']));}}else throw new errors[(_0x573b78(0x150))](errors[_0x573b78(0x154)][_0x573b78(0x15c)],this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)][_0x573b78(0x14a)],'errors',_0x573b78(0x131),constants[_0x573b78(0x172)][_0x573b78(0x13f)]));}}if(!_0x3af25b[_0x573b78(0x142)][_0x573b78(0x133)][_0x573b78(0x153)](_0x573b78(0x143)))throw new Error(_0x573b78(0x178));return await Role_1['default'][_0x573b78(0x149)]({'_id':_0x26ed59['id'],'guild':_0x3af25b['guild']['id']},{'_id':_0x26ed59['id'],'guild':_0x3af25b[_0x573b78(0x164)]['id'],'price':_0x5debb8[_0x573b78(0x159)]},{'upsert':!![]}),await _0x3af25b['channel'][_0x573b78(0x141)]({'embed':{'color':tesseract_1[_0x573b78(0x136)][_0x573b78(0x147)]['GREEN'],'description':this['client'][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b['guild'][_0x573b78(0x144)][_0x573b78(0x14a)],'info',_0x573b78(0x13d),_0x3af25b['author'][_0x573b78(0x171)],_0x26ed59['name'],_0x5debb8[_0x573b78(0x159)])}})[_0x573b78(0x14b)](()=>{});}if(_0x5debb8[_0x573b78(0x160)]){if(_0x3af25b[_0x573b78(0x142)]['roles'][_0x573b78(0x16f)][_0x573b78(0x153)](_0x26ed59['id']))throw new Error('ROLE_ALREADY_ASSIGNED');const _0x2a036d=await Role_1[_0x573b78(0x16d)]['findOne']({'_id':_0x26ed59['id'],'guild':_0x3af25b[_0x573b78(0x164)]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x2a036d)throw new Error('ROLE_NOT_FOR_SALE');if(_0x3af25b[_0x573b78(0x142)][_0x573b78(0x144)]['balance']<_0x2a036d[_0x573b78(0x13e)])throw new Error(_0x573b78(0x175));return await _0x3af25b[_0x573b78(0x142)][_0x573b78(0x15e)][_0x573b78(0x13a)](_0x26ed59),_0x3af25b[_0x573b78(0x142)][_0x573b78(0x168)](_0x2a036d[_0x573b78(0x13e)],_0x573b78(0x16e),_0x3af25b[_0x573b78(0x142)][_0x573b78(0x144)]),await _0x3af25b[_0x573b78(0x142)]['document'][_0x573b78(0x146)](),await _0x3af25b[_0x573b78(0x14f)]['send']({'embed':{'color':tesseract_1[_0x573b78(0x136)][_0x573b78(0x147)][_0x573b78(0x12d)],'description':this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)][_0x573b78(0x14a)],'info','roleBought',_0x3af25b[_0x573b78(0x151)][_0x573b78(0x171)],_0x26ed59['name'],_0x2a036d['price'])}})[_0x573b78(0x14b)](()=>{});}if(_0x5debb8[_0x573b78(0x16a)]){if(!_0x3af25b['member'][_0x573b78(0x133)][_0x573b78(0x153)](_0x573b78(0x143)))throw new Error('NO_PERMISSION');return await Role_1['default'][_0x573b78(0x149)]({'_id':_0x26ed59['id'],'guild':_0x3af25b[_0x573b78(0x164)]['id'],'price':{'$exists':!![],'$ne':null}},{'_id':_0x26ed59['id'],'guild':_0x3af25b['guild']['id'],'$unset':{'price':0x1}}),await _0x3af25b[_0x573b78(0x14f)][_0x573b78(0x141)]({'embed':{'color':tesseract_1['Constants'][_0x573b78(0x147)][_0x573b78(0x140)],'description':this[_0x573b78(0x14c)][_0x573b78(0x169)][_0x573b78(0x148)](_0x3af25b[_0x573b78(0x164)][_0x573b78(0x144)][_0x573b78(0x14a)],_0x573b78(0x165),_0x573b78(0x162),_0x3af25b[_0x573b78(0x151)][_0x573b78(0x171)],_0x26ed59[_0x573b78(0x13b)])}})[_0x573b78(0x14b)](()=>{});}}const _0x28ce67=await Role_1[_0x573b78(0x16d)][_0x573b78(0x14d)]({'guild':_0x3af25b[_0x573b78(0x164)]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x28ce67[_0x573b78(0x15f)])throw new Error(_0x573b78(0x15b));return await _0x3af25b['channel'][_0x573b78(0x141)]({'embed':{'color':tesseract_1[_0x573b78(0x136)][_0x573b78(0x147)][_0x573b78(0x12e)],'title':_0x573b78(0x174),'fields':_0x28ce67[_0x573b78(0x173)](_0x2622db=>({'name':(_0x3af25b[_0x573b78(0x164)]['roles'][_0x573b78(0x16f)][_0x573b78(0x153)](_0x2622db[_0x573b78(0x170)])?_0x3af25b[_0x573b78(0x164)]['roles'][_0x573b78(0x16f)][_0x573b78(0x15d)](_0x2622db['_id'])[_0x573b78(0x13b)]+'\x20/\x20':'')+_0x2622db[_0x573b78(0x170)],'value':_0x2622db[_0x573b78(0x13e)]+'\x20Bastion\x20Coins'}))}})[_0x573b78(0x14b)](()=>{});};}};