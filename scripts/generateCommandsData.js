const a226_0x12f1=['defineProperty','__esModule','description','typing','name','./commands/','writeFileSync','resolve','owner','dirname','apply','stringify','unsafe','existsSync','constructor','filter','utf-8','relative','join','isDirectory','path','nsfw','return\x20/\x22\x20+\x20this\x20+\x20\x22/','userPermissions','cooldown','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','clientPermission','push','readdirSync','./assets/commands.json','scope','.js','schedulable','ratelimit','triggers'];(function(_0x179298,_0x5cd48f){const _0x12f1ca=function(_0x13ceea){while(--_0x13ceea){_0x179298['push'](_0x179298['shift']());}},_0x2dc25f=function(){const _0x3c1453={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4f2fc9,_0x302749,_0x2291a0,_0x364c90){_0x364c90=_0x364c90||{};let _0x5df29e=_0x302749+'='+_0x2291a0,_0x515a8a=0x0;for(let _0x2db576=0x0,_0x140ee3=_0x4f2fc9['length'];_0x2db576<_0x140ee3;_0x2db576++){const _0x5e3d82=_0x4f2fc9[_0x2db576];_0x5df29e+=';\x20'+_0x5e3d82;const _0x26ee52=_0x4f2fc9[_0x5e3d82];_0x4f2fc9['push'](_0x26ee52),_0x140ee3=_0x4f2fc9['length'],_0x26ee52!==!![]&&(_0x5df29e+='='+_0x26ee52);}_0x364c90['cookie']=_0x5df29e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x444b50,_0x41eaff){_0x444b50=_0x444b50||function(_0x142f7e){return _0x142f7e;};const _0x279f65=_0x444b50(new RegExp('(?:^|;\x20)'+_0x41eaff['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x37899b=function(_0x5c2121,_0x1cfaf5){_0x5c2121(++_0x1cfaf5);};return _0x37899b(_0x12f1ca,_0x5cd48f),_0x279f65?decodeURIComponent(_0x279f65[0x1]):undefined;}},_0x580458=function(){const _0x2a9024=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a9024['test'](_0x3c1453['removeCookie']['toString']());};_0x3c1453['updateCookie']=_0x580458;let _0x2bbb34='';const _0x33ae76=_0x3c1453['updateCookie']();if(!_0x33ae76)_0x3c1453['setCookie'](['*'],'counter',0x1);else _0x33ae76?_0x2bbb34=_0x3c1453['getCookie'](null,'counter'):_0x3c1453['removeCookie']();};_0x2dc25f();}(a226_0x12f1,0x140));const a226_0x2dc2=function(_0x179298,_0x5cd48f){_0x179298=_0x179298-0x84;let _0x12f1ca=a226_0x12f1[_0x179298];return _0x12f1ca;};const a226_0xd1d026=a226_0x2dc2,a226_0x580458=function(){let _0x33ae76=!![];return function(_0x4f2fc9,_0x302749){const _0x2291a0=_0x33ae76?function(){const _0x59c553=a226_0x2dc2;if(_0x302749){const _0x364c90=_0x302749[_0x59c553(0x89)](_0x4f2fc9,arguments);return _0x302749=null,_0x364c90;}}:function(){};return _0x33ae76=![],_0x2291a0;};}(),a226_0x3c1453=a226_0x580458(this,function(){const _0x5df29e=function(){const _0x324fb3=a226_0x2dc2,_0x515a8a=_0x5df29e[_0x324fb3(0x8d)](_0x324fb3(0x95))()[_0x324fb3(0x8d)](_0x324fb3(0x98));return!_0x515a8a['test'](a226_0x3c1453);};return _0x5df29e();});a226_0x3c1453();'use strict';Object[a226_0xd1d026(0xa2)](exports,a226_0xd1d026(0xa3),{'value':!![]});const fs=require('fs'),path=require(a226_0xd1d026(0x93)),yaml=require('yaml'),walkDirectory=_0x2db576=>{const _0x140ee3=[];return function _0x5e3d82(_0x26ee52){const _0x1b1861=a226_0x2dc2,_0x444b50=fs[_0x1b1861(0x9b)](_0x26ee52);for(const _0x41eaff of _0x444b50){const _0x279f65=path[_0x1b1861(0x91)](_0x26ee52,_0x41eaff);if(fs['statSync'](_0x279f65)[_0x1b1861(0x92)]())_0x5e3d82(_0x279f65);else _0x140ee3['push'](_0x279f65);}}(_0x2db576),_0x140ee3;},commandsDirectory=path[a226_0xd1d026(0x86)](a226_0xd1d026(0x84));if(fs[a226_0xd1d026(0x8c)](commandsDirectory)){const files=walkDirectory(commandsDirectory),commandStrings={},commands={};for(const file of files[a226_0xd1d026(0x8e)](_0x37899b=>_0x37899b['endsWith'](a226_0xd1d026(0x9e)))){const Command=require(file),command=new Command(),commandCategory=path[a226_0xd1d026(0x88)](path[a226_0xd1d026(0x90)](commandsDirectory,file));commandStrings[command[a226_0xd1d026(0xa6)]]=command[a226_0xd1d026(0xa4)],commandCategory in commands?commands[commandCategory][a226_0xd1d026(0x9a)]({'name':command[a226_0xd1d026(0xa6)],'description':command[a226_0xd1d026(0xa4)],'triggers':command[a226_0xd1d026(0xa1)],'scope':command[a226_0xd1d026(0x9d)],'owner':command[a226_0xd1d026(0x87)],'typing':command['typing'],'schedulable':command['schedulable'],'unsafe':command['unsafe'],'nsfw':command[a226_0xd1d026(0x94)],'cooldown':command[a226_0xd1d026(0x97)],'ratelimit':command[a226_0xd1d026(0xa0)],'clientPermission':command['clientPermission'],'userPermissions':command['userPermissions'],'syntax':command['syntax']}):commands[commandCategory]=[{'name':command[a226_0xd1d026(0xa6)],'description':command['description'],'triggers':command[a226_0xd1d026(0xa1)],'scope':command[a226_0xd1d026(0x9d)],'owner':command['owner'],'typing':command[a226_0xd1d026(0xa5)],'schedulable':command[a226_0xd1d026(0x9f)],'unsafe':command[a226_0xd1d026(0x8b)],'nsfw':command['nsfw'],'cooldown':command[a226_0xd1d026(0x97)],'ratelimit':command[a226_0xd1d026(0xa0)],'clientPermission':command[a226_0xd1d026(0x99)],'userPermissions':command[a226_0xd1d026(0x96)],'syntax':command['syntax']}];}fs[a226_0xd1d026(0x85)]('./locales/en_us/commands.yaml',yaml[a226_0xd1d026(0x8a)](commandStrings),{'encoding':a226_0xd1d026(0x8f)}),fs[a226_0xd1d026(0x85)](a226_0xd1d026(0x9c),JSON[a226_0xd1d026(0x8a)](commands),{'encoding':a226_0xd1d026(0x8f)});}