const a146_0x25ac=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','@bastion/tesseract','Family','join','https://image.tmdb.org/t/p/original','vote_average','Genre','filter','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20TV\x20Show.','constructor','backdrop_path','toUpperCase','First\x20Air\x20Date','first_air_date','Command','apply','https://themoviedb.org/tv/','test','json','Kids','NOT_FOUND','Western','BASTION_ERROR_TYPE','adult','name','Constants','exec','overview','Mystery','tvShow','Reality','Crime','genres','TV\x20Show','../../utils/errors','Powered\x20by\x20The\x20Movie\x20Database','results','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Documentary','poster_path','/tmdb/tv/','sanitize','Sci-Fi\x20&\x20Fantasy','genre_ids','send','map','Action\x20&\x20Adventure','channel','exports','Rating','Animation','slice','length','IRIS'];(function(_0x43e9cb,_0x1996d5){const _0x25ac29=function(_0x19604f){while(--_0x19604f){_0x43e9cb['push'](_0x43e9cb['shift']());}},_0x5c5303=function(){const _0x15ea7f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x240167,_0x154749,_0x56fc21,_0x121567){_0x121567=_0x121567||{};let _0xdc3b34=_0x154749+'='+_0x56fc21,_0x5c2e75=0x0;for(let _0x3a7ef2=0x0,_0x3b6a7e=_0x240167['length'];_0x3a7ef2<_0x3b6a7e;_0x3a7ef2++){const _0x14e9d1=_0x240167[_0x3a7ef2];_0xdc3b34+=';\x20'+_0x14e9d1;const _0x1f15b8=_0x240167[_0x14e9d1];_0x240167['push'](_0x1f15b8),_0x3b6a7e=_0x240167['length'],_0x1f15b8!==!![]&&(_0xdc3b34+='='+_0x1f15b8);}_0x121567['cookie']=_0xdc3b34;},'removeCookie':function(){return'dev';},'getCookie':function(_0xa9f64a,_0x476804){_0xa9f64a=_0xa9f64a||function(_0x54de8e){return _0x54de8e;};const _0x285e02=_0xa9f64a(new RegExp('(?:^|;\x20)'+_0x476804['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3070ea=function(_0x2726e1,_0x567c80){_0x2726e1(++_0x567c80);};return _0x3070ea(_0x25ac29,_0x1996d5),_0x285e02?decodeURIComponent(_0x285e02[0x1]):undefined;}},_0x3342e6=function(){const _0x284400=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x284400['test'](_0x15ea7f['removeCookie']['toString']());};_0x15ea7f['updateCookie']=_0x3342e6;let _0x1f2a89='';const _0x5da068=_0x15ea7f['updateCookie']();if(!_0x5da068)_0x15ea7f['setCookie'](['*'],'counter',0x1);else _0x5da068?_0x1f2a89=_0x15ea7f['getCookie'](null,'counter'):_0x15ea7f['removeCookie']();};_0x5c5303();}(a146_0x25ac,0xdc));const a146_0x5c53=function(_0x43e9cb,_0x1996d5){_0x43e9cb=_0x43e9cb-0x128;let _0x25ac29=a146_0x25ac[_0x43e9cb];return _0x25ac29;};const a146_0x3cd2b2=a146_0x5c53,a146_0x3342e6=function(){let _0x5da068=!![];return function(_0x240167,_0x154749){const _0x56fc21=_0x5da068?function(){const _0x40b84f=a146_0x5c53;if(_0x154749){const _0x121567=_0x154749[_0x40b84f(0x133)](_0x240167,arguments);return _0x154749=null,_0x121567;}}:function(){};return _0x5da068=![],_0x56fc21;};}(),a146_0x15ea7f=a146_0x3342e6(this,function(){const _0xdc3b34=function(){const _0x124ced=a146_0x5c53,_0x5c2e75=_0xdc3b34[_0x124ced(0x12d)](_0x124ced(0x15a))()[_0x124ced(0x12d)](_0x124ced(0x149));return!_0x5c2e75[_0x124ced(0x135)](a146_0x15ea7f);};return _0xdc3b34();});a146_0x15ea7f();'use strict';const tesseract_1=require(a146_0x3cd2b2(0x15b)),errors=require(a146_0x3cd2b2(0x146)),omnic=require('../../utils/omnic');module[a146_0x3cd2b2(0x154)]=class TVShowCommand extends tesseract_1[a146_0x3cd2b2(0x132)]{constructor(){const _0x463deb=a146_0x3cd2b2;super(_0x463deb(0x141),{'description':_0x463deb(0x12c),'triggers':['tv'],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['tvShow\x20TITLE']}),this[_0x463deb(0x14d)]=_0x3a7ef2=>{const _0x21d764=_0x463deb;return _0x3a7ef2[_0x21d764(0x158)]>0x7d0?_0x3a7ef2[_0x21d764(0x157)](0x0,0x7d0)+'\x0a...':_0x3a7ef2;},this[_0x463deb(0x13e)]=async(_0x3b6a7e,_0x14e9d1)=>{const _0x37b4f8=_0x463deb;if(!_0x14e9d1['_'][_0x37b4f8(0x158)])throw new errors['DiscordError'](errors[_0x37b4f8(0x13a)]['INVALID_COMMAND_SYNTAX'],this[_0x37b4f8(0x13c)]);const _0x1f15b8=_0x14e9d1['_'][_0x37b4f8(0x15d)]('\x20'),_0xa9f64a=await omnic['makeRequest'](_0x37b4f8(0x14c)+_0x1f15b8),_0x476804=await _0xa9f64a[_0x37b4f8(0x136)](),_0x285e02=_0x3b6a7e[_0x37b4f8(0x153)]['nsfw']?_0x476804[_0x37b4f8(0x148)]:_0x476804['results'][_0x37b4f8(0x12b)](_0x3070ea=>!_0x3070ea[_0x37b4f8(0x13b)]);if(!_0x285e02||!_0x285e02[_0x37b4f8(0x158)])throw new Error(_0x37b4f8(0x138));await _0x3b6a7e['channel'][_0x37b4f8(0x150)]({'embed':{'color':tesseract_1[_0x37b4f8(0x13d)]['COLORS'][_0x37b4f8(0x159)],'author':{'name':_0x37b4f8(0x145)},'title':_0x285e02[0x0][_0x37b4f8(0x13c)],'url':_0x37b4f8(0x134)+_0x285e02[0x0]['id'],'description':this[_0x37b4f8(0x14d)](_0x285e02[0x0][_0x37b4f8(0x13f)]),'fields':[{'name':_0x37b4f8(0x12a),'value':_0x285e02[0x0][_0x37b4f8(0x14f)][_0x37b4f8(0x151)](_0x54de8e=>this[_0x37b4f8(0x144)][_0x54de8e])['join']('\x0a'),'inline':!![]},{'name':'Language','value':_0x285e02[0x0]['original_language'][_0x37b4f8(0x12f)](),'inline':!![]},{'name':_0x37b4f8(0x155),'value':''+_0x285e02[0x0][_0x37b4f8(0x129)],'inline':!![]},{'name':_0x37b4f8(0x130),'value':_0x285e02[0x0][_0x37b4f8(0x131)],'inline':!![]}],'image':{'url':_0x285e02[0x0][_0x37b4f8(0x14b)]?_0x37b4f8(0x128)+_0x285e02[0x0][_0x37b4f8(0x14b)]:_0x37b4f8(0x128)+_0x285e02[0x0][_0x37b4f8(0x12e)]},'footer':{'text':_0x37b4f8(0x147)}}});},this[_0x463deb(0x144)]={'10759':_0x463deb(0x152),'16':_0x463deb(0x156),'35':'Comedy','80':_0x463deb(0x143),'99':_0x463deb(0x14a),'18':'Drama','10751':_0x463deb(0x15c),'10762':_0x463deb(0x137),'9648':_0x463deb(0x140),'10763':'News','10764':_0x463deb(0x142),'10765':_0x463deb(0x14e),'10766':'Soap','10767':'Talk','10768':'War\x20&\x20Politics','37':_0x463deb(0x139)};}};