const a43_0x3e0d=['exec','LIMITS','client','length','votingChannels','PremiumTier','Voting\x20Channels','info','PLATINUM','channel','\x20/\x20','add','../../utils/omnic','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name','votingChannelsRemove','votingChannelsAdd','votingChannels\x20--add','getString','GOLD','constructor','BASTION_ERROR_TYPE','RED','VOTING_CHANNELS','author','LIMITED_PREMIUM_MEMBERSHIP','PREMIUM_MEMBERSHIP_REQUIRED','remove','language','DiscordError','countDocuments','default','user','document','membershipLimitVotingChannels','fetchPremiumTier','GREEN','Constants','tag','premiumVotingChannels','exports','guild','cache','_id','test','send','isPublicBastion','@bastion/tesseract','locale','errors','findByIdAndUpdate','catch','get','../../utils/errors','../../models/TextChannel','COLORS','votingChannels\x20--remove','find','Command','channels'];(function(_0x3b07e0,_0x6bb006){const _0x3e0d6e=function(_0x43a506){while(--_0x43a506){_0x3b07e0['push'](_0x3b07e0['shift']());}},_0x333dc0=function(){const _0x13cabb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x45928b,_0x4861c7,_0x3a6337,_0x27d24c){_0x27d24c=_0x27d24c||{};let _0x1fc2de=_0x4861c7+'='+_0x3a6337,_0xaa3fcb=0x0;for(let _0x1e0ce3=0x0,_0x414601=_0x45928b['length'];_0x1e0ce3<_0x414601;_0x1e0ce3++){const _0x55d43b=_0x45928b[_0x1e0ce3];_0x1fc2de+=';\x20'+_0x55d43b;const _0x338ce0=_0x45928b[_0x55d43b];_0x45928b['push'](_0x338ce0),_0x414601=_0x45928b['length'],_0x338ce0!==!![]&&(_0x1fc2de+='='+_0x338ce0);}_0x27d24c['cookie']=_0x1fc2de;},'removeCookie':function(){return'dev';},'getCookie':function(_0x434f6b,_0x396080){_0x434f6b=_0x434f6b||function(_0x3bbc62){return _0x3bbc62;};const _0x454705=_0x434f6b(new RegExp('(?:^|;\x20)'+_0x396080['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5278ca=function(_0x6b296b,_0x72899e){_0x6b296b(++_0x72899e);};return _0x5278ca(_0x3e0d6e,_0x6bb006),_0x454705?decodeURIComponent(_0x454705[0x1]):undefined;}},_0x3f59c1=function(){const _0x4252a3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4252a3['test'](_0x13cabb['removeCookie']['toString']());};_0x13cabb['updateCookie']=_0x3f59c1;let _0x57f468='';const _0x46756e=_0x13cabb['updateCookie']();if(!_0x46756e)_0x13cabb['setCookie'](['*'],'counter',0x1);else _0x46756e?_0x57f468=_0x13cabb['getCookie'](null,'counter'):_0x13cabb['removeCookie']();};_0x333dc0();}(a43_0x3e0d,0xe5));const a43_0x333d=function(_0x3b07e0,_0x6bb006){_0x3b07e0=_0x3b07e0-0x11f;let _0x3e0d6e=a43_0x3e0d[_0x3b07e0];return _0x3e0d6e;};const a43_0x63ba5a=a43_0x333d,a43_0x3f59c1=function(){let _0x46756e=!![];return function(_0x45928b,_0x4861c7){const _0x3a6337=_0x46756e?function(){if(_0x4861c7){const _0x27d24c=_0x4861c7['apply'](_0x45928b,arguments);return _0x4861c7=null,_0x27d24c;}}:function(){};return _0x46756e=![],_0x3a6337;};}(),a43_0x13cabb=a43_0x3f59c1(this,function(){const _0x1fc2de=function(){const _0x544ba9=a43_0x333d,_0xaa3fcb=_0x1fc2de[_0x544ba9(0x13e)](_0x544ba9(0x137))()[_0x544ba9(0x13e)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xaa3fcb[_0x544ba9(0x156)](a43_0x13cabb);};return _0x1fc2de();});a43_0x13cabb();'use strict';const tesseract_1=require(a43_0x63ba5a(0x159)),TextChannel_1=require(a43_0x63ba5a(0x124)),constants=require('../../utils/constants'),errors=require(a43_0x63ba5a(0x123)),omnic=require(a43_0x63ba5a(0x136));module[a43_0x63ba5a(0x152)]=class Announcements extends tesseract_1[a43_0x63ba5a(0x128)]{constructor(){const _0x2f1886=a43_0x63ba5a;super('votingChannels',{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20channels\x20as\x20Voting\x20Channels.\x20If\x20a\x20channel\x20is\x20set\x20as\x20a\x20Voting\x20Channel,\x20anything\x20sent\x20in\x20the\x20channel\x20will\x20be\x20set\x20up\x20for\x20everyone\x20to\x20vote.','triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'boolean':[_0x2f1886(0x135),_0x2f1886(0x145)]},'scope':_0x2f1886(0x153),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x2f1886(0x12e),_0x2f1886(0x13b),_0x2f1886(0x126)]}),this[_0x2f1886(0x12a)]=async(_0x1e0ce3,_0x414601)=>{const _0x51f05f=_0x2f1886;if(_0x414601[_0x51f05f(0x135)]){if(constants[_0x51f05f(0x158)](this['client'][_0x51f05f(0x14a)])){const _0x434f6b=await TextChannel_1[_0x51f05f(0x149)][_0x51f05f(0x148)]({'guild':_0x1e0ce3[_0x51f05f(0x153)]['id'],'voting':!![]});if(_0x434f6b>=constants[_0x51f05f(0x12b)][_0x51f05f(0x141)]){const _0x396080=await omnic[_0x51f05f(0x14d)](_0x1e0ce3[_0x51f05f(0x153)])['catch'](()=>{});if(_0x396080){if(_0x396080===omnic[_0x51f05f(0x12f)][_0x51f05f(0x13d)]&&_0x434f6b>=constants[_0x51f05f(0x12b)][_0x51f05f(0x13d)][_0x51f05f(0x141)])throw new errors[(_0x51f05f(0x147))](errors[_0x51f05f(0x13f)][_0x51f05f(0x143)],this[_0x51f05f(0x12c)][_0x51f05f(0x15a)][_0x51f05f(0x13c)](_0x1e0ce3['guild'][_0x51f05f(0x14b)][_0x51f05f(0x146)],_0x51f05f(0x11f),'membershipLimitVotingChannels',constants['LIMITS'][_0x51f05f(0x13d)][_0x51f05f(0x141)]));else{if(_0x396080===omnic[_0x51f05f(0x12f)]['PLATINUM']&&_0x434f6b>=constants[_0x51f05f(0x12b)][_0x51f05f(0x132)][_0x51f05f(0x141)])throw new errors[(_0x51f05f(0x147))](errors[_0x51f05f(0x13f)][_0x51f05f(0x143)],this[_0x51f05f(0x12c)][_0x51f05f(0x15a)][_0x51f05f(0x13c)](_0x1e0ce3[_0x51f05f(0x153)]['document'][_0x51f05f(0x146)],_0x51f05f(0x11f),_0x51f05f(0x14c),constants[_0x51f05f(0x12b)]['PLATINUM'][_0x51f05f(0x141)]));}}else throw new errors[(_0x51f05f(0x147))](errors[_0x51f05f(0x13f)][_0x51f05f(0x144)],this[_0x51f05f(0x12c)][_0x51f05f(0x15a)]['getString'](_0x1e0ce3['guild'][_0x51f05f(0x14b)][_0x51f05f(0x146)],_0x51f05f(0x11f),_0x51f05f(0x151),constants[_0x51f05f(0x12b)][_0x51f05f(0x141)]));}}return await TextChannel_1['default'][_0x51f05f(0x120)](_0x1e0ce3['channel']['id'],{'_id':_0x1e0ce3[_0x51f05f(0x133)]['id'],'guild':_0x1e0ce3[_0x51f05f(0x153)]['id'],'voting':!![]},{'upsert':!![]}),await _0x1e0ce3[_0x51f05f(0x133)]['send']({'embed':{'color':tesseract_1['Constants'][_0x51f05f(0x125)][_0x51f05f(0x14e)],'description':this[_0x51f05f(0x12c)][_0x51f05f(0x15a)][_0x51f05f(0x13c)](_0x1e0ce3[_0x51f05f(0x153)][_0x51f05f(0x14b)][_0x51f05f(0x146)],_0x51f05f(0x131),_0x51f05f(0x13a),_0x1e0ce3['author'][_0x51f05f(0x150)])}})[_0x51f05f(0x121)](()=>{});}if(_0x414601['remove'])return await TextChannel_1['default'][_0x51f05f(0x120)](_0x1e0ce3['channel']['id'],{'_id':_0x1e0ce3[_0x51f05f(0x133)]['id'],'guild':_0x1e0ce3[_0x51f05f(0x153)]['id'],'$unset':{'voting':0x1}}),await _0x1e0ce3[_0x51f05f(0x133)][_0x51f05f(0x157)]({'embed':{'color':tesseract_1[_0x51f05f(0x14f)][_0x51f05f(0x125)][_0x51f05f(0x140)],'description':this[_0x51f05f(0x12c)][_0x51f05f(0x15a)][_0x51f05f(0x13c)](_0x1e0ce3[_0x51f05f(0x153)][_0x51f05f(0x14b)][_0x51f05f(0x146)],_0x51f05f(0x131),_0x51f05f(0x139),_0x1e0ce3[_0x51f05f(0x142)][_0x51f05f(0x150)])}})['catch'](()=>{});const _0x55d43b=await TextChannel_1[_0x51f05f(0x149)][_0x51f05f(0x127)]({'guild':_0x1e0ce3[_0x51f05f(0x153)]['id'],'voting':!![]}),_0x338ce0=[];for(const _0x454705 of _0x55d43b){_0x1e0ce3[_0x51f05f(0x153)]['channels'][_0x51f05f(0x154)]['has'](_0x454705[_0x51f05f(0x155)])?_0x338ce0['push'](_0x1e0ce3[_0x51f05f(0x153)][_0x51f05f(0x129)][_0x51f05f(0x154)][_0x51f05f(0x122)](_0x454705[_0x51f05f(0x155)])[_0x51f05f(0x138)]+_0x51f05f(0x134)+_0x454705[_0x51f05f(0x155)]):await _0x454705[_0x51f05f(0x145)]()[_0x51f05f(0x121)](()=>{});}await _0x1e0ce3[_0x51f05f(0x133)]['send']({'embed':{'color':tesseract_1['Constants'][_0x51f05f(0x125)]['IRIS'],'title':_0x51f05f(0x130),'description':this[_0x51f05f(0x12c)][_0x51f05f(0x15a)]['getString'](_0x1e0ce3[_0x51f05f(0x153)]['document'][_0x51f05f(0x146)],_0x51f05f(0x131),'votingChannels'),'fields':[{'name':(_0x338ce0[_0x51f05f(0x12d)]?_0x338ce0[_0x51f05f(0x12d)]:'No')+'\x20Voting\x20Channels','value':_0x338ce0['join']('\x0a\x0a')||'-'}]}})[_0x51f05f(0x121)](()=>{});};}};