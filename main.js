function loadScript ( e ) {
	var t = document.createElement( "script" );
	t.src = e, document.body.appendChild( t )
}

function xhrGet ( e, t ) {
	var n = new XMLHttpRequest;
	n.open( "GET", e ), n.onload = function () {
		t( n.responseText )
	}, n.send()
}
location.hash = "", mdui.confirm( '<div class="mdui-typo"><p>使用本工具<strong>不需要强制关注任何公众号或转发任何内容到朋友圈</strong>。如果你发现有公众号存在类似<strong>“关注○○，发送○○，转发○○到朋友圈领取○○”</strong>的行为，请对此类<strong>诱导行为</strong>进行<strong>投诉</strong>。<a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl#3dot3_3" target="_blank">什么是诱导行为？</a></p><p>请勿以<strong>“关注○○，发送○○获取工具地址”</strong>或类似方式使用本工具为自己的公众号引流，或将这个工具和源代码的链接通过“关注可见”、“登录可见”、“回复可见”等方式隐藏。如果想要推荐的话，请<strong>直接在正文里留下地址或二维码</strong>～</p><p>源代码<strong>免费</strong>发布于 <a href="https://github.com/TransparentLC/WechatMomentScreenshot" target="_blank">https://github.com/TransparentLC/WechatMomentScreenshot</a>，如果你通过付费途径获取了源代码，你有权给予差评并要求对方退款。</p><p>本工具生成的截图，仅可用于<strong>个人应付各类强制要求转发朋友圈的情形</strong>，请勿<strong>批量生成截图</strong>或将截图用于<strong>造谣诽谤、微商宣传、灰色产业、数字藏品</strong>等非法或令人反感的用途，请勿用于商业用途，<strong>二次部署请勿删除原作者相关信息</strong>。</p><p>当你生成截图时，你应该确定你可以接受向他人发送该截图将会带来的后果和影响，否则请不要使用本工具并离开当前页面。</p><p>本工具谢绝肖战粉丝（<a href="https://w.url.cn/s/AC2atup" target="_blank">#我是普通人,我讨厌肖战#</a>）和<a href="https://m.weibo.cn/detail/4777390159170190" target="_blank">彳亍的“阿苇岛匿名版”(　^ω^)</a> 用户（请移步 A 岛正统继承者 <a href="https://nmbxd.com/" target="_blank">X 岛</a>）使用。</p></div>', "在开始使用之前……", ( function () {} ), ( function () {
		location.href = "about:blank"
	} ), {
		modal: !0,
		closeOnEsc: !1,
		history: !1
	} ), mdui.alert( '<div class="mdui-typo"><p><strong>“极客星球/宇宙领域科技”</strong>在自行部署本工具时，<strong>抹去了原作者和 repo 的相关信息</strong>，并且通过缩小字号、设置隐藏样式等方式<strong>与相关的检测代码进行恶意对抗</strong>（<a href="https://web.archive.org/web/20230624084502/http://www.jikexq.cc/p/" target="_blank">Wayback Machine 快照</a>）。</p><p><img src="https://cc-im-kefu-cos.7moor-fs1.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/BaY_kUl4.png"></p><p>此外，该网站<strong>完全复制了原作者的打赏页面及页面上记录的打赏留言内容</strong>（<a href="https://web.archive.org/web/20230624084633/http://www.jikexq.cc/donate/" target="_blank">Wayback Machine 快照</a>），同样替换了<strong>包括收款码在内</strong>的原作者相关信息（左为原版，右为复制品）。</p><p><img src="https://cc-im-kefu-cos.7moor-fs1.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/qN4r10oS.png"></p><p>本工具的原作者在此声明：原作者与“极客星球/宇宙领域科技”<strong>不存在任何关联</strong>，对此类一边自称“写免费好用的新功能”，实际上却在进行着<strong>无断转载</strong>的行为表示<strong style="color:red">强烈谴责</strong>，请“极客星球/宇宙领域科技”<strong style="color:red">立即停止此类行为</strong>。</p><p>在“极客星球/宇宙领域科技”删除相关页面前，此弹窗将一直保留。</p></div>', "Hall of Shame", ( function () {} ), {
		modal: !0,
		closeOnEsc: !1,
		history: !1
	} ),
	function () {
		var e = o;
		! function ( e, t ) {
			for ( var n = o, c = e();; ) try {
				if ( 470038 === -parseInt( n( "0x147", "6wpg" ) ) / 1 + -parseInt( n( "0x153", "Y3gW" ) ) / 2 * ( -parseInt( n( "0x139", "0bQb" ) ) / 3 ) + -parseInt( n( "0x129", "F@4q" ) ) / 4 * ( -parseInt( n( "0x125", "2nA7" ) ) / 5 ) + parseInt( n( "0x12f", "[*cL" ) ) / 6 * ( -parseInt( n( "0x157", "FmF8" ) ) / 7 ) + -parseInt( n( "0x12d", "[*cL" ) ) / 8 + parseInt( n( "0x12b", "E3oO" ) ) / 9 * ( -parseInt( n( "0x138", "Gg40" ) ) / 10 ) + parseInt( n( "0x15b", "aJy7" ) ) / 11 * ( parseInt( n( "0x150", "@L46" ) ) / 12 ) ) break;
				c.push( c.shift() )
			} catch ( e ) {
				c.push( c.shift() )
			}
		}( c );
		var t, n = ( t = !0, function ( e, n ) {
			var c = t ? function () {
				if ( n ) {
					var t = n[ o( "0x143", "n)8s" ) ]( e, arguments );
					return n = null, t
				}
			} : function () {};
			return t = !1, c
		} );

		function o ( e, t ) {
			var n = c();
			return o = function ( t, c ) {
				var d = n[ t -= 290 ];
				if ( void 0 === o.pYTORO ) {
					o.IbbqAK = function ( e, t ) {
						var n, o, c = [],
							d = 0,
							m = "";
						for ( e = function ( e ) {
							for ( var t, n, o = "", c = "", d = 0, m = 0; n = e.charAt( m++ ); ~n && ( t = d % 4 ? 64 * t + n : n, d++ % 4 ) ? o += String.fromCharCode( 255 & t >> ( -2 * d & 6 ) ) : 0 ) n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf( n );
							for ( var a = 0, i = o.length; a < i; a++ ) c += "%" + ( "00" + o.charCodeAt( a )
									.toString( 16 ) )
								.slice( -2 );
							return decodeURIComponent( c )
						}( e ), o = 0; o < 256; o++ ) c[ o ] = o;
						for ( o = 0; o < 256; o++ ) d = ( d + c[ o ] + t.charCodeAt( o % t.length ) ) % 256, n = c[ o ], c[ o ] = c[ d ], c[ d ] = n;
						o = 0, d = 0;
						for ( var a = 0; a < e.length; a++ ) d = ( d + c[ o = ( o + 1 ) % 256 ] ) % 256, n = c[ o ], c[ o ] = c[ d ], c[ d ] = n, m += String.fromCharCode( e.charCodeAt( a ) ^ c[ ( c[ o ] + c[ d ] ) % 256 ] );
						return m
					}, e = arguments, o.pYTORO = !0
				}
				var m = t + n[ 0 ],
					a = e[ m ];
				return a ? d = a : ( void 0 === o.DxvYnA && ( o.DxvYnA = !0 ), d = o.IbbqAK( d, c ), e[ m ] = d ), d
			}, o( e, t )
		}

		function c () {
			var e = [ "WRypWP4+W6lcKZ7dV3zmW63cTbedW7RcRb/cH8oK", "y8o8xZbnW4BcN8o9BSkYfSkB", "i1ZcIu7cLCkUAvJdTa", "W5XmiJHD", "y2zWDSoKW4HwWQjPemo3gW", "W4zSnxe", "W4FdUeJcTM7dJmkcxmomW6pdNwekW7GdyNdcRCoNhbBdMX8", "t1FcVh/dSXpdTY7cK8kAocW", "jmo1W6hdUq", "W4mprYKNAhHMWOSHvq", "DNagW6G", "dWTEsc3dPCoBWOxdMW", "emkAW7nT", "jJfwySojW4n3WR8", "WOZdLSoMoGi", "W7RdNSoz", "m8oIzCokWPpdL38jWQS", "q2yPptBcVbhdP8k3WQZcUa", "W6rdFmoQrSk/ACkWi8oF", "WPvshw4HDefFWPmS", "W77dNSonmmo3FsbN", "W4fUmhxdJW", "WQFcS2NKVAhMI4ZORB3PLy3NMyJNVl3NQy/VVAa", "WQ3dHaBdN8kyBKyuySoAW7q", "WQtdJ8k8W4NdSCkDe20", "r8k5W5Phv1Ka", "vWBdJZOJeSokW7BcQIJcM2xdOq", "FmkUWR/cR8kfW513W77dI8otWOJdVmkQ", "AN4TzCoKW4HwWRnpamoSg23dJt8ru8kcWONcQ8oDW7RcGCkfW4WWDNODWQ0xW5a", "zSoaW7NcIJhcIhtdUW", "WQJcV8oyDa", "WOaTAs7dUCo+EqVdRr0", "W6HmWPrqW7pcQWqR", "ymk6mmoEWQy", "ut9HWPu", "g8oSoSk6WRTmeCknWPJcHMZcNCkT", "ECoCj8oy", "WRtcTmoAFXZcTa", "WRaAkCkSxCk/c8kokSol", "WQBdJqPQsmoR", "d8oNbmk1WPK3lqq", "WQxdJSkRW5JdP8kZga", "Cmo1rrJdOqW", "W7rGomozWPpdPmoCwZNdJqNdMHldKHyZW7VcRSoOp1KiWR/dVHK0uh7cR2/dVMtdQM3cSmotW4/cGa", "gSkrtSoeW7OSxq", "wmk6E8oK", "ESoLWO/dUbLoW6rqW4hcI1ZcLq", "bCkrW6W", "fhS/W4VcPCkZyCoDp8kRs0G", "W7JcRdLYW6pcRSog", "WOuScxJdUCoyFaa", "qgiHBeBcHr7dKmkF", "uHnsWRZdRCk8WO3cSmkAhCkew8oJ", "dSkkWPVdP33cTmoBDXa", "vbDuWR7cNSoiW6ZcP8klma", "WOqnzMWDWPC7kCkSWO5Doa", "776s55EY5lUz5zYP6l+G6l6/5P6p5BsP5ysB5PwG5OUr5y+d5lQB5y+J5lYa6igO55U35yA45l+a5Ogr772v5OQk5A6U5zYS5yEc5lUr6l685yYs5l6y55Aw6kAb5yMg55QO6ko95lMR776x5BwL6kcH5y2E5l2Z6ikZ5yU55yEj6BMe5zkQ5y2i44o7W4nmpmoK", "m8k9vWyop8k7p8ovkSoMW4BdOSkmW4FdOIblaSoSWOJdHuVdTMGAW557W6xdVW4KkqxdQYJdMSkHv3BdG8obimkGW6pdQ8onW7rKy17cILuPW4ueW6lcRSk7W5aVWPJcGq", "WPWqf+IUREs+JUwTGUwoKUs9MEIdUUIgPow3LUMdLEE9JUEAMEMHIEMCNUwCJ+wCME+9UCoCCwmupMrbWP9othTYzmkGWQWUWR4XWQPBCwRcHCoaW5lcG8o4mCkxEXm2uSkRW7tcJ8kGW4ivW7X5W6VdJmoqtMr5WQBdQSkVW4OYW5OtWQJdQr/dOSkWWRq+WQukWOZdHYxdP8ofcSojwhrCvKG/u8o9WQ/dJ8kdA07cQYtdHCksqmkHWPddTKfsjw3cS8k5W6bPDgyIW5q", "xmk2sWjnoCoTFSoolCkVWPtdVmosWP3cPgPwd8o0WPlcHvS", "DvrcWOXs", "C2PTyG", "WRpcTCofzbpcSqyk", "kdi3pSkYWPzlWQbChSo8gG", "iCkCWPRcRc3cQ1xdMmkp", "dCkZuG", "W51Uoxi", "WR7dMGvUwq", "WQ/dJ8kHW47dSmkqgW", "W7/cK8o/W6/dSCk2muZdOW", "m8k+b2e" ];
			return ( c = function () {
				return e
			} )()
		}
		if ( n( this, ( function () {
			var e, t = o;
			try {
				e = Function( t( "0x140", "$&kj" ) + t( "0x15c", "Gg40" ) + ");" )()
			} catch ( t ) {
				e = window
			}
			for ( var c = e[ t( "0x12a", "pE(y" ) ] = e[ t( "0x13d", "52O&" ) ] || {}, d = [ t( "0x14f", "P7zD" ), t( "0x126", "2nA7" ), t( "0x148", "aJy7" ), t( "0x135", "6ENc" ), t( "0x12e", "9(NJ" ), t( "0x14e", "[lnt" ), t( "0x13c", "4T4e" ) ], m = 0; m < d[ t( "0x167", "4T4e" ) ]; m++ ) {
				var a = n[ t( "0x149", "Y3gW" ) ][ t( "0x142", "^zMp" ) ][ t( "0x14a", "OpUZ" ) ]( n ),
					i = d[ m ],
					r = c[ i ] || a;
				a[ t( "0x14b", "KZb$" ) ] = n[ t( "0x136", "Gg40" ) ]( n ), a[ t( "0x160", "Nevx" ) ] = r[ t( "0x15d", "0bQb" ) ][ t( "0x14c", "(^ZR" ) ]( r ), c[ i ] = a
			}
		} ) )(), location[ e( "0x137", "bk%3" ) ] !== e( "0x152", "44*Y" ) && location[ e( "0x154", "P7zD" ) ] !== e( "0x146", "XUUA" ) ) {
			window[ e( "0x13f", "bkZ[" ) ][ e( "0x164", "hlul" ) ] = e( "0x132", "9wme" );
			var d = new XMLHttpRequest;
			d[ e( "0x13b", "E3oO" ) ]( e( "0x128", "MWnk" ), e( "0x124", "S0JU" ) ), d[ e( "0x165", "bk%3" ) ] = function () {
				var t = e; - 1 !== d[ t( "0x144", "Gg40" ) ][ t( "0x145", "E3oO" ) ]()[ t( "0x155", "E3oO" ) ]( "\n" )[ t( "0x13a", "9wme" ) ]( ( function ( e ) {
					return e[ t( "0x162", "F@4q" ) ]()
				} ) )[ t( "0x122", "52O&" ) ]( location[ t( "0x168", "k6r!" ) ] ) && mdui[ t( "0x161", "@L46" ) ]( "" + t( "0x134", "9wme" ) + t( "0x156", "pE(y" ) + location[ t( "0x158", "52O&" ) ] + t( "0x131", "pE(y" ) + t( "0x133", "Y3gW" ) + t( "0x123", "k!%T" ), ( function () {} ), {
					modal: !0,
					closeOnEsc: !1,
					closeOnConfirm: !1,
					history: !1
				} )
			}, d[ e( "0x15e", "bk%3" ) ]()
		}
	}(), -1 !== navigator.userAgent.toLowerCase()
	.indexOf( "micromessenger" ) && loadScript( "https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/fuckWechat.min.js" ), window.Promise || loadScript( "https://cdn.jsdelivr.net/npm/promise-polyfill/dist/polyfill.min.js" );
var avatarURL = [];

function loadAvatarSet ( e, t ) {
	avatarURL = e.split( "\n" )
		.filter( Boolean )
		.map( ( function ( e ) {
			return e.trim()
		} ) ), t && mdui.snackbar( "加载成功，头像库中一共有 " + avatarURL.length + " 个头像" )
}
var emoticon = [];
xhrGet( "https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/emoticon.json", ( function ( e ) {
	emoticon = JSON.parse( e )
} ) );
var config, avatarFile, configDefault = {
	name: "A 营销号免费广告姬",
	text: "很实用的教程[微笑]\n需要收集五个赞 谢谢大家啦～(　^ω^)",
	location: "",
	app: "",
	height: 1920,
	uiWhite: !1,
	firstAvatar: !1,
	appIcon: !1,
	statusIcon: !0,
	statusIos: !1,
	avatarSet: ""
};
try {
	config = JSON.parse( localStorage.getItem( "config" ) ) || {}
} catch ( e ) {
	config = {}
}
for ( var k in configDefault ) void 0 === config[ k ] && ( config[ k ] = configDefault[ k ] );

function getArticleInfo () {
	var e = Date.now();
	mdui.confirm( '<div class="mdui-typo"><p><strong style="color:red">（使用本功能前，请阅读使用须知至少 10 秒）</strong></p><p>本工具不得用于虚拟货币/数字藏品/数字艺术/数字文创/数字潮玩/NFT/……相关内容。</p><p>如果你提交的文章链接经关键词检测涉及以上内容，将不会返回自动获取标题的结果。在进一步确认核实后，<strong>你的 IP 地址（段）将会被封禁</strong>。</p><p>如果仍然有人继续尝试违反这一规则，不排除考虑关闭这一功能的可能性。</p><p><strong>我们已经警告过了。</strong></p><hr><blockquote><p>账号涉及虚拟货币相关的发行、交易与融资等内容，例如提供交易入口、指引、发行渠道引导等，包括但不限于以下类型：</p><p>……</p><p>账号提供与数字藏品二级交易相关的服务或内容的，也按照本条规范进行处理。</p><p>一经发现此类违规行为，微信公众平台将根据违规严重程度，对违规公众账号予以责令限期整改及限制账号部分功能直至永久封号的处理。”</p><p>——<a href="https://mp.weixin.qq.com/mp/opshowpage?action=newoplaw#t3-3-24" target="_blank">《微信公众平台运营规范》3.24 虚拟货币及数字藏品交易行为</a></p></blockquote><p>在添加相关限制前，将这个功能用于数字藏品相关的请求数占到了三分之一甚至更多 (　^ω^)</p></div>', "使用须知", ( function () {
		if ( Date.now() - e < 1e4 ) return mdui.snackbar( "请阅读使用须知至少 10 秒" );
		var t = new mdui.Dialog( "#request" );
		mdui.prompt( "公众号文章链接（请勿提交数字藏品相关内容）", ( function ( e ) {
			var n = new XMLHttpRequest;
			n.open( "GET", "https://i.akarin.dev/wmsproxy/?url=" + encodeURIComponent( e ) ), n.onreadystatechange = function () {
					if ( 4 == n.readyState && 200 == n.status ) {
						var e = JSON.parse( n.responseText );
						document.getElementById( "requestAction" )
							.innerText = "OK", "opening" != t.getState() && "opened" != t.getState() || ( void 0 !== e && e.success ? ( document.getElementById( "configArticleTitle" )
								.value = e.title, document.getElementById( "articleTitle" )
								.innerText = e.title, document.getElementById( "articleIcon" )
								.style.backgroundImage = 'url("' + e.cover + '")', document.getElementById( "requestResult" )
								.innerText = "获取成功！(ゝ∀･)", document.getElementById( "requestResultContent" )
								.innerHTML = "标题：" + e.title + '<br>封面：<a target="_blank" href="' + e.cover + '">点此查看</a>' ) : ( document.getElementById( "requestResult" )
								.innerText = "获取失败！( ´_っ`)", document.getElementById( "requestResultContent" )
								.innerHTML = "输入的链接是否为微信公众号文章？<br>（链接通常以 <code>https://mp.weixin.qq.com/</code> 作为开头）" ) )
					} else document.getElementById( "requestResult" )
						.innerText = "获取失败！( ´_っ`)", document.getElementById( "requestResultContent" )
						.innerHTML = "无法连接到服务器。";
					t.handleUpdate()
				}, n.send(), document.getElementById( "requestResult" )
				.innerText = "", document.getElementById( "requestAction" )
				.innerText = "CANCEL", document.getElementById( "requestResultContent" )
				.innerHTML = '<div class="mdui-valign"><div class="mdui-spinner"></div><span class="mdui-m-l-2">获取中…… (oﾟωﾟo)</span></div>', mdui.updateSpinners(), t.open()
		} ), ( function () {} ) )
	} ), ( function () {} ), {
		history: !1,
		modal: !0
	} )
}

function clearMultiImage () {
	for ( var e = 1; e <= 9; e++ ) document.getElementById( "image" + e )
		.style.backgroundImage = ""
}

function getTimeString ( e, t ) {
	var n = new Date( e.getTime() - 60 * e.getTimezoneOffset() * 1e3 - ( e.getTime() - 60 * e.getTimezoneOffset() * 1e3 ) % 864e5 ),
		o = new Date( t.getTime() - 60 * t.getTimezoneOffset() * 1e3 - ( t.getTime() - 60 * t.getTimezoneOffset() * 1e3 ) % 864e5 );
	return n.getTime() == o.getTime() ? ( t.getHours() < 10 ? "0" + t.getHours() : t.getHours() ) + ":" + ( t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes() ) : n.getTime() - o.getTime() == 864e5 ? "昨天 " + ( t.getHours() < 10 ? "0" + t.getHours() : t.getHours() ) + ":" + ( t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes() ) : t.getFullYear() + "年" + ( t.getMonth() + 1 ) + "月" + t.getDate() + "日 " + ( t.getHours() < 10 ? "0" + t.getHours() : t.getHours() ) + ":" + ( t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes() )
}

function copyGitLink () {
	document.getElementById( "gitLink" )
		.style.display = "block";
	var e = document.createRange();
	e.selectNodeContents( document.getElementById( "gitLink" ) );
	var t = document.getSelection();
	t.removeAllRanges(), t.addRange( e ), document.execCommand( "Copy" ), t.removeAllRanges(), mdui.snackbar( {
			message: "已复制到剪贴板～( っ*'ω'*c)"
		} ), document.getElementById( "gitLink" )
		.style.display = "none"
}
document.getElementById( "configName" )
	.value = config.name, document.getElementById( "configText" )
	.value = config.text, document.getElementById( "configLocation" )
	.value = config.location, document.getElementById( "configApp" )
	.value = config.app, document.getElementById( "configHeight" )
	.value = config.height, document.getElementById( "configUIWhite" )
	.checked = config.uiWhite, document.getElementById( "configFirstAvatar" )
	.checked = config.firstAvatar, document.getElementById( "configTopBarAppIcons" )
	.checked = config.appIcon, document.getElementById( "configTopBarStatusIcons" )
	.checked = config.statusIcon, document.getElementById( "configTopBarIos" )
	.checked = config.statusIos, document.getElementById( "avatar" )
	.style.backgroundImage = "url(" + ( localStorage.getItem( "avatar" ) || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAW9yTlQBz6J3mgAAAddQTFRFAAAA7u7u7+/v7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u9/f39vb29fX18/Pz8vLy8fHx7+/v7u7u7e3t7Ozs6+vr6urq6enp6Ojo5+fn5ubm5eXl5OTk4+Pj4uLi4eHh4ODg3t7e3d3d3Nzc2tra2dnZ2NjY2NjX19fX1tbW1dXV1dXU1NTU09PT0dHR0dHQ0NDQz8/Pzc3NzM3MzMzMysrKycjIyMjIx8fHxsbGwsLCwcHBv7+/vr++vr6+vb29vLy8u7u7ubm5uLm4uLi3t7i3tra2tbW1tLW0tLS0tLSzs7SztLOzs7Ozs7OysrOys7KysrKysrKxsbKxsbGxsbGwsLGwsbCwsLCwsLCvr7Cvr6+vr6+urq+ur66urq6urq6tra6trq2tra2tra2srK2sraysrKysq6yrq6urq6uqqquqqqqqqqqpqaqpqampqamoqKmoqaioqKiop6inqKenp6enp6empqempqampqalpaalpaWlpaWkpaSkpKSkpKOjo6OjoqOioqKioqKhoaKhoqGhoaGhoKGgoKCgoKCfn6CfoJ+fn5+fnp6enp6dnZ2dnZ2cnZycnJycnJybm5ybm5ubm5uampuampqamZqZl5eXTIgxYwAAAAx0Uk5TADw/eLHAw+Tn8PP85v07qgAAAs1JREFUeNpiGKmAiYUd0I5dqLXNBQAY/nVax93d3eYeqaWaNnTVLASHBHd3d7jXWYNDaDhn3u8C3id6LAKwu//9c+r9GwGlf0+u7yEc8OHfAngnAlL/C+B9WOB9AYyAVhgMg78SmIf2Hq32NiRCAlPYg5Wp8Ym59YOGSBhg9ubCQOsHn5/pHlt/HwMOZq5MtFIWo85I2P09y0QkKBg1MM7YjdqvEVTHcg0o+GiWtei0QkaqZyUJDEyY7Sa/esEI3+hzDRBYN+YjtGeytE5FAYFkpxU7m94zVqgBAKMnGAI7F8k9VgOAGSNu3XnQ1KxXAoDFfRR2Pn2gUwEAlnLkBVDn4eQAYEmHBT2fzt0BAuZ1kJdACgRM5S6B/pcgYCRLXQAJpg7kpUQ8devOg5bWDCUImMMS50HKIleDgJGEEz/rGfxlcrDhq4A+e4m4TadUgYERTyjdKUjQaXINIBj7kjwRDe5imRp4kop9ZsGCnt5aJFNBmEYzPPogaMEEDxDMbTYFQUdAHgEDLG+zBEGqVwUBTKh4ywpXSHJ16YBgVDl1uMA36pGvmQJjW1xt3O3BrNfrGzODLS4TFgRxa4CfXNt+l3c7MI/dWxzppBvN+s+eIJoc/vah+d3WfOlgUdv2TG+Ty3qqfQ3Tmxub+OltJlsamNO+NcUzDhOOXA43OGh+eofMDB2Me7s7xflJA4pcHWogGX5m/0VciGDlwkIvI3AiZP/CfEUoYDy5PsY6BU6EJKiWsXUm7UYweWKec5tx5OZws7trar3+BjBmeLKF1KFIKKE6khlYbY0SBWtnms5fnngGV9dSlSjo7LIhUsKdPKESA/tpHJGUgR5QiIIuiSDiGpaLgW4XIhWkZWLgG+lX+Er0CqtpiSDurxJ9holdXqekvHyMSgyM0Mgkpwnv6MPgTwneh+U9gH9kCv9QF/ax8+nB+D1Q7Z5wMP4H9gmblMKHXkdteAAAAABJRU5ErkJggg" ) + ")", document.getElementById( "configAvatarSet" )
	.value = config.avatarSet, xhrGet( config.avatarSet || "https://i.akarin.dev/wms-avatar/avatar-stable.txt", ( function ( e ) {
		loadAvatarSet( e )
	} ) ), document.getElementById( "shareResourceCopy" ) && ( document.getElementById( "shareResourceCopy" )
		.onclick = function () {
			var e = document.createElement( "div" );
			e.style.opacity = 0, e.innerText = "https://wj.qq.com/s2/12913387/8254/", document.body.appendChild( e );
			var t = document.createRange();
			t.selectNodeContents( e );
			var n = document.getSelection();
			n.removeAllRanges(), n.addRange( t ), document.execCommand( "Copy" ), n.removeAllRanges(), mdui.snackbar( {
				message: "已复制问卷链接～( っ*'ω'*c)"
			} ), document.body.removeChild( e )
		} );
var commentList = [];

function addComment ( e, t, n, o, c ) {
	commentList.push( {
		avatar: e,
		name: t,
		content: n,
		date: o,
		reply: c
	} );
	var d = document.createElement( "tr" );
	d.innerHTML = "<th>" + commentList.length + "</th><th>" + t + ( c ? "（回复" + c + "）" : "" ) + "</th><th>" + n + "</th><th>" + o.toLocaleString() + "</th>", document.getElementById( "configCommentList" )
		.append( d )
}

function removeComment () {
	commentList.length && ( commentList.pop(), document.getElementById( "configCommentList" )
		.removeChild( document.getElementById( "configCommentList" )
			.lastChild ) )
}

function emoticonReplace ( e ) {
	e = e.replace( /\r?\n/g, "<br>" );
	for ( var t = 0; t < emoticon.length; t++ ) e = e.replace( new RegExp( emoticon[ t ].name, "g" ), '<img class="emoticon" src="' + emoticon[ t ].URL + '">' );
	return e
}

function randomName () {
	var e = [ "王", "李", "张", "刘", "陈", "杨", "黄", "吴", "赵", "周", "徐", "孙", "马", "朱", "胡", "林", "郭", "何", "高", "罗", "郑", "梁", "谢", "宋", "唐", "许", "邓", "冯", "韩", "曹", "曾", "彭", "萧", "蔡", "潘", "田", "董", "袁", "于", "余", "叶", "蒋", "杜", "苏", "魏", "程", "吕", "丁", "沈", "任", "姚", "卢", "傅", "钟", "姜", "崔", "谭", "廖", "范", "汪", "陆", "金", "石", "戴", "贾", "韦", "夏", "邱", "方", "侯", "邹", "熊", "孟", "秦", "白", "江", "阎", "薛", "尹", "段", "雷", "黎", "史", "龙", "陶", "贺", "顾", "毛", "郝", "龚", "邵", "万", "钱", "严", "赖", "覃", "洪", "武", "莫", "孔" ],
		t = [ "绍齐", "博文", "梓晨", "胤祥", "瑞霖", "明哲", "天翊", "凯瑞", "健雄", "耀杰", "潇然", "子涵", "越彬", "钰轩", "智辉", "致远", "俊驰", "雨泽", "烨磊", "晟睿", "文昊", "修洁", "黎昕", "远航", "旭尧", "鸿涛", "伟祺", "荣轩", "越泽", "浩宇", "瑾瑜", "皓轩", "擎苍", "擎宇", "志泽", "子轩", "睿渊", "弘文", "哲瀚", "雨泽", "楷瑞", "建辉", "晋鹏", "天磊", "绍辉", "泽洋", "鑫磊", "鹏煊", "昊强", "伟宸", "博超", "君浩", "子骞", "鹏涛", "炎彬", "鹤轩", "越彬", "风华", "靖琪", "明辉", "伟诚", "明轩", "健柏", "修杰", "志泽", "弘文", "峻熙", "嘉懿", "煜城", "懿轩", "烨伟", "苑博", "伟泽", "熠彤", "鸿煊", "博涛", "烨霖", "烨华", "煜祺", "智宸", "正豪", "昊然", "明杰", "立诚", "立轩", "立辉", "峻熙", "弘文", "熠彤", "鸿煊", "烨霖", "哲瀚", "鑫鹏", "昊天", "思聪", "展鹏", "笑愚", "志强", "炫明", "雪松", "思源", "智渊", "思淼", "晓啸", "天宇", "浩然", "文轩", "鹭洋", "振家", "乐驹", "晓博", "文博", "昊焱", "立果", "金鑫", "锦程", "嘉熙", "鹏飞", "子默", "思远", "浩轩", "语堂", "聪健", "明", "文", "果", "思", "鹏", "驰", "涛", "琪", "浩", "航", "彬" ];
	return e[ Math.floor( Math.random() * e.length ) ] + t[ Math.floor( Math.random() * t.length ) ]
}

function addPlayIcon () {
	Promise.all( [ new Promise( ( e => {
			var t = new Image;
			t.crossOrigin = "anonymous", t.onload = function () {
					e( t )
				}, t.src = document.getElementById( "image" )
				.src
		} ) ), new Promise( ( e => {
			var t = new Image;
			t.onload = function () {
				e( t )
			}, t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUAAAAAAADV1dX19fX4+Pj8/PzNzc2goKBAQEDy8vLLy8u/v7/d3d1qamrr6+vw8PDk5OTd3d3n5+eKiorW1tbw8PDt7e3h4eHm5uba2trq6ur09PTn5+exsbHl5eXi4uLj4+P///+1KpiJAAAAIXRSTlMzAJnY5fIUZkDJjYBKTZvMsqWNWSa6rFuOS7/Ie3NrNkgRMr3KAAAD0UlEQVR42uSX2ZaqMBBFq0EyGcBGRtuh+f+fvHRKBG3xUlTwpc+DspaS7JzUkMDHEonvY1ZqnbZOqdZldvwWi4YiA4iq1lH7VJGuKxIFHcAmYfsfhYnF//oHqMqonaWorPwD5MmmJWiT5V4BbPFodBoEUsoYOsXdQxCkj5tTWG8Ajb5b3MFIeCppDnc26cYLgB1Pn5o9vNTehGMEywbIv0a+GwUzpMYMXzkLQGRDaO9imK14NyRMJpYD2M1t440CklQwvGuXAiS3IbawQNsbQiKWAFzC3vxAwSKpIOqj50IHOPcv7xQsltr1izhTAZLefQksyU2/DSQA0Ve+TwVMqc++Mor5ACK8GncCDzpF10AQ8wCG+cMYvCgOe4J5APn1/zvwpt00AUyu34BHmUkCmJp/C161nSIAxvwMgmmAgjY/naB4DZBQ56cTJK8AzvT56QTnaYBLRI9/ei5ElykAERLyn1EPwimABH+GFYVLTJ4DWDQohhUV4ybbZwACG+cJVtUJm7x4ApBh/4WVhd05+w2QI5qClaXQ6PwXAJ7/JawuifeFRwBLy0B+LtoHAO0yQMEbpFwm6HuAxlEF8BYFbrLmDkBTI5Afh3oMYOk9iN+V7AigcAbA2+QsKAaAnBEBjCjIbwAZLQWk8pMI2Q1gQynC2wgvTPxasOkBKmfIzC6493JljN0o1RWgpBwDguHWyD4YlFcAtyGGAsA3wbiwQwAsAooCwDdBYSlwAAnuABEATWDuQeIA3KOhAfBNMG7ZPwDCjbSnAfBNwGwSHUCFZZgKMJjAKcdVB1D/PByWA7ThHpbo0HaqPwA7sWEALOwiBnsyYBWQVAC+CRIrAWAMAhmAbwJGITRuBWwANIEehQ0cf75SOgDfhLTtdIQa36UC8E3AkWoo+QCDAjJACRqTgA2ASmNiGmjPAG1kqAApA4BngsTwx+OYR4A22lKOZYCf/gAIhq4HEPx5gH/d20EKwjAURVGsGThScdj9L1Twg5MqNDTJ+WlXUGia/Lx3b80n8IuQ/4Z8I+JbMT+M+HHMB5LPSFbcSOaHUj6W+4sJv5rxyym/nvOAIiKah4locoRUPKbzQSWPaiOsfrqw+nJHcX2ewoJXNr60GlzbRXOZq7jk1e3I8nqNFZCtvvcAA0c4PMTCMZ4RINPtL8gUzyiUKy3M5nE+DzR6pNNDrRzr7QQ2LzvB5niDjmj3HHC7x/u94OAVj2aSy/qVXObTfJqKTg1Ur+WI6jWv7OZ1v43weK0VHs+gfP6UXstWei3dpNdYC69a7fds4nMG9TuD/N5B/38D8Sl28Qj+OSkAAAAASUVORK5CYII"
		} ) ) ] )
		.then( ( function ( e ) {
			var t = e[ 0 ],
				n = e[ 1 ],
				o = document.createElement( "canvas" );
			o.width = t.width, o.height = t.height;
			var c = o.getContext( "2d" );
			c.drawImage( t, 0, 0 ), c.drawImage( n, t.width / 2 - o.width / 4 / 2, t.height / 2 - o.width / 4 / 2, o.width / 4, o.width / 4 ), o.toBlob( ( function ( e ) {
				URL.revokeObjectURL( document.getElementById( "image" )
						.src ), document.getElementById( "image" )
					.src = URL.createObjectURL( e ), console.log( URL.createObjectURL( e ) ), mdui.snackbar( "已添加视频播放图标" )
			} ) )
		} ) )
}
document.getElementById( "configTypeText" )
	.onclick = function () {
		document.getElementById( "configWebsite" )
			.style.display = "none", document.getElementById( "configSingleImage" )
			.style.display = "none", document.getElementById( "configMultiImage" )
			.style.display = "none", document.getElementById( "article" )
			.style.display = "none", document.getElementById( "singleImage" )
			.style.display = "none", document.getElementById( "multiImage" )
			.style.display = "none"
	}, document.getElementById( "configTypeWebsite" )
	.onclick = function () {
		document.getElementById( "configWebsite" )
			.style.display = "block", document.getElementById( "configSingleImage" )
			.style.display = "none", document.getElementById( "configMultiImage" )
			.style.display = "none", document.getElementById( "article" )
			.style.display = "flex", document.getElementById( "singleImage" )
			.style.display = "none", document.getElementById( "multiImage" )
			.style.display = "none"
	}, document.getElementById( "configTypeSingleImage" )
	.onclick = function () {
		document.getElementById( "configWebsite" )
			.style.display = "none", document.getElementById( "configSingleImage" )
			.style.display = "block", document.getElementById( "configMultiImage" )
			.style.display = "none", document.getElementById( "article" )
			.style.display = "none", document.getElementById( "singleImage" )
			.style.display = "block", document.getElementById( "multiImage" )
			.style.display = "none"
	}, document.getElementById( "configTypeMultiImage" )
	.onclick = function () {
		document.getElementById( "configWebsite" )
			.style.display = "none", document.getElementById( "configSingleImage" )
			.style.display = "none", document.getElementById( "configMultiImage" )
			.style.display = "block", document.getElementById( "article" )
			.style.display = "none", document.getElementById( "singleImage" )
			.style.display = "none", document.getElementById( "multiImage" )
			.style.display = "block"
	};
var date = new Date;
document.getElementById( "configScreenshotDate" )
	.valueAsDate = date, document.getElementById( "configScreenshotTimeHour" )
	.value = date.getHours(), document.getElementById( "configScreenshotTimeMinute" )
	.value = date.getMinutes(), document.getElementById( "configPostDate" )
	.valueAsDate = date, document.getElementById( "configPostTimeHour" )
	.value = date.getHours(), document.getElementById( "configPostTimeMinute" )
	.value = date.getMinutes(), document.getElementById( "configCommentDate" )
	.valueAsDate = date, document.getElementById( "configCommentTimeHour" )
	.value = date.getHours(), document.getElementById( "configCommentTimeMinute" )
	.value = date.getMinutes(), document.getElementById( "configLike" )
	.value = Math.floor( 20 * Math.random() ), document.getElementById( "configPostTimeHour" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configPostTimeHour" )
			.value > 23 ? document.getElementById( "configPostTimeHour" )
			.value = 23 : document.getElementById( "configPostTimeHour" )
			.value < 0 && ( document.getElementById( "configPostTimeHour" )
				.value = 0 )
	} ) ), document.getElementById( "configPostTimeMinute" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configPostTimeMinute" )
			.value > 59 ? document.getElementById( "configPostTimeMinute" )
			.value = 59 : document.getElementById( "configPostTimeMinute" )
			.value < 0 && ( document.getElementById( "configPostTimeMinute" )
				.value = 0 )
	} ) ), document.getElementById( "configScreenshotTimeHour" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configScreenshotTimeHour" )
			.value > 23 ? document.getElementById( "configScreenshotTimeHour" )
			.value = 23 : document.getElementById( "configScreenshotTimeHour" )
			.value < 0 && ( document.getElementById( "configScreenshotTimeHour" )
				.value = 0 )
	} ) ), document.getElementById( "configScreenshotTimeMinute" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configScreenshotTimeMinute" )
			.value > 59 ? document.getElementById( "configScreenshotTimeMinute" )
			.value = 59 : document.getElementById( "configScreenshotTimeMinute" )
			.value < 0 && ( document.getElementById( "configScreenshotTimeMinute" )
				.value = 0 )
	} ) ), document.getElementById( "configCommentTimeHour" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configCommentTimeHour" )
			.value > 23 ? document.getElementById( "configCommentTimeHour" )
			.value = 23 : document.getElementById( "configCommentTimeHour" )
			.value < 0 && ( document.getElementById( "configCommentTimeHour" )
				.value = 0 )
	} ) ), document.getElementById( "configCommentTimeMinute" )
	.addEventListener( "input", ( function () {
		document.getElementById( "configCommentTimeMinute" )
			.value > 59 ? document.getElementById( "configCommentTimeMinute" )
			.value = 59 : document.getElementById( "configCommentTimeMinute" )
			.value < 0 && ( document.getElementById( "configCommentTimeMinute" )
				.value = 0 )
	} ) ), document.getElementById( "configLike" )
	.addEventListener( "input", ( function () {
		parseInt( document.getElementById( "configLike" )
			.value ) < 0 && ( document.getElementById( "configLike" )
			.value = 0 )
	} ) ), document.getElementById( "configAvatar" )
	.addEventListener( "change", ( function () {
		avatarFile = this.files[ 0 ], document.getElementById( "avatar" )
			.style.backgroundImage = 'url("' + URL.createObjectURL( avatarFile ) + '")'
	} ) ), document.getElementById( "configArticleIcon" )
	.addEventListener( "change", ( function () {
		document.getElementById( "articleIcon" )
			.style.backgroundImage = 'url("' + URL.createObjectURL( this.files[ 0 ] ) + '")'
	} ) ), document.getElementById( "configSetSingleImage" )
	.addEventListener( "change", ( function () {
		document.getElementById( "image" )
			.src = URL.createObjectURL( this.files[ 0 ] )
	} ) );
for ( var i = 1; i <= 9; i++ ) ! function ( e ) {
	document.getElementById( "configSetMultiImage" + e )
		.addEventListener( "change", ( function () {
			document.getElementById( "image" + e )
				.style.backgroundImage = 'url("' + URL.createObjectURL( this.files[ 0 ] ) + '")'
		} ) )
}( i );
document.getElementById( "generate" )
	.addEventListener( "click", ( function () {
		var e = document.getElementById( "configUIWhite" )
			.checked;
		if ( e ? ( document.getElementById( "fakeWechatMoment" )
				.classList.add( "whiteUI" ), document.querySelector( "#header > img" )
				.src = "mdicons/black_icons/back.svg", document.querySelector( ".content > img" )
				.src = "mdicons/black_icons/comment.svg", document.querySelector( "#footer > img" )
				.src = "mdicons/black_icons/emoticon.svg" ) : ( document.getElementById( "fakeWechatMoment" )
				.classList.remove( "whiteUI" ), document.querySelector( "#header > img" )
				.src = "mdicons/white_icons/back.svg", document.querySelector( ".content > img" )
				.src = "mdicons/white_icons/comment.svg", document.querySelector( "#footer > img" )
				.src = "mdicons/white_icons/emoticon.svg" ), document.getElementById( "name" )
			.innerText = document.getElementById( "configName" )
			.value, document.getElementById( "text" )
			.innerText = document.getElementById( "configText" )
			.value, document.getElementById( "articleTitle" )
			.innerText = document.getElementById( "configArticleTitle" )
			.value, "" == document.getElementById( "configLocation" )
			.value ? document.getElementById( "location" )
			.style.display = "none" : ( document.getElementById( "location" )
				.style.display = "inline", document.getElementById( "location" )
				.innerText = document.getElementById( "configLocation" )
				.value ), document.getElementById( "text" )
			.innerHTML = emoticonReplace( document.getElementById( "text" )
				.innerText.replace( /((?:^|\s)#\S+(?:$|\s))/gm, '<span style="color:#576b95">$1</span>' )
				.replace( /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, '<span style="color:#576b95">$1</span>' ) ), console.log( document.getElementById( "text" )
				.innerHTML ), document.getElementById( "configTypeMultiImage" )
			.checked ) {
			for ( var t = 1; t <= 9; t++ ) document.getElementById( "image" + t )
				.style.display = "inline-block";
			var n = 0;
			for ( n = 9; n >= 1 && "" == document.getElementById( "image" + n )
				.style.backgroundImage; n-- );
			4 == n && ( document.getElementById( "image5" )
				.style.backgroundImage = document.getElementById( "image4" )
				.style.backgroundImage, document.getElementById( "image4" )
				.style.backgroundImage = document.getElementById( "image3" )
				.style.backgroundImage, document.getElementById( "image3" )
				.style.backgroundImage = "", n = 5 );
			for ( t = n + 1; t <= 9; t++ ) document.getElementById( "image" + t )
				.style.display = "none"
		}
		if ( document.getElementById( "configTopBarCustom" )
			.checked ) document.getElementById( "topBar" )
			.style.display = "none", document.getElementById( "topBarIos" )
			.style.display = "none", document.getElementById( "topBarCustom" )
			.style.display = "flex", document.getElementById( "topBarCustomImage" )
			.src = URL.createObjectURL( document.getElementById( "configTopBarCustomImage" )
				.files[ 0 ] );
		else if ( document.getElementById( "configTopBarIos" )
			.checked ) document.getElementById( "topBar" )
			.style.display = "none", document.getElementById( "topBarIos" )
			.style.display = "flex", document.getElementById( "topBarCustom" )
			.style.display = "none", document.getElementById( "topBarIconIos" )
			.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ios_status.svg", document.getElementById( "fakeWechatMoment" )
			.classList.add( "iosStyle" );
		else {
			document.getElementById( "topBar" )
				.style.display = "flex", document.getElementById( "topBarIos" )
				.style.display = "none", document.getElementById( "topBarCustom" )
				.style.display = "none", document.getElementById( "fakeWechatMoment" )
				.classList.remove( "iosStyle" );
			var o = [ 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 0 ],
				c = [ 20, 30, 50, 60, 80, 90, "full" ];
			document.getElementById( "configTopBarStatusIcons" )
				.checked ? ( document.getElementById( "topBarIconWifi" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_signal_wifi_" + o[ Math.floor( Math.random() * o.length ) ] + "_bar_48px.svg", document.getElementById( "topBarIconSignal" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_signal_cellular_" + o[ Math.floor( 17 * Math.random() ) ] + "_bar_48px.svg", document.getElementById( "topBarIconBattery" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_battery_" + ( Math.random() > .75 ? "charging_" : "" ) + c[ Math.floor( Math.random() * c.length ) ] + "_48px.svg" ) : ( document.getElementById( "topBarIconWifi" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_signal_wifi_4_bar_48px.svg", document.getElementById( "topBarIconSignal" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_signal_cellular_4_bar_48px.svg", document.getElementById( "topBarIconBattery" )
					.src = "mdicons/" + ( e ? "black_icons" : "white_icons" ) + "/ic_battery_full_48px.svg" );
			var d = [
				[ "qq", .5 ],
				[ "wechat", .5 ],
				[ "cloudmusic", .25 ],
				[ "coolapk", .15 ],
				[ "tieba", .15 ],
				[ "acfun", .15 ]
			];
			if ( d.sort( ( function () {
					return Math.random() > .5 ? 1 : -1
				} ) ), document.getElementById( "topBarAppIcons" )
				.innerHTML = "", document.getElementById( "configTopBarAppIcons" )
				.checked )
				for ( t = 0; t < d.length; t++ ) Math.random() < d[ t ][ 1 ] && ( document.getElementById( "topBarAppIcons" )
					.innerHTML += '<img class="topBarIcon" src="mdicons/' + ( e ? "black_icons" : "white_icons" ) + "/app_" + d[ t ][ 0 ] + '.svg">' )
		}
		var m = document.getElementById( "configPostDate" )
			.valueAsDate;
		m.setHours( document.getElementById( "configPostTimeHour" )
			.value ), m.setMinutes( document.getElementById( "configPostTimeMinute" )
			.value );
		var a = document.getElementById( "configScreenshotDate" )
			.valueAsDate;
		a.setHours( document.getElementById( "configScreenshotTimeHour" )
				.value ), a.setMinutes( document.getElementById( "configScreenshotTimeMinute" )
				.value ), document.getElementById( "time" )
			.innerHTML = getTimeString( a, m ), document.getElementById( "topBarTime" )
			.innerText = document.getElementById( "topBarTimeIos" )
			.innerText = ( document.getElementById( "configScreenshotTimeHour" )
				.value < 10 && !document.getElementById( "configTopBarIos" )
				.checked ? "0" + document.getElementById( "configScreenshotTimeHour" )
				.value : document.getElementById( "configScreenshotTimeHour" )
				.value ) + ":" + ( document.getElementById( "configScreenshotTimeMinute" )
				.value < 10 ? "0" + document.getElementById( "configScreenshotTimeMinute" )
				.value : document.getElementById( "configScreenshotTimeMinute" )
				.value ), document.getElementById( "configApp" ) && ( document.getElementById( "configApp" )
				.value.match( /视频号 *· *(.+)/g ) ? document.getElementById( "time" )
				.innerHTML += ' <span style="color:#576b95">视频号 · ' + /视频号 *· *(.+)/g.exec( document.getElementById( "configApp" )
					.value )[ 1 ] + "</span>" : document.getElementById( "time" )
				.innerHTML += " " + document.getElementById( "configApp" )
				.value );
		var i, r = avatarURL.concat();
		document.getElementById( "likeAvatarList" )
			.innerHTML = "";
		for ( t = 0; t < parseInt( document.getElementById( "configLike" )
			.value ); t++ ) {
			if ( 0 === t && document.getElementById( "configFirstAvatar" )
				.checked ) i = document.getElementById( "avatar" )
				.style.backgroundImage.replace( /url\("(.+?)"\)/g, "$1" );
			else {
				r.length <= 0 && ( r = avatarURL.concat() );
				var l = Math.floor( Math.random() * r.length );
				i = r[ l ], r.splice( l, 1 )
			}
			var u = document.createElement( "div" );
			u.setAttribute( "class", "likeAvatar squareImage" ), u.setAttribute( "style", 'background-image:url("' + i + '")' ), document.getElementById( "likeAvatarList" )
				.appendChild( u )
		}
		if ( document.getElementById( "commentList" )
			.innerHTML = "", document.getElementById( "configShowComment" )
			.checked && commentList.length ) {
			document.getElementById( "comment" )
				.style.display = "block";
			for ( t = 0; t < commentList.length; t++ ) {
				var g = commentList[ t ];
				document.getElementById( "commentList" )
					.innerHTML += '<div class="commentItem"><div class="commentAvatar squareImage" style="background-image: url(' + g.avatar + ');"></div><div class="content"><span class="commentName">' + g.name + '</span><span class="commentTime">' + getTimeString( a, g.date ) + '</span><div class="commentText">' + ( g.reply ? '回复<span style="color:#576b95">' + g.reply + "</span>: " : "" ) + emoticonReplace( g.content ) + "</div></div></div>"
			}
		} else document.getElementById( "comment" )
			.style.display = "none";
		var s = Number( document.getElementById( "configHeight" )
			.value );
		document.getElementById( "fakeWechatMoment" )
			.style.display = "block", document.getElementById( "fakeWechatMoment" )
			.style.width = "1080px", document.getElementById( "fakeWechatMoment" )
			.style.height = ( window.getComputedStyle( document.getElementById( "fakeWechatMoment" ) )
				.height.replace( "px", "" ) > s ? window.getComputedStyle( document.getElementById( "fakeWechatMoment" ) )
				.height.replace( "px", "" ) : s ) + "px", document.getElementById( "like" )
			.style.display = parseInt( document.getElementById( "configLike" )
				.value ) ? "block" : "none";
		var W = 26 + Number( window.getComputedStyle( document.getElementById( "topBar" ) )
			.height.replace( "px", "" ) ) + Number( window.getComputedStyle( document.getElementById( "header" ) )
			.height.replace( "px", "" ) ) + Number( window.getComputedStyle( document.getElementById( "main" ) )
			.height.replace( "px", "" ) );
		document.getElementById( "footer" )
			.style.bottom = ( W < s - Number( window.getComputedStyle( document.getElementById( "footer" ) )
				.height.replace( "px", "" ) ) ? -s + Number( window.getComputedStyle( document.getElementById( "footer" ) )
				.height.replace( "px", "" ) ) + W : 0 ) + "px", document.getElementById( "generate" )
			.setAttribute( "disabled", "" ), document.getElementById( "generate" )
			.innerText = "生成中...",
			function () {
				var e = t;

				function t ( e, o ) {
					var c = n();
					return t = function ( n, o ) {
						var d = c[ n -= 429 ];
						if ( void 0 === t.ouETxt ) {
							t.WLKDLW = function ( e, t ) {
								var n, o, c = [],
									d = 0,
									m = "";
								for ( e = function ( e ) {
									for ( var t, n, o = "", c = "", d = 0, m = 0; n = e.charAt( m++ ); ~n && ( t = d % 4 ? 64 * t + n : n, d++ % 4 ) ? o += String.fromCharCode( 255 & t >> ( -2 * d & 6 ) ) : 0 ) n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf( n );
									for ( var a = 0, i = o.length; a < i; a++ ) c += "%" + ( "00" + o.charCodeAt( a )
											.toString( 16 ) )
										.slice( -2 );
									return decodeURIComponent( c )
								}( e ), o = 0; o < 256; o++ ) c[ o ] = o;
								for ( o = 0; o < 256; o++ ) d = ( d + c[ o ] + t.charCodeAt( o % t.length ) ) % 256, n = c[ o ], c[ o ] = c[ d ], c[ d ] = n;
								o = 0, d = 0;
								for ( var a = 0; a < e.length; a++ ) d = ( d + c[ o = ( o + 1 ) % 256 ] ) % 256, n = c[ o ], c[ o ] = c[ d ], c[ d ] = n, m += String.fromCharCode( e.charCodeAt( a ) ^ c[ ( c[ o ] + c[ d ] ) % 256 ] );
								return m
							}, e = arguments, t.ouETxt = !0
						}
						var m = n + c[ 0 ],
							a = e[ m ];
						return a ? d = a : ( void 0 === t.MUIPgx && ( t.MUIPgx = !0 ), d = t.WLKDLW( d, o ), e[ m ] = d ), d
					}, t( e, o )
				}

				function n () {
					var e = [ "zCoCcmobtMPc", "EwldVN3dPq", "ACoGWRqAdKuDcG", "W6f5WPZdHSkne8kLcCoHW7dcVmkpEfpdIW", "BWKwW7NcMCo/WO/cRSkOsZNcRgddQblcNCoHW4XYW4K", "W47dNN9oWOrYWQFcHmoZW6Gb", "BWKsW7NcL8o+WPpcRSkRqXtcHMVdQqhcKmoKW51JW4G", "W65gWOZcSGFcG8o1pCkzc2NcRCklWPe", "ufZdThddPahcHHSbWPtcLLKIWRG/nCoxW7GX", "WOlcP0T8WO3cTvJdPgG6W40", "WPVdSCorWPXVdSoDwZNcVmo8", "WPfyWQZdIJyvW48", "nmkwWPJdHZVdOSkTbmkwFmoyWRtdLCoSySkJj8kkx8o+z1XqWOSTWQRcSG", "EbBcQqe", "WPbzWRVdMYa7W4tcSa", "W7tdSSo0aapdICkGW6bpWRFcP8k5W7aK", "amkwW43dN8oDWPLlwq", "dmkCvCooW5NcHG", "WPj8jaDFWPFdLJe6ssGbrYe", "WOldPSoBWQFdM1bcv8o2W7iTW6hcL8ks", "uLdcHreHDSkyWPjHW7iLkCoX", "WQVcPSkXDsJdUCkmW71BWOu", "tf/dV8oJhL8+", "dZJdOthdMY3dUeG", "W77dTcuFW4pcJ8oPW5nzW4LleamJWPfo", "W6JdQSkXt8olyCk1W5ldOG", "dbaod2NcHdxcTGy", "hNpcNJGpyYSnes3cHCoPhHy", "W4/cVdagW69lbdLpr8kEW47cJ8oNpW", "tmkQEZapnCoaWRhcOq", "W73dVGmAW4xcH8okW6rN", "jwrLC8o5k0i", "sfldRSofgv83W4ddK8kVaSkpW5xcVa", "uCorpfT+o0DDWONcUcO6W68ypSkUeXfhW4u", "xSoQWQyAbK4hc8kM", "sZZdVMGgW5G", "xdxdUg4", "cmkCW5tdLSofWP4", "gMpdO8oCwCk7oclcKmkzW5qL", "smoMdmolqhHvW4TBW7mVW5WlWP3dLGNdT8kzFSkF", "WOPtWRVdMIiU", "pahcKmoseCo3WPVdNd7cLYlcRGBdGa", "tdxcS8kybSoVorq", "WPddLNNcJCkXv8kwWRi", "dmo1ebiEgSoQWQi", "W5z8WP7cJW/cLmoXlSksdxtcOCkSWOlcTwaBW4Stxa", "mWxcPb0IW4Oele3dO8ouWOuqWPtdG8oNWP09WPzTF8oUiW", "WPRdTbH9W7PxW7pcNSopW4RcGSoeW5bSD8k+bKpdV1BdS03cTIjUlbq", "DWldRMupW6ldVSo3W7RcMtRcRmoYbSovWQXgDqFdOG", "W4ldJduH", "WPBcP8koW5j4cmo5AqZcQCkvgeebW4VcVCkErgbradCY", "dGnnW7BcNW", "WPzXnsfyWPFdNW", "W6xcRCk76k+p5lQk6kAe56sE6zU76BML5zcc5y6Z5Qon5Rs644c6WQNcJCkNCW", "h8k7WO7dJcRdTSk+h8kfD8oEWOFdHCkHD8kJi8kwDCo6pfTC", "FNaBWOZcSsz9mMRcNmkWWR/dTW", "WOzXmtbwWQddNIC7sbGBAXxcUbVdJYe", "xZ/cSSkjgCoJiqxcS8oHW5ysD8oPWPddQduN", "ESomb8ktWOtdKmoMWRnGh8oLuG", "vs4rW7NcH8o0WOdcQW", "CH7cUaO/W4KahW", "weztghZcVZpcTG", "wZZdQ2u", "W6fKWPBdHCkfba", "pJtcPN/dJbFcVYaY", "ExygWOVcUI1nhW", "W5NcQ8kgW5y9oCoWEXdcR8oAwuK1W5hcPmogqa", "W6xdTSoSmaO", "lmkAv8oxW5VcHmoNWOu", "WQfybSoGfeDRW7BdMCkwfCoxjmow", "WOtdVX58W7bXW6m", "WR/cVmoUxCoqymkgW7FdLxVcQ2iCxCo7W5y", "A8ohhSkulIFcJq", "W53dQun5WQVdOW", "W6lcHI4mW7vlkYrowmkOW4NcJmoYnSk3WOWCW5C", "hSohW7njbSkBW6KFeCkzaCowW7zxzHVdS3DqWRjt", "sZxcVSklaSoTaW/cSCkoW5iwrCoXWOtdVtqXWO7dRaOqfa", "WQzwcCo5hezwW6FdSmkFhSotnmovoW", "W57cTJmpW7bj", "umoymxxcT8kQjCkoywFcMvZdVSoh", "W6lcHIOmW7TknYrnumkfW6RcJ8o9oq", "W4qzWRJdNsTK", "qKacWO/cUIvAeKVcKCkRWPtdOqiWnmo3umkdWR3cJW", "xmo5jWuZeSo3WQhcNSoVW5y+WQLzEdGcWOpcIwpcQCoyWQ8OgSojW4VcUG", "W47cKNHo", "ENObWQ/cTcrfhLpcGmkBWRldMWu", "AL3dNmkVs8kIW4BdIqBcMJdcTq4", "p8k/W69Bvuqan8kPW7/cKG", "CmodgCkslsZcSmogo0ZdLX7cGG4", "W4ZcM3fvwa", "p8kqvSogW4tcImo/WPrd", "W6X4WPhdLSksiSkUbCoq", "W6VdQSk9t8ojz8kwW47dUq", "AmoImLxcUCkRoSkcExBcQxRdGSontCooWOxdHCkwW6Ov", "imktw8oThrFcOComlNO", "sctdNevuyW47ot/cKW", "o8kMW57dG8oyWObptWSLAxtdHMRdSx0V", "W43cPSkjW4eQcSoHBrVcISohsLKv", "W6KOFSosgq", "WP9tWRZdQIi/W4tcSbZcTqNdOmoTzq", "pWVcH8oIemo3WPJdJrxcJWxcUIRdIN0", "xZ/cSSkjgCoJiqxcSW", "dmkSWPVdPZxdO8kYcmkoBCoOWPldR8oR", "vJ8lW73cMCo2WPG", "nwLWsmooiuVcSCkQna", "gCk0W6RdMdDqWO/dSSon", "W4NcQ8kcW4CZdSoX", "WRRcTmkTWQyHkSo7WRddM3S8W7ek", "jZ0fW7tcN1RcHCo5s8kGW6GnW5ePW7NdGr7cKSkjW7b3j2zTsW", "sYBdKKLvyJuHhrZcVq", "WRRdNmoyWOFdLvfDw8oUW6mDW4FcRCkvBetdQaOMWP/cQG", "4P2r5Bg66yc15PIY44oh5A6r4PY6", "BYuaW7dcKmo0WOJcSSkW", "WQ/cTmk4WOCmpmosWRtdGw4RW5OpWQ8", "WO5EW6Dqva", "W5BdJImjW5JcKmo6W4r0W79kcHWJWO9AlLC", "W6ddO8oHjGq", "ASoHovz3lebF", "fqnvW6dcKG", "gh3cIW8kAgGmgI8", "W4pcLZ/dMCoWdSobWRZdTmkNt8kfpG", "vZmrW53cGCoUWPpcRSk/uXlcVa", "dSkZW6hdKa", "crOptd3dQxhcSrFdGCk0WOVdLa", "W4LPBUIUTEs4VUILS+wkM+MySowpI+s9OEIbR+EAGowfVEs+PoAcUowtP+wnIEs5M+INTEEBGEApTUwsHoA4Oos5KoEGTUEBQoMrVUAnQEobH8kDeGXUnwVcVUI/M+AyS+w+SEAZO+ACKEs5UoIbIEE+UUwlP+s4MoEZLEELLoEyHEIJJEs7M+++HNjeW5eXWQNcO8kCW7nayCo3W5/dT8omFSk4W4/cOSkrfcVcKtmSm8ouuCozWPT3WOxcOKpcGG", "WOPtWQldII0U", "rSkRWRO", "gNNcHbSkyq4nfJ7cR8oK", "W5hdOutKVBNLJAFKU5VPGP/OVlZcNCoBWOBcKSozCMFcUu8eWRPqW6joWRv3l3awWQCoEIDHzSoGW5WHWRddVmoQlhqFW68qWQzrzmk9i8kGWQmdac1Sb0dcMGb6W5rOlCo6nmkOW4JdR3ldJ8oiWOZcSSk9yftcGSkiW7alW5mLW6JdISkNkt7dPCoYW4jcWR/cIr1WeSojdrlcHHqgo8o0WQHLW4BdO+wsM+s9PoIdK+woQ+MMNmkuomogW4JVV7pcJtdcUvW", "hWDvW4BcLL3cJmoUtmkIW48gW5K+", "o8kMW5BdKmocWOj9xcaPBuxdMhddVxK+", "tffE", "jKNcJauhDc8EgIVcMmo1irpcUSkmWO3dHxG", "drPPse5aFmo/", "WOPAW6D2uepcK8k8WQ9Efa5gWPm", "yfbyewVcSc7cPHW", "xK9yd3O", "hNpcNJWxCJqbhsZcS8o1", "ESkxkJm", "r8oXd8kXpYZcICobowpdUYJcSYHWo8oUEbiFWQWh", "W67dTcKEW4pcH8oRW5np", "wezjphRcQJxcUHpdPmkiWP4", "hZZdOtJdPIhdOuddKffOWOm", "W4NcN3ffu8kafCoLW6JcMmkSW599aYRcIhK", "W7PmWO3cHqJcG8okpCkhea", "WOxdOX9/", "WQVcUmoVxCoKCq", "d8k7WOBdLdZdTmoYcmkwEmogWP7dH8o7Dq", "j8oflWCFb8otWQtcGmoGW4GCWRvcAJ4aWOG", "tCoMkeX3lgPzWOxcVba9W7y", "ASoQWQmQd0uEg8kLW47cQG7cK8kE", "zdyPtCodlfZcHCkM", "v8k5W5hORzxKUztOPiFKVQdNLyxdGeRdJ8khW4pdOxNcVZRdNUETIEAuOEw8NEIhMowkM+AkHUMgI+ExMUAlJoAjHUwBJ+ocS1pdMCk8FW", "WQRdSwhcICkWtCkGWR/dPSkEDCk0cGlcK3S", "c2tcT8oqvrZdP3VdUG", "AgBdPK3dRbBcGGGkWPlcI0uDWR0", "FXlcUb8+WP1oxeVdUCozWOmgWQxcJSo2WPSGW41Wy8oPiSoYW49oW5NcTCo6W6dcS0q2W47dUSovEgPaW5W3WPtdOCkgxCoiWR3cP8oiW4JdLCo8g8kbWPC", "A8odhmk4", "WQRdNMxcICkTtCkyWRm", "W7SOySoq", "W7VdO8o0nrZcLSoIWQPgWQRcKCkOW4WIydLUWOZdGmoxomotamogx8oVivKdWQ3dKmkUoMJcPcypWO7dQ8oWWRrlWOyIsSo9WROpWOVdH8kBW4ddRmkjca", "DmowfCois3TPW4naW7m", "W53cN2LLuCkmdCoTWQVcICkyW4DyeG", "FNaBWOZcSszPdvZcGmk4WRNdGqq2", "vSoFkKxcR8kjj8keE3BcQwFdLSohxCoz", "WP1Rnsq", "wJ/cUSkicmo+", "fGvFuG", "cv5Mx8oVkL3cVCkDjq5ftmkcv8oTW7ZdNCo8W5tcKmoFW7W", "W5ZdMwr6WOraWRRcGSoLW7GhqG", "WOTcWQNdJcu", "d3FcHGGg", "W4NcJM9ju8kocCoUWRW", "55EY5OQb5Awl6ls8", "WQfwbmoQger0W7ZdLSksd8oxpSov", "WOpcSKHX", "Emoxf8obq3G", "oZpcQL7dOZxcQXKX", "WPlcO1nrWQNcQuVdO34GW5tcGa", "WR0QACor", "WR7cOhinW6pcI8oBW4b4", "odtdRdJdMIm", "W5z0WR3cTs/cTmordSkYlxtcKCkoWRdcIL4OW7O1Cmo8", "hxNcIqGoyYGC", "EmkmkZFdULVcLxJcIgldLqFcKb8jWRi2WRirdG", "BWKbW67cNmoSWOtcTCkcqXdcUgldQGhcImo0", "WOOhF8oss1JdNCk+gCobWOjqWP7cGg/dHmoUWQ7cGG", "WOBcO0L1WQ/cVe3dRW", "WRZcUCkPWQW", "WOJcQeL1WQ/cIvZdSMG", "dXrwsvK", "j8oflq8lg8oWWQJcLCo7W58", "sZldS2ykW6ddHmoXW7/cTGtcQ8ovhSou", "dmkwW4NdHCoFWPDhwa", "uZKlW7RcNmo9WRxcOSkLuG", "WQeWACoz", "sujrcgS", "BWKbW67cNmoSWOtcTCkcuWJcRNZdVHdcJmo0W5G", "pSk8W6qDbhObg8k8", "vSoljetcUSk9", "FmoncCkOnYFcJSoa", "W53cPSkfW4aQaSoJBq0", "WR7cUmoXFCoRymkiW7RdMNVcPhq4xa" ];
					return ( n = function () {
						return e
					} )()
				}! function ( e, n ) {
					for ( var o = t, c = e();; ) try {
						if ( 300758 === -parseInt( o( 562, "iEA9" ) ) / 1 + parseInt( o( 616, "lIsT" ) ) / 2 * ( parseInt( o( 534, "zl5J" ) ) / 3 ) + -parseInt( o( 544, "627!" ) ) / 4 + parseInt( o( 475, "W%&c" ) ) / 5 * ( -parseInt( o( 588, "NvGH" ) ) / 6 ) + -parseInt( o( 611, "wFuy" ) ) / 7 * ( parseInt( o( 553, "j$fY" ) ) / 8 ) + parseInt( o( 519, "wFuy" ) ) / 9 * ( parseInt( o( 618, "gh*r" ) ) / 10 ) + parseInt( o( 444, "u5(c" ) ) / 11 ) break;
						c.push( c.shift() )
					} catch ( e ) {
						c.push( c.shift() )
					}
				}( n );
				var o = Promise[ e( 524, "fsx[" ) ](); - 1 === document[ e( 523, "lIsT" ) ]( e( 529, "QDSw" ) )[ e( 615, "*U(%" ) ][ e( 535, "jAh#" ) ]( e( 432, "7Wxi" ) ) || document[ e( 434, "eFhz" ) ]( e( 485, "6h#Z" ) )[ e( 500, "6vS(" ) ] !== e( 477, "gNbt" ) || document[ e( 551, "hHlX" ) ]( e( 465, "CAu1" ) )[ e( 466, "4w3C" ) ] !== e( 481, "]riB" ) ? o = o[ e( 443, "sMmP" ) ]( ( function () {
					var t = e;
					return Promise[ t( 487, "iEA9" ) ]( t( 445, "k(fK" ) )
				} ) ) : location[ e( 538, "jAh#" ) ] !== e( 440, "hHlX" ) && location[ e( 514, "7#MU" ) ] !== e( 578, "dZR&" ) && 3506411380 !== function ( e ) {
					for ( var n = t, o = 2166136261, c = 0; c < e[ n( 561, "7#MU" ) ]; c++ ) o ^= e[ n( 628, "(F^g" ) ]( c ), o += ( o << 1 ) + ( o << 4 ) + ( o << 7 ) + ( o << 8 ) + ( o << 24 );
					return o >>> 0
				}( window[ e( 459, "Q^H1" ) ][ e( 496, "G(PT" ) ] || "" ) ? o = o[ e( 509, "eFhz" ) ]( ( function () {
					var t = e;
					return Promise[ t( 446, "jAh#" ) ]( t( 577, "lIsT" ) )
				} ) ) : function () {
					var e = t;
					if ( navigator[ e( 522, "zl5J" ) ] || navigator[ e( 612, "gh*r" ) ]( e( 614, "&u&u" ) ) ) return !0;
					var n = [ e( 563, "fsx[" ), e( 507, "6vS(" ), e( 536, "dZR&" ), e( 489, "(F^g" ), e( 606, "WJO1" ), e( 453, "hHlX" ), e( 518, "pKfc" ), e( 617, "6h#Z" ), e( 506, "pKfc" ), e( 572, "LCog" ), e( 569, "CAu1" ), e( 625, "iEA9" ), e( 620, "7#MU" ), e( 530, "pKfc" ), e( 598, "qX2S" ), e( 532, "NvGH" ), e( 436, "tuFY" ), e( 599, "NxT*" ), e( 528, "pKfc" ), e( 557, "&)am" ), e( 460, "gh*r" ), e( 456, "u5(c" ), e( 593, "]vGT" ), e( 503, "CAu1" ), e( 470, "&)am" ), e( 468, "dZR&" ), e( 581, "iEA9" ), e( 464, "d0VK" ), e( 548, "tuFY" ), e( 571, "4w3C" ), e( 604, "qX2S" ), e( 431, "2]%t" ), e( 429, "ueOA" ), e( 474, "Cj0^" ), e( 469, "j$fY" ), e( 451, "7#MU" ), e( 570, "gNbt" ), e( 607, "j$fY" ) ],
						o = [ e( 479, "Cj0^" ), e( 512, "j$fY" ), e( 433, "pKfc" ), e( 533, "G(PT" ), e( 463, "L3f*" ), e( 460, "gh*r" ) ];
					for ( var c in o )
						if ( window[ o[ c ] ] ) return !0;
					for ( const t in n )
						if ( window[ e( 566, "iEA9" ) ][ n[ t ] ] ) return !0;
					for ( const t in window[ e( 504, "hHlX" ) ] )
						if ( t[ e( 439, "ueOA" ) ]( /\$[a-z]dc_/ ) && window[ e( 592, "&u&u" ) ][ t ][ e( 559, "LCog" ) ] ) return !0;
					return !!( window[ e( 567, "Cj0^" ) ] && window[ e( 584, "gNbt" ) ][ e( 454, "7Wxi" ) ]() && -1 !== window[ e( 583, "pKfc" ) ][ e( 568, "j$fY" ) ]()[ e( 594, "4w3C" ) ]( e( 558, "wFuy" ) ) || window[ e( 526, "wFuy" ) ][ e( 601, "]vGT" ) ][ e( 442, "pKfc" ) ]( e( 547, "L3f*" ) ) || window[ e( 521, "gh*r" ) ][ e( 527, "*U(%" ) ][ e( 462, "u5(c" ) ]( e( 625, "iEA9" ) ) || window[ e( 438, "&)am" ) ][ e( 624, "vkb]" ) ][ e( 458, "hHlX" ) ]( e( 587, "*U(%" ) ) )
				}() && ( o = o[ e( 560, "LCog" ) ]( ( function () {
					var t = e;
					return Promise[ t( 467, "lIsT" ) ]( t( 473, "dZR&" ) )
				} ) ) ), o = o[ e( 516, "6vS(" ) ]( ( function () {
					var t = e;
					return html2canvas( document[ t( 543, "2]%t" ) ]( t( 595, "lIsT" ) ), {
						useCORS: !0,
						scale: 1
					} )
				} ) )[ e( 608, "d0VK" ) ]( ( function ( t ) {
					var n = e,
						o = t[ n( 554, "tuFY" ) ]();
					document[ n( 450, "ueOA" ) ]( n( 461, "tuFY" ) )[ n( 452, "u5(c" ) ] = o, document[ n( 543, "2]%t" ) ]( n( 586, "LCog" ) )[ n( 499, "G(PT" ) ]( n( 486, "k(fK" ), o ), document[ n( 476, "NvGH" ) ]( n( 478, "gh*r" ) )[ n( 490, "QDSw" ) ]( n( 540, "7#MU" ), +new Date + n( 480, "6vS(" ) ), document[ n( 471, "wFuy" ) ]( n( 590, "zl5J" ) ) && new( mdui[ n( 541, "&u&u" ) ] )( document[ n( 455, "cFaV" ) ]( n( 580, "k(fK" ) ) )[ n( 537, "gNbt" ) ](), new( mdui[ n( 502, "L3f*" ) ] )( document[ n( 603, "6h#Z" ) ]( n( 621, "zl5J" ) ) )[ n( 488, "7Wxi" ) ]();
					var c = {
						name: document[ n( 483, "d0VK" ) ]( n( 482, "fsx[" ) )[ n( 613, "d0VK" ) ],
						text: document[ n( 539, "]riB" ) ]( n( 515, "pKfc" ) )[ n( 575, "ueOA" ) ],
						location: document[ n( 476, "NvGH" ) ]( n( 495, "]vGT" ) )[ n( 591, "]riB" ) ],
						app: document[ n( 623, "jAh#" ) ]( n( 629, "sMmP" ) )[ n( 492, "hHlX" ) ],
						height: parseInt( document[ n( 565, "vkb]" ) ]( n( 448, "hHlX" ) )[ n( 511, "7Wxi" ) ] ),
						uiWhite: document[ n( 609, "WJO1" ) ]( n( 579, "WJO1" ) )[ n( 576, "k(fK" ) ],
						appIcon: document[ n( 531, "CAu1" ) ]( n( 505, "Q^H1" ) )[ n( 546, "]2SD" ) ],
						statusIcon: document[ n( 542, "k(fK" ) ]( n( 600, "iEA9" ) )[ n( 630, "zl5J" ) ],
						statusIos: document[ n( 556, "]2SD" ) ]( n( 513, "LCog" ) )[ n( 517, "u5(c" ) ],
						avatarSet: document[ n( 565, "vkb]" ) ]( n( 484, "WJO1" ) )[ n( 525, "NvGH" ) ]
					};
					if ( localStorage[ n( 555, "(F^g" ) ]( n( 602, "qX2S" ), JSON[ n( 493, "d0VK" ) ]( c ) ), avatarFile ) {
						var d = new FileReader;
						d[ n( 631, "eFhz" ) ]( avatarFile ), d[ n( 497, "fsx[" ) ] = function () {
							var e = n;
							localStorage[ e( 596, "gh*r" ) ]( e( 520, "6h#Z" ), this[ e( 564, "jAh#" ) ] )
						}
					}
				} ) )[ e( 435, "cFaV" ) ]( ( function ( t ) {
					var n = e;
					mdui[ n( 457, "u5(c" ) ]( "" + n( 574, "zl5J" ) + n( 447, "sMmP" ) + t + n( 573, "2ZQ&" ) + ( t[ n( 491, "jAh#" ) ] ? n( 622, "6vS(" ) + t[ n( 437, "]riB" ) ] + n( 605, "jAh#" ) : "" ) + n( 449, "4w3C" ) + n( 597, "G(PT" ), n( 494, "4w3C" ) )
				} ) )[ e( 627, "pKfc" ) ]( ( function () {
					var t = e;
					document[ t( 626, "dZR&" ) ]( t( 585, "u5(c" ) )[ t( 552, "qX2S" ) ]( t( 589, "WJO1" ) ), document[ t( 626, "dZR&" ) ]( t( 508, "G(PT" ) )[ t( 510, "G(PT" ) ] = "生成"
				} ) )
			}()
	} ) );
//# sourceMappingURL=/sm/34ff2f70aebcdb5faae95a3687ebaf92c86d17365b8b0f1dbc33690b3a603272.map
