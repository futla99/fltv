 var key = "UecJhidW7PfNtTCKnWk4kXH0NPu7J6M0"

    var encrypted = u;
    console.log(encrypted.toString());

    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    var hmac = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(hmac);
    document.write('{"token":','"',hmac,'"}');
    //console.log(decrypted.toString(CryptoJS.enc.Utf8));

		var playerInstance = jwplayer("player");
		playerInstance.setup({
			file: "https://streamco-media-fwc2022-matchcast.akamaized.net/Content/HLS_HLS/Live/channel(ul-dla-spa-matcha)/master_1p2.m3u8?hdnts=" + hmac,
			title : "Mundial Libre TV | Mira D Sports gratis en HD",
            description: "https://mundiallibre.com",
            image: "",
			type: "hls",
			width: "100%",
			height: "100%",
			aspectratio: "16:9",
			autostart: true,
			cast:{}
		});	
		if (getLang == "") {
			lang = 1;
		}
		jwplayer().on('play', function(e) {
		  jwplayer().setCurrentAudioTrack(lang);
		});
