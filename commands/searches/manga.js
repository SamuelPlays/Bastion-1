const a143_0x4dc1=['Published','attributes','endDate','slug','data','../../utils/errors','original','makeRequest','guild','manga\x20TITLE','../../utils/omnic','titles','\x0a...','@bastion/tesseract','IRIS','Powered\x20by\x20Kitsu','test','length','exec','startDate','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Status','\x20-\x20Present','https://kitsu.io/manga/','channel','COLORS','BASTION_ERROR_TYPE','Publishing','apply','Constants','sanitize','NOT_FOUND','INVALID_COMMAND_SYNTAX','slice','DiscordError','values','exports','constructor','Finished','/kitsu/manga/'];(function(_0x4fd591,_0x4b3b1b){const _0x4dc10c=function(_0x5c8367){while(--_0x5c8367){_0x4fd591['push'](_0x4fd591['shift']());}},_0x2c421d=function(){const _0x59e46b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1593f7,_0x1ef71f,_0x35459a,_0x27beff){_0x27beff=_0x27beff||{};let _0xb08f6=_0x1ef71f+'='+_0x35459a,_0x4d03a9=0x0;for(let _0x567690=0x0,_0x4c08c6=_0x1593f7['length'];_0x567690<_0x4c08c6;_0x567690++){const _0xf30646=_0x1593f7[_0x567690];_0xb08f6+=';\x20'+_0xf30646;const _0x15c0e6=_0x1593f7[_0xf30646];_0x1593f7['push'](_0x15c0e6),_0x4c08c6=_0x1593f7['length'],_0x15c0e6!==!![]&&(_0xb08f6+='='+_0x15c0e6);}_0x27beff['cookie']=_0xb08f6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x547ce1,_0x4e3a02){_0x547ce1=_0x547ce1||function(_0x3d9e25){return _0x3d9e25;};const _0x35ed64=_0x547ce1(new RegExp('(?:^|;\x20)'+_0x4e3a02['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x206a28=function(_0x30e60c,_0x4beedb){_0x30e60c(++_0x4beedb);};return _0x206a28(_0x4dc10c,_0x4b3b1b),_0x35ed64?decodeURIComponent(_0x35ed64[0x1]):undefined;}},_0x231f9c=function(){const _0x381fd2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x381fd2['test'](_0x59e46b['removeCookie']['toString']());};_0x59e46b['updateCookie']=_0x231f9c;let _0x4df15a='';const _0x44972a=_0x59e46b['updateCookie']();if(!_0x44972a)_0x59e46b['setCookie'](['*'],'counter',0x1);else _0x44972a?_0x4df15a=_0x59e46b['getCookie'](null,'counter'):_0x59e46b['removeCookie']();};_0x2c421d();}(a143_0x4dc1,0x199));const a143_0x2c42=function(_0x4fd591,_0x4b3b1b){_0x4fd591=_0x4fd591-0xe9;let _0x4dc10c=a143_0x4dc1[_0x4fd591];return _0x4dc10c;};const a143_0x18252c=a143_0x2c42,a143_0x231f9c=function(){let _0x44972a=!![];return function(_0x1593f7,_0x1ef71f){const _0x35459a=_0x44972a?function(){const _0x39324d=a143_0x2c42;if(_0x1ef71f){const _0x27beff=_0x1ef71f[_0x39324d(0x107)](_0x1593f7,arguments);return _0x1ef71f=null,_0x27beff;}}:function(){};return _0x44972a=![],_0x35459a;};}(),a143_0x59e46b=a143_0x231f9c(this,function(){const _0xb08f6=function(){const _0x2abfb3=a143_0x2c42,_0x4d03a9=_0xb08f6[_0x2abfb3(0x110)](_0x2abfb3(0xff))()[_0x2abfb3(0x110)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4d03a9[_0x2abfb3(0xfa)](a143_0x59e46b);};return _0xb08f6();});a143_0x59e46b();'use strict';const tesseract_1=require(a143_0x18252c(0xf7)),errors=require(a143_0x18252c(0xef)),omnic=require(a143_0x18252c(0xf4));module[a143_0x18252c(0x10f)]=class MangaCommand extends tesseract_1['Command']{constructor(){const _0x42ac9b=a143_0x18252c;super('manga',{'description':'It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20manga.','triggers':[],'arguments':{},'scope':_0x42ac9b(0xf2),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x42ac9b(0xf3)]}),this['sanitize']=_0x567690=>{const _0x1192a7=_0x42ac9b;return _0x567690[_0x1192a7(0xfb)]>0x7d0?_0x567690[_0x1192a7(0x10c)](0x0,0x7d0)+_0x1192a7(0xf6):_0x567690;},this[_0x42ac9b(0xfc)]=async(_0x4c08c6,_0xf30646)=>{const _0x238488=_0x42ac9b;if(!_0xf30646['_'][_0x238488(0xfb)])throw new errors[(_0x238488(0x10d))](errors[_0x238488(0x105)][_0x238488(0x10b)],this[_0x238488(0xfe)]);const _0x15c0e6=_0xf30646['_']['join']('\x20'),_0x547ce1=await omnic[_0x238488(0xf1)](_0x238488(0xe9)+encodeURIComponent(_0x15c0e6)),_0x4e3a02=await _0x547ce1['json']();if(!_0x4e3a02||!_0x4e3a02[_0x238488(0xee)]||!_0x4e3a02[_0x238488(0xee)][_0x238488(0xfb)])throw new Error(_0x238488(0x10a));await _0x4c08c6[_0x238488(0x103)]['send']({'embed':{'color':tesseract_1[_0x238488(0x108)][_0x238488(0x104)][_0x238488(0xf8)],'author':{'name':'Manga'},'title':Object[_0x238488(0x10e)](_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)][_0x238488(0xf5)])[0x0],'url':_0x238488(0x102)+_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)][_0x238488(0xed)],'description':this[_0x238488(0x109)](_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)]['synopsis']),'fields':[{'name':_0x238488(0x100),'value':_0x4e3a02['data'][0x0]['attributes'][_0x238488(0xec)]?_0x238488(0x111):_0x238488(0x106),'inline':!![]},{'name':_0x238488(0xea),'value':_0x4e3a02['data'][0x0][_0x238488(0xeb)][_0x238488(0xec)]?_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)]['startDate']+'\x20-\x20'+_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)][_0x238488(0xec)]:_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)][_0x238488(0xfd)]+_0x238488(0x101),'inline':!![]}],'image':{'url':_0x4e3a02[_0x238488(0xee)][0x0][_0x238488(0xeb)]['posterImage'][_0x238488(0xf0)]},'footer':{'text':_0x238488(0xf9)}}});};}};