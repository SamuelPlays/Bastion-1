const a108_0xee53=['user','channel','DiscordError','Reason','unban\x20--user\x20USER_ID\x20--\x20REASON','Constants','apply','COLORS','../../utils/errors','resolver','tag','@bastion/tesseract','INVALID_COMMAND_SYNTAX','client','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','BAN_MEMBERS','guild','members','language','send','author','guildBanRemove','info','ORANGE','join','Command','locale','unban','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','BASTION_ERROR_TYPE','resolveUser','name'];(function(_0x9d614c,_0xd2631d){const _0xee53d6=function(_0x3eb0d5){while(--_0x3eb0d5){_0x9d614c['push'](_0x9d614c['shift']());}},_0x31d9c8=function(){const _0x324ec4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x283603,_0x1c7895,_0x1550ee,_0x220490){_0x220490=_0x220490||{};let _0x3a2890=_0x1c7895+'='+_0x1550ee,_0x572c96=0x0;for(let _0x1c862a=0x0,_0x4638d4=_0x283603['length'];_0x1c862a<_0x4638d4;_0x1c862a++){const _0x39a641=_0x283603[_0x1c862a];_0x3a2890+=';\x20'+_0x39a641;const _0x3603cc=_0x283603[_0x39a641];_0x283603['push'](_0x3603cc),_0x4638d4=_0x283603['length'],_0x3603cc!==!![]&&(_0x3a2890+='='+_0x3603cc);}_0x220490['cookie']=_0x3a2890;},'removeCookie':function(){return'dev';},'getCookie':function(_0x32305f,_0x109518){_0x32305f=_0x32305f||function(_0xdead8){return _0xdead8;};const _0x7d0433=_0x32305f(new RegExp('(?:^|;\x20)'+_0x109518['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x58aaaa=function(_0x350dc9,_0x6fb650){_0x350dc9(++_0x6fb650);};return _0x58aaaa(_0xee53d6,_0xd2631d),_0x7d0433?decodeURIComponent(_0x7d0433[0x1]):undefined;}},_0x230653=function(){const _0x355d11=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x355d11['test'](_0x324ec4['removeCookie']['toString']());};_0x324ec4['updateCookie']=_0x230653;let _0x2e3d8f='';const _0x34a394=_0x324ec4['updateCookie']();if(!_0x34a394)_0x324ec4['setCookie'](['*'],'counter',0x1);else _0x34a394?_0x2e3d8f=_0x324ec4['getCookie'](null,'counter'):_0x324ec4['removeCookie']();};_0x31d9c8();}(a108_0xee53,0xe3));const a108_0x31d9=function(_0x9d614c,_0xd2631d){_0x9d614c=_0x9d614c-0x1a7;let _0xee53d6=a108_0xee53[_0x9d614c];return _0xee53d6;};const a108_0x4f69b3=a108_0x31d9,a108_0x230653=function(){let _0x34a394=!![];return function(_0x283603,_0x1c7895){const _0x1550ee=_0x34a394?function(){const _0x572e46=a108_0x31d9;if(_0x1c7895){const _0x220490=_0x1c7895[_0x572e46(0x1b1)](_0x283603,arguments);return _0x1c7895=null,_0x220490;}}:function(){};return _0x34a394=![],_0x1550ee;};}(),a108_0x324ec4=a108_0x230653(this,function(){const _0x3a2890=function(){const _0x2b4bfc=a108_0x31d9,_0x572c96=_0x3a2890[_0x2b4bfc(0x1ba)](_0x2b4bfc(0x1b9))()[_0x2b4bfc(0x1ba)](_0x2b4bfc(0x1a7));return!_0x572c96['test'](a108_0x324ec4);};return _0x3a2890();});a108_0x324ec4();'use strict';const tesseract_1=require(a108_0x4f69b3(0x1b6)),errors=require(a108_0x4f69b3(0x1b3));module['exports']=class Unban extends tesseract_1[a108_0x4f69b3(0x1c5)]{constructor(){const _0x5d5f26=a108_0x4f69b3;super(_0x5d5f26(0x1c7),{'description':'It\x20allows\x20you\x20to\x20unban\x20the\x20users\x20who\x27re\x20banned\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'user':'u'},'string':[_0x5d5f26(0x1ab)]},'scope':_0x5d5f26(0x1bc),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['BAN_MEMBERS'],'userPermissions':[_0x5d5f26(0x1bb)],'syntax':[_0x5d5f26(0x1af)]}),this['exec']=async(_0x1c862a,_0x4638d4)=>{const _0x45bab2=_0x5d5f26,_0x39a641=this[_0x45bab2(0x1b8)][_0x45bab2(0x1b4)][_0x45bab2(0x1a9)](_0x4638d4['user']);if(!_0x39a641)throw new errors[(_0x45bab2(0x1ad))](errors[_0x45bab2(0x1a8)][_0x45bab2(0x1b7)],this[_0x45bab2(0x1aa)]);const _0x3603cc=_0x4638d4['_'][_0x45bab2(0x1c4)]('\x20')||'-';await _0x1c862a[_0x45bab2(0x1bc)][_0x45bab2(0x1bd)][_0x45bab2(0x1c7)](_0x39a641,_0x3603cc),await _0x1c862a[_0x45bab2(0x1ac)][_0x45bab2(0x1bf)]({'embed':{'color':tesseract_1[_0x45bab2(0x1b0)][_0x45bab2(0x1b2)][_0x45bab2(0x1c3)],'description':this['client'][_0x45bab2(0x1c6)]['getString'](_0x1c862a[_0x45bab2(0x1bc)]['document'][_0x45bab2(0x1be)],_0x45bab2(0x1c2),_0x45bab2(0x1c1),_0x1c862a[_0x45bab2(0x1c0)][_0x45bab2(0x1b5)],_0x39a641['tag']),'fields':[{'name':_0x45bab2(0x1ae),'value':_0x3603cc}],'footer':{'text':_0x39a641['id']}}})['catch'](()=>{});};}};