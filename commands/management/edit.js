const a74_0x5b19=['exports','language','DiscordError','ROLE_NOT_FOUND','INVALID_COMMAND_SYNTAX','edit','document','edit\x20--message\x20MESSAGE_ID\x20--\x20NEW\x20MESSAGE','editable','Edited\x20by\x20','channel','join','tag','Command','@bastion/tesseract','length','../../utils/embeds','INVALID_BASTION_EMBED','name','constructor','getString','guild','isValidBastionEmbed','client','locale','It\x20allows\x20you\x20to\x20edit\x20any\x20message\x20sent\x20by\x20Bastion\x20in\x20the\x20current\x20channel.','BASTION_ERROR_TYPE','errors','react','../../utils/errors','roleNotFound','fetch','message'];(function(_0x48945e,_0x5b19cb){const _0xa8bbc5=function(_0x51a7f1){while(--_0x51a7f1){_0x48945e['push'](_0x48945e['shift']());}},_0x35fbcd=function(){const _0x27f7d2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3d48eb,_0x3c6a61,_0x14d64a,_0x4519a8){_0x4519a8=_0x4519a8||{};let _0x1be021=_0x3c6a61+'='+_0x14d64a,_0x4f5fb1=0x0;for(let _0x4e93c1=0x0,_0x4d1a7c=_0x3d48eb['length'];_0x4e93c1<_0x4d1a7c;_0x4e93c1++){const _0x15e83d=_0x3d48eb[_0x4e93c1];_0x1be021+=';\x20'+_0x15e83d;const _0x3c9d3b=_0x3d48eb[_0x15e83d];_0x3d48eb['push'](_0x3c9d3b),_0x4d1a7c=_0x3d48eb['length'],_0x3c9d3b!==!![]&&(_0x1be021+='='+_0x3c9d3b);}_0x4519a8['cookie']=_0x1be021;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5370f4,_0x5fff2e){_0x5370f4=_0x5370f4||function(_0x349cb2){return _0x349cb2;};const _0x513fc1=_0x5370f4(new RegExp('(?:^|;\x20)'+_0x5fff2e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5d8764=function(_0x4ba46d,_0x4d5a04){_0x4ba46d(++_0x4d5a04);};return _0x5d8764(_0xa8bbc5,_0x5b19cb),_0x513fc1?decodeURIComponent(_0x513fc1[0x1]):undefined;}},_0x43cd6c=function(){const _0x56d5bc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x56d5bc['test'](_0x27f7d2['removeCookie']['toString']());};_0x27f7d2['updateCookie']=_0x43cd6c;let _0x4ef7a4='';const _0x3afea7=_0x27f7d2['updateCookie']();if(!_0x3afea7)_0x27f7d2['setCookie'](['*'],'counter',0x1);else _0x3afea7?_0x4ef7a4=_0x27f7d2['getCookie'](null,'counter'):_0x27f7d2['removeCookie']();};_0x35fbcd();}(a74_0x5b19,0x1ce));const a74_0xa8bb=function(_0x48945e,_0x5b19cb){_0x48945e=_0x48945e-0x0;let _0xa8bbc5=a74_0x5b19[_0x48945e];return _0xa8bbc5;};const _0x1ef14d=a74_0xa8bb,a74_0x27f7d2=function(){let _0x4ef7a4=!![];return function(_0x3afea7,_0x3d48eb){const _0x3c6a61=_0x4ef7a4?function(){if(_0x3d48eb){const _0x14d64a=_0x3d48eb['apply'](_0x3afea7,arguments);return _0x3d48eb=null,_0x14d64a;}}:function(){};return _0x4ef7a4=![],_0x3c6a61;};}(),a74_0x51a7f1=a74_0x27f7d2(this,function(){const _0x4519a8=function(){const _0x4a1e4d=a74_0xa8bb,_0x1be021=_0x4519a8[_0x4a1e4d('0x13')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x4a1e4d('0x13')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1be021['test'](a74_0x51a7f1);};return _0x4519a8();});a74_0x51a7f1();'use strict';const tesseract_1=require(_0x1ef14d('0xe')),errors=require(_0x1ef14d('0x1d')),embeds=require(_0x1ef14d('0x10'));module[_0x1ef14d('0x0')]=class EditCommand extends tesseract_1[_0x1ef14d('0xd')]{constructor(){const _0x4b7696=_0x1ef14d;super(_0x4b7696('0x5'),{'description':_0x4b7696('0x19'),'triggers':[],'arguments':{'alias':{'message':['m']},'string':[_0x4b7696('0x20')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['ADMINISTRATOR'],'syntax':[_0x4b7696('0x7')]}),this['exec']=async(_0x4f5fb1,_0x4e93c1)=>{const _0x2662ca=_0x4b7696;if(!_0x4e93c1[_0x2662ca('0x20')]||!_0x4e93c1['_'][_0x2662ca('0xf')])throw new errors[(_0x2662ca('0x2'))](errors['BASTION_ERROR_TYPE'][_0x2662ca('0x4')],this[_0x2662ca('0x12')]);const _0x4d1a7c=await _0x4f5fb1[_0x2662ca('0xa')]['messages'][_0x2662ca('0x1f')](_0x4e93c1['message'],![]);if(!_0x4d1a7c)throw new errors['DiscordError'](errors[_0x2662ca('0x1a')][_0x2662ca('0x3')],this[_0x2662ca('0x17')][_0x2662ca('0x18')][_0x2662ca('0x14')](_0x4f5fb1[_0x2662ca('0x15')][_0x2662ca('0x6')][_0x2662ca('0x1')],_0x2662ca('0x1b'),_0x2662ca('0x1e')));if(!_0x4d1a7c[_0x2662ca('0x8')])return;const _0x15e83d=_0x4e93c1['_'][_0x2662ca('0xb')]('\x20');let _0x3c9d3b;try{_0x3c9d3b=JSON['parse'](_0x15e83d);if(!embeds[_0x2662ca('0x16')](_0x3c9d3b))throw new Error(_0x2662ca('0x11'));}catch{_0x3c9d3b=_0x15e83d;}await _0x4d1a7c[_0x2662ca('0x5')]({'embed':{...embeds['generateEmbed'](_0x3c9d3b),'footer':{'text':_0x2662ca('0x9')+_0x4f5fb1['author'][_0x2662ca('0xc')]}}}),await _0x4f5fb1[_0x2662ca('0x1c')]('✅');};}};