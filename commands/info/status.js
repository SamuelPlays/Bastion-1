const a498_0x2a07=['status','Environment','../../utils/badges','Shard\x20','IRIS','platform','name','\x20/\x20','count','It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.','\x20•\x20','join','Bot\x20Owners','color','locale','Memory\x20Usage','Connected\x20via\x20Starlink.','ping','memberCount','../../utils/constants','user','apply','../../utils/durations','guild','toString','process.memoryUsage().rss','bastion.website','reduce','humanize','env','cache','configurations','Bastion\x20v','map','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../package.json','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','Shards','shard','isPublicBastion','memoryUsage','test','now','@bastion/tesseract','guilds','this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)','credentials','this.guilds.cache.size','\x20on\x20','compile','COLORS','version','broadcastEval','getConstant','Constants','Command','\x20Servers\x0a','Node\x20','constructor','Default\x20Prefixes','concat','/status','getMembership','author.username','BASTION_BOOT_TIME','json','arch','parseInt','Presence','badgeValue','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','client','ids','Uptime'];(function(_0x54c18d,_0x2a07b6){const _0x4bc81c=function(_0x5a4fce){while(--_0x5a4fce){_0x54c18d['push'](_0x54c18d['shift']());}};const _0x4d11b4=function(){const _0x47d62a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xb5e62,_0x19103b,_0x1aa5c2,_0x2d3d93){_0x2d3d93=_0x2d3d93||{};let _0x3ab15d=_0x19103b+'='+_0x1aa5c2;let _0x34a1e0=0x0;for(let _0x2f7ef5=0x0,_0x244698=_0xb5e62['length'];_0x2f7ef5<_0x244698;_0x2f7ef5++){const _0x280dba=_0xb5e62[_0x2f7ef5];_0x3ab15d+=';\x20'+_0x280dba;const _0x563840=_0xb5e62[_0x280dba];_0xb5e62['push'](_0x563840);_0x244698=_0xb5e62['length'];if(_0x563840!==!![]){_0x3ab15d+='='+_0x563840;}}_0x2d3d93['cookie']=_0x3ab15d;},'removeCookie':function(){return'dev';},'getCookie':function(_0xc1c16b,_0x220c0a){_0xc1c16b=_0xc1c16b||function(_0x4af60e){return _0x4af60e;};const _0x288203=_0xc1c16b(new RegExp('(?:^|;\x20)'+_0x220c0a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4d505d=function(_0x2f05b1,_0x1386d2){_0x2f05b1(++_0x1386d2);};_0x4d505d(_0x4bc81c,_0x2a07b6);return _0x288203?decodeURIComponent(_0x288203[0x1]):undefined;}};const _0x2f7fef=function(){const _0x213d0e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x213d0e['test'](_0x47d62a['removeCookie']['toString']());};_0x47d62a['updateCookie']=_0x2f7fef;let _0x40b08d='';const _0x4dc5fa=_0x47d62a['updateCookie']();if(!_0x4dc5fa){_0x47d62a['setCookie'](['*'],'counter',0x1);}else if(_0x4dc5fa){_0x40b08d=_0x47d62a['getCookie'](null,'counter');}else{_0x47d62a['removeCookie']();}};_0x4d11b4();}(a498_0x2a07,0x1c8));const a498_0x4bc8=function(_0x54c18d,_0x2a07b6){_0x54c18d=_0x54c18d-0x0;let _0x4bc81c=a498_0x2a07[_0x54c18d];return _0x4bc81c;};const a498_0x47d62a=function(){let _0x1f6cb7=!![];return function(_0x21881a,_0x8d74fa){const _0x3efcd2=_0x1f6cb7?function(){if(_0x8d74fa){const _0xa0b523=_0x8d74fa[a498_0x4bc8('0xf')](_0x21881a,arguments);_0x8d74fa=null;return _0xa0b523;}}:function(){};_0x1f6cb7=![];return _0x3efcd2;};}();const a498_0x5a4fce=a498_0x47d62a(this,function(){const _0x1457de=function(){const _0x34c8b5=_0x1457de[a498_0x4bc8('0x34')](a498_0x4bc8('0x1c'))()[a498_0x4bc8('0x2b')](a498_0x4bc8('0x40'));return!_0x34c8b5[a498_0x4bc8('0x23')](a498_0x5a4fce);};return _0x1457de();});a498_0x5a4fce();'use strict';const tesseract_1=require(a498_0x4bc8('0x25'));const constants=require(a498_0x4bc8('0xd'));const duration=require(a498_0x4bc8('0x10'));const badges=require(a498_0x4bc8('0x47'));const package_json_1=require(a498_0x4bc8('0x1d'));module['exports']=class StatusCommand extends tesseract_1[a498_0x4bc8('0x31')]{constructor(){super(a498_0x4bc8('0x45'),{'description':a498_0x4bc8('0x3'),'triggers':['stats','info'],'arguments':{'boolean':[a498_0x4bc8('0x20')]},'scope':a498_0x4bc8('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a498_0x4bc8('0x45'),'status\x20--shard']});this['exec']=async(_0x39f5ab,_0x35f8ba)=>{const _0x16a1ee=constants[a498_0x4bc8('0x21')](this[a498_0x4bc8('0x42')][a498_0x4bc8('0xe')])&&await badges['fetchBadges'](_0x39f5ab[a498_0x4bc8('0x11')]['ownerID'],_0x39f5ab[a498_0x4bc8('0x11')]['id'])['then'](_0x4fd715=>_0x4fd715[a498_0x4bc8('0x3b')]())['catch'](()=>{});const _0x247623=badges[a498_0x4bc8('0x38')](_0x16a1ee?_0x16a1ee[a498_0x4bc8('0x3f')]:0x0);const _0x49bd06=await this['client'][a498_0x4bc8('0x20')][a498_0x4bc8('0x2e')](a498_0x4bc8('0x29'));const _0x59b94e=_0x35f8ba['shard']?this['client'][a498_0x4bc8('0x26')][a498_0x4bc8('0x18')]['size']:_0x49bd06[a498_0x4bc8('0x15')]((_0x329e78,_0x343857)=>_0x329e78+_0x343857,0x0);const _0xfdfb4f=_0x35f8ba[a498_0x4bc8('0x20')]?this['client'][a498_0x4bc8('0x26')][a498_0x4bc8('0x18')][a498_0x4bc8('0x1b')](_0x48e0c3=>_0x48e0c3[a498_0x4bc8('0xc')]):await this['client'][a498_0x4bc8('0x20')][a498_0x4bc8('0x2e')](a498_0x4bc8('0x27'));const _0x5a247e=_0xfdfb4f[a498_0x4bc8('0x15')]((_0x1d5d73,_0x44a37b)=>_0x1d5d73+_0x44a37b,0x0);const _0x7a4be3=await this[a498_0x4bc8('0x42')]['shard']['broadcastEval'](a498_0x4bc8('0x13'));const _0xe9565f=_0x35f8ba[a498_0x4bc8('0x20')]?process[a498_0x4bc8('0x22')]()['rss']:_0x7a4be3[a498_0x4bc8('0x15')]((_0x21b08d,_0x33eda8)=>_0x21b08d+_0x33eda8,0x0);const _0x46c028=[{'name':'Developer','value':'['+this[a498_0x4bc8('0x42')][a498_0x4bc8('0x8')][a498_0x4bc8('0x2f')](a498_0x4bc8('0x39'))+']('+this[a498_0x4bc8('0x42')][a498_0x4bc8('0x8')][a498_0x4bc8('0x2f')]('author.url')+')','inline':!![]},{'name':'Bot\x20ID','value':this[a498_0x4bc8('0x42')][a498_0x4bc8('0xe')]['id'],'inline':!![]},{'name':a498_0x4bc8('0x6'),'value':this[a498_0x4bc8('0x42')][a498_0x4bc8('0x28')]['owners']['join']('\x0a')||'-','inline':!![]},{'name':a498_0x4bc8('0x35'),'value':this[a498_0x4bc8('0x42')][a498_0x4bc8('0x19')]['prefixes'][a498_0x4bc8('0x5')]('\x20'),'inline':!![]},{'name':a498_0x4bc8('0x1f'),'value':this[a498_0x4bc8('0x42')][a498_0x4bc8('0x20')][a498_0x4bc8('0x2')][a498_0x4bc8('0x12')](),'inline':!![]}];const _0xe8c294=[{'name':a498_0x4bc8('0x3e'),'value':_0x59b94e+a498_0x4bc8('0x32')+_0x5a247e+'\x20Users','inline':!![]},{'name':a498_0x4bc8('0x44'),'value':duration[a498_0x4bc8('0x16')](duration['between'](Date[a498_0x4bc8('0x24')](),Number[a498_0x4bc8('0x3d')](process[a498_0x4bc8('0x17')][a498_0x4bc8('0x3a')]))),'inline':!![]},{'name':a498_0x4bc8('0x9'),'value':(_0xe9565f/0x400/0x400)['toFixed'](0x2)+'MB','inline':!![]},{'name':a498_0x4bc8('0x46'),'value':a498_0x4bc8('0x33')+process[a498_0x4bc8('0x2d')]+a498_0x4bc8('0x2a')+process[a498_0x4bc8('0x4a')]+'\x20'+process[a498_0x4bc8('0x3c')]+'.\x20'+(constants[a498_0x4bc8('0x21')](this[a498_0x4bc8('0x42')]['user'])?a498_0x4bc8('0xa'):''),'inline':!![]}];await _0x39f5ab['channel']['send']({'embed':{'color':_0x247623?_0x247623[a498_0x4bc8('0x7')]:tesseract_1[a498_0x4bc8('0x30')][a498_0x4bc8('0x2c')][a498_0x4bc8('0x49')],'author':{'name':a498_0x4bc8('0x1a')+package_json_1[a498_0x4bc8('0x2d')],'url':this[a498_0x4bc8('0x42')]['locale'][a498_0x4bc8('0x2f')](a498_0x4bc8('0x14'))},'title':(_0x35f8ba['shard']?'Shard\x20'+this[a498_0x4bc8('0x42')][a498_0x4bc8('0x20')][a498_0x4bc8('0x43')]['join'](a498_0x4bc8('0x1')):'')+'\x20Status','description':_0x247623?_0x247623['emoji']+'\x20'+_0x247623[a498_0x4bc8('0x0')]:a498_0x4bc8('0x1e')+this[a498_0x4bc8('0x42')][a498_0x4bc8('0x8')]['getConstant']('bastion.website')+'/premium)','url':this['client'][a498_0x4bc8('0x8')][a498_0x4bc8('0x2f')](a498_0x4bc8('0x14'))+a498_0x4bc8('0x37'),'thumbnail':{'url':this[a498_0x4bc8('0x42')]['user']['displayAvatarURL']({'dynamic':!![],'size':0x200})},'fields':_0x35f8ba['shard']?_0xe8c294:_0x46c028[a498_0x4bc8('0x36')](_0xe8c294),'footer':{'text':(_0x35f8ba[a498_0x4bc8('0x20')]?'':a498_0x4bc8('0x48')+this['client'][a498_0x4bc8('0x20')]['ids'][a498_0x4bc8('0x5')](a498_0x4bc8('0x1'))+a498_0x4bc8('0x4'))+this['client']['ws'][a498_0x4bc8('0xb')]+'ms'},'timestamp':new Date()}})[a498_0x4bc8('0x41')](()=>{});};}};