const a204_0x17ea=['client','exports','BASTION_SHARDS_READY','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Listener','LISTENER_MODE','count','\x20-\x20Ready','constructor','Constants','env','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Logger','shardReady','test','apply','shard','process.env.BASTION_SHARDS_READY\x20=\x20true','exec'];(function(_0x26c9c2,_0xf39819){const _0x17eaba=function(_0x324f72){while(--_0x324f72){_0x26c9c2['push'](_0x26c9c2['shift']());}},_0x294dc8=function(){const _0x13c5a3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3d2ddb,_0x5a7a9,_0x4a7197,_0x1f16a3){_0x1f16a3=_0x1f16a3||{};let _0x315fdb=_0x5a7a9+'='+_0x4a7197,_0x48bce8=0x0;for(let _0x886640=0x0,_0x408f80=_0x3d2ddb['length'];_0x886640<_0x408f80;_0x886640++){const _0x12aa54=_0x3d2ddb[_0x886640];_0x315fdb+=';\x20'+_0x12aa54;const _0x13155f=_0x3d2ddb[_0x12aa54];_0x3d2ddb['push'](_0x13155f),_0x408f80=_0x3d2ddb['length'],_0x13155f!==!![]&&(_0x315fdb+='='+_0x13155f);}_0x1f16a3['cookie']=_0x315fdb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5799cf,_0x1c0892){_0x5799cf=_0x5799cf||function(_0x17989b){return _0x17989b;};const _0x43de1b=_0x5799cf(new RegExp('(?:^|;\x20)'+_0x1c0892['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3e7298=function(_0x4534fa,_0x2cf014){_0x4534fa(++_0x2cf014);};return _0x3e7298(_0x17eaba,_0xf39819),_0x43de1b?decodeURIComponent(_0x43de1b[0x1]):undefined;}},_0x37c459=function(){const _0x281b1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x281b1['test'](_0x13c5a3['removeCookie']['toString']());};_0x13c5a3['updateCookie']=_0x37c459;let _0x302a18='';const _0xbb77d5=_0x13c5a3['updateCookie']();if(!_0xbb77d5)_0x13c5a3['setCookie'](['*'],'counter',0x1);else _0xbb77d5?_0x302a18=_0x13c5a3['getCookie'](null,'counter'):_0x13c5a3['removeCookie']();};_0x294dc8();}(a204_0x17ea,0x1aa));const a204_0x294d=function(_0x26c9c2,_0xf39819){_0x26c9c2=_0x26c9c2-0xd7;let _0x17eaba=a204_0x17ea[_0x26c9c2];return _0x17eaba;};const a204_0x3c71af=a204_0x294d,a204_0x37c459=function(){let _0xbb77d5=!![];return function(_0x3d2ddb,_0x5a7a9){const _0x4a7197=_0xbb77d5?function(){const _0x24ce40=a204_0x294d;if(_0x5a7a9){const _0x1f16a3=_0x5a7a9[_0x24ce40(0xde)](_0x3d2ddb,arguments);return _0x5a7a9=null,_0x1f16a3;}}:function(){};return _0xbb77d5=![],_0x4a7197;};}(),a204_0x13c5a3=a204_0x37c459(this,function(){const _0x315fdb=function(){const _0x72b169=a204_0x294d,_0x48bce8=_0x315fdb[_0x72b169(0xd7)](_0x72b169(0xe5))()[_0x72b169(0xd7)](_0x72b169(0xda));return!_0x48bce8[_0x72b169(0xdd)](a204_0x13c5a3);};return _0x315fdb();});a204_0x13c5a3();'use strict';const tesseract_1=require('@bastion/tesseract');module[a204_0x3c71af(0xe3)]=class ShardReadyListener extends tesseract_1[a204_0x3c71af(0xe6)]{constructor(){const _0x15a845=a204_0x3c71af;super(_0x15a845(0xdc),{'mode':tesseract_1[_0x15a845(0xd8)][_0x15a845(0xe7)]['ON']}),this[_0x15a845(0xe1)]=async _0x886640=>{const _0x43b619=_0x15a845;tesseract_1[_0x43b619(0xdb)]['info']('Shard\x20'+_0x886640+_0x43b619(0xe9)),!process[_0x43b619(0xd9)][_0x43b619(0xe4)]&&this[_0x43b619(0xe2)][_0x43b619(0xdf)][_0x43b619(0xe8)]===_0x886640+0x1&&(tesseract_1[_0x43b619(0xdb)]['info']('Systems\x20Ready!'),await this[_0x43b619(0xe2)][_0x43b619(0xdf)]['broadcastEval'](_0x43b619(0xe0)));};}};