const a66_0x3bd1=['mentions','ERROR','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','SOMEWHAT_DARK','Board','Constants','members','bot','edit','fields','INDIGO','checkWinner','length','size','COLORS','playerOne','message','one','Tic\x20Tac\x20Toe','five','test','guild','member','seven','eight','name','displayName','getState','moves','ticTacToe\x20@USER','two','**\x20won\x20against\x20**','exports','board','four','BASTION_ERROR_TYPE','apply','Players\x20can\x20type\x20the\x20position\x20number\x20to\x20make\x20their\x20moves.','You\x20have\x2015\x20seconds\x20to\x20make\x20each\x20move.','nine','content','Game\x20Ended','catch','collectMove','fill','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','🇽\x20Player\x20One','**.','../../utils/errors','playerTwo','getPositionString','delete','parseInt','DiscordError','awaitMessages','\x20didn\x27t\x20make\x20a\x20move.\x20Game\x20terminated.','games','constructor','set','embeds','first','The\x20game\x20ended\x20in\x20a\x20tie\x20between\x20**','🇴\x20Player\x20Two','three','A\x20game\x20is\x20already\x20running\x20in\x20this\x20channel.\x20Wait\x20for\x20it\x20to\x20end\x20before\x20starting\x20another.','channel'];(function(_0x141399,_0xfbde2){const _0x3bd1b0=function(_0x2c2578){while(--_0x2c2578){_0x141399['push'](_0x141399['shift']());}},_0x43c527=function(){const _0x29c1af={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x6eb85b,_0x4b2448,_0x112943,_0x278251){_0x278251=_0x278251||{};let _0x534c3a=_0x4b2448+'='+_0x112943,_0x284b1d=0x0;for(let _0x2fd4db=0x0,_0x2e6e23=_0x6eb85b['length'];_0x2fd4db<_0x2e6e23;_0x2fd4db++){const _0x21a5e2=_0x6eb85b[_0x2fd4db];_0x534c3a+=';\x20'+_0x21a5e2;const _0x311a2f=_0x6eb85b[_0x21a5e2];_0x6eb85b['push'](_0x311a2f),_0x2e6e23=_0x6eb85b['length'],_0x311a2f!==!![]&&(_0x534c3a+='='+_0x311a2f);}_0x278251['cookie']=_0x534c3a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x12139b,_0x4631f3){_0x12139b=_0x12139b||function(_0x30a95b){return _0x30a95b;};const _0x5a8fff=_0x12139b(new RegExp('(?:^|;\x20)'+_0x4631f3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x474531=function(_0x4aaa97,_0x42583f){_0x4aaa97(++_0x42583f);};return _0x474531(_0x3bd1b0,_0xfbde2),_0x5a8fff?decodeURIComponent(_0x5a8fff[0x1]):undefined;}},_0x52adea=function(){const _0xd8bb7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xd8bb7['test'](_0x29c1af['removeCookie']['toString']());};_0x29c1af['updateCookie']=_0x52adea;let _0x4a35af='';const _0x2a4154=_0x29c1af['updateCookie']();if(!_0x2a4154)_0x29c1af['setCookie'](['*'],'counter',0x1);else _0x2a4154?_0x4a35af=_0x29c1af['getCookie'](null,'counter'):_0x29c1af['removeCookie']();};_0x43c527();}(a66_0x3bd1,0x1b1));const a66_0x43c5=function(_0x141399,_0xfbde2){_0x141399=_0x141399-0x17b;let _0x3bd1b0=a66_0x3bd1[_0x141399];return _0x3bd1b0;};const a66_0x9f36ef=a66_0x43c5,a66_0x52adea=function(){let _0x2a4154=!![];return function(_0x6eb85b,_0x4b2448){const _0x112943=_0x2a4154?function(){const _0x4a2203=a66_0x43c5;if(_0x4b2448){const _0x278251=_0x4b2448[_0x4a2203(0x181)](_0x6eb85b,arguments);return _0x4b2448=null,_0x278251;}}:function(){};return _0x2a4154=![],_0x112943;};}(),a66_0x29c1af=a66_0x52adea(this,function(){const _0x534c3a=function(){const _0x51e624=a66_0x43c5,_0x284b1d=_0x534c3a[_0x51e624(0x196)](_0x51e624(0x1a1))()['constructor'](_0x51e624(0x18a));return!_0x284b1d[_0x51e624(0x1b4)](a66_0x29c1af);};return _0x534c3a();});a66_0x29c1af();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a66_0x9f36ef(0x18d));module[a66_0x9f36ef(0x17d)]=class TicTacToeCommand extends tesseract_1['Command']{constructor(){const _0x2d4448=a66_0x9f36ef;super('ticTacToe',{'description':'It\x20allows\x20you\x20to\x20play\x20a\x20game\x20of\x20Tic\x20Tac\x20Toe\x20with\x20another\x20member\x20of\x20the\x20server.','triggers':['ttt'],'arguments':{},'scope':_0x2d4448(0x1b5),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x2d4448(0x1bd)]}),this[_0x2d4448(0x18f)]=_0x2fd4db=>{const _0x561129=_0x2d4448;if(_0x2fd4db===0x0)return _0x561129(0x1b1);if(_0x2fd4db===0x1)return _0x561129(0x17b);if(_0x2fd4db===0x2)return _0x561129(0x19c);if(_0x2fd4db===0x3)return _0x561129(0x17f);if(_0x2fd4db===0x4)return _0x561129(0x1b3);if(_0x2fd4db===0x5)return'six';if(_0x2fd4db===0x6)return _0x561129(0x1b7);if(_0x2fd4db===0x7)return _0x561129(0x1b8);if(_0x2fd4db===0x8)return _0x561129(0x184);},this['getState']=(_0x2e6e23,_0x21a5e2)=>{const _0x53f423=_0x2d4448;if(_0x2e6e23[_0x21a5e2]===-0x1)return':'+this[_0x53f423(0x18f)](_0x21a5e2)+':';if(_0x2e6e23[_0x21a5e2]===0x0)return'🇴';if(_0x2e6e23[_0x21a5e2]===0x1)return'🇽';},this['checkWinner']=_0x311a2f=>{if(_0x311a2f[0x0]!==-0x1&&_0x311a2f[0x1]===_0x311a2f[0x0]&&_0x311a2f[0x2]===_0x311a2f[0x0])return _0x311a2f[0x0];if(_0x311a2f[0x3]!==-0x1&&_0x311a2f[0x4]===_0x311a2f[0x3]&&_0x311a2f[0x5]===_0x311a2f[0x3])return _0x311a2f[0x3];if(_0x311a2f[0x6]!==-0x1&&_0x311a2f[0x7]===_0x311a2f[0x6]&&_0x311a2f[0x8]===_0x311a2f[0x6])return _0x311a2f[0x6];if(_0x311a2f[0x0]!==-0x1&&_0x311a2f[0x3]===_0x311a2f[0x0]&&_0x311a2f[0x6]===_0x311a2f[0x0])return _0x311a2f[0x0];if(_0x311a2f[0x1]!==-0x1&&_0x311a2f[0x4]===_0x311a2f[0x1]&&_0x311a2f[0x7]===_0x311a2f[0x1])return _0x311a2f[0x1];if(_0x311a2f[0x2]!==-0x1&&_0x311a2f[0x5]===_0x311a2f[0x2]&&_0x311a2f[0x8]===_0x311a2f[0x2])return _0x311a2f[0x2];if(_0x311a2f[0x0]!==-0x1&&_0x311a2f[0x4]===_0x311a2f[0x0]&&_0x311a2f[0x8]===_0x311a2f[0x0])return _0x311a2f[0x0];if(_0x311a2f[0x2]!==-0x1&&_0x311a2f[0x4]===_0x311a2f[0x2]&&_0x311a2f[0x6]===_0x311a2f[0x2])return _0x311a2f[0x2];return null;},this['collectMove']=async _0x12139b=>{const _0x3f0782=_0x2d4448,_0x4631f3=this[_0x3f0782(0x195)]['get'](_0x12139b),_0x5a8fff=await _0x4631f3['message']['channel'][_0x3f0782(0x193)](_0x474531=>!_0x474531['author'][_0x3f0782(0x1a7)]&&_0x474531[_0x3f0782(0x185)][_0x3f0782(0x1ac)]===0x1&&Number[_0x3f0782(0x191)](_0x474531[_0x3f0782(0x185)])>0x0&&Number['parseInt'](_0x474531[_0x3f0782(0x185)])<0xa&&_0x4631f3[_0x3f0782(0x17e)][Number[_0x3f0782(0x191)](_0x474531[_0x3f0782(0x185)])-0x1]===-0x1&&(_0x4631f3['moves']%0x2===0x0?_0x474531[_0x3f0782(0x1b6)]['id']===_0x4631f3['playerOne']['id']:_0x474531['member']['id']===_0x4631f3['playerTwo']['id']),{'time':0x3a98,'max':0x1});if(_0x5a8fff[_0x3f0782(0x1ad)]!==0x1){this['games'][_0x3f0782(0x190)](_0x12139b);throw new Error((_0x4631f3[_0x3f0782(0x1bc)]%0x2===0x0?_0x4631f3[_0x3f0782(0x1af)]:_0x4631f3[_0x3f0782(0x18e)])['displayName']+_0x3f0782(0x194));}_0x4631f3[_0x3f0782(0x17e)][Number['parseInt'](_0x5a8fff['first']()['content'])-0x1]=_0x4631f3['moves']%0x2===0x0?0x1:0x0,_0x4631f3[_0x3f0782(0x1bc)]+=0x1,this[_0x3f0782(0x195)][_0x3f0782(0x197)](_0x12139b,_0x4631f3),await _0x4631f3[_0x3f0782(0x1b0)][_0x3f0782(0x1a8)]({'embed':{..._0x4631f3[_0x3f0782(0x1b0)][_0x3f0782(0x198)][0x0],'fields':[_0x4631f3[_0x3f0782(0x1b0)][_0x3f0782(0x198)][0x0][_0x3f0782(0x1a9)][0x0],_0x4631f3['message'][_0x3f0782(0x198)][0x0][_0x3f0782(0x1a9)][0x1],{'name':_0x3f0782(0x1a4),'value':this[_0x3f0782(0x1bb)](_0x4631f3['board'],0x0)+'\u2003'+this[_0x3f0782(0x1bb)](_0x4631f3[_0x3f0782(0x17e)],0x1)+'\u2003'+this['getState'](_0x4631f3[_0x3f0782(0x17e)],0x2)+'\x0a\x0a'+this[_0x3f0782(0x1bb)](_0x4631f3[_0x3f0782(0x17e)],0x3)+'\u2003'+this[_0x3f0782(0x1bb)](_0x4631f3[_0x3f0782(0x17e)],0x4)+'\u2003'+this[_0x3f0782(0x1bb)](_0x4631f3[_0x3f0782(0x17e)],0x5)+'\x0a\x0a'+this[_0x3f0782(0x1bb)](_0x4631f3['board'],0x6)+'\u2003'+this['getState'](_0x4631f3[_0x3f0782(0x17e)],0x7)+'\u2003'+this[_0x3f0782(0x1bb)](_0x4631f3[_0x3f0782(0x17e)],0x8)}]}});},this['exec']=async _0x30a95b=>{const _0xe8a4b5=_0x2d4448;if(!_0x30a95b[_0xe8a4b5(0x19f)][_0xe8a4b5(0x1a6)]['size'])throw new errors[(_0xe8a4b5(0x192))](errors[_0xe8a4b5(0x180)]['INVALID_COMMAND_SYNTAX'],this[_0xe8a4b5(0x1b9)]);if(this[_0xe8a4b5(0x195)]['has'](_0x30a95b['channel']['id']))throw new errors[(_0xe8a4b5(0x192))](errors[_0xe8a4b5(0x180)][_0xe8a4b5(0x1a0)],_0xe8a4b5(0x19d));const _0x4aaa97=await _0x30a95b['channel'][_0xe8a4b5(0x1a2)]({'embed':{'color':tesseract_1[_0xe8a4b5(0x1a5)][_0xe8a4b5(0x1ae)][_0xe8a4b5(0x1aa)],'title':_0xe8a4b5(0x1b2),'description':_0xe8a4b5(0x182),'fields':[{'name':_0xe8a4b5(0x18b),'value':_0x30a95b[_0xe8a4b5(0x1b6)][_0xe8a4b5(0x1ba)],'inline':!![]},{'name':_0xe8a4b5(0x19b),'value':_0x30a95b[_0xe8a4b5(0x19f)][_0xe8a4b5(0x1a6)][_0xe8a4b5(0x199)]()[_0xe8a4b5(0x1ba)],'inline':!![]},{'name':'Board','value':':one:\u2003:two:\u2003:three:\x0a\x0a:four:\u2003:five:\u2003:six:\x0a\x0a:seven:\u2003:eight:\u2003:nine:'}],'footer':{'text':_0xe8a4b5(0x183)}}});this[_0xe8a4b5(0x195)][_0xe8a4b5(0x197)](_0x30a95b[_0xe8a4b5(0x19e)]['id'],{'playerOne':_0x30a95b[_0xe8a4b5(0x1b6)],'playerTwo':_0x30a95b[_0xe8a4b5(0x19f)][_0xe8a4b5(0x1a6)][_0xe8a4b5(0x199)](),'message':_0x4aaa97,'board':new Array(0x9)[_0xe8a4b5(0x189)](-0x1),'moves':0x0});while(!![]){await this[_0xe8a4b5(0x188)](_0x30a95b[_0xe8a4b5(0x19e)]['id']);const _0x42583f=this[_0xe8a4b5(0x195)]['get'](_0x30a95b[_0xe8a4b5(0x19e)]['id']);if(!_0x42583f)break;const _0xd8bb7=this[_0xe8a4b5(0x1ab)](_0x42583f[_0xe8a4b5(0x17e)]);if(typeof _0xd8bb7==='number'){this[_0xe8a4b5(0x195)][_0xe8a4b5(0x190)](_0x30a95b['channel']['id']),_0x30a95b[_0xe8a4b5(0x19e)][_0xe8a4b5(0x1a2)]({'embed':{'color':tesseract_1[_0xe8a4b5(0x1a5)][_0xe8a4b5(0x1ae)][_0xe8a4b5(0x1a3)],'author':{'name':_0xe8a4b5(0x1b2)},'title':_0xe8a4b5(0x186),'description':'**'+(_0xd8bb7?_0x42583f['playerOne']:_0x42583f[_0xe8a4b5(0x18e)])[_0xe8a4b5(0x1ba)]+_0xe8a4b5(0x17c)+(_0xd8bb7?_0x42583f[_0xe8a4b5(0x18e)]:_0x42583f[_0xe8a4b5(0x1af)])[_0xe8a4b5(0x1ba)]+_0xe8a4b5(0x18c)}})[_0xe8a4b5(0x187)](()=>{});break;}if(_0x42583f[_0xe8a4b5(0x1bc)]===0x9){this[_0xe8a4b5(0x195)][_0xe8a4b5(0x190)](_0x30a95b[_0xe8a4b5(0x19e)]['id']),_0x30a95b['channel']['send']({'embed':{'color':tesseract_1[_0xe8a4b5(0x1a5)][_0xe8a4b5(0x1ae)][_0xe8a4b5(0x1a3)],'author':{'name':_0xe8a4b5(0x1b2)},'title':_0xe8a4b5(0x186),'description':_0xe8a4b5(0x19a)+_0x42583f[_0xe8a4b5(0x1af)][_0xe8a4b5(0x1ba)]+'**\x20and\x20**'+_0x42583f[_0xe8a4b5(0x18e)][_0xe8a4b5(0x1ba)]+_0xe8a4b5(0x18c)}})[_0xe8a4b5(0x187)](()=>{});break;}}},this[_0x2d4448(0x195)]=new Map();}};