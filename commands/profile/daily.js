const a132_0x24d0=['info','default','claim','member','../../models/Member','catch','getTime','COLORS','credit','document','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','exec','daily','toDateString','client','../../utils/numbers','channel','exports','premiumSinceTimestamp','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','send','tag','apply','claimStreakLast','getString','Daily\x20Reward','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getDate','Constants','findOne','test','claimStreakFirst','getRandomInt','claimRewardBooster','locale','lastClaimed','language','getClaimMessageKey','constructor','author','claimStreak'];(function(_0x2802b8,_0x49f5bf){const _0x24d09f=function(_0x2b1c11){while(--_0x2b1c11){_0x2802b8['push'](_0x2802b8['shift']());}},_0xb87dff=function(){const _0x14e9e4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x998429,_0x41fa53,_0x599f44,_0xd7db68){_0xd7db68=_0xd7db68||{};let _0x191e18=_0x41fa53+'='+_0x599f44,_0x572438=0x0;for(let _0x2cf2e0=0x0,_0x2a3a88=_0x998429['length'];_0x2cf2e0<_0x2a3a88;_0x2cf2e0++){const _0x275983=_0x998429[_0x2cf2e0];_0x191e18+=';\x20'+_0x275983;const _0x3c6523=_0x998429[_0x275983];_0x998429['push'](_0x3c6523),_0x2a3a88=_0x998429['length'],_0x3c6523!==!![]&&(_0x191e18+='='+_0x3c6523);}_0xd7db68['cookie']=_0x191e18;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e5c76,_0x8c22fe){_0x5e5c76=_0x5e5c76||function(_0x3abf76){return _0x3abf76;};const _0x5a5637=_0x5e5c76(new RegExp('(?:^|;\x20)'+_0x8c22fe['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4b0a78=function(_0x72e374,_0x2e8f4b){_0x72e374(++_0x2e8f4b);};return _0x4b0a78(_0x24d09f,_0x49f5bf),_0x5a5637?decodeURIComponent(_0x5a5637[0x1]):undefined;}},_0x47bce5=function(){const _0x1dc7c9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1dc7c9['test'](_0x14e9e4['removeCookie']['toString']());};_0x14e9e4['updateCookie']=_0x47bce5;let _0x588bf7='';const _0x1ee193=_0x14e9e4['updateCookie']();if(!_0x1ee193)_0x14e9e4['setCookie'](['*'],'counter',0x1);else _0x1ee193?_0x588bf7=_0x14e9e4['getCookie'](null,'counter'):_0x14e9e4['removeCookie']();};_0xb87dff();}(a132_0x24d0,0x193));const a132_0xb87d=function(_0x2802b8,_0x49f5bf){_0x2802b8=_0x2802b8-0xbe;let _0x24d09f=a132_0x24d0[_0x2802b8];return _0x24d09f;};const a132_0x1498d2=a132_0xb87d,a132_0x47bce5=function(){let _0x1ee193=!![];return function(_0x998429,_0x41fa53){const _0x599f44=_0x1ee193?function(){const _0x3140d6=a132_0xb87d;if(_0x41fa53){const _0xd7db68=_0x41fa53[_0x3140d6(0xc6)](_0x998429,arguments);return _0x41fa53=null,_0xd7db68;}}:function(){};return _0x1ee193=![],_0x599f44;};}(),a132_0x14e9e4=a132_0x47bce5(this,function(){const _0x191e18=function(){const _0x56be3d=a132_0xb87d,_0x572438=_0x191e18[_0x56be3d(0xd6)](_0x56be3d(0xc2))()[_0x56be3d(0xd6)](_0x56be3d(0xca));return!_0x572438[_0x56be3d(0xce)](a132_0x14e9e4);};return _0x191e18();});a132_0x14e9e4();'use strict';const tesseract_1=require(a132_0x1498d2(0xc1)),Member_1=require(a132_0x1498d2(0xdd)),numbers=require(a132_0x1498d2(0xe8));module[a132_0x1498d2(0xbf)]=class DailyCommand extends tesseract_1['Command']{constructor(){const _0x22447c=a132_0x1498d2;super(_0x22447c(0xe5),{'description':_0x22447c(0xe3),'triggers':[_0x22447c(0xdb)],'arguments':{},'scope':_0x22447c(0xc3),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x22447c(0xd5)]=_0x2cf2e0=>{const _0x2105fd=_0x22447c;switch(_0x2cf2e0){case 0x1:return _0x2105fd(0xcf);case 0x6:return _0x2105fd(0xc7);case 0x7:return'claimStreakClaimed';default:return _0x2105fd(0xd8);}},this[_0x22447c(0xe4)]=async _0x2a3a88=>{const _0x2eae0c=_0x22447c,_0x275983=await Member_1[_0x2eae0c(0xda)][_0x2eae0c(0xcd)]({'user':_0x2a3a88['author']['id'],'guild':_0x2a3a88['guild']['id']}),_0x3c6523=new Date(),_0x5e5c76=(_0x3abf76=>new Date(_0x3abf76['setDate'](_0x3abf76[_0x2eae0c(0xcb)]()-0x1)))(new Date()),_0x8c22fe=new Date(_0x275983[_0x2eae0c(0xd3)]);if(_0x3c6523[_0x2eae0c(0xe6)]()===_0x8c22fe[_0x2eae0c(0xe6)]())throw new Error(this[_0x2eae0c(0xe7)][_0x2eae0c(0xd2)][_0x2eae0c(0xc8)](_0x2a3a88[_0x2eae0c(0xc3)][_0x2eae0c(0xe2)][_0x2eae0c(0xd4)],'errors','alreadyClaimed',_0x2a3a88[_0x2eae0c(0xd7)][_0x2eae0c(0xc5)]));_0x275983[_0x2eae0c(0xd3)]=_0x3c6523[_0x2eae0c(0xdf)]();let _0x5a5637=numbers[_0x2eae0c(0xd0)](0x2a,0x80);_0x3c6523[_0x2eae0c(0xdf)]()-_0x2a3a88['member']['joinedTimestamp']<0xf731400&&(_0x5a5637/=0x2);_0x275983['claimStreak']=_0x5e5c76[_0x2eae0c(0xe6)]()===_0x8c22fe[_0x2eae0c(0xe6)]()?_0x275983[_0x2eae0c(0xd8)]+0x1:0x1;const _0x4b0a78=this[_0x2eae0c(0xe7)][_0x2eae0c(0xd2)][_0x2eae0c(0xc8)](_0x2a3a88[_0x2eae0c(0xc3)][_0x2eae0c(0xe2)][_0x2eae0c(0xd4)],_0x2eae0c(0xd9),this[_0x2eae0c(0xd5)](_0x275983['claimStreak']),0x7-_0x275983[_0x2eae0c(0xd8)]);_0x275983[_0x2eae0c(0xd8)]===0x7&&(_0x275983[_0x2eae0c(0xd8)]=0x0,_0x5a5637+=numbers[_0x2eae0c(0xd0)](0x200,0x400)),_0x2a3a88[_0x2eae0c(0xdc)][_0x2eae0c(0xc0)]&&(_0x5a5637*=0x2),await _0x2a3a88['member'][_0x2eae0c(0xe1)](_0x5a5637,_0x2eae0c(0xc9),_0x275983),await _0x275983['save'](),_0x2a3a88[_0x2eae0c(0xbe)][_0x2eae0c(0xc4)]({'embed':{'color':tesseract_1[_0x2eae0c(0xcc)][_0x2eae0c(0xe0)]['IRIS'],'description':this[_0x2eae0c(0xe7)][_0x2eae0c(0xd2)][_0x2eae0c(0xc8)](_0x2a3a88['guild'][_0x2eae0c(0xe2)]['language'],_0x2eae0c(0xd9),_0x2eae0c(0xdb),_0x2a3a88[_0x2eae0c(0xd7)][_0x2eae0c(0xc5)])+'\x0a\x0a'+_0x4b0a78,'footer':{'text':_0x2a3a88[_0x2eae0c(0xdc)][_0x2eae0c(0xc0)]?this['client']['locale'][_0x2eae0c(0xc8)](_0x2a3a88[_0x2eae0c(0xc3)][_0x2eae0c(0xe2)][_0x2eae0c(0xd4)],'info',_0x2eae0c(0xd1)):''}}})[_0x2eae0c(0xde)](()=>{});};}};