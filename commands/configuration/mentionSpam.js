const a27_0x4190=['apply','author','RED','Constants','mentionSpamInfractionsDisable','threshold','Command','GREEN','COLORS','exports','document','number','mentionSpam\x20--threshold\x20NUMBER','language','mentionSpam','channel','exec','mentionSpamInfractionsEnable','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','constructor','guild','getString'];(function(_0x48c62c,_0x507645){const _0x419035=function(_0x2bb33f){while(--_0x2bb33f){_0x48c62c['push'](_0x48c62c['shift']());}},_0x290c76=function(){const _0xe887f5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xf6fd07,_0x5c8983,_0x39c035,_0x1e1619){_0x1e1619=_0x1e1619||{};let _0xdde612=_0x5c8983+'='+_0x39c035,_0x1df27b=0x0;for(let _0x4b05f8=0x0,_0x2cac05=_0xf6fd07['length'];_0x4b05f8<_0x2cac05;_0x4b05f8++){const _0x25e7a2=_0xf6fd07[_0x4b05f8];_0xdde612+=';\x20'+_0x25e7a2;const _0x11ddce=_0xf6fd07[_0x25e7a2];_0xf6fd07['push'](_0x11ddce),_0x2cac05=_0xf6fd07['length'],_0x11ddce!==!![]&&(_0xdde612+='='+_0x11ddce);}_0x1e1619['cookie']=_0xdde612;},'removeCookie':function(){return'dev';},'getCookie':function(_0x24b556,_0x32d3c3){_0x24b556=_0x24b556||function(_0x38ec81){return _0x38ec81;};const _0x127148=_0x24b556(new RegExp('(?:^|;\x20)'+_0x32d3c3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x56d035=function(_0x2b17ac,_0x1ebb13){_0x2b17ac(++_0x1ebb13);};return _0x56d035(_0x419035,_0x507645),_0x127148?decodeURIComponent(_0x127148[0x1]):undefined;}},_0x161e2f=function(){const _0x497ad8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x497ad8['test'](_0xe887f5['removeCookie']['toString']());};_0xe887f5['updateCookie']=_0x161e2f;let _0x571d48='';const _0x81575c=_0xe887f5['updateCookie']();if(!_0x81575c)_0xe887f5['setCookie'](['*'],'counter',0x1);else _0x81575c?_0x571d48=_0xe887f5['getCookie'](null,'counter'):_0xe887f5['removeCookie']();};_0x290c76();}(a27_0x4190,0xfe));const a27_0x290c=function(_0x48c62c,_0x507645){_0x48c62c=_0x48c62c-0x84;let _0x419035=a27_0x4190[_0x48c62c];return _0x419035;};const a27_0xc1d46c=a27_0x290c,a27_0x161e2f=function(){let _0x81575c=!![];return function(_0xf6fd07,_0x5c8983){const _0x39c035=_0x81575c?function(){const _0x37222a=a27_0x290c;if(_0x5c8983){const _0x1e1619=_0x5c8983[_0x37222a(0x8e)](_0xf6fd07,arguments);return _0x5c8983=null,_0x1e1619;}}:function(){};return _0x81575c=![],_0x39c035;};}(),a27_0xe887f5=a27_0x161e2f(this,function(){const _0xdde612=function(){const _0x15d91b=a27_0x290c,_0x1df27b=_0xdde612[_0x15d91b(0x8b)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x15d91b(0x8b)](_0x15d91b(0x89));return!_0x1df27b['test'](a27_0xe887f5);};return _0xdde612();});a27_0xe887f5();'use strict';const tesseract_1=require('@bastion/tesseract');module[a27_0xc1d46c(0x97)]=class MentionSpamCommand extends tesseract_1[a27_0xc1d46c(0x94)]{constructor(){const _0x1d5c31=a27_0xc1d46c;super(_0x1d5c31(0x84),{'description':_0x1d5c31(0x8a),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[_0x1d5c31(0x93)]},'scope':_0x1d5c31(0x8c),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x1d5c31(0x88)],'syntax':[_0x1d5c31(0x84),_0x1d5c31(0x9a)]}),this[_0x1d5c31(0x86)]=async(_0x4b05f8,_0x2cac05)=>{const _0x31cb0d=_0x1d5c31,_0x25e7a2=_0x4b05f8[_0x31cb0d(0x8c)];_0x25e7a2[_0x31cb0d(0x98)][_0x31cb0d(0x84)]={..._0x25e7a2['document'][_0x31cb0d(0x84)],'threshold':typeof _0x2cac05['threshold']===_0x31cb0d(0x99)&&_0x2cac05[_0x31cb0d(0x93)]>0x1?_0x2cac05[_0x31cb0d(0x93)]:undefined},await _0x25e7a2[_0x31cb0d(0x98)]['save'](),await _0x4b05f8[_0x31cb0d(0x85)]['send']({'embed':{'color':_0x25e7a2[_0x31cb0d(0x98)][_0x31cb0d(0x84)]['threshold']?tesseract_1[_0x31cb0d(0x91)][_0x31cb0d(0x96)][_0x31cb0d(0x95)]:tesseract_1[_0x31cb0d(0x91)][_0x31cb0d(0x96)][_0x31cb0d(0x90)],'description':this['client']['locale'][_0x31cb0d(0x8d)](_0x4b05f8['guild']['document'][_0x31cb0d(0x9b)],'info',_0x25e7a2['document']['mentionSpam'][_0x31cb0d(0x93)]?_0x31cb0d(0x87):_0x31cb0d(0x92),_0x4b05f8[_0x31cb0d(0x8f)]['tag'],_0x25e7a2['document']['mentionSpam']['threshold'])}})['catch'](()=>{});};}};