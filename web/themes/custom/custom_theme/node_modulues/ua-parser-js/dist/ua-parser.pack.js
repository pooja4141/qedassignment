/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
!function(r,d){"use strict";function i(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e}function n(i,e){return typeof i==w&&-1!==W(e).indexOf(W(i))}function t(i,e){if(typeof i==w)return i=i.replace(/^\s\s*/,""),typeof e==b?i:i.substring(0,350)}function s(i,e){for(var o,a,r,n,t,s=0;s<e.length&&!n;){for(var b=e[s],w=e[s+1],l=o=0;l<b.length&&!n;)if(n=b[l++].exec(i))for(a=0;a<w.length;a++)t=n[++o],typeof(r=w[a])==c&&0<r.length?2===r.length?typeof r[1]==u?this[r[0]]=r[1].call(this,t):this[r[0]]=r[1]:3===r.length?typeof r[1]!=u||r[1].exec&&r[1].test?this[r[0]]=t?t.replace(r[1],r[2]):d:this[r[0]]=t?r[1].call(this,t,r[2]):d:4===r.length&&(this[r[0]]=t?r[3].call(this,t.replace(r[1],r[2])):d):this[r]=t||d;s+=2}}function e(i,e){for(var o in e)if(typeof e[o]==c&&0<e[o].length){for(var a=0;a<e[o].length;a++)if(n(e[o][a],i))return"?"===o?d:o}else if(n(e[o],i))return"?"===o?d:o;return i}var u="function",b="undefined",c="object",w="string",l="model",m="name",p="type",f="vendor",h="version",g="architecture",o="console",a="mobile",v="tablet",x="smarttv",k="wearable",y="embedded",_="Amazon",T="Apple",q="ASUS",S="BlackBerry",z="Browser",N="Chrome",A="Firefox",C="Google",E="Huawei",O="LG",U="Microsoft",j="Motorola",R="Opera",M="Samsung",P="Sharp",V="Sony",B="Xiaomi",D="Zebra",I="Facebook",W=function(i){return i.toLowerCase()},F={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[m,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[m,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[m,h],[/opios[\/ ]+([\w\.]+)/i],[h,[m,R+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[m,R]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[m,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[m,"UC"+z]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[m,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[m,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[m,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[m,"IE"]],[/yabrowser\/([\w\.]+)/i],[h,[m,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[m,/(.+)/,"$1 Secure "+z],h],[/\bfocus\/([\w\.]+)/i],[h,[m,A+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[m,R+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[m,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[m,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[m,R+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[m,"MIUI "+z]],[/fxios\/([-\w\.]+)/i],[h,[m,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[m,"360 "+z]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[m,/(.+)/,"$1 "+z],h],[/(comodo_dragon)\/([\w\.]+)/i],[[m,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[m,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[m],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[m,I],h],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[m,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[m,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[m,N+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[m,N+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[m,"Android "+z]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[m,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[m,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,m],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[m,[h,e,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[m,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[m,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[m,A+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[m,h],[/(cobalt)\/([\w\.]+)/i],[m,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[f,M],[p,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[f,M],[p,a]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[f,T],[p,a]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[f,T],[p,v]],[/(macintosh);/i],[l,[f,T]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[f,E],[p,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[f,E],[p,a]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[f,B],[p,a]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[f,B],[p,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[f,"OPPO"],[p,a]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[f,"Vivo"],[p,a]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[f,"Realme"],[p,a]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[f,j],[p,a]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[f,j],[p,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[f,O],[p,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[f,O],[p,a]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[f,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[f,"Nokia"],[p,a]],[/(pixel c)\b/i],[l,[f,C],[p,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[f,C],[p,a]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[f,V],[p,a]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[f,V],[p,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[f,"OnePlus"],[p,a]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[f,_],[p,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[f,_],[p,a]],[/(playbook);[-\w\),; ]+(rim)/i],[l,f,[p,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[f,S],[p,a]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[f,q],[p,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[f,q],[p,a]],[/(nexus 9)/i],[l,[f,"HTC"],[p,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[l,/_/g," "],[p,a]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[f,"Acer"],[p,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[f,"Meizu"],[p,a]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[f,P],[p,a]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,l,[p,a]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,l,[p,v]],[/(surface duo)/i],[l,[f,U],[p,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[f,"Fairphone"],[p,a]],[/(u304aa)/i],[l,[f,"AT&T"],[p,a]],[/\bsie-(\w*)/i],[l,[f,"Siemens"],[p,a]],[/\b(rct\w+) b/i],[l,[f,"RCA"],[p,v]],[/\b(venue[\d ]{2,7}) b/i],[l,[f,"Dell"],[p,v]],[/\b(q(?:mv|ta)\w+) b/i],[l,[f,"Verizon"],[p,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[f,"Barnes & Noble"],[p,v]],[/\b(tm\d{3}\w+) b/i],[l,[f,"NuVision"],[p,v]],[/\b(k88) b/i],[l,[f,"ZTE"],[p,v]],[/\b(nx\d{3}j) b/i],[l,[f,"ZTE"],[p,a]],[/\b(gen\d{3}) b.+49h/i],[l,[f,"Swiss"],[p,a]],[/\b(zur\d{3}) b/i],[l,[f,"Swiss"],[p,v]],[/\b((zeki)?tb.*\b) b/i],[l,[f,"Zeki"],[p,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],l,[p,v]],[/\b(ns-?\w{0,9}) b/i],[l,[f,"Insignia"],[p,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[f,"NextBook"],[p,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],l,[p,a]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],l,[p,a]],[/\b(ph-1) /i],[l,[f,"Essential"],[p,a]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[f,"Envizen"],[p,v]],[/\b(trio[-\w\. ]+) b/i],[l,[f,"MachSpeed"],[p,v]],[/\btu_(1491) b/i],[l,[f,"Rotor"],[p,v]],[/(shield[\w ]+) b/i],[l,[f,"Nvidia"],[p,v]],[/(sprint) (\w+)/i],[f,l,[p,a]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[f,U],[p,a]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[f,D],[p,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[f,D],[p,a]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,l,[p,o]],[/droid.+; (shield) bui/i],[l,[f,"Nvidia"],[p,o]],[/(playstation [345portablevi]+)/i],[l,[f,V],[p,o]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[f,U],[p,o]],[/smart-tv.+(samsung)/i],[f,[p,x]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[f,M],[p,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,O],[p,x]],[/(apple) ?tv/i],[f,[l,T+" TV"],[p,x]],[/crkey/i],[[l,N+"cast"],[f,C],[p,x]],[/droid.+aft(\w)( bui|\))/i],[l,[f,_],[p,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[f,P],[p,x]],[/(bravia[\w ]+)( bui|\))/i],[l,[f,V],[p,x]],[/(mitv-\w{5}) bui/i],[l,[f,B],[p,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,t],[l,t],[p,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,x]],[/((pebble))app/i],[f,l,[p,k]],[/droid.+; (glass) \d/i],[l,[f,C],[p,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[f,D],[p,k]],[/(quest( 2)?)/i],[l,[f,I],[p,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[p,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[p,a]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[p,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,a]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[m,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[m,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[m,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,m]],os:[[/microsoft (windows) (vista|xp)/i],[m,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[m,[h,e,F]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,"Windows"],[h,e,F]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[m,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[m,"Mac OS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,m],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[m,h],[/\(bb(10);/i],[h,[m,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[m,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[m,A+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[m,"webOS"]],[/crkey\/([\d\.]+)/i],[h,[m,N+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[m,"Chromium OS"],h],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[m,h],[/(sunos) ?([\w\.\d]*)/i],[[m,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[m,h]]},L=function(i,e){if(typeof i==c&&(e=i,i=d),!(this instanceof L))return new L(i,e).getResult();var o=i||(typeof r!=b&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),a=e?function(i,e){var o,a={};for(o in i)e[o]&&e[o].length%2==0?a[o]=e[o].concat(i[o]):a[o]=i[o];return a}(G,e):G;return this.getBrowser=function(){var i,e={};return e[m]=d,e[h]=d,s.call(e,o,a.browser),e.major=typeof(i=e.version)==w?i.replace(/[^\d\.]/g,"").split(".")[0]:d,e},this.getCPU=function(){var i={};return i[g]=d,s.call(i,o,a.cpu),i},this.getDevice=function(){var i={};return i[f]=d,i[l]=d,i[p]=d,s.call(i,o,a.device),i},this.getEngine=function(){var i={};return i[m]=d,i[h]=d,s.call(i,o,a.engine),i},this.getOS=function(){var i={};return i[m]=d,i[h]=d,s.call(i,o,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=typeof i==w&&350<i.length?t(i,350):i,this},this.setUA(o),this};L.VERSION="0.7.33",L.BROWSER=i([m,h,"major"]),L.CPU=i([g]),L.DEVICE=i([l,f,p,o,a,x,v,k,y]),L.ENGINE=L.OS=i([m,h]),typeof exports!=b?(typeof module!=b&&module.exports&&(exports=module.exports=L),exports.UAParser=L):typeof define==u&&define.amd?define(function(){return L}):typeof r!=b&&(r.UAParser=L);var Z,H=typeof r!=b&&(r.jQuery||r.Zepto);H&&!H.ua&&(Z=new L,H.ua=Z.getResult(),H.ua.get=function(){return Z.getUA()},H.ua.set=function(i){Z.setUA(i);var e,o=Z.getResult();for(e in o)H.ua[e]=o[e]})}("object"==typeof window?window:this);
