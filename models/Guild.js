const a401_0x50b1=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','model','default','constructor','__esModule','apply','Schema','Guild'];(function(_0x20f651,_0x50b14f){const _0x1bdd4a=function(_0x5b2ac9){while(--_0x5b2ac9){_0x20f651['push'](_0x20f651['shift']());}};const _0x110e30=function(){const _0x51f2aa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x23dcca,_0x55ae0c,_0x3cb7d5,_0x57d1e7){_0x57d1e7=_0x57d1e7||{};let _0x5517bd=_0x55ae0c+'='+_0x3cb7d5;let _0x3084e4=0x0;for(let _0x549ceb=0x0,_0x40b92b=_0x23dcca['length'];_0x549ceb<_0x40b92b;_0x549ceb++){const _0x2795a4=_0x23dcca[_0x549ceb];_0x5517bd+=';\x20'+_0x2795a4;const _0x33a530=_0x23dcca[_0x2795a4];_0x23dcca['push'](_0x33a530);_0x40b92b=_0x23dcca['length'];if(_0x33a530!==!![]){_0x5517bd+='='+_0x33a530;}}_0x57d1e7['cookie']=_0x5517bd;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf3c8ba,_0x3949e5){_0xf3c8ba=_0xf3c8ba||function(_0xe719cb){return _0xe719cb;};const _0x16eb47=_0xf3c8ba(new RegExp('(?:^|;\x20)'+_0x3949e5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x20dc1a=function(_0x10e1bf,_0xa42e5){_0x10e1bf(++_0xa42e5);};_0x20dc1a(_0x1bdd4a,_0x50b14f);return _0x16eb47?decodeURIComponent(_0x16eb47[0x1]):undefined;}};const _0x125de8=function(){const _0xbbe7de=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xbbe7de['test'](_0x51f2aa['removeCookie']['toString']());};_0x51f2aa['updateCookie']=_0x125de8;let _0x3eedf6='';const _0x35bbaf=_0x51f2aa['updateCookie']();if(!_0x35bbaf){_0x51f2aa['setCookie'](['*'],'counter',0x1);}else if(_0x35bbaf){_0x3eedf6=_0x51f2aa['getCookie'](null,'counter');}else{_0x51f2aa['removeCookie']();}};_0x110e30();}(a401_0x50b1,0xee));const a401_0x1bdd=function(_0x20f651,_0x50b14f){_0x20f651=_0x20f651-0x0;let _0x1bdd4a=a401_0x50b1[_0x20f651];return _0x1bdd4a;};const a401_0x51f2aa=function(){let _0x3949e5=!![];return function(_0x16eb47,_0x20dc1a){const _0xe719cb=_0x3949e5?function(){if(_0x20dc1a){const _0x10e1bf=_0x20dc1a[a401_0x1bdd('0x2')](_0x16eb47,arguments);_0x20dc1a=null;return _0x10e1bf;}}:function(){};_0x3949e5=![];return _0xe719cb;};}();const a401_0x5b2ac9=a401_0x51f2aa(this,function(){const _0xa42e5=function(){const _0xbbe7de=_0xa42e5[a401_0x1bdd('0x0')](a401_0x1bdd('0x6'))()['compile'](a401_0x1bdd('0x5'));return!_0xbbe7de['test'](a401_0x5b2ac9);};return _0xa42e5();});a401_0x5b2ac9();'use strict';Object['defineProperty'](exports,a401_0x1bdd('0x1'),{'value':!![]});const mongoose=require('mongoose');exports[a401_0x1bdd('0x8')]=mongoose[a401_0x1bdd('0x7')](a401_0x1bdd('0x4'),new mongoose[(a401_0x1bdd('0x3'))]({'_id':{'type':String,'required':!![]},'disabled':{'type':Boolean},'prefixes':{'type':[String]},'language':{'type':String},'greeting':{'type':{'channelId':{'type':String,'unique':!![],'sparse':!![]},'message':{'type':Object,'trim':!![]},'timeout':{'type':Number}}},'farewell':{'type':{'channelId':{'type':String,'unique':!![],'sparse':!![]},'message':{'type':Object,'trim':!![]},'timeout':{'type':Number}}},'music':{'type':{'enabled':{'type':Boolean},'textChannelId':{'type':String,'unique':!![],'sparse':!![]},'voiceChannelId':{'type':String,'unique':!![],'sparse':!![]},'roleId':{'type':String,'unique':!![],'sparse':!![]},'autoPlay':{'type':Boolean},'keepAlive':{'type':Boolean}}},'gamification':{'type':{'enabled':{'type':Boolean},'messages':{'type':Boolean},'multiplier':{'type':Number}}},'chat':{'type':Boolean},'streamerRoleId':{'type':String,'unique':!![],'sparse':!![]},'serverLogChannelId':{'type':String,'unique':!![],'sparse':!![]},'moderationLogChannelId':{'type':String,'unique':!![],'sparse':!![]},'starboardChannelId':{'type':String,'unique':!![],'sparse':!![]},'announcementsChannelId':{'type':String,'unique':!![],'sparse':!![]},'reportsChannelId':{'type':String,'unique':!![],'sparse':!![]},'suggestionsChannelId':{'type':String,'unique':!![],'sparse':!![]},'moderationCaseCount':{'type':Number},'reactionAnnouncements':{'type':Boolean},'reactionPinning':{'type':Boolean},'filters':{'type':{'inviteFilter':{'type':{'enabled':{'type':Boolean},'whitelist':{'type':[String]},'infraction':{'type':Boolean}}},'linkFilter':{'type':{'enabled':{'type':Boolean},'whitelist':{'type':[String]},'infraction':{'type':Boolean}}},'messageFilter':{'type':{'enabled':{'type':Boolean},'patterns':{'type':[String]},'infraction':{'type':Boolean}}}}},'mentionSpam':{'type':{'roles':{'type':Boolean},'users':{'type':Boolean},'threshold':{'type':Number}}},'infractions':{'type':{'kickThreshold':{'type':Number},'banThreshold':{'type':Number}}},'gambling':{'type':{'enabled':{'type':Boolean},'multiplier':{'type':Number}}},'streamers':{'type':{'twitch':{'type':{'channelId':{'type':String},'users':{'type':[String]}}}}},'voiceSessions':{'type':{'categories':{'type':[String]},'userLimit':{'type':Number}}},'disabledCommands':{'type':[String]},'membersOnly':{'type':Boolean}}));