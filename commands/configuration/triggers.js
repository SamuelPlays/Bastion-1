const a40_0x1fea=['join','Constants','exec','DiscordError','triggers\x20--pattern\x20PATTERN\x20--reaction\x20EMOJI','reaction','guild','TRIGGERS','@bastion/tesseract','locale','```','Reaction\x20Response','constructor','PLATINUM','../../utils/emojis','deleteMany','getString','LIMITS','exports','triggers\x20--delete\x20PATTERN','membershipLimitTriggers','map','triggers','user','errors','parseEmoji','Message\x20Response','pattern','apply','Response\x20Reaction','send','../../utils/errors','Response\x20Message','RED','triggersRemove','triggers\x20--clear','IRIS','triggersList','client','find','COLORS','GOLD','Command','catch','fetchPremiumTier','tag','GREEN','BASTION_ERROR_TYPE','stringify','PremiumTier','PREMIUM_MEMBERSHIP_REQUIRED','info','create','responseMessage','length','document','isPublicBastion','../../models/Trigger','author','language','default','It\x20allows\x20you\x20to\x20add\x20(and\x20remove)\x20Triggers\x20in\x20the\x20server.\x20When\x20a\x20trigger\x20is\x20set,\x20and\x20Bastion\x20sees\x20a\x20message\x20from\x20a\x20human\x20containing\x20the\x20pattern\x20specified\x20in\x20the\x20trigger,\x20it\x27ll\x20respond\x20with\x20either\x20the\x20specified\x20response\x20message\x20or\x20reaction,\x20or\x20both.','clear','push','delete','channel','countDocuments','../../utils/omnic','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','LIMITED_PREMIUM_MEMBERSHIP','../../utils/constants'];(function(_0x2fed39,_0x468e8b){const _0x1feaee=function(_0x4031c3){while(--_0x4031c3){_0x2fed39['push'](_0x2fed39['shift']());}},_0x4c7001=function(){const _0x32f93b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x550e67,_0x175f63,_0x3eedc8,_0x5d2f08){_0x5d2f08=_0x5d2f08||{};let _0x4b4a5c=_0x175f63+'='+_0x3eedc8,_0xd714bc=0x0;for(let _0x9a2e2e=0x0,_0x538e38=_0x550e67['length'];_0x9a2e2e<_0x538e38;_0x9a2e2e++){const _0x1a3af4=_0x550e67[_0x9a2e2e];_0x4b4a5c+=';\x20'+_0x1a3af4;const _0x41bc69=_0x550e67[_0x1a3af4];_0x550e67['push'](_0x41bc69),_0x538e38=_0x550e67['length'],_0x41bc69!==!![]&&(_0x4b4a5c+='='+_0x41bc69);}_0x5d2f08['cookie']=_0x4b4a5c;},'removeCookie':function(){return'dev';},'getCookie':function(_0xeb4cb0,_0x54e0fd){_0xeb4cb0=_0xeb4cb0||function(_0x2065de){return _0x2065de;};const _0x40cf41=_0xeb4cb0(new RegExp('(?:^|;\x20)'+_0x54e0fd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x573c6f=function(_0x45f05d,_0x1f536a){_0x45f05d(++_0x1f536a);};return _0x573c6f(_0x1feaee,_0x468e8b),_0x40cf41?decodeURIComponent(_0x40cf41[0x1]):undefined;}},_0x1b47f1=function(){const _0x359406=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x359406['test'](_0x32f93b['removeCookie']['toString']());};_0x32f93b['updateCookie']=_0x1b47f1;let _0x1857c5='';const _0x385727=_0x32f93b['updateCookie']();if(!_0x385727)_0x32f93b['setCookie'](['*'],'counter',0x1);else _0x385727?_0x1857c5=_0x32f93b['getCookie'](null,'counter'):_0x32f93b['removeCookie']();};_0x4c7001();}(a40_0x1fea,0x16f));const a40_0x4c70=function(_0x2fed39,_0x468e8b){_0x2fed39=_0x2fed39-0x84;let _0x1feaee=a40_0x1fea[_0x2fed39];return _0x1feaee;};const a40_0x45f2f9=a40_0x4c70,a40_0x1b47f1=function(){let _0x385727=!![];return function(_0x550e67,_0x175f63){const _0x3eedc8=_0x385727?function(){const _0x240939=a40_0x4c70;if(_0x175f63){const _0x5d2f08=_0x175f63[_0x240939(0x94)](_0x550e67,arguments);return _0x175f63=null,_0x5d2f08;}}:function(){};return _0x385727=![],_0x3eedc8;};}(),a40_0x32f93b=a40_0x1b47f1(this,function(){const _0x4b4a5c=function(){const _0x4a8de2=a40_0x4c70,_0xd714bc=_0x4b4a5c[_0x4a8de2(0x84)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x4a8de2(0x84)](_0x4a8de2(0xbc));return!_0xd714bc['test'](a40_0x32f93b);};return _0x4b4a5c();});a40_0x32f93b();'use strict';const tesseract_1=require(a40_0x45f2f9(0xc7)),Trigger_1=require(a40_0x45f2f9(0xb1)),constants=require(a40_0x45f2f9(0xbe)),embeds=require('../../utils/embeds'),emojis=require(a40_0x45f2f9(0x86)),errors=require(a40_0x45f2f9(0x97)),omnic=require(a40_0x45f2f9(0xbb));module[a40_0x45f2f9(0x8a)]=class MessageFilterCommand extends tesseract_1[a40_0x45f2f9(0xa2)]{constructor(){const _0x1a06bc=a40_0x45f2f9;super(_0x1a06bc(0x8e),{'description':_0x1a06bc(0xb5),'triggers':[],'arguments':{'alias':{'clear':['c'],'delete':['d'],'pattern':['p'],'reaction':['e']},'boolean':[_0x1a06bc(0xb6)],'array':[_0x1a06bc(0xb8),_0x1a06bc(0x93)],'string':[_0x1a06bc(0xb8),_0x1a06bc(0x93),_0x1a06bc(0xc4)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x1a06bc(0x8e),'triggers\x20--pattern\x20PATTERN\x20--\x20RESPONSE',_0x1a06bc(0xc3),_0x1a06bc(0x8b),_0x1a06bc(0x9b)]}),this[_0x1a06bc(0xc1)]=async(_0x9a2e2e,_0x538e38)=>{const _0x1454aa=_0x1a06bc;if(_0x538e38['clear'])return await Trigger_1[_0x1454aa(0xb4)][_0x1454aa(0x87)]({'guild':_0x9a2e2e[_0x1454aa(0xc5)]['id']}),await _0x9a2e2e[_0x1454aa(0xb9)][_0x1454aa(0x96)]({'embed':{'color':tesseract_1[_0x1454aa(0xc0)][_0x1454aa(0xa0)][_0x1454aa(0x99)],'description':this['client'][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e['guild']['document'][_0x1454aa(0xb3)],_0x1454aa(0xab),'triggersClear',_0x9a2e2e[_0x1454aa(0xb2)][_0x1454aa(0xa5)])}})[_0x1454aa(0xa3)](()=>{});if(_0x538e38[_0x1454aa(0xb8)]&&_0x538e38[_0x1454aa(0xb8)][_0x1454aa(0xae)]){const _0x41bc69=_0x538e38[_0x1454aa(0xb8)]['join']('\x20');return await Trigger_1[_0x1454aa(0xb4)]['deleteMany']({'guild':_0x9a2e2e[_0x1454aa(0xc5)]['id'],'trigger':_0x41bc69}),await _0x9a2e2e['channel'][_0x1454aa(0x96)]({'embed':{'color':tesseract_1[_0x1454aa(0xc0)][_0x1454aa(0xa0)][_0x1454aa(0x99)],'description':this[_0x1454aa(0x9e)][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e[_0x1454aa(0xc5)]['document'][_0x1454aa(0xb3)],'info',_0x1454aa(0x9a),_0x9a2e2e[_0x1454aa(0xb2)][_0x1454aa(0xa5)],_0x41bc69)}})[_0x1454aa(0xa3)](()=>{});}if(_0x538e38[_0x1454aa(0x93)]&&_0x538e38[_0x1454aa(0x93)][_0x1454aa(0xae)]&&(_0x538e38['_'][_0x1454aa(0xae)]||_0x538e38[_0x1454aa(0xc4)])){if(constants[_0x1454aa(0xb0)](this[_0x1454aa(0x9e)][_0x1454aa(0x8f)])){const _0x2065de=await Trigger_1['default'][_0x1454aa(0xba)]({'guild':_0x9a2e2e['guild']['id']});if(_0x2065de>=constants[_0x1454aa(0x89)][_0x1454aa(0xc6)]){const _0x45f05d=await omnic[_0x1454aa(0xa4)](_0x9a2e2e[_0x1454aa(0xc5)])['catch'](()=>{});if(_0x45f05d){if(_0x45f05d===omnic[_0x1454aa(0xa9)][_0x1454aa(0xa1)]&&_0x2065de>=constants[_0x1454aa(0x89)][_0x1454aa(0xa1)][_0x1454aa(0xc6)])throw new errors[(_0x1454aa(0xc2))](errors[_0x1454aa(0xa7)][_0x1454aa(0xbd)],this[_0x1454aa(0x9e)][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e[_0x1454aa(0xc5)][_0x1454aa(0xaf)][_0x1454aa(0xb3)],_0x1454aa(0x90),_0x1454aa(0x8c),constants['LIMITS'][_0x1454aa(0xa1)]['TRIGGERS']));else{if(_0x45f05d===omnic[_0x1454aa(0xa9)]['PLATINUM']&&_0x2065de>=constants[_0x1454aa(0x89)][_0x1454aa(0x85)][_0x1454aa(0xc6)])throw new errors[(_0x1454aa(0xc2))](errors[_0x1454aa(0xa7)][_0x1454aa(0xbd)],this[_0x1454aa(0x9e)][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e[_0x1454aa(0xc5)][_0x1454aa(0xaf)][_0x1454aa(0xb3)],_0x1454aa(0x90),_0x1454aa(0x8c),constants[_0x1454aa(0x89)][_0x1454aa(0x85)][_0x1454aa(0xc6)]));}}else throw new errors[(_0x1454aa(0xc2))](errors['BASTION_ERROR_TYPE'][_0x1454aa(0xaa)],this[_0x1454aa(0x9e)]['locale']['getString'](_0x9a2e2e[_0x1454aa(0xc5)][_0x1454aa(0xaf)]['language'],_0x1454aa(0x90),'premiumTriggers',constants[_0x1454aa(0x89)][_0x1454aa(0xc6)]));}}const _0xeb4cb0=_0x538e38['pattern'][_0x1454aa(0xbf)]('\x20'),_0x54e0fd=[{'name':'Trigger','value':_0xeb4cb0,'inline':!![]}];let _0x40cf41;_0x538e38['_'][_0x1454aa(0xae)]&&(_0x40cf41=embeds['generateBastionEmbed'](_0x538e38['_']['join']('\x20')),_0x54e0fd['push']({'name':_0x1454aa(0x98),'value':'```json\x0a'+JSON[_0x1454aa(0xa8)](_0x40cf41)+_0x1454aa(0xc9)}));let _0x573c6f;if(_0x538e38[_0x1454aa(0xc4)]){const _0x1f536a=emojis[_0x1454aa(0x91)](_0x538e38[_0x1454aa(0xc4)]);_0x1f536a&&(_0x573c6f=_0x1f536a['value'],_0x54e0fd[_0x1454aa(0xb7)]({'name':_0x1454aa(0x95),'value':_0x538e38[_0x1454aa(0xc4)]}));}return await Trigger_1[_0x1454aa(0xb4)][_0x1454aa(0xac)]({'guild':_0x9a2e2e[_0x1454aa(0xc5)]['id'],'trigger':_0xeb4cb0,'responseMessage':_0x40cf41,'responseReaction':_0x573c6f}),await _0x9a2e2e['channel']['send']({'embed':{'color':tesseract_1[_0x1454aa(0xc0)][_0x1454aa(0xa0)][_0x1454aa(0xa6)],'description':this['client'][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e[_0x1454aa(0xc5)][_0x1454aa(0xaf)][_0x1454aa(0xb3)],_0x1454aa(0xab),'triggersAdd',_0x9a2e2e[_0x1454aa(0xb2)][_0x1454aa(0xa5)]),'fields':_0x54e0fd}})['catch'](()=>{});}const _0x1a3af4=await Trigger_1[_0x1454aa(0xb4)][_0x1454aa(0x9f)]({'guild':_0x9a2e2e[_0x1454aa(0xc5)]['id']});return await _0x9a2e2e[_0x1454aa(0xb9)][_0x1454aa(0x96)]({'embed':{'color':tesseract_1[_0x1454aa(0xc0)][_0x1454aa(0xa0)][_0x1454aa(0x9c)],'description':this[_0x1454aa(0x9e)][_0x1454aa(0xc8)][_0x1454aa(0x88)](_0x9a2e2e['guild'][_0x1454aa(0xaf)]['language'],'info',_0x1454aa(0x9d)),'fields':_0x1a3af4[_0x1454aa(0x8d)](_0x359406=>({'name':_0x359406['trigger'],'value':(_0x359406[_0x1454aa(0xad)]?_0x1454aa(0x92):'')+'\x0a'+(_0x359406['responseReaction']?_0x1454aa(0xca):'')}))}})[_0x1454aa(0xa3)](()=>{});};}};