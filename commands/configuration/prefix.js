const a468_0x5717=['locale','author','send','fetchPremiumTier','prefixes','tag','length','PREMIUM_MEMBERSHIP_REQUIRED','PREFIXES','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','catch','apply','GREEN','GOLD','BASTION_ERROR_TYPE','join','PLATINUM','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','document','Prefixes','compile','client','DiscordError','../../utils/errors','info','prefix','LIMITS','PremiumTier','membershipLimitPrefix','language','@bastion/tesseract','test','user','errors','IRIS','guild','isPublicBastion','exports','../../utils/omnic','getString','COLORS','../../utils/constants','save','It\x20allows\x20you\x20set\x20custom\x20prefixes\x20for\x20Bastion\x20in\x20your\x20server.','premiumPrefix','LIMITED_PREMIUM_MEMBERSHIP'];(function(_0x2be791,_0x571766){const _0x578259=function(_0x3aea5c){while(--_0x3aea5c){_0x2be791['push'](_0x2be791['shift']());}};const _0x2e3a66=function(){const _0x1fb4cd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20a1b4,_0x3be88a,_0x96bea3,_0x3144ca){_0x3144ca=_0x3144ca||{};let _0x128824=_0x3be88a+'='+_0x96bea3;let _0x21f412=0x0;for(let _0x187afc=0x0,_0x4659a5=_0x20a1b4['length'];_0x187afc<_0x4659a5;_0x187afc++){const _0x30a4c2=_0x20a1b4[_0x187afc];_0x128824+=';\x20'+_0x30a4c2;const _0x560662=_0x20a1b4[_0x30a4c2];_0x20a1b4['push'](_0x560662);_0x4659a5=_0x20a1b4['length'];if(_0x560662!==!![]){_0x128824+='='+_0x560662;}}_0x3144ca['cookie']=_0x128824;},'removeCookie':function(){return'dev';},'getCookie':function(_0x18d937,_0x3a0d4c){_0x18d937=_0x18d937||function(_0x197d2d){return _0x197d2d;};const _0x5d5dae=_0x18d937(new RegExp('(?:^|;\x20)'+_0x3a0d4c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x50e9c4=function(_0x4b96df,_0x5c5512){_0x4b96df(++_0x5c5512);};_0x50e9c4(_0x578259,_0x571766);return _0x5d5dae?decodeURIComponent(_0x5d5dae[0x1]):undefined;}};const _0x4542d5=function(){const _0x1e88df=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1e88df['test'](_0x1fb4cd['removeCookie']['toString']());};_0x1fb4cd['updateCookie']=_0x4542d5;let _0x2b58e6='';const _0x523f9c=_0x1fb4cd['updateCookie']();if(!_0x523f9c){_0x1fb4cd['setCookie'](['*'],'counter',0x1);}else if(_0x523f9c){_0x2b58e6=_0x1fb4cd['getCookie'](null,'counter');}else{_0x1fb4cd['removeCookie']();}};_0x2e3a66();}(a468_0x5717,0x11c));const a468_0x5782=function(_0x2be791,_0x571766){_0x2be791=_0x2be791-0x0;let _0x578259=a468_0x5717[_0x2be791];return _0x578259;};const a468_0x1fb4cd=function(){let _0x5d31b2=!![];return function(_0x1de62c,_0x31c352){const _0x1d7199=_0x5d31b2?function(){if(_0x31c352){const _0x36ee56=_0x31c352[a468_0x5782('0xa')](_0x1de62c,arguments);_0x31c352=null;return _0x36ee56;}}:function(){};_0x5d31b2=![];return _0x1d7199;};}();const a468_0x3aea5c=a468_0x1fb4cd(this,function(){const _0xaa4c05=function(){const _0x1b7d68=_0xaa4c05['constructor'](a468_0x5782('0x7'))()[a468_0x5782('0x13')](a468_0x5782('0x10'));return!_0x1b7d68[a468_0x5782('0x1e')](a468_0x3aea5c);};return _0xaa4c05();});a468_0x3aea5c();'use strict';const tesseract_1=require(a468_0x5782('0x1d'));const constants=require(a468_0x5782('0x28'));const errors=require(a468_0x5782('0x16'));const omnic=require(a468_0x5782('0x25'));module[a468_0x5782('0x24')]=class Prefix extends tesseract_1['Command']{constructor(){super(a468_0x5782('0x18'),{'description':a468_0x5782('0x2a'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a468_0x5782('0x18'),'prefix\x20--\x20PREFIX']});this['exec']=async(_0x4d4c06,_0x37f1e7)=>{const _0x35b775=_0x4d4c06[a468_0x5782('0x22')];if(_0x37f1e7['_'][a468_0x5782('0x4')]){if(_0x37f1e7['_'][a468_0x5782('0x4')]>constants[a468_0x5782('0x19')][a468_0x5782('0x6')]&&constants[a468_0x5782('0x23')](this[a468_0x5782('0x14')][a468_0x5782('0x1f')])){const _0x19c5db=await omnic[a468_0x5782('0x1')](_0x4d4c06[a468_0x5782('0x22')])[a468_0x5782('0x9')](()=>{});if(_0x19c5db){if(_0x19c5db===omnic[a468_0x5782('0x1a')][a468_0x5782('0xc')]&&_0x37f1e7['_'][a468_0x5782('0x4')]>constants[a468_0x5782('0x19')][a468_0x5782('0xc')]['PREFIXES']){throw new errors[(a468_0x5782('0x15'))](errors[a468_0x5782('0xd')][a468_0x5782('0x2c')],this[a468_0x5782('0x14')][a468_0x5782('0x2d')][a468_0x5782('0x26')](_0x4d4c06['guild'][a468_0x5782('0x11')][a468_0x5782('0x1c')],a468_0x5782('0x20'),a468_0x5782('0x1b'),constants[a468_0x5782('0x19')]['GOLD'][a468_0x5782('0x6')]));}else if(_0x19c5db===omnic['PremiumTier'][a468_0x5782('0xf')]&&_0x37f1e7['_']['length']>constants['LIMITS'][a468_0x5782('0xf')][a468_0x5782('0x6')]){throw new errors[(a468_0x5782('0x15'))](errors[a468_0x5782('0xd')][a468_0x5782('0x2c')],this[a468_0x5782('0x14')][a468_0x5782('0x2d')][a468_0x5782('0x26')](_0x4d4c06[a468_0x5782('0x22')][a468_0x5782('0x11')]['language'],a468_0x5782('0x20'),a468_0x5782('0x1b'),constants['LIMITS'][a468_0x5782('0xf')][a468_0x5782('0x6')]));}}else{throw new errors[(a468_0x5782('0x15'))](errors[a468_0x5782('0xd')][a468_0x5782('0x5')],this[a468_0x5782('0x14')][a468_0x5782('0x2d')]['getString'](_0x4d4c06[a468_0x5782('0x22')]['document'][a468_0x5782('0x1c')],a468_0x5782('0x20'),a468_0x5782('0x2b'),constants[a468_0x5782('0x19')][a468_0x5782('0x6')]));}}_0x35b775[a468_0x5782('0x11')]['prefixes']=_0x37f1e7['_'];await _0x35b775[a468_0x5782('0x11')][a468_0x5782('0x29')]();return await _0x4d4c06[a468_0x5782('0x8')][a468_0x5782('0x0')]({'embed':{'color':tesseract_1['Constants'][a468_0x5782('0x27')][a468_0x5782('0xb')],'description':this[a468_0x5782('0x14')][a468_0x5782('0x2d')]['getString'](_0x4d4c06['guild'][a468_0x5782('0x11')][a468_0x5782('0x1c')],a468_0x5782('0x17'),'guildPrefixUpdate',_0x4d4c06[a468_0x5782('0x2e')][a468_0x5782('0x3')],_0x35b775[a468_0x5782('0x11')][a468_0x5782('0x2')][a468_0x5782('0xe')]('\x20\x20'))}})[a468_0x5782('0x9')](()=>{});}const _0x2f9d12=this['client']['configurations'][a468_0x5782('0x2')]['concat'](_0x35b775['document']['prefixes']);await _0x4d4c06[a468_0x5782('0x8')]['send']({'embed':{'color':tesseract_1['Constants'][a468_0x5782('0x27')][a468_0x5782('0x21')],'description':this[a468_0x5782('0x14')][a468_0x5782('0x2d')][a468_0x5782('0x26')](_0x4d4c06[a468_0x5782('0x22')][a468_0x5782('0x11')][a468_0x5782('0x1c')],a468_0x5782('0x17'),'guildPrefixes'),'fields':[{'name':a468_0x5782('0x12'),'value':_0x2f9d12[a468_0x5782('0xe')]('\x20\x20')}]}})[a468_0x5782('0x9')](()=>{});};}};