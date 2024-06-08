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
        return '昨天 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else {
        return specificDate.getFullYear() + '年' + (specificDate.getMonth() + 1) + '月' + specificDate.getDate() + '日 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    }
}

//复制短链接
function copyGitLink() {
    document.getElementById('gitLink').style.display = 'block';
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('gitLink'));
    var selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('Copy');
    selection.removeAllRanges();
    mdui.snackbar({
        message: '已复制到剪贴板～( っ*\'ω\'*c)'
    });
    document.getElementById('gitLink').style.display = 'none';
}



var commentList = [];

//添加评论
function addComment(avatar, name, content, date, reply) {
    commentList.push({
        avatar,
        name,
        content,
        date,
        reply,
    });

    var tr = document.createElement('tr');
    tr.innerHTML = '<th>' + commentList.length + '</th><th>' + name + (reply ? ('（回复' + reply + '）') : '') + '</th><th>' + content + '</th><th>' + date.toLocaleString() + '</th>';
    document.getElementById('configCommentList').append(tr);
}

//删除（最后一条）评论
function removeComment() {
    if (commentList.length) {
        commentList.pop();
        document.getElementById('configCommentList').removeChild(document.getElementById('configCommentList').lastChild);
    }
}

//替换表情文字和换行符为对应的HTML标签
function emoticonReplace(text) {
    text = text.replace(/\r?\n/g, '<br>');
    for (var i = 0; i < emoticon.length; i++) {
        text = text.replace(new RegExp(emoticon[i].name, 'g'), '<img class="emoticon" src="' + emoticon[i].URL + '">');
    }
    return text;
}

//生成随机姓名，数据来自于faker.js
//https://github.com/Marak/faker.js/blob/master/lib/locales/zh_CN/name/index.js
function randomName() {
    var firstName = ["王","李","张","刘","陈","杨","黄","吴","赵","周","徐","孙","马","朱","胡","林","郭","何","高","罗","郑","梁","谢","宋","唐","许","邓","冯","韩","曹","曾","彭","萧","蔡","潘","田","董","袁","于","余","叶","蒋","杜","苏","魏","程","吕","丁","沈","任","姚","卢","傅","钟","姜","崔","谭","廖","范","汪","陆","金","石","戴","贾","韦","夏","邱","方","侯","邹","熊","孟","秦","白","江","阎","薛","尹","段","雷","黎","史","龙","陶","贺","顾","毛","郝","龚","邵","万","钱","严","赖","覃","洪","武","莫","孔"];
    var lastName = ["绍齐","博文","梓晨","胤祥","瑞霖","明哲","天翊","凯瑞","健雄","耀杰","潇然","子涵","越彬","钰轩","智辉","致远","俊驰","雨泽","烨磊","晟睿","文昊","修洁","黎昕","远航","旭尧","鸿涛","伟祺","荣轩","越泽","浩宇","瑾瑜","皓轩","擎苍","擎宇","志泽","子轩","睿渊","弘文","哲瀚","雨泽","楷瑞","建辉","晋鹏","天磊","绍辉","泽洋","鑫磊","鹏煊","昊强","伟宸","博超","君浩","子骞","鹏涛","炎彬","鹤轩","越彬","风华","靖琪","明辉","伟诚","明轩","健柏","修杰","志泽","弘文","峻熙","嘉懿","煜城","懿轩","烨伟","苑博","伟泽","熠彤","鸿煊","博涛","烨霖","烨华","煜祺","智宸","正豪","昊然","明杰","立诚","立轩","立辉","峻熙","弘文","熠彤","鸿煊","烨霖","哲瀚","鑫鹏","昊天","思聪","展鹏","笑愚","志强","炫明","雪松","思源","智渊","思淼","晓啸","天宇","浩然","文轩","鹭洋","振家","乐驹","晓博","文博","昊焱","立果","金鑫","锦程","嘉熙","鹏飞","子默","思远","浩轩","语堂","聪健","明","文","果","思","鹏","驰","涛","琪","浩","航","彬"];
    return firstName[Math.floor(Math.random() * firstName.length)] + lastName[Math.floor(Math.random() * lastName.length)];
}

//在已选择的单张图片上添加播放视频的图标
function addPlayIcon() {
    Promise.all([
        new Promise(resolve => {
            var img = new Image;
            img.crossOrigin = 'anonymous';
            img.onload = function () { resolve(img); };
            img.src = document.getElementById('image').src;
        }),
        new Promise(resolve => {
            var img = new Image;
            img.onload = function () { resolve(img); };
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUAAAAAAADV1dX19fX4+Pj8/PzNzc2goKBAQEDy8vLLy8u/v7/d3d1qamrr6+vw8PDk5OTd3d3n5+eKiorW1tbw8PDt7e3h4eHm5uba2trq6ur09PTn5+exsbHl5eXi4uLj4+P///+1KpiJAAAAIXRSTlMzAJnY5fIUZkDJjYBKTZvMsqWNWSa6rFuOS7/Ie3NrNkgRMr3KAAAD0UlEQVR42uSX2ZaqMBBFq0EyGcBGRtuh+f+fvHRKBG3xUlTwpc+DspaS7JzUkMDHEonvY1ZqnbZOqdZldvwWi4YiA4iq1lH7VJGuKxIFHcAmYfsfhYnF//oHqMqonaWorPwD5MmmJWiT5V4BbPFodBoEUsoYOsXdQxCkj5tTWG8Ajb5b3MFIeCppDnc26cYLgB1Pn5o9vNTehGMEywbIv0a+GwUzpMYMXzkLQGRDaO9imK14NyRMJpYD2M1t440CklQwvGuXAiS3IbawQNsbQiKWAFzC3vxAwSKpIOqj50IHOPcv7xQsltr1izhTAZLefQksyU2/DSQA0Ve+TwVMqc++Mor5ACK8GncCDzpF10AQ8wCG+cMYvCgOe4J5APn1/zvwpt00AUyu34BHmUkCmJp/C161nSIAxvwMgmmAgjY/naB4DZBQ56cTJK8AzvT56QTnaYBLRI9/ei5ElykAERLyn1EPwimABH+GFYVLTJ4DWDQohhUV4ybbZwACG+cJVtUJm7x4ApBh/4WVhd05+w2QI5qClaXQ6PwXAJ7/JawuifeFRwBLy0B+LtoHAO0yQMEbpFwm6HuAxlEF8BYFbrLmDkBTI5Afh3oMYOk9iN+V7AigcAbA2+QsKAaAnBEBjCjIbwAZLQWk8pMI2Q1gQynC2wgvTPxasOkBKmfIzC6493JljN0o1RWgpBwDguHWyD4YlFcAtyGGAsA3wbiwQwAsAooCwDdBYSlwAAnuABEATWDuQeIA3KOhAfBNMG7ZPwDCjbSnAfBNwGwSHUCFZZgKMJjAKcdVB1D/PByWA7ThHpbo0HaqPwA7sWEALOwiBnsyYBWQVAC+CRIrAWAMAhmAbwJGITRuBWwANIEehQ0cf75SOgDfhLTtdIQa36UC8E3AkWoo+QCDAjJACRqTgA2ASmNiGmjPAG1kqAApA4BngsTwx+OYR4A22lKOZYCf/gAIhq4HEPx5gH/d20EKwjAURVGsGThScdj9L1Twg5MqNDTJ+WlXUGia/Lx3b80n8IuQ/4Z8I+JbMT+M+HHMB5LPSFbcSOaHUj6W+4sJv5rxyym/nvOAIiKah4locoRUPKbzQSWPaiOsfrqw+nJHcX2ewoJXNr60GlzbRXOZq7jk1e3I8nqNFZCtvvcAA0c4PMTCMZ4RINPtL8gUzyiUKy3M5nE+DzR6pNNDrRzr7QQ2LzvB5niDjmj3HHC7x/u94OAVj2aSy/qVXObTfJqKTg1Ur+WI6jWv7OZ1v43weK0VHs+gfP6UXstWei3dpNdYC69a7fds4nMG9TuD/N5B/38D8Sl28Qj+OSkAAAAASUVORK5CYII';
        }),
    ])
        .then(function (/** @type {HTMLImageElement[]} */ imgs) {
            var sourceImg = imgs[0];
            var playIcon = imgs[1];
            var canvas = document.createElement('canvas');
            canvas.width = sourceImg.width
            canvas.height = sourceImg.height
            var ctx = canvas.getContext('2d');
            ctx.drawImage(sourceImg, 0, 0)
            ctx.drawImage(playIcon, sourceImg.width / 2 - canvas.width / 4 / 2, sourceImg.height / 2 - canvas.width / 4 / 2, canvas.width / 4, canvas.width / 4);
            canvas.toBlob(function (blob) {
                URL.revokeObjectURL(document.getElementById('image').src);
                document.getElementById('image').src = URL.createObjectURL(blob);
                console.log(URL.createObjectURL(blob));
                mdui.snackbar('已添加视频播放图标');
            });
        })
}

//设置界面显示
document.getElementById('configTypeText').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeWebsite').onclick = function () {
    document.getElementById('configWebsite').style.display = 'block';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'flex';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeSingleImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'block';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'block';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeMultiImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'block';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'block';
}

//设初始值
var date = new Date();
var dateString = date.toISOString().substring(0, 10); 
document.getElementById('configScreenshotDate').value = dateString;
document.getElementById('configScreenshotTimeHour').value = date.getHours();
document.getElementById('configScreenshotTimeMinute').value = date.getMinutes();
document.getElementById('configPostDate').valueAsDate = date;
document.getElementById('configPostTimeHour').value = date.getHours();
document.getElementById('configPostTimeMinute').value = date.getMinutes();
document.getElementById('configCommentDate').valueAsDate = date;
document.getElementById('configCommentTimeHour').value = date.getHours();
document.getElementById('configCommentTimeMinute').value = date.getMinutes();
document.getElementById('configLike').value = Math.floor(20 * Math.random());

//检验数值是否合法
document.getElementById('configPostTimeHour').addEventListener('input', function () {
    if (document.getElementById('configPostTimeHour').value > 23) {
        document.getElementById('configPostTimeHour').value = 23;
    } else if (document.getElementById('configPostTimeHour').value < 0) {
        document.getElementById('configPostTimeHour').value = 0;
    }
})
document.getElementById('configPostTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configPostTimeMinute').value > 59) {
        document.getElementById('configPostTimeMinute').value = 59;
    } else if (document.getElementById('configPostTimeMinute').value < 0) {
        document.getElementById('configPostTimeMinute').value = 0;
    }
})
document.getElementById('configScreenshotTimeHour').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeHour').value > 23) {
        document.getElementById('configScreenshotTimeHour').value = 23;
    } else if (document.getElementById('configScreenshotTimeHour').value < 0) {
        document.getElementById('configScreenshotTimeHour').value = 0;
    }
})
document.getElementById('configScreenshotTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeMinute').value > 59) {
        document.getElementById('configScreenshotTimeMinute').value = 59;
    } else if (document.getElementById('configScreenshotTimeMinute').value < 0) {
        document.getElementById('configScreenshotTimeMinute').value = 0;
    }
})
document.getElementById('configCommentTimeHour').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeHour').value > 23) {
        document.getElementById('configCommentTimeHour').value = 23;
    } else if (document.getElementById('configCommentTimeHour').value < 0) {
        document.getElementById('configCommentTimeHour').value = 0;
    }
})
document.getElementById('configCommentTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeMinute').value > 59) {
        document.getElementById('configCommentTimeMinute').value = 59;
    } else if (document.getElementById('configCommentTimeMinute').value < 0) {
        document.getElementById('configCommentTimeMinute').value = 0;
    }
})
document.getElementById('configLike').addEventListener('input', function () {
    if (parseInt(document.getElementById('configLike').value) < 0) {
        document.getElementById('configLike').value = 0;
    }
})

//上传图片
document.getElementById('configAvatar').addEventListener('change', function () {
    avatarFile = this.files[0];
    document.getElementById('avatar').style.backgroundImage = 'url(\"' + URL.createObjectURL(avatarFile) + '\")';
});
document.getElementById('configArticleIcon').addEventListener('change', function () {
    document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
});
document.getElementById('configSetSingleImage').addEventListener('change', function () {
    document.getElementById('image').src = URL.createObjectURL(this.files[0]);
});

for (var i = 1; i <= 9; i++) {
    !function (i) {
        document.getElementById('configSetMultiImage' + i).addEventListener('change', function () {
            document.getElementById('image' + i).style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
        });
    }(i);
}

document.getElementById('generate').addEventListener('click', function () {
    // 是否使用7.0以上版本白色界面？
    var useWhiteUI = document.getElementById('configUIWhite').checked;
    if (useWhiteUI) {
        document.getElementById('fakeWechatMoment').classList.add('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/black_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/black_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/black_icons/emoticon.svg';
    } else {
        document.getElementById('fakeWechatMoment').classList.remove('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/white_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/white_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/white_icons/emoticon.svg';
    }

    //设置生成的图片上的各种属性
    document.getElementById('name').innerText = document.getElementById('configName').value;
    document.getElementById('text').innerText = document.getElementById('configText').value;
    document.getElementById('articleTitle').innerText = document.getElementById('configArticleTitle').value;
    if (document.getElementById('configLocation').value == '') {
        document.getElementById('location').style.display = 'none';
    } else {
        document.getElementById('location').style.display = 'inline';
        document.getElementById('location').innerText = document.getElementById('configLocation').value;
    }

    //表情替换、朋友圈话题和URL变蓝色
    document.getElementById('text').innerHTML = emoticonReplace(
        document.getElementById('text').innerText
            .replace(/((?:^|\s)#\S+(?:$|\s))/gm, '<span style="color:#576b95">$1</span>')
            .replace(/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, '<span style="color:#576b95">$1</span>')
    );
    console.log(document.getElementById('text').innerHTML);

    //九宫格模式设定
    if (document.getElementById('configTypeMultiImage').checked) {
        for (var i = 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'inline-block';
        }
        var multiImageCount = 0;
        for (multiImageCount = 9; multiImageCount >= 1; multiImageCount--) {
            if (document.getElementById('image' + multiImageCount).style.backgroundImage != '') {
                break;
            }
        }
        //四张图的修正
        if (multiImageCount == 4) {
            document.getElementById('image5').style.backgroundImage = document.getElementById('image4').style.backgroundImage;
            document.getElementById('image4').style.backgroundImage = document.getElementById('image3').style.backgroundImage;
            document.getElementById('image3').style.backgroundImage = '';
            multiImageCount = 5;
        }
        for (var i = multiImageCount + 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'none';
        }
    }

    if (document.getElementById('configTopBarCustom').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'flex';
        document.getElementById('topBarCustomImage').src = URL.createObjectURL(document.getElementById('configTopBarCustomImage').files[0]);
    } else if (document.getElementById('configTopBarIos').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'flex';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('topBarIconIos').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ios_status.svg';
        document.getElementById('fakeWechatMoment').classList.add('iosStyle');
    } else {
        document.getElementById('topBar').style.display = 'flex';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('fakeWechatMoment').classList.remove('iosStyle');
        //设置顶栏图标
        var iconWifi = [4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 0];
        var iconSignal = [4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 0];
        var iconBattery = [20, 30, 50, 60, 80, 90, 'full'];
        if (document.getElementById('configTopBarStatusIcons').checked) {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_' + iconWifi[Math.floor(Math.random() * iconWifi.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_' + iconWifi[Math.floor(Math.random() * iconSignal.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_' + ((Math.random() > 0.75) ? 'charging_' : '') + iconBattery[Math.floor(Math.random() * iconBattery.length)] + '_48px.svg';
        } else {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_4_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_4_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_full_48px.svg';
        }
        var iconApp = [['qq', .5], ['wechat', .5], ['cloudmusic', .25], ['coolapk', .15], ['tieba', .15], ['acfun', .15]];
        iconApp.sort(function () { return (Math.random() > .5) ? 1 : -1 });
        document.getElementById('topBarAppIcons').innerHTML = '';
        if (document.getElementById('configTopBarAppIcons').checked) {
            for (var i = 0; i < iconApp.length; i++) {
                if (Math.random() < iconApp[i][1]) {
                    document.getElementById('topBarAppIcons').innerHTML += '<img class="topBarIcon" src="mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/app_' + iconApp[i][0] +'.svg">';
                }
            }
        }
    }

    //设置时间
    var configPostDate = document.getElementById('configPostDate').valueAsDate;
    configPostDate.setHours(document.getElementById('configPostTimeHour').value);
    configPostDate.setMinutes(document.getElementById('configPostTimeMinute').value);
    var configScreenshotDate = document.getElementById('configScreenshotDate').valueAsDate;
    configScreenshotDate.setHours(document.getElementById('configScreenshotTimeHour').value);
    configScreenshotDate.setMinutes(document.getElementById('configScreenshotTimeMinute').value);

    document.getElementById('time').innerHTML = getTimeString(configScreenshotDate, configPostDate);
    document.getElementById('topBarTime').innerText = document.getElementById('topBarTimeIos').innerText = ((document.getElementById('configScreenshotTimeHour').value < 10 && !document.getElementById('configTopBarIos').checked) ? ('0' + document.getElementById('configScreenshotTimeHour').value) : document.getElementById('configScreenshotTimeHour').value) + ':' + ((document.getElementById('configScreenshotTimeMinute').value < 10) ? ('0' + document.getElementById('configScreenshotTimeMinute').value) : document.getElementById('configScreenshotTimeMinute').value);

    if (document.getElementById('configApp')) {
        if (document.getElementById('configApp').value.match(/视频号 *· *(.+)/g)) {
            document.getElementById('time').innerHTML += ' <span style="color:#576b95">视频号 · ' + /视频号 *· *(.+)/g.exec(document.getElementById('configApp').value)[1] + '</span>';
        } else {
            document.getElementById('time').innerHTML += ' ' + document.getElementById('configApp').value;
        }
    }

    //加入点赞头像
    var avatarSource = avatarURL.concat();
    var avatarUsed;
    document.getElementById('likeAvatarList').innerHTML = '';
    for (var i = 0; i < parseInt(document.getElementById('configLike').value); i++) {
        if (i === 0 && document.getElementById('configFirstAvatar').checked) {
            avatarUsed = document.getElementById('avatar').style.backgroundImage.replace(/url\("(.+?)"\)/g, '$1');
        } else {
            if (avatarSource.length <= 0) {
                avatarSource = avatarURL.concat();
            }
            var avatarUsedIndex = Math.floor(Math.random() * avatarSource.length);
            avatarUsed = avatarSource[avatarUsedIndex];
            avatarSource.splice(avatarUsedIndex, 1);
        }
        var div = document.createElement('div');
        div.setAttribute('class', 'likeAvatar squareImage');
        div.setAttribute('style', 'background-image:url(\"' + avatarUsed + '\")');
        document.getElementById('likeAvatarList').appendChild(div);
    }

    //加入评论区
    document.getElementById('commentList').innerHTML = '';
    if (document.getElementById('configShowComment').checked && commentList.length) {
        document.getElementById('comment').style.display = 'block';
        for (var i = 0; i < commentList.length; i++) {
            var comment = commentList[i];
            document.getElementById('commentList').innerHTML += ''
                + '<div class="commentItem">'
                +     '<div class="commentAvatar squareImage" style="background-image: url(' + comment.avatar + ');"></div>'
                +     '<div class="content">'
                +         '<span class="commentName">' + comment.name + '</span>'
                +         '<span class="commentTime">' + getTimeString(configScreenshotDate, comment.date) + '</span>'
                +         '<div class="commentText">' + (comment.reply ? ('回复<span style="color:#576b95">' + comment.reply + '</span>: ') : '') + emoticonReplace(comment.content) + '</div>'
                +     '</div>'
                + '</div>';
        }
    } else {
        document.getElementById('comment').style.display = 'none';
    }

    //显示用于生成图片的div
    var height = Number(document.getElementById('configHeight').value);
    document.getElementById('fakeWechatMoment').style.display = 'block';
    document.getElementById('fakeWechatMoment').style.width = '1080px';
    document.getElementById('fakeWechatMoment').style.height = ((window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') > height) ? window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') : height) + 'px';

    //点赞数为0时隐藏点赞区
    document.getElementById('like').style.display = parseInt(document.getElementById('configLike').value) ? 'block' : 'none';

    //修正底部位置
    var offset = 26 + Number(window.getComputedStyle(document.getElementById('topBar')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('header')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('main')).height.replace('px', ''));
    document.getElementById('footer').style.bottom = ((offset < height - Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', ''))) ? (-height + Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', '')) + offset) : 0) + 'px';

    //按钮上的提示
    document.getElementById('generate').setAttribute('disabled', '');
    document.getElementById('generate').innerText = '生成中...';

    // 就算添加了对删除原作者信息和源代码链接的检测还是有人尝试把它改掉，嗯……
    // 另外Selenium之类的东西也是禁止的
    // 用javascript-obfuscator（https://obfuscator.io）对这部分代码加密了，但是仍然是防君子不防小人
    // 如果你只会下载jsDelivr压缩后的JS，你也看不到下面这些注释掉的未加密的代码
    // 如果你想到了可以找到这些未加密代码，我相信你也不会做出删除原作者信息这样的事情
    // 混淆配置：
    // String Array Threshold: 1
    // String Array Calls Transform: true
    // String Array Encoding: RC4
    // Identifier Names Generator: Mangled-shuffled
    var T=u;(function(c,e){var q={c:'eiv]',e:0x1d1,v:'7Q1l',M:0x248,R:0x227,N:0x25e,m:'(ba)',o:'nbTn'},F=u,v=c();while(!![]){try{var M=-parseInt(F(0x24a,q.c))/0x1+parseInt(F(0x271,'UPHT'))/0x2*(-parseInt(F(q.e,q.v))/0x3)+-parseInt(F(0x213,'$(6$'))/0x4+parseInt(F(q.M,'ZFLH'))/0x5+-parseInt(F(q.R,'nbTn'))/0x6+-parseInt(F(q.N,q.m))/0x7*(parseInt(F(0x23d,q.o))/0x8)+parseInt(F(0x25a,q.o))/0x9;if(M===e)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(n,0xd55f3));function n(){var g=['a8ofe8kMWRK','htddJCozW5/cUI8MW5JdGmk0W7ZcMSoklq','W6ddGSk4z8o3WR3cOSkhWRtdNKRdIeBcGW','WPvQW4vDqKyoW7a','xmowW53cUaBdTHDzWQ7dK8kjWO9xoW','W77dPSkVW44','W7zNnIxdG0RcPmklWP8','m8krW6fEk8kvtmkuwH54W6VcRv7cIYG','cCoTzZBdICoDWO7dN8kakmoDFbKf','W7C+WPpcVmk/baVcRrhdQdSVW7lcP8oaCdH2WQRdR8kqWOtdGG','ewpdKYNcOmo0W4ulrmou','W4tdNtyUfJVcOKtdGSovWRvV','FhxdQ8oLu8ksWPpcNG','WPizz8kUW4hcLCkYw8kPW6pdMZCSl1iLAfmUW47dMWzdW7O3','WQGuWR/dOZv8W53cGZO','mZT1WQmocu0U','WRCdWRJdOq','htddJCozW5/cUI8M','rxddNSks','W65maN0WnX7cTeFdV8oXW7lcI8kJ','uSk/WR3dJ8kRWQZcG1qDfSkqb8kkWRxcT1ZcTuep','a0jFCh4EF8klW4WGEMxdUG7cUG','s8oXpmksCSoU','W6r6W6eLWRTJW64CFSo/g8ongmoGFMtdUSk9WQm','WRFcVKPvdL8zWPhdIflcJCkLW7rfWOSjAeK6WQFcRmksgCkin8k6xa','x8oCW4RcIaFdTHri','ySk2W55QuLm','W6xdSCkMW41uW7y1WQm','pComWQTUsG3dUab7WOPcWOzgW6LAwq','W63cHYdcN8oFpvaftf/cML5Ors4','WP/cQe1DgvGgWOhdLW','WORcHLNdGIRcVetcVmoiEq','WRpdGaiiW7WmiNhcJNnP','WPG9e+ITKEs5KEILK+wlPEMyKUwnGos+G+IcJUEAGowhHos9QEAdPEwqO+wpQos6UoILR+EzV+ApPEwtQUA5LUs7PUEHVoEBPoMrUoApKoobG8oLCWNcHCouW5VcLoI9L+AzQ+w8HoAYG+AFKEs4NoIcUUE/OEwjS+s4I+EXKUEKUoEzS+IHP+s7H++9Rmk9W6hdKbGjFCoKs8oUvNBdOqVcTSkXtSoLr8k7W7BdLg8xn8knD8oRo8oskmoXqWSs','WQOJn8kCW4JcKSk7tmkUW6hdVdWKoa','vmkQWOFdQmolW68','kJRdN8ozW5FcStuNW7a','WOmhW5hdTv0','W6HDgvO','D8k2W4bkxuieW6NdQ8o3lSkJtSoE','Fw/dKCoXpK/cV8kQWRS','WQKqWRhdSIi','WRWylhezbt3cMW','55wD5OIN5As46lww','iCkwW7PIk8k2tG','a0jFCh4ECmkCW4aX','WRqUwSoCBSoQumoJWQ3dH8oCWQabja','wmoCW4FcMWpdTa','mCo4EXldI8omWOZdLW','WRtdJG0rW4eblwS','hJRdMSoPW57cUIW3W7pdMmktW6JcTSoa','C3/dTSo0t8ksWORcNGBcR8oyW7BdK34','rCkGWOpdQ8obW7ZdH2ddQ3iHdSo2la','WRaKqmo/A8oOACoPWRpdSCo/WQSBnmofgCoItG3dU8oXCcK','W7L2DSoVWPtdGSoJg8kxW6tdUYqBga','W7X0DmoTWPFdGmoKymksW4BdQr01','W6aTWP7cVSkFeqBcUHRdRZOU','WQ8sWR8QWQ0VW7iSW5KSpfi2WRtcHw3dNSo3','tepdI0xdQCozWReiWOurWQRcVa','xCkaW6xcUCkEWRKbWO7cJCkTW78RpfBdUq','WOWuwCo8ymoRt8oVWRxdLSoSWOyTnSofaCoIxdddVq','fvZdU8kjWPtcSfmFWO4','WQtcQufhguq','WPmSWRaJWRSe','W6hcGt3cMCojDvjpxvFcGKn8u2xcUsFdNrnaW4JcTLD8pN8Ua8oNytpcICofeIBdMCoVW5ZcR38dW7j0CvRcM0fGitCGWPXMW5pcJG','W4NdI8k9W41yW7SYWQFdG2RcGc/dT8kYWQPWWRBdVCoFWRa','WPaEW4NdPuPFWRhdKq','fLhdVmkd','se7dMMFdTSoiWQC','z2S3x8k3hSkwwSkIWP43W5u','rqTuahCQjGRcLu0eE8ojW5D9q8kuWOBdQKhcGq','AgeWASkTc8kjvG','z27dQSo4u8kuWPFcNrS','W6CJWPhcP8kHeqtcQW','z8oDWRjUiW','W50RFCobW5DgEa','wvvCWO8No20nEmkWW40xDMatzXXvWQO','mCoxDqVdGCokWORdJmkllSoaCd4wW6rMgItcMti','W5BcQI/cKCoEprqwx0ZcQv5NrJNcUZJdGfLW','W5aLsmoi','W6JcLYBcNmoocriptLVcHa','WP58oCkAWOGhlZ1GWRJcHSkAwq','bvZdRCkOWORcVeGFWPiJW7GtbNC','W5hcHWRcVhjwy8kjhSkVdCk7WQVcTh9GbSklW5/cJHlcOLGjE8oeW4rD','WR1YAUs8OEwnNUs7HUMdIoI8QConymkaW5BcVmkTumoeWRZdT8kun8kwW6ygW7q2EelcTCo6W6tdNCoheSksWOi9WOffWO50W7eEW7yAyWtcMNxdJCkeWOjRu07cGSoxW5bDW5aPWQPYASopqrbUdmkiFSo2dSk6WQGIWOGgdCkHWPVdV1aBz8okW5pcOmkZvhzufsddPuddUSkWW63cPICWW704xmkEWRZdI1RLKiNKVj7OG4ZLJiRPPA9gw0FcUU+/NrBcJWNcTG','oSkbW6Tn','WOeoW5JdRG','W7SswSodpSk2WRCFWQNcUSo5j8oeW6VdUmogA8ogW6lcNCkxWPxcPq','W6Pbf0OFprFcTgJdVW','WPDSW4Hjq08z','WQ5AW4jArLufW7BdPaiaW7LGWRVdQ8kqW4bt','WPmnW4RdUbyfW6BcJ8k6W67cVJ/cTW','WQ4PlCk/W43cKmkcrSkWW5FdNZCSlfScAhK4W5G','FtfxihKRoqBcJvW0xCo1W50','WQBcUKNdNcZcT3/cRmovsrZcQWddIqRcH8olW7NcTrxcKay','W6tcLd3cISos','zSk+ohj/WRKwxG','WRvzsoIVJ+s5KEINK+EMIoMATEM7UowsHUwpPUAHI+A2IEodHw/cSNJdRq','cmkgWP/dI17cQXnwWRddO8khWQe','sg/cNmkBWOldQhnGW43dJSkqW7NcUSoP','WPOwW5JdRG','ASkDW7i8lv/cQvPkWPXoWOfUW4e','WQ0uWRZdOWzMW6/cHZXCwKyv','hwHTaCkOWQT0WRBdGa7cLmokk3NcKSoyfW','WR4Jn8kqW5dcKSk7','W6xdSCkMW41uW7y1WQpcMgRcHbhdVSkXWQPOWQy','eCkoWOxdImoDW7hdOG','W4WVESonW5m','hwHTaCkOWQT0WRBdGb7cJmoCnw3cG8oCf8k0','tSk7WPNdVCoBWQhcPcddR3OHd8oSimkUzSosDXlcOmkXl2PZWQWPlColW4lcMhaOW40pW61LW7r3WPyGFfyiWOrZW6hdJwKSmCoDCSoUpaO','CMvRWOS/p1y2qq','W7ePWP/cVCk6esVcQWddTcyHW6tdVCoc','W4CLWPpcVSkJeW','W5JdUmkIs8o8WRdcU8kpWRVdMg0','W4WHymoiW5jxsd1LWOpcUmk2za','jGddNCojW57cUI87W6JdGCkoW6tcKCotk8k3vCkjr8kf','vSoPeWvsWQVdSvtdOq','C3OIFCkO','uSk/WQZdKSkTWRRcMeSoaCk9jmkjWRRcUa','W5WtWP7cS8k/ad3cVGddRZ0cW73dRmovBq','WONcKCk3WQHDm8koWQW5yqPvWPaUW7hdS8kmd2lcGmocW4ZdHa','l8ocWPn/BWhdTq8','CfetpXxdPGe','AmkyW7y9kvddSGjQWRPdWR4','wmoIcsvmWPRdUuNdU8kurGBdJmot','vmoDW4xcKGVdTW','W77cKcVcJCoijGSfsh3cMuzKucxcVG','fKXDy3i','W4O2ESolW4LEFbG','zSkWW7hcQCkrWRGDWPpcVSkKW6GzlfBdUSoqv8oiW77dM8kz','WRaKqmo/A8oODCoJWQRdLmo2WQ0','zmkoWR/dKSk3WPhcJa','W65aW67cSN8TWP7cGr1CqeCm','W61gavyWprlcTq','W4JdMb/cHxhdOspcVSoTDXRcVba','cZRdNCozW57cQW','tCohWQldMmopxcGabSoDvSoV','W6JcNIJcM8otivmex0G','s03dNCotECkHWRFcRsFcRCoOW4pdQKVcLIxdPaKMWRRdKG','lmkJWOROR7JKUlZOPQBKVjBNLQtcPCoqcCk2ySouvHRdQspNRQhML4xLVlJOHP/LIjpMI67PHjJNLkpMI7FMI53LMkNJGzm/dCkhyW','W6hcMJRcNCoulHaf','zSkYW5H6va','ASkfWQ/dTSk7WQRcMeSAeCk7bW','WOhdMmourvldNCo1l1DAWOldMHWVW5/dJCoVWQyqEmoBEvS','EYVdMJ3dRK4Wy29iru8BW7ddQmkTWQK0WOeb','munOemkQ','svldKgu','cunFC2uTw8kfW5K','qSoSjSkqDmoOuh4','W73cNsZcHW','W6zNoItdG0lcPSkl','W7tdJ8kTumo+WORcQSkrWRxdN3RdKMRcTYy4fxq','B8kDW7u9lv3cRLPnWO9kWOHDW4G','W4SNFCopW5LCEba','W6aTWP7cVSkPedNcUHJdOYeQW6tdPa','teOtmbVdRqX5W68','WQhdLCkIW61pW7uP','ph59','EYVdNJ3dOe8Sy2XaAgugW6tdQmkLWQKWWRSdjW','hJRdGmojW4dcVJu3W7K','sCklg8k6WQRdHq','W6tdJ8kPqCoWWR3cQW','W6RcPSk7WRiypSklWRGNtx4ZWRGvW5BdV8ocfgNcLmoiWPW','sSkDW6u','WPlcIxrsqMZcOvFdPCooWQbVWRZdMa','yMvmWP8Mo20qsmkXW7CFzw8l','xmowW4FcMbJdSG5z','ASkfWQ/dSSkJWRVcH0Cwemkng8k1WRa','DwTzWO8','WQRcS3DYtg3cVLVdVCoFWPbjWOBdNYNcUmo2WRe7WQpcTq','W5XaW6yfWRTJW60qzCoMbSorj8oL','W6RcMIFcJ8otkcKpsNZcL1LaxJG','bg3dKtRcRa','W6r6W74HWQrYW5CuF8o7nSo4hmoUF2hdRW','E2RdVCo/','W65aW6VcVN8NW4xcKafswg0','dJRdJmoiW4dcTJC3W6/cGCk0W6FcNSoilmk3uCkC','WOhcIZ3cQ19EFSkk','WRGuWQNdGITWW4BcGYzjtw0qBq','W5WtWPtcQSkObGpcQrhdTbaMW6FdQmolBc1QWRO','jSkBW6Tf','W4WSxSoPk8k8WPueWRdcR8oUcSodW7e','W6BdK8oowfddLCouaL9FWP7dHGG','4PYU5Bcf6ycG5PUK44kW5A+M4PYR','WQhcRCo6WP4iWQKrWP7dR0BcGXO','WQWzWRZdTsjhW47cLsDiFxC8wCk1dmkAWPC','WOO9q8ob','EmoljCkqzmoIq3VcPmoGW5pdP2OFW5yixHbhuCo0e8o5i8o8W5HS','WPdcH0JdLthcLNa','W5tcG8k/WQOCiG','WPidW4NdHvruWR3dMmoIWRtcJdpcNe4','WQ0uWRFdOIrH','D3xdTSo3vmkuWR/cIXi','cCkBW6BcR8kjhGS5pSoHu8oG','cJRdMSoTW4BcQZm7W7/dMCkLW7q','EYVdJsRdQ107EevaBfSzW7ldU8k4WRW','qXhdNr3dRK4ZB3rrwem8W6m','F8oAW4JcKqxdTa','a1xdVmkFWPi','WQRcU8k6W5PFWQe','WQpdGbGb'];n=function(){return g;};return n();}function u(c,e){var v=n();return u=function(M,R){M=M-0x1c1;var F=v[M];if(u['lDlpET']===undefined){var P=function(L){var S='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var b='',a='';for(var A=0x0,H,q,N=0x0;q=L['charAt'](N++);~q&&(H=A%0x4?H*0x40+q:q,A++%0x4)?b+=String['fromCharCode'](0xff&H>>(-0x2*A&0x6)):0x0){q=S['indexOf'](q);}for(var m=0x0,o=b['length'];m<o;m++){a+='%'+('00'+b['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};var t=function(L,S){var b=[],a=0x0,A,H='';L=P(L);var q;for(q=0x0;q<0x100;q++){b[q]=q;}for(q=0x0;q<0x100;q++){a=(a+b[q]+S['charCodeAt'](q%S['length']))%0x100,A=b[q],b[q]=b[a],b[a]=A;}q=0x0,a=0x0;for(var N=0x0;N<L['length'];N++){q=(q+0x1)%0x100,a=(a+b[q])%0x100,A=b[q],b[q]=b[a],b[a]=A,H+=String['fromCharCode'](L['charCodeAt'](N)^b[(b[q]+b[a])%0x100]);}return H;};u['VzkqPf']=t,c=arguments,u['lDlpET']=!![];}var O=v[0x0],T=M+O,x=c[T];return!x?(u['RCvpaj']===undefined&&(u['RCvpaj']=!![]),F=u['VzkqPf'](F,R),c[T]=F):F=x,F;},u(c,e);}function botDetection(){var N={c:'UPHT',e:0x277,v:'b]Zp',M:'s6[j',R:0x203,m:'(ba)',o:'N[Ji',k:'b]Zp',D:'j6ap',K:0x208,E:')DXk',i:'j6ap',f:'yNmN',y:0x229,g:'NO^9',C:0x1fe,B:0x20e,Z:'7Q1l',I:0x1d6,X:0x21c,U:0x252,V:0x264,W:'1URv',s:0x1e0,h:0x25c,G:0x24c,r:0x278,z:'D5Vf',d:0x272,j:0x22b,l:'zq@X',w:'!FS%',Y:0x1cf,Q:'Lalx',J:0x239,n0:'*tLL',n1:'&oN3',n2:0x26f,n3:0x251,n4:'sg%v',n5:0x233,n6:0x25d,n7:0x1e2,n8:'mmlz',n9:0x1fa,nn:0x1db,nu:'zEZ0',nc:'xB8C',ne:0x273,nv:'CWZH',nM:'nbTn',nR:0x245,nF:'zG&q',nP:'L9x[',nO:0x1f3,nT:0x207,nx:0x1dd,nt:0x1ff,nL:'wfwH',nS:'%lc0',nb:'mIoR'},P=u;if(navigator[P(0x1d0,N.c)]||navigator[P(N.e,N.v)](P(0x1ea,N.M)))return!![];var c=[P(N.R,N.m),P(0x1d9,'gW2Y'),P(0x27d,N.o),P(0x219,N.k),P(0x260,N.D),P(0x275,'*tLL'),P(0x22e,'NO^9'),P(N.K,N.E),P(0x285,N.i),P(0x235,'L9x['),P(0x210,N.f),P(0x1c8,'IS5t'),P(N.y,N.g),P(N.C,'z0q^'),P(N.B,N.Z),P(N.I,'zG&q'),P(N.X,'zEZ0'),P(0x243,'%lc0'),P(N.U,'j6ap'),P(0x20f,'sg%v'),P(N.V,N.W),P(N.s,'zq@X'),P(N.h,'*tLL'),P(N.G,'ByQz'),P(N.r,N.z),P(0x1df,N.f),P(N.d,'L9x['),P(N.j,N.m),P(0x240,'yNmN'),P(0x1da,N.l),P(0x238,'zG&q'),P(0x26b,N.w),P(N.Y,N.Q),P(N.J,N.n0),P(0x1fb,N.n1),P(N.n2,'gW2Y'),P(N.n3,'D5Vf'),P(0x215,'CWZH')],e=[P(0x1f2,N.n4),P(N.n5,'Jcp#'),P(N.n6,'cxi#'),P(N.n7,N.n8),P(N.n9,'*tLL'),P(0x220,'ZFLH')];for(var v in e){if(window[e[v]])return!![];}for(const M in c){if(window[P(0x1d3,'L9x[')][c[M]])return!![];}for(const R in window[P(N.nn,'r[fA')]){if(R[P(0x221,'yNmN')](/\$[a-z]dc_/)&&window[P(0x1c5,N.nu)][R][P(0x201,'&oN3')])return!![];}if(window[P(0x242,'$(6$')]&&window[P(0x204,N.nc)][P(N.ne,N.nv)]()&&window[P(0x256,N.o)][P(0x23b,N.nM)]()[P(N.nR,N.nF)](P(0x1e6,N.nP))!==-0x1)return!![];if(window[P(N.nO,'mmlz')][P(0x267,N.Z)][P(N.nT,'UeWh')](P(N.nx,N.m)))return!![];if(window[P(0x20b,'*tLL')][P(0x1c3,N.nP)][P(0x250,'zG&q')](P(N.nt,'gBg(')))return!![];if(window[P(0x222,N.nL)][P(0x1fd,N.nS)][P(0x1fc,N.nb)](P(0x200,'zq@X')))return!![];return![];}function fnv1a(c){var m={c:'N[Ji',e:0x21a,v:'VvxK'},O=u,e=0x811c9dc5;for(var v=0x0;v<c[O(0x1d8,m.c)];v++){e^=c[O(m.e,m.v)](v),e+=(e<<0x1)+(e<<0x4)+(e<<0x7)+(e<<0x8)+(e<<0x18);}return e>>>0x0;}var p=Promise[T(0x20d,'$(6$')]();if(document[T(0x269,'zG&q')](T(0x212,'yNmN'))[T(0x255,'vvW6')][T(0x27e,'ZFLH')](T(0x279,'7Q1l'))===-0x1||document[T(0x1f4,'L9x[')](T(0x1c9,'MsWW'))[T(0x1d2,'UPHT')]!==T(0x22f,'2Kl^')||document[T(0x266,'!FS%')](T(0x1e1,'ZFLH'))[T(0x1c7,'(ba)')]!==T(0x202,'yNmN'))p=p[T(0x205,'gBg(')](function(){var o={c:'QJ%p'},x=T;return Promise[x(0x1dc,o.c)](x(0x1e3,'b]Zp'));});else{if(location[T(0x209,'UeWh')]!==T(0x24b,'yNmN')&&location[T(0x1ce,'ByQz')]!==T(0x1cb,'*tLL')&&fnv1a(window[T(0x1e8,'VvxK')][T(0x254,'mIoR')]||'')!==0xd0ff9774)p=p[T(0x257,'yNmN')](function(){var k={c:0x223},t=T;return Promise[t(0x281,'UPHT')](t(k.c,'VvxK'));});else location[T(0x24e,'yNmN')]!==T(0x21d,'xB8C')&&botDetection()&&(p=p[T(0x276,'MsWW')](function(){var D={c:0x1e5},L=T;return Promise[L(D.c,'2Kl^')](L(0x24d,'QJ%p'));}));}p=p[T(0x218,'xB8C')](function(){var K={c:0x286,e:0x1de,v:'nbTn'},S=T;return html2canvas(document[S(K.c,'j6ap')](S(K.e,K.v)),{'useCORS':!![],'scale':0x1});})[T(0x211,'b]Zp')](function(c){var i={c:0x1ca,e:'sg%v',v:'L9x[',M:0x265,R:0x1c4,f:0x1c1,y:0x217,g:'MsWW',C:0x21f,B:'7Q1l',Z:0x284,I:0x247,X:0x27c,U:'b]Zp',V:0x1d5,W:'VvxK',s:0x287,h:'QJ%p',G:0x270,r:'ByQz',z:0x232,d:'*tLL',j:'j6ap',l:0x1f5,w:0x226,Y:0x274,Q:'UPHT',J:0x241,n0:'8e$]',n1:0x26e,n2:')DXk',n3:'2Kl^',n4:0x1eb,n5:'gW2Y',n6:0x1e7,n7:'xB8C',n8:0x1e4,n9:0x244,nn:'z0q^',nu:'Lalx',nc:0x234,ne:0x21e,nv:0x206,nM:'mIoR',nR:0x23c,nF:0x26c,nP:'gW2Y',nO:'yNmN',nT:0x1d7,nx:'5Mpy',nt:0x1ee,nL:'r[fA',nS:0x20a,nb:0x228,na:0x23f,nA:'r[fA'},E={c:0x249},b=T,e=c[b(0x230,'7Q1l')]();document[b(i.c,i.e)](b(0x261,i.v))[b(i.M,'%lc0')]=e,document[b(i.R,'Jcp#')](b(i.f,'mmlz'))[b(0x283,'eiv]')](b(i.y,i.g),e),document[b(i.C,')DXk')](b(0x26a,i.B))[b(i.Z,'L9x[')](b(i.I,'VvxK'),+new Date()+b(i.X,i.U));document[b(i.V,i.W)](b(0x27b,'UPHT'))&&new mdui[(b(i.s,'r[fA'))](document[b(0x1e9,i.h)](b(0x259,'Jcp#')))[b(i.G,i.r)]();new mdui[(b(i.z,i.d))](document[b(0x286,i.j)](b(i.l,'ByQz')))[b(i.w,'xB8C')]();var v={'name':document[b(i.Y,i.Q)](b(0x1ef,'vvW6'))[b(i.J,'vvW6')],'text':document[b(0x1f0,'z0q^')](b(0x1cc,i.n0))[b(i.n1,'8e$]')],'location':document[b(0x21f,i.n2)](b(0x1f6,i.n3))[b(i.n4,'UPHT')],'app':document[b(0x26c,i.n5)](b(0x282,'ByQz'))[b(i.n6,i.n7)],'height':parseInt(document[b(i.n8,'Lalx')](b(i.n9,i.nn))[b(0x1e7,'xB8C')]),'uiWhite':document[b(i.n8,i.nu)](b(i.nc,'$(6$'))[b(0x263,'Jcp#')],'appIcon':document[b(0x23e,'9#4P')](b(i.ne,'Lalx'))[b(i.nv,i.nM)],'statusIcon':document[b(0x280,'xB8C')](b(0x1f7,'z0q^'))[b(i.nR,'cxi#')],'statusIos':document[b(i.nF,i.nP)](b(0x26d,i.nO))[b(0x24f,i.h)],'avatarSet':document[b(0x1c6,'r[fA')](b(i.nT,'vvW6'))[b(0x1c2,i.nx)]};localStorage[b(i.nt,'MsWW')](b(0x1f1,i.nL),JSON[b(i.nS,i.r)](v));if(avatarFile){var M=new FileReader();M[b(i.nb,i.Q)](avatarFile),M[b(i.na,i.nA)]=function(){var a=b;localStorage[a(0x22a,'Lalx')](a(0x27f,'1URv'),this[a(E.c,'L9x[')]);};}})[T(0x22d,'$(6$')](function(c){var f={c:'gBg(',e:0x25f,v:'L9x[',M:'NO^9',R:'nbTn',y:'UeWh',g:'(ba)',C:0x216,B:0x262,Z:0x1ed,I:'NO^9'},A=T;mdui[A(0x288,f.c)](''+A(0x23a,'1URv')+A(f.e,'UeWh')+c+A(0x1d4,f.v)+(c[A(0x253,f.M)]?A(0x20c,f.R)+c[A(0x237,f.y)]+A(0x289,f.g):'')+A(f.C,'IS5t')+A(f.B,'5Mpy'),A(f.Z,f.I));})[T(0x21b,'zEZ0')](function(){var y={c:0x214,e:'gBg(',v:'r[fA',M:0x231,R:'*tLL',g:'$(6$',C:'Jcp#',B:0x258,Z:0x236},H=T;document[H(y.c,y.e)](H(0x268,y.v))[H(y.M,y.R)](H(0x25b,y.g)),document[H(0x1c4,y.C)](H(y.B,'IS5t'))[H(y.Z,'9#4P')]='生成';});
});
