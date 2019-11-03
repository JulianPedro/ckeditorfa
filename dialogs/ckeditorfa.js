function klick(el) {
	var className = el.childNodes[0].getAttribute('class');
	document.getElementsByClassName('fontawesomeClass')[0].getElementsByTagName('input')[0].value = className;
	el.className = el.className.replace('active', '');
	el.className += ' active';
}
function setColor(color){
	el = document.getElementById('ckeditor-fa-icons');
	el = el.getElementsByTagName('span');
	for(i = 0; i < el.length; i ++){
		el[i].setAttribute('style', 'color:' + color);
	}
};
function searchIcon(val){
	var fas = document.getElementById('ckeditor-fa-icons');
	var a = fas.getElementsByTagName('a');
	for(var i = 0, len = a.length, el, atr; i < len; i ++){
		el = a[i];
		atr = el.childNodes[0].getAttribute('class');
		if(atr && atr.indexOf(val) >= 0){
			el.style.display = 'inline-block';
		}else{
			el.style.display = 'none';
		}
	}
};
function clear(){
	var icons = document.getElementById('ckeditor-fa-icons');
	var activeIcon = icons.getElementsByClassName('active');
	var icon = icons.getElementsByTagName('a');
	for (var i=0; i < activeIcon.length; ++i) {
		activeIcon[i].className = activeIcon[i].className.replace('active', '');
	}
	for(j=0; j < icon.length; ++j){
		icon[j].className = '';
		icon[j].style.display = '';
		icon[j].getElementsByTagName('span')[0].style.color = '';
	}
}
CKEDITOR.dialog.add('ckeditorFaDialog', function (editor) {
var faBrands = JSON.parse('[{"id":"500px"},{"id":"accessible-icon"},{"id":"accusoft"},{"id":"acquisitions-incorporated"},{"id":"adn"},{"id":"adobe"},{"id":"adversal"},{"id":"affiliatetheme"},{"id":"airbnb"},{"id":"algolia"},{"id":"alipay"},{"id":"amazon"},{"id":"amazon-pay"},{"id":"amilia"},{"id":"android"},{"id":"angellist"},{"id":"angrycreative"},{"id":"angular"},{"id":"app-store"},{"id":"app-store-ios"},{"id":"apper"},{"id":"apple"},{"id":"apple-pay"},{"id":"artstation"},{"id":"asymmetrik"},{"id":"atlassian"},{"id":"audible"},{"id":"autoprefixer"},{"id":"avianex"},{"id":"aviato"},{"id":"aws"},{"id":"bandcamp"},{"id":"battle-net"},{"id":"behance"},{"id":"behance-square"},{"id":"bimobject"},{"id":"bitbucket"},{"id":"bitcoin"},{"id":"bity"},{"id":"black-tie"},{"id":"blackberry"},{"id":"blogger"},{"id":"blogger-b"},{"id":"bluetooth"},{"id":"bluetooth-b"},{"id":"bootstrap"},{"id":"btc"},{"id":"buffer"},{"id":"buromobelexperte"},{"id":"buy-n-large"},{"id":"buysellads"},{"id":"canadian-maple-leaf"},{"id":"cc-amazon-pay"},{"id":"cc-amex"},{"id":"cc-apple-pay"},{"id":"cc-diners-club"},{"id":"cc-discover"},{"id":"cc-jcb"},{"id":"cc-mastercard"},{"id":"cc-paypal"},{"id":"cc-stripe"},{"id":"cc-visa"},{"id":"centercode"},{"id":"centos"},{"id":"chrome"},{"id":"chromecast"},{"id":"cloudscale"},{"id":"cloudsmith"},{"id":"cloudversify"},{"id":"codepen"},{"id":"codiepie"},{"id":"confluence"},{"id":"connectdevelop"},{"id":"contao"},{"id":"cotton-bureau"},{"id":"cpanel"},{"id":"creative-commons"},{"id":"creative-commons-by"},{"id":"creative-commons-nc"},{"id":"creative-commons-nc-eu"},{"id":"creative-commons-nc-jp"},{"id":"creative-commons-nd"},{"id":"creative-commons-pd"},{"id":"creative-commons-pd-alt"},{"id":"creative-commons-remix"},{"id":"creative-commons-sa"},{"id":"creative-commons-sampling"},{"id":"creative-commons-sampling-plus"},{"id":"creative-commons-share"},{"id":"creative-commons-zero"},{"id":"critical-role"},{"id":"css3"},{"id":"css3-alt"},{"id":"cuttlefish"},{"id":"d-and-d"},{"id":"d-and-d-beyond"},{"id":"dashcube"},{"id":"delicious"},{"id":"deploydog"},{"id":"deskpro"},{"id":"dev"},{"id":"deviantart"},{"id":"dhl"},{"id":"diaspora"},{"id":"digg"},{"id":"digital-ocean"},{"id":"discord"},{"id":"discourse"},{"id":"dochub"},{"id":"docker"},{"id":"draft2digital"},{"id":"dribbble"},{"id":"dribbble-square"},{"id":"dropbox"},{"id":"drupal"},{"id":"dyalog"},{"id":"earlybirds"},{"id":"ebay"},{"id":"edge"},{"id":"elementor"},{"id":"ello"},{"id":"ember"},{"id":"empire"},{"id":"envira"},{"id":"erlang"},{"id":"ethereum"},{"id":"etsy"},{"id":"evernote"},{"id":"expeditedssl"},{"id":"facebook"},{"id":"facebook-f"},{"id":"facebook-messenger"},{"id":"facebook-square"},{"id":"fantasy-flight-games"},{"id":"fedex"},{"id":"fedora"},{"id":"figma"},{"id":"firefox"},{"id":"first-order"},{"id":"first-order-alt"},{"id":"firstdraft"},{"id":"flickr"},{"id":"flipboard"},{"id":"fly"},{"id":"font-awesome"},{"id":"font-awesome-alt"},{"id":"font-awesome-flag"},{"id":"fonticons"},{"id":"fonticons-fi"},{"id":"fort-awesome"},{"id":"fort-awesome-alt"},{"id":"forumbee"},{"id":"foursquare"},{"id":"free-code-camp"},{"id":"freebsd"},{"id":"fulcrum"},{"id":"galactic-republic"},{"id":"galactic-senate"},{"id":"get-pocket"},{"id":"gg"},{"id":"gg-circle"},{"id":"git"},{"id":"git-alt"},{"id":"git-square"},{"id":"github"},{"id":"github-alt"},{"id":"github-square"},{"id":"gitkraken"},{"id":"gitlab"},{"id":"gitter"},{"id":"glide"},{"id":"glide-g"},{"id":"gofore"},{"id":"goodreads"},{"id":"goodreads-g"},{"id":"google"},{"id":"google-drive"},{"id":"google-play"},{"id":"google-plus"},{"id":"google-plus-g"},{"id":"google-plus-square"},{"id":"google-wallet"},{"id":"gratipay"},{"id":"grav"},{"id":"gripfire"},{"id":"grunt"},{"id":"gulp"},{"id":"hacker-news"},{"id":"hacker-news-square"},{"id":"hackerrank"},{"id":"hips"},{"id":"hire-a-helper"},{"id":"hooli"},{"id":"hornbill"},{"id":"hotjar"},{"id":"houzz"},{"id":"html5"},{"id":"hubspot"},{"id":"imdb"},{"id":"instagram"},{"id":"intercom"},{"id":"internet-explorer"},{"id":"invision"},{"id":"ioxhost"},{"id":"itch-io"},{"id":"itunes"},{"id":"itunes-note"},{"id":"java"},{"id":"jedi-order"},{"id":"jenkins"},{"id":"jira"},{"id":"joget"},{"id":"joomla"},{"id":"js"},{"id":"js-square"},{"id":"jsfiddle"},{"id":"kaggle"},{"id":"keybase"},{"id":"keycdn"},{"id":"kickstarter"},{"id":"kickstarter-k"},{"id":"korvue"},{"id":"laravel"},{"id":"lastfm"},{"id":"lastfm-square"},{"id":"leanpub"},{"id":"less"},{"id":"line"},{"id":"linkedin"},{"id":"linkedin-in"},{"id":"linode"},{"id":"linux"},{"id":"lyft"},{"id":"magento"},{"id":"mailchimp"},{"id":"mandalorian"},{"id":"markdown"},{"id":"mastodon"},{"id":"maxcdn"},{"id":"mdb"},{"id":"medapps"},{"id":"medium"},{"id":"medium-m"},{"id":"medrt"},{"id":"meetup"},{"id":"megaport"},{"id":"mendeley"},{"id":"microsoft"},{"id":"mix"},{"id":"mixcloud"},{"id":"mizuni"},{"id":"modx"},{"id":"monero"},{"id":"napster"},{"id":"neos"},{"id":"nimblr"},{"id":"node"},{"id":"node-js"},{"id":"npm"},{"id":"ns8"},{"id":"nutritionix"},{"id":"odnoklassniki"},{"id":"odnoklassniki-square"},{"id":"old-republic"},{"id":"opencart"},{"id":"openid"},{"id":"opera"},{"id":"optin-monster"},{"id":"orcid"},{"id":"osi"},{"id":"page4"},{"id":"pagelines"},{"id":"palfed"},{"id":"patreon"},{"id":"paypal"},{"id":"penny-arcade"},{"id":"periscope"},{"id":"phabricator"},{"id":"phoenix-framework"},{"id":"phoenix-squadron"},{"id":"php"},{"id":"pied-piper"},{"id":"pied-piper-alt"},{"id":"pied-piper-hat"},{"id":"pied-piper-pp"},{"id":"pinterest"},{"id":"pinterest-p"},{"id":"pinterest-square"},{"id":"playstation"},{"id":"product-hunt"},{"id":"pushed"},{"id":"python"},{"id":"qq"},{"id":"quinscape"},{"id":"quora"},{"id":"r-project"},{"id":"raspberry-pi"},{"id":"ravelry"},{"id":"react"},{"id":"reacteurope"},{"id":"readme"},{"id":"rebel"},{"id":"red-river"},{"id":"reddit"},{"id":"reddit-alien"},{"id":"reddit-square"},{"id":"redhat"},{"id":"renren"},{"id":"replyd"},{"id":"researchgate"},{"id":"resolving"},{"id":"rev"},{"id":"rocketchat"},{"id":"rockrms"},{"id":"safari"},{"id":"salesforce"},{"id":"sass"},{"id":"schlix"},{"id":"scribd"},{"id":"searchengin"},{"id":"sellcast"},{"id":"sellsy"},{"id":"servicestack"},{"id":"shirtsinbulk"},{"id":"shopware"},{"id":"simplybuilt"},{"id":"sistrix"},{"id":"sith"},{"id":"sketch"},{"id":"skyatlas"},{"id":"skype"},{"id":"slack"},{"id":"slack-hash"},{"id":"slideshare"},{"id":"snapchat"},{"id":"snapchat-ghost"},{"id":"snapchat-square"},{"id":"soundcloud"},{"id":"sourcetree"},{"id":"speakap"},{"id":"speaker-deck"},{"id":"spotify"},{"id":"squarespace"},{"id":"stack-exchange"},{"id":"stack-overflow"},{"id":"stackpath"},{"id":"staylinked"},{"id":"steam"},{"id":"steam-square"},{"id":"steam-symbol"},{"id":"sticker-mule"},{"id":"strava"},{"id":"stripe"},{"id":"stripe-s"},{"id":"studiovinari"},{"id":"stumbleupon"},{"id":"stumbleupon-circle"},{"id":"superpowers"},{"id":"supple"},{"id":"suse"},{"id":"swift"},{"id":"symfony"},{"id":"teamspeak"},{"id":"telegram"},{"id":"telegram-plane"},{"id":"tencent-weibo"},{"id":"the-red-yeti"},{"id":"themeco"},{"id":"themeisle"},{"id":"think-peaks"},{"id":"trade-federation"},{"id":"trello"},{"id":"tripadvisor"},{"id":"tumblr"},{"id":"tumblr-square"},{"id":"twitch"},{"id":"twitter"},{"id":"twitter-square"},{"id":"typo3"},{"id":"uber"},{"id":"ubuntu"},{"id":"uikit"},{"id":"umbraco"},{"id":"uniregistry"},{"id":"untappd"},{"id":"ups"},{"id":"usb"},{"id":"usps"},{"id":"ussunnah"},{"id":"vaadin"},{"id":"viacoin"},{"id":"viadeo"},{"id":"viadeo-square"},{"id":"viber"},{"id":"vimeo"},{"id":"vimeo-square"},{"id":"vimeo-v"},{"id":"vine"},{"id":"vk"},{"id":"vnv"},{"id":"vuejs"},{"id":"waze"},{"id":"weebly"},{"id":"weibo"},{"id":"weixin"},{"id":"whatsapp"},{"id":"whatsapp-square"},{"id":"whmcs"},{"id":"wikipedia-w"},{"id":"windows"},{"id":"wix"},{"id":"wizards-of-the-coast"},{"id":"wolf-pack-battalion"},{"id":"wordpress"},{"id":"wordpress-simple"},{"id":"wpbeginner"},{"id":"wpexplorer"},{"id":"wpforms"},{"id":"wpressr"},{"id":"xbox"},{"id":"xing"},{"id":"xing-square"},{"id":"y-combinator"},{"id":"yahoo"},{"id":"yammer"},{"id":"yandex"},{"id":"yandex-international"},{"id":"yarn"},{"id":"yelp"},{"id":"yoast"},{"id":"youtube"},{"id":"youtube-square"},{"id":"zhihu"}]');
var faRegular = JSON.parse('[{"id":"address-book"},{"id":"address-card"},{"id":"angry"},{"id":"arrow-alt-circle-down"},{"id":"arrow-alt-circle-left"},{"id":"arrow-alt-circle-right"},{"id":"arrow-alt-circle-up"},{"id":"bell"},{"id":"bell-slash"},{"id":"bookmark"},{"id":"building"},{"id":"calendar"},{"id":"calendar-alt"},{"id":"calendar-check"},{"id":"calendar-minus"},{"id":"calendar-plus"},{"id":"calendar-times"},{"id":"caret-square-down"},{"id":"caret-square-left"},{"id":"caret-square-right"},{"id":"caret-square-up"},{"id":"chart-bar"},{"id":"check-circle"},{"id":"check-square"},{"id":"circle"},{"id":"clipboard"},{"id":"clock"},{"id":"clone"},{"id":"closed-captioning"},{"id":"comment"},{"id":"comment-alt"},{"id":"comment-dots"},{"id":"comments"},{"id":"compass"},{"id":"copy"},{"id":"copyright"},{"id":"credit-card"},{"id":"dizzy"},{"id":"dot-circle"},{"id":"edit"},{"id":"envelope"},{"id":"envelope-open"},{"id":"eye"},{"id":"eye-slash"},{"id":"file"},{"id":"file-alt"},{"id":"file-archive"},{"id":"file-audio"},{"id":"file-code"},{"id":"file-excel"},{"id":"file-image"},{"id":"file-pdf"},{"id":"file-powerpoint"},{"id":"file-video"},{"id":"file-word"},{"id":"flag"},{"id":"flushed"},{"id":"folder"},{"id":"folder-open"},{"id":"frown"},{"id":"frown-open"},{"id":"futbol"},{"id":"gem"},{"id":"grimace"},{"id":"grin"},{"id":"grin-alt"},{"id":"grin-beam"},{"id":"grin-beam-sweat"},{"id":"grin-hearts"},{"id":"grin-squint"},{"id":"grin-squint-tears"},{"id":"grin-stars"},{"id":"grin-tears"},{"id":"grin-tongue"},{"id":"grin-tongue-squint"},{"id":"grin-tongue-wink"},{"id":"grin-wink"},{"id":"hand-lizard"},{"id":"hand-paper"},{"id":"hand-peace"},{"id":"hand-point-down"},{"id":"hand-point-left"},{"id":"hand-point-right"},{"id":"hand-point-up"},{"id":"hand-pointer"},{"id":"hand-rock"},{"id":"hand-scissors"},{"id":"hand-spock"},{"id":"handshake"},{"id":"hdd"},{"id":"heart"},{"id":"hospital"},{"id":"hourglass"},{"id":"id-badge"},{"id":"id-card"},{"id":"image"},{"id":"images"},{"id":"keyboard"},{"id":"kiss"},{"id":"kiss-beam"},{"id":"kiss-wink-heart"},{"id":"laugh"},{"id":"laugh-beam"},{"id":"laugh-squint"},{"id":"laugh-wink"},{"id":"lemon"},{"id":"life-ring"},{"id":"lightbulb"},{"id":"list-alt"},{"id":"map"},{"id":"meh"},{"id":"meh-blank"},{"id":"meh-rolling-eyes"},{"id":"minus-square"},{"id":"money-bill-alt"},{"id":"moon"},{"id":"newspaper"},{"id":"object-group"},{"id":"object-ungroup"},{"id":"paper-plane"},{"id":"pause-circle"},{"id":"play-circle"},{"id":"plus-square"},{"id":"question-circle"},{"id":"registered"},{"id":"sad-cry"},{"id":"sad-tear"},{"id":"save"},{"id":"share-square"},{"id":"smile"},{"id":"smile-beam"},{"id":"smile-wink"},{"id":"snowflake"},{"id":"square"},{"id":"star"},{"id":"star-half"},{"id":"sticky-note"},{"id":"stop-circle"},{"id":"sun"},{"id":"surprise"},{"id":"thumbs-down"},{"id":"thumbs-up"},{"id":"times-circle"},{"id":"tired"},{"id":"trash-alt"},{"id":"user"},{"id":"user-circle"},{"id":"window-close"},{"id":"window-maximize"},{"id":"window-minimize"},{"id":"window-restore"}]');
var faSolid = JSON.parse('[{"id":"address-book"},{"id":"address-card"},{"id":"adjust"},{"id":"air-freshener"},{"id":"align-center"},{"id":"align-justify"},{"id":"align-left"},{"id":"align-right"},{"id":"allergies"},{"id":"ambulance"},{"id":"american-sign-language-interpreting"},{"id":"anchor"},{"id":"angle-double-down"},{"id":"angle-double-left"},{"id":"angle-double-right"},{"id":"angle-double-up"},{"id":"angle-down"},{"id":"angle-left"},{"id":"angle-right"},{"id":"angle-up"},{"id":"angry"},{"id":"ankh"},{"id":"apple-alt"},{"id":"archive"},{"id":"archway"},{"id":"arrow-alt-circle-down"},{"id":"arrow-alt-circle-left"},{"id":"arrow-alt-circle-right"},{"id":"arrow-alt-circle-up"},{"id":"arrow-circle-down"},{"id":"arrow-circle-left"},{"id":"arrow-circle-right"},{"id":"arrow-circle-up"},{"id":"arrow-down"},{"id":"arrow-left"},{"id":"arrow-right"},{"id":"arrow-up"},{"id":"arrows-alt"},{"id":"arrows-alt-h"},{"id":"arrows-alt-v"},{"id":"assistive-listening-systems"},{"id":"asterisk"},{"id":"at"},{"id":"atlas"},{"id":"atom"},{"id":"audio-description"},{"id":"award"},{"id":"baby"},{"id":"baby-carriage"},{"id":"backspace"},{"id":"backward"},{"id":"bacon"},{"id":"balance-scale"},{"id":"balance-scale-left"},{"id":"balance-scale-right"},{"id":"ban"},{"id":"band-aid"},{"id":"barcode"},{"id":"bars"},{"id":"baseball-ball"},{"id":"basketball-ball"},{"id":"bath"},{"id":"battery-empty"},{"id":"battery-full"},{"id":"battery-half"},{"id":"battery-quarter"},{"id":"battery-three-quarters"},{"id":"bed"},{"id":"beer"},{"id":"bell"},{"id":"bell-slash"},{"id":"bezier-curve"},{"id":"bible"},{"id":"bicycle"},{"id":"biking"},{"id":"binoculars"},{"id":"biohazard"},{"id":"birthday-cake"},{"id":"blender"},{"id":"blender-phone"},{"id":"blind"},{"id":"blog"},{"id":"bold"},{"id":"bolt"},{"id":"bomb"},{"id":"bone"},{"id":"bong"},{"id":"book"},{"id":"book-dead"},{"id":"book-medical"},{"id":"book-open"},{"id":"book-reader"},{"id":"bookmark"},{"id":"border-all"},{"id":"border-none"},{"id":"border-style"},{"id":"bowling-ball"},{"id":"box"},{"id":"box-open"},{"id":"boxes"},{"id":"braille"},{"id":"brain"},{"id":"bread-slice"},{"id":"briefcase"},{"id":"briefcase-medical"},{"id":"broadcast-tower"},{"id":"broom"},{"id":"brush"},{"id":"bug"},{"id":"building"},{"id":"bullhorn"},{"id":"bullseye"},{"id":"burn"},{"id":"bus"},{"id":"bus-alt"},{"id":"business-time"},{"id":"calculator"},{"id":"calendar"},{"id":"calendar-alt"},{"id":"calendar-check"},{"id":"calendar-day"},{"id":"calendar-minus"},{"id":"calendar-plus"},{"id":"calendar-times"},{"id":"calendar-week"},{"id":"camera"},{"id":"camera-retro"},{"id":"campground"},{"id":"candy-cane"},{"id":"cannabis"},{"id":"capsules"},{"id":"car"},{"id":"car-alt"},{"id":"car-battery"},{"id":"car-crash"},{"id":"car-side"},{"id":"caret-down"},{"id":"caret-left"},{"id":"caret-right"},{"id":"caret-square-down"},{"id":"caret-square-left"},{"id":"caret-square-right"},{"id":"caret-square-up"},{"id":"caret-up"},{"id":"carrot"},{"id":"cart-arrow-down"},{"id":"cart-plus"},{"id":"cash-register"},{"id":"cat"},{"id":"certificate"},{"id":"chair"},{"id":"chalkboard"},{"id":"chalkboard-teacher"},{"id":"charging-station"},{"id":"chart-area"},{"id":"chart-bar"},{"id":"chart-line"},{"id":"chart-pie"},{"id":"check"},{"id":"check-circle"},{"id":"check-double"},{"id":"check-square"},{"id":"cheese"},{"id":"chess"},{"id":"chess-bishop"},{"id":"chess-board"},{"id":"chess-king"},{"id":"chess-knight"},{"id":"chess-pawn"},{"id":"chess-queen"},{"id":"chess-rook"},{"id":"chevron-circle-down"},{"id":"chevron-circle-left"},{"id":"chevron-circle-right"},{"id":"chevron-circle-up"},{"id":"chevron-down"},{"id":"chevron-left"},{"id":"chevron-right"},{"id":"chevron-up"},{"id":"child"},{"id":"church"},{"id":"circle"},{"id":"circle-notch"},{"id":"city"},{"id":"clinic-medical"},{"id":"clipboard"},{"id":"clipboard-check"},{"id":"clipboard-list"},{"id":"clock"},{"id":"clone"},{"id":"closed-captioning"},{"id":"cloud"},{"id":"cloud-download-alt"},{"id":"cloud-meatball"},{"id":"cloud-moon"},{"id":"cloud-moon-rain"},{"id":"cloud-rain"},{"id":"cloud-showers-heavy"},{"id":"cloud-sun"},{"id":"cloud-sun-rain"},{"id":"cloud-upload-alt"},{"id":"cocktail"},{"id":"code"},{"id":"code-branch"},{"id":"coffee"},{"id":"cog"},{"id":"cogs"},{"id":"coins"},{"id":"columns"},{"id":"comment"},{"id":"comment-alt"},{"id":"comment-dollar"},{"id":"comment-dots"},{"id":"comment-medical"},{"id":"comment-slash"},{"id":"comments"},{"id":"comments-dollar"},{"id":"compact-disc"},{"id":"compass"},{"id":"compress"},{"id":"compress-arrows-alt"},{"id":"concierge-bell"},{"id":"cookie"},{"id":"cookie-bite"},{"id":"copy"},{"id":"copyright"},{"id":"couch"},{"id":"credit-card"},{"id":"crop"},{"id":"crop-alt"},{"id":"cross"},{"id":"crosshairs"},{"id":"crow"},{"id":"crown"},{"id":"crutch"},{"id":"cube"},{"id":"cubes"},{"id":"cut"},{"id":"database"},{"id":"deaf"},{"id":"democrat"},{"id":"desktop"},{"id":"dharmachakra"},{"id":"diagnoses"},{"id":"dice"},{"id":"dice-d20"},{"id":"dice-d6"},{"id":"dice-five"},{"id":"dice-four"},{"id":"dice-one"},{"id":"dice-six"},{"id":"dice-three"},{"id":"dice-two"},{"id":"digital-tachograph"},{"id":"directions"},{"id":"divide"},{"id":"dizzy"},{"id":"dna"},{"id":"dog"},{"id":"dollar-sign"},{"id":"dolly"},{"id":"dolly-flatbed"},{"id":"donate"},{"id":"door-closed"},{"id":"door-open"},{"id":"dot-circle"},{"id":"dove"},{"id":"download"},{"id":"drafting-compass"},{"id":"dragon"},{"id":"draw-polygon"},{"id":"drum"},{"id":"drum-steelpan"},{"id":"drumstick-bite"},{"id":"dumbbell"},{"id":"dumpster"},{"id":"dumpster-fire"},{"id":"dungeon"},{"id":"edit"},{"id":"egg"},{"id":"eject"},{"id":"ellipsis-h"},{"id":"ellipsis-v"},{"id":"envelope"},{"id":"envelope-open"},{"id":"envelope-open-text"},{"id":"envelope-square"},{"id":"equals"},{"id":"eraser"},{"id":"ethernet"},{"id":"euro-sign"},{"id":"exchange-alt"},{"id":"exclamation"},{"id":"exclamation-circle"},{"id":"exclamation-triangle"},{"id":"expand"},{"id":"expand-arrows-alt"},{"id":"external-link-alt"},{"id":"external-link-square-alt"},{"id":"eye"},{"id":"eye-dropper"},{"id":"eye-slash"},{"id":"fan"},{"id":"fast-backward"},{"id":"fast-forward"},{"id":"fax"},{"id":"feather"},{"id":"feather-alt"},{"id":"female"},{"id":"fighter-jet"},{"id":"file"},{"id":"file-alt"},{"id":"file-archive"},{"id":"file-audio"},{"id":"file-code"},{"id":"file-contract"},{"id":"file-csv"},{"id":"file-download"},{"id":"file-excel"},{"id":"file-export"},{"id":"file-image"},{"id":"file-import"},{"id":"file-invoice"},{"id":"file-invoice-dollar"},{"id":"file-medical"},{"id":"file-medical-alt"},{"id":"file-pdf"},{"id":"file-powerpoint"},{"id":"file-prescription"},{"id":"file-signature"},{"id":"file-upload"},{"id":"file-video"},{"id":"file-word"},{"id":"fill"},{"id":"fill-drip"},{"id":"film"},{"id":"filter"},{"id":"fingerprint"},{"id":"fire"},{"id":"fire-alt"},{"id":"fire-extinguisher"},{"id":"first-aid"},{"id":"fish"},{"id":"fist-raised"},{"id":"flag"},{"id":"flag-checkered"},{"id":"flag-usa"},{"id":"flask"},{"id":"flushed"},{"id":"folder"},{"id":"folder-minus"},{"id":"folder-open"},{"id":"folder-plus"},{"id":"font"},{"id":"football-ball"},{"id":"forward"},{"id":"frog"},{"id":"frown"},{"id":"frown-open"},{"id":"funnel-dollar"},{"id":"futbol"},{"id":"gamepad"},{"id":"gas-pump"},{"id":"gavel"},{"id":"gem"},{"id":"genderless"},{"id":"ghost"},{"id":"gift"},{"id":"gifts"},{"id":"glass-cheers"},{"id":"glass-martini"},{"id":"glass-martini-alt"},{"id":"glass-whiskey"},{"id":"glasses"},{"id":"globe"},{"id":"globe-africa"},{"id":"globe-americas"},{"id":"globe-asia"},{"id":"globe-europe"},{"id":"golf-ball"},{"id":"gopuram"},{"id":"graduation-cap"},{"id":"greater-than"},{"id":"greater-than-equal"},{"id":"grimace"},{"id":"grin"},{"id":"grin-alt"},{"id":"grin-beam"},{"id":"grin-beam-sweat"},{"id":"grin-hearts"},{"id":"grin-squint"},{"id":"grin-squint-tears"},{"id":"grin-stars"},{"id":"grin-tears"},{"id":"grin-tongue"},{"id":"grin-tongue-squint"},{"id":"grin-tongue-wink"},{"id":"grin-wink"},{"id":"grip-horizontal"},{"id":"grip-lines"},{"id":"grip-lines-vertical"},{"id":"grip-vertical"},{"id":"guitar"},{"id":"h-square"},{"id":"hamburger"},{"id":"hammer"},{"id":"hamsa"},{"id":"hand-holding"},{"id":"hand-holding-heart"},{"id":"hand-holding-usd"},{"id":"hand-lizard"},{"id":"hand-middle-finger"},{"id":"hand-paper"},{"id":"hand-peace"},{"id":"hand-point-down"},{"id":"hand-point-left"},{"id":"hand-point-right"},{"id":"hand-point-up"},{"id":"hand-pointer"},{"id":"hand-rock"},{"id":"hand-scissors"},{"id":"hand-spock"},{"id":"hands"},{"id":"hands-helping"},{"id":"handshake"},{"id":"hanukiah"},{"id":"hard-hat"},{"id":"hashtag"},{"id":"hat-cowboy"},{"id":"hat-cowboy-side"},{"id":"hat-wizard"},{"id":"haykal"},{"id":"hdd"},{"id":"heading"},{"id":"headphones"},{"id":"headphones-alt"},{"id":"headset"},{"id":"heart"},{"id":"heart-broken"},{"id":"heartbeat"},{"id":"helicopter"},{"id":"highlighter"},{"id":"hiking"},{"id":"hippo"},{"id":"history"},{"id":"hockey-puck"},{"id":"holly-berry"},{"id":"home"},{"id":"horse"},{"id":"horse-head"},{"id":"hospital"},{"id":"hospital-alt"},{"id":"hospital-symbol"},{"id":"hot-tub"},{"id":"hotdog"},{"id":"hotel"},{"id":"hourglass"},{"id":"hourglass-end"},{"id":"hourglass-half"},{"id":"hourglass-start"},{"id":"house-damage"},{"id":"hryvnia"},{"id":"i-cursor"},{"id":"ice-cream"},{"id":"icicles"},{"id":"icons"},{"id":"id-badge"},{"id":"id-card"},{"id":"id-card-alt"},{"id":"igloo"},{"id":"image"},{"id":"images"},{"id":"inbox"},{"id":"indent"},{"id":"industry"},{"id":"infinity"},{"id":"info"},{"id":"info-circle"},{"id":"italic"},{"id":"jedi"},{"id":"joint"},{"id":"journal-whills"},{"id":"kaaba"},{"id":"key"},{"id":"keyboard"},{"id":"khanda"},{"id":"kiss"},{"id":"kiss-beam"},{"id":"kiss-wink-heart"},{"id":"kiwi-bird"},{"id":"landmark"},{"id":"language"},{"id":"laptop"},{"id":"laptop-code"},{"id":"laptop-medical"},{"id":"laugh"},{"id":"laugh-beam"},{"id":"laugh-squint"},{"id":"laugh-wink"},{"id":"layer-group"},{"id":"leaf"},{"id":"lemon"},{"id":"less-than"},{"id":"less-than-equal"},{"id":"level-down-alt"},{"id":"level-up-alt"},{"id":"life-ring"},{"id":"lightbulb"},{"id":"link"},{"id":"lira-sign"},{"id":"list"},{"id":"list-alt"},{"id":"list-ol"},{"id":"list-ul"},{"id":"location-arrow"},{"id":"lock"},{"id":"lock-open"},{"id":"long-arrow-alt-down"},{"id":"long-arrow-alt-left"},{"id":"long-arrow-alt-right"},{"id":"long-arrow-alt-up"},{"id":"low-vision"},{"id":"luggage-cart"},{"id":"magic"},{"id":"magnet"},{"id":"mail-bulk"},{"id":"male"},{"id":"map"},{"id":"map-marked"},{"id":"map-marked-alt"},{"id":"map-marker"},{"id":"map-marker-alt"},{"id":"map-pin"},{"id":"map-signs"},{"id":"marker"},{"id":"mars"},{"id":"mars-double"},{"id":"mars-stroke"},{"id":"mars-stroke-h"},{"id":"mars-stroke-v"},{"id":"mask"},{"id":"medal"},{"id":"medkit"},{"id":"meh"},{"id":"meh-blank"},{"id":"meh-rolling-eyes"},{"id":"memory"},{"id":"menorah"},{"id":"mercury"},{"id":"meteor"},{"id":"microchip"},{"id":"microphone"},{"id":"microphone-alt"},{"id":"microphone-alt-slash"},{"id":"microphone-slash"},{"id":"microscope"},{"id":"minus"},{"id":"minus-circle"},{"id":"minus-square"},{"id":"mitten"},{"id":"mobile"},{"id":"mobile-alt"},{"id":"money-bill"},{"id":"money-bill-alt"},{"id":"money-bill-wave"},{"id":"money-bill-wave-alt"},{"id":"money-check"},{"id":"money-check-alt"},{"id":"monument"},{"id":"moon"},{"id":"mortar-pestle"},{"id":"mosque"},{"id":"motorcycle"},{"id":"mountain"},{"id":"mouse"},{"id":"mouse-pointer"},{"id":"mug-hot"},{"id":"music"},{"id":"network-wired"},{"id":"neuter"},{"id":"newspaper"},{"id":"not-equal"},{"id":"notes-medical"},{"id":"object-group"},{"id":"object-ungroup"},{"id":"oil-can"},{"id":"om"},{"id":"otter"},{"id":"outdent"},{"id":"pager"},{"id":"paint-brush"},{"id":"paint-roller"},{"id":"palette"},{"id":"pallet"},{"id":"paper-plane"},{"id":"paperclip"},{"id":"parachute-box"},{"id":"paragraph"},{"id":"parking"},{"id":"passport"},{"id":"pastafarianism"},{"id":"paste"},{"id":"pause"},{"id":"pause-circle"},{"id":"paw"},{"id":"peace"},{"id":"pen"},{"id":"pen-alt"},{"id":"pen-fancy"},{"id":"pen-nib"},{"id":"pen-square"},{"id":"pencil-alt"},{"id":"pencil-ruler"},{"id":"people-carry"},{"id":"pepper-hot"},{"id":"percent"},{"id":"percentage"},{"id":"person-booth"},{"id":"phone"},{"id":"phone-alt"},{"id":"phone-slash"},{"id":"phone-square"},{"id":"phone-square-alt"},{"id":"phone-volume"},{"id":"photo-video"},{"id":"piggy-bank"},{"id":"pills"},{"id":"pizza-slice"},{"id":"place-of-worship"},{"id":"plane"},{"id":"plane-arrival"},{"id":"plane-departure"},{"id":"play"},{"id":"play-circle"},{"id":"plug"},{"id":"plus"},{"id":"plus-circle"},{"id":"plus-square"},{"id":"podcast"},{"id":"poll"},{"id":"poll-h"},{"id":"poo"},{"id":"poo-storm"},{"id":"poop"},{"id":"portrait"},{"id":"pound-sign"},{"id":"power-off"},{"id":"pray"},{"id":"praying-hands"},{"id":"prescription"},{"id":"prescription-bottle"},{"id":"prescription-bottle-alt"},{"id":"print"},{"id":"procedures"},{"id":"project-diagram"},{"id":"puzzle-piece"},{"id":"qrcode"},{"id":"question"},{"id":"question-circle"},{"id":"quidditch"},{"id":"quote-left"},{"id":"quote-right"},{"id":"quran"},{"id":"radiation"},{"id":"radiation-alt"},{"id":"rainbow"},{"id":"random"},{"id":"receipt"},{"id":"record-vinyl"},{"id":"recycle"},{"id":"redo"},{"id":"redo-alt"},{"id":"registered"},{"id":"remove-format"},{"id":"reply"},{"id":"reply-all"},{"id":"republican"},{"id":"restroom"},{"id":"retweet"},{"id":"ribbon"},{"id":"ring"},{"id":"road"},{"id":"robot"},{"id":"rocket"},{"id":"route"},{"id":"rss"},{"id":"rss-square"},{"id":"ruble-sign"},{"id":"ruler"},{"id":"ruler-combined"},{"id":"ruler-horizontal"},{"id":"ruler-vertical"},{"id":"running"},{"id":"rupee-sign"},{"id":"sad-cry"},{"id":"sad-tear"},{"id":"satellite"},{"id":"satellite-dish"},{"id":"save"},{"id":"school"},{"id":"screwdriver"},{"id":"scroll"},{"id":"sd-card"},{"id":"search"},{"id":"search-dollar"},{"id":"search-location"},{"id":"search-minus"},{"id":"search-plus"},{"id":"seedling"},{"id":"server"},{"id":"shapes"},{"id":"share"},{"id":"share-alt"},{"id":"share-alt-square"},{"id":"share-square"},{"id":"shekel-sign"},{"id":"shield-alt"},{"id":"ship"},{"id":"shipping-fast"},{"id":"shoe-prints"},{"id":"shopping-bag"},{"id":"shopping-basket"},{"id":"shopping-cart"},{"id":"shower"},{"id":"shuttle-van"},{"id":"sign"},{"id":"sign-in-alt"},{"id":"sign-language"},{"id":"sign-out-alt"},{"id":"signal"},{"id":"signature"},{"id":"sim-card"},{"id":"sitemap"},{"id":"skating"},{"id":"skiing"},{"id":"skiing-nordic"},{"id":"skull"},{"id":"skull-crossbones"},{"id":"slash"},{"id":"sleigh"},{"id":"sliders-h"},{"id":"smile"},{"id":"smile-beam"},{"id":"smile-wink"},{"id":"smog"},{"id":"smoking"},{"id":"smoking-ban"},{"id":"sms"},{"id":"snowboarding"},{"id":"snowflake"},{"id":"snowman"},{"id":"snowplow"},{"id":"socks"},{"id":"solar-panel"},{"id":"sort"},{"id":"sort-alpha-down"},{"id":"sort-alpha-down-alt"},{"id":"sort-alpha-up"},{"id":"sort-alpha-up-alt"},{"id":"sort-amount-down"},{"id":"sort-amount-down-alt"},{"id":"sort-amount-up"},{"id":"sort-amount-up-alt"},{"id":"sort-down"},{"id":"sort-numeric-down"},{"id":"sort-numeric-down-alt"},{"id":"sort-numeric-up"},{"id":"sort-numeric-up-alt"},{"id":"sort-up"},{"id":"spa"},{"id":"space-shuttle"},{"id":"spell-check"},{"id":"spider"},{"id":"spinner"},{"id":"splotch"},{"id":"spray-can"},{"id":"square"},{"id":"square-full"},{"id":"square-root-alt"},{"id":"stamp"},{"id":"star"},{"id":"star-and-crescent"},{"id":"star-half"},{"id":"star-half-alt"},{"id":"star-of-david"},{"id":"star-of-life"},{"id":"step-backward"},{"id":"step-forward"},{"id":"stethoscope"},{"id":"sticky-note"},{"id":"stop"},{"id":"stop-circle"},{"id":"stopwatch"},{"id":"store"},{"id":"store-alt"},{"id":"stream"},{"id":"street-view"},{"id":"strikethrough"},{"id":"stroopwafel"},{"id":"subscript"},{"id":"subway"},{"id":"suitcase"},{"id":"suitcase-rolling"},{"id":"sun"},{"id":"superscript"},{"id":"surprise"},{"id":"swatchbook"},{"id":"swimmer"},{"id":"swimming-pool"},{"id":"synagogue"},{"id":"sync"},{"id":"sync-alt"},{"id":"syringe"},{"id":"table"},{"id":"table-tennis"},{"id":"tablet"},{"id":"tablet-alt"},{"id":"tablets"},{"id":"tachometer-alt"},{"id":"tag"},{"id":"tags"},{"id":"tape"},{"id":"tasks"},{"id":"taxi"},{"id":"teeth"},{"id":"teeth-open"},{"id":"temperature-high"},{"id":"temperature-low"},{"id":"tenge"},{"id":"terminal"},{"id":"text-height"},{"id":"text-width"},{"id":"th"},{"id":"th-large"},{"id":"th-list"},{"id":"theater-masks"},{"id":"thermometer"},{"id":"thermometer-empty"},{"id":"thermometer-full"},{"id":"thermometer-half"},{"id":"thermometer-quarter"},{"id":"thermometer-three-quarters"},{"id":"thumbs-down"},{"id":"thumbs-up"},{"id":"thumbtack"},{"id":"ticket-alt"},{"id":"times"},{"id":"times-circle"},{"id":"tint"},{"id":"tint-slash"},{"id":"tired"},{"id":"toggle-off"},{"id":"toggle-on"},{"id":"toilet"},{"id":"toilet-paper"},{"id":"toolbox"},{"id":"tools"},{"id":"tooth"},{"id":"torah"},{"id":"torii-gate"},{"id":"tractor"},{"id":"trademark"},{"id":"traffic-light"},{"id":"train"},{"id":"tram"},{"id":"transgender"},{"id":"transgender-alt"},{"id":"trash"},{"id":"trash-alt"},{"id":"trash-restore"},{"id":"trash-restore-alt"},{"id":"tree"},{"id":"trophy"},{"id":"truck"},{"id":"truck-loading"},{"id":"truck-monster"},{"id":"truck-moving"},{"id":"truck-pickup"},{"id":"tshirt"},{"id":"tty"},{"id":"tv"},{"id":"umbrella"},{"id":"umbrella-beach"},{"id":"underline"},{"id":"undo"},{"id":"undo-alt"},{"id":"universal-access"},{"id":"university"},{"id":"unlink"},{"id":"unlock"},{"id":"unlock-alt"},{"id":"upload"},{"id":"user"},{"id":"user-alt"},{"id":"user-alt-slash"},{"id":"user-astronaut"},{"id":"user-check"},{"id":"user-circle"},{"id":"user-clock"},{"id":"user-cog"},{"id":"user-edit"},{"id":"user-friends"},{"id":"user-graduate"},{"id":"user-injured"},{"id":"user-lock"},{"id":"user-md"},{"id":"user-minus"},{"id":"user-ninja"},{"id":"user-nurse"},{"id":"user-plus"},{"id":"user-secret"},{"id":"user-shield"},{"id":"user-slash"},{"id":"user-tag"},{"id":"user-tie"},{"id":"user-times"},{"id":"users"},{"id":"users-cog"},{"id":"utensil-spoon"},{"id":"utensils"},{"id":"vector-square"},{"id":"venus"},{"id":"venus-double"},{"id":"venus-mars"},{"id":"vial"},{"id":"vials"},{"id":"video"},{"id":"video-slash"},{"id":"vihara"},{"id":"voicemail"},{"id":"volleyball-ball"},{"id":"volume-down"},{"id":"volume-mute"},{"id":"volume-off"},{"id":"volume-up"},{"id":"vote-yea"},{"id":"vr-cardboard"},{"id":"walking"},{"id":"wallet"},{"id":"warehouse"},{"id":"water"},{"id":"wave-square"},{"id":"weight"},{"id":"weight-hanging"},{"id":"wheelchair"},{"id":"wifi"},{"id":"wind"},{"id":"window-close"},{"id":"window-maximize"},{"id":"window-minimize"},{"id":"window-restore"},{"id":"wine-bottle"},{"id":"wine-glass"},{"id":"wine-glass-alt"},{"id":"won-sign"},{"id":"wrench"},{"id":"x-ray"},{"id":"yen-sign"},{"id":"yin-yang"}]');
function faIcons(fas, ty) {
	var icons='';
	for(var x in fas){
	var ids = fas[x].id;
	var id = ids.split('-').join('<br/>');
	icons += '<a href="#" onclick="klick(this);return false;"><span class="fa'+ty+' fa-'+ids+'"></span>'+id+'</a>';
	}
	return icons;
}
return {
	title:'FontAwesome5 Icons',
	minWidth:500,
	minHeight:400,
	resizable:false,
	contents:[{
	id:'font-awesome',
	label:'Add icon',
	elements:[
		{
		type:'hbox',
		widths:['25%','10%','15%','50%'],
		children:[
		{
			type:'text',
			id:'colorChooser',
			className:'colorChooser',
			label:'Color',
			onKeyUp:function(e){
			setColor(e.sender.$.value);
			},
			setup:function(widget){
			var color = widget.data.color != '' ? widget.data.color:'';
			this.setValue(color);
			setColor(color);
			},
			commit:function(widget){
			widget.setData('color', this.getValue());
			}
		},
		{
			type:'button',label:'Color',style:'margin-top:1.35em',
			onClick:function(){
			editor.getColorFromDialog(function(color){
			document.getElementsByClassName('colorChooser')[0].getElementsByTagName('input')[0].value = color;
			setColor(color);
			}, this);
			}
		},
		{
			type:'text',id:'size',className:'size',label:'Size',setup: function(widget){this.setValue(widget.data.size);},
			commit: function(widget){widget.setData('size', this.getValue());}
		},
		{
			type:'text',id:'faSearch',className:'faSearch',label:'Search',onKeyUp:function(e){searchIcon(e.sender.$.value);}
		}
		]
		},
		{
		type:'hbox',
		widths:['15%','15%','15%','50%'],
		children:[
		{
		type:'button',label:'Brands',
			onClick:function(){
			document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faBrands,'b');
			}
		},
		{
		type:'button',label:'Regular',
			onClick:function(){
			document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faRegular,'r');
			}
		},
		{
		type:'button',label:'Solid',
			onClick:function(){
			document.getElementById('ckeditor-fa-icons').innerHTML = faIcons(faSolid,'s');
			}
		},
		{type:'text',id:'faicon',className:'fontawesomeClass',validate:CKEDITOR.dialog.validate.notEmpty("Select fontAwesome icon"),setup:function(widget){this.setValue(widget.data.class != '' ? widget.data.class:'');},commit:function(widget){widget.setData('class', this.getValue());}
		}
		]
		},
		{type:'html',html:'<div id="ckeditor-fa-icons">' + faIcons(faBrands,'b') + '</div>'}
	]
	}],
	onOk:function () {
		clear();
		var dialog = this;
		var icon = editor.document.createElement('span');
		icon.setAttribute('class', dialog.getValueOf('font-awesome', 'faicon'));
		var style='';
		if(dialog.getValueOf('font-awesome', 'colorChooser') !='')
		style += 'color:' + dialog.getValueOf('font-awesome', 'colorChooser')+';';
		if(dialog.getValueOf('font-awesome', 'size') !='')
		style += 'font-size:' + dialog.getValueOf('font-awesome', 'size') + 'px';
		if(style) icon.setAttribute('style', style);
		editor.insertElement(icon);
	},
	onCancel:function () {
		clear();
	}
};
});
