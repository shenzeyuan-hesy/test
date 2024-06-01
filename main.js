//原作者GitHub：https://github.com/TransparentLC/WechatMomentScreenshot
function loadScript(url) {
    var el = document.createElement('script');
    el.src = url;
    document.body.appendChild(el);
}

function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.onload = function () { callback(xhr.responseText) };
    xhr.send();
}

location.hash = '';


// 你没看错，这个就是远程控制的黑名单检测
// 有人想要对抗删除原作者信息和源代码链接的检测代码，那我只能再加一些东西了
(function () {
    var _0x21f88c=_0x4211;(function(_0x378a80,_0x2395fe){var _0x4b9627=_0x4211,_0x111a75=_0x378a80();while(!![]){try{var _0x1f7551=-parseInt(_0x4b9627('0x147','6wpg'))/0x1+-parseInt(_0x4b9627('0x153','Y3gW'))/0x2*(-parseInt(_0x4b9627('0x139','0bQb'))/0x3)+-parseInt(_0x4b9627('0x129','F@4q'))/0x4*(-parseInt(_0x4b9627('0x125','2nA7'))/0x5)+parseInt(_0x4b9627('0x12f','[*cL'))/0x6*(-parseInt(_0x4b9627('0x157','FmF8'))/0x7)+-parseInt(_0x4b9627('0x12d','[*cL'))/0x8+parseInt(_0x4b9627('0x12b','E3oO'))/0x9*(-parseInt(_0x4b9627('0x138','Gg40'))/0xa)+parseInt(_0x4b9627('0x15b','aJy7'))/0xb*(parseInt(_0x4b9627('0x150','@L46'))/0xc);if(_0x1f7551===_0x2395fe)break;else _0x111a75['push'](_0x111a75['shift']());}catch(_0x4b4d39){_0x111a75['push'](_0x111a75['shift']());}}}(_0x3ef6,0x72c16));var _0x1428d8=(function(){var _0x1cce87=!![];return function(_0x1145ce,_0x17565e){var _0x1a15a4=_0x1cce87?function(){var _0x3accde=_0x4211;if(_0x17565e){var _0x326649=_0x17565e[_0x3accde('0x143','n)8s')](_0x1145ce,arguments);return _0x17565e=null,_0x326649;}}:function(){};return _0x1cce87=![],_0x1a15a4;};}()),_0x63959f=_0x1428d8(this,function(){var _0x5af8fe=_0x4211,_0x13c3ce;try{var _0x2c1230=Function(_0x5af8fe('0x140','$&kj')+_0x5af8fe('0x15c','Gg40')+');');_0x13c3ce=_0x2c1230();}catch(_0x2474b8){_0x13c3ce=window;}var _0x249386=_0x13c3ce[_0x5af8fe('0x12a','pE(y')]=_0x13c3ce[_0x5af8fe('0x13d','52O&')]||{},_0x27d05c=[_0x5af8fe('0x14f','P7zD'),_0x5af8fe('0x126','2nA7'),_0x5af8fe('0x148','aJy7'),_0x5af8fe('0x135','6ENc'),_0x5af8fe('0x12e','9(NJ'),_0x5af8fe('0x14e','[lnt'),_0x5af8fe('0x13c','4T4e')];for(var _0x509c82=0x0;_0x509c82<_0x27d05c[_0x5af8fe('0x167','4T4e')];_0x509c82++){var _0x4f293d=_0x1428d8[_0x5af8fe('0x149','Y3gW')][_0x5af8fe('0x142','^zMp')][_0x5af8fe('0x14a','OpUZ')](_0x1428d8),_0x11ce84=_0x27d05c[_0x509c82],_0x2cdcc9=_0x249386[_0x11ce84]||_0x4f293d;_0x4f293d[_0x5af8fe('0x14b','KZb$')]=_0x1428d8[_0x5af8fe('0x136','Gg40')](_0x1428d8),_0x4f293d[_0x5af8fe('0x160','Nevx')]=_0x2cdcc9[_0x5af8fe('0x15d','0bQb')][_0x5af8fe('0x14c','(^ZR')](_0x2cdcc9),_0x249386[_0x11ce84]=_0x4f293d;}});_0x63959f();function _0x4211(_0x4866c6,_0x51ca5c){var _0x1c1919=_0x3ef6();return _0x4211=function(_0x63959f,_0x1428d8){_0x63959f=_0x63959f-0x122;var _0x260e3e=_0x1c1919[_0x63959f];if(_0x4211['pYTORO']===undefined){var _0x3ef690=function(_0x2a6701){var _0x252480='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x469d58='',_0x1cce87='';for(var _0x1145ce=0x0,_0x17565e,_0x1a15a4,_0x326649=0x0;_0x1a15a4=_0x2a6701['charAt'](_0x326649++);~_0x1a15a4&&(_0x17565e=_0x1145ce%0x4?_0x17565e*0x40+_0x1a15a4:_0x1a15a4,_0x1145ce++%0x4)?_0x469d58+=String['fromCharCode'](0xff&_0x17565e>>(-0x2*_0x1145ce&0x6)):0x0){_0x1a15a4=_0x252480['indexOf'](_0x1a15a4);}for(var _0x13c3ce=0x0,_0x2c1230=_0x469d58['length'];_0x13c3ce<_0x2c1230;_0x13c3ce++){_0x1cce87+='%'+('00'+_0x469d58['charCodeAt'](_0x13c3ce)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1cce87);};var _0x4f3a8f=function(_0x249386,_0x27d05c){var _0x509c82=[],_0x4f293d=0x0,_0x11ce84,_0x2cdcc9='';_0x249386=_0x3ef690(_0x249386);var _0x2474b8;for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x509c82[_0x2474b8]=_0x2474b8;}for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8]+_0x27d05c['charCodeAt'](_0x2474b8%_0x27d05c['length']))%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84;}_0x2474b8=0x0,_0x4f293d=0x0;for(var _0x3465b9=0x0;_0x3465b9<_0x249386['length'];_0x3465b9++){_0x2474b8=(_0x2474b8+0x1)%0x100,_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8])%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84,_0x2cdcc9+=String['fromCharCode'](_0x249386['charCodeAt'](_0x3465b9)^_0x509c82[(_0x509c82[_0x2474b8]+_0x509c82[_0x4f293d])%0x100]);}return _0x2cdcc9;};_0x4211['IbbqAK']=_0x4f3a8f,_0x4866c6=arguments,_0x4211['pYTORO']=!![];}var _0x421140=_0x1c1919[0x0],_0x102cf3=_0x63959f+_0x421140,_0x21ae12=_0x4866c6[_0x102cf3];return!_0x21ae12?(_0x4211['DxvYnA']===undefined&&(_0x4211['DxvYnA']=!![]),_0x260e3e=_0x4211['IbbqAK'](_0x260e3e,_0x1428d8),_0x4866c6[_0x102cf3]=_0x260e3e):_0x260e3e=_0x21ae12,_0x260e3e;},_0x4211(_0x4866c6,_0x51ca5c);}function _0x3ef6(){var _0x7f942f=['WRypWP4+W6lcKZ7dV3zmW63cTbedW7RcRb/cH8oK','y8o8xZbnW4BcN8o9BSkYfSkB','i1ZcIu7cLCkUAvJdTa','W5XmiJHD','y2zWDSoKW4HwWQjPemo3gW','W4zSnxe','W4FdUeJcTM7dJmkcxmomW6pdNwekW7GdyNdcRCoNhbBdMX8','t1FcVh/dSXpdTY7cK8kAocW','jmo1W6hdUq','W4mprYKNAhHMWOSHvq','DNagW6G','dWTEsc3dPCoBWOxdMW','emkAW7nT','jJfwySojW4n3WR8','WOZdLSoMoGi','W7RdNSoz','m8oIzCokWPpdL38jWQS','q2yPptBcVbhdP8k3WQZcUa','W6rdFmoQrSk/ACkWi8oF','WPvshw4HDefFWPmS','W77dNSonmmo3FsbN','W4fUmhxdJW','WQFcS2NKVAhMI4ZORB3PLy3NMyJNVl3NQy/VVAa','WQ3dHaBdN8kyBKyuySoAW7q','WQtdJ8k8W4NdSCkDe20','r8k5W5Phv1Ka','vWBdJZOJeSokW7BcQIJcM2xdOq','FmkUWR/cR8kfW513W77dI8otWOJdVmkQ','AN4TzCoKW4HwWRnpamoSg23dJt8ru8kcWONcQ8oDW7RcGCkfW4WWDNODWQ0xW5a','zSoaW7NcIJhcIhtdUW','WQJcV8oyDa','WOaTAs7dUCo+EqVdRr0','W6HmWPrqW7pcQWqR','ymk6mmoEWQy','ut9HWPu','g8oSoSk6WRTmeCknWPJcHMZcNCkT','ECoCj8oy','WRtcTmoAFXZcTa','WRaAkCkSxCk/c8kokSol','WQBdJqPQsmoR','d8oNbmk1WPK3lqq','WQxdJSkRW5JdP8kZga','Cmo1rrJdOqW','W7rGomozWPpdPmoCwZNdJqNdMHldKHyZW7VcRSoOp1KiWR/dVHK0uh7cR2/dVMtdQM3cSmotW4/cGa','gSkrtSoeW7OSxq','wmk6E8oK','ESoLWO/dUbLoW6rqW4hcI1ZcLq','bCkrW6W','fhS/W4VcPCkZyCoDp8kRs0G','W7JcRdLYW6pcRSog','WOuScxJdUCoyFaa','qgiHBeBcHr7dKmkF','uHnsWRZdRCk8WO3cSmkAhCkew8oJ','dSkkWPVdP33cTmoBDXa','vbDuWR7cNSoiW6ZcP8klma','WOqnzMWDWPC7kCkSWO5Doa','776s55EY5lUz5zYP6l+G6l6/5P6p5BsP5ysB5PwG5OUr5y+d5lQB5y+J5lYa6igO55U35yA45l+a5Ogr772v5OQk5A6U5zYS5yEc5lUr6l685yYs5l6y55Aw6kAb5yMg55QO6ko95lMR776x5BwL6kcH5y2E5l2Z6ikZ5yU55yEj6BMe5zkQ5y2i44o7W4nmpmoK','m8k9vWyop8k7p8ovkSoMW4BdOSkmW4FdOIblaSoSWOJdHuVdTMGAW557W6xdVW4KkqxdQYJdMSkHv3BdG8obimkGW6pdQ8onW7rKy17cILuPW4ueW6lcRSk7W5aVWPJcGq','WPWqf+IUREs+JUwTGUwoKUs9MEIdUUIgPow3LUMdLEE9JUEAMEMHIEMCNUwCJ+wCME+9UCoCCwmupMrbWP9othTYzmkGWQWUWR4XWQPBCwRcHCoaW5lcG8o4mCkxEXm2uSkRW7tcJ8kGW4ivW7X5W6VdJmoqtMr5WQBdQSkVW4OYW5OtWQJdQr/dOSkWWRq+WQukWOZdHYxdP8ofcSojwhrCvKG/u8o9WQ/dJ8kdA07cQYtdHCksqmkHWPddTKfsjw3cS8k5W6bPDgyIW5q','xmk2sWjnoCoTFSoolCkVWPtdVmosWP3cPgPwd8o0WPlcHvS','DvrcWOXs','C2PTyG','WRpcTCofzbpcSqyk','kdi3pSkYWPzlWQbChSo8gG','iCkCWPRcRc3cQ1xdMmkp','dCkZuG','W51Uoxi','WR7dMGvUwq','WQ/dJ8kHW47dSmkqgW','W7/cK8o/W6/dSCk2muZdOW','m8k+b2e'];_0x3ef6=function(){return _0x7f942f;};return _0x3ef6();}if(location[_0x21f88c('0x137','bk%3')]!==_0x21f88c('0x152','44*Y')&&location[_0x21f88c('0x154','P7zD')]!==_0x21f88c('0x146','XUUA')){window[_0x21f88c('0x13f','bkZ[')][_0x21f88c('0x164','hlul')]=_0x21f88c('0x132','9wme');var xhr=new XMLHttpRequest();xhr[_0x21f88c('0x13b','E3oO')](_0x21f88c('0x128','MWnk'),_0x21f88c('0x124','S0JU')),xhr[_0x21f88c('0x165','bk%3')]=function(){var _0x143f67=_0x21f88c,_0x3465b9=xhr[_0x143f67('0x144','Gg40')][_0x143f67('0x145','E3oO')]()[_0x143f67('0x155','E3oO')]('\x0a')[_0x143f67('0x13a','9wme')](function(_0x17047e){var _0x493323=_0x143f67;return _0x17047e[_0x493323('0x162','F@4q')]();});_0x3465b9[_0x143f67('0x122','52O&')](location[_0x143f67('0x168','k6r!')])!==-0x1&&mdui[_0x143f67('0x161','@L46')](''+_0x143f67('0x134','9wme')+_0x143f67('0x156','pE(y')+location[_0x143f67('0x158','52O&')]+_0x143f67('0x131','pE(y')+_0x143f67('0x133','Y3gW')+_0x143f67('0x123','k!%T'),function(){},{'modal':!![],'closeOnEsc':![],'closeOnConfirm':![],'history':![]});},xhr[_0x21f88c('0x15e','bk%3')]();}
})();

if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) loadScript('https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/fuckWechat.min.js');

if (!window.Promise) loadScript('https://cdn.jsdelivr.net/npm/promise-polyfill/dist/polyfill.min.js');

var avatarURL = [];

function loadAvatarSet(s, n) {
    avatarURL = s.split('\n').filter(Boolean).map(function (e) {
        return e.trim();
    });
    if (n) mdui.snackbar('加载成功，头像库中一共有 ' + avatarURL.length + ' 个头像');
}
var emoticon = [];
xhrGet('https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/emoticon.json', function (result) { emoticon = JSON.parse(result) });

// 读取配置
var configDefault = {
    name: 'A 营销号免费广告姬',
    text: '很实用的教程[微笑]\n需要收集五个赞 谢谢大家啦～(　^ω^)',
    location: '',
    app: '',
    height: 1920,
    uiWhite: false,
    firstAvatar: false,
    appIcon: false,
    statusIcon: true,
    statusIos: false,
    avatarSet: '',
};
var config;
var avatarFile;
try {
    config = JSON.parse(localStorage.getItem('config')) || {};
} catch (error) {
    config = {};
}
for (var k in configDefault) {
    if (config[k] === undefined) config[k] = configDefault[k];
}
document.getElementById('configName').value = config.name;
document.getElementById('configText').value = config.text;
document.getElementById('configLocation').value = config.location;
document.getElementById('configApp').value = config.app;
document.getElementById('configHeight').value = config.height;
document.getElementById('configUIWhite').checked = config.uiWhite;
document.getElementById('configFirstAvatar').checked = config.firstAvatar;
document.getElementById('configTopBarAppIcons').checked = config.appIcon;
document.getElementById('configTopBarStatusIcons').checked = config.statusIcon;
document.getElementById('configTopBarIos').checked = config.statusIos;
document.getElementById('avatar').style.backgroundImage = 'url(' + (localStorage.getItem('avatar') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAW9yTlQBz6J3mgAAAddQTFRFAAAA7u7u7+/v7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u9/f39vb29fX18/Pz8vLy8fHx7+/v7u7u7e3t7Ozs6+vr6urq6enp6Ojo5+fn5ubm5eXl5OTk4+Pj4uLi4eHh4ODg3t7e3d3d3Nzc2tra2dnZ2NjY2NjX19fX1tbW1dXV1dXU1NTU09PT0dHR0dHQ0NDQz8/Pzc3NzM3MzMzMysrKycjIyMjIx8fHxsbGwsLCwcHBv7+/vr++vr6+vb29vLy8u7u7ubm5uLm4uLi3t7i3tra2tbW1tLW0tLS0tLSzs7SztLOzs7Ozs7OysrOys7KysrKysrKxsbKxsbGxsbGwsLGwsbCwsLCwsLCvr7Cvr6+vr6+urq+ur66urq6urq6tra6trq2tra2tra2srK2sraysrKysq6yrq6urq6uqqquqqqqqqqqpqaqpqampqamoqKmoqaioqKiop6inqKenp6enp6empqempqampqalpaalpaWlpaWkpaSkpKSkpKOjo6OjoqOioqKioqKhoaKhoqGhoaGhoKGgoKCgoKCfn6CfoJ+fn5+fnp6enp6dnZ2dnZ2cnZycnJycnJybm5ybm5ubm5uampuampqamZqZl5eXTIgxYwAAAAx0Uk5TADw/eLHAw+Tn8PP85v07qgAAAs1JREFUeNpiGKmAiYUd0I5dqLXNBQAY/nVax93d3eYeqaWaNnTVLASHBHd3d7jXWYNDaDhn3u8C3id6LAKwu//9c+r9GwGlf0+u7yEc8OHfAngnAlL/C+B9WOB9AYyAVhgMg78SmIf2Hq32NiRCAlPYg5Wp8Ym59YOGSBhg9ubCQOsHn5/pHlt/HwMOZq5MtFIWo85I2P09y0QkKBg1MM7YjdqvEVTHcg0o+GiWtei0QkaqZyUJDEyY7Sa/esEI3+hzDRBYN+YjtGeytE5FAYFkpxU7m94zVqgBAKMnGAI7F8k9VgOAGSNu3XnQ1KxXAoDFfRR2Pn2gUwEAlnLkBVDn4eQAYEmHBT2fzt0BAuZ1kJdACgRM5S6B/pcgYCRLXQAJpg7kpUQ8devOg5bWDCUImMMS50HKIleDgJGEEz/rGfxlcrDhq4A+e4m4TadUgYERTyjdKUjQaXINIBj7kjwRDe5imRp4kop9ZsGCnt5aJFNBmEYzPPogaMEEDxDMbTYFQUdAHgEDLG+zBEGqVwUBTKh4ywpXSHJ16YBgVDl1uMA36pGvmQJjW1xt3O3BrNfrGzODLS4TFgRxa4CfXNt+l3c7MI/dWxzppBvN+s+eIJoc/vah+d3WfOlgUdv2TG+Ty3qqfQ3Tmxub+OltJlsamNO+NcUzDhOOXA43OGh+eofMDB2Me7s7xflJA4pcHWogGX5m/0VciGDlwkIvI3AiZP/CfEUoYDy5PsY6BU6EJKiWsXUm7UYweWKec5tx5OZws7trar3+BjBmeLKF1KFIKKE6khlYbY0SBWtnms5fnngGV9dSlSjo7LIhUsKdPKESA/tpHJGUgR5QiIIuiSDiGpaLgW4XIhWkZWLgG+lX+Er0CqtpiSDurxJ9holdXqekvHyMSgyM0Mgkpwnv6MPgTwneh+U9gH9kCv9QF/ax8+nB+D1Q7Z5wMP4H9gmblMKHXkdteAAAAABJRU5ErkJggg') + ')';
document.getElementById('configAvatarSet').value = config.avatarSet;

xhrGet(config.avatarSet || 'https://i.akarin.dev/wms-avatar/avatar-stable.txt', function (result) { loadAvatarSet(result) });

//输入微信文章的链接，通过后端自动获取文章标题和文章封面
function getArticleInfo() {
    var t = Date.now();
    mdui.confirm(
        '<div class="mdui-typo">'
        +     '<p><strong style="color:red">（使用本功能前，请阅读使用须知至少 10 秒）</strong></p>'
        +     '<p>本工具不得用于虚拟货币/数字藏品/数字艺术/数字文创/数字潮玩/NFT/……相关内容。</p>'
        +     '<p>如果你提交的文章链接经关键词检测涉及以上内容，将不会返回自动获取标题的结果。在进一步确认核实后，<strong>你的 IP 地址（段）将会被封禁</strong>。</p>'
        +     '<p>如果仍然有人继续尝试违反这一规则，不排除考虑关闭这一功能的可能性。</p>'
        +     '<p><strong>我们已经警告过了。</strong></p>'
        +     '<hr>'
        +     '<blockquote>'
        +         '<p>账号涉及虚拟货币相关的发行、交易与融资等内容，例如提供交易入口、指引、发行渠道引导等，包括但不限于以下类型：</p>'
        +         '<p>……</p>'
        +         '<p>账号提供与数字藏品二级交易相关的服务或内容的，也按照本条规范进行处理。</p>'
        +         '<p>一经发现此类违规行为，微信公众平台将根据违规严重程度，对违规公众账号予以责令限期整改及限制账号部分功能直至永久封号的处理。”</p>'
        +         '<p>——<a href="https://mp.weixin.qq.com/mp/opshowpage?action=newoplaw#t3-3-24" target="_blank">《微信公众平台运营规范》3.24 虚拟货币及数字藏品交易行为</a></p>'
        +     '</blockquote>'
        +     '<p>在添加相关限制前，将这个功能用于数字藏品相关的请求数占到了三分之一甚至更多 (　^ω^)</p>'
        + '</div>',
        '使用须知',
        function () {
            if (Date.now() - t < 10000) {
                return mdui.snackbar('请阅读使用须知至少 10 秒');
            }
            var requestDialog = new mdui.Dialog('#request');
            mdui.prompt('公众号文章链接（请勿提交数字藏品相关内容）', function (value) {
                var xhr = new XMLHttpRequest;
                xhr.open('GET', 'https://i.akarin.dev/wmsproxy/?url=' + encodeURIComponent(value)); //获取标题和封面的服务器
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var result = JSON.parse(xhr.responseText);
                        document.getElementById('requestAction').innerText = 'OK';

                        if (requestDialog.getState() == 'opening' || requestDialog.getState() == 'opened') {
                            if (typeof(result) != 'undefined' && result.success) {
                                document.getElementById('configArticleTitle').value = result.title;
                                document.getElementById('articleTitle').innerText = result.title;
                                document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + result.cover + '\")';
                                document.getElementById('requestResult').innerText = '获取成功！(ゝ∀･)';
                                document.getElementById('requestResultContent').innerHTML = '标题：' + result.title + '<br>封面：<a target="_blank" href="' + result.cover + '">点此查看</a>';
                            } else {
                                document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                                document.getElementById('requestResultContent').innerHTML = '输入的链接是否为微信公众号文章？<br>（链接通常以 <code>https://mp.weixin.qq.com/</code> 作为开头）';
                            }
                        }
                    } else {
                        document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                        document.getElementById('requestResultContent').innerHTML = '无法连接到服务器。';
                    }
                    requestDialog.handleUpdate();
                }
                xhr.send();
                document.getElementById('requestResult').innerText = '';
                document.getElementById('requestAction').innerText = 'CANCEL';
                document.getElementById('requestResultContent').innerHTML = '<div class="mdui-valign"><div class="mdui-spinner"></div><span class="mdui-m-l-2">获取中…… (oﾟωﾟo)</span></div>';
                mdui.updateSpinners();
                requestDialog.open();
            }, function () {});
        },
        function () {},
        {
            history: false,
            modal: true,
        },
    );
}

//删除所有发表的九宫格图片
function clearMultiImage() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('image' + i).style.backgroundImage = '';
    }
}

//将时间转换为微信中显示的格式
function getTimeString(currentDate, specificDate) {
    var cd = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000 - (currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    var sd = new Date(specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000 - (specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    if (cd.getTime() == sd.getTime()) {
        return ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else if (cd.getTime() - sd.getTime() == 60 * 60 * 24 * 1000) {
        return '昨天 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0'
