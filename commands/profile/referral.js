const a137_0x1ea8=['createInvite','Uses','language','referral','noReferralsChannel','findOne','@bastion/tesseract','tag','fetchInvites','referralsChannel','Command','cache','BASTION_ERROR_TYPE','uses','ERROR','claim','../../models/Member','client','info','guild','toLocaleString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Referral\x20Reward\x20Claimed','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','find','Referral\x20Invite','code','Referral\x20invite\x20generated\x20for\x20','author','locale','map','IRIS','errors','length','add','DiscordError','document','getString','apply','Constants','exports','It\x20allows\x20you\x20to\x20see\x20your\x20referral\x20invite\x20that\x20you\x20can\x20use\x20to\x20invite\x20people\x20to\x20the\x20server\x20and\x20increase\x20your\x20referral\x20points.\x20It\x20can\x20also\x20be\x20used\x20to\x20claim\x20your\x20referral\x20rewards\x20set\x20by\x20the\x20server\x20managers.','default','referralRewardsClaim','send','COLORS','get','exec','noReferralRewards','../../utils/errors','referral\x20--claim','channels'];(function(_0x4fe522,_0x36cdfc){const _0x1ea835=function(_0x491029){while(--_0x491029){_0x4fe522['push'](_0x4fe522['shift']());}},_0x4ac1eb=function(){const _0x245b36={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xbb000a,_0x489b86,_0x1d51dd,_0x1a4d10){_0x1a4d10=_0x1a4d10||{};let _0x4ac621=_0x489b86+'='+_0x1d51dd,_0x2f6ad1=0x0;for(let _0x96ccc8=0x0,_0x27fd4b=_0xbb000a['length'];_0x96ccc8<_0x27fd4b;_0x96ccc8++){const _0x261a5b=_0xbb000a[_0x96ccc8];_0x4ac621+=';\x20'+_0x261a5b;const _0x18b3b7=_0xbb000a[_0x261a5b];_0xbb000a['push'](_0x18b3b7),_0x27fd4b=_0xbb000a['length'],_0x18b3b7!==!![]&&(_0x4ac621+='='+_0x18b3b7);}_0x1a4d10['cookie']=_0x4ac621;},'removeCookie':function(){return'dev';},'getCookie':function(_0x569218,_0x38501b){_0x569218=_0x569218||function(_0x1e2370){return _0x1e2370;};const _0x29a161=_0x569218(new RegExp('(?:^|;\x20)'+_0x38501b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1da207=function(_0x9ddcf6,_0x1681f6){_0x9ddcf6(++_0x1681f6);};return _0x1da207(_0x1ea835,_0x36cdfc),_0x29a161?decodeURIComponent(_0x29a161[0x1]):undefined;}},_0x153a5a=function(){const _0x3f2c8f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f2c8f['test'](_0x245b36['removeCookie']['toString']());};_0x245b36['updateCookie']=_0x153a5a;let _0x21c70c='';const _0x391491=_0x245b36['updateCookie']();if(!_0x391491)_0x245b36['setCookie'](['*'],'counter',0x1);else _0x391491?_0x21c70c=_0x245b36['getCookie'](null,'counter'):_0x245b36['removeCookie']();};_0x4ac1eb();}(a137_0x1ea8,0x15c));const a137_0x4ac1=function(_0x4fe522,_0x36cdfc){_0x4fe522=_0x4fe522-0xcf;let _0x1ea835=a137_0x1ea8[_0x4fe522];return _0x1ea835;};const a137_0x47232d=a137_0x4ac1,a137_0x153a5a=function(){let _0x391491=!![];return function(_0xbb000a,_0x489b86){const _0x1d51dd=_0x391491?function(){const _0x1a996a=a137_0x4ac1;if(_0x489b86){const _0x1a4d10=_0x489b86[_0x1a996a(0xd8)](_0xbb000a,arguments);return _0x489b86=null,_0x1a4d10;}}:function(){};return _0x391491=![],_0x1d51dd;};}(),a137_0x245b36=a137_0x153a5a(this,function(){const _0x4ac621=function(){const _0x55a738=a137_0x4ac1,_0x2f6ad1=_0x4ac621[_0x55a738(0xfd)](_0x55a738(0xfe))()[_0x55a738(0xfd)](_0x55a738(0xfb));return!_0x2f6ad1['test'](a137_0x245b36);};return _0x4ac621();});a137_0x245b36();'use strict';const tesseract_1=require(a137_0x47232d(0xec)),Member_1=require(a137_0x47232d(0xf6)),Role_1=require('../../models/Role'),errors=require(a137_0x47232d(0xe3));module[a137_0x47232d(0xda)]=class ReferralCommand extends tesseract_1[a137_0x47232d(0xf0)]{constructor(){const _0x54166a=a137_0x47232d;super(_0x54166a(0xe9),{'description':_0x54166a(0xdb),'triggers':[],'arguments':{'boolean':[_0x54166a(0xf5)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x54166a(0xe9),_0x54166a(0xe4)]}),this[_0x54166a(0xe1)]=async(_0x96ccc8,_0x27fd4b)=>{const _0x4cb981=_0x54166a,_0x261a5b=await Member_1[_0x4cb981(0xdc)][_0x4cb981(0xeb)]({'user':_0x96ccc8[_0x4cb981(0x103)]['id'],'guild':_0x96ccc8['guild']['id']});let _0x18b3b7;if(_0x261a5b[_0x4cb981(0xe9)]){const _0x569218=await _0x96ccc8[_0x4cb981(0xf9)][_0x4cb981(0xee)]();_0x18b3b7=_0x569218[_0x4cb981(0xe0)](_0x261a5b['referral']);}if(!_0x18b3b7){const _0x38501b=_0x96ccc8[_0x4cb981(0xf9)][_0x4cb981(0xe5)][_0x4cb981(0xf1)][_0x4cb981(0xe0)](_0x96ccc8[_0x4cb981(0xf9)]['document'][_0x4cb981(0xef)]);if(!_0x38501b)throw new errors[(_0x4cb981(0xd5))](errors[_0x4cb981(0xf2)][_0x4cb981(0xf4)],this[_0x4cb981(0xf7)][_0x4cb981(0xcf)][_0x4cb981(0xd7)](_0x96ccc8['guild'][_0x4cb981(0xd6)][_0x4cb981(0xe8)],_0x4cb981(0xd2),_0x4cb981(0xea)));_0x18b3b7=await _0x38501b[_0x4cb981(0xe6)]({'reason':_0x4cb981(0x102)+_0x96ccc8[_0x4cb981(0x103)][_0x4cb981(0xed)],'temporary':![],'maxAge':0x0,'maxUses':0x0,'unique':!![]}),_0x261a5b[_0x4cb981(0xe9)]=_0x18b3b7['code'],await _0x261a5b['save']();}if(_0x27fd4b[_0x4cb981(0xf5)]){const _0x29a161=await Role_1['default'][_0x4cb981(0xff)]({'guild':_0x96ccc8[_0x4cb981(0xf9)]['id'],'referrals':{'$lte':_0x18b3b7[_0x4cb981(0xf3)]}});if(!_0x29a161[_0x4cb981(0xd3)])throw new errors['DiscordError'](errors[_0x4cb981(0xf2)][_0x4cb981(0xf4)],this[_0x4cb981(0xf7)]['locale']['getString'](_0x96ccc8['guild'][_0x4cb981(0xd6)][_0x4cb981(0xe8)],_0x4cb981(0xd2),_0x4cb981(0xe2),_0x18b3b7[_0x4cb981(0xf3)]));await _0x96ccc8['member']['roles'][_0x4cb981(0xd4)](_0x29a161[_0x4cb981(0xd0)](_0x1da207=>_0x1da207['id'])),await _0x96ccc8['channel']['send']({'embed':{'color':tesseract_1[_0x4cb981(0xd9)][_0x4cb981(0xdf)][_0x4cb981(0xd1)],'title':_0x4cb981(0xfc),'description':this[_0x4cb981(0xf7)][_0x4cb981(0xcf)][_0x4cb981(0xd7)](_0x96ccc8[_0x4cb981(0xf9)][_0x4cb981(0xd6)]['language'],_0x4cb981(0xf8),_0x4cb981(0xdd),_0x96ccc8[_0x4cb981(0x103)]['tag'],_0x18b3b7[_0x4cb981(0xf3)])}});}else await _0x96ccc8['channel'][_0x4cb981(0xde)]({'embed':{'color':tesseract_1[_0x4cb981(0xd9)][_0x4cb981(0xdf)]['IRIS'],'title':_0x4cb981(0x100),'description':_0x18b3b7['url'],'fields':[{'name':'Code','value':_0x18b3b7[_0x4cb981(0x101)],'inline':!![]},{'name':_0x4cb981(0xe7),'value':(_0x18b3b7[_0x4cb981(0xf3)]||0x0)[_0x4cb981(0xfa)](),'inline':!![]}]}});};}};