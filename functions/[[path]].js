globalThis.process = {
	argv: [],
	env: {},
};
var Er=Object.create;var Fa=Object.defineProperty;var Sr=Object.getOwnPropertyDescriptor;var Ar=Object.getOwnPropertyNames;var Tr=Object.getPrototypeOf,Br=Object.prototype.hasOwnProperty;var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var jr=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ar(e))!Br.call(t,i)&&i!==a&&Fa(t,i,{get:()=>e[i],enumerable:!(n=Sr(e,i))||n.enumerable});return t};var le=(t,e,a)=>(a=t!=null?Er(Tr(t)):{},jr(e||!t||!t.__esModule?Fa(a,"default",{value:t,enumerable:!0}):a,t));var Ea=S((Ap,Ia)=>{"use strict";function Pe(){this._types=Object.create(null),this._extensions=Object.create(null);for(let t=0;t<arguments.length;t++)this.define(arguments[t]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}Pe.prototype.define=function(t,e){for(let a in t){let n=t[a].map(function(i){return i.toLowerCase()});a=a.toLowerCase();for(let i=0;i<n.length;i++){let o=n[i];if(o[0]!=="*"){if(!e&&o in this._types)throw new Error('Attempt to change mapping for "'+o+'" extension from "'+this._types[o]+'" to "'+a+'". Pass `force=true` to allow this, otherwise remove "'+o+'" from the list of extensions for "'+a+'".');this._types[o]=a}}if(e||!this._extensions[a]){let i=n[0];this._extensions[a]=i[0]!=="*"?i:i.substr(1)}}};Pe.prototype.getType=function(t){t=String(t);let e=t.replace(/^.*[/\\]/,"").toLowerCase(),a=e.replace(/^.*\./,"").toLowerCase(),n=e.length<t.length;return(a.length<e.length-1||!n)&&this._types[a]||null};Pe.prototype.getExtension=function(t){return t=/^\s*([^;\s]*)/.test(t)&&RegExp.$1,t&&this._extensions[t.toLowerCase()]||null};Ia.exports=Pe});var Aa=S((Tp,Sa)=>{Sa.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}});var Ba=S((Bp,Ta)=>{Ta.exports={"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}});var Na=S((jp,ja)=>{"use strict";var Nr=Ea();ja.exports=new Nr(Aa(),Ba())});var Pa=S(tt=>{"use strict";tt.parse=_r;tt.serialize=Rr;var Pr=Object.prototype.toString,_e=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function _r(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var a={},n=e||{},i=n.decode||$r,o=0;o<t.length;){var s=t.indexOf("=",o);if(s===-1)break;var l=t.indexOf(";",o);if(l===-1)l=t.length;else if(l<s){o=t.lastIndexOf(";",s-1)+1;continue}var r=t.slice(o,s).trim();if(a[r]===void 0){var c=t.slice(s+1,l).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),a[r]=Or(c,i)}o=l+1}return a}function Rr(t,e,a){var n=a||{},i=n.encode||Mr;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!_e.test(t))throw new TypeError("argument name is invalid");var o=i(e);if(o&&!_e.test(o))throw new TypeError("argument val is invalid");var s=t+"="+o;if(n.maxAge!=null){var l=n.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(l)}if(n.domain){if(!_e.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!_e.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){var r=n.expires;if(!Hr(r)||isNaN(r.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+r.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.priority){var c=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(c){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var u=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(u){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function $r(t){return t.indexOf("%")!==-1?decodeURIComponent(t):t}function Mr(t){return encodeURIComponent(t)}function Hr(t){return Pr.call(t)==="[object Date]"||t instanceof Date}function Or(t,e){try{return e(t)}catch{return t}}});var Wa=S((sh,ot)=>{var K={};typeof ot>"u"?window.eastasianwidth=K:ot.exports=K;K.eastAsianWidth=function(t){var e=t.charCodeAt(0),a=t.length==2?t.charCodeAt(1):0,n=e;return 55296<=e&&e<=56319&&56320<=a&&a<=57343&&(e&=1023,a&=1023,n=e<<10|a,n+=65536),n==12288||65281<=n&&n<=65376||65504<=n&&n<=65510?"F":n==8361||65377<=n&&n<=65470||65474<=n&&n<=65479||65482<=n&&n<=65487||65490<=n&&n<=65495||65498<=n&&n<=65500||65512<=n&&n<=65518?"H":4352<=n&&n<=4447||4515<=n&&n<=4519||4602<=n&&n<=4607||9001<=n&&n<=9002||11904<=n&&n<=11929||11931<=n&&n<=12019||12032<=n&&n<=12245||12272<=n&&n<=12283||12289<=n&&n<=12350||12353<=n&&n<=12438||12441<=n&&n<=12543||12549<=n&&n<=12589||12593<=n&&n<=12686||12688<=n&&n<=12730||12736<=n&&n<=12771||12784<=n&&n<=12830||12832<=n&&n<=12871||12880<=n&&n<=13054||13056<=n&&n<=19903||19968<=n&&n<=42124||42128<=n&&n<=42182||43360<=n&&n<=43388||44032<=n&&n<=55203||55216<=n&&n<=55238||55243<=n&&n<=55291||63744<=n&&n<=64255||65040<=n&&n<=65049||65072<=n&&n<=65106||65108<=n&&n<=65126||65128<=n&&n<=65131||110592<=n&&n<=110593||127488<=n&&n<=127490||127504<=n&&n<=127546||127552<=n&&n<=127560||127568<=n&&n<=127569||131072<=n&&n<=194367||177984<=n&&n<=196605||196608<=n&&n<=262141?"W":32<=n&&n<=126||162<=n&&n<=163||165<=n&&n<=166||n==172||n==175||10214<=n&&n<=10221||10629<=n&&n<=10630?"Na":n==161||n==164||167<=n&&n<=168||n==170||173<=n&&n<=174||176<=n&&n<=180||182<=n&&n<=186||188<=n&&n<=191||n==198||n==208||215<=n&&n<=216||222<=n&&n<=225||n==230||232<=n&&n<=234||236<=n&&n<=237||n==240||242<=n&&n<=243||247<=n&&n<=250||n==252||n==254||n==257||n==273||n==275||n==283||294<=n&&n<=295||n==299||305<=n&&n<=307||n==312||319<=n&&n<=322||n==324||328<=n&&n<=331||n==333||338<=n&&n<=339||358<=n&&n<=359||n==363||n==462||n==464||n==466||n==468||n==470||n==472||n==474||n==476||n==593||n==609||n==708||n==711||713<=n&&n<=715||n==717||n==720||728<=n&&n<=731||n==733||n==735||768<=n&&n<=879||913<=n&&n<=929||931<=n&&n<=937||945<=n&&n<=961||963<=n&&n<=969||n==1025||1040<=n&&n<=1103||n==1105||n==8208||8211<=n&&n<=8214||8216<=n&&n<=8217||8220<=n&&n<=8221||8224<=n&&n<=8226||8228<=n&&n<=8231||n==8240||8242<=n&&n<=8243||n==8245||n==8251||n==8254||n==8308||n==8319||8321<=n&&n<=8324||n==8364||n==8451||n==8453||n==8457||n==8467||n==8470||8481<=n&&n<=8482||n==8486||n==8491||8531<=n&&n<=8532||8539<=n&&n<=8542||8544<=n&&n<=8555||8560<=n&&n<=8569||n==8585||8592<=n&&n<=8601||8632<=n&&n<=8633||n==8658||n==8660||n==8679||n==8704||8706<=n&&n<=8707||8711<=n&&n<=8712||n==8715||n==8719||n==8721||n==8725||n==8730||8733<=n&&n<=8736||n==8739||n==8741||8743<=n&&n<=8748||n==8750||8756<=n&&n<=8759||8764<=n&&n<=8765||n==8776||n==8780||n==8786||8800<=n&&n<=8801||8804<=n&&n<=8807||8810<=n&&n<=8811||8814<=n&&n<=8815||8834<=n&&n<=8835||8838<=n&&n<=8839||n==8853||n==8857||n==8869||n==8895||n==8978||9312<=n&&n<=9449||9451<=n&&n<=9547||9552<=n&&n<=9587||9600<=n&&n<=9615||9618<=n&&n<=9621||9632<=n&&n<=9633||9635<=n&&n<=9641||9650<=n&&n<=9651||9654<=n&&n<=9655||9660<=n&&n<=9661||9664<=n&&n<=9665||9670<=n&&n<=9672||n==9675||9678<=n&&n<=9681||9698<=n&&n<=9701||n==9711||9733<=n&&n<=9734||n==9737||9742<=n&&n<=9743||9748<=n&&n<=9749||n==9756||n==9758||n==9792||n==9794||9824<=n&&n<=9825||9827<=n&&n<=9829||9831<=n&&n<=9834||9836<=n&&n<=9837||n==9839||9886<=n&&n<=9887||9918<=n&&n<=9919||9924<=n&&n<=9933||9935<=n&&n<=9953||n==9955||9960<=n&&n<=9983||n==10045||n==10071||10102<=n&&n<=10111||11093<=n&&n<=11097||12872<=n&&n<=12879||57344<=n&&n<=63743||65024<=n&&n<=65039||n==65533||127232<=n&&n<=127242||127248<=n&&n<=127277||127280<=n&&n<=127337||127344<=n&&n<=127386||917760<=n&&n<=917999||983040<=n&&n<=1048573||1048576<=n&&n<=1114109?"A":"N"};K.characterLength=function(t){var e=this.eastAsianWidth(t);return e=="F"||e=="W"||e=="A"?2:1};function Ua(t){return t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}K.length=function(t){for(var e=Ua(t),a=0,n=0;n<e.length;n++)a=a+this.characterLength(e[n]);return a};K.slice=function(t,e,a){textLen=K.length(t),e=e||0,a=a||1,e<0&&(e=textLen+e),a<0&&(a=textLen+a);for(var n="",i=0,o=Ua(t),s=0;s<o.length;s++){var l=o[s],r=K.length(l);if(i>=e-(r==2?1:0))if(i+r<=a)n+=l;else break;i+=r}return n}});var Ja=S((rh,Ga)=>{"use strict";Ga.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Ya=S((dh,Ka)=>{"use strict";function O(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function Va(t,e){for(var a="",n=0,i=-1,o=0,s,l=0;l<=t.length;++l){if(l<t.length)s=t.charCodeAt(l);else{if(s===47)break;s=47}if(s===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(a.length<2||n!==2||a.charCodeAt(a.length-1)!==46||a.charCodeAt(a.length-2)!==46){if(a.length>2){var r=a.lastIndexOf("/");if(r!==a.length-1){r===-1?(a="",n=0):(a=a.slice(0,r),n=a.length-1-a.lastIndexOf("/")),i=l,o=0;continue}}else if(a.length===2||a.length===1){a="",n=0,i=l,o=0;continue}}e&&(a.length>0?a+="/..":a="..",n=2)}else a.length>0?a+="/"+t.slice(i+1,l):a=t.slice(i+1,l),n=l-i-1;i=l,o=0}else s===46&&o!==-1?++o:o=-1}return a}function Vr(t,e){var a=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return a?a===e.root?a+n:a+t+n:n}var ue={resolve:function(){for(var e="",a=!1,n,i=arguments.length-1;i>=-1&&!a;i--){var o;i>=0?o=arguments[i]:(n===void 0&&(n=process.cwd()),o=n),O(o),o.length!==0&&(e=o+"/"+e,a=o.charCodeAt(0)===47)}return e=Va(e,!a),a?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(O(e),e.length===0)return".";var a=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=Va(e,!a),e.length===0&&!a&&(e="."),e.length>0&&n&&(e+="/"),a?"/"+e:e},isAbsolute:function(e){return O(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,a=0;a<arguments.length;++a){var n=arguments[a];O(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":ue.normalize(e)},relative:function(e,a){if(O(e),O(a),e===a||(e=ue.resolve(e),a=ue.resolve(a),e===a))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var i=e.length,o=i-n,s=1;s<a.length&&a.charCodeAt(s)===47;++s);for(var l=a.length,r=l-s,c=o<r?o:r,u=-1,d=0;d<=c;++d){if(d===c){if(r>c){if(a.charCodeAt(s+d)===47)return a.slice(s+d+1);if(d===0)return a.slice(s+d)}else o>c&&(e.charCodeAt(n+d)===47?u=d:d===0&&(u=0));break}var h=e.charCodeAt(n+d),m=a.charCodeAt(s+d);if(h!==m)break;h===47&&(u=d)}var k="";for(d=n+u+1;d<=i;++d)(d===i||e.charCodeAt(d)===47)&&(k.length===0?k+="..":k+="/..");return k.length>0?k+a.slice(s+u):(s+=u,a.charCodeAt(s)===47&&++s,a.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(O(e),e.length===0)return".";for(var a=e.charCodeAt(0),n=a===47,i=-1,o=!0,s=e.length-1;s>=1;--s)if(a=e.charCodeAt(s),a===47){if(!o){i=s;break}}else o=!1;return i===-1?n?"/":".":n&&i===1?"//":e.slice(0,i)},basename:function(e,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');O(e);var n=0,i=-1,o=!0,s;if(a!==void 0&&a.length>0&&a.length<=e.length){if(a.length===e.length&&a===e)return"";var l=a.length-1,r=-1;for(s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(c===47){if(!o){n=s+1;break}}else r===-1&&(o=!1,r=s+1),l>=0&&(c===a.charCodeAt(l)?--l===-1&&(i=s):(l=-1,i=r))}return n===i?i=r:i===-1&&(i=e.length),e.slice(n,i)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!o){n=s+1;break}}else i===-1&&(o=!1,i=s+1);return i===-1?"":e.slice(n,i)}},extname:function(e){O(e);for(var a=-1,n=0,i=-1,o=!0,s=0,l=e.length-1;l>=0;--l){var r=e.charCodeAt(l);if(r===47){if(!o){n=l+1;break}continue}i===-1&&(o=!1,i=l+1),r===46?a===-1?a=l:s!==1&&(s=1):a!==-1&&(s=-1)}return a===-1||i===-1||s===0||s===1&&a===i-1&&a===n+1?"":e.slice(a,i)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Vr("/",e)},parse:function(e){O(e);var a={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return a;var n=e.charCodeAt(0),i=n===47,o;i?(a.root="/",o=1):o=0;for(var s=-1,l=0,r=-1,c=!0,u=e.length-1,d=0;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!c){l=u+1;break}continue}r===-1&&(c=!1,r=u+1),n===46?s===-1?s=u:d!==1&&(d=1):s!==-1&&(d=-1)}return s===-1||r===-1||d===0||d===1&&s===r-1&&s===l+1?r!==-1&&(l===0&&i?a.base=a.name=e.slice(1,r):a.base=a.name=e.slice(l,r)):(l===0&&i?(a.name=e.slice(1,s),a.base=e.slice(1,r)):(a.name=e.slice(l,s),a.base=e.slice(l,r)),a.ext=e.slice(s,r)),l>0?a.dir=e.slice(0,l-1):i&&(a.dir="/"),a},sep:"/",delimiter:":",win32:null,posix:null};ue.posix=ue;Ka.exports=ue});var it=S(U=>{"use strict";var Xa=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Kr=Xa+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Qa="["+Xa+"]["+Kr+"]*",Yr=new RegExp("^"+Qa+"$"),Xr=function(t,e){let a=[],n=e.exec(t);for(;n;){let i=[];i.startIndex=e.lastIndex-n[0].length;let o=n.length;for(let s=0;s<o;s++)i.push(n[s]);a.push(i),n=e.exec(t)}return a},Qr=function(t){let e=Yr.exec(t);return!(e===null||typeof e>"u")};U.isExist=function(t){return typeof t<"u"};U.isEmptyObject=function(t){return Object.keys(t).length===0};U.merge=function(t,e,a){if(e){let n=Object.keys(e),i=n.length;for(let o=0;o<i;o++)a==="strict"?t[n[o]]=[e[n[o]]]:t[n[o]]=e[n[o]]}};U.getValue=function(t){return U.isExist(t)?t:""};U.isName=Qr;U.getAllMatches=Xr;U.nameRegexp=Qa});var rt=S(ao=>{"use strict";var st=it(),Zr={allowBooleanAttributes:!1,unpairedTags:[]};ao.validate=function(t,e){e=Object.assign({},Zr,e);let a=[],n=!1,i=!1;t[0]==="\uFEFF"&&(t=t.substr(1));for(let o=0;o<t.length;o++)if(t[o]==="<"&&t[o+1]==="?"){if(o+=2,o=eo(t,o),o.err)return o}else if(t[o]==="<"){let s=o;if(o++,t[o]==="!"){o=to(t,o);continue}else{let l=!1;t[o]==="/"&&(l=!0,o++);let r="";for(;o<t.length&&t[o]!==">"&&t[o]!==" "&&t[o]!=="	"&&t[o]!==`
`&&t[o]!=="\r";o++)r+=t[o];if(r=r.trim(),r[r.length-1]==="/"&&(r=r.substring(0,r.length-1),o--),!rl(r)){let d;return r.trim().length===0?d="Invalid space after '<'.":d="Tag '"+r+"' is an invalid name.",A("InvalidTag",d,P(t,o))}let c=nl(t,o);if(c===!1)return A("InvalidAttr","Attributes for '"+r+"' have open quote.",P(t,o));let u=c.value;if(o=c.index,u[u.length-1]==="/"){let d=o-u.length;u=u.substring(0,u.length-1);let h=no(u,e);if(h===!0)n=!0;else return A(h.err.code,h.err.msg,P(t,d+h.err.line))}else if(l)if(c.tagClosed){if(u.trim().length>0)return A("InvalidTag","Closing tag '"+r+"' can't have attributes or invalid starting.",P(t,s));{let d=a.pop();if(r!==d.tagName){let h=P(t,d.tagStartPos);return A("InvalidTag","Expected closing tag '"+d.tagName+"' (opened in line "+h.line+", col "+h.col+") instead of closing tag '"+r+"'.",P(t,s))}a.length==0&&(i=!0)}}else return A("InvalidTag","Closing tag '"+r+"' doesn't have proper closing.",P(t,o));else{let d=no(u,e);if(d!==!0)return A(d.err.code,d.err.msg,P(t,o-u.length+d.err.line));if(i===!0)return A("InvalidXml","Multiple possible root nodes found.",P(t,o));e.unpairedTags.indexOf(r)!==-1||a.push({tagName:r,tagStartPos:s}),n=!0}for(o++;o<t.length;o++)if(t[o]==="<")if(t[o+1]==="!"){o++,o=to(t,o);continue}else if(t[o+1]==="?"){if(o=eo(t,++o),o.err)return o}else break;else if(t[o]==="&"){let d=il(t,o);if(d==-1)return A("InvalidChar","char '&' is not expected.",P(t,o));o=d}else if(i===!0&&!Za(t[o]))return A("InvalidXml","Extra text at the end",P(t,o));t[o]==="<"&&o--}}else{if(Za(t[o]))continue;return A("InvalidChar","char '"+t[o]+"' is not expected.",P(t,o))}if(n){if(a.length==1)return A("InvalidTag","Unclosed tag '"+a[0].tagName+"'.",P(t,a[0].tagStartPos));if(a.length>0)return A("InvalidXml","Invalid '"+JSON.stringify(a.map(o=>o.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return A("InvalidXml","Start tag expected.",1);return!0};function Za(t){return t===" "||t==="	"||t===`
`||t==="\r"}function eo(t,e){let a=e;for(;e<t.length;e++)if(t[e]=="?"||t[e]==" "){let n=t.substr(a,e-a);if(e>5&&n==="xml")return A("InvalidXml","XML declaration allowed only at the start of the document.",P(t,e));if(t[e]=="?"&&t[e+1]==">"){e++;break}else continue}return e}function to(t,e){if(t.length>e+5&&t[e+1]==="-"&&t[e+2]==="-"){for(e+=3;e<t.length;e++)if(t[e]==="-"&&t[e+1]==="-"&&t[e+2]===">"){e+=2;break}}else if(t.length>e+8&&t[e+1]==="D"&&t[e+2]==="O"&&t[e+3]==="C"&&t[e+4]==="T"&&t[e+5]==="Y"&&t[e+6]==="P"&&t[e+7]==="E"){let a=1;for(e+=8;e<t.length;e++)if(t[e]==="<")a++;else if(t[e]===">"&&(a--,a===0))break}else if(t.length>e+9&&t[e+1]==="["&&t[e+2]==="C"&&t[e+3]==="D"&&t[e+4]==="A"&&t[e+5]==="T"&&t[e+6]==="A"&&t[e+7]==="["){for(e+=8;e<t.length;e++)if(t[e]==="]"&&t[e+1]==="]"&&t[e+2]===">"){e+=2;break}}return e}var el='"',tl="'";function nl(t,e){let a="",n="",i=!1;for(;e<t.length;e++){if(t[e]===el||t[e]===tl)n===""?n=t[e]:n!==t[e]||(n="");else if(t[e]===">"&&n===""){i=!0;break}a+=t[e]}return n!==""?!1:{value:a,index:e,tagClosed:i}}var al=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function no(t,e){let a=st.getAllMatches(t,al),n={};for(let i=0;i<a.length;i++){if(a[i][1].length===0)return A("InvalidAttr","Attribute '"+a[i][2]+"' has no space in starting.",fe(a[i]));if(a[i][3]!==void 0&&a[i][4]===void 0)return A("InvalidAttr","Attribute '"+a[i][2]+"' is without value.",fe(a[i]));if(a[i][3]===void 0&&!e.allowBooleanAttributes)return A("InvalidAttr","boolean attribute '"+a[i][2]+"' is not allowed.",fe(a[i]));let o=a[i][2];if(!sl(o))return A("InvalidAttr","Attribute '"+o+"' is an invalid name.",fe(a[i]));if(!n.hasOwnProperty(o))n[o]=1;else return A("InvalidAttr","Attribute '"+o+"' is repeated.",fe(a[i]))}return!0}function ol(t,e){let a=/\d/;for(t[e]==="x"&&(e++,a=/[\da-fA-F]/);e<t.length;e++){if(t[e]===";")return e;if(!t[e].match(a))break}return-1}function il(t,e){if(e++,t[e]===";")return-1;if(t[e]==="#")return e++,ol(t,e);let a=0;for(;e<t.length;e++,a++)if(!(t[e].match(/\w/)&&a<20)){if(t[e]===";")break;return-1}return e}function A(t,e,a){return{err:{code:t,msg:e,line:a.line||a,col:a.col}}}function sl(t){return st.isName(t)}function rl(t){return st.isName(t)}function P(t,e){let a=t.substring(0,e).split(/\r?\n/);return{line:a.length,col:a[a.length-1].length+1}}function fe(t){return t.startIndex+t[1].length}});var io=S(lt=>{var oo={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1},ll=function(t){return Object.assign({},oo,t)};lt.buildOptions=ll;lt.defaultOptions=oo});var ro=S((fh,so)=>{"use strict";var ct=class{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,a){this.child.push({[e]:a})}addChild(e){e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,[":@"]:e[":@"]}):this.child.push({[e.tagname]:e.child})}};so.exports=ct});var co=S((gh,lo)=>{function cl(t,e){let a={};if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let n=1,i=!1,o=!1,s=!1,l="";for(;e<t.length;e++)if(t[e]==="<"){if(i&&t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="N"&&t[e+4]==="T"&&t[e+5]==="I"&&t[e+6]==="T"&&t[e+7]==="Y")e+=7,o=!0;else if(i&&t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="L"&&t[e+4]==="E"&&t[e+5]==="M"&&t[e+6]==="E"&&t[e+7]==="N"&&t[e+8]==="T")e+=8;else if(i&&t[e+1]==="!"&&t[e+2]==="A"&&t[e+3]==="T"&&t[e+4]==="T"&&t[e+5]==="L"&&t[e+6]==="I"&&t[e+7]==="S"&&t[e+8]==="T")e+=8;else if(i&&t[e+1]==="!"&&t[e+2]==="N"&&t[e+3]==="O"&&t[e+4]==="T"&&t[e+5]==="A"&&t[e+6]==="T"&&t[e+7]==="I"&&t[e+8]==="O"&&t[e+9]==="N")e+=9;else if(t[e+1]==="!"&&t[e+2]==="-"&&t[e+3]==="-")s=!0;else throw new Error("Invalid DOCTYPE");n++,l=""}else if(t[e]===">"){if(s)if(t[e-1]==="-"&&t[e-2]==="-")s=!1;else throw new Error("Invalid XML comment in DOCTYPE");else o&&(dl(l,a),o=!1);if(n--,n===0)break}else t[e]==="["?i=!0:l+=t[e];if(n!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:a,i:e}}var ul=RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);function dl(t,e){let a=ul.exec(t);a&&(e[a[1]]={regx:RegExp(`&${a[1]};`,"g"),val:a[3]})}lo.exports=cl});var po=S((yh,uo)=>{var pl=/^[-+]?0x[a-fA-F0-9]+$/,hl=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var ml={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function fl(t,e={}){if(e=Object.assign({},ml,e),!t||typeof t!="string")return t;let a=t.trim();if(e.skipLike!==void 0&&e.skipLike.test(a))return t;if(e.hex&&pl.test(a))return Number.parseInt(a,16);{let n=hl.exec(a);if(n){let i=n[1],o=n[2],s=gl(n[3]),l=n[4]||n[6];if(!e.leadingZeros&&o.length>0&&i&&a[2]!==".")return t;if(!e.leadingZeros&&o.length>0&&!i&&a[1]!==".")return t;{let r=Number(a),c=""+r;return c.search(/[eE]/)!==-1||l?e.eNotation?r:t:a.indexOf(".")!==-1?c==="0"&&s===""||c===s||i&&c==="-"+s?r:t:o?s===c||i+s===c?r:t:a===c||a===i+c?r:t}}else return t}}function gl(t){return t&&t.indexOf(".")!==-1&&(t=t.replace(/0+$/,""),t==="."?t="0":t[0]==="."?t="0"+t:t[t.length-1]==="."&&(t=t.substr(0,t.length-1))),t}uo.exports=fl});var mo=S((bh,ho)=>{"use strict";var ht=it(),ge=ro(),yl=co(),wl=po(),wh="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,ht.nameRegexp),ut=class{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=bl,this.parseXml=Cl,this.parseTextData=Dl,this.resolveNameSpace=vl,this.buildAttributesMap=xl,this.isItStopNode=El,this.replaceEntitiesValue=Fl,this.readStopNodeData=Al,this.saveTextToParentTag=Il}};function bl(t){let e=Object.keys(t);for(let a=0;a<e.length;a++){let n=e[a];this.lastEntities[n]={regex:new RegExp("&"+n+";","g"),val:t[n]}}}function Dl(t,e,a,n,i,o,s){if(t!==void 0&&(this.options.trimValues&&!n&&(t=t.trim()),t.length>0)){s||(t=this.replaceEntitiesValue(t));let l=this.options.tagValueProcessor(e,t,a,i,o);return l==null?t:typeof l!=typeof t||l!==t?l:this.options.trimValues?pt(t,this.options.parseTagValue,this.options.numberParseOptions):t.trim()===t?pt(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function vl(t){if(this.options.removeNSPrefix){let e=t.split(":"),a=t.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(t=a+e[1])}return t}var kl=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function xl(t,e){if(!this.options.ignoreAttributes&&typeof t=="string"){let a=ht.getAllMatches(t,kl),n=a.length,i={};for(let o=0;o<n;o++){let s=this.resolveNameSpace(a[o][1]),l=a[o][4],r=this.options.attributeNamePrefix+s;if(s.length)if(l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);let c=this.options.attributeValueProcessor(s,l,e);c==null?i[r]=l:typeof c!=typeof l||c!==l?i[r]=c:i[r]=pt(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(i[r]=!0)}if(!Object.keys(i).length)return;if(this.options.attributesGroupName){let o={};return o[this.options.attributesGroupName]=i,o}return i}}var Cl=function(t){t=t.replace(/\r\n?/g,`
`);let e=new ge("!xml"),a=e,n="",i="";for(let o=0;o<t.length;o++)if(t[o]==="<")if(t[o+1]==="/"){let l=te(t,">",o,"Closing Tag is not closed."),r=t.substring(o+2,l).trim();if(this.options.removeNSPrefix){let c=r.indexOf(":");c!==-1&&(r=r.substr(c+1))}this.options.transformTagName&&(r=this.options.transformTagName(r)),a&&(n=this.saveTextToParentTag(n,a,i)),i=i.substr(0,i.lastIndexOf(".")),a=this.tagsNodeStack.pop(),n="",o=l}else if(t[o+1]==="?"){let l=dt(t,o,!1,"?>");if(!l)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,a,i),!(this.options.ignoreDeclaration&&l.tagName==="?xml"||this.options.ignorePiTags)){let r=new ge(l.tagName);r.add(this.options.textNodeName,""),l.tagName!==l.tagExp&&l.attrExpPresent&&(r[":@"]=this.buildAttributesMap(l.tagExp,i)),a.addChild(r)}o=l.closeIndex+1}else if(t.substr(o+1,3)==="!--"){let l=te(t,"-->",o+4,"Comment is not closed.");if(this.options.commentPropName){let r=t.substring(o+4,l-2);n=this.saveTextToParentTag(n,a,i),a.add(this.options.commentPropName,[{[this.options.textNodeName]:r}])}o=l}else if(t.substr(o+1,2)==="!D"){let l=yl(t,o);this.docTypeEntities=l.entities,o=l.i}else if(t.substr(o+1,2)==="!["){let l=te(t,"]]>",o,"CDATA is not closed.")-2,r=t.substring(o+9,l);if(n=this.saveTextToParentTag(n,a,i),this.options.cdataPropName)a.add(this.options.cdataPropName,[{[this.options.textNodeName]:r}]);else{let c=this.parseTextData(r,a.tagname,i,!0,!1,!0);c==null&&(c=""),a.add(this.options.textNodeName,c)}o=l+2}else{let l=dt(t,o,this.options.removeNSPrefix),r=l.tagName,c=l.tagExp,u=l.attrExpPresent,d=l.closeIndex;this.options.transformTagName&&(r=this.options.transformTagName(r)),a&&n&&a.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,a,i,!1)),r!==e.tagname&&(i+=i?"."+r:r);let h=a;if(h&&this.options.unpairedTags.indexOf(h.tagname)!==-1&&(a=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,i,r)){let m="";if(c.length>0&&c.lastIndexOf("/")===c.length-1)o=l.closeIndex;else if(this.options.unpairedTags.indexOf(r)!==-1)o=l.closeIndex;else{let y=this.readStopNodeData(t,r,d+1);if(!y)throw new Error(`Unexpected end of ${r}`);o=y.i,m=y.tagContent}let k=new ge(r);r!==c&&u&&(k[":@"]=this.buildAttributesMap(c,i)),m&&(m=this.parseTextData(m,r,i,!0,u,!0,!0)),i=i.substr(0,i.lastIndexOf(".")),k.add(this.options.textNodeName,m),a.addChild(k)}else{if(c.length>0&&c.lastIndexOf("/")===c.length-1){r[r.length-1]==="/"?(r=r.substr(0,r.length-1),c=r):c=c.substr(0,c.length-1),this.options.transformTagName&&(r=this.options.transformTagName(r));let m=new ge(r);r!==c&&u&&(m[":@"]=this.buildAttributesMap(c,i)),i=i.substr(0,i.lastIndexOf(".")),a.addChild(m)}else{let m=new ge(r);this.tagsNodeStack.push(a),r!==c&&u&&(m[":@"]=this.buildAttributesMap(c,i)),a.addChild(m),a=m}n="",o=d}}else n+=t[o];return e.child},Fl=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){let a=this.docTypeEntities[e];t=t.replace(a.regx,a.val)}for(let e in this.lastEntities){let a=this.lastEntities[e];t=t.replace(a.regex,a.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){let a=this.htmlEntities[e];t=t.replace(a.regex,a.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function Il(t,e,a,n){return t&&(n===void 0&&(n=Object.keys(e.child).length===0),t=this.parseTextData(t,e.tagname,a,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,n),t!==void 0&&t!==""&&e.add(this.options.textNodeName,t),t=""),t}function El(t,e,a){let n="*."+a;for(let i in t){let o=t[i];if(n===o||e===o)return!0}return!1}function Sl(t,e,a=">"){let n,i="";for(let o=e;o<t.length;o++){let s=t[o];if(n)s===n&&(n="");else if(s==='"'||s==="'")n=s;else if(s===a[0])if(a[1]){if(t[o+1]===a[1])return{data:i,index:o}}else return{data:i,index:o};else s==="	"&&(s=" ");i+=s}}function te(t,e,a,n){let i=t.indexOf(e,a);if(i===-1)throw new Error(n);return i+e.length-1}function dt(t,e,a,n=">"){let i=Sl(t,e+1,n);if(!i)return;let o=i.data,s=i.index,l=o.search(/\s/),r=o,c=!0;if(l!==-1&&(r=o.substr(0,l).replace(/\s\s*$/,""),o=o.substr(l+1)),a){let u=r.indexOf(":");u!==-1&&(r=r.substr(u+1),c=r!==i.data.substr(u+1))}return{tagName:r,tagExp:o,closeIndex:s,attrExpPresent:c}}function Al(t,e,a){let n=a,i=1;for(;a<t.length;a++)if(t[a]==="<")if(t[a+1]==="/"){let o=te(t,">",a,`${e} is not closed`);if(t.substring(a+2,o).trim()===e&&(i--,i===0))return{tagContent:t.substring(n,a),i:o};a=o}else if(t[a+1]==="?")a=te(t,"?>",a+1,"StopNode is not closed.");else if(t.substr(a+1,3)==="!--")a=te(t,"-->",a+3,"StopNode is not closed.");else if(t.substr(a+1,2)==="![")a=te(t,"]]>",a,"StopNode is not closed.")-2;else{let o=dt(t,a,">");o&&((o&&o.tagName)===e&&o.tagExp[o.tagExp.length-1]!=="/"&&i++,a=o.closeIndex)}}function pt(t,e,a){if(e&&typeof t=="string"){let n=t.trim();return n==="true"?!0:n==="false"?!1:wl(t,a)}else return ht.isExist(t)?t:""}ho.exports=ut});var yo=S(go=>{"use strict";function Tl(t,e){return fo(t,e)}function fo(t,e,a){let n,i={};for(let o=0;o<t.length;o++){let s=t[o],l=Bl(s),r="";if(a===void 0?r=l:r=a+"."+l,l===e.textNodeName)n===void 0?n=s[l]:n+=""+s[l];else{if(l===void 0)continue;if(s[l]){let c=fo(s[l],e,r),u=Nl(c,e);s[":@"]?jl(c,s[":@"],r,e):Object.keys(c).length===1&&c[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?c=c[e.textNodeName]:Object.keys(c).length===0&&(e.alwaysCreateTextNode?c[e.textNodeName]="":c=""),i[l]!==void 0&&i.hasOwnProperty(l)?(Array.isArray(i[l])||(i[l]=[i[l]]),i[l].push(c)):e.isArray(l,r,u)?i[l]=[c]:i[l]=c}}}return typeof n=="string"?n.length>0&&(i[e.textNodeName]=n):n!==void 0&&(i[e.textNodeName]=n),i}function Bl(t){let e=Object.keys(t);for(let a=0;a<e.length;a++){let n=e[a];if(n!==":@")return n}}function jl(t,e,a,n){if(e){let i=Object.keys(e),o=i.length;for(let s=0;s<o;s++){let l=i[s];n.isArray(l,a+"."+l,!0,!0)?t[l]=[e[l]]:t[l]=e[l]}}}function Nl(t,e){let a=Object.keys(t).length;return!!(a===0||a===1&&t[e.textNodeName])}go.prettify=Tl});var bo=S((vh,wo)=>{var{buildOptions:Pl}=io(),_l=mo(),{prettify:Rl}=yo(),$l=rt(),mt=class{constructor(e){this.externalEntities={},this.options=Pl(e)}parse(e,a){if(typeof e!="string")if(e.toString)e=e.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(a){a===!0&&(a={});let o=$l.validate(e,a);if(o!==!0)throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`)}let n=new _l(this.options);n.addExternalEntities(this.externalEntities);let i=n.parseXml(e);return this.options.preserveOrder||i===void 0?i:Rl(i,this.options)}addEntity(e,a){if(a.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(a==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[e]=a}};wo.exports=mt});var Co=S((kh,xo)=>{var Ml=`
`;function Hl(t,e){return vo(t,e,"",0)}function vo(t,e,a,n){let i="",o="";e.format&&e.indentBy.length>0&&(o=Ml+""+e.indentBy.repeat(n));for(let s=0;s<t.length;s++){let l=t[s],r=Ol(l),c="";if(a.length===0?c=r:c=`${a}.${r}`,r===e.textNodeName){let m=l[r];Ll(c,e)||(m=e.tagValueProcessor(r,m),m=ko(m,e)),i+=o+m;continue}else if(r===e.cdataPropName){i+=o+`<![CDATA[${l[r][0][e.textNodeName]}]]>`;continue}else if(r===e.commentPropName){i+=o+`<!--${l[r][0][e.textNodeName]}-->`;continue}else if(r[0]==="?"){let m=Do(l[":@"],e),k=r==="?xml"?"":o,y=l[r][0][e.textNodeName];y=y.length!==0?" "+y:"",i+=k+`<${r}${y}${m}?>`;continue}let u=Do(l[":@"],e),d=o+`<${r}${u}`,h=vo(l[r],e,c,n+1);e.unpairedTags.indexOf(r)!==-1?e.suppressUnpairedNode?i+=d+">":i+=d+"/>":(!h||h.length===0)&&e.suppressEmptyNode?i+=d+"/>":i+=d+`>${h}${o}</${r}>`}return i}function Ol(t){let e=Object.keys(t);for(let a=0;a<e.length;a++){let n=e[a];if(n!==":@")return n}}function Do(t,e){let a="";if(t&&!e.ignoreAttributes)for(let n in t){let i=e.attributeValueProcessor(n,t[n]);i=ko(i,e),i===!0&&e.suppressBooleanAttributes?a+=` ${n.substr(e.attributeNamePrefix.length)}`:a+=` ${n.substr(e.attributeNamePrefix.length)}="${i}"`}return a}function Ll(t,e){t=t.substr(0,t.length-e.textNodeName.length-1);let a=t.substr(t.lastIndexOf(".")+1);for(let n in e.stopNodes)if(e.stopNodes[n]===t||e.stopNodes[n]==="*."+a)return!0;return!1}function ko(t,e){if(t&&t.length>0&&e.processEntities)for(let a=0;a<e.entities.length;a++){let n=e.entities[a];t=t.replace(n.regex,n.val)}return t}xo.exports=Hl});var So=S((xh,Eo)=>{"use strict";var ql=Co(),zl={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],transformTagName:!1};function ft(t){this.options=Object.assign({},zl,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Yl),this.processTextOrObjNode=Wl,this.options.format?(this.indentate=Kl,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.suppressEmptyNode?(this.buildTextNode=Vl,this.buildObjNode=Gl):(this.buildTextNode=Io,this.buildObjNode=Fo),this.buildTextValNode=Io,this.buildObjectNode=Fo,this.replaceEntitiesValue=Jl,this.buildAttrPairStr=Ul}ft.prototype.build=function(t){return this.options.preserveOrder?ql(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)};ft.prototype.j2x=function(t,e){let a="",n="";for(let i in t)if(!(typeof t[i]>"u"))if(t[i]===null)i[0]==="?"?n+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:n+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)n+=this.buildTextNode(t[i],i,"",e);else if(typeof t[i]!="object"){let o=this.isAttribute(i);if(o)a+=this.buildAttrPairStr(o,""+t[i]);else if(i===this.options.textNodeName){let s=this.options.tagValueProcessor(i,""+t[i]);n+=this.replaceEntitiesValue(s)}else n+=this.buildTextNode(t[i],i,"",e)}else if(Array.isArray(t[i])){let o=t[i].length;for(let s=0;s<o;s++){let l=t[i][s];typeof l>"u"||(l===null?i[0]==="?"?n+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:n+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:typeof l=="object"?n+=this.processTextOrObjNode(l,i,e):n+=this.buildTextNode(l,i,"",e))}}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){let o=Object.keys(t[i]),s=o.length;for(let l=0;l<s;l++)a+=this.buildAttrPairStr(o[l],""+t[i][o[l]])}else n+=this.processTextOrObjNode(t[i],i,e);return{attrStr:a,val:n}};function Ul(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&e==="true"?" "+t:" "+t+'="'+e+'"'}function Wl(t,e,a){let n=this.j2x(t,a+1);return t[this.options.textNodeName]!==void 0&&Object.keys(t).length===1?this.buildTextNode(t[this.options.textNodeName],e,n.attrStr,a):this.buildObjNode(n.val,e,n.attrStr,a)}function Fo(t,e,a,n){let i="</"+e+this.tagEndChar,o="";return e[0]==="?"&&(o="?",i=""),a&&t.indexOf("<")===-1?this.indentate(n)+"<"+e+a+o+">"+t+i:this.options.commentPropName!==!1&&e===this.options.commentPropName&&o.length===0?this.indentate(n)+`<!--${t}-->`+this.newLine:this.indentate(n)+"<"+e+a+o+this.tagEndChar+t+this.indentate(n)+i}function Gl(t,e,a,n){return t!==""?this.buildObjectNode(t,e,a,n):e[0]==="?"?this.indentate(n)+"<"+e+a+"?"+this.tagEndChar:this.indentate(n)+"<"+e+a+"/"+this.tagEndChar}function Io(t,e,a,n){if(this.options.cdataPropName!==!1&&e===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${t}]]>`+this.newLine;if(this.options.commentPropName!==!1&&e===this.options.commentPropName)return this.indentate(n)+`<!--${t}-->`+this.newLine;{let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),i===""&&this.options.unpairedTags.indexOf(e)!==-1?this.options.suppressUnpairedNode?this.indentate(n)+"<"+e+this.tagEndChar:this.indentate(n)+"<"+e+"/"+this.tagEndChar:this.indentate(n)+"<"+e+a+">"+i+"</"+e+this.tagEndChar}}function Jl(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){let a=this.options.entities[e];t=t.replace(a.regex,a.val)}return t}function Vl(t,e,a,n){return t===""&&this.options.unpairedTags.indexOf(e)!==-1?this.options.suppressUnpairedNode?this.indentate(n)+"<"+e+this.tagEndChar:this.indentate(n)+"<"+e+"/"+this.tagEndChar:t!==""?this.buildTextValNode(t,e,a,n):e[0]==="?"?this.indentate(n)+"<"+e+a+"?"+this.tagEndChar:this.indentate(n)+"<"+e+a+"/"+this.tagEndChar}function Kl(t){return this.options.indentBy.repeat(t)}function Yl(t){return t.startsWith(this.options.attributeNamePrefix)?t.substr(this.attrPrefixLen):!1}Eo.exports=ft});var To=S((Ch,Ao)=>{"use strict";var Xl=rt(),Ql=bo(),Zl=So();Ao.exports={XMLParser:Ql,XMLValidator:Xl,XMLBuilder:Zl}});var ti=le(Na(),1),Fe=le(Pa(),1);var{replace:Lr}="";var qr=/[&<>'"]/g,zr={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Ur=t=>zr[t],_a=t=>Lr.call(t,qr,Ur);var nt,Ra,$a,Ma,Ha=!0;typeof process<"u"&&({FORCE_COLOR:nt,NODE_DISABLE_COLORS:Ra,NO_COLOR:$a,TERM:Ma}=process.env||{},Ha=process.stdout&&process.stdout.isTTY);var Wr={enabled:!Ra&&$a==null&&Ma!=="dumb"&&(nt!=null&&nt!=="0"||Ha)};function x(t,e){let a=new RegExp(`\\x1b\\[${e}m`,"g"),n=`\x1B[${t}m`,i=`\x1B[${e}m`;return function(o){return!Wr.enabled||o==null?o:n+(~(""+o).indexOf(i)?o.replace(a,i+n):o)+i}}var Oa=x(0,0),ce=x(1,22),La=x(2,22),_p=x(3,23),Rp=x(4,24),$p=x(7,27),Mp=x(8,28),Hp=x(9,29),Op=x(30,39),qa=x(31,39),Lp=x(32,39),at=x(33,39),qp=x(34,39),zp=x(35,39),za=x(36,39),Up=x(37,39),Wp=x(90,39),Gp=x(90,39),Jp=x(40,49),Vp=x(41,49),Kp=x(42,49),Yp=x(43,49),Xp=x(44,49),Qp=x(45,49),Zp=x(46,49),eh=x(47,49);var Gr=le(Wa(),1),Jr=le(Ja(),1);var ni=le(Ya(),1);var jo=le(To(),1);function gt(t,e){let a=t.replace(/\/index.html$/,"");return a=a.replace(/\/1\/?$/,""),ec(t)||(a=a.replace(/(\/+)?$/,"/")),a=a.replace(/\/+/g,"/"),new URL(a,e)}function Bo(t){try{return new URL(t),!0}catch{}return!1}function ec(t){let e=t.lastIndexOf("."),a=t.lastIndexOf("/");return e>a?t.slice(e+1):""}function tc(t){return typeof t=="object"&&!t.length}function nc(t){return Promise.all(Object.values(t).map(async e=>{let{url:a,frontmatter:n}=await e();if(a==null)throw new Error('[RSS] When passing an import.meta.glob result directly, you can only glob ".md" (or alternative extensions for markdown files like ".markdown") files within /pages! Consider mapping the result to an array of RSSFeedItems. See the RSS docs for usage examples: https://docs.astro.build/en/guides/rss/#2-list-of-rss-feed-objects');if(!Boolean(n.title)||!Boolean(n.pubDate))throw new Error(`[RSS] "${a}" is missing a "title" and/or "pubDate" in its frontmatter.`);return{link:a,title:n.title,pubDate:n.pubDate,description:n.description,customData:n.customData}}))}async function No(t){let{site:e}=t,{items:a}=t;if(!e)throw new Error('[RSS] the "site" option is required, but no value was given.');return tc(a)&&(a=await nc(a)),{body:await ac({rssOptions:t,items:a})}}async function ac({rssOptions:t,items:e}){let{site:a}=t,n='<?xml version="1.0" encoding="UTF-8"?>';if(typeof t.stylesheet=="string"&&(n+=`<?xml-stylesheet href="${t.stylesheet}" type="text/xsl"?>`),n+='<rss version="2.0"',t.xmlns)for(let[o,s]of Object.entries(t.xmlns))n+=` xmlns:${o}="${s}"`;n+=">",n+="<channel>",n+=`<title><![CDATA[${t.title}]]></title>`,n+=`<description><![CDATA[${t.description}]]></description>`,n+=`<link>${gt(a).href}</link>`,typeof t.customData=="string"&&(n+=t.customData);for(let o of e){ic(o),n+="<item>",n+=`<title><![CDATA[${o.title}]]></title>`;let s=Bo(o.link)?o.link:gt(o.link,a).href;if(n+=`<link>${s}</link>`,n+=`<guid>${s}</guid>`,o.description&&(n+=`<description><![CDATA[${o.description}]]></description>`),o.pubDate){if(typeof o.pubDate=="number"||typeof o.pubDate=="string")o.pubDate=new Date(o.pubDate);else if(!(o.pubDate instanceof Date))throw new Error("[${filename}] rss.item().pubDate must be a Date");n+=`<pubDate>${o.pubDate.toUTCString()}</pubDate>`}typeof o.customData=="string"&&(n+=o.customData),n+="</item>"}n+="</channel></rss>";let i=jo.XMLValidator.validate(n);if(i!==!0)throw new Error(i);return n}var oc=Object.freeze(["link","title"]);function ic(t){for(let e of oc)if(!(e in t))throw new Error(`@astrojs/rss: Required field [${e}] is missing. RSS cannot be generated without it.`)}function sc(t){for(var e=[],a=0;a<t.length;){var n=t[a];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:a,value:t[a++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:a++,value:t[a++]});continue}if(n==="{"){e.push({type:"OPEN",index:a,value:t[a++]});continue}if(n==="}"){e.push({type:"CLOSE",index:a,value:t[a++]});continue}if(n===":"){for(var i="",o=a+1;o<t.length;){var s=t.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){i+=t[o++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(a));e.push({type:"NAME",index:a,value:i}),a=o;continue}if(n==="("){var l=1,r="",o=a+1;if(t[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<t.length;){if(t[o]==="\\"){r+=t[o++]+t[o++];continue}if(t[o]===")"){if(l--,l===0){o++;break}}else if(t[o]==="("&&(l++,t[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));r+=t[o++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));e.push({type:"PATTERN",index:a,value:r}),a=o;continue}e.push({type:"CHAR",index:a,value:t[a++]})}return e.push({type:"END",index:a,value:""}),e}function rc(t,e){e===void 0&&(e={});for(var a=sc(t),n=e.prefixes,i=n===void 0?"./":n,o="[^".concat(cc(e.delimiter||"/#?"),"]+?"),s=[],l=0,r=0,c="",u=function(z){if(r<a.length&&a[r].type===z)return a[r++].value},d=function(z){var ee=u(z);if(ee!==void 0)return ee;var D=a[r],E=D.type,j=D.index;throw new TypeError("Unexpected ".concat(E," at ").concat(j,", expected ").concat(z))},h=function(){for(var z="",ee;ee=u("CHAR")||u("ESCAPED_CHAR");)z+=ee;return z};r<a.length;){var m=u("CHAR"),k=u("NAME"),y=u("PATTERN");if(k||y){var w=m||"";i.indexOf(w)===-1&&(c+=w,w=""),c&&(s.push(c),c=""),s.push({name:k||l++,prefix:w,suffix:"",pattern:y||o,modifier:u("MODIFIER")||""});continue}var b=m||u("ESCAPED_CHAR");if(b){c+=b;continue}c&&(s.push(c),c="");var f=u("OPEN");if(f){var w=h(),se=u("NAME")||"",H=u("PATTERN")||"",re=h();d("CLOSE"),s.push({name:se||(H?l++:""),pattern:se&&!H?o:H,prefix:w,suffix:re,modifier:u("MODIFIER")||""});continue}d("END")}return s}function Po(t,e){return lc(rc(t,e),e)}function lc(t,e){e===void 0&&(e={});var a=uc(e),n=e.encode,i=n===void 0?function(r){return r}:n,o=e.validate,s=o===void 0?!0:o,l=t.map(function(r){if(typeof r=="object")return new RegExp("^(?:".concat(r.pattern,")$"),a)});return function(r){for(var c="",u=0;u<t.length;u++){var d=t[u];if(typeof d=="string"){c+=d;continue}var h=r?r[d.name]:void 0,m=d.modifier==="?"||d.modifier==="*",k=d.modifier==="*"||d.modifier==="+";if(Array.isArray(h)){if(!k)throw new TypeError('Expected "'.concat(d.name,'" to not repeat, but got an array'));if(h.length===0){if(m)continue;throw new TypeError('Expected "'.concat(d.name,'" to not be empty'))}for(var y=0;y<h.length;y++){var w=i(h[y],d);if(s&&!l[u].test(w))throw new TypeError('Expected all "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(w,'"'));c+=d.prefix+w+d.suffix}continue}if(typeof h=="string"||typeof h=="number"){var w=i(String(h),d);if(s&&!l[u].test(w))throw new TypeError('Expected "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(w,'"'));c+=d.prefix+w+d.suffix;continue}if(!m){var b=k?"an array":"a string";throw new TypeError('Expected "'.concat(d.name,'" to be ').concat(b))}}return c}}function cc(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function uc(t){return t&&t.sensitive?"":"i"}var Gn=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},R=(t,e,a)=>(Gn(t,e,"read from private field"),a?a.call(t):e.get(t)),de=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},me=(t,e,a,n)=>(Gn(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),we=(t,e,a)=>(Gn(t,e,"access private method"),a),qe,X,_,Re,It,$e,Et,Jn,ai,dc=new Date(0),_o="deleted",ve=class{constructor(e){this.value=e}json(){if(this.value===void 0)throw new Error("Cannot convert undefined to an object.");return JSON.parse(this.value)}number(){return Number(this.value)}boolean(){return this.value==="false"||this.value==="0"?!1:Boolean(this.value)}},ze=class{constructor(e){de(this,Re),de(this,$e),de(this,Jn),de(this,qe,void 0),de(this,X,void 0),de(this,_,void 0),me(this,qe,e),me(this,X,null),me(this,_,null)}delete(e,a){let n={expires:dc};a?.domain&&(n.domain=a.domain),a?.path&&(n.path=a.path),we(this,$e,Et).call(this).set(e,[_o,(0,Fe.serialize)(e,_o,n),!1])}get(e){if(R(this,_)!==null&&R(this,_).has(e)){let[i,,o]=R(this,_).get(e);return o?new ve(i):new ve(void 0)}let n=we(this,Re,It).call(this)[e];return new ve(n)}has(e){if(R(this,_)!==null&&R(this,_).has(e)){let[,,n]=R(this,_).get(e);return n}return!!we(this,Re,It).call(this)[e]}set(e,a,n){let i;if(typeof a=="string")i=a;else{let s=a.toString();s===Object.prototype.toString.call(a)?i=JSON.stringify(a):i=s}let o={};n&&Object.assign(o,n),we(this,$e,Et).call(this).set(e,[i,(0,Fe.serialize)(e,i,o),!0])}*headers(){if(R(this,_)!=null)for(let[,e]of R(this,_))yield e[1]}};qe=new WeakMap;X=new WeakMap;_=new WeakMap;Re=new WeakSet;It=function(){return R(this,X)||we(this,Jn,ai).call(this),R(this,X)||me(this,X,{}),R(this,X)};$e=new WeakSet;Et=function(){return R(this,_)||me(this,_,new Map),R(this,_)};Jn=new WeakSet;ai=function(){let t=R(this,qe).headers.get("cookie");!t||me(this,X,(0,Fe.parse)(t))};var oi=Symbol.for("astro.cookies");function Vn(t,e){Reflect.set(t,oi,e)}function pc(t){let e=Reflect.get(t,oi);if(e!=null)return e}function*hc(t){let e=pc(t);if(!!e)for(let a of e.headers())yield a}function ii(t,e){return t.isAstroComponentFactory=!0,t.moduleId=e,t}function mc(t){let e=ii(t.factory,t.moduleId);return e.propagation=t.propagation,e}function J(t,e){return typeof t=="function"?ii(t,e):mc(t)}var si="1.7.2";function fc(){return()=>{throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().")}}function gc(){return(e,a)=>{let n=[...Object.values(e)];if(n.length===0)throw new Error(`Astro.glob(${JSON.stringify(a())}) - no matches found.`);return Promise.all(n.map(i=>i()))}}function V(t,e,a){let n=e?new URL(e):void 0,i=new URL(t,"http://localhost"),o=new URL(a);return{site:n,generator:`Astro v${si}`,fetchContent:fc(),glob:gc(),resolve(...s){let l=s.reduce((r,c)=>new URL(c,r),i).pathname;return l.startsWith(o.pathname)&&(l="/"+l.slice(o.pathname.length)),l}}}function yc(t,e){if(t[e])return t[e];if(e==="delete"&&t.del)return t.del;if(t.all)return t.all}async function wc(t,e,a){var n;let{request:i,params:o}=e,s=(n=i.method)==null?void 0:n.toLowerCase(),l=yc(t,s);if(!a&&a===!1&&s&&s!=="get"&&console.warn(`
${s} requests are not available when building a static site. Update your config to output: 'server' to handle ${s} requests.`),!l||typeof l!="function")return new Response(null,{status:404,headers:{"X-Astro-Response":"Not-Found"}});l.length>1&&console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);let r=new Proxy(e,{get(c,u){return u in c?Reflect.get(c,u):u in o?(console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`),Reflect.get(o,u)):void 0}});return l.call(t,r,i)}var ke=_a,ae=class extends String{get[Symbol.toStringTag](){return"HTMLString"}},v=t=>t instanceof ae?t:typeof t=="string"?new ae(t):t;function Kn(t){return Object.prototype.toString.call(t)==="[object HTMLString]"}var Ke="astro:jsx",Ro=Symbol("empty"),$o=t=>t;function xe(t){return t&&typeof t=="object"&&t[Ke]}function bc(t){if(typeof t.type=="string")return t;let e={};if(xe(t.props.children)){let a=t.props.children;if(!xe(a)||!("slot"in a.props))return;let n=$o(a.props.slot);e[n]=[a],e[n].$$slot=!0,delete a.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(a=>{if(!xe(a)||!("slot"in a.props))return a;let n=$o(a.props.slot);return Array.isArray(e[n])?e[n].push(a):(e[n]=[a],e[n].$$slot=!0),delete a.props.slot,Ro}).filter(a=>a!==Ro)),Object.assign(t.props,e)}function ri(t){return typeof t=="string"?v(t):Array.isArray(t)?t.map(e=>ri(e)):t}function Dc(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){let e=ri(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){let e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function p(t,e){let a={[We]:"astro:jsx",[Ke]:!0,type:t,props:e??{}};return Dc(a),bc(a),a}var vc='(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));',kc='(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));',xc='(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));',Cc='(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));',Fc='(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));',Ic='var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';function Ec(t){return t._metadata.hasHydrationScript?!1:t._metadata.hasHydrationScript=!0}var Mo={idle:vc,load:kc,only:Cc,media:xc,visible:Fc};function Sc(t,e){return t._metadata.hasDirectives.has(e)?!1:(t._metadata.hasDirectives.add(e),!0)}function Ho(t){if(!(t in Mo))throw new Error(`Unknown directive: ${t}`);return Mo[t]}function Ac(t,e){switch(t){case"both":return`<style>astro-island,astro-slot{display:contents}</style><script>${Ho(e)+Ic}<\/script>`;case"directive":return`<script>${Ho(e)}<\/script>`}return""}var Tc=Symbol.for("astro.headAndContent");function Ye(t){return typeof t=="object"&&!!t[Tc]}function li(t){let e={};return a(t),Object.keys(e).join(" ");function a(n){n&&typeof n.forEach=="function"?n.forEach(a):n===Object(n)?Object.keys(n).forEach(i=>{n[i]&&a(i)}):(n=n===!1||n==null?"":String(n).trim(),n&&n.split(/\s+/).forEach(i=>{e[i]=!0}))}}function Yn(t){return!!t&&typeof t=="object"&&typeof t.then=="function"}var Oo,ci=Symbol.for("astro.renderTemplateResult"),St=class{constructor(e,a){this[Oo]=!0,this.htmlParts=e,this.error=void 0,this.expressions=a.map(n=>Yn(n)?Promise.resolve(n).catch(i=>{if(!this.error)throw this.error=i,i}):n)}get[(Oo=ci,Symbol.toStringTag)](){return"AstroComponent"}async*[Symbol.asyncIterator](){let{htmlParts:e,expressions:a}=this;for(let n=0;n<e.length;n++){let i=e[n],o=a[n];yield v(i),yield*oe(o)}}};function ui(t){return typeof t=="object"&&!!t[ci]}async function*Xe(t){for await(let e of t)if(e||e===0)for await(let a of oe(e))switch(a.type){case"directive":{yield a;break}default:{yield v(a);break}}}function $(t,...e){return new St(t,e)}function di(t){return t==null?!1:t.isAstroComponentFactory===!0}async function Bc(t,e,a,n){let i=await e(t,a,n);if(i instanceof Response)throw i;let o=new Ie,s=Ye(i)?i.content:i;for await(let l of Xe(s))o.append(l,t);return o.toString()}function jc(t,e){let a=e.propagation||"none";return e.moduleId&&t.propagation.has(e.moduleId)&&a==="none"&&(a=t.propagation.get(e.moduleId)),a==="in-tree"||a==="self"}var Nc=t=>t,g=Nc({UnknownCompilerError:{title:"Unknown compiler error.",code:1e3},StaticRedirectNotAvailable:{title:"`Astro.redirect` is not available in static mode.",code:3001,message:"Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},ClientAddressNotAvailable:{title:"`Astro.clientAddress` is not available in current adapter.",code:3002,message:t=>`\`Astro.clientAddress\` is not available in the \`${t}\` adapter. File an issue with the adapter to add support.`},StaticClientAddressNotAvailable:{title:"`Astro.clientAddress` is not available in static mode.",code:3003,message:"`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},NoMatchingStaticPathFound:{title:"No static path found for requested path.",code:3004,message:t=>`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${t}\`.`,hint:t=>`Possible dynamic routes being matched: ${t.join(", ")}.`},OnlyResponseCanBeReturned:{title:"Invalid type returned by Astro page.",code:3005,message:(t,e)=>`Route \`${t||""}\` returned a \`${e}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,hint:"See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."},MissingMediaQueryDirective:{title:"Missing value for `client:media` directive.",code:3006,message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},NoMatchingRenderer:{title:"No matching renderer found.",code:3007,message:(t,e,a,n)=>`Unable to render \`${t}\`.

${n>0?`There ${a?"are.":"is."} ${n} renderer${a?"s.":""} configured in your \`astro.config.mjs\` file,
but ${a?"none were.":"it was not."} able to server-side render \`${t}\`.`:`No valid renderer was found ${e?`for the \`.${e}\` file extension.`:"for this file extension."}`}`,hint:t=>`Did you mean to enable the ${t} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},NoClientEntrypoint:{title:"No client entrypoint specified in renderer.",code:3008,message:(t,e,a)=>`\`${t}\` component has a \`client:${e}\` directive, but no client entrypoint was provided by \`${a}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},NoClientOnlyHint:{title:"Missing hint on client:only directive.",code:3009,message:t=>`Unable to render \`${t}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:t=>`Did you mean to pass \`client:only="${t}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},InvalidGetStaticPathParam:{title:"Invalid value returned by a `getStaticPaths` path.",code:3010,message:t=>`Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${t}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},InvalidGetStaticPathsReturn:{title:"Invalid value returned by getStaticPaths.",code:3011,message:t=>`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${t}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsRemovedRSSHelper:{title:"getStaticPaths RSS helper is not available anymore.",code:3012,message:"The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",hint:"See https://docs.astro.build/en/guides/rss/ for more information."},GetStaticPathsExpectedParams:{title:"Missing params property on `getStaticPaths` route.",code:3013,message:"Missing or empty required `params` property on `getStaticPaths` route.",hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsInvalidRouteParam:{title:"Invalid value for `getStaticPaths` route parameter.",code:3014,message:(t,e,a)=>`Invalid getStaticPaths route parameter for \`${t}\`. Expected undefined, a string or a number, received \`${a}\` (\`${e}\`)`,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsRequired:{title:"`getStaticPaths()` function required for dynamic routes.",code:3015,message:"`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",hint:`See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`},ReservedSlotName:{title:"Invalid slot name.",code:3016,message:t=>`Unable to create a slot named \`${t}\`. \`${t}\` is a reserved slot name. Please update the name of this slot.`},NoAdapterInstalled:{title:"Cannot use Server-side Rendering without an adapter.",code:3017,message:"Cannot use `output: 'server'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/ for more information."},NoMatchingImport:{title:"No import found for component.",code:3018,message:t=>`Could not render \`${t}\`. No matching import has been found for \`${t}\`.`,hint:"Please make sure the component is properly imported."},InvalidPrerenderExport:{title:"Invalid prerender export.",code:3019,message:(t,e)=>{let a="A `prerender` export has been detected, but its value cannot be statically analyzed.";return t!=="const"&&(a+=`
Expected \`const\` declaration but got \`${t}\`.`),e!=="true"&&(a+=`
Expected \`true\` value but got \`${e}\`.`),a},hint:"Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."},UnknownViteError:{title:"Unknown Vite Error.",code:4e3},FailedToLoadModuleSSR:{title:"Could not import file.",code:4001,message:t=>`Could not import \`${t}\`.`,hint:"This is often caused by a typo in the import path. Please make sure the file exists."},InvalidGlob:{title:"Invalid glob pattern.",code:4002,message:t=>`Invalid glob pattern: \`${t}\`. Glob patterns must start with './', '../' or '/'.`,hint:"See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."},UnknownCSSError:{title:"Unknown CSS Error.",code:5e3},CSSSyntaxError:{title:"CSS Syntax Error.",code:5001},UnknownMarkdownError:{title:"Unknown Markdown Error.",code:6e3},MarkdownFrontmatterParseError:{title:"Failed to parse Markdown frontmatter.",code:6001},MarkdownContentSchemaValidationError:{title:"Content collection frontmatter invalid.",code:6002,message:(t,e,a)=>[`${String(t)} \u2192 ${String(e)} frontmatter does not match collection schema.`,...a.errors.map(n=>n.message)].join(`
`),hint:"See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."},UnknownConfigError:{title:"Unknown configuration error.",code:7e3},ConfigNotFound:{title:"Specified configuration file not found.",code:7001,message:t=>`Unable to resolve \`--config "${t}"\`. Does the file exist?`},ConfigLegacyKey:{title:"Legacy configuration detected.",code:7002,message:t=>`Legacy configuration detected: \`${t}\`.`,hint:`Please update your configuration to the new format.
See https://astro.build/config for more information.`},UnknownError:{title:"Unknown Error.",code:99999}});function Pc(t){return t.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function _c(t){let e=Object.entries(g).find(a=>a[1].code===t);if(e)return{name:e[0],data:e[1]}}function Rc(t,e){if(!e||e.line===void 0||e.column===void 0)return"";let a=Pc(t).split(`
`).map(s=>s.replace(/\t/g,"  ")),n=[];for(let s=-2;s<=2;s++)a[e.line+s]&&n.push(e.line+s);let i=0;for(let s of n){let l=`> ${s}`;l.length>i&&(i=l.length)}let o="";for(let s of n){let l=s===e.line-1;o+=l?"> ":"  ",o+=`${s+1} | ${a[s]}
`,l&&(o+=`${Array.from({length:i}).join(" ")}  | ${Array.from({length:e.column}).join(" ")}^
`)}return o}var C=class extends Error{constructor(e,...a){var n;super(...a),this.type="AstroError";let{code:i,name:o,title:s,message:l,stack:r,location:c,hint:u,frame:d}=e;this.errorCode=i,o&&o!=="Error"?this.name=o:this.name=((n=_c(this.errorCode))==null?void 0:n.name)??"UnknownError",this.title=s,l&&(this.message=l),this.stack=r||this.stack,this.loc=c,this.hint=u,this.frame=d}setErrorCode(e){this.errorCode=e}setLocation(e){this.loc=e}setName(e){this.name=e}setMessage(e){this.message=e}setHint(e){this.hint=e}setFrame(e,a){this.frame=Rc(e,a)}static is(e){return e.type==="AstroError"}},M={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};function yt(t,e={},a=new WeakSet){if(a.has(t))throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);a.add(t);let n=t.map(i=>hi(i,e,a));return a.delete(t),n}function pi(t,e={},a=new WeakSet){if(a.has(t))throw new Error(`Cyclic reference detected while serializing props for <${e.displayName} client:${e.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);a.add(t);let n=Object.fromEntries(Object.entries(t).map(([i,o])=>[i,hi(o,e,a)]));return a.delete(t),n}function hi(t,e={},a=new WeakSet){switch(Object.prototype.toString.call(t)){case"[object Date]":return[M.Date,t.toISOString()];case"[object RegExp]":return[M.RegExp,t.source];case"[object Map]":return[M.Map,JSON.stringify(yt(Array.from(t),e,a))];case"[object Set]":return[M.Set,JSON.stringify(yt(Array.from(t),e,a))];case"[object BigInt]":return[M.BigInt,t.toString()];case"[object URL]":return[M.URL,t.toString()];case"[object Array]":return[M.JSON,JSON.stringify(yt(t,e,a))];case"[object Uint8Array]":return[M.Uint8Array,JSON.stringify(Array.from(t))];case"[object Uint16Array]":return[M.Uint16Array,JSON.stringify(Array.from(t))];case"[object Uint32Array]":return[M.Uint32Array,JSON.stringify(Array.from(t))];default:return t!==null&&typeof t=="object"?[M.Value,pi(t,e,a)]:[M.Value,t]}}function mi(t,e){return JSON.stringify(pi(t,e))}var fi=["load","idle","media","visible","only"],$c=new Set(fi),gi=new Set(fi.map(t=>`client:${t}`));function Mc(t,e){let a={isPage:!1,hydration:null,props:{}};for(let[n,i]of Object.entries(e))if(n.startsWith("server:")&&n==="server:root"&&(a.isPage=!0),n.startsWith("client:"))switch(a.hydration||(a.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),n){case"client:component-path":{a.hydration.componentUrl=i;break}case"client:component-export":{a.hydration.componentExport.value=i;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(a.hydration.directive=n.split(":")[1],a.hydration.value=i,!$c.has(a.hydration.directive))throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${Array.from(gi).join(", ")}`);if(a.hydration.directive==="media"&&typeof a.hydration.value!="string")throw new C(g.MissingMediaQueryDirective);break}}else n==="class:list"?i&&(a.props[n.slice(0,-5)]=li(i)):a.props[n]=i;for(let n of Object.getOwnPropertySymbols(e))a.props[n]=e[n];return a}async function Hc(t,e){let{renderer:a,result:n,astroId:i,props:o,attrs:s}=t,{hydrate:l,componentUrl:r,componentExport:c}=e;if(!c.value)throw new Error(`Unable to resolve a valid export for "${e.displayName}"! Please open an issue at https://astro.build/issues!`);let u={children:"",props:{uid:i}};if(s)for(let[h,m]of Object.entries(s))u.props[h]=ke(m);u.props["component-url"]=await n.resolve(decodeURI(r)),a.clientEntrypoint&&(u.props["component-export"]=c.value,u.props["renderer-url"]=await n.resolve(decodeURI(a.clientEntrypoint)),u.props.props=ke(mi(o,e))),u.props.ssr="",u.props.client=l;let d=await n.resolve("astro:scripts/before-hydration.js");return d.length&&(u.props["before-hydration-url"]=d),u.props.opts=ke(JSON.stringify({name:e.displayName,value:e.hydrateArgs||""})),u}var yi,wi=Symbol.for("astro.componentInstance"),At=class{constructor(e,a,n,i){this[yi]=!0,this.result=e,this.props=a,this.factory=i,this.slotValues={};for(let o in n)this.slotValues[o]=n[o]()}async init(){return this.returnValue=this.factory(this.result,this.props,this.slotValues),this.returnValue}async*render(){this.returnValue===void 0&&await this.init();let e=this.returnValue;Yn(e)&&(e=await e),Ye(e)?yield*e.content:yield*oe(e)}};yi=wi;function Oc(t,e){if(t!=null)for(let a of Object.keys(t))gi.has(a)&&console.warn(`You are attempting to render <${e} ${a} />, but ${e} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function Lc(t,e,a,n,i={}){Oc(n,e);let o=new At(t,n,i,a);return jc(t,a)&&!t.propagators.has(a)&&t.propagators.set(a,o),o}function Xn(t){return typeof t=="object"&&!!t[wi]}async function*oe(t){if(t=await t,t instanceof Ue)t.instructions&&(yield*t.instructions),yield t;else if(Kn(t))yield t;else if(Array.isArray(t))for(let e of t)yield v(await oe(e));else typeof t=="function"?yield*oe(t()):typeof t=="string"?yield v(ke(t)):!t&&t!==0||(ui(t)?yield*Xe(t):Xn(t)?yield*t.render():ArrayBuffer.isView(t)?yield t:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t)?yield*t:yield t)}var bi=Symbol.for("astro:slot-string"),Ue=class extends ae{constructor(e,a){super(e),this.instructions=a,this[bi]=!0}};function qc(t){return!!t[bi]}async function G(t,e,a){if(e){let n=oe(e),i="",o=null;for await(let s of n)s.type==="directive"?(o===null&&(o=[]),o.push(s)):i+=s;return v(new Ue(i,o))}return a}async function Di(t,e={}){let a=null,n={};return e&&await Promise.all(Object.entries(e).map(([i,o])=>G(t,o).then(s=>{s.instructions&&(a===null&&(a=[]),a.push(...s.instructions)),n[i]=s}))),{slotInstructions:a,children:n}}var F=Symbol.for("astro:fragment"),We=Symbol.for("astro:renderer"),Qn=new TextEncoder,zc=new TextDecoder;function Ae(t,e){switch(e.type){case"directive":{let{hydration:a}=e,n=a&&Ec(t),i=a&&Sc(t,a.directive),o=n?"both":i?"directive":null;if(o){let s=Ac(o,a.directive);return v(s)}else return""}default:{if(qc(e)){let a="",n=e;if(n.instructions)for(let i of n.instructions)a+=Ae(t,i);return a+=e.toString(),a}return e.toString()}}}var Ie=class{constructor(){this.parts=""}append(e,a){ArrayBuffer.isView(e)?this.parts+=zc.decode(e):this.parts+=Ae(a,e)}toString(){return this.parts}toArrayBuffer(){return Qn.encode(this.parts)}};function Uc(t,e){return e instanceof Uint8Array?e:Qn.encode(Ae(t,e))}var Lo="astro-client-only",Q=class{constructor(e){this.vnode=e,this.count=0}increment(){this.count++}haveNoTried(){return this.count===0}isCompleted(){return this.count>2}};Q.symbol=Symbol("astro:jsx:skip");var Tt,Zn=0;async function Z(t,e){switch(!0){case e instanceof ae:return e.toString().trim()===""?"":e;case typeof e=="string":return v(ke(e));case typeof e=="function":return e;case(!e&&e!==0):return"";case Array.isArray(e):return v((await Promise.all(e.map(n=>Z(t,n)))).join(""))}let a;return e.props?e.props[Q.symbol]?a=e.props[Q.symbol]:a=new Q(e):a=new Q(e),Bt(t,e,a)}async function Bt(t,e,a){if(xe(e)){switch(!0){case!e.type:throw new Error(`Unable to render ${t._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);case e.type===Symbol.for("astro:fragment"):return Z(t,e.props.children);case e.type.isAstroComponentFactory:{let n={},i={};for(let[o,s]of Object.entries(e.props??{}))o==="children"||s&&typeof s=="object"&&s.$$slot?i[o==="children"?"default":o]=()=>Z(t,s):n[o]=s;return v(await Bc(t,e.type,n,i))}case(!e.type&&e.type!==0):return"";case(typeof e.type=="string"&&e.type!==Lo):return v(await Wc(t,e.type,e.props??{}))}if(e.type){let n=function(u){if(Array.isArray(u))return u.map(d=>n(d));if(!xe(u)){s.default.push(u);return}if("slot"in u.props){s[u.props.slot]=[...s[u.props.slot]??[],u],delete u.props.slot;return}s.default.push(u)};if(typeof e.type=="function"&&e.type["astro:renderer"]&&a.increment(),typeof e.type=="function"&&e.props["server:root"]){let u=await e.type(e.props??{});return await Z(t,u)}if(typeof e.type=="function")if(a.haveNoTried()||a.isCompleted()){Gc();try{let u=await e.type(e.props??{}),d;if(u&&u[Ke])return d=await Bt(t,u,a),d;if(!u)return d=await Bt(t,u,a),d}catch(u){if(a.isCompleted())throw u;a.increment()}finally{Jc()}}else a.increment();let{children:i=null,...o}=e.props??{},s={default:[]};n(i);for(let[u,d]of Object.entries(o))d.$$slot&&(s[u]=d,delete o[u]);let l=[],r={};for(let[u,d]of Object.entries(s))l.push(Z(t,d).then(h=>{h.toString().trim().length!==0&&(r[u]=()=>h)}));await Promise.all(l),o[Q.symbol]=a;let c;if(e.type===Lo&&e.props["client:only"]?c=await Uo(t,e.props["client:display-name"]??"",null,o,r):c=await Uo(t,typeof e.type=="function"?e.type.name:e.type,e.type,o,r),typeof c!="string"&&Symbol.asyncIterator in c){let u=new Ie;for await(let d of c)u.append(d,t);return v(u.toString())}else return v(c)}}return v(`${e}`)}async function Wc(t,e,{children:a,...n}){return v(`<${e}${Ci(n)}${v((a==null||a=="")&&ea.test(e)?"/>":`>${a==null?"":await Z(t,a)}</${e}>`)}`)}function Gc(){if(Zn++,!Tt){Tt=console.error;try{console.error=Vc}catch{}}}function Jc(){Zn--}function Vc(t,...e){Zn>0&&typeof t=="string"&&t.includes("Warning: Invalid hook call.")&&t.includes("https://reactjs.org/link/invalid-hook-call")||Tt(t,...e)}var jt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",wt=jt.length;function Kc(t){let e=0;if(t.length===0)return e;for(let a=0;a<t.length;a++){let n=t.charCodeAt(a);e=(e<<5)-e+n,e=e&e}return e}function Yc(t){let e,a="",n=Kc(t),i=n<0?"Z":"";for(n=Math.abs(n);n>=wt;)e=n%wt,n=Math.floor(n/wt),a=jt[e]+a;return n>0&&(a=jt[n]+a),i+a}var ea=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Xc=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,Qc=/^(contenteditable|draggable|spellcheck|value)$/i,Zc=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,eu=new Set(["set:html","set:text"]),tu=t=>t.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(e,a)=>/[^\w]|\s/.test(e)?"":a===0?e:e.toUpperCase()),be=(t,e=!0)=>e?String(t).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):t,nu=t=>t.toLowerCase()===t?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),au=t=>Object.entries(t).map(([e,a])=>`${nu(e)}:${a}`).join(";");function ou(t){let e="";for(let[a,n]of Object.entries(t))e+=`const ${tu(a)} = ${JSON.stringify(n)};
`;return v(e)}function qo(t){return t.length===1?t[0]:`${t.slice(0,-1).join(", ")} or ${t[t.length-1]}`}function I(t,e,a=!0){if(t==null)return"";if(t===!1)return Qc.test(e)||Zc.test(e)?v(` ${e}="false"`):"";if(eu.has(e))return console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`),"";if(e==="class:list"){let n=be(li(t),a);return n===""?"":v(` ${e.slice(0,-5)}="${n}"`)}return e==="style"&&!(t instanceof ae)&&typeof t=="object"?v(` ${e}="${be(au(t),a)}"`):e==="className"?v(` class="${be(t,a)}"`):t===!0&&(e.startsWith("data-")||Xc.test(e))?v(` ${e}`):v(` ${e}="${be(t,a)}"`)}function Nt(t,e=!0){let a="";for(let[n,i]of Object.entries(t))a+=I(i,n,e);return v(a)}function Me(t,{props:e,children:a=""},n=!0){let{lang:i,"data-astro-id":o,"define:vars":s,...l}=e;return s&&(t==="style"&&(delete l["is:global"],delete l["is:scoped"]),t==="script"&&(delete l.hoist,a=ou(s)+`
`+a)),(a==null||a=="")&&ea.test(t)?`<${t}${Nt(l,n)} />`:`<${t}${Nt(l,n)}>${a}</${t}>`}function iu(t){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(t)}async function su(t,e,a,n){let i=ru(e),o="";for(let s in a)o+=` ${s}="${be(await a[s])}"`;return v(`<${i}${o}>${await G(t,n?.default)}</${i}>`)}function ru(t){let e=customElements.getName(t);return e||t.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}var zo=new Map([["solid","solid-js"]]);function lu(t){switch(t?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid","@astrojs/vue","@astrojs/svelte"]}}function cu(t){return t===F}function uu(t){return t&&typeof t=="object"&&t["astro:html"]}async function du(t,e,a,n,i={}){var o,s;if(!a&&!n["client:only"])throw new Error(`Unable to render ${e} because it is ${a}!
Did you forget to import the component or is it possible there is a typo?`);let{renderers:l}=t._metadata,r={displayName:e},{hydration:c,isPage:u,props:d}=Mc(e,n),h="",m;c&&(r.hydrate=c.directive,r.hydrateArgs=c.value,r.componentExport=c.componentExport,r.componentUrl=c.componentUrl);let k=lu(r.componentUrl),y=l.filter(D=>D.name!=="astro:jsx"),{children:w,slotInstructions:b}=await Di(t,i),f;if(r.hydrate!=="only"){let D=!1;try{D=a&&a[We]}catch{}if(D){let E=a[We];f=l.find(({name:j})=>j===E)}if(!f){let E;for(let j of l)try{if(await j.ssr.check.call({result:t},a,d,w)){f=j;break}}catch(et){E??(E=et)}if(!f&&E)throw E}if(!f&&typeof HTMLElement=="function"&&iu(a))return su(t,a,n,i)}else{if(r.hydrateArgs){let D=r.hydrateArgs,E=zo.has(D)?zo.get(D):D;f=l.find(({name:j})=>j===`@astrojs/${E}`||j===E)}if(!f&&y.length===1&&(f=y[0]),!f){let D=(o=r.componentUrl)==null?void 0:o.split(".").pop();f=l.filter(({name:E})=>E===`@astrojs/${D}`||E===D)[0]}}if(f)r.hydrate==="only"?h=await G(t,i?.fallback):{html:h,attrs:m}=await f.ssr.renderToStaticMarkup.call({result:t},a,d,w,r);else{if(r.hydrate==="only")throw new C({...g.NoClientOnlyHint,message:g.NoClientOnlyHint.message(r.displayName),hint:g.NoClientOnlyHint.hint(k.map(D=>D.replace("@astrojs/","")).join("|"))});if(typeof a!="string"){let D=y.filter(j=>k.includes(j.name)),E=y.length>1;if(D.length===0)throw new C({...g.NoMatchingRenderer,message:g.NoMatchingRenderer.message(r.displayName,(s=r?.componentUrl)==null?void 0:s.split(".").pop(),E,y.length),hint:g.NoMatchingRenderer.hint(qo(k.map(j=>"`"+j+"`")))});if(D.length===1)f=D[0],{html:h,attrs:m}=await f.ssr.renderToStaticMarkup.call({result:t},a,d,w,r);else throw new Error(`Unable to render ${r.displayName}!

This component likely uses ${qo(k)},
but Astro encountered an error during server-side rendering.

Please ensure that ${r.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(f&&!f.clientEntrypoint&&f.name!=="@astrojs/lit"&&r.hydrate)throw new C({...g.NoClientEntrypoint,message:g.NoClientEntrypoint.message(e,r.hydrate,f.name)});if(!h&&typeof a=="string"){let D=pu(a),E=Object.values(w).join(""),j=Xe(await $`<${D}${Nt(d)}${v(E===""&&ea.test(D)?"/>":`>${E}</${D}>`)}`);h="";for await(let et of j)h+=et}if(!c)return async function*(){b&&(yield*b),u||f?.name==="astro:jsx"?yield h:yield v(h.replace(/\<\/?astro-slot\>/g,""))}();let se=Yc(`<!--${r.componentExport.value}:${r.componentUrl}-->
${h}
${mi(d,r)}`),H=await Hc({renderer:f,result:t,astroId:se,props:d,attrs:m},r),re=[];if(h){if(Object.keys(w).length>0)for(let D of Object.keys(w))h.includes(D==="default"?"<astro-slot>":`<astro-slot name="${D}">`)||re.push(D)}else re=Object.keys(w);let z=re.length>0?re.map(D=>`<template data-astro-template${D!=="default"?`="${D}"`:""}>${w[D]}</template>`).join(""):"";H.children=`${h??""}${z}`,H.children&&(H.props["await-children"]="");async function*ee(){b&&(yield*b),yield{type:"directive",hydration:c,result:t},yield v(Me("astro-island",H,!1))}return ee()}function pu(t){let e=/[&<>'"\s]+/g;return e.test(t)?t.trim().split(e)[0].trim():t}async function hu(t,e={}){let a=await G(t,e?.default);return a==null?a:v(a)}async function mu(t,e,a,n={}){let{slotInstructions:i,children:o}=await Di(t,n),s=e.render({slots:o}),l=i?i.map(r=>Ae(t,r)).join(""):"";return v(l+s)}function N(t,e,a,n,i={}){return Yn(a)?Promise.resolve(a).then(o=>N(t,e,o,n,i)):cu(a)?hu(t,i):uu(a)?mu(t,a,n,i):di(a)?Lc(t,e,a,n,i):du(t,e,a,n,i)}function Uo(t,e,a,n,i={}){let o=N(t,e,a,n,i);return Xn(o)?o.render():o}var bt=(t,e,a)=>{let n=JSON.stringify(t.props),i=t.children;return e===a.findIndex(o=>JSON.stringify(o.props)===n&&o.children==i)};async function*fu(t,e){yield e;for(let a of t.extraHead)yield*oe(a)}function gu(t){let e=Array.from(t.styles).filter(bt).map(o=>Me("style",o));t.styles.clear();let a=Array.from(t.scripts).filter(bt).map((o,s)=>Me("script",o,!1)),n=Array.from(t.links).filter(bt).map(o=>Me("link",o,!1)),i=v(n.join(`
`)+e.join(`
`)+a.join(`
`));return t.extraHead.length>0?fu(t,i):i}function vi(t){return t._metadata.hasRenderedHead=!0,gu.bind(null,t)}var Qe=vi;async function*Te(t){t._metadata.hasRenderedHead||(yield vi(t)())}var ki=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},ye=(t,e,a)=>(ki(t,e,"read from private field"),a?a.call(t):e.get(t)),Wo=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},Go=(t,e,a,n)=>(ki(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),Pt=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]",Ge;function yu(){var t,e,a;return Ge=(a=class extends Response{constructor(n,i){let o=n instanceof ReadableStream;super(o?null:n,i),Wo(this,t,void 0),Wo(this,e,void 0),Go(this,t,o),Go(this,e,n)}get body(){return ye(this,e)}async text(){if(ye(this,t)&&Pt){let n=new TextDecoder,i=ye(this,e),o="";for await(let s of i)o+=n.decode(s);return o}return super.text()}async arrayBuffer(){if(ye(this,t)&&Pt){let n=ye(this,e),i=[],o=0;for await(let r of n)i.push(r),o+=r.length;let s=new Uint8Array(o),l=0;for(let r of i)s.set(r,l),l+=r.length;return s}return super.arrayBuffer()}},t=new WeakMap,e=new WeakMap,a),Ge}var wu=Pt?(t,e)=>typeof t=="string"||ArrayBuffer.isView(t)?new Response(t,e):typeof Ge>"u"?new(yu())(t,e):new Ge(t,e):(t,e)=>new Response(t,e),Jo=Symbol.for("astro.needsHeadRendering");function bu(t){return Jo in t&&!!t[Jo]}async function Vo(t,e,a){let n=new Ie,i=0;for await(let o of e)Kn(o)&&i===0&&(i++,/<!doctype html/i.test(String(o))||(n.append(`<!DOCTYPE html>
`,t),a&&await a(n))),n.append(o,t);return n.toArrayBuffer()}async function Du(t){let e=t.propagators.values();for(;;){let{value:a,done:n}=e.next();if(n)break;let i=await a.init();Ye(i)&&t.extraHead.push(i.head)}}async function vu(t,e,a,n,i,o){if(!di(e)){let r={...a??{},"server:root":!0},c;try{let d=await N(t,e.name,e,r,null);Xn(d)?c=d.render():c=d}catch(d){throw C.is(d)&&!d.loc&&d.setLocation({file:o?.component}),d}let u=await Vo(t,c,async d=>{if(bu(e))for await(let h of Te(t))d.append(h,t)});return new Response(u,{headers:new Headers([["Content-Type","text/html; charset=utf-8"],["Content-Length",u.byteLength.toString()]])})}let s=await e(t,a,n),l=Ye(s);if(ui(s)||l){await Du(t);let r=l?s.content:s,c=Xe(r),u=t.response,d=new Headers(u.headers),h;return i?h=new ReadableStream({start(k){async function y(){let w=0;try{for await(let b of c){Kn(b)&&w===0&&(/<!doctype html/i.test(String(b))||k.enqueue(Qn.encode(`<!DOCTYPE html>
`)));let f=Uc(t,b);k.enqueue(f),w++}k.close()}catch(b){C.is(b)&&!b.loc&&b.setLocation({file:o?.component}),k.error(b)}}y()}}):(h=await Vo(t,c),d.set("Content-Length",h.byteLength.toString())),wu(h,{...u,headers:d})}if(!(s instanceof Response))throw new C({...g.OnlyResponseCanBeReturned,message:g.OnlyResponseCanBeReturned.message(o?.route,typeof s),location:{file:o?.component}});return s}function xi(t,e){!t||typeof t=="function"&&Object.defineProperty(t,We,{value:e,enumerable:!1,writable:!1})}function Ci(t,e,{class:a}={}){let n="";a&&(typeof t.class<"u"?t.class+=` ${a}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],a]:t.class=a);for(let[i,o]of Object.entries(t))n+=I(o,i,!0);return v(n)}var ku=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Je={debug:20,info:30,warn:40,error:50,silent:90};function Fi(t,e,a,n){let i=t.level,o=t.dest,s={type:a,level:e,message:n};Je[i]>Je[e]||o.write(s)}function ie(t,e,a){return Fi(t,"warn",e,a)}function xu(t,e,a){return Fi(t,"error",e,a)}function Cu(...t){"_astroGlobalDebug"in globalThis&&globalThis._astroGlobalDebug(...t)}typeof process<"u"&&(process.argv.includes("--verbose")||process.argv.includes("--silent"));var Fu=["string","number","undefined"];function Iu([t,e],a){if(!Fu.includes(typeof e))throw new C({...g.GetStaticPathsInvalidRouteParam,message:g.GetStaticPathsInvalidRouteParam.message(t,e,typeof e),location:{file:a}})}function Eu(t,{ssr:e,logging:a,route:n}){if(e&&t.getStaticPaths&&ie(a,"getStaticPaths",'getStaticPaths() is ignored when "output: server" is set.'),!e&&!t.getStaticPaths)throw new C({...g.GetStaticPathsRequired,location:{file:n.component}})}function Su(t,e,a){if(!Array.isArray(t))throw new C({...g.InvalidGetStaticPathsReturn,message:g.InvalidGetStaticPathsReturn.message(typeof t),location:{file:a.component}});t.forEach(n=>{if(n.params===void 0||n.params===null||n.params&&Object.keys(n.params).length===0)throw new C({...g.GetStaticPathsExpectedParams,location:{file:a.component}});if(typeof n.params!="object")throw new C({...g.InvalidGetStaticPathParam,message:g.InvalidGetStaticPathParam.message(typeof n.params),location:{file:a.component}});for(let[i,o]of Object.entries(n.params))typeof o>"u"||typeof o=="string"||typeof o=="number"||ie(e,"getStaticPaths",`invalid path param: ${i}. A string, number or undefined value was expected, but got \`${JSON.stringify(o)}\`.`),typeof o=="string"&&o===""&&ie(e,"getStaticPaths",`invalid path param: ${i}. \`undefined\` expected for an optional param, but got empty string.`)})}function Au(t){return a=>{let n={};return t.forEach((i,o)=>{i.startsWith("...")?n[i.slice(3)]=a[o+1]?decodeURIComponent(a[o+1]):void 0:n[i]=decodeURIComponent(a[o+1])}),n}}function Ii(t,e){let a=Object.entries(t).reduce((n,i)=>{Iu(i,e);let[o,s]=i;return n[o]=s?.toString(),n},{});return JSON.stringify(a,Object.keys(t).sort())}var Tu=new Set([".js",".ts"]),Bu=new RegExp(`\\.(${Array.from(Tu).map(t=>t.slice(1)).join("|")})($|\\?)`),ju=t=>Bu.test(t),Nu=new Set([".css",".pcss",".postcss",".scss",".sass",".styl",".stylus",".less"]),Pu=new RegExp(`\\.(${Array.from(Nu).map(t=>t.slice(1)).join("|")})($|\\?)`),_u=t=>Pu.test(t),Ei=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},L=(t,e,a)=>(Ei(t,e,"read from private field"),a?a.call(t):e.get(t)),Dt=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},vt=(t,e,a,n)=>(Ei(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),ne,Y,He,Ko=Symbol.for("astro.clientAddress");function Ru(t){return function(){switch(t){case"Astro.redirect":throw new C(g.StaticRedirectNotAvailable)}}}function $u(t){var e;if(!!t&&((e=t.expressions)==null?void 0:e.length)===1)return t.expressions[0]}var _t=class{constructor(e,a,n){if(Dt(this,ne,void 0),Dt(this,Y,void 0),Dt(this,He,void 0),vt(this,ne,e),vt(this,Y,a),vt(this,He,n),a)for(let i of Object.keys(a)){if(this[i]!==void 0)throw new C({...g.ReservedSlotName,message:g.ReservedSlotName.message(i)});Object.defineProperty(this,i,{get(){return!0},enumerable:!0})}}has(e){return L(this,Y)?Boolean(L(this,Y)[e]):!1}async render(e,a=[]){if(!L(this,Y)||!this.has(e))return;if(!Array.isArray(a))ie(L(this,He),"Astro.slots.render",`Expected second parameter to be an array, received a ${typeof a}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);else if(a.length>0){let o=L(this,Y)[e],s=typeof o=="function"?await o():await o,l=$u(s);if(l){let r=l(...a);return await G(L(this,ne),r).then(c=>c!=null?String(c):c)}if(typeof s=="function")return await Z(L(this,ne),s(...a)).then(r=>r!=null?String(r):r)}let n=await G(L(this,ne),L(this,Y)[e]);return Ae(L(this,ne),n)}};ne=new WeakMap;Y=new WeakMap;He=new WeakMap;var kt=null;function Mu(t){let{markdown:e,params:a,pathname:n,renderers:i,request:o,resolve:s}=t,l=new URL(o.url),r=new Headers;r.set("Content-Type","text/html");let c={status:t.status,statusText:"OK",headers:r};Object.defineProperty(c,"headers",{value:c.headers,enumerable:!0,writable:!1});let u,d={styles:t.styles??new Set,scripts:t.scripts??new Set,links:t.links??new Set,propagation:t.propagation??new Map,propagators:new Map,extraHead:[],cookies:u,createAstro(h,m,k){let y=new _t(d,k,t.logging),w={__proto__:h,get clientAddress(){if(!(Ko in o))throw t.adapterName?new C({...g.ClientAddressNotAvailable,message:g.ClientAddressNotAvailable.message(t.adapterName)}):new C(g.StaticClientAddressNotAvailable);return Reflect.get(o,Ko)},get cookies(){return u||(u=new ze(o),d.cookies=u,u)},params:a,props:m,request:o,url:l,redirect:t.ssr?(b,f)=>new Response(null,{status:f||302,headers:{Location:b}}):Ru("Astro.redirect"),resolve(b){let f=`This can be replaced with a dynamic import like so: await import("${b}")`;return _u(b)?f=`It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${b}";
---
`:ju(b)&&(f=`It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${b}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${b}";
<\/script>
`),ie(t.logging,"deprecation",`${ce("Astro.resolve()")} is deprecated. We see that you are trying to resolve ${b}.
${f}`),""},response:c,slots:y};return Object.defineProperty(w,"canonicalURL",{get:function(){return ie(t.logging,"deprecation",`${ce("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`),new URL(this.request.url.pathname,this.site)}}),Object.defineProperty(w,"__renderMarkdown",{enumerable:!1,writable:!1,value:async function(b,f){if(typeof Deno<"u")throw new Error("Markdown is not supported in Deno SSR");if(!kt){let H="@astrojs/";H+="markdown-remark",kt=(await import(H)).renderMarkdown}let{code:se}=await kt(b,{...e,...f??{}});return se}}),w},resolve:s,_metadata:{renderers:i,pathname:n,hasHydrationScript:!1,hasRenderedHead:!1,hasDirectives:new Set},response:c};return d}function Hu(t){return function(a,n={}){let{pageSize:i,params:o,props:s}=n,l=i||10,r="page",c=o||{},u=s||{},d;if(t.params.includes(`...${r}`))d=!1;else if(t.params.includes(`${r}`))d=!0;else throw new Error(`[paginate()] page number param \`${r}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`);let h=Math.max(1,Math.ceil(a.length/l));return[...Array(h).keys()].map(k=>{let y=k+1,w=l===1/0?0:(y-1)*l,b=Math.min(w+l,a.length),f={...c,[r]:d||y>1?String(y):void 0};return{params:f,props:{...u,page:{data:a.slice(w,b),start:w,end:b-1,size:l,total:a.length,currentPage:y,lastPage:h,url:{current:t.generate({...f}),next:y===h?void 0:t.generate({...f,page:String(y+1)}),prev:y===1?void 0:t.generate({...f,page:!d&&y-1===1?void 0:String(y-1)})}}}}})}}async function Ou({isValidate:t,logging:e,mod:a,route:n,ssr:i}){if(Eu(a,{ssr:i,logging:e,route:n}),i)return{staticPaths:Object.assign([],{keyed:new Map})};if(!a.getStaticPaths)throw new Error("Unexpected Error.");let o=[];o=await a.getStaticPaths({paginate:Hu(n),rss(){throw new C(g.GetStaticPathsRemovedRSSHelper)}}),Array.isArray(o)&&(o=o.flat()),t&&Su(o,e,n);let s=o;s.keyed=new Map;for(let l of s){let r=Ii(l.params,n.component);s.keyed.set(r,l)}return{staticPaths:s}}var Rt=class{constructor(e,a="production"){this.cache={},this.logging=e,this.mode=a}clearAll(){this.cache={}}set(e,a){this.mode==="production"&&this.cache[e.component]&&ie(this.logging,"routeCache",`Internal Warning: route cache overwritten. (${e.component})`),this.cache[e.component]=a}get(e){return this.cache[e.component]}};function Lu(t,e,a){let n=Ii(e,a.component),i=t.keyed.get(n);if(i)return i;Cu("findPathItemByKey",`Unexpected cache miss looking for ${n}`)}var Si=(t=>(t[t.NoMatchingStaticPath=0]="NoMatchingStaticPath",t))(Si||{});async function Ai(t){let{logging:e,mod:a,route:n,routeCache:i,pathname:o,ssr:s}=t,l={},r;if(n&&!n.pathname){if(n.params.length){let d=n.pattern.exec(o);d&&(l=Au(n.params)(d))}let c=i.get(n);c||(c=await Ou({mod:a,route:n,isValidate:!0,logging:e,ssr:s}),i.set(n,c));let u=Lu(c.staticPaths,l,n);if(!u&&!s)return 0;r=u?.props?{...u.props}:{}}else r={};return[l,r]}async function qu(t,e,a){var n,i;let o=await Ai({logging:a.logging,mod:t,route:e.route,routeCache:a.routeCache,pathname:e.pathname,ssr:a.ssr});if(o===0)throw new C({...g.NoMatchingStaticPathFound,message:g.NoMatchingStaticPathFound.message(e.pathname),hint:(n=e.route)!=null&&n.component?g.NoMatchingStaticPathFound.hint([(i=e.route)==null?void 0:i.component]):""});let[s,l]=o,r=t.default;if(!r)throw new Error(`Expected an exported Astro component but received typeof ${typeof r}`);let c=Mu({adapterName:a.adapterName,links:e.links,styles:e.styles,logging:a.logging,markdown:a.markdown,mode:a.mode,origin:e.origin,params:s,props:l,pathname:e.pathname,propagation:e.propagation,resolve:a.resolve,renderers:a.renderers,request:e.request,site:a.site,scripts:e.scripts,ssr:a.ssr,status:e.status??200});typeof t.components=="object"&&Object.assign(l,{components:t.components}),typeof t.default=="function"&&t.default.name.startsWith("MDX")&&Object.assign(l,{components:Object.assign(l?.components??{},{Fragment:F})});let u=await vu(c,r,l,null,a.streaming,e.route);return c.cookies&&Vn(u,c.cookies),u}var Yo=Symbol.for("astro.clientAddress");function zu({request:t,params:e,site:a,props:n,adapterName:i}){return{cookies:new ze(t),request:t,params:e,site:a?new URL(a):void 0,generator:`Astro v${si}`,props:n,redirect(o,s){return new Response(null,{status:s||302,headers:{Location:o}})},url:new URL(t.url),get clientAddress(){if(!(Yo in t))throw i?new C({...g.ClientAddressNotAvailable,message:g.ClientAddressNotAvailable.message(i)}):new C(g.StaticClientAddressNotAvailable);return Reflect.get(t,Yo)}}}async function Uu(t,e,a){var n,i;let o=await Ai({mod:t,route:a.route,routeCache:e.routeCache,pathname:a.pathname,logging:e.logging,ssr:e.ssr});if(o===Si.NoMatchingStaticPath)throw new C({...g.NoMatchingStaticPathFound,message:g.NoMatchingStaticPathFound.message(a.pathname),hint:(n=a.route)!=null&&n.component?g.NoMatchingStaticPathFound.hint([(i=a.route)==null?void 0:i.component]):""});let[s,l]=o,r=zu({request:a.request,params:s,props:l,site:e.site,adapterName:e.adapterName}),c=await wc(t,r,e.ssr);return c instanceof Response?(Vn(c,r.cookies),{type:"response",response:c}):{type:"simple",body:c.body,encoding:c.encoding,cookies:r.cookies}}var Xo,xt=1,Wu={write(t){let e=console.error;Je[t.level]<Je.error&&(e=console.log);function a(){let o="",s=t.type;return s&&(o+=La(ku.format(new Date)+" "),t.level==="info"?s=ce(za(`[${s}]`)):t.level==="warn"?s=ce(at(`[${s}]`)):t.level==="error"&&(s=ce(qa(`[${s}]`))),o+=`${s} `),Oa(o)}let n=t.message;n===Xo?(xt++,n=`${n} ${at(`(x${xt})`)}`):(Xo=n,xt=1);let i=a()+n;return e(i),!0}};function Gu(t){return t.endsWith("/")?t:t+"/"}function Ju(t){return t[0]==="/"?t:"/"+t}function Vu(t){return t.endsWith("/")?t.slice(0,t.length-1):t}function Ku(t){return t.replace(/^\/|\/$/g,"")}function Yu(t){return typeof t=="string"||t instanceof String}function Xu(...t){return t.filter(Yu).map(Ku).join("/")}function Ti(t){let e=t.request,a=new URL(e.url),n=t.origin??a.origin,i=t.pathname??a.pathname;return{...t,origin:n,pathname:i,url:a}}function Qu(t){return Gu(new URL(t||"/","http://localhost/").pathname)}function Bi(t,e){return ni.default.posix.join(Qu(e),t)}function Zu(t,e){return{props:{rel:"stylesheet",href:Bi(t,e)},children:""}}function ed(t,e){return new Set(t.map(a=>Zu(a,e)))}function td(t,e){return t.type==="external"?nd(t.value,e):{props:{type:"module"},children:t.value}}function nd(t,e){return{props:{type:"module",src:Bi(t,e)},children:""}}function Ct(t,e){return e.routes.find(a=>a.pattern.test(t))}function ad(t,e){for(let a of e)if(!!a.endsWith(".html")&&(t.pattern.test(a)||t.pattern.test(a.replace(/index\.html$/,""))))return a}function od(t,e){let a=t.map(o=>"/"+o.map(s=>s.spread?`:${s.content.slice(3)}(.*)?`:s.dynamic?`:${s.content}`:s.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("")).join(""),n="";return e==="always"&&t.length&&(n="/"),Po(a+n)}function Qo(t){return{route:t.route,type:t.type,pattern:new RegExp(t.pattern),params:t.params,component:t.component,generate:od(t.segments,t._meta.trailingSlash),pathname:t.pathname||void 0,segments:t.segments}}function id(t){let e=[];for(let n of t.routes){e.push({...n,routeData:Qo(n.routeData)});let i=n;i.routeData=Qo(n.routeData)}let a=new Set(t.assets);return{...t,assets:a,routes:e}}var ta=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},B=(t,e,a)=>(ta(t,e,"read from private field"),a?a.call(t):e.get(t)),q=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},pe=(t,e,a,n)=>(ta(t,e,"write to private field"),n?n.call(t,a):e.set(t,a),a),Ft=(t,e,a)=>(ta(t,e,"access private method"),a),Ee,W,he,Ve,na,Ce,De,Oe,Le,$t,Mt,ji,Ht=class{constructor(e,a=!0){q(this,Le),q(this,Mt),q(this,Ee,void 0),q(this,W,void 0),q(this,he,void 0),q(this,Ve,void 0),q(this,na,new TextEncoder),q(this,Ce,{dest:Wu,level:"info"}),q(this,De,void 0),q(this,Oe,void 0),pe(this,W,e),pe(this,he,{routes:e.routes.map(n=>n.routeData)}),pe(this,Ve,new Map(e.routes.map(n=>[n.routeData,n]))),pe(this,Ee,{adapterName:e.adapterName,logging:B(this,Ce),markdown:e.markdown,mode:"production",renderers:e.renderers,async resolve(n){if(!(n in e.entryModules))throw new Error(`Unable to resolve [${n}]`);let i=e.entryModules[n];switch(!0){case i.startsWith("data:"):case i.length===0:return i;default:return Ju(Xu(e.base,i))}},routeCache:new Rt(B(this,Ce)),site:B(this,W).site,ssr:!0,streaming:a}),pe(this,De,B(this,W).base||"/"),pe(this,Oe,Vu(B(this,De)))}removeBase(e){return e.startsWith(B(this,De))?e.slice(B(this,Oe).length+1):e}match(e,{matchNotFound:a=!1}={}){let n=new URL(e.url);if(B(this,W).assets.has(n.pathname))return;let i="/"+this.removeBase(n.pathname),o=Ct(i,B(this,he));return o?ad(o,B(this,W).assets)?void 0:o:a?Ct("/404",B(this,he)):void 0}async render(e,a){let n=200;if(!a&&(a=this.match(e),a||(n=404,a=this.match(e,{matchNotFound:!0})),!a))return new Response(null,{status:404,statusText:"Not found"});a.route==="/404"&&(n=404);let i=B(this,W).pageMap.get(a.component);if(a.type==="page"){let o=await Ft(this,Le,$t).call(this,e,a,i,n);if(o.status===500){let s=Ct("/500",B(this,he));if(s){i=B(this,W).pageMap.get(s.component);try{return await Ft(this,Le,$t).call(this,e,s,i,500)}catch{}}}return o}else{if(a.type==="endpoint")return Ft(this,Mt,ji).call(this,e,a,i,n);throw new Error(`Unsupported route type [${a.type}].`)}}setCookieHeaders(e){return hc(e)}};Ee=new WeakMap;W=new WeakMap;he=new WeakMap;Ve=new WeakMap;na=new WeakMap;Ce=new WeakMap;De=new WeakMap;Oe=new WeakMap;Le=new WeakSet;$t=async function(t,e,a,n=200){let i=new URL(t.url),o="/"+this.removeBase(i.pathname),s=B(this,Ve).get(e),l=ed(s.links),r=new Set;for(let c of s.scripts)"stage"in c?c.stage==="head-inline"&&r.add({props:{},children:c.children}):r.add(td(c));try{let c=Ti({request:t,origin:i.origin,pathname:o,scripts:r,links:l,route:e,status:n});return await qu(a,c,B(this,Ee))}catch(c){return xu(B(this,Ce),"ssr",c.stack||c.message||String(c)),new Response(null,{status:500,statusText:"Internal server error"})}};Mt=new WeakSet;ji=async function(t,e,a,n=200){let i=new URL(t.url),o="/"+this.removeBase(i.pathname),s=a,l=Ti({request:t,origin:i.origin,pathname:o,route:e,status:n}),r=await Uu(s,B(this,Ee),l);if(r.type==="response"){if(r.response.headers.get("X-Astro-Response")==="Not-Found"){let c=new Request(new URL("/404",t.url)),u=this.match(c);if(u)return this.render(c,u)}return r.response}else{let c=r.body,u=new Headers,d=ti.default.getType(i.pathname);d?u.set("Content-Type",`${d};charset=utf-8`):u.set("Content-Type","text/plain;charset=utf-8");let h=B(this,na).encode(c);u.set("Content-Length",h.byteLength.toString());let m=new Response(h,{status:200,headers:u});return Vn(m,r.cookies),m}};function sd(){return new Proxy({},{get:(t,e)=>{console.warn(`Unable to access \`import.meta\0.env.${e.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`)}})}process.env=sd();function Ni(t){let e=new Ht(t,!1);return{onRequest:async({request:n,next:i,...o})=>{process.env=o.env;let{pathname:s}=new URL(n.url);if(t.assets.has(s))return i(n);let l=e.match(n,{matchNotFound:!0});if(l){Reflect.set(n,Symbol.for("astro.clientAddress"),n.headers.get("cf-connecting-ip")),Reflect.set(n,Symbol.for("runtime"),{...o,name:"cloudflare",next:i});let r=await e.render(n,l);if(e.setCookieHeaders)for(let c of e.setCookieHeaders(r))r.headers.append("Set-Cookie",c);return r}return new Response(null,{status:404,statusText:"Not found"})}}}var Zo=Object.freeze(Object.defineProperty({__proto__:null,createExports:Ni},Symbol.toStringTag,{value:"Module"})),Pi=t=>t.trim().replace(/[-_]([a-z])/g,(e,a)=>a.toUpperCase());async function rd(t,e,{default:a=null,...n}={}){if(typeof t!="function")return!1;let i={};for(let[o,s]of Object.entries(n)){let l=Pi(o);i[l]=s}try{return(await t({...e,...i,children:a}))[Ke]}catch{}return!1}async function ld(t,e={},{default:a=null,...n}={}){let i={};for(let[l,r]of Object.entries(n)){let c=Pi(l);i[c]=r}let{result:o}=this;return{html:await Z(o,p(t,{...e,...i,children:a}))}}var cd={check:rd,renderToStaticMarkup:ld},ud=V("C:/Users/Sam/code/sambreed-dev/src/components/BaseHead.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),Be=J(async(t,e,a)=>{let n=t.createAstro(ud,e,a);n.self=Be;let{title:i,description:o,image:s="/placeholder-social.jpg"}=n.props;return $`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${I(n.generator,"content")}>

<!-- Primary Meta Tags -->
<title>${i}</title>
<meta name="title"${I(i,"content")}>
<meta name="description"${I(o,"content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${I(n.url,"content")}>
<meta property="og:title"${I(i,"content")}>
<meta property="og:description"${I(o,"content")}>
<meta property="og:image"${I(new URL(s,n.url),"content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${I(n.url,"content")}>
<meta property="twitter:title"${I(i,"content")}>
<meta property="twitter:description"${I(o,"content")}>
<meta property="twitter:image"${I(new URL(s,n.url),"content")}>
`},"C:/Users/Sam/code/sambreed-dev/src/components/BaseHead.astro"),Se="Sam Breed's modest personal website.",aa="Welcome to my website!",dd=V("C:/Users/Sam/code/sambreed-dev/src/components/Header.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),je=J(async(t,e,a)=>{let n=t.createAstro(dd,e,a);return n.self=je,$`${Te(t)}<header class="astro-ZO6PDKY4">
	<h2 class="astro-ZO6PDKY4">
		${Se}
	</h2>
</header>
`},"C:/Users/Sam/code/sambreed-dev/src/components/Header.astro"),pd=V("C:/Users/Sam/code/sambreed-dev/src/components/Footer.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),Ne=J(async(t,e,a)=>{let n=t.createAstro(pd,e,a);return n.self=Ne,$`${Te(t)}<footer class="astro-FSSOLYE3">
	<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" class="astro-FSSOLYE3"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" class="astro-FSSOLYE3"></a><br class="astro-FSSOLYE3">This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" class="astro-FSSOLYE3">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
</footer>
`},"C:/Users/Sam/code/sambreed-dev/src/components/Footer.astro"),hd=V("C:/Users/Sam/code/sambreed-dev/src/pages/index.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),_i=J(async(t,e,a)=>{let n=t.createAstro(hd,e,a);return n.self=_i,$`<html lang="en">
  <head>
    ${N(t,"BaseHead",Be,{title:Se,description:aa})}
  ${Qe(t)}</head>
  <body>
    ${N(t,"Header",je,{title:Se})}
    <main>
      <p>
        Hello 👋
      </p>

      <p>
        I'm <a rel="me" href="https://mastodon.social/@sambreed" title="Follow me on Mastodon!">@sambreed</a> and this is my modest personal website.
      </p>

      <p>
        I am a developer, designer, and investor who helps make websites faster, products better, and teams smarter.
      </p>

      <p>When I'm not doing that, I'm usually trail running somewhere around Mt Tam. I also collect records, enjoy riding motorcycles, and building things in my shop.</p>

      <section>
        <h2>Writing</h2>
        <ul${I({listStyleType:"circle"},"style")}>
          <li><a href="/writing/links-august-2022.html">Links, August 2022</a></li>
          <li><a href="/writing/twitter.html">So I'm thinking about getting off Twitter</a></li>
          <li><a href="/writing/links-part-one.html">Links, continued</a></li>
          <li><a href="/writing/16-open-tabs.html">I have 16 open tabs right now</a></li>
          <li><a href="/writing/books.html">Bookshelf</a></li>
          <li><a href="/writing/2017-reading-list.html">2017 reading list</a></li>
          <li><a href="/writing/2007.html">What the fuck happened in 2007</a></li>
          <li><a href="/writing/static-sites-with-next-js.html">How to make a static website with Next.js</a></li>
          <li><a href="/writing/tragic-design-is.html">Tragic design is...</a></li>
          <li>
            <a href="/writing/2016-reading-list.html">2016 reading list</a>
            &nbsp;&middot;&nbsp;
            <a href="/writing/what-I-read-in-2016.html">Why I read what I read in 2016</a>
          </li>
          <li>
            <a href="/writing/protect-your-history.html">Protect your DNS history with DNSCrypt</a>
          </li>
          <li><a href="/writing/lessons-from-the-jerk.html">Lessons from The Jerk (1978)</a></li>
          <li><a href="/writing/picking-up-the-pieces.html">Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors</a></li>
          <li><a href="/writing/making-things-for-fun.html">Making things for fun</a></li>
          <li><a href="https://medium.com/@sambreed/2015-books-504cb79ac5c0#.f8izs5mpq">2015 reading list</a></li>
        </ul>
      </section>

      <section>
        <h2>Ephemera</h2>
        <ul>
          <li>
            <a href="/cv.html">Peruse my C.V.</a>
          </li>
          <li>
            social media presences: <a href="https://mastodon.social/@sambreed">mastodon</a>, <a href="https://twitter.com/sambreed">twitter</a>, <a href="https://instagram.com/wookiehangover">instagram</a>
          </li>
          <li>
            code, etc: <a href="https://github.com/wookiehangover?tab=repositories">github</a>
          </li>
          <li>
            side projects:
            <ul>
              <li><a href="https://twitter.com/pantone_colors">every pantone color</a> twitter bot</li>
              <li>
                <a href="https://obliquestrategies.website/">obliquestrategies.website</a>
                <ul>
                  <li><a href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">chrome extension</a></li>
                  <li><a href="https://twitter.com/ObliqueBot/status/886236405118062592">twitter bot</a></li>
                </ul>
              </li>
              <li>
                <a href="https://chrome.google.com/webstore/detail/%CA%8D-wikipedia/icfadkjhpjekoifngfldhkkjakifokln">ʍ-wikipedia</a> chrome extension
              </li>
            </ul>
          </li>
        </ul>
        <p>Or if none of that is enough (word, really?) or you have some other unanswered questions, <a href="mailto:sam@destroy.email">send me an email</a> or use one of the links below.</p>
      </section>
    </main>
    ${N(t,"Footer",Ne,{})}
  </body></html>`},"C:/Users/Sam/code/sambreed-dev/src/pages/index.astro"),md="C:/Users/Sam/code/sambreed-dev/src/pages/index.astro",fd="",gd=Object.freeze(Object.defineProperty({__proto__:null,default:_i,file:md,url:fd},Symbol.toStringTag,{value:"Module"})),yd=V("C:/Users/Sam/code/sambreed-dev/src/layouts/Content.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),Ri=J(async(t,e,a)=>{let n=t.createAstro(yd,e,a);return n.self=Ri,$`<html lang="en" class="astro-NITAJUSV">
	<head>
		${N(t,"BaseHead",Be,{title:"Samuel Breed Resume",description:"",class:"astro-NITAJUSV"})}
		
	${Qe(t)}</head>

	<body class="astro-NITAJUSV">
		${N(t,"Header",je,{class:"astro-NITAJUSV"})}
		<main class="astro-NITAJUSV">
			<article class="astro-NITAJUSV">
				${G(t,a.default)}
			</article>
		</main>
		${N(t,"Footer",Ne,{class:"astro-NITAJUSV"})}
	</body></html>`},"C:/Users/Sam/code/sambreed-dev/src/layouts/Content.astro"),$i=`<h1 id="samuel-breed">Samuel Breed</h1>
<p><em>Web Developer and Technical Leader</em></p>
<p>Contact: <a href="mailto:samuel.breed@gmail.com">samuel.breed@gmail.com</a></p>
<h2 id="work-experience">Work Experience:</h2>
<ul>
<li>
<h3 id="sutter-hill-ventures">Sutter Hill Ventures</h3>
<p><a href="https://shv.com">https://shv.com</a></p>
<ul>
<li><strong>Partner</strong>, 2021 - present</li>
<li><strong>Engineer In Residence</strong>, 2020 - 2021</li>
</ul>
</li>
<li>
<h3 id="credit-karma">Credit Karma</h3>
<p><a href="https://www.creditkarma.com/">https://www.creditkarma.com/</a></p>
<p>In 2015 I joined Credit Karma as the technical lead for the front-end web team. Under my direction, the front-end teams at Credit Karma have created dozens of web and native applications used by more than 110 million people. During my time there, front-end development grew from a 4 person team to a group of more than 100 client developers throughout the company.</p>
<ul>
<li><strong>Senior Staff Software Engineer</strong>, 2018 - 2020</li>
<li><strong>Staff Software Engineer</strong>, 2015 - 2018
  <br>
</li>
</ul>
  <br>
  <details>
  <summary>Notable projects</summary>

































<table><thead><tr><th>Year</th><th>Accomplishments</th></tr></thead><tbody><tr><td>2020</td><td><ul><li>Enhanced Native webview platform scaled to all business verticals, comprising the majority of the native app experience</li><li>Web Platform hosts 50+ different applications</li></ul></td></tr><tr><td>2019</td><td><ul><li>Launch platform for enhanced webviews for iOS and Android called Embedded Web Apps</li><li>Front End Render Service scaled to host majority of Credit Karma web app</li></ul></td></tr><tr><td>2018</td><td><ul><li>Promoted to Senior Staff Software Engineer</li><li>Launch single page web app platform called Front End Render Service</li><li>Create dedicated deployment UI for managing single page apps</li></ul></td></tr><tr><td>2017</td><td><ul><li>Create and manage the Front End Infrastructure team</li><li>Launch server side rendering platform to replace legacy PHP view layer</li><li>Credit Cards team tech lead</li></ul></td></tr><tr><td>2016</td><td><ul><li>Re-brand and site-wide redesign launch</li><li>Create on-demand CDN deploy pipeline</li><li>Lead developer for Credit Karma Canada launch</li></ul></td></tr><tr><td>2015</td><td><ul><li>Launch Credit Karma\u2019s first server rendered React app</li><li>Establish private npm and a modular front end architecture</li></ul></td></tr></tbody></table>
  </details>
</li>
<li>
<h3 id="quick-left">Quick Left</h3>
<p><a href="https://web.archive.org/web/20141016195333/http://quickleft.com/">https://quickleft.com/</a></p>
<p>In 2009 I co-founded the Boulder, Colo. software consultancy Quick Left. Over the next 6 years I led the business as we grew from a modest 2-person operation to a team of more than 40 spanning four offices. We specialized in building products, solving deep technical challenges and worked with companies ranging from small startups to the top of the Fortune 500.</p>
<p>After departing in 2015, I remained on the Board of Directors to see through the 2016 sale to the global consulting firm Cognizant.</p>
<ul>
<li><strong>Co-founder</strong>, 2009 - 2015</li>
<li><strong>Lead Developer</strong>, 2009 - 2014
<br><br></li>
</ul>
  <details>
  <summary>Notable clients</summary>
<ul>
<li>Disney</li>
<li>Walmart Labs</li>
<li>Toyota</li>
<li>Ingersol Rand</li>
<li>Crispen Porter + Bugowski</li>
<li>Red Robin</li>
<li>Sentry</li>
<li>Awe.sm</li>
<li>Photobucket</li>
<li>Ping Identity</li>
</ul>
  </details>
</li>
</ul>
<h3 id="education">Education</h3>
<ul>
<li>BFA Film Production (incomplete), University of Colorado, Boulder 2004 - 2007</li>
</ul>
<h3 id="see-also">See also</h3>
<ul>
<li>Frontend Masters <br> <a href="https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/">https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/</a></li>
<li>Backbone Conf 2014 <br> <a href="https://www.youtube.com/watch?v=QqSHrpro02g">https://www.youtube.com/watch?v=QqSHrpro02g</a></li>
<li>Hapi Day Oakland 2014 <br> <a href="https://www.youtube.com/watch?v=nMVXumwItcw">https://www.youtube.com/watch?v=nMVXumwItcw</a></li>
<li>Backbone Conf 2013 <br> <a href="https://www.youtube.com/watch?v=Lm05e5sJaE8">https://www.youtube.com/watch?v=Lm05e5sJaE8</a></li>
<li>obliquestrategies.website + Chrome Plugin + Twitter bot <br> <a href="https://obliquestrategies.website/">https://obliquestrategies.website/</a></li>
</ul>`,wd={injectedFrontmatter:{}},Mi={layout:"../layouts/Content.astro"},Ot="C:/Users/Sam/code/sambreed-dev/src/pages/cv.html.md",Lt="/cv.html";function Hi(){return`
# Samuel Breed

_Web Developer and Technical Leader_

Contact: samuel.breed@gmail.com

## Work Experience:

-  ### Sutter Hill Ventures

    https://shv.com

    * **Partner**, 2021 - present
    * **Engineer In Residence**, 2020 - 2021

- ### Credit Karma

    https://www.creditkarma.com/

    In 2015 I joined Credit Karma as the technical lead for the front-end web team. Under my direction, the front-end teams at Credit Karma have created dozens of web and native applications used by more than 110 million people. During my time there, front-end development grew from a 4 person team to a group of more than 100 client developers throughout the company.

    * **Senior Staff Software Engineer**, 2018 - 2020 
    * **Staff Software Engineer**, 2015 - 2018
    <br>
    <br>
    <details>
    <summary>Notable projects</summary>

    | Year | Accomplishments |
    |-|-|
    | 2020 | <ul><li>Enhanced Native webview platform scaled to all business verticals, comprising the majority of the native app experience</li><li>Web Platform hosts 50+ different applications</li></ul> |
    | 2019 | <ul><li>Launch platform for enhanced webviews for iOS and Android called Embedded Web Apps</li><li>Front End Render Service scaled to host majority of Credit Karma web app</li></ul> |
    | 2018 | <ul><li>Promoted to Senior Staff Software Engineer</li><li>Launch single page web app platform called Front End Render Service</li><li>Create dedicated deployment UI for managing single page apps</li></ul> |
    | 2017 | <ul><li>Create and manage the Front End Infrastructure team</li><li>Launch server side rendering platform to replace legacy PHP view layer</li><li>Credit Cards team tech lead</li></ul> |
    | 2016 | <ul><li>Re-brand and site-wide redesign launch</li><li>Create on-demand CDN deploy pipeline</li><li>Lead developer for Credit Karma Canada launch</li></ul> |
    | 2015 | <ul><li>Launch Credit Karma's first server rendered React app</li><li>Establish private npm and a modular front end architecture</li></ul> |
    </details>

- ### Quick Left

    [https://quickleft.com/](https://web.archive.org/web/20141016195333/http://quickleft.com/)

    In 2009 I co-founded the Boulder, Colo. software consultancy Quick Left. Over the next 6 years I led the business as we grew from a modest 2-person operation to a team of more than 40 spanning four offices. We specialized in building products, solving deep technical challenges and worked with companies ranging from small startups to the top of the Fortune 500.

    After departing in 2015, I remained on the Board of Directors to see through the 2016 sale to the global consulting firm Cognizant.

    * **Co-founder**, 2009 - 2015
    * **Lead Developer**, 2009 - 2014
    <br><br>
    <details>
    <summary>Notable clients</summary>

    - Disney
    - Walmart Labs
    - Toyota
    - Ingersol Rand
    - Crispen Porter + Bugowski
    - Red Robin
    - Sentry
    - Awe.sm
    - Photobucket
    - Ping Identity
    </details>

### Education
* BFA Film Production (incomplete), University of Colorado, Boulder 2004 - 2007

### See also

* Frontend Masters <br> https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/
* Backbone Conf 2014 <br> https://www.youtube.com/watch?v=QqSHrpro02g
* Hapi Day Oakland 2014 <br> https://www.youtube.com/watch?v=nMVXumwItcw
* Backbone Conf 2013 <br> https://www.youtube.com/watch?v=Lm05e5sJaE8
* obliquestrategies.website + Chrome Plugin + Twitter bot <br> https://obliquestrategies.website/
`}function Oi(){return $i}function oa(){return[{depth:1,slug:"samuel-breed",text:"Samuel Breed"},{depth:2,slug:"work-experience",text:"Work Experience:"},{depth:3,slug:"sutter-hill-ventures",text:"Sutter Hill Ventures"},{depth:3,slug:"credit-karma",text:"Credit Karma"},{depth:3,slug:"quick-left",text:"Quick Left"},{depth:3,slug:"education",text:"Education"},{depth:3,slug:"see-also",text:"See also"}]}function bd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),oa()}async function qt(){let{layout:t,...e}=Mi;e.file=Ot,e.url=Lt,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":$i});return p(Ri,{file:Ot,url:Lt,content:e,frontmatter:e,headings:oa(),rawContent:Hi,compiledContent:Oi,"server:root":!0,children:a})}qt[Symbol.for("astro.needsHeadRendering")]=!1;var Dd=Object.freeze(Object.defineProperty({__proto__:null,_internal:wd,frontmatter:Mi,file:Ot,url:Lt,rawContent:Hi,compiledContent:Oi,getHeadings:oa,getHeaders:bd,Content:qt,default:qt},Symbol.toStringTag,{value:"Module"})),vd=()=>No({title:Se,description:aa,site:"https://sambreed.dev/",items:Object.assign({})}),kd=Object.freeze(Object.defineProperty({__proto__:null,get:vd},Symbol.toStringTag,{value:"Module"})),xd=V("C:/Users/Sam/code/sambreed-dev/src/layouts/BlogPost.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),T=J(async(t,e,a)=>{let n=t.createAstro(xd,e,a);n.self=T;let{content:{title:i,description:o,pubDate:s,updatedDate:l,heroImage:r}}=n.props;return $`<html lang="en" class="astro-PH3VADET">
	<head>
		${N(t,"BaseHead",Be,{title:i,description:o,class:"astro-PH3VADET"})}
		
	${Qe(t)}</head>

	<body class="astro-PH3VADET">
		${N(t,"Header",je,{class:"astro-PH3VADET"})}
		<main class="astro-PH3VADET">
			<article class="astro-PH3VADET">
				${r&&$`<img${I(720,"width")}${I(360,"height")}${I(r,"src")} alt="" class="astro-PH3VADET">`}
				<h1 class="title astro-PH3VADET">${i}</h1>
				${s&&$`<time class="astro-PH3VADET">${s}</time>`}
				${l&&$`<div class="astro-PH3VADET">
							Last updated on <time class="astro-PH3VADET">${l}</time>
						</div>`}
				<hr class="astro-PH3VADET">
				${G(t,a.default)}
			</article>
		</main>
		${N(t,"Footer",Ne,{class:"astro-PH3VADET"})}
	</body></html>`},"C:/Users/Sam/code/sambreed-dev/src/layouts/BlogPost.astro"),Cd="C:/Users/Sam/code/sambreed-dev/src/layouts/BlogPost.astro",Fd=void 0,Id=Object.freeze(Object.defineProperty({__proto__:null,default:T,file:Cd,url:Fd},Symbol.toStringTag,{value:"Module"})),Li=`<h1 id="how-to-make-a-static-website-with-nextjs">How to Make a Static Website with Next.js</h1>
<p><img src="/img/next-blog-1.gif" alt="make a static next.js blog"></p>
<p>\u{1F44B}  Hey, so I recently figured out how to upgrade <em>this very website</em> to use <a href="https://github.com/zeit/next.js">Next.js 3</a> as a static blog engine. No longer is my corner of the internet a cobbled-together mess of node and of shell scripts. No, now it\u2019s a fully-fledged modern JavaScript app with <a href="https://github.com/zeit/next.js">Next.js 3</a>!</p>
<p>Now I can write and edit posts in Markdown and can even drop in custom HTML if I need to (I mean how else am I gonna incorporate <code>&#x3C;marquee></code> tags into my writing?). With <a href="https://github.com/zeit/next.js">Next.js</a>, I get all sorts of fancy features like service worker prefetch, code splitting, and SPA style route changes\u2013all for free. <em>Here\u2019s how I did it.</em></p>
<p><a href="https://zeit.co/blog/next3">If you haven\u2019t heard of Next.js it\u2019s a pretty cool, live reloading, totally-out-of-your-way tool for building webapps with React. You should use it.</a></p>
<p>As soon as the Zeit team announced plans to support serverless static exports, I was ready to go: I had already tried out Next.js for a few side projects, but didn\u2019t want to worry about running a server (even if it\u2019s free and painless) to keep my website up. I even tried scraping a compiled Next.js 2 app with <code>wget</code> to make a static site, so Next\u2019s official support for static sites had me running out of excuses.</p>
<p>Here were my requirements for my humble website:</p>
<ul>
<li>Fully static and deployable on Github pages.</li>
<li>Author posts in Markdown, with support for HTML things like <code>&#x3C;details></code> tags.</li>
<li><em>Fast.</em> Nobody\u2019s got time for slow websites.</li>
<li>Support my CSS preferences: <a href="http://tachyons.io/">Tachyons</a> and some custom CSS compiled with <a href="http://postcss.org/">postcss</a></li>
</ul>
<p>Next.js seems to have checked off all my boxes, so I dug in and started prototyping.</p>
<blockquote>
<p>\u201CPlan to throw one away; you will, anyhow\u201D.</p>
</blockquote>
<cite>
\u2014 <i>The Mythical Man-Month</i>, Fred Brooks (as popularized in <i>The Cathedral and the Bazaar</i> by Eric Raymond)
</cite>
<p><a href="https://github.com/wookiehangover/wookie-next">I built a prototype on the Next.js 3 beta</a> to kick the tires. I learned a few things along the way but didn\u2019t end up with a website that was ready to deploy.</p>
<p>Too bad I wasn\u2019t very happy with my first pass. I added a necessary-but-clunky build step to convert my old posts to Next\u2019s routing model. The plan was to compile my markdown posts and write out files to the <code>pages/</code> directory. Next.js would pick them up whenever they changed, but I didn\u2019t like having to run two build scripts.</p>
<p><em>Next\u2019s biggest selling point is having live reloading figured out already!</em> Having to run more than one script felt wrong, so I abandoned the prototype.</p>
<details class="pa4 ba b--rainbows mv4">
<summary>
  <i>A brief aside re: a nifty markdown rendering pipeline with Unified and Remark that should probably be in it's own post, but laziness.</i>
</summary>
<blockquote>
<p>Every good work of software starts by scratching a developer\u2019s personal itch.</p>
</blockquote>
<cite>
\u2014 <i>The Cathedral and the Bazaar</i>, Eric Raymond
</cite>
<h3 id="-rabbit-hole-react-from-html-markdown">\u{1F430} Rabbit Hole: React from HTML Markdown</h3>
<p>One of the itches I <em>really</em> wanted to scratch was the minor annoyance of having to use <code>__dangerouslySetInnerHtml</code> to use most off-the-shelf markdown libraries with React. I even made it a bit harder on myself by lazily abusing markdown and sprinkling bits of markup in many of my posts, since most React components that render markdown tend to fall back to <em>dangerouslySet</em> instead of parsing the markdown to generate a valid React component for the entire markdown document. This isn\u2019t a new or unsolved problem, so I did some research and ended up geeking out on text processing and abstract syntax trees. Turns out that there are already a bunch of well documented AST parser/compilers that support markdown on npm!</p>
<p>I really didn\u2019t want to make clients do any of the parsing work. Even though parsing markdown can be optimized to be fast in modern browsers, making users download additional JavaScript and spend CPU time to convert posts clientside just didn\u2019t sit well with me.</p>
<p>I decided that in order to handle all of my posts with their mix of markdown and html, I would use <a href="https://unifiedjs.github.io/">Unified</a> to make a rendering pipeline to go from markdown to HTML to a set of React components. There were already unified plugins for everything I wanted to do!</p>
<p>There was even a <a href="https://github.com/mapbox/remark-react">ready-made solution for my exact gripe about <code>__dangerouslySetInnerHtml</code></a>! Unfortunately, remark-react handles <em>most</em> cases but didn\u2019t want to parse the raw HTMl generously sprinkled throughout my posts. Either way, I had found a small ecosystem of node modules that would make short work of lots of text processing problems. Neat!</p>
<p>Here\u2019s what the code ended up looking like:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">unified</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">'unified'</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">unified</span><span style="color: #C9D1D9">()</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(</span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">'remark-parse'</span><span style="color: #C9D1D9">), {</span></span>
<span class="line"><span style="color: #C9D1D9">    gfm: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    footnotes: </span><span style="color: #79C0FF">true</span></span>
<span class="line"><span style="color: #C9D1D9">  })</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(</span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">'remark-rehype'</span><span style="color: #C9D1D9">), {</span></span>
<span class="line"><span style="color: #C9D1D9">    allowDangerousHTML: </span><span style="color: #79C0FF">true</span></span>
<span class="line"><span style="color: #C9D1D9">  })</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(</span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">'rehype-raw'</span><span style="color: #C9D1D9">))</span></span>
<span class="line"><span style="color: #C9D1D9">  .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(</span><span style="color: #D2A8FF">require</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">'rehype-react'</span><span style="color: #C9D1D9">))</span></span></code></pre>
<p>To my surprise and delight, that process pipeline resulted in a totally usable React component! But it still would require some redundant processing on the client since the React component was being generated dynamically from a string of markdown.</p>
<p>So how do you <em>cache</em> a React component? Like, a whole component, not just the serialization of it\u2019s virtual dom. React provides tools to server render components in multiple ways, but you can\u2019t easily generate <em>jsx</em> from a dynamically generated components. But there <em>is</em> a technique for dealing with a React as a compile output of an AST, evidenced by <a href="https://github.com/rhysd/rehype-react">react-rehype</a> at the end of that Unified markdown pipeline.</p>
<p>React has a dead simple API for creating components without JSX in <code>React.createElement()</code>. Since it\u2019s just plain JavaScript and doesn\u2019t require any functions or non-json data structures, it turns out that you can make a JSON structure that represents a set of React components pretty easily. I had run into a use case for this same trick at work, so I put it to use again here: I modified the last step of my Unified pipeline to return JSON instead of a React component. <a href="https://github.com/rhysd/rehype-react"><code>rehype-react</code></a> made this a cinch, since they allow you to pass a custom method for <code>createElement</code>.</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #D2A8FF">remarkPipeline</span><span style="color: #C9D1D9">().</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(rehypeReact, {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">createElement</span><span style="color: #C9D1D9">: (</span><span style="color: #FFA657">type</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">props</span><span style="color: #C9D1D9">, </span><span style="color: #FFA657">children</span><span style="color: #C9D1D9">) </span><span style="color: #FF7B72">=></span><span style="color: #C9D1D9"> ({ type, props, children })</span></span>
<span class="line"><span style="color: #C9D1D9">})</span></span></code></pre>
<p>From there, I made a <a href="https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js">simple component</a> to transform the result from <a href="https://github.com/rhysd/rehype-react"><code>rehype-react</code></a> back into a React component:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">&#x3C;</span><span style="color: #7EE787">ComponentTree</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">components</span><span style="color: #FF7B72">={</span><span style="color: #C9D1D9">components</span><span style="color: #FF7B72">}</span><span style="color: #C9D1D9"> /></span></span></code></pre>
<p>Now I have an pipeline where you can put markdown with crazy embedded HTML in one end, and well-formed <em>serializable</em> React components come out of the other end. With that, I can write out JavaScript files containing valid React components without having to reconstruct any JSX literals from the rehype AST. Either way that\u2019s a step that I wanted to be transparent when I was writing posts. Mission accomplished \u{1F60E}</p>
<p>There are a couple of benefits from going through all that trouble:</p>
<ul>
<li><a href="https://github.com/wooorm/remark/blob/master/doc/plugins.md">remark plugins</a> can do just about anything. Seriously. I was able to add code highlighting <em>while I was writing this post</em> with 1 npm install, 1 line of JavaScript, and 1 line of CSS!</li>
<li>Unified\u2019s <a href="https://github.com/vfile/vfile">vfile</a> format makes adding post metadata easy.</li>
<li>No format lock in. When the wind blows a differnt direction and React falls out of favor, outputting to a different format will be easy.</li>
</ul>
</details>
<h2 id="markdown-\uFE0F-webpack-\uFE0F-nextjs">Markdown \u27A1\uFE0F Webpack \u27A1\uFE0F Next.js</h2>
<p>I wanted to write in Markdown and have Next.js pick up the changes automatically.</p>
<p>By default, next will use any JavaScript modules that export a React component in your <code>pages/</code> directory. While writing markdown next to code is possible, it\u2019s gross. Same goes for duplicating the same boilerplate file for each post and importing the markdown source from some other directory. I wanted to skip all that an go straight from Markdown into Next\u2019s build and compile pipeline.</p>
<p>\u{1F4A1} The light bulb moment came when I realized the power of Next\u2019s support for custom Webpack configuration.</p>
<p>A  <a href="https://webpack.js.org/concepts/loaders/">webpack loader</a> can transform markdown source files into modules on the spot! And better yet, I already had a build script from my prototype that was doing most of what I needed to do in the loader. I needed to change was how my build script found out about files (reading them from disk vs. passed in by webpack) and how it output the results (again, writing to disk vs. passing the result back to webpack). The loader plugin interface was dead simple:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">module</span><span style="color: #C9D1D9">.</span><span style="color: #79C0FF">exports</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">function</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">source</span><span style="color: #C9D1D9">) {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">done</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">this</span><span style="color: #C9D1D9">.</span><span style="color: #D2A8FF">async</span><span style="color: #C9D1D9">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">renderPost</span><span style="color: #C9D1D9">(source, </span><span style="color: #79C0FF">this</span><span style="color: #C9D1D9">.resourcePath)</span></span>
<span class="line"><span style="color: #C9D1D9">    .</span><span style="color: #D2A8FF">catch</span><span style="color: #C9D1D9">(done).</span><span style="color: #D2A8FF">then</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">post</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=></span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">done</span><span style="color: #C9D1D9">(</span><span style="color: #79C0FF">null</span><span style="color: #C9D1D9">, post))</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span></code></pre>
<p>Where <code>renderPost(source, resourcePath)</code> was the middle bit of my prototyped static rendering pipeline, refactored to only need a string of the file content and the path of the file being rendered. This is one of the easiest changes to make, since it took a method formerly reliant on <em>side effects</em>, namely reading and writing to disk, and made it a pure function. Any time you can make a method that\u2019s passed an input and return a result, you should. Decomposing your assumptions about side effects will almost always save time. I learned this from Gary Bernhardt\u2019s talk <em><a href="https://www.destroyallsoftware.com/talks/boundaries">Boundaries</a></em>, and I remember it every time I see it.</p>
<p>The last step was to add it to the webpack extension point in <code>next.config.js</code>:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">module</span><span style="color: #C9D1D9">.</span><span style="color: #79C0FF">exports</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">webpack</span><span style="color: #C9D1D9">(</span><span style="color: #FFA657">config</span><span style="color: #C9D1D9">) {</span></span>
<span class="line"><span style="color: #C9D1D9">    config.module.rules.</span><span style="color: #D2A8FF">push</span><span style="color: #C9D1D9">({</span></span>
<span class="line"><span style="color: #C9D1D9">      test:</span><span style="color: #A5D6FF"> /</span><span style="color: #7EE787; font-style: italic">\\.</span><span style="color: #A5D6FF">html</span><span style="color: #7EE787; font-style: italic">\\.</span><span style="color: #A5D6FF">js</span><span style="color: #FF7B72">$</span><span style="color: #A5D6FF">/</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      include: </span><span style="color: #A5D6FF">'./pages/writing'</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      loader: </span><span style="color: #A5D6FF">'./src/post-loader'</span></span>
<span class="line"><span style="color: #C9D1D9">    })</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> config</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span></code></pre>
<h2 id="building-and-deploying">Building and Deploying</h2>
<p>Unlike in my earlier versions, Next.js 3 supports creating a complete static site from any next app with <code>next export</code>. To tell it what routes and pages to export, you need to add some configuration to <code>next.config.js</code>. Here\u2019s what mine looks like:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #79C0FF">module</span><span style="color: #C9D1D9">.</span><span style="color: #79C0FF">exports</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #D2A8FF">exportPathMap</span><span style="color: #C9D1D9">() {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">"/"</span><span style="color: #C9D1D9">: { page: </span><span style="color: #A5D6FF">"/"</span><span style="color: #C9D1D9"> },</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">"/cv.html"</span><span style="color: #C9D1D9">: { page: </span><span style="color: #A5D6FF">"/cv.html"</span><span style="color: #C9D1D9"> },</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">"/writing/2016-reading-list.html"</span><span style="color: #C9D1D9">: { page: </span><span style="color: #A5D6FF">"/writing/2016-reading-list.html"</span><span style="color: #C9D1D9"> },</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">"/writing/2017-reading-list.html"</span><span style="color: #C9D1D9">: { page: </span><span style="color: #A5D6FF">"/writing/2017-reading-list.html"</span><span style="color: #C9D1D9"> },</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #8B949E">// ...</span></span>
<span class="line"><span style="color: #C9D1D9">    }</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span></code></pre>
<p>Then I changed my build step to run <code>next build &#x26;&#x26; next export --docs</code> and I with surprisingly little drama was ready to deploy to Github pages!</p>
<p>Normally I\u2019d be worried that I\u2019d have missed some minor detail in a major change like swapping out the entire backend of a website, but in essence what I was doing here wasn\u2019t all that big of a change: my static HTML, JavaScript, and CSS in the <code>docs/</code> directory was still there, but was being built by a different tool chain. I pushed the first commit with the switch to Next.js and waited patiently while the build ran on Travis CI.</p>
<p>\u2026And that was it. I had more or less completely moved my static site into a totally modern React app with Next.js. The whole thing is <a href="https://github.com/wookiehangover/wookiehangover.com">open source</a>, so feel free to kick the tires and ask questions if you have any \u{1F60A}</p>
<p>Here are the relevant parts of the app:</p>
<ul>
<li><strong>post-loader.js</strong> \u2013 <a href="https://github.com/wookiehangover/wookiehangover.com/blob/master/src/post-loader.js">webpack loader</a></li>
<li><strong>static-sites-with-next-js.html.js</strong> \u2013 <a href="https://github.com/wookiehangover/wookiehangover.com/blob/master/pages/writing/static-sites-with-next-js.html.js">a markdown post with embedded HTML</a></li>
<li><strong>react-to-hast.js</strong> \u2013 <a href="https://github.com/wookiehangover/wookiehangover.com/blob/master/src/react-to-hast.js">markdown compiler with Unified.js</a></li>
<li><strong>component-tree.js</strong> \u2013 <a href="https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js">React component for rendering JSON AST</a></li>
</ul>
<h3 id="gotchas">Gotcha\u2019s! \u{1F61D}</h3>
<p>A few snags I ran into:</p>
<ul>
<li>Github pages still perversely retains some of it\u2019s Jekyll roots, and ignores file and directory names that start with an underscore \u{1F644}
<ul>
<li><strong>Fix:</strong> add <code>.nojekyll</code> to your <code>docs/</code> directory (or whatever is configured in the \u201CPages\u201D portion of your repo config in Github)</li>
</ul>
</li>
<li>The <code>.html.js</code> file extension on the posts was because I wanted backwards compatibilty with my static html version, which used plain old html files
<ul>
<li><em>Minor annoyance:</em> <code>next export</code> adds directories for every static file to avoid the .html extension showing up in the path, but now I have urls with trailing slashes.</li>
<li>If I ever want to change a URL (like to drop the <code>.html</code> extension because it\u2019s not 1998), I\u2019ll need to figure out how to manage the redirects.</li>
</ul>
</li>
<li>I need to remember to add new posts to <code>next.config.js</code>, which I seem pathologically incapable of. I\u2019ll probably make the webpack plugin emit a JSON file with all the post metadata, but I haven\u2019t done that yet.</li>
</ul>
<p><marquee>And here\u2019s that <code>&#x3C;marquee></code> tag to prove I wasn\u2019t joking about supporting arbitraty HTML in posts. And thanks <a href="https://twitter.com/ddtrejo">@ddtrejo</a> for feedback and edits!</marquee></p>`,Ed={injectedFrontmatter:{}},qi={title:"How to Make a Static Website with Next.js",slug:"static-sites-with-next-js",description:"I recently used Next.js 3 to make a static blog. Learn how I did it!",layout:"../../layouts/BlogPost.astro"},zt="C:/Users/Sam/code/sambreed-dev/src/pages/writing/static-sites-with-next-js.html.md",Ut="/writing/static-sites-with-next-js.html";function zi(){return`
# How to Make a Static Website with Next.js

![make a static next.js blog](/img/next-blog-1.gif)

\u{1F44B}  Hey, so I recently figured out how to upgrade _this very website_ to use [Next.js 3][next] as a static blog engine. No longer is my corner of the internet a cobbled-together mess of node and of shell scripts. No, now it's a fully-fledged modern JavaScript app with [Next.js 3][next]!

Now I can write and edit posts in Markdown and can even drop in custom HTML if I need to (I mean how else am I gonna incorporate \`<marquee>\` tags into my writing?). With [Next.js][next], I get all sorts of fancy features like service worker prefetch, code splitting, and SPA style route changes\u2013all for free. _Here's how I did it._

[If you haven't heard of Next.js it's a pretty cool, live reloading, totally-out-of-your-way tool for building webapps with React. You should use it.](https://zeit.co/blog/next3)

As soon as the Zeit team announced plans to support serverless static exports, I was ready to go: I had already tried out Next.js for a few side projects, but didn't want to worry about running a server (even if it's free and painless) to keep my website up. I even tried scraping a compiled Next.js 2 app with \`wget\` to make a static site, so Next's official support for static sites had me running out of excuses.

Here were my requirements for my humble website:

* Fully static and deployable on Github pages.
* Author posts in Markdown, with support for HTML things like \`<details>\` tags.
* _Fast._ Nobody's got time for slow websites.
* Support my CSS preferences: [Tachyons](http://tachyons.io/) and some custom CSS compiled with [postcss](http://postcss.org/)

Next.js seems to have checked off all my boxes, so I dug in and started prototyping.

> "Plan to throw one away; you will, anyhow".

<cite>
\u2014 <i>The Mythical Man-Month</i>, Fred Brooks (as popularized in <i>The Cathedral and the Bazaar</i> by Eric Raymond)
</cite>

[I built a prototype on the Next.js 3 beta](https://github.com/wookiehangover/wookie-next) to kick the tires. I learned a few things along the way but didn't end up with a website that was ready to deploy.

Too bad I wasn't very happy with my first pass. I added a necessary-but-clunky build step to convert my old posts to Next's routing model. The plan was to compile my markdown posts and write out files to the \`pages/\` directory. Next.js would pick them up whenever they changed, but I didn't like having to run two build scripts.

*Next's biggest selling point is having live reloading figured out already!* Having to run more than one script felt wrong, so I abandoned the prototype.

<details class="pa4 ba b--rainbows mv4">
<summary>
  <i>A brief aside re: a nifty markdown rendering pipeline with Unified and Remark that should probably be in it's own post, but laziness.</i>
</summary>

> Every good work of software starts by scratching a developer's personal itch.

<cite>
\u2014 <i>The Cathedral and the Bazaar</i>, Eric Raymond
</cite>

### \u{1F430} Rabbit Hole: React from HTML Markdown

One of the itches I _really_ wanted to scratch was the minor annoyance of having to use \`__dangerouslySetInnerHtml\` to use most off-the-shelf markdown libraries with React. I even made it a bit harder on myself by lazily abusing markdown and sprinkling bits of markup in many of my posts, since most React components that render markdown tend to fall back to _dangerouslySet_ instead of parsing the markdown to generate a valid React component for the entire markdown document. This isn't a new or unsolved problem, so I did some research and ended up geeking out on text processing and abstract syntax trees. Turns out that there are already a bunch of well documented AST parser/compilers that support markdown on npm!

I really didn't want to make clients do any of the parsing work. Even though parsing markdown can be optimized to be fast in modern browsers, making users download additional JavaScript and spend CPU time to convert posts clientside just didn't sit well with me.

I decided that in order to handle all of my posts with their mix of markdown and html, I would use [Unified][unified] to make a rendering pipeline to go from markdown to HTML to a set of React components. There were already unified plugins for everything I wanted to do!

There was even a [ready-made solution for my exact gripe about \`__dangerouslySetInnerHtml\`](https://github.com/mapbox/remark-react)! Unfortunately, remark-react handles _most_ cases but didn't want to parse the raw HTMl generously sprinkled throughout my posts. Either way, I had found a small ecosystem of node modules that would make short work of lots of text processing problems. Neat!

Here's what the code ended up looking like:

\`\`\`js
const unified = require('unified')

unified()
  .use(require('remark-parse'), {
    gfm: true,
    footnotes: true
  })
  .use(require('remark-rehype'), {
    allowDangerousHTML: true
  })
  .use(require('rehype-raw'))
  .use(require('rehype-react'))
\`\`\`

To my surprise and delight, that process pipeline resulted in a totally usable React component! But it still would require some redundant processing on the client since the React component was being generated dynamically from a string of markdown. 

So how do you _cache_ a React component? Like, a whole component, not just the serialization of it's virtual dom. React provides tools to server render components in multiple ways, but you can't easily generate _jsx_ from a dynamically generated components. But there _is_ a technique for dealing with a React as a compile output of an AST, evidenced by [react-rehype](https://github.com/rhysd/rehype-react) at the end of that Unified markdown pipeline.

React has a dead simple API for creating components without JSX in \`React.createElement()\`. Since it's just plain JavaScript and doesn't require any functions or non-json data structures, it turns out that you can make a JSON structure that represents a set of React components pretty easily. I had run into a use case for this same trick at work, so I put it to use again here: I modified the last step of my Unified pipeline to return JSON instead of a React component. [\`rehype-react\`](https://github.com/rhysd/rehype-react) made this a cinch, since they allow you to pass a custom method for \`createElement\`.

\`\`\`js
remarkPipeline().use(rehypeReact, {
  createElement: (type, props, children) => ({ type, props, children })
})
\`\`\`

From there, I made a [simple component](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js) to transform the result from [\`rehype-react\`](https://github.com/rhysd/rehype-react) back into a React component:

\`\`\`jsx
<ComponentTree components={components} />
\`\`\`

Now I have an pipeline where you can put markdown with crazy embedded HTML in one end, and well-formed _serializable_ React components come out of the other end. With that, I can write out JavaScript files containing valid React components without having to reconstruct any JSX literals from the rehype AST. Either way that's a step that I wanted to be transparent when I was writing posts. Mission accomplished \u{1F60E}

There are a couple of benefits from going through all that trouble:

* [remark plugins](https://github.com/wooorm/remark/blob/master/doc/plugins.md) can do just about anything. Seriously. I was able to add code highlighting _while I was writing this post_ with 1 npm install, 1 line of JavaScript, and 1 line of CSS!
* Unified's [vfile](https://github.com/vfile/vfile) format makes adding post metadata easy.
* No format lock in. When the wind blows a differnt direction and React falls out of favor, outputting to a different format will be easy.
</details>

## Markdown \u27A1\uFE0F Webpack \u27A1\uFE0F Next.js

I wanted to write in Markdown and have Next.js pick up the changes automatically.

By default, next will use any JavaScript modules that export a React component in your \`pages/\` directory. While writing markdown next to code is possible, it's gross. Same goes for duplicating the same boilerplate file for each post and importing the markdown source from some other directory. I wanted to skip all that an go straight from Markdown into Next's build and compile pipeline.

\u{1F4A1} The light bulb moment came when I realized the power of Next's support for custom Webpack configuration.

A  [webpack loader](https://webpack.js.org/concepts/loaders/) can transform markdown source files into modules on the spot! And better yet, I already had a build script from my prototype that was doing most of what I needed to do in the loader. I needed to change was how my build script found out about files (reading them from disk vs. passed in by webpack) and how it output the results (again, writing to disk vs. passing the result back to webpack). The loader plugin interface was dead simple:

\`\`\`js
module.exports = function(source) {
  const done = this.async()

  renderPost(source, this.resourcePath)
    .catch(done).then(post => done(null, post))
}
\`\`\`

Where \`renderPost(source, resourcePath)\` was the middle bit of my prototyped static rendering pipeline, refactored to only need a string of the file content and the path of the file being rendered. This is one of the easiest changes to make, since it took a method formerly reliant on _side effects_, namely reading and writing to disk, and made it a pure function. Any time you can make a method that's passed an input and return a result, you should. Decomposing your assumptions about side effects will almost always save time. I learned this from Gary Bernhardt's talk _[Boundaries](https://www.destroyallsoftware.com/talks/boundaries)_, and I remember it every time I see it.

The last step was to add it to the webpack extension point in \`next.config.js\`:

\`\`\`js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\\.html\\.js$/,
      include: './pages/writing',
      loader: './src/post-loader'
    })
    return config
  }
}
\`\`\`

## Building and Deploying

Unlike in my earlier versions, Next.js 3 supports creating a complete static site from any next app with \`next export\`. To tell it what routes and pages to export, you need to add some configuration to \`next.config.js\`. Here's what mine looks like:

\`\`\`js
module.exports = {
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/cv.html": { page: "/cv.html" },
      "/writing/2016-reading-list.html": { page: "/writing/2016-reading-list.html" },
      "/writing/2017-reading-list.html": { page: "/writing/2017-reading-list.html" },
      // ...
    }
  }
}
\`\`\`

Then I changed my build step to run \`next build && next export --docs\` and I with surprisingly little drama was ready to deploy to Github pages!

Normally I'd be worried that I'd have missed some minor detail in a major change like swapping out the entire backend of a website, but in essence what I was doing here wasn't all that big of a change: my static HTML, JavaScript, and CSS in the \`docs/\` directory was still there, but was being built by a different tool chain. I pushed the first commit with the switch to Next.js and waited patiently while the build ran on Travis CI.

...And that was it. I had more or less completely moved my static site into a totally modern React app with Next.js. The whole thing is [open source](https://github.com/wookiehangover/wookiehangover.com), so feel free to kick the tires and ask questions if you have any \u{1F60A}

Here are the relevant parts of the app:

* **post-loader.js** \u2013 [webpack loader](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/post-loader.js)
* **static-sites-with-next-js.html.js** \u2013 [a markdown post with embedded HTML](https://github.com/wookiehangover/wookiehangover.com/blob/master/pages/writing/static-sites-with-next-js.html.js)
* **react-to-hast.js** \u2013 [markdown compiler with Unified.js](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/react-to-hast.js)
* **component-tree.js** \u2013 [React component for rendering JSON AST](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js)

### Gotcha's! \u{1F61D}

A few snags I ran into:

* Github pages still perversely retains some of it's Jekyll roots, and ignores file and directory names that start with an underscore \u{1F644}
  * **Fix:** add \`.nojekyll\` to your \`docs/\` directory (or whatever is configured in the "Pages" portion of your repo config in Github)
* The \`.html.js\` file extension on the posts was because I wanted backwards compatibilty with my static html version, which used plain old html files
  * _Minor annoyance:_ \`next export\` adds directories for every static file to avoid the .html extension showing up in the path, but now I have urls with trailing slashes.
  * If I ever want to change a URL (like to drop the \`.html\` extension because it's not 1998), I'll need to figure out how to manage the redirects.
* I need to remember to add new posts to \`next.config.js\`, which I seem pathologically incapable of. I'll probably make the webpack plugin emit a JSON file with all the post metadata, but I haven't done that yet.

<marquee>And here's that \`<marquee>\` tag to prove I wasn't joking about supporting arbitraty HTML in posts. And thanks [@ddtrejo](https://twitter.com/ddtrejo) for feedback and edits!</marquee>

[unified]: https://unifiedjs.github.io/
[next]: https://github.com/zeit/next.js
`}function Ui(){return Li}function ia(){return[{depth:1,slug:"how-to-make-a-static-website-with-nextjs",text:"How to Make a Static Website with Next.js"},{depth:3,slug:"-rabbit-hole-react-from-html-markdown",text:"\u{1F430} Rabbit Hole: React from HTML Markdown"},{depth:2,slug:"markdown-\uFE0F-webpack-\uFE0F-nextjs",text:"Markdown \u27A1\uFE0F Webpack \u27A1\uFE0F Next.js"},{depth:2,slug:"building-and-deploying",text:"Building and Deploying"},{depth:3,slug:"gotchas",text:"Gotcha\u2019s! \u{1F61D}"}]}function Sd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ia()}async function Wt(){let{layout:t,...e}=qi;e.file=zt,e.url=Ut,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Li});return p(T,{file:zt,url:Ut,content:e,frontmatter:e,headings:ia(),rawContent:zi,compiledContent:Ui,"server:root":!0,children:a})}Wt[Symbol.for("astro.needsHeadRendering")]=!1;var Wi=Object.freeze(Object.defineProperty({__proto__:null,_internal:Ed,frontmatter:qi,file:zt,url:Ut,rawContent:zi,compiledContent:Ui,getHeadings:ia,getHeaders:Sd,Content:Wt,default:Wt},Symbol.toStringTag,{value:"Module"})),Gi=`<h2 id="lessons-from-the-jerk-1978">Lessons from The Jerk (1978)</h2>
<p>If you\u2019re not familiar with <a href="http://www.imdb.com/title/tt0079367/">The Jerk (1978)</a> starring Steve Martin, do yourself (well really, do <em>me</em> a favor) and watch it. It\u2019s streaming on Amazon Video. Just go watch it. I\u2019ll wait.</p>
<p class="tc">
  <img src="/img/the-jerk-1978.jpg" class="w-50-ns w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows">
</p>
<p>Now that you\u2019re back, I want to share 3 very important pieces of advice that the star of our story, Maven Johnson, receives from his loving family before he departs on his Hero\u2019s Journey:</p>
<ol>
<li>The Lord loves a working man</li>
<li>Don\u2019t trust whitey</li>
<li>See a doctor and get rid of it</li>
</ol>
<p><strong>This is universally good advice.</strong></p>
<p>I may not believe in any higher power, but showing up and being willing to get your hands dirty gives you more advantages than not.</p>
<p>I may not be anything other than an average white american man, but I sure as hell don\u2019t trust any authority figure. It\u2019s a reasonable precautionary measure.</p>
<p>And I may not follow all good advice, but seriously you should see a doctor every once in a while. And call your mom.</p>
<p>I first saw these painted on a plaque in a tattoo shop in Boulder, completely removed from their context in The Jerk, which I had already seen but didn\u2019t connect at the time. I had remembered the signage despite missing the connection to the film. I re-watched it last week and finally noticed, and reveled in the warmth of a pop-culture reference coming full circle: it was a moment of life\u2019s weird interconnected on full display. I spent a lot of time in that tattoo shop.</p>
<p>What difficult-to-ignore advice has influenced you?</p>`,Ad={injectedFrontmatter:{}},Ji={title:"Lessons from The Jerk (1978)",slug:"lessons-from-the-jerk.html",layout:"../../layouts/BlogPost.astro"},Gt="C:/Users/Sam/code/sambreed-dev/src/pages/writing/lessons-from-the-jerk.html.md",Jt="/writing/lessons-from-the-jerk.html";function Vi(){return`
## Lessons from The Jerk (1978)

If you're not familiar with [The Jerk (1978)][imdb] starring Steve Martin, do yourself (well really, do _me_ a favor) and watch it. It's streaming on Amazon Video. Just go watch it. I'll wait.

<p class="tc">
  <img src="/img/the-jerk-1978.jpg"
    class="w-50-ns w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows" />
</p>

Now that you're back, I want to share 3 very important pieces of advice that the star of our story, Maven Johnson, receives from his loving family before he departs on his Hero's Journey:

1. The Lord loves a working man
2. Don't trust whitey
3. See a doctor and get rid of it

**This is universally good advice.**

I may not believe in any higher power, but showing up and being willing to get your hands dirty gives you more advantages than not.

I may not be anything other than an average white american man, but I sure as hell don't trust any authority figure. It's a reasonable precautionary measure.

And I may not follow all good advice, but seriously you should see a doctor every once in a while. And call your mom.

I first saw these painted on a plaque in a tattoo shop in Boulder, completely removed from their context in The Jerk, which I had already seen but didn't connect at the time. I had remembered the signage despite missing the connection to the film. I re-watched it last week and finally noticed, and reveled in the warmth of a pop-culture reference coming full circle: it was a moment of life's weird interconnected on full display. I spent a lot of time in that tattoo shop.

What difficult-to-ignore advice has influenced you?

[imdb]: http://www.imdb.com/title/tt0079367/
`}function Ki(){return Gi}function sa(){return[{depth:2,slug:"lessons-from-the-jerk-1978",text:"Lessons from The Jerk (1978)"}]}function Td(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),sa()}async function Vt(){let{layout:t,...e}=Ji;e.file=Gt,e.url=Jt,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Gi});return p(T,{file:Gt,url:Jt,content:e,frontmatter:e,headings:sa(),rawContent:Vi,compiledContent:Ki,"server:root":!0,children:a})}Vt[Symbol.for("astro.needsHeadRendering")]=!1;var Yi=Object.freeze(Object.defineProperty({__proto__:null,_internal:Ad,frontmatter:Ji,file:Gt,url:Jt,rawContent:Vi,compiledContent:Ki,getHeadings:sa,getHeaders:Td,Content:Vt,default:Vt},Symbol.toStringTag,{value:"Module"})),Xi=`<h2 id="making-things-for-fun">Making things for fun</h2>
<div class="w-60-l w-50-m w-100 mb2 fr-ns tc">
  <img src="/img/head-in-a-jar.png" alt="it me"><br>
  <small><i>"some idiot"</i></small>
</div>
<p>This isn\u2019t a blog. It\u2019s a fun side project done over a couple weekends. There\u2019s a big difference.</p>
<p>It\u2019s not a blog because it\u2019s not using any blogging software, per-se, just some elbow grease and <a href="https://github.com/wookiehangover/wookiehangover.com/tree/master/build">a few scripts</a> that I\u2019ve to cobbled together into a mostly-working, typo-laden, glue\u2013and\u2013popsicle-sticks publishing platform to unleash upon the world like some Lovecraftian horror. Or not. I may be busy.</p>
<p>Simple products are fashionable these days, especially when it comes to media consumption. Even I\u2019ve been known to write a post on Medium dot com upon occasion, but I didn\u2019t set out to build this as a monument to simplicity. No, this just isn\u2019t that type of place and I\u2019m not that type of fella; things are always a bit messier than that in real life.</p>
<p>So as it stands, this is just a barely functioning, loosely coherent website with weird cursor effects<sup><a href="#making-things-for-fun_footnote-01">1</a></sup> (unless I\u2019ve gotten bored and removed them) and superfluous footnotes<sup><a href="#making-things-for-fun_footnote-02">2</a></sup> (I probably haven\u2019t removed these.)</p>
<blockquote>
<p>So why go through all the trouble to build this in the first place? Why not just use Medium?</p>
</blockquote>
<p>Isn\u2019t this what all software developers inevitably do anyway? Yes, that and add layers to things. You mean you\u2019d really rather build some crappy knock-off of good software because your ego is too big to use anything that hasn\u2019t gracefully sprung as an unbidden gift to the world from your god-like cheeto-covered fingertips? Yes. A common thought among all software devs have goes something like, \u201Clet\u2019s all create something second-rate instead of using this perfectly good off-the-shelf in order to scratch the proverbial itch? Yes, indeed!\u201D Ok, it\u2019s probably (definitely) something like that then.</p>
<p>The question might as well then become, \u201Cwhy build anything at all?\u201D</p>
<p><strong>I made this because it was fun.</strong></p>
<p>It was more fun figuring out how to <a href="https://github.com/remy/inliner">easily inline all the assets</a> and <a href="https://github.com/giakki/uncss">strip out unused css</a> on this page than it would have been to set up Wordpress again. The first time I ever set up Wordpress in 2008 was a magical and transformative experience, so why am I so quick to shun it now? Am I really that self-important? (Yes, duh.) Wordpress is great software and I can\u2019t make anything that comes close to it in a weekend.</p>
<blockquote>
<p>Doing something from scratch, even if it\u2019s not polished, doesn\u2019t deny or invalidate what you\u2019ve done in the past.</p>
</blockquote>
<p>For a long time I refused to do any writing on my website because I felt like I didn\u2019t have the time. I was afraid that anything I wrote would be bad and then I\u2019d be committed to it forever, comma splices and all. Paranoid that I would look back on it later with utter embarrassment kept me from committing to much writing since I killed my <a href="http://samuelbreed.blogspot.com/">first blog</a> in 2008. What I guess I means is I\u2019m over that now?</p>
<p><a href="https://www.jwz.org/doc/worse-is-better.html">Worse is better</a> after all, so why not let the tap start flowing!</p>
<p>In keeping with that spirit, I\u2019ve shoddily rebuild an ode-to-a-Jekyll-site so that I can have reasonable writing experience for myself, which means markdown and not much else to fuss over (except custom tags and CSS and doing everything for myself). I\u2019m unburdened by the need for SEO or any other such unspeakable non-sense, but I care about mobile web and I care about pagespeed so I\u2019ve gone and done the aforementioned asset inlining, which I think has come out quite nicely. I also had service workers for no reason but then took those out.</p>
<p><strong>You may never see this because I didn\u2019t know how Service Workers work.</strong></p>
<p>I hope this is your first visit. If this page never changes, it might be because you have a fubar\u2019ed Service Worker I installed and I\u2019m not entirely sure how to purge and don\u2019t really care to test it extensively. So good luck! This might be fun!</p>
<p><strong>Go out and make something, even if it\u2019s a shoddy facsimile of something else.</strong></p>
<blockquote>
<p>Now what are you going to make for yourself?</p>
</blockquote>
<p><em>p.s.</em> And, yes, I do plan on building an HTML guest book some day. But for now a link to twitter will have to suffice \u270D\uFE0F</p>
<aside>
  <ol>
    <li id="making-things-for-fun_footnote-01">
      The custom cursors (provided they're still here, if not, I'll include a gif) were a fun idea I gleaned from [@kwuchu][6] tweeting about redesigning his portfolio site, which featured a similarly cropped picture of him. Since I already had the avatar of my face cropped out, I threw it on the header to see how it would look. It was static and unmoving and no fun whatsoever. I don't know how I stumbled into the custom cursor CSS, but I definitely used [David Walsh's blog post][7] to see it in action and grok how it should work. Then [@ohhoe][8] asked my to make sparkle trails and I couldn't say "no" to that.
    </li>
    <li id="making-things-for-fun_footnote-02">
      Who doesn't love a good footnote? If you know someone, submit their names to me in writing and I'll add them to my list.
    </li>
  </ol>
</aside>`,Bd={injectedFrontmatter:{}},Qi={title:"Making Things For Fun",slug:"making-things-for-fun.html",layout:"../../layouts/BlogPost.astro"},Kt="C:/Users/Sam/code/sambreed-dev/src/pages/writing/making-things-for-fun.html.md",Yt="/writing/making-things-for-fun.html";function Zi(){return`## Making things for fun

<div class="w-60-l w-50-m w-100 mb2 fr-ns tc">
  <img src="/img/head-in-a-jar.png" alt="it me" /><br/>
  <small><i>"some idiot"</i></small>
</div>

This isn\u2019t a blog. It\u2019s a fun side project done over a couple weekends. There\u2019s a big difference.

It's not a blog because it's not using any blogging software, per-se, just some elbow grease and [a few scripts][1] that I\u2019ve to cobbled together into a mostly-working, typo-laden, glue\u2013and\u2013popsicle-sticks publishing platform to unleash upon the world like some Lovecraftian horror. Or not. I may be busy.

Simple products are fashionable these days, especially when it comes to media consumption. Even I\u2019ve been known to write a post on Medium dot com upon occasion, but I didn\u2019t set out to build this as a monument to simplicity. No, this just isn\u2019t that type of place and I\u2019m not that type of fella; things are always a bit messier than that in real life.

So as it stands, this is just a barely functioning, loosely coherent website with weird cursor effects<sup>[1][footnote1]</sup> (unless I've gotten bored and removed them) and superfluous footnotes<sup>[2][footnote2]</sup> (I probably haven't removed these.)

> So why go through all the trouble to build this in the first place? Why not just use Medium?

Isn\u2019t this what all software developers inevitably do anyway? Yes, that and add layers to things. You mean you'd really rather build some crappy knock-off of good software because your ego is too big to use anything that hasn't gracefully sprung as an unbidden gift to the world from your god-like cheeto-covered fingertips? Yes. A common thought among all software devs have goes something like, "let\u2019s all create something second-rate instead of using this perfectly good off-the-shelf in order to scratch the proverbial itch? Yes, indeed!" Ok, it\u2019s probably (definitely) something like that then.

The question might as well then become, "why build anything at all?"

**I made this because it was fun.**

It was more fun figuring out how to [easily inline all the assets][2] and [strip out unused css][3] on this page than it would have been to set up Wordpress again. The first time I ever set up Wordpress in 2008 was a magical and transformative experience, so why am I so quick to shun it now? Am I really that self-important? (Yes, duh.) Wordpress is great software and I can\u2019t make anything that comes close to it in a weekend.

> Doing something from scratch, even if it's not polished, doesn't deny or invalidate what you've done in the past.

For a long time I refused to do any writing on my website because I felt like I didn't have the time. I was afraid that anything I wrote would be bad and then I'd be committed to it forever, comma splices and all. Paranoid that I would look back on it later with utter embarrassment kept me from committing to much writing since I killed my [first blog][5] in 2008. What I guess I means is I'm over that now?

[Worse is better][4] after all, so why not let the tap start flowing!

In keeping with that spirit, I\u2019ve shoddily rebuild an ode-to-a-Jekyll-site so that I can have reasonable writing experience for myself, which means markdown and not much else to fuss over (except custom tags and CSS and doing everything for myself). I\u2019m unburdened by the need for SEO or any other such unspeakable non-sense, but I care about mobile web and I care about pagespeed so I\u2019ve gone and done the aforementioned asset inlining, which I think has come out quite nicely. I also had service workers for no reason but then took those out.

**You may never see this because I didn't know how Service Workers work.**

I hope this is your first visit. If this page never changes, it might be because you have a fubar'ed Service Worker I installed and I'm not entirely sure how to purge and don't really care to test it extensively. So good luck! This might be fun!

**Go out and make something, even if it's a shoddy facsimile of something else.**

> Now what are you going to make for yourself?

_p.s._ And, yes, I do plan on building an HTML guest book some day. But for now a link to twitter will have to suffice \u270D\uFE0F

<aside>
  <ol>
    <li id="making-things-for-fun_footnote-01">
      The custom cursors (provided they're still here, if not, I'll include a gif) were a fun idea I gleaned from [@kwuchu][6] tweeting about redesigning his portfolio site, which featured a similarly cropped picture of him. Since I already had the avatar of my face cropped out, I threw it on the header to see how it would look. It was static and unmoving and no fun whatsoever. I don't know how I stumbled into the custom cursor CSS, but I definitely used [David Walsh's blog post][7] to see it in action and grok how it should work. Then [@ohhoe][8] asked my to make sparkle trails and I couldn't say "no" to that.
    </li>
    <li id="making-things-for-fun_footnote-02">
      Who doesn't love a good footnote? If you know someone, submit their names to me in writing and I'll add them to my list.
    </li>
  </ol>
</aside>

[1]: https://github.com/wookiehangover/wookiehangover.com/tree/master/build
[2]: https://github.com/remy/inliner
[3]: https://github.com/giakki/uncss
[4]: https://www.jwz.org/doc/worse-is-better.html
[5]: http://samuelbreed.blogspot.com/
[6]: https://twitter.com/kwuchu
[7]: https://davidwalsh.name/css-custom-cursor
[8]: https://twitter.com/ohhoe
[footnote1]: #making-things-for-fun_footnote-01
[footnote2]: #making-things-for-fun_footnote-02
`}function es(){return Xi}function ra(){return[{depth:2,slug:"making-things-for-fun",text:"Making things for fun"}]}function jd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ra()}async function Xt(){let{layout:t,...e}=Qi;e.file=Kt,e.url=Yt,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Xi});return p(T,{file:Kt,url:Yt,content:e,frontmatter:e,headings:ra(),rawContent:Zi,compiledContent:es,"server:root":!0,children:a})}Xt[Symbol.for("astro.needsHeadRendering")]=!1;var ts=Object.freeze(Object.defineProperty({__proto__:null,_internal:Bd,frontmatter:Qi,file:Kt,url:Yt,rawContent:Zi,compiledContent:es,getHeadings:ra,getHeaders:jd,Content:Xt,default:Xt},Symbol.toStringTag,{value:"Module"})),ns=`<h2 id="picking-up-the-pieces-or-how-i-learned-to-stop-worrying-and-embrace-weird-metaphors">Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors</h2>
<p>Metaphors are fractals of language: once you start to examine them closely, you end up seeing the same pattern over and over and over again.</p>
<a href="../img/john-wayne.jpg" class="none">
  <img src="/img/john-wayne.jpg" class="w-100 mv1 pa1 br1 ba b--rainbows">
</a>
<blockquote>
<p>This is not my first rodeo but it is my first day</p>
</blockquote>
<p>I tend to find myself re-using the same (usually tired) metaphors in all sorts of different situations. But let\u2019s not <em>chalk it up</em> to laziness right away. I can\u2019t turn a blind eye once I start seeing a particular pattern that\u2019s useful for solving problems and, well, as they (I) say, <em>I\u2019ve found my hammer and everything becomes a nail</em>.<sup><a href="#picking-up-the-pieces-01">1</a></sup></p>
<h3 id="helpful-metaphors">Helpful Metaphors</h3>
<p>Travel metaphors are always useful, bringing in words like <em>eyeline</em>, <em>takeoff</em>, and <em>landing</em> into conversations makes work feel more like a swashbuckling adventure than a boring slog through a checklist.</p>
<p>Eggs rolling towards the edge of a table is a particularly good image I\u2019ve borrowed from Matt Work. It\u2019s so damn useful when you need show how to deal with decision overload. All management problems work like this:</p>
<blockquote>
<p>There are a dozen eggs rolling toward the edge of the table. You can only catch one.</p>
</blockquote>
<p>It\u2019s an argument against micromanagement and interventionism, while offering practical advice for most types of people wrangling problems.</p>
<h3 id="unhelpful-metaphors">Unhelpful Metaphors</h3>
<p>Have you ever found somehwere in the middle of the back half of a sentence when you realize you\u2019re using an obtuse or obscure metaphor, and the feeling sinks in that your captive audience is making a face, because you are in the middle of a cognitive leap so bizarre it would make an anti-comedian blush? Me too.</p>
<p>I call that an \u201Cunhelpful metaphor.\u201D Even if it does make sense without being a stretch, if it makes the poor audience question the sanity of the speaker it\u2019s safe to say it should probably be left out.</p>
<p><strong>Finding balance</strong></p>
<p>Usually when I start employing these colorful turns of phrase it\u2019s because I\u2019m trending to frame a concept, and I\u2019m using roughly hewn idioms in an imprecise language to do it. Like how a charcoal rubbing brings out the detail hidden to the naked eye, an applicable metaphor, however weird, can help drawn out a details that might not be readily apparent.</p>
<p>So these days I just say it, whether or not it\u2019s a weird comparison. I\u2019m lending my point of view, and in a subjective world, the sooner you understand someone\u2019s perspective, the sooner you\u2019l be able to establish empathy.</p>
<aside>
  <ol>
    <li id="picking-up-the-pieces-01">Ok. Let's  try and get through the rest this without over-packing every sentence with parenthetical asides (you're not Faulkner, after all.)</li>
  </ol>
</aside>`,Nd={injectedFrontmatter:{}},as={title:"Picking up the pieces",slug:"picking-up-the-pieces.html",description:"A story about how I've come to embrace odd metaphors to color language",layout:"../../layouts/BlogPost.astro"},Qt="C:/Users/Sam/code/sambreed-dev/src/pages/writing/picking-up-the-pieces.html.md",Zt="/writing/picking-up-the-pieces.html";function os(){return`
## Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors

Metaphors are fractals of language: once you start to examine them closely, you end up seeing the same pattern over and over and over again.

<a href="../img/john-wayne.jpg" class="none">
  <img src="/img/john-wayne.jpg"
    class="w-100 mv1 pa1 br1 ba b--rainbows" />
</a>

> This is not my first rodeo but it is my first day

I tend to find myself re-using the same (usually tired) metaphors in all sorts of different situations. But let's not _chalk it up_ to laziness right away. I can't turn a blind eye once I start seeing a particular pattern that's useful for solving problems and, well, as they (I) say, _I've found my hammer and everything becomes a nail_.<sup>[1](#picking-up-the-pieces-01)</sup>

### Helpful Metaphors

Travel metaphors are always useful, bringing in words like _eyeline_, _takeoff_, and _landing_ into conversations makes work feel more like a swashbuckling adventure than a boring slog through a checklist.

Eggs rolling towards the edge of a table is a particularly good image I've borrowed from Matt Work. It's so damn useful when you need show how to deal with decision overload. All management problems work like this:

> There are a dozen eggs rolling toward the edge of the table. You can only catch one.

It's an argument against micromanagement and interventionism, while offering practical advice for most types of people wrangling problems.

### Unhelpful Metaphors

Have you ever found somehwere in the middle of the back half of a sentence when you realize you're using an obtuse or obscure metaphor, and the feeling sinks in that your captive audience is making a face, because you are in the middle of a cognitive leap so bizarre it would make an anti-comedian blush? Me too.

I call that an "unhelpful metaphor." Even if it does make sense without being a stretch, if it makes the poor audience question the sanity of the speaker it's safe to say it should probably be left out.

**Finding balance**

Usually when I start employing these colorful turns of phrase it's because I'm trending to frame a concept, and I'm using roughly hewn idioms in an imprecise language to do it. Like how a charcoal rubbing brings out the detail hidden to the naked eye, an applicable metaphor, however weird, can help drawn out a details that might not be readily apparent.

So these days I just say it, whether or not it's a weird comparison. I'm lending my point of view, and in a subjective world, the sooner you understand someone's perspective, the sooner you'l be able to establish empathy.

<aside>
  <ol>
    <li id="picking-up-the-pieces-01">Ok. Let's  try and get through the rest this without over-packing every sentence with parenthetical asides (you're not Faulkner, after all.)</li>
  </ol>
</aside>
`}function is(){return ns}function la(){return[{depth:2,slug:"picking-up-the-pieces-or-how-i-learned-to-stop-worrying-and-embrace-weird-metaphors",text:"Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors"},{depth:3,slug:"helpful-metaphors",text:"Helpful Metaphors"},{depth:3,slug:"unhelpful-metaphors",text:"Unhelpful Metaphors"}]}function Pd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),la()}async function en(){let{layout:t,...e}=as;e.file=Qt,e.url=Zt,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":ns});return p(T,{file:Qt,url:Zt,content:e,frontmatter:e,headings:la(),rawContent:os,compiledContent:is,"server:root":!0,children:a})}en[Symbol.for("astro.needsHeadRendering")]=!1;var ss=Object.freeze(Object.defineProperty({__proto__:null,_internal:Nd,frontmatter:as,file:Qt,url:Zt,rawContent:os,compiledContent:is,getHeadings:la,getHeaders:Pd,Content:en,default:en},Symbol.toStringTag,{value:"Module"})),rs=`<h2 id="protect-your-dns-history-with-dnscrypt">Protect your DNS history with DNSCrypt</h2>
<p>In light of the recent rollback(s) of regulations meant to restrict how ISP\u2019s share and sell the data they gather about you, I started wondering what I could do to make my internet traffic a bit harder for them to monetize. How would I prevent my ISP from selling details about my shopping habits and personal preferences to the highest bidder?</p>
<p><i><a href="#first-steps">Or skip straight to how to do it.</a></i></p>
<h3 id="why-dns-and-why-should-you-care">Why DNS and why should you care?</h3>
<p>Standards for encrypting web traffic have become widely adopted since their introduction in the late 90s. It\u2019s not my first day, so I knew that content sent over HTTPS would be difficult (but not impossible) for a third party to do much with, and I already use HTTPS-everywhere and Brave to help keep things on the up-and-up. Unfortunately, even exclusively using HTTPS doesn\u2019t mean that 100% of your traffic is encrypted and secure.</p>
<p>A crucially important part of how your computer or phone loads a website is completely unencrypted in practice. The Domain Name System, or DNS, is how your web browser knows how to find the domain \u201Cgoogle.com\u201D when you type <code>https://www.google.com</code> into your browser\u2019s address bar, and DNS isn\u2019t normally encrypted. Anyone who handles the traffic can take a peek if they\u2019re so inclined.</p>
<blockquote>
<p>Ability plus incentive makes for easy temptation. DNS is an easy target if your ISP wanted to profit from a complete list of the websites you visited.</p>
</blockquote>
<p>Even worse, an ISP could resolve a DNS entry for a different website altogether or send you to a \u201Ctoll booth\u201D captive portal for whatever nefarious reasons they could think of.</p>
<p>Which means that even if I took every reasonable precaution and always made sure <code>https</code> was in the URL when buying John Tesh cd\u2019s on Amazon, watching John Tesh videos on Youtube, or posting updates to my John Tesh fanzine, Comcast would still be able to see the URLs of the pages and sell them to anyone who cared. That is unacceptable. My secret love of John Tesh is too precious for a greedy corporate entity to harvest for profits.</p>
<a href="../img/the-cyber.jpg">
  <img src="/img/the-cyber.jpg" class="w-60-l w-50-m w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows">
</a>
<p>Good thing for me, a bunch of smart folks who are well versed in \u201Cthe cyber\u201D had already thought this one through enough to write RFC standards for the DNS protocol that can make it much harder for a third party to see the paper trail of domains and URLs left by a furious session of John Tesh related browsing. Even better, these standards have been implemented with open source and are available to use for free, without too much overhead.</p>
<p>Unfortunately, encrypting your DNS isn\u2019t yet as ubiquitous or widely support as HTTPS, so there are still a few hoops to jump through if you want to start obfuscating this aspect of your web traffic.</p>
<p>It\u2019s also important to note that encrypting your DNS isn\u2019t a silver bullet with regards to online privacy. True privacy is a fleeting concept, or at least one that\u2019s impossible to make sane guarantees about. Like any encryption technology, it\u2019s only as strong as the implementation being used, and in recent years those have been known to be compromised with some degree of regularity. Even when you\u2019re encrypting your communications doesn\u2019t mean you should automatically trust the person on the other end of the line. Not to sound paranoid, but be careful about who you place blind trust in and always look before you leap.</p>
<h3 id="enter-dnscrypt">Enter DNSCrypt</h3>
<p>DNSCrypt is a great collection of software tools that let you get up and running with encrypted DNS really quickly. Don\u2019t take my word of it. Head over to dnscrypt.org for comprehensive info about what it is and all the ways you can use it.</p>
<blockquote>
<p>dnscrypt + httpseverywhere is 9/10s of a vpn imo</p>
</blockquote>
<p class="w-100 tr">
\u2014 <a href="https://twitter.com/SlexAxton/status/853715217058025475">Alex Sexton, notable person on the internet</a>
</p>
<p>DNSCrypt is a way to run an encrypted dns server and clients for every platform to connect with it. There are already plenty of servers around the world that you can connect to out-of-the-box with a gui clients, so getting up and running is super easy. And there are plenty of command line tools, too. Everything is open source and the community seems active, with multiple projects to choose from for most layers of tooling.</p>
<p>The client apps work by changing your network settings to use a dns server running DNSCrypt, and lets you quickly switch back and forth between your previous \u201Cnormal\u201D dns and an encrypted configuration. It does this by running a local dns server on your computer, which handles one end of the encryption and decryption, with the public server you\u2019re connecting with on the other end. Since all the traffic is encrypted on your computer before it\u2019s sent to the server, an intermediary like your ISP can\u2019t see the domain being requested.</p>
<h3 id="whats-the-catch-why-isnt-this-everywhere-already">What\u2019s the catch? Why isn\u2019t this everywhere already?</h3>
<p>The catch is that ultimately your dns request will be served from an unencrypted (but authenticated) channel because the global network of DNS servers does not implement the DNSCrypt protocol.</p>
<p><a id="first-steps"></a></p>
<h3 id="first-steps">First steps</h3>
<p>Better instructions here: <a href="https://dnscrypt.org/">https://dnscrypt.org/</a></p>
<p>Install the <a href="https://github.com/alterstep/dnscrypt-osxclient">dnscrypt-client</a> and connect to one of the public nodes. I chose <a href="https://nxt.ist">https://nxt.ist</a>. You can \u201Ctrust\u201D these because they issue keypairs or something(?) but, caveat emptor.</p>
<p>But roll with the thick client because it\u2019s convenient and you\u2019ll get to see what you\u2019re in for\u2026 which is pretty boring if you\u2019re not running <code>dig</code> or <code>nslookup</code> all the time to see where your DNS entries are coming from. But then again, it\u2019s pretty boring. But at least they\u2019re encrypted?</p>
<h3 id="paranoid-mode-roll-your-own-dnscrypt-server">Paranoid mode: Roll your own DNSCrypt server</h3>
<p>I chose a droplet that came with Ubuntu 16.04 and Docker 1.17 pre-installed. Created a new keypair (always, always create a new keypair) and give it a good name, a static IPv4 address, and an IPv6 address if you hate yourself (or want to learn about docker\u2019s nightmare factory networking layer).</p>
<p>SSH to the server and fire up the <a href="https://github.com/jedisct1/dnscrypt-server-docker">DNSCrypt Server Docker Image</a> with the instructions from the README:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">docker run --name=dnscrypt-server -p 443:443/udp -p 443:443/tcp \\</span></span>
<span class="line"><span style="color: #C9D1D9">    jedisct1/unbound-dnscrypt-server init -N example.com</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">docker start dnscrypt</span></span></code></pre>
<p>The first command returns a public key. You\u2019ll need this. It\u2019s also in your docker logs if you forget it <code>docker logs dnscrypt-server | head</code>.</p>
<p>Now you have a server running, note the IP and setup a client to connect to it.</p>
<h3 id="connecting-clients-with-dnscrypt-proxy">Connecting clients with dnscrypt-proxy</h3>
<p>I tried 2 ways of connecting devices to my new dnscrypt server from my local network.</p>
<p><b>1 - Run the proxy client everywhere</b></p>
<p>Run dnscrypt-proxy on every device where you want encrypted dns, which makes a local dns server which sends encrypted requests to your server. This is the \u201Csafest\u201D way of doing things because you\u2019re not trusting anyone else to do the encryption for you, making it a bit more difficult for someone to spy on your dns traffic.</p>
<p>Install it for mac with homebrew: <code>brew install dnscrypt-proxy</code></p>
<p>Then connect to your server using the IP and public key:</p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">sudo dnscrypt-proxy --provider-key=YOUR_PUBLIC_KEY \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --resolver-address=YOUR_IPv4_ADDRESS:443 \\</span></span>
<span class="line"><span style="color: #C9D1D9">  --provider-name=2.dnscrypt-cert.example.com</span></span></code></pre>
<p>Now edit your DNS settings to point at your IP. This is actually really convenient if you\u2019re already using dnscrypt-client: in the \u201CAdvanced\u201D tab, add your IP to the field labeled \u201CWhen not using DNSCrypt, use the following static DNS servers\u201D. Now, when you turn off the DNSCrypt thick client, it will try to use the proxy you started from the command line.</p>
<p>It\u2019s a pain in the ass that you can\u2019t point to your own server on the client. There, I said it. Pull requests welcome, I guess?</p>
<p><b>2 - Run it from one place on your local network</b></p>
<p>Run dnscrypt-proxy somewhere on your local network, and tell devices to use that as their source of truth for dns. If you trust your local network (which, depending on how many IOT devices you have running or you don\u2019t control router/modem settings, might not be a good idea,) then you can avoid extra process overhead and it works for phones and tablets.</p>
<p>Basically the same steps as above, but make sure that you start the dnscrypt-proxy client with <code>--local-address=0.0.0.0</code> so that it broadcasts to your network.</p>
<p>And, uh, make sure your router doesn\u2019t liberally port forward or you\u2019ll live to regret it.</p>
<p>I did this on my ubuntu media server and I ran into dnsmasq issues, because ubuntu is stupid and runs a dnsmasq process as part of it\u2019s network stack, but it\u2019s not the \u201Creal\u201D dnsmasq so you can\u2019t configure it to broadcast (go figure).</p>
<p>To get everything working without just nuking the unconfigurable dnsmasq process, I had to run dnscrypt-proxy on another port, <code>127.0.0.1:40</code> and then install the \u201Creal\u201D dnsmasq, <code>sudo apt-get install dnsmasq</code> and tell it to use dnscrypt-proxy as a nameserver. All this is from here, conveniently: <a href="https://wiki.debian.org/HowTo/dnsmasq">https://wiki.debian.org/HowTo/dnsmasq</a></p>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">no-resolv</span></span>
<span class="line"><span style="color: #C9D1D9">server 127.0.0.1</span></span></code></pre>
<p>Then I switched all the dns settings on my phones and computers to point at the local ip of my media server for DNS, falling back to google\u2019s <code>8.8.8.8</code> and <code>8.8.4.4</code> to avoid being inconveninced if the process dies.</p>
<h3 id="conclusion">Conclusion</h3>
<div class="fr-ns w-50-ns w-100 ml3-ns tc tl-ns bonzi-buddy">
  <a href="https://en.wikipedia.org/wiki/BonziBuddy" target="__blank" class="none">
    <img src="/img/bonzi-buddy.gif" class="pa1">
  </a>
</div>
<p>Encrypting DNS is boring, but satisfying.</p>
<p>Happy Hacking \u{1F913}</p>
<div class="cf"></div>`,_d={injectedFrontmatter:{}},ls={title:"Protect your DNS history with DNSCrypt",slug:"protect-your-history.html",description:"DNSCrypt is a great way to ensure that your browsing history isn't being spyed on. Learn how to set up DNSCrypt to keep your DNS traffic from prying eyes.",layout:"../../layouts/BlogPost.astro"},tn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/protect-your-history.html.md",nn="/writing/protect-your-history.html";function cs(){return`## Protect your DNS history with DNSCrypt

In light of the recent rollback(s) of regulations meant to restrict how ISP's share and sell the data they gather about you, I started wondering what I could do to make my internet traffic a bit harder for them to monetize. How would I prevent my ISP from selling details about my shopping habits and personal preferences to the highest bidder?

<i>[Or skip straight to how to do it.](#first-steps)</i>

### Why DNS and why should you care?

Standards for encrypting web traffic have become widely adopted since their introduction in the late 90s. It's not my first day, so I knew that content sent over HTTPS would be difficult (but not impossible) for a third party to do much with, and I already use HTTPS-everywhere and Brave to help keep things on the up-and-up. Unfortunately, even exclusively using HTTPS doesn't mean that 100% of your traffic is encrypted and secure.

A crucially important part of how your computer or phone loads a website is completely unencrypted in practice. The Domain Name System, or DNS, is how your web browser knows how to find the domain "google.com" when you type \`https://www.google.com\` into your browser's address bar, and DNS isn't normally encrypted. Anyone who handles the traffic can take a peek if they're so inclined.

> Ability plus incentive makes for easy temptation. DNS is an easy target if your ISP wanted to profit from a complete list of the websites you visited.

Even worse, an ISP could resolve a DNS entry for a different website altogether or send you to a "toll booth" captive portal for whatever nefarious reasons they could think of.

Which means that even if I took every reasonable precaution and always made sure \`https\` was in the URL when buying John Tesh cd's on Amazon, watching John Tesh videos on Youtube, or posting updates to my John Tesh fanzine, Comcast would still be able to see the URLs of the pages and sell them to anyone who cared. That is unacceptable. My secret love of John Tesh is too precious for a greedy corporate entity to harvest for profits.

<a href="../img/the-cyber.jpg">
  <img src="/img/the-cyber.jpg"
    class="w-60-l w-50-m w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows" />
</a>

Good thing for me, a bunch of smart folks who are well versed in "the cyber" had already thought this one through enough to write RFC standards for the DNS protocol that can make it much harder for a third party to see the paper trail of domains and URLs left by a furious session of John Tesh related browsing. Even better, these standards have been implemented with open source and are available to use for free, without too much overhead.

Unfortunately, encrypting your DNS isn't yet as ubiquitous or widely support as HTTPS, so there are still a few hoops to jump through if you want to start obfuscating this aspect of your web traffic.

It's also important to note that encrypting your DNS isn't a silver bullet with regards to online privacy. True privacy is a fleeting concept, or at least one that's impossible to make sane guarantees about. Like any encryption technology, it's only as strong as the implementation being used, and in recent years those have been known to be compromised with some degree of regularity. Even when you're encrypting your communications doesn't mean you should automatically trust the person on the other end of the line. Not to sound paranoid, but be careful about who you place blind trust in and always look before you leap.

### Enter DNSCrypt

DNSCrypt is a great collection of software tools that let you get up and running with encrypted DNS really quickly. Don't take my word of it. Head over to dnscrypt.org for comprehensive info about what it is and all the ways you can use it.

> dnscrypt + httpseverywhere is 9/10s of a vpn imo

<p class="w-100 tr">
\u2014 <a href="https://twitter.com/SlexAxton/status/853715217058025475">Alex Sexton, notable person on the internet</a>
</p>

DNSCrypt is a way to run an encrypted dns server and clients for every platform to connect with it. There are already plenty of servers around the world that you can connect to out-of-the-box with a gui clients, so getting up and running is super easy. And there are plenty of command line tools, too. Everything is open source and the community seems active, with multiple projects to choose from for most layers of tooling.

The client apps work by changing your network settings to use a dns server running DNSCrypt, and lets you quickly switch back and forth between your previous "normal" dns and an encrypted configuration. It does this by running a local dns server on your computer, which handles one end of the encryption and decryption, with the public server you're connecting with on the other end. Since all the traffic is encrypted on your computer before it's sent to the server, an intermediary like your ISP can't see the domain being requested.

### What's the catch? Why isn't this everywhere already?

The catch is that ultimately your dns request will be served from an unencrypted (but authenticated) channel because the global network of DNS servers does not implement the DNSCrypt protocol.

<a id="first-steps"></a>

### First steps

Better instructions here: https://dnscrypt.org/

Install the [dnscrypt-client](https://github.com/alterstep/dnscrypt-osxclient) and connect to one of the public nodes. I chose https://nxt.ist. You can "trust" these because they issue keypairs or something(?) but, caveat emptor.

But roll with the thick client because it's convenient and you'll get to see what you're in for... which is pretty boring if you're not running \`dig\` or \`nslookup\` all the time to see where your DNS entries are coming from. But then again, it's pretty boring. But at least they're encrypted?

### Paranoid mode: Roll your own DNSCrypt server

I chose a droplet that came with Ubuntu 16.04 and Docker 1.17 pre-installed. Created a new keypair (always, always create a new keypair) and give it a good name, a static IPv4 address, and an IPv6 address if you hate yourself (or want to learn about docker's nightmare factory networking layer).

SSH to the server and fire up the [DNSCrypt Server Docker Image](https://github.com/jedisct1/dnscrypt-server-docker) with the instructions from the README:

\`\`\`bash
docker run --name=dnscrypt-server -p 443:443/udp -p 443:443/tcp \\
    jedisct1/unbound-dnscrypt-server init -N example.com

docker start dnscrypt
\`\`\`

The first command returns a public key. You'll need this. It's also in your docker logs if you forget it \`docker logs dnscrypt-server | head\`.

Now you have a server running, note the IP and setup a client to connect to it.

### Connecting clients with dnscrypt-proxy

I tried 2 ways of connecting devices to my new dnscrypt server from my local network.

<b>1 - Run the proxy client everywhere</b>

Run dnscrypt-proxy on every device where you want encrypted dns, which makes a local dns server which sends encrypted requests to your server. This is the "safest" way of doing things because you're not trusting anyone else to do the encryption for you, making it a bit more difficult for someone to spy on your dns traffic.

Install it for mac with homebrew: \`brew install dnscrypt-proxy\`

Then connect to your server using the IP and public key:

\`\`\`bash
sudo dnscrypt-proxy --provider-key=YOUR_PUBLIC_KEY \\
  --resolver-address=YOUR_IPv4_ADDRESS:443 \\
  --provider-name=2.dnscrypt-cert.example.com
\`\`\`

Now edit your DNS settings to point at your IP. This is actually really convenient if you're already using dnscrypt-client: in the "Advanced" tab, add your IP to the field labeled "When not using DNSCrypt, use the following static DNS servers". Now, when you turn off the DNSCrypt thick client, it will try to use the proxy you started from the command line.

It's a pain in the ass that you can't point to your own server on the client. There, I said it. Pull requests welcome, I guess?

<b>2 - Run it from one place on your local network</b>

Run dnscrypt-proxy somewhere on your local network, and tell devices to use that as their source of truth for dns. If you trust your local network (which, depending on how many IOT devices you have running or you don't control router/modem settings, might not be a good idea,) then you can avoid extra process overhead and it works for phones and tablets.

Basically the same steps as above, but make sure that you start the dnscrypt-proxy client with \`--local-address=0.0.0.0\` so that it broadcasts to your network.

And, uh, make sure your router doesn't liberally port forward or you'll live to regret it.

I did this on my ubuntu media server and I ran into dnsmasq issues, because ubuntu is stupid and runs a dnsmasq process as part of it's network stack, but it's not the "real" dnsmasq so you can't configure it to broadcast (go figure).

To get everything working without just nuking the unconfigurable dnsmasq process, I had to run dnscrypt-proxy on another port, \`127.0.0.1:40\` and then install the "real" dnsmasq, \`sudo apt-get install dnsmasq\` and tell it to use dnscrypt-proxy as a nameserver. All this is from here, conveniently: https://wiki.debian.org/HowTo/dnsmasq

\`\`\`ini
no-resolv
server 127.0.0.1
\`\`\`

Then I switched all the dns settings on my phones and computers to point at the local ip of my media server for DNS, falling back to google's \`8.8.8.8\` and \`8.8.4.4\` to avoid being inconveninced if the process dies.

### Conclusion

<div class="fr-ns w-50-ns w-100 ml3-ns tc tl-ns bonzi-buddy">
  <a href="https://en.wikipedia.org/wiki/BonziBuddy"
    target="__blank" class="none">
    <img src="/static../img/bonzi-buddy.gif" class="pa1" />
  </a>
</div>

Encrypting DNS is boring, but satisfying.

Happy Hacking \u{1F913}

<div class="cf"></div>
`}function us(){return rs}function ca(){return[{depth:2,slug:"protect-your-dns-history-with-dnscrypt",text:"Protect your DNS history with DNSCrypt"},{depth:3,slug:"why-dns-and-why-should-you-care",text:"Why DNS and why should you care?"},{depth:3,slug:"enter-dnscrypt",text:"Enter DNSCrypt"},{depth:3,slug:"whats-the-catch-why-isnt-this-everywhere-already",text:"What\u2019s the catch? Why isn\u2019t this everywhere already?"},{depth:3,slug:"first-steps",text:"First steps"},{depth:3,slug:"paranoid-mode-roll-your-own-dnscrypt-server",text:"Paranoid mode: Roll your own DNSCrypt server"},{depth:3,slug:"connecting-clients-with-dnscrypt-proxy",text:"Connecting clients with dnscrypt-proxy"},{depth:3,slug:"conclusion",text:"Conclusion"}]}function Rd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ca()}async function an(){let{layout:t,...e}=ls;e.file=tn,e.url=nn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":rs});return p(T,{file:tn,url:nn,content:e,frontmatter:e,headings:ca(),rawContent:cs,compiledContent:us,"server:root":!0,children:a})}an[Symbol.for("astro.needsHeadRendering")]=!1;var ds=Object.freeze(Object.defineProperty({__proto__:null,_internal:_d,frontmatter:ls,file:tn,url:nn,rawContent:cs,compiledContent:us,getHeadings:ca,getHeaders:Rd,Content:an,default:an},Symbol.toStringTag,{value:"Module"})),ps=`<h2 id="why-i-read-what-i-read-in-2016">Why I Read What I Read in 2016</h2>
<p>January 1, 2017</p>
<p>I tried to read more this year, I really did. I had serious intentions about it, so I did what serious people do, I started keeping a list. Or at least I decided to publish it and keep it up to date. There was a natural satisfaction, an additional dopamine rush of accomplishment, to checking off an title right after I finished it.</p>
<blockquote>
<p>So far this book has no kissing in it at all and is totally boring</p>
</blockquote>
<p class="w-100 tr">
\u2014 <a href="https://twitter.com/sambreed/status/736443022850719744" target="__blank">Some idiot on twitter</a>
</p>
<a href="https://twitter.com/sambreed/status/736443022850719744">
  <img src="/img/kissinger.jpg" class="w-60-l w-50-m w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows">
</a>
<p>I started on Wunderlist. Probably around the second half of 2015 enough static had built up around the problem to trigger a release, a single spasm of output into list form, tapped diligently onto the keyboard of my iPhone. That list, of things I was currently reading and thing I remembered reading up to that point in the year and books I had already purchased and were waiting for me on my bookshelf, was what source my 2015 post, which I still wrote in a hurry on New Year\u2019s Day 2016.</p>
<p>I kept up the practice of maintaining a reading list in Wunderlist. It unfurled itself ahead of me and pushed the past books forever below the fold. I got ambitious a couple of times and added dozens of titles, so many in fact that the list became a burden. I couldn\u2019t look at it. And the format, for however much it rewarded me with the initial thrill of checking off a title, downplayed the previous items in a way that was a little unsatisfying. I had also taken to using Wunderlist (which I love, btw, despite the criticism) for work task tracking, so it became a thing that now did two things, which is far to many functions for my limbic brain to remember how to reward. So I let that list wither a little until finally I abandoned it entirely.</p>
<p>That\u2019s when I finally re-did my website and by doing a classic thing-you-shouldn\u2019t-do and rolled my own publishing software from scratch. Mostly so I could maintain a list in markdown, which, I kinda did?</p>
<p>Last year\u2019s was a Medium post. Medium is great. I\u2019m mad jellz of what they built. But I like writing in thick app, and I like writing in markdown, and I like being able to keep and move around my own files.<sup>1</sup></p>
<p>So I once again went through the act of translating my reading history from Wunderlist into a more sharable format. Hence the list you\u2019ll find archived at the bottom of this post.<sup>2</sup></p>
<h3 id="how-to-read-this-list">How to read this list:</h3>
<p>Because decisions are hard, I\u2019ve gone through the trouble of preparing a few variations:</p>
<ol>
<li>The \u201CClassic\u201D list, as maintained in earlier versions of this post. If you don\u2019t like introspective bullshit, skip to this one \u2014 <a href="2016-reading-list.html">Classic List</a></li>
<li>The Esoteric List, my first thoughts on how to properly formulate a wrap up post that sums up my life this year \u2014 <a href="#so-you-like-books-huh-">Esoteric</a></li>
<li>Up / down recommendations, my no frills recommendations: read it or skip it \u2014 <a href="#up-down">Up/Down</a></li>
</ol>
<p>I now present these, out of order:</p>
<h3 id="so-you-like-books-huh">So you like books, huh?</h3>
<p>Fuck man, this was a hell of a year, wasn\u2019t it? I\u2019ve probably said that exact phrase a couple of dozen times in the waning days of 2016. But, fuck, man, wasn\u2019t it tho?</p>
<p>While trying to narrowly avoid <a href="https://en.m.wikipedia.org/wiki/Inner_emigration">inner emigration</a>, I\u2019ve put myself on a full press embargo after the months of frenzy leading up to the US Presidential Election: I\u2019m terrified that the 24 hour news cycle is designed only to distract, and there\u2019s very little to distinguish honest journalism from partisan hackery in the echo chambers we\u2019ve spent the last few years building for ourselves.</p>
<p>So I read some fuckin books.</p>
<h3 id="fiction">Fiction</h3>
<p>I read three pieces of fiction this year that stand out. None were published any time recently. They have with very little to do with one another, save for that <em>Flow My Tears\u2026</em> and <em>Cat\u2019s Cradle</em> could loosely be thrown into the Science Fiction section at a used bookstore and no crime would have been committed, and I enjoyed each one of them for entirely different reasons.</p>
<ul>
<li><a href="https://www.amazon.com/Flow-My-Tears-Policeman-Said/dp/0547572255/"><em>Flow My Tears, the Policeman Said</em></a> by Philip K. Dick \u2605\u2605\u2605\u2605\u2606</li>
</ul>
<p>Philip K. Dick often wrote about  men who suddenly find themselves out of place, where their underlying assumptions about the world are either slowly subverted if not turned entirely upside down. <em>Flow My Tears\u2026</em> is one of the latter.</p>
<ul>
<li><a href="https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut/dp/038533348X/"><em>Cat\u2019s Cradle</em>: A Novel</a> by Kurt Vonnegut \u2605\u2605\u2605\u2605\u2605</li>
</ul>
<p>Kurt Vonnegut knows how to keep things brief and always remembers to include a punchline. And there\u2019s a main character in this book with the same last name as me, go figure why I liked it. You should read this, it\u2019s short and funny and leaves you thinking about big questions about humanity. And Ice-9.</p>
<ul>
<li><a href="https://www.amazon.com/American-Gods-Tenth-Anniversary-Novel/dp/0062472100/"><em>American Gods</em></a> by Neil Gaiman \u2605\u2605\u2605\u2605\u2606</li>
</ul>
<p>Neil Gaiman is not an author that I\u2019ve ever really gotten into. He seems like a soft spoken British man who spins somewhat boring stories infused with \u201Cmagick\u201D and \u201Cfaeries\u2019 or something like that, right? Either way, I was probably quick to judge Gaiman on his observable aesthetic and film adaptations. American Gods is great.</p>
<p>More importantly, these three works bring into question the notion of identity: in <em>Flow My Tears\u2026</em>, the protagonists celebrity identity is stripped away in an instant with no explanation; <em>Cat\u2019s Cradle</em> centers around a group of people failing to understand each other and their means of relating to the world, all while foolishly toying with scientific advances that carry devastating consequences; finally, American Gods serves as modern mythology-cum-Bildungsroman and is about a character literally named \u201CShadow\u201D who\u2019s piecing together his present version of himself from fractured memories of his past life while struggling to separate reality from fantasy or illusion.</p>
<p>Phew, ok, that was a mouthful. On with the rest of the list.</p>
<h3 id="non-fiction">Non-Fiction</h3>
<p>Last year\u2019s wrap up post was assembled in a hurry, and while I certainly had chosen a few vectors in my non-fiction selections, I had of course done it somewhat haphazardly. I largely discovered the things on my 2015 list myself by way of the internet. In 2016 I went about it a bit differently<sup>2</sup> and I\u2019m pleased with the results.</p>
<ul>
<li><a href="https://www.amazon.com/Fire-Valley-Birth-Personal-Computer/dp/1937785769/"><em>Fire in the Valley</em>: The Birth and Death of the Personal Computer</a> by Michael Swaine and Paul Freiberger \u2605\u2605\u2605\u2605\u2605</li>
</ul>
<p>If you work in tech, read this book. <a href="2016-reading-list.html#fire-in-the-valley-details">See previously</a></p>
<ul>
<li><a href="https://www.amazon.com/Incerto-Fooled-Randomness-Procrustes-Antifragile/dp/0399590455/"><em>Incerto</em></a> by Nassim Nicholas Taleb \u2605\u2605\u2605\u2605\u2605
<ul>
<li><em>Fooled By Randomness</em></li>
<li><em>The Black Swan</em></li>
<li><em>Antifragile</em></li>
</ul>
</li>
</ul>
<p>The last thing I expected to find this year was yet another author to do a deep-dive into, but Nassim Taleb is my man this year. I picked up Antifragile in February based off of Joe\u2019s glowing recommendation. I had recalled seeing the covers of Fooled By Randomness and The Black Swan in bookstores in recent years, but I glibly assumed that they were of the Malcom Gladwell variety of disposable pop-science / psychology non ficton, full of bluster and anecdote but otherwise lacking in anything concrete. Similar to the genre of business books, but for people who think they\u2019re smarter than people who read business books.</p>
<p>Boy was I wrong.</p>
<p>Full of bluster: yes. Taleb is absurdly bumptious, but in a way that I find endearing. Lacking in content: hardly. The only similarity to cheapie business books is some of the repetitiveness in the arguments being presented, but that\u2019s at best a superficial criticism. I poured through <em>Antifragile</em>, the cumulative argument in the <a href="https://www.amazon.com/Incerto-Fooled-Randomness-Procrustes-Antifragile/dp/0399590455/"><em>Incerto</em></a> series, but the prologue assured me that I wouldn\u2019t need to read the previous three volumes as a prerequisite to grokking the subject matter.</p>
<p>After reading <em>Antifragile</em> I let its ideas stew in my brain for a few months, as I dug through other non-fiction in nearby fields and concepts, particularly by Niall Ferguson. But <em>Antifragile</em> kept on bugging me. I wanted to re-read it.</p>
<p>The fundamental asymmetries that exist between what we think we know and everything else in the universe, and we\u2019re hardwired to misinterpret events. As a species we excel at <em>predicting the past</em> and are generally terrible at keeping score when we make predictions about the future \u2014 and our past losses can always be  summarized in convenient and intelligent-sounding justifications.</p>
<p>Around that same time I started following Nassim Taleb on twitter (worth it) and that he had recently published <a href="https://www.amazon.com/Incerto-Fooled-Randomness-Procrustes-Antifragile/dp/0399590455/"><em>Incerto</em></a> as a handsome box of paperbacks. Sold. Also gave as a gift to a few smartypants people I know.</p>
<p>Presented as a series of essays, anecdotes, and diatribes, with copious footnotes and even a technical essay or two, <em>Fooled By Randomness</em>, <em>The Black Swan</em>, and <em>Antifragile</em> just about made my anti-academic year, and are now prized possessions on my bookshelf. I look forward to finishing <em>Bed of Procrustes</em> this year and to re-reading the series again in the future. I\u2019ve never encountered so many powerful and challenging ideas all in one place. It\u2019s a piece of non-fiction that begs to be read for pleasure over and over again, just like a good sci-fi or fantasy series would. Amazing.</p>
<h3 id="up--down">Up / Down</h3>
<p>Cold, meaningless ratings.</p>
<ul>
<li>
<p>Science Fiction / Fantasy</p>
<ul>
<li><em>The Three Body Problem</em> by Cixin Liu \u2605\u2605\u2605\u2605\u2606</li>
<li><em>The Killing Moon</em> by N.K. Jemisin \u2605\u2605\u2605\u2605\u2606</li>
<li><em>Influx</em> by Daniel Suarez \u2605\u2605\u2605\u2606\u2606</li>
<li><em>Daemon</em> by Daniel Suarez \u2605\u2605\u2605\u2606\u2606</li>
<li><em>Dirk Gently\u2019s Holistic Detective Agency</em> by Douglas Adams \u2605\u2605\u2606\u2606\u2606</li>
</ul>
</li>
<li>
<p>Historical Fiction</p>
<ul>
<li><em>Burr</em> by Gore Vidal \u2605\u2605\u2605\u2606\u2606</li>
</ul>
</li>
<li>
<p>\u201CFiction\u201D section fiction</p>
<ul>
<li><em>Inherent Vice</em> by Thomas Pynchon \u2605\u2605\u2605\u2605\u2605</li>
<li><em>The Illuminatus! Trilogy</em> by Robert Shea and Robert Anton Wilson \u2605\u2605\u2605\u2605\u2606</li>
</ul>
</li>
<li>
<p>Finance / Economics / History</p>
<ul>
<li><em>The (Mis)Behavior of Markets</em> by Beniot Mandlebrot \u2605\u2605\u2605\u2605\u2605</li>
<li><em>Against the Gods: the Remarkable Story of Risk</em> by Peter L. Bernstein \u2605\u2605\u2605\u2605\u2605</li>
<li><em>Superforecasting</em> by Philip E. Tetlock and Dan Gardner \u2605\u2605\u2605\u2605\u2605</li>
<li><em>The Ascent of Money</em> by Niall Feguson \u2605\u2605\u2605\u2605\u2606</li>
<li><em>Civilization</em> by Niall Ferguson \u2605\u2605\u2605\u2606\u2606</li>
<li><em>Sapiens</em> by Yuval Harari \u2605\u2605\u2605\u2606\u2606</li>
<li><em>The Sovereign Individual</em> by James Dale Davidson and Lord William Rees-Mogg \u2605\u2606\u2606\u2606\u2606</li>
<li><em>Digital Gold</em> by Nathaniel Popper \u2605\u2605\u2605\u2606\u2606</li>
</ul>
</li>
<li>
<p>Memoir / Biography</p>
</li>
<li>
<p><em>Barbarian Days</em> by William Finnegan \u2605\u2605\u2605\u2605\u2605</p>
</li>
<li>
<p><em>Kissinger: 1923 - 1969 The Idealist</em> by Niall Ferguson \u2605\u2605\u2605\u2605\u2606</p>
</li>
<li>
<p><em>Learning to Live Finally: the Last Interview</em> by Jacque Derrida \u2605\u2605\u2605\u2606\u2606</p>
</li>
<li>
<p><em>Brian Eno: Visual Music</em> by Christopher Scoates \u2605\u2605\u2605\u2605\u2606</p>
</li>
<li>
<p><em>7 Days in Ohio</em> by Nathan Rabin \u2605\u2605\u2605\u2605\u2606</p>
</li>
</ul>
<ol>
<li>File ownership and content exportability are typically the first rights you wave to operate in someone else\u2019s walled garden. It\u2019s not hard to imagine a future wherein a change to a Terms of Service agreement suddenly applies restrictive licensing to content you\u2019ve created and uploaded. The right to access the bits that make up one\u2019s work is essential. Also note that filesystem access in mobile is a far cry from what it is in the realm of desktop computing, another dark shadow on the horizon for those interested in keeping platforms open and free.</li>
<li>(but above the footnotes)</li>
<li>Rather than having to do all the hard work of choosing what to read, I let my notable internet person Joe McCann do most of the heavy lifting. I borrowed heavily from his <a href="https://medium.com/@joemccann/don-t-read-these-books-in-2016-ee07f1ad8d3e">2015 list</a> and presumably nabbed a few titles off his 2016 shelf as well. Thanks for saving me the effort of finding interesting non-ficton, Joe.</li>
</ol>`,$d={injectedFrontmatter:{}},hs={title:"Why I Read What I Read in 2016",slug:"why-I-read-what-I-read-in-2016.html",layout:"../../layouts/BlogPost.astro"},on="C:/Users/Sam/code/sambreed-dev/src/pages/writing/what-I-read-in-2016.html.md",sn="/writing/what-I-read-in-2016.html";function ms(){return`
## Why I Read What I Read in 2016

January 1, 2017

I tried to read more this year, I really did. I had serious intentions about it, so I did what serious people do, I started keeping a list. Or at least I decided to publish it and keep it up to date. There was a natural satisfaction, an additional dopamine rush of accomplishment, to checking off an title right after I finished it.

> So far this book has no kissing in it at all and is totally boring

<p class="w-100 tr">
\u2014 <a href="https://twitter.com/sambreed/status/736443022850719744" target="__blank">Some idiot on twitter</a>
</p>

<a href="https://twitter.com/sambreed/status/736443022850719744">
  <img src="/img/kissinger.jpg"
    class="w-60-l w-50-m w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows" />
</a>
	
I started on Wunderlist. Probably around the second half of 2015 enough static had built up around the problem to trigger a release, a single spasm of output into list form, tapped diligently onto the keyboard of my iPhone. That list, of things I was currently reading and thing I remembered reading up to that point in the year and books I had already purchased and were waiting for me on my bookshelf, was what source my 2015 post, which I still wrote in a hurry on New Year\u2019s Day 2016.

I kept up the practice of maintaining a reading list in Wunderlist. It unfurled itself ahead of me and pushed the past books forever below the fold. I got ambitious a couple of times and added dozens of titles, so many in fact that the list became a burden. I couldn\u2019t look at it. And the format, for however much it rewarded me with the initial thrill of checking off a title, downplayed the previous items in a way that was a little unsatisfying. I had also taken to using Wunderlist (which I love, btw, despite the criticism) for work task tracking, so it became a thing that now did two things, which is far to many functions for my limbic brain to remember how to reward. So I let that list wither a little until finally I abandoned it entirely.

That\u2019s when I finally re-did my website and by doing a classic thing-you-shouldn\u2019t-do and rolled my own publishing software from scratch. Mostly so I could maintain a list in markdown, which, I kinda did?

Last year\u2019s was a Medium post. Medium is great. I\u2019m mad jellz of what they built. But I like writing in thick app, and I like writing in markdown, and I like being able to keep and move around my own files.<sup>1</sup>

So I once again went through the act of translating my reading history from Wunderlist into a more sharable format. Hence the list you\u2019ll find archived at the bottom of this post.<sup>2</sup>

### How to read this list:

Because decisions are hard, I\u2019ve gone through the trouble of preparing a few variations:

1. The \u201CClassic\u201D list, as maintained in earlier versions of this post. If you don\u2019t like introspective bullshit, skip to this one \u2014 [Classic List](2016-reading-list.html)
2. The Esoteric List, my first thoughts on how to properly formulate a wrap up post that sums up my life this year \u2014 [Esoteric](#so-you-like-books-huh-)
3. Up / down recommendations, my no frills recommendations: read it or skip it \u2014 [Up/Down](#up-down)

I now present these, out of order:

### So you like books, huh?

Fuck man, this was a hell of a year, wasn\u2019t it? I\u2019ve probably said that exact phrase a couple of dozen times in the waning days of 2016. But, fuck, man, wasn\u2019t it tho?

While trying to narrowly avoid [inner emigration](https://en.m.wikipedia.org/wiki/Inner_emigration), I\u2019ve put myself on a full press embargo after the months of frenzy leading up to the US Presidential Election: I\u2019m terrified that the 24 hour news cycle is designed only to distract, and there\u2019s very little to distinguish honest journalism from partisan hackery in the echo chambers we\u2019ve spent the last few years building for ourselves.

So I read some fuckin books.

### Fiction

I read three pieces of fiction this year that stand out. None were published any time recently. They have with very little to do with one another, save for that _Flow My Tears\u2026_ and _Cat\u2019s Cradle_ could loosely be thrown into the Science Fiction section at a used bookstore and no crime would have been committed, and I enjoyed each one of them for entirely different reasons.

* [_Flow My Tears, the Policeman Said_][tears] by Philip K. Dick \u2605\u2605\u2605\u2605\u2606

Philip K. Dick often wrote about  men who suddenly find themselves out of place, where their underlying assumptions about the world are either slowly subverted if not turned entirely upside down. _Flow My Tears\u2026_ is one of the latter.

* [_Cat\u2019s Cradle_: A Novel][cats] by Kurt Vonnegut \u2605\u2605\u2605\u2605\u2605

Kurt Vonnegut knows how to keep things brief and always remembers to include a punchline. And there\u2019s a main character in this book with the same last name as me, go figure why I liked it. You should read this, it\u2019s short and funny and leaves you thinking about big questions about humanity. And Ice-9.

* [_American Gods_][gods] by Neil Gaiman \u2605\u2605\u2605\u2605\u2606

Neil Gaiman is not an author that I\u2019ve ever really gotten into. He seems like a soft spoken British man who spins somewhat boring stories infused with \u201Cmagick\u201D and \u201Cfaeries\u2019 or something like that, right? Either way, I was probably quick to judge Gaiman on his observable aesthetic and film adaptations. American Gods is great.

More importantly, these three works bring into question the notion of identity: in _Flow My Tears\u2026_, the protagonists celebrity identity is stripped away in an instant with no explanation; _Cat\u2019s Cradle_ centers around a group of people failing to understand each other and their means of relating to the world, all while foolishly toying with scientific advances that carry devastating consequences; finally, American Gods serves as modern mythology-cum-Bildungsroman and is about a character literally named \u201CShadow\u201D who\u2019s piecing together his present version of himself from fractured memories of his past life while struggling to separate reality from fantasy or illusion.

Phew, ok, that was a mouthful. On with the rest of the list.

### Non-Fiction

Last year\u2019s wrap up post was assembled in a hurry, and while I certainly had chosen a few vectors in my non-fiction selections, I had of course done it somewhat haphazardly. I largely discovered the things on my 2015 list myself by way of the internet. In 2016 I went about it a bit differently<sup>2</sup> and I\u2019m pleased with the results.

* [_Fire in the Valley_: The Birth and Death of the Personal Computer][fire] by Michael Swaine and Paul Freiberger \u2605\u2605\u2605\u2605\u2605

If you work in tech, read this book. [See previously](2016-reading-list.html#fire-in-the-valley-details)

* [_Incerto_][incerto] by Nassim Nicholas Taleb \u2605\u2605\u2605\u2605\u2605
	* _Fooled By Randomness_
	* _The Black Swan_
	* _Antifragile_

The last thing I expected to find this year was yet another author to do a deep-dive into, but Nassim Taleb is my man this year. I picked up Antifragile in February based off of Joe\u2019s glowing recommendation. I had recalled seeing the covers of Fooled By Randomness and The Black Swan in bookstores in recent years, but I glibly assumed that they were of the Malcom Gladwell variety of disposable pop-science / psychology non ficton, full of bluster and anecdote but otherwise lacking in anything concrete. Similar to the genre of business books, but for people who think they\u2019re smarter than people who read business books.

Boy was I wrong.

Full of bluster: yes. Taleb is absurdly bumptious, but in a way that I find endearing. Lacking in content: hardly. The only similarity to cheapie business books is some of the repetitiveness in the arguments being presented, but that\u2019s at best a superficial criticism. I poured through _Antifragile_, the cumulative argument in the [_Incerto_][incerto] series, but the prologue assured me that I wouldn\u2019t need to read the previous three volumes as a prerequisite to grokking the subject matter.

After reading _Antifragile_ I let its ideas stew in my brain for a few months, as I dug through other non-fiction in nearby fields and concepts, particularly by Niall Ferguson. But _Antifragile_ kept on bugging me. I wanted to re-read it.

The fundamental asymmetries that exist between what we think we know and everything else in the universe, and we\u2019re hardwired to misinterpret events. As a species we excel at _predicting the past_ and are generally terrible at keeping score when we make predictions about the future \u2014 and our past losses can always be  summarized in convenient and intelligent-sounding justifications.

Around that same time I started following Nassim Taleb on twitter (worth it) and that he had recently published [_Incerto_][incerto] as a handsome box of paperbacks. Sold. Also gave as a gift to a few smartypants people I know.

Presented as a series of essays, anecdotes, and diatribes, with copious footnotes and even a technical essay or two, _Fooled By Randomness_, _The Black Swan_, and _Antifragile_ just about made my anti-academic year, and are now prized possessions on my bookshelf. I look forward to finishing _Bed of Procrustes_ this year and to re-reading the series again in the future. I\u2019ve never encountered so many powerful and challenging ideas all in one place. It\u2019s a piece of non-fiction that begs to be read for pleasure over and over again, just like a good sci-fi or fantasy series would. Amazing.

### Up / Down

Cold, meaningless ratings.

* Science Fiction / Fantasy
	* _The Three Body Problem_ by Cixin Liu \u2605\u2605\u2605\u2605\u2606
	* _The Killing Moon_ by N.K. Jemisin \u2605\u2605\u2605\u2605\u2606
	* _Influx_ by Daniel Suarez \u2605\u2605\u2605\u2606\u2606
	* _Daemon_ by Daniel Suarez \u2605\u2605\u2605\u2606\u2606
	* _Dirk Gently\u2019s Holistic Detective Agency_ by Douglas Adams \u2605\u2605\u2606\u2606\u2606

* Historical Fiction
	* _Burr_ by Gore Vidal \u2605\u2605\u2605\u2606\u2606

* \u201CFiction\u201D section fiction
	* _Inherent Vice_ by Thomas Pynchon \u2605\u2605\u2605\u2605\u2605
	* _The Illuminatus! Trilogy_ by Robert Shea and Robert Anton Wilson \u2605\u2605\u2605\u2605\u2606

* Finance / Economics / History
	* _The (Mis)Behavior of Markets_ by Beniot Mandlebrot \u2605\u2605\u2605\u2605\u2605
	* _Against the Gods: the Remarkable Story of Risk_ by Peter L. Bernstein \u2605\u2605\u2605\u2605\u2605
	* _Superforecasting_ by Philip E. Tetlock and Dan Gardner \u2605\u2605\u2605\u2605\u2605
	* _The Ascent of Money_ by Niall Feguson \u2605\u2605\u2605\u2605\u2606
	* _Civilization_ by Niall Ferguson \u2605\u2605\u2605\u2606\u2606
	* _Sapiens_ by Yuval Harari \u2605\u2605\u2605\u2606\u2606
	* _The Sovereign Individual_ by James Dale Davidson and Lord William Rees-Mogg \u2605\u2606\u2606\u2606\u2606
	* _Digital Gold_ by Nathaniel Popper \u2605\u2605\u2605\u2606\u2606

* Memoir / Biography
 * _Barbarian Days_ by William Finnegan \u2605\u2605\u2605\u2605\u2605
 * _Kissinger: 1923 - 1969 The Idealist_ by Niall Ferguson \u2605\u2605\u2605\u2605\u2606
 * _Learning to Live Finally: the Last Interview_ by Jacque Derrida \u2605\u2605\u2605\u2606\u2606
 * _Brian Eno: Visual Music_ by Christopher Scoates \u2605\u2605\u2605\u2605\u2606
 * _7 Days in Ohio_ by Nathan Rabin \u2605\u2605\u2605\u2605\u2606


1. File ownership and content exportability are typically the first rights you wave to operate in someone else\u2019s walled garden. It\u2019s not hard to imagine a future wherein a change to a Terms of Service agreement suddenly applies restrictive licensing to content you\u2019ve created and uploaded. The right to access the bits that make up one\u2019s work is essential. Also note that filesystem access in mobile is a far cry from what it is in the realm of desktop computing, another dark shadow on the horizon for those interested in keeping platforms open and free.
2. (but above the footnotes)
3. Rather than having to do all the hard work of choosing what to read, I let my notable internet person Joe McCann do most of the heavy lifting. I borrowed heavily from his [2015 list](https://medium.com/@joemccann/don-t-read-these-books-in-2016-ee07f1ad8d3e) and presumably nabbed a few titles off his 2016 shelf as well. Thanks for saving me the effort of finding interesting non-ficton, Joe.


[tears]: https://www.amazon.com/Flow-My-Tears-Policeman-Said/dp/0547572255/
[cats]: https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut/dp/038533348X/
[gods]: https://www.amazon.com/American-Gods-Tenth-Anniversary-Novel/dp/0062472100/
[fire]: https://www.amazon.com/Fire-Valley-Birth-Personal-Computer/dp/1937785769/
[incerto]: https://www.amazon.com/Incerto-Fooled-Randomness-Procrustes-Antifragile/dp/0399590455/
`}function fs(){return ps}function ua(){return[{depth:2,slug:"why-i-read-what-i-read-in-2016",text:"Why I Read What I Read in 2016"},{depth:3,slug:"how-to-read-this-list",text:"How to read this list:"},{depth:3,slug:"so-you-like-books-huh",text:"So you like books, huh?"},{depth:3,slug:"fiction",text:"Fiction"},{depth:3,slug:"non-fiction",text:"Non-Fiction"},{depth:3,slug:"up--down",text:"Up / Down"}]}function Md(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ua()}async function rn(){let{layout:t,...e}=hs;e.file=on,e.url=sn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":ps});return p(T,{file:on,url:sn,content:e,frontmatter:e,headings:ua(),rawContent:ms,compiledContent:fs,"server:root":!0,children:a})}rn[Symbol.for("astro.needsHeadRendering")]=!1;var gs=Object.freeze(Object.defineProperty({__proto__:null,_internal:$d,frontmatter:hs,file:on,url:sn,rawContent:ms,compiledContent:fs,getHeadings:ua,getHeaders:Md,Content:rn,default:rn},Symbol.toStringTag,{value:"Module"})),ys=`<h1 id="2016-reading-list">2016 Reading List</h1>
<ol class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> How to Make Sense of Any Mess \u2014 Abby Covert</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Daemon \u2014 Daniel Suarez\u2020</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Burr \u2013 Gore Vidal <sup>\u2020</sup></li>
<li class="task-list-item"><input type="checkbox" checked disabled> Fire in the Valley \u2013 Michael Swaine and Paul Freiberger</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Antifragile \u2013 Nassim Nicholas Taleb</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The Ascent of Money \u2013 Niall Feguson</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The (Mis)Behavior of Markets \u2013 Beniot Mandelbrot</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Barbarian Days \u2013 William Finnegan</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Sapiens \u2013 Yuval Harari</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Learning to Live Finally: The Last Interview \u2013 Jacques Derrida</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The Killing Moon \u2013 N.K. Jemisin</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Dirk Gently\u2019s Holistic Detective Agency \u2013 Douglas Adams</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Flow My Tears, the Policeman Said \u2013 Philip K. Dick</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Cat\u2019s Cradle \u2013 Kurt Vonnegut</li>
<li class="task-list-item"><input type="checkbox" checked disabled> American Gods \u2013 Neil Gaiman</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Influx \u2014 Daniel Suarez\u2020</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The Illuminatus! Trilogy \u2014 Robert Shea and Robert Anton Wilson</li>
<li class="task-list-item"><input type="checkbox" disabled> <del>Kissinger: 1923-1969 The Idealist \u2014 Niall Ferguson</del></li>
<li class="task-list-item"><input type="checkbox" checked disabled> Brian Eno: Visual Music \u2014 Christopher Scoates</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The Three-Body Problem \u2014 Cixin Liu</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Civilization \u2014 Niall Ferguson</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Inherent Vice \u2014 Thomas Pynchon\u2020</li>
<li class="task-list-item"><input type="checkbox" checked disabled> 7 Days In Ohio \u2014 Nathan Rabin</li>
<li class="task-list-item"><input type="checkbox" disabled> Time Travel \u2014 James Gleick</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Against the Gods: The Remarkable Story of Risk \u2014 Peter L. Bernstein</li>
<li class="task-list-item"><input type="checkbox" disabled> <del>The Sovereign Individual \u2014 James Dale Davidson and Lord William Rees-Mogg</del></li>
<li class="task-list-item"><input type="checkbox" checked disabled> Fooled By Randomness \u2014 Nassim Nicholas Taleb</li>
<li class="task-list-item"><input type="checkbox" checked disabled> The Black Swan \u2014 Nassim Nicholas Taleb</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Superforecasting \u2013 Philip E. Tetlock and Dan Gardner</li>
<li class="task-list-item"><input type="checkbox" disabled> Digital Gold \u2013 Nathaniel Popper</li>
</ol>
<small>
<ul>
<li><del>Strikethrough</del> <em>Abandoned and back on the shelf</em> \u{1F645}\u200D</li>
<li><input type="checkbox"> In Progress \u{1F647}</li>
<li><input type="checkbox" checked disabled> Finished! \u{1F481}\u200D</li>
</ul>
</small>
<h3 id="addendum">Addendum</h3>
<details>
  <summary>Fire in the Valley</summary>
  <a name="fire-in-the-valley"></a>
  <p>I often think about what I missed by not being \u201Cin tech\u201D (or rather \u201Cin the Bay Area\u201D) when I was a bit younger. I graduated high school in 2004, meaning that if I had my shit together I could have gotten the fuck out of Tampa and high-tailed it to the west coast just in time to be on the ground floor to something cool. I had very little idea how much location factors in to participating in the digital economy.</p>
  <p>Instead I went to college and said \u201Cfuck computers."</p>
  <p>This book isn't about the years after the first dotcom bubble, it's about an earlier time when fortunes were made just as quickly, but there was no internet to fuel the personal computer revolution. Just a bunch of hard working, often scheming, nerds and true believers making the hardware and the fabulists selling a dream of a digital future. They created a scene where there was none, and seemed to have fun doing it. They probably weren't self-aware of that the minutia of their day to day "work stuff" becoming the geeky history of how personal computers helped spawn the modern tech industry.</p>
  <p>I rarely admire or envy baby boomers, but the people and events described in this book make a clear exception to that policy.</p>
  <p>After high school, I knew I was \u201Cgood\u201D with computers\u2014whatever that means, I'm still trying to find out\u2014 but really I just lacked the vision to understand that I could hustle my way into tech if I wanted to. I didn\u2019t manage to do that until 2009, and only then after <i>deciding to</i> at the end of 2008.
  </p><p>Recently I read the [New Yorker profile about Sam Altman](http://www.newyorker.com/magazine/2016/10/10/sam-altmans-manifest-destiny) and couldn\u2019t help but feel the familiar hot sting of envy even thinking about the <i>scene</i> at Stanford in 2005. Right place at the right time, the way I figure it.</p>
  <p>Like Steve Jobs and Steve Wozniack at the Homebrew Computing Club\u2014I can\u2019t read about that and not wish for that type of kismet in my life.</p>
  <p>This book stirs up some strong feels.</p>
</details>
<details>
<summary>Barbarian Days</summary>
<p>I didn't grow up around surfing, despite being somewhat near the beach. The Gulf Coast is known for its calm white-sand, warm-water beaches. Not really a place for good waves. The Atlantic coast of Florida is a little better, but this is just the type of thing that's elusive for kids in the suburbs. I was lucky enough to have a mom willing to drive me an hour to the skatepark (and I still skate to this day, so it wasn't for nothing), but driving 2 or 3 hours to the opposite side of the state to try out a new board sport wasn't in the cards. Surfing was something that only happened in the fictional Saved by the Bell universe of Southern California.</p>
<p>Continuing on a theme, this feels like another nostalgic take on a subject (and time) that passed me by. It's too late for me to commit to another brutal, dangerous hobby. My wife agrees with me.</p>
<p>Sometimes I'm in awe of what a trip books are: it isn't my expression, but <b>the notion that you stare at a bunch of symbols on a page and experience vivid, emotional, waking hallucinations with zero physical effort or deleterious side-effects is fucking flabbergasting.</b></p>
<p>This book places you in the water, on the board. It makes me pine for those types of memories, but I'm happy to share a sliver of the experience without getting wet.</p>
</details>
<p>Related: <a href="https://medium.com/@sambreed/2015-books-504cb79ac5c0#.f8izs5mpq">2015 reading list</a></p>`,Hd={injectedFrontmatter:{}},ws={title:"2016 Reading List",slug:"2016-reading-list.html",description:"A non-exhaustive list of the books I'm reading in 2016",layout:"../../layouts/BlogPost.astro"},ln="C:/Users/Sam/code/sambreed-dev/src/pages/writing/2016-reading-list.html.md",cn="/writing/2016-reading-list.html";function bs(){return`
# 2016 Reading List

1. [x] How to Make Sense of Any Mess \u2014 Abby Covert
1. [x] Daemon \u2014 Daniel Suarez\u2020
1. [x] Burr \u2013 Gore Vidal <sup>&dagger;</sup>
1. [x] Fire in the Valley \u2013 Michael Swaine and Paul Freiberger 
1. [x] Antifragile \u2013 Nassim Nicholas Taleb
1. [x] The Ascent of Money \u2013 Niall Feguson
1. [x] The (Mis)Behavior of Markets \u2013 Beniot Mandelbrot
1. [x] Barbarian Days \u2013 William Finnegan
1. [x] Sapiens \u2013 Yuval Harari
1. [x] Learning to Live Finally: The Last Interview \u2013 Jacques Derrida
1. [x] The Killing Moon \u2013 N.K. Jemisin
1. [x] Dirk Gently's Holistic Detective Agency \u2013 Douglas Adams
1. [x] Flow My Tears, the Policeman Said \u2013 Philip K. Dick
1. [x] Cat's Cradle \u2013 Kurt Vonnegut
1. [x] American Gods \u2013 Neil Gaiman
1. [x] Influx \u2014 Daniel Suarez\u2020
1. [x] The Illuminatus! Trilogy \u2014 Robert Shea and Robert Anton Wilson
1. [ ] ~~Kissinger: 1923-1969 The Idealist \u2014 Niall Ferguson~~
1. [x] Brian Eno: Visual Music \u2014 Christopher Scoates
1. [x] The Three-Body Problem \u2014 Cixin Liu
1. [x] Civilization \u2014 Niall Ferguson
1. [x] Inherent Vice \u2014 Thomas Pynchon\u2020
1. [x] 7 Days In Ohio \u2014 Nathan Rabin
1. [ ] Time Travel \u2014 James Gleick
1. [x] Against the Gods: The Remarkable Story of Risk \u2014 Peter L. Bernstein
1. [ ] ~~The Sovereign Individual \u2014 James Dale Davidson and Lord William Rees-Mogg~~
1. [x] Fooled By Randomness \u2014 Nassim Nicholas Taleb
1. [x] The Black Swan \u2014 Nassim Nicholas Taleb
1. [x] Superforecasting \u2013 Philip E. Tetlock and Dan Gardner
1. [ ] Digital Gold \u2013 Nathaniel Popper

<small>

- ~~Strikethrough~~ _Abandoned and back on the shelf_ \u{1F645}\u200D
- <input type="checkbox" /> In Progress \u{1F647}
- <input type="checkbox" checked="checked" disabled /> Finished! \u{1F481}\u200D

</small>


### Addendum

<details>
  <summary>Fire in the Valley</summary>
  <a name="fire-in-the-valley"></a>

  <p>I often think about what I missed by not being \u201Cin tech\u201D (or rather \u201Cin the Bay Area\u201D) when I was a bit younger. I graduated high school in 2004, meaning that if I had my shit together I could have gotten the fuck out of Tampa and high-tailed it to the west coast just in time to be on the ground floor to something cool. I had very little idea how much location factors in to participating in the digital economy.</p>

  <p>Instead I went to college and said \u201Cfuck computers."</p>

  <p>This book isn't about the years after the first dotcom bubble, it's about an earlier time when fortunes were made just as quickly, but there was no internet to fuel the personal computer revolution. Just a bunch of hard working, often scheming, nerds and true believers making the hardware and the fabulists selling a dream of a digital future. They created a scene where there was none, and seemed to have fun doing it. They probably weren't self-aware of that the minutia of their day to day "work stuff" becoming the geeky history of how personal computers helped spawn the modern tech industry.</p>

  <p>I rarely admire or envy baby boomers, but the people and events described in this book make a clear exception to that policy.</p>

  <p>After high school, I knew I was \u201Cgood\u201D with computers\u2014whatever that means, I'm still trying to find out\u2014 but really I just lacked the vision to understand that I could hustle my way into tech if I wanted to. I didn\u2019t manage to do that until 2009, and only then after <i>deciding to</i> at the end of 2008.

  <p>Recently I read the [New Yorker profile about Sam Altman](http://www.newyorker.com/magazine/2016/10/10/sam-altmans-manifest-destiny) and couldn\u2019t help but feel the familiar hot sting of envy even thinking about the <i>scene</i> at Stanford in 2005. Right place at the right time, the way I figure it.</p>

  <p>Like Steve Jobs and Steve Wozniack at the Homebrew Computing Club\u2014I can\u2019t read about that and not wish for that type of kismet in my life.</p>

  <p>This book stirs up some strong feels.</p>
</details>

<details>
<summary>Barbarian Days</summary>
<p>I didn't grow up around surfing, despite being somewhat near the beach. The Gulf Coast is known for its calm white-sand, warm-water beaches. Not really a place for good waves. The Atlantic coast of Florida is a little better, but this is just the type of thing that's elusive for kids in the suburbs. I was lucky enough to have a mom willing to drive me an hour to the skatepark (and I still skate to this day, so it wasn't for nothing), but driving 2 or 3 hours to the opposite side of the state to try out a new board sport wasn't in the cards. Surfing was something that only happened in the fictional Saved by the Bell universe of Southern California.</p>

<p>Continuing on a theme, this feels like another nostalgic take on a subject (and time) that passed me by. It's too late for me to commit to another brutal, dangerous hobby. My wife agrees with me.</p>

<p>Sometimes I'm in awe of what a trip books are: it isn't my expression, but <b>the notion that you stare at a bunch of symbols on a page and experience vivid, emotional, waking hallucinations with zero physical effort or deleterious side-effects is fucking flabbergasting.</b></p>

<p>This book places you in the water, on the board. It makes me pine for those types of memories, but I'm happy to share a sliver of the experience without getting wet.</p>
</details>

Related: [2015 reading list](https://medium.com/@sambreed/2015-books-504cb79ac5c0#.f8izs5mpq)
`}function Ds(){return ys}function da(){return[{depth:1,slug:"2016-reading-list",text:"2016 Reading List"},{depth:3,slug:"addendum",text:"Addendum"}]}function Od(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),da()}async function un(){let{layout:t,...e}=ws;e.file=ln,e.url=cn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":ys});return p(T,{file:ln,url:cn,content:e,frontmatter:e,headings:da(),rawContent:bs,compiledContent:Ds,"server:root":!0,children:a})}un[Symbol.for("astro.needsHeadRendering")]=!1;var vs=Object.freeze(Object.defineProperty({__proto__:null,_internal:Hd,frontmatter:ws,file:ln,url:cn,rawContent:bs,compiledContent:Ds,getHeadings:da,getHeaders:Od,Content:un,default:un},Symbol.toStringTag,{value:"Module"})),ks=`<h1 id="2017-reading-list">2017 Reading List</h1>
<ol class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/930828718">Digital Gold</a> \u2013 Nathaniel Popper</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/949639536">Bed of Procrustes</a> \u2013 Nassim Taleb</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/960457556">Machine Learning</a> \u2013 Ethem Alpaydin</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/868280617">Mathematics and the Imagination</a> \u2013 Edward Kasner and James Newman</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/989979099">Snow Crash</a> \u2013 Neil Stephenson</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/699737863">Capitalist Realism</a> \u2013 Mark Fisher</li>
<li class="task-list-item"><input type="checkbox" disabled> <del><a href="http://www.worldcat.org/oclc/957021213">Being a Beast : adventures across the species divide</a> \u2013 Charles Foster</del></li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/950976674">On the Move</a> \u2013 Oliver Sacks</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/468447420">The Open Society &#x26; Its Enemies</a> \u2013 Karl Popper</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/982257490">Neuroplasticity</a> \u2013 Moheb Costandi</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/817924069">Universe of Consciousness</a> \u2013 Gerald M Edelman &#x26; Giulio Tononi</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/962005553">On Trails</a> \u2013 Robert Moor</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/900727970">Lawrence in Arabia</a> \u2013 Scott Anderson</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/989503369">Americanah</a> \u2013 Chimamanda Ngozi Adichie</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/966392652">Time Travel</a> \u2013 James Gleick</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/964793272">Hallucinations</a> \u2013 Oliver Sacks</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/981550824">The Handmaid\u2019s Tale</a> \u2013 Margaret Atwood</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/695702570">The Origin of Wealth</a> \u2013 Eric D. Beinhocker</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/51998481">Real Estate Investing Loopholes</a> \u2013 Diane Kennedy and Garret Sutton</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/951153646">A Random Walk Down Wall Street</a> \u2013 Burton G. Malkiel</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/949639536">Antifragile</a> \u2013 Nassim Taleb (re-read from 2016\u2019s list)</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/925332622">Debugging Teams</a> \u2013 Brian W. Fitzpatrick and Ben Collins-Sussman</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/989085713">Hands-On Machine Learning with Scikit-Learn &#x26; TensorFlow</a> \u2013 Aur\xE9lien G\xE9ron</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/992492753">Tragic Design</a> \u2013 Jonathan Shariat and Cynthia Savard Saucier</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/248444643">Barbarians at the Gate</a> \u2013 Bryan Burrough abd John Helyar</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/717738730">Orientalism</a> \u2013 Edward W Said</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/981123286">How Money Got Free</a> \u2013 Brian Patrick Eha</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/945232398">Why Information Grows</a> \u2013 C\xE9sar Hildago</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/615926697">Hackers</a> \u2013 Steven Levy</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/750541259">G\xF6del, Escher, Bach: an Eternal Golden Braid</a> \u2013 Douglas R. Hofstadter</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/695866330">The Cathedral and the Bazaar</a> \u2013 Eric S. Raymond</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/946058566">Dune</a> \u2013 Frank Herbert</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/72799929">Decoding the Universe</a> \u2013 Charles Seife</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://www.worldcat.org/oclc/926699676">Code</a> \u2013 Charles Petzold</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/934422966">The Soul of a New Machine</a> \u2013 Tracy Kidder</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://www.worldcat.org/oclc/864772458">Payback</a> \u2013 Margaret Atwood</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/1003168303">We Were 8 Years in Power</a> \u2013 Ta-Nehisi Coates</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/64685014">One Hundred Years of Solitude</a> \u2013 Gabriel Garcia M\xE1rquez</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/971922979">I Contain Multitudes</a> \u2013 Ed Young</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://www.worldcat.org/oclc/778420584">Mean Genes</a> \u2013 Terry Burnham and Jay Phelan</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/944380361">The Wisest One in the Room</a> \u2013 Thomas Gilovich and Lee Ross</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/840013131">The Timeless Way of Building</a> \u2013 Christopher Alexander</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/943261694">Creativity, Inc.</a> \u2013 Ed Catmull</li>
<li class="task-list-item"><input type="checkbox" disabled> <a href="http://www.worldcat.org/oclc/846915197">Still Life With Woodpecker</a> \u2013 Tom Robbins</li>
<li class="task-list-item"><input type="checkbox" checked disabled> <a href="http://www.worldcat.org/oclc/913844897">Philip K. Dick: The Last Interview</a> \u2013 Philip K. Dick</li>
</ol>
<small>
<ul>
<li><del>Strikethrough</del> <em>Abandoned and back on the shelf</em> \u{1F645}\u200D</li>
<li><input type="checkbox"> In Progress \u{1F647}</li>
<li><input type="checkbox" checked disabled> Finished! \u{1F481}\u200D</li>
</ul>
</small>`,Ld={injectedFrontmatter:{}},xs={title:"2017 Reading List",slug:"2017-reading-list.html",description:"A non-exhaustive list of the books I'm reading in 2017",layout:"../../layouts/BlogPost.astro"},dn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/2017-reading-list.html.md",pn="/writing/2017-reading-list.html";function Cs(){return`
# 2017 Reading List

1. [x] [Digital Gold](http://www.worldcat.org/oclc/930828718) \u2013 Nathaniel Popper
1. [x] [Bed of Procrustes](http://www.worldcat.org/oclc/949639536) \u2013 Nassim Taleb
1. [x] [Machine Learning](http://www.worldcat.org/oclc/960457556) \u2013 Ethem Alpaydin
1. [ ] [Mathematics and the Imagination](http://www.worldcat.org/oclc/868280617) \u2013 Edward Kasner and James Newman
1. [x] [Snow Crash](http://www.worldcat.org/oclc/989979099) \u2013 Neil Stephenson
1. [x] [Capitalist Realism](http://www.worldcat.org/oclc/699737863) \u2013 Mark Fisher
1. [ ] ~~[Being a Beast : adventures across the species divide](http://www.worldcat.org/oclc/957021213) \u2013 Charles Foster~~
1. [x] [On the Move](http://www.worldcat.org/oclc/950976674) \u2013 Oliver Sacks
1. [ ] [The Open Society & Its Enemies](http://www.worldcat.org/oclc/468447420) \u2013 Karl Popper
1. [x] [Neuroplasticity](http://www.worldcat.org/oclc/982257490) \u2013 Moheb Costandi
1. [x] [Universe of Consciousness](http://www.worldcat.org/oclc/817924069) \u2013 Gerald M Edelman & Giulio Tononi
1. [x] [On Trails](http://www.worldcat.org/oclc/962005553) \u2013 Robert Moor
1. [x] [Lawrence in Arabia](http://www.worldcat.org/oclc/900727970) \u2013 Scott Anderson
1. [ ] [Americanah](http://www.worldcat.org/oclc/989503369) \u2013 Chimamanda Ngozi Adichie
1. [x] [Time Travel](http://www.worldcat.org/oclc/966392652) \u2013 James Gleick
1. [x] [Hallucinations](http://www.worldcat.org/oclc/964793272) \u2013 Oliver Sacks
1. [ ] [The Handmaid\u2019s Tale](http://www.worldcat.org/oclc/981550824) \u2013 Margaret Atwood
1. [x] [The Origin of Wealth](http://www.worldcat.org/oclc/695702570) \u2013 Eric D. Beinhocker
1. [x] [Real Estate Investing Loopholes](http://www.worldcat.org/oclc/51998481) \u2013 Diane Kennedy and Garret Sutton
1. [x] [A Random Walk Down Wall Street](http://www.worldcat.org/oclc/951153646) \u2013 Burton G. Malkiel
1. [x] [Antifragile](http://www.worldcat.org/oclc/949639536) \u2013 Nassim Taleb (re-read from 2016's list)
1. [x] [Debugging Teams](http://www.worldcat.org/oclc/925332622) \u2013 Brian W. Fitzpatrick and Ben Collins-Sussman
1. [ ] [Hands-On Machine Learning with Scikit-Learn & TensorFlow](http://www.worldcat.org/oclc/989085713) \u2013 Aur\xE9lien G\xE9ron
1. [x] [Tragic Design](http://www.worldcat.org/oclc/992492753) \u2013 Jonathan Shariat and Cynthia Savard Saucier
1. [ ] [Barbarians at the Gate](http://www.worldcat.org/oclc/248444643) \u2013 Bryan Burrough abd John Helyar
1. [x] [Orientalism](http://www.worldcat.org/oclc/717738730) \u2013 Edward W Said
1. [x] [How Money Got Free](http://www.worldcat.org/oclc/981123286) \u2013 Brian Patrick Eha
1. [x] [Why Information Grows](http://www.worldcat.org/oclc/945232398) \u2013 C\xE9sar Hildago
1. [x] [Hackers](http://www.worldcat.org/oclc/615926697) \u2013 Steven Levy
1. [ ] [G\xF6del, Escher, Bach: an Eternal Golden Braid](http://www.worldcat.org/oclc/750541259) \u2013 Douglas R. Hofstadter
1. [x] [The Cathedral and the Bazaar](http://www.worldcat.org/oclc/695866330) \u2013 Eric S. Raymond
1. [x] [Dune](http://www.worldcat.org/oclc/946058566) \u2013 Frank Herbert
1. [x] [Decoding the Universe](http://www.worldcat.org/oclc/72799929) \u2013 Charles Seife
1. [x] [Code](https://www.worldcat.org/oclc/926699676) \u2013 Charles Petzold
1. [x] [The Soul of a New Machine](http://www.worldcat.org/oclc/934422966) \u2013 Tracy Kidder
1. [x] [Payback](https://www.worldcat.org/oclc/864772458) \u2013 Margaret Atwood
1. [x] [We Were 8 Years in Power](http://www.worldcat.org/oclc/1003168303) \u2013 Ta-Nehisi Coates
1. [ ] [One Hundred Years of Solitude](http://www.worldcat.org/oclc/64685014) \u2013 Gabriel Garcia M\xE1rquez
1. [x] [I Contain Multitudes](http://www.worldcat.org/oclc/971922979) \u2013 Ed Young
1. [x] [Mean Genes](https://www.worldcat.org/oclc/778420584) \u2013 Terry Burnham and Jay Phelan
1. [x] [The Wisest One in the Room](http://www.worldcat.org/oclc/944380361) \u2013 Thomas Gilovich and Lee Ross
1. [ ] [The Timeless Way of Building](http://www.worldcat.org/oclc/840013131) \u2013 Christopher Alexander
1. [x] [Creativity, Inc.](http://www.worldcat.org/oclc/943261694) \u2013 Ed Catmull
1. [ ] [Still Life With Woodpecker](http://www.worldcat.org/oclc/846915197) \u2013 Tom Robbins
1. [x] [Philip K. Dick: The Last Interview](http://www.worldcat.org/oclc/913844897) \u2013 Philip K. Dick

<small>

- ~~Strikethrough~~ _Abandoned and back on the shelf_ \u{1F645}\u200D
- <input type="checkbox" /> In Progress \u{1F647}
- <input type="checkbox" checked="checked" disabled /> Finished! \u{1F481}\u200D

</small>
`}function Fs(){return ks}function pa(){return[{depth:1,slug:"2017-reading-list",text:"2017 Reading List"}]}function qd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),pa()}async function hn(){let{layout:t,...e}=xs;e.file=dn,e.url=pn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":ks});return p(T,{file:dn,url:pn,content:e,frontmatter:e,headings:pa(),rawContent:Cs,compiledContent:Fs,"server:root":!0,children:a})}hn[Symbol.for("astro.needsHeadRendering")]=!1;var Is=Object.freeze(Object.defineProperty({__proto__:null,_internal:Ld,frontmatter:xs,file:dn,url:pn,rawContent:Cs,compiledContent:Fs,getHeadings:pa,getHeaders:qd,Content:hn,default:hn},Symbol.toStringTag,{value:"Module"})),Es=`<p>I\u2019ve committed to blogging more while also paying down my open tab debt. Once a month, I\u2019ll use the Session Buddy extension to export my current tabs on my personal computer.</p>
<ul>
<li><a href="https://nenadmarkus.com/p/picojs-intro/">pico.js, a face-detection library in 200 lines of JavaScript</a>
<ul>
<li>a few years old already, but things like this never cease to amaze me. When I was learning JavaScript, I would joke with my colleagues about far-fetched behavior like realtime face detection being done in JS, so to see it laid out so tersely makes me excited for the future.</li>
</ul>
</li>
<li><a href="https://architecturenotes.co/">Architecture Notes \u2014 System Design &#x26; Software Architectures Explained</a>
<ul>
<li>the write-up here about Redis made it into my social feeds. I\u2019m a sucker for diagrams and short paragraphs and database internals. I love systems, and I love Redis, despite having not used it for anything recently. Early on at Quick Left, I built a number of client projects that used Redis for caching or lightweight storage. I even made the mistake of trying to build an entire app with a Redis backend until it collapsed under it\u2019s own schema-less weight.</li>
</ul>
</li>
<li><a href="https://shoelace.style/">Shoelace.style</a>
<ul>
<li>I really, really don\u2019t want web components to be vaporware. Shoelace seems like a deliberate step in the right direction: making web-native components that are compatible with React (because that\u2019s where the developers are). Tools should embrace where developers are and help make them better at their jobs.</li>
<li>The Next.js integration looks ugly today, but I\u2019m willing to bet that it improves over time.</li>
</ul>
</li>
<li><a href="https://webhooks.fyi/">Webhooks.fyi</a>
<ul>
<li>filed under: essential information. h/t to <a href="https://progrium.com">Jeff Lindsay</a> for inventing webhooks in the first place.</li>
</ul>
</li>
<li><a href="http://blog.pkh.me/p/33-deconstructing-be%CC%81zier-curves.html">Deconstructing B\xE9zier curves</a>
<ul>
<li>tutorials about once-byzantine concepts are my jam. I could collect these infinitely.</li>
<li>Two more links fell out of this one:
<ul>
<li><a href="http://blog.pkh.me/p/29-the-most-useful-math-formulas.html">http://blog.pkh.me/p/29-the-most-useful-math-formulas.html</a></li>
<li><a href="https://en.m.wikipedia.org/wiki/De_Casteljau%27s_algorithm">https://en.m.wikipedia.org/wiki/De_Casteljau%27s_algorithm</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="https://stratechery.com/2022/instagram-tiktok-and-the-three-trends/">Instagram, TikTok, and the Three Trends \u2013 Stratechery by Ben Thompson</a>
<ul>
<li>too long to summarize, but tldr social media destroyed the traditional media and now the next generation of apps are reshaping things again; we\u2019re all living through the consequences of it and won\u2019t know what trends matter for another decade.</li>
</ul>
</li>
<li><a href="https://cannedtxt.com/">CannedTXT</a>
<ul>
<li>widely shared, but a smart little source of \u201Ccanned responses.\u201D It\u2019s tough to be terse, polite, and direct in writing without a lot of practice; this is a masterclass.</li>
</ul>
</li>
<li><a href="https://druriley.com/100-rules-2020/">100 Rules \u2014 Personal Philosophy - Dru Riley</a>
<ul>
<li>aphorisms are another fun thing to collect. I\u2019d never thought of keeping a running list of the good ones.</li>
</ul>
</li>
<li><a href="https://matt-rickard.com/the-unreasonable-effectiveness-of-makefiles">The Unreasonable Effectiveness of Makefiles</a>
<ul>
<li>I\u2019m on the fence about this hypothesis. At Credit Karma, I put Makefiles in lots of my projects because it seemed like a universal solution.</li>
<li>I\u2019ve been using linux since I was a teenager, so the idea of running <code>make</code> in a project and just having it do the right thing appealed to me.</li>
<li>In practice, I found it to be less than ideal. Make syntax is \u201Cyet another\u201D technology to weave into a project that\u2019s not already going to use it.</li>
<li>Using it to invoke npm commands and interface to other build and test scripts was fine, but it didn\u2019t remove any complexity. Rather, it added complexity in exchange for very little utility.</li>
<li>The only correct take on <code>make</code> is that there\u2019s really only <em>one</em> Makefile. Every Makefile you encounter has been copypasta\u2019d from the original.</li>
</ul>
</li>
<li><a href="https://www.patterns.dev/">Patterns.dev - Modern Web App Design Patterns</a>
<ul>
<li>huge collection of design patterns. Materials like this would have been extremely effective when I was learning how to build apps. Reading Stoyan Stefanov\u2019s JavaScript Patterns book was an eye-opening experience for me 10 years ago, so it\u2019s heartening to see that tradition continued.</li>
</ul>
</li>
<li><a href="https://software-engineering-books.com/">Software Engineering Books</a>
<ul>
<li>In a similar vein to the previous tab, here is a curated reading list. I\u2019ve read a number of these already and the remainder are on the list.</li>
<li>I\u2019ve already finished The Personal MBA because it was the only book listed in two different categories. It was dense, which is the only compliment for a business book, which tend to be 2 paragraphs worth of ideas spread across 100 pages of filler.</li>
</ul>
</li>
<li><a href="https://weh.wtf/34-blockchain-projects.html">I Looked Into 34 Top Real-World Blockchain Projects So You Don\u2019t Have To | Niko\u2019s Blog</a>
<ul>
<li>This is tongue-in-cheek because the \u201Clist\u201D of 34 companies comes from an unknown media outlet and the original author is obviously pro crypto.</li>
<li>The original piece could very well be a link farming or affiliate marketing situation, and if you pick a year-old post on a site like that, you\u2019d be shocked if the majority of the links weren\u2019t dead or redirects.</li>
<li>But yeah, crypto has so far only been provably good at creating exchanges to trade crypto, which exist to get market makers (the shills) and retail investors (the marks) to trade crypto. QED.</li>
</ul>
</li>
<li><a href="https://www.worksinprogress.co/issue/the-maintenance-race/">The Maintenance Race</a>
<ul>
<li>Long read by Stewart Brand. I recently finished reading his biography, Whole Earth, so Brand has been top of mind lately.</li>
<li>My only notes from the biography is that he occasionally seemed like a jerk, but I\u2019m glad they left that stuff in, because honestly who\u2019s <em>not</em> a jerk every now and then.</li>
<li>Anyway this is an interesting story and re-enforces an aphorism from Nassim Taleb that I\u2019m fond of: \u201Cprepare for the worst, the best will work itself out\u201D.</li>
<li><a href="https://thebrowser.com/">The Browser</a> this is a paid newsletter that I don\u2019t pay for but seemed interesting, Brand tweeted about it having run a blerb about the article.</li>
</ul>
</li>
<li><a href="https://supabase.com/blog/2022/07/18/seen-by-in-postgresql">Implementing \u201Cseen by\u201D functionality with Postgres</a>
<ul>
<li>smarties over at supabase demonstrating hyperloglog tables in postgres</li>
</ul>
</li>
<li><a href="https://github.com/codecrafters-io/build-your-own-x#build-your-own-3d-renderer">codecrafters-io/build-your-own-x: Master programming by recreating your favorite technologies from scratch.</a>
<ul>
<li>yet-another Rosetta Stone for building a wide variety of software projects</li>
</ul>
</li>
<li><a href="https://commoncog.com/g/burnout/">Burnout Guide: Symptoms, Causes, and Prevention - Commoncog</a>
<ul>
<li>haha an article about burnout that\u2019s a bit too long to read given my current energy and commitment levels. \u201CI knows it when I sees it\u201D. Come back to this one later on down the road.</li>
</ul>
</li>
<li><a href="https://blog.mollywhite.net/cryptocurrency-market-caps-and-notional-value/">Cryptocurrency \u201Cmarket caps\u201D and notional value</a>
<ul>
<li>I spent many years being biased <em>towards</em> crypto.
<ul>
<li>In order to counteract that, I\u2019m planning on spending as many years being well informed on the arguments against the industry.</li>
<li>My real opinion is more neutral. I look at it like gambling or day trading, neither of which I engage in, but I also don\u2019t care if my neighbor chooses to. Be safe and have fun!</li>
<li>That said, in a just society, regulatory frameworks should exist to protect people who gamble or trade securities from being scammed, mislead, or exploited.</li>
</ul>
</li>
<li>The author, Molly White, is exceptionally good at presenting balanced and well-reasoned descriptions of current events and industry slip ups.</li>
</ul>
</li>
<li><a href="https://fermatslibrary.com/s/the-teletel-minitel-system-in-france">Fermat\u2019s Library | The Teletel/Minitel System in France annotated/explained version.</a>
<ul>
<li>France\u2019s pre-web barely-internet information services were ahead of their time and simultaneously offer a view into an alternate history of what could have been if that technology caught on like the web did.</li>
</ul>
</li>
<li><a href="https://clipasso.github.io/clipasso/?utm_campaign=%22Securities%22%20by%20Lux%20Capital&#x26;utm_medium=email&#x26;utm_source=Revue%20newsletter">CLIPasso: Semantically-Aware Object Sketching</a>
<ul>
<li>I\u2019m not quite there with the maths in all the AI papers I read, but I still read them and try to understand what\u2019s going on at a casual level. I have the rest of my lifetime to get a grasp on the math parts.</li>
</ul>
</li>
<li><a href="https://xn--gckvb8fzb.com/running-an-open-source-home-area-network/">\u30DE\u30EA\u30A6\u30B9 . Running an Open Source Home Area Network</a>
<ul>
<li>extremely detailed, extremely neckbeard (no offense intended) home networking setup. I simply don\u2019t have the patience to do anything more basic than running hard wired cables to a couple devices and plugging things into an unmanaged switch. Mad respect to the people that get creative with things like this.</li>
</ul>
</li>
<li><a href="https://www.quantamagazine.org/elegant-six-page-proof-reveals-the-emergence-of-random-structure-20220425/">Elegant Six-Page Proof Reveals the Emergence of Random Structure | Quanta Magazine</a>
<ul>
<li>Journalism about math is never boring.</li>
</ul>
</li>
<li><a href="https://nadia.xyz/idea-machines">Nadia Asparouhova | Idea machines</a>
<ul>
<li>remined me of the disney circular business model</li>
</ul>
</li>
<li><a href="https://fly.io/blog/soc2-the-screenshots-will-continue-until-security-improves/">SOC2: The Screenshots Will Continue Until Security Improves \xB7 Fly</a>
<ul>
<li>Security is such a deep topic, I could read about the procedural blood and guts like this all day. I\u2019m glad to have done a stint with a security focused industry and for a company that treated it rigorously. But I don\u2019t miss being paranoid.</li>
<li><a href="https://scrty.io/">Starting Up Security</a></li>
<li><a href="https://pathlock.com/learn/internal-control-framework-a-practical-guide-to-the-coso-framework/">Internal Control Framework: A Practical Guide to the COSO Framework | Pathlock</a></li>
</ul>
</li>
<li><a href="https://github.com/Robert-van-Engelen/tinylisp">Robert-van-Engelen/tinylisp: Lisp in 99 lines of C and how to write one yourself. Includes 20 Lisp primitives, garbage collection and REPL. Includes tail-call optimized versions for speed and reduced memory use.</a>
<ul>
<li>wow</li>
</ul>
</li>
<li><a href="https://wasp-lang.dev/blog/2022/06/24/ML-code-gen-vs-coding-by-hand-future">ML code generation vs. coding by hand - what we think programming is going to look like | Wasp</a>
<ul>
<li>an area that I\u2019m still in the \u201Cthinking deep thoughts\u201D phase of</li>
</ul>
</li>
<li><a href="https://github.com/stateful/vscode-awesome-ux">stateful/vscode-awesome-ux: Showcase of how to employ best practices to provide a high-fidelity user experience inside of VS Code extensions.</a>
<ul>
<li>lots more can be done in vs code extensions than I had previously thought. Great seeing open source explorations like this.</li>
</ul>
</li>
<li><a href="https://en.m.wikipedia.org/wiki/Euler_equations_(fluid_dynamics)">Euler equations - fluid dynamics</a>
<ul>
<li>more math-person envy on display</li>
</ul>
</li>
<li><a href="https://www.youtube.com/watch?v=941vlJw5y8I">The Troubled History of Batman (1989): Burton! Keaton! Nicholson! Batmania! - YouTube</a>
<ul>
<li>I like this channel.</li>
</ul>
</li>
</ul>`,zd={injectedFrontmatter:{}},Ss={title:"Links Blog August 2022",slug:"links-august-2022",description:"Links! more links to things I've had open for most of August 2022",layout:"../../layouts/BlogPost.astro",heroImage:"/img/0411fe02-021e-4f3a-b45a-591907eea8a9.png"},mn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/links-august-2022.html.md",fn="/writing/links-august-2022.html";function As(){return`
I've committed to blogging more while also paying down my open tab debt. Once a month, I'll use the Session Buddy extension to export my current tabs on my personal computer.

- [pico.js, a face-detection library in 200 lines of JavaScript](https://nenadmarkus.com/p/picojs-intro/)
    - a few years old already, but things like this never cease to amaze me. When I was learning JavaScript, I would joke with my colleagues about far-fetched behavior like realtime face detection being done in JS, so to see it laid out so tersely makes me excited for the future. 
- [Architecture Notes \u2014 System Design & Software Architectures Explained](https://architecturenotes.co/)
    - the write-up here about Redis made it into my social feeds. I'm a sucker for diagrams and short paragraphs and database internals. I love systems, and I love Redis, despite having not used it for anything recently. Early on at Quick Left, I built a number of client projects that used Redis for caching or lightweight storage. I even made the mistake of trying to build an entire app with a Redis backend until it collapsed under it's own schema-less weight.
- [Shoelace.style](https://shoelace.style/)
    - I really, really don't want web components to be vaporware. Shoelace seems like a deliberate step in the right direction: making web-native components that are compatible with React (because that's where the developers are). Tools should embrace where developers are and help make them better at their jobs.
    - The Next.js integration looks ugly today, but I'm willing to bet that it improves over time.
- [Webhooks.fyi](https://webhooks.fyi/)
    - filed under: essential information. h/t to [Jeff Lindsay](https://progrium.com) for inventing webhooks in the first place. 
- [Deconstructing B\xE9zier curves](http://blog.pkh.me/p/33-deconstructing-be%CC%81zier-curves.html)
    - tutorials about once-byzantine concepts are my jam. I could collect these infinitely. 
    - Two more links fell out of this one:
        - http://blog.pkh.me/p/29-the-most-useful-math-formulas.html
        - https://en.m.wikipedia.org/wiki/De_Casteljau%27s_algorithm
- [Instagram, TikTok, and the Three Trends \u2013 Stratechery by Ben Thompson](https://stratechery.com/2022/instagram-tiktok-and-the-three-trends/)
    - too long to summarize, but tldr social media destroyed the traditional media and now the next generation of apps are reshaping things again; we're all living through the consequences of it and won't know what trends matter for another decade.
- [CannedTXT](https://cannedtxt.com/)
    - widely shared, but a smart little source of "canned responses." It's tough to be terse, polite, and direct in writing without a lot of practice; this is a masterclass.
- [100 Rules \u2014 Personal Philosophy - Dru Riley](https://druriley.com/100-rules-2020/)
    - aphorisms are another fun thing to collect. I'd never thought of keeping a running list of the good ones.
- [The Unreasonable Effectiveness of Makefiles](https://matt-rickard.com/the-unreasonable-effectiveness-of-makefiles)
    - I'm on the fence about this hypothesis. At Credit Karma, I put Makefiles in lots of my projects because it seemed like a universal solution.
    - I've been using linux since I was a teenager, so the idea of running \`make\` in a project and just having it do the right thing appealed to me.
    - In practice, I found it to be less than ideal. Make syntax is "yet another" technology to weave into a project that's not already going to use it.
    - Using it to invoke npm commands and interface to other build and test scripts was fine, but it didn't remove any complexity. Rather, it added complexity in exchange for very little utility.
    - The only correct take on \`make\` is that there's really only _one_ Makefile. Every Makefile you encounter has been copypasta'd from the original.
- [Patterns.dev - Modern Web App Design Patterns](https://www.patterns.dev/)
    - huge collection of design patterns. Materials like this would have been extremely effective when I was learning how to build apps. Reading Stoyan Stefanov's JavaScript Patterns book was an eye-opening experience for me 10 years ago, so it's heartening to see that tradition continued.
- [Software Engineering Books](https://software-engineering-books.com/)
    - In a similar vein to the previous tab, here is a curated reading list. I've read a number of these already and the remainder are on the list.
    - I've already finished The Personal MBA because it was the only book listed in two different categories. It was dense, which is the only compliment for a business book, which tend to be 2 paragraphs worth of ideas spread across 100 pages of filler.
- [I Looked Into 34 Top Real-World Blockchain Projects So You Don\u2019t Have To | Niko\u2019s Blog](https://weh.wtf/34-blockchain-projects.html)
    - This is tongue-in-cheek because the "list" of 34 companies comes from an unknown media outlet and the original author is obviously pro crypto.
    - The original piece could very well be a link farming or affiliate marketing situation, and if you pick a year-old post on a site like that, you'd be shocked if the majority of the links weren't dead or redirects.
    - But yeah, crypto has so far only been provably good at creating exchanges to trade crypto, which exist to get market makers (the shills) and retail investors (the marks) to trade crypto. QED.
- [The Maintenance Race](https://www.worksinprogress.co/issue/the-maintenance-race/)
    - Long read by Stewart Brand. I recently finished reading his biography, Whole Earth, so Brand has been top of mind lately.
    - My only notes from the biography is that he occasionally seemed like a jerk, but I'm glad they left that stuff in, because honestly who's _not_ a jerk every now and then.
    - Anyway this is an interesting story and re-enforces an aphorism from Nassim Taleb that I'm fond of: "prepare for the worst, the best will work itself out".
    - [The Browser](https://thebrowser.com/) this is a paid newsletter that I don't pay for but seemed interesting, Brand tweeted about it having run a blerb about the article.
- [Implementing "seen by" functionality with Postgres](https://supabase.com/blog/2022/07/18/seen-by-in-postgresql)
    - smarties over at supabase demonstrating hyperloglog tables in postgres
- [codecrafters-io/build-your-own-x: Master programming by recreating your favorite technologies from scratch.](https://github.com/codecrafters-io/build-your-own-x#build-your-own-3d-renderer)
    - yet-another Rosetta Stone for building a wide variety of software projects
- [Burnout Guide: Symptoms, Causes, and Prevention - Commoncog](https://commoncog.com/g/burnout/)
    - haha an article about burnout that's a bit too long to read given my current energy and commitment levels. "I knows it when I sees it". Come back to this one later on down the road.
- [Cryptocurrency "market caps" and notional value](https://blog.mollywhite.net/cryptocurrency-market-caps-and-notional-value/)
    - I spent many years being biased _towards_ crypto.
        - In order to counteract that, I'm planning on spending as many years being well informed on the arguments against the industry.
        - My real opinion is more neutral. I look at it like gambling or day trading, neither of which I engage in, but I also don't care if my neighbor chooses to. Be safe and have fun!
        - That said, in a just society, regulatory frameworks should exist to protect people who gamble or trade securities from being scammed, mislead, or exploited.
    - The author, Molly White, is exceptionally good at presenting balanced and well-reasoned descriptions of current events and industry slip ups.
- [Fermat's Library | The Teletel/Minitel System in France annotated/explained version.](https://fermatslibrary.com/s/the-teletel-minitel-system-in-france)
    - France's pre-web barely-internet information services were ahead of their time and simultaneously offer a view into an alternate history of what could have been if that technology caught on like the web did.
- [CLIPasso: Semantically-Aware Object Sketching](https://clipasso.github.io/clipasso/?utm_campaign=%22Securities%22%20by%20Lux%20Capital&utm_medium=email&utm_source=Revue%20newsletter)
    - I'm not quite there with the maths in all the AI papers I read, but I still read them and try to understand what's going on at a casual level. I have the rest of my lifetime to get a grasp on the math parts.
- [\u30DE\u30EA\u30A6\u30B9 . Running an Open Source Home Area Network](https://xn--gckvb8fzb.com/running-an-open-source-home-area-network/)
    - extremely detailed, extremely neckbeard (no offense intended) home networking setup. I simply don't have the patience to do anything more basic than running hard wired cables to a couple devices and plugging things into an unmanaged switch. Mad respect to the people that get creative with things like this.
- [Elegant Six-Page Proof Reveals the Emergence of Random Structure | Quanta Magazine](https://www.quantamagazine.org/elegant-six-page-proof-reveals-the-emergence-of-random-structure-20220425/)
    - Journalism about math is never boring.
- [Nadia Asparouhova | Idea machines](https://nadia.xyz/idea-machines)
    - remined me of the disney circular business model
- [SOC2: The Screenshots Will Continue Until Security Improves \xB7 Fly](https://fly.io/blog/soc2-the-screenshots-will-continue-until-security-improves/)
    - Security is such a deep topic, I could read about the procedural blood and guts like this all day. I'm glad to have done a stint with a security focused industry and for a company that treated it rigorously. But I don't miss being paranoid.
    - [Starting Up Security](https://scrty.io/)
    - [Internal Control Framework: A Practical Guide to the COSO Framework | Pathlock](https://pathlock.com/learn/internal-control-framework-a-practical-guide-to-the-coso-framework/)
- [Robert-van-Engelen/tinylisp: Lisp in 99 lines of C and how to write one yourself. Includes 20 Lisp primitives, garbage collection and REPL. Includes tail-call optimized versions for speed and reduced memory use.](https://github.com/Robert-van-Engelen/tinylisp)
    - wow
- [ML code generation vs. coding by hand - what we think programming is going to look like | Wasp](https://wasp-lang.dev/blog/2022/06/24/ML-code-gen-vs-coding-by-hand-future)
    - an area that I'm still in the "thinking deep thoughts" phase of
- [stateful/vscode-awesome-ux: Showcase of how to employ best practices to provide a high-fidelity user experience inside of VS Code extensions.](https://github.com/stateful/vscode-awesome-ux)
    - lots more can be done in vs code extensions than I had previously thought. Great seeing open source explorations like this.
- [Euler equations - fluid dynamics](https://en.m.wikipedia.org/wiki/Euler_equations_(fluid_dynamics))
    - more math-person envy on display
- [The Troubled History of Batman (1989): Burton! Keaton! Nicholson! Batmania! - YouTube](https://www.youtube.com/watch?v=941vlJw5y8I)
    - I like this channel.
`}function Ts(){return Es}function ha(){return[]}function Ud(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ha()}async function gn(){let{layout:t,...e}=Ss;e.file=mn,e.url=fn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Es});return p(T,{file:mn,url:fn,content:e,frontmatter:e,headings:ha(),rawContent:As,compiledContent:Ts,"server:root":!0,children:a})}gn[Symbol.for("astro.needsHeadRendering")]=!1;var Bs=Object.freeze(Object.defineProperty({__proto__:null,_internal:zd,frontmatter:Ss,file:mn,url:fn,rawContent:As,compiledContent:Ts,getHeadings:ha,getHeaders:Ud,Content:gn,default:gn},Symbol.toStringTag,{value:"Module"})),js=`<h2 id="tragic-design-is">Tragic Design is\u2026</h2>
<p>When an app lets you accidentally enter a zip code instead of a full address and still completes your order. Optimizing for click-throughs, I guess?</p>
<div class="w-100 mb2 fr-ns tc">
  <a href="/img/tragic-01.png"><img src="/img/tragic-01.png" alt="uber eats it"></a><br>
  <small><i>huh?</i></small>
</div>
<p><del>This was too boring for a tweet and now I want to find more examples.</del> Then I made some tweets.</p>
<p>The following was adapted using <a href="http://tinysubversions.com/">Darius Kazemi\u2019s</a> wonderful new alternative to twitter moments\u2122, <a href="https://tinysubversions.com/spooler/?url=https://twitter.com/sambreed/status//885343588485259264">spooler</a>.</p>
<h3 id="a-thread-by-very-un-dude-thats-me">A thread by <a href="https://twitter.com/sambreed/status/885343588485259264">very un-dude</a> (that\u2019s me)</h3>
<p>Why do twitter &#x26; instagram go out of their way to make it impossible to either right click or drag images out of the browser to save? I mean I know why but it fucking sucks.<sup>[<a href="https://twitter.com/sambreed/status/8853397799439441931">1</a>]</sup> It\u2019s a god damn browser feature that you have to go out of your way to obscure. Web devs: push back!<sup>[<a href="https://twitter.com/sambreed/status/885340468485120000">2</a>]</sup></p>
<p>Twitter stop spending time fucking up built in features. The contents of an &#x3C;img> tags aren\u2019t DRM\u2019ed (yet), here\u2019s to hoping they never are.<sup>[<a href="https://twitter.com/sambreed/status/885341066592870400">3</a>]</sup> I should not have to do this to save silly images, you shitheels!<sup>[<a href="https://twitter.com/sambreed/status/885341803079016448">4</a>]</sup></p>
<p><a href="/img/twitter-images2.gif" class="none"><img src="/img/twitter-images.gif" alt="twitter obscures image urls"></a></p>
<blockquote>
<p>oh shit I made a dope new feature tho \u2014 that image is now <em>every</em> image. twitter, if you hire me I will gladly ruin this product with you\u2026<sup>[<a href="https://twitter.com/sambreed/status/885341803079016448">5</a>]</sup></p>
</blockquote>
<p><a href="/img/twitter-images2.gif" class="none"><img src="/img/twitter-images2.gif" alt="wherein I ruin the product"></a></p>
<h3 id="why-is-this-tragic">Why is this tragic?</h3>
<p>In the case of <em>Uber</em>, it\u2019s just stupid that it let me complete an order without confirming the address. The checkout flow on web seems to have changed since I recorded that screenshot.</p>
<p>For <em>Twitter</em>, this is a case of wanting to optimize sharing over saving and reposting. The only problem is that taints an essential underpinning of the world wide web: URIs are the lowest common denomonator of sharing. It\u2019s excessively inefficient to embed media <em>without</em> having it hosted somewhere that you can identify with a publicly readable URI. Using DOM and CSS to try to prevent users from discovering the <em>resource idenfiers</em> for media you just served them is antithetical to building an open web. The irony is that Twitter is that it\u2019s biggest redeeming quality is that it\u2019s not an <em>entirely closed</em> walled garden, like Facebook or Snapchat. Working against a platform feature that\u2019s a core property of something you benefit from seems doubly wasteful.</p>
<h3 id="what-is-tragic-design">What is <em>Tragic Design</em></h3>
<p>For one, <a href="http://a.co/eP48MQx">Tragic Design</a> is a book by Jonathan Shariat &#x26; Cynthia Savard Saucier that made it\u2019s way onto my <a href="https://wookiehangover.com/writing/2017-reading-list.html">2017 Reading List</a>. Go figure. It\u2019s a clever title and describes an obvious-yet-undescribed idea: design that\u2019s harmful to users can cause a disproportionate amount of trouble, beyond just looking bad. For all the talk about the human element being paramount in the thoughts of designers, it\u2019s surprisingly easy for this to be the first thing that\u2019s lost when software developers (or even worse, bureaucrats) get involved.</p>
<p><em>Footnotes</em></p>
<ol>
<li><a href="https://twitter.com/sambreed/status/885339779943944193">https://twitter.com/sambreed/status/885339779943944193</a></li>
<li><a href="https://twitter.com/sambreed/status/885340468485120000">https://twitter.com/sambreed/status/885340468485120000</a></li>
<li><a href="https://twitter.com/sambreed/status/885341066592870400">https://twitter.com/sambreed/status/885341066592870400</a></li>
<li><a href="https://twitter.com/sambreed/status/885341803079016448">https://twitter.com/sambreed/status/885341803079016448</a></li>
<li><a href="https://twitter.com/sambreed/status/885343588485259264">https://twitter.com/sambreed/status/885343588485259264</a></li>
</ol>`,Wd={injectedFrontmatter:{}},Ns={title:"Tragic Design is...",slug:"tragic-design-is.html",layout:"../../layouts/BlogPost.astro"},yn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/tragic-design-is.html.md",wn="/writing/tragic-design-is.html";function Ps(){return`
## Tragic Design is...

When an app lets you accidentally enter a zip code instead of a full address and still completes your order. Optimizing for click-throughs, I guess?

<div class="w-100 mb2 fr-ns tc">
  <a href="/img/tragic-01.png"><img src="/img/tragic-01.png" alt="uber eats it" /></a><br/>
  <small><i>huh?</i></small>
</div>

~~This was too boring for a tweet and now I want to find more examples.~~ Then I made some tweets.

The following was adapted using [Darius Kazemi's](http://tinysubversions.com/) wonderful new alternative to twitter moments\u2122, [spooler](https://tinysubversions.com/spooler/?url=https://twitter.com/sambreed/status//885343588485259264).

### A thread by <a href="https://twitter.com/sambreed/status/885343588485259264">very un-dude</a> (that's me)

Why do twitter &amp; instagram go out of their way to make it impossible to either right click or drag images out of the browser to save? I mean I know why but it fucking sucks.<sup>[[1](https://twitter.com/sambreed/status/8853397799439441931)]</sup> It's a god damn browser feature that you have to go out of your way to obscure. Web devs: push back!<sup>[[2](https://twitter.com/sambreed/status/885340468485120000)]</sup>

Twitter stop spending time fucking up built in features. The contents of an &lt;img&gt; tags aren't DRM'ed (yet), here's to hoping they never are.<sup>[[3](https://twitter.com/sambreed/status/885341066592870400)]</sup> I should not have to do this to save silly images, you shitheels!<sup>[[4](https://twitter.com/sambreed/status/885341803079016448)]</sup>

<a href="/img/twitter-images2.gif" class="none"><img src="/img/twitter-images.gif" alt="twitter obscures image urls" /></a>

> oh shit I made a dope new feature tho \u2014 that image is now _every_ image. twitter, if you hire me I will gladly ruin this product with you...<sup>[[5](https://twitter.com/sambreed/status/885341803079016448)]</sup>

<a href="/img/twitter-images2.gif" class="none"><img src="/img/twitter-images2.gif" alt="wherein I ruin the product" /></a>

### Why is this tragic?

In the case of _Uber_, it's just stupid that it let me complete an order without confirming the address. The checkout flow on web seems to have changed since I recorded that screenshot.

For _Twitter_, this is a case of wanting to optimize sharing over saving and reposting. The only problem is that taints an essential underpinning of the world wide web: URIs are the lowest common denomonator of sharing. It's excessively inefficient to embed media _without_ having it hosted somewhere that you can identify with a publicly readable URI. Using DOM and CSS to try to prevent users from discovering the _resource idenfiers_ for media you just served them is antithetical to building an open web. The irony is that Twitter is that it's biggest redeeming quality is that it's not an _entirely closed_ walled garden, like Facebook or Snapchat. Working against a platform feature that's a core property of something you benefit from seems doubly wasteful.

### What is _Tragic Design_

For one, [Tragic Design](http://a.co/eP48MQx) is a book by Jonathan Shariat & Cynthia Savard Saucier that made it's way onto my [2017 Reading List](https://wookiehangover.com/writing/2017-reading-list.html). Go figure. It's a clever title and describes an obvious-yet-undescribed idea: design that's harmful to users can cause a disproportionate amount of trouble, beyond just looking bad. For all the talk about the human element being paramount in the thoughts of designers, it's surprisingly easy for this to be the first thing that's lost when software developers (or even worse, bureaucrats) get involved.

*Footnotes*

1. https://twitter.com/sambreed/status/885339779943944193
2. https://twitter.com/sambreed/status/885340468485120000
3. https://twitter.com/sambreed/status/885341066592870400
4. https://twitter.com/sambreed/status/885341803079016448
5. https://twitter.com/sambreed/status/885343588485259264
`}function _s(){return js}function ma(){return[{depth:2,slug:"tragic-design-is",text:"Tragic Design is\u2026"},{depth:3,slug:"a-thread-by-very-un-dude-thats-me",text:"A thread by very un-dude (that\u2019s me)"},{depth:3,slug:"why-is-this-tragic",text:"Why is this tragic?"},{depth:3,slug:"what-is-tragic-design",text:"What is Tragic Design"}]}function Gd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ma()}async function bn(){let{layout:t,...e}=Ns;e.file=yn,e.url=wn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":js});return p(T,{file:yn,url:wn,content:e,frontmatter:e,headings:ma(),rawContent:Ps,compiledContent:_s,"server:root":!0,children:a})}bn[Symbol.for("astro.needsHeadRendering")]=!1;var Rs=Object.freeze(Object.defineProperty({__proto__:null,_internal:Wd,frontmatter:Ns,file:yn,url:wn,rawContent:Ps,compiledContent:_s,getHeadings:ma,getHeaders:Gd,Content:bn,default:bn},Symbol.toStringTag,{value:"Module"})),$s=`<p>Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.</p>
<h2 id="headings">Headings</h2>
<p>The following HTML <code>&#x3C;h1></code>\u2014<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>
<h1 id="h1">H1</h1>
<h2 id="h2">H2</h2>
<h3 id="h3">H3</h3>
<h4 id="h4">H4</h4>
<h5 id="h5">H5</h5>
<h6 id="h6">H6</h6>
<h2 id="paragraph">Paragraph</h2>
<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>
<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>
<h2 id="images">Images</h2>
<p><img src="/placeholder-social.jpg" alt="This is a placeholder image description"></p>
<h2 id="blockquotes">Blockquotes</h2>
<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>
<h4 id="blockquote-without-attribution">Blockquote without attribution</h4>
<blockquote>
<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>
<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>
</blockquote>
<h4 id="blockquote-with-attribution">Blockquote with attribution</h4>
<blockquote>
<p>Don\u2019t communicate by sharing memory, share memory by communicating.<br>
\u2014 <cite>Rob Pike<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></cite></p>
</blockquote>
<h2 id="tables">Tables</h2>















<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>
<h2 id="code-blocks">Code Blocks</h2>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">&#x3C;!</span><span style="color: #7EE787">doctype</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">html</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;</span><span style="color: #7EE787">html</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">lang</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">"en"</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;</span><span style="color: #7EE787">head</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;</span><span style="color: #7EE787">meta</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">charset</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">"utf-8"</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;</span><span style="color: #7EE787">title</span><span style="color: #C9D1D9">>Example HTML5 Document&#x3C;/</span><span style="color: #7EE787">title</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;/</span><span style="color: #7EE787">head</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;</span><span style="color: #7EE787">body</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">>Test&#x3C;/</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;/</span><span style="color: #7EE787">body</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;/</span><span style="color: #7EE787">html</span><span style="color: #C9D1D9">></span></span></code></pre>
<h2 id="list-types">List Types</h2>
<h4 id="ordered-list">Ordered List</h4>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h4 id="unordered-list">Unordered List</h4>
<ul>
<li>List item</li>
<li>Another item</li>
<li>And another item</li>
</ul>
<h4 id="nested-list">Nested list</h4>
<ul>
<li>Fruit
<ul>
<li>Apple</li>
<li>Orange</li>
<li>Banana</li>
</ul>
</li>
<li>Dairy
<ul>
<li>Milk</li>
<li>Cheese</li>
</ul>
</li>
</ul>
<h2 id="other-elements--abbr-sub-sup-kbd-mark">Other Elements \u2014 abbr, sub, sup, kbd, mark</h2>
<p><abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.</p>
<p>H<sub>2</sub>O</p>
<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>
<p>Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.</p>
<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>The above quote is excerpted from Rob Pike\u2019s <a href="https://www.youtube.com/watch?v=PAAkCSZUG1c">talk</a> during Gopherfest, November 18, 2015. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">\u21A9</a></p>
</li>
</ol>
</section>`,Jd={injectedFrontmatter:{}},Ms={layout:"../../layouts/BlogPost.astro",title:"Markdown Style Guide",description:"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",pubDate:"Jul 01 2022",heroImage:"/placeholder-hero.jpg"},Dn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/markdown-style-guide.md",vn="/writing/markdown-style-guide";function Hs(){return`
Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML \`<h1>\`\u2014\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/placeholder-social.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> \u2014 <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | \`code\` |

## Code Blocks

\`\`\`html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
\`\`\`

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements \u2014 abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
`}function Os(){return $s}function fa(){return[{depth:2,slug:"headings",text:"Headings"},{depth:1,slug:"h1",text:"H1"},{depth:2,slug:"h2",text:"H2"},{depth:3,slug:"h3",text:"H3"},{depth:4,slug:"h4",text:"H4"},{depth:5,slug:"h5",text:"H5"},{depth:6,slug:"h6",text:"H6"},{depth:2,slug:"paragraph",text:"Paragraph"},{depth:2,slug:"images",text:"Images"},{depth:2,slug:"blockquotes",text:"Blockquotes"},{depth:4,slug:"blockquote-without-attribution",text:"Blockquote without attribution"},{depth:4,slug:"blockquote-with-attribution",text:"Blockquote with attribution"},{depth:2,slug:"tables",text:"Tables"},{depth:2,slug:"code-blocks",text:"Code Blocks"},{depth:2,slug:"list-types",text:"List Types"},{depth:4,slug:"ordered-list",text:"Ordered List"},{depth:4,slug:"unordered-list",text:"Unordered List"},{depth:4,slug:"nested-list",text:"Nested list"},{depth:2,slug:"other-elements--abbr-sub-sup-kbd-mark",text:"Other Elements \u2014 abbr, sub, sup, kbd, mark"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}function Vd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),fa()}async function kn(){let{layout:t,...e}=Ms;e.file=Dn,e.url=vn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":$s});return p(T,{file:Dn,url:vn,content:e,frontmatter:e,headings:fa(),rawContent:Hs,compiledContent:Os,"server:root":!0,children:a})}kn[Symbol.for("astro.needsHeadRendering")]=!1;var Ls=Object.freeze(Object.defineProperty({__proto__:null,_internal:Jd,frontmatter:Ms,file:Dn,url:vn,rawContent:Hs,compiledContent:Os,getHeadings:fa,getHeaders:Vd,Content:kn,default:kn},Symbol.toStringTag,{value:"Module"})),qs=`<p>another link dump, some of these have been open for months and need to be closed or forgotten. It\u2019s healthy to pay down the tab debt at least once a quarter.</p>
<ul>
<li><a href="https://meteor10.sachagreif.com/">10 Years of Meteor</a>
<ul>
<li>meteor had some good parts but missed the mark on several. I didn\u2019t care for meteor at the time, but did go on to use Apollo GraphQL heavily at Credit Karma. It was ok, but perhaps overly complicated.</li>
<li><a href="https://sidebar.io/">Sidebar</a>
<ul>
<li>linked from the meteor piece, it\u2019s a daily link aggregator</li>
</ul>
</li>
</ul>
</li>
<li><a href="https://www.miriamsuzanne.com/2022/07/04/body-margin-8px/">Body Margin 8px | Miriam Eric Suzanne</a>
<ul>
<li>a few too many words on the history of browser resets, specifically the 8px body margin</li>
</ul>
</li>
<li><a href="https://github.com/supabase-community/auth-helpers/tree/main/packages/nextjs?utm_medium=email&#x26;_hsmi=218642387&#x26;utm_content=218642387&#x26;utm_source=hs_email#migrating-from-supabasesupabase-auth-helpers-to-supabaseauth-helpers">auth-helpers/packages/nextjs at main \xB7 supabase-community/auth-helpers</a>
<ul>
<li>supabase might have finally fixed their auth? I need to update this in [redacted]</li>
</ul>
</li>
<li><a href="https://frontendmastery.com/posts/the-new-wave-of-react-state-management/">The new wave of React state management</a>
<ul>
<li>everything is new, again. this time it\u2019s state management, because flow was fucked and redux is too repetitive, so we need more of these.</li>
<li><a href="https://github.com/pmndrs/zustand">pmndrs/zustand: \u{1F43B} Bear necessities for state management in React</a> looks cool though</li>
</ul>
</li>
<li><a href="https://github.com/titzer/virgil/blob/master/doc/tutorial/Overview.md">virgil/Overview.md at master \xB7 titzer/virgil</a>
<ul>
<li>[redacted] has been designing a programming language, so I collected this to send to him</li>
</ul>
</li>
<li><a href="https://ai.googleblog.com/2022/06/minerva-solving-quantitative-reasoning.html">Google AI Blog: Minerva: Solving Quantitative Reasoning Problems with Language Models</a>
<ul>
<li>more AI research for the pile.</li>
</ul>
</li>
<li><a href="https://architecturenotes.co/things-you-should-know-about-databases/">Things You Should Know About Databases</a>
<ul>
<li>I can\u2019t produce this knowledge a priori, but this tread over territory I was already familiar with from reading Martin Kleppmann\u2019s Warthog book. (Everyone should read the Warthog book.)</li>
</ul>
</li>
<li><a href="https://github.com/multiprocessio/datastation">multiprocessio/datastation: App to easily query, script, and visualize data from every database, file, and API.</a>
<ul>
<li>another notebook alternative. under-designed imo.</li>
</ul>
</li>
<li><a href="https://tailscale.com/">Tailscale \xB7 Best VPN Service for Secure Networks</a>
<ul>
<li>[redacted] is using this. But does look interesting, trad-VPN is so wasteful</li>
</ul>
</li>
<li><a href="https://til.simonwillison.net/sqlite/one-line-csv-operations">One-liner for running queries against CSV files with SQLite | Simon Willison\u2019s TILs</a>
<ul>
<li>stoopid sqlite tricks</li>
</ul>
</li>
<li><a href="https://addyosmani.com/blog/software-engineering-soft-parts/">AddyOsmani.com - Software Engineering - The Soft Parts</a>
<ul>
<li>thoughtful post from Addy about being a human who also works with other humans and also computers</li>
</ul>
</li>
<li><a href="https://www.gabe.pizza/notes-on-component-libraries/">Notes on maintaining an internal React component library | Gabe\u2019s blog</a></li>
<li><a href="https://macro-ops.com/the-bill-gurley-chronicles-an-above-the-crowd-mba-on-vcs-marketplaces-and-early-stage-investing/">The Bill Gurley Chronicles: VCs, Marketplaces, and Early-Stage Investing</a>
<ul>
<li>This might be the single most informative blog post I have ever read. It summarizes 20 years of Bill Gurley\u2019s blog, which is just nugget after interesting nugget of shrewd analysis and galaxy-brain predictions that were more accurate than not.</li>
</ul>
</li>
<li><a href="https://tylergaw.com/blog/css-repeating-svg-masks/">CSS: Flexible Repeating SVG Masks</a>
<ul>
<li>[redacted] designed me something like this for <a href="https://webrtc.party/">WebRTC.party</a> and I did my own half-baked version and then found this post. For next time.</li>
</ul>
</li>
<li><a href="https://fly.io/blog/all-in-on-sqlite-litestream/">I\u2019m All-In on Server-Side SQLite \xB7 Fly</a>
<ul>
<li>more SQLite hype</li>
</ul>
</li>
<li><a href="https://www.worksinprogress.co/issue/local-warming/">Local warming - Works in Progress</a>
<ul>
<li>I like the design. The content didn\u2019t stick with me, but the design did.</li>
</ul>
</li>
<li><a href="https://www.quantamagazine.org/elegant-six-page-proof-reveals-the-emergence-of-random-structure-20220425/">Elegant Six-Page Proof Reveals the Emergence of Random Structure | Quanta Magazine</a>
<ul>
<li>I always save the tab on this genre Math shit after I read half of it and move onto something else. I long for the timeline where I studied a bit harder and got the muscle memory worn into me to fully understand this realm instead of feeling like a lost child.</li>
</ul>
</li>
<li><a href="https://news.ycombinator.com/item?id=31060362">How to write more clearly, think more clearly, and learn complex material</a></li>
<li><a href="https://freakingrectangle.wordpress.com/2022/04/15/how-to-freaking-hire-great-developers/">How to Freaking Find Great Developers By Having Them Read Code | Freaking Rectangle</a>
<ul>
<li>Lotsa people opine on how to do interviews, or otherwise bemoan the modern leetcode-style panel interview, but this is a novel hot take. Analyzing is better than synthesizing.</li>
</ul>
</li>
<li><a href="https://css-tricks.com/send-an-http-request-on-page-exit/">Reliably Send an HTTP Request as a User Leaves a Page | CSS-Tricks - CSS-Tricks</a>
<ul>
<li>Still hard to do! There\u2019s a built-in <code>ping</code> attribute on the anchor tag, but Firefox doesn\u2019t support it.</li>
</ul>
</li>
<li><a href="https://logicmag.io/clouds/agile-and-the-long-crisis-of-software/">Agile and the Long Crisis of Software</a>
<ul>
<li>my favorite dead horse to beat: discourse on project management techniques! though this is a good history, the subject is fraught. It\u2019s a distraction from building.</li>
</ul>
</li>
<li><a href="https://aeon.co/ideas/what-i-learned-as-a-hired-consultant-for-autodidact-physicists">What I learned as a hired consultant for autodidact physicists | Aeon Ideas</a>
<ul>
<li>good germ of a story here</li>
</ul>
</li>
<li><a href="https://robert.kra.hn/posts/2022-04-03_rust-web-wasm/">A Rust web server / frontend setup like it\u2019s 2022 (with axum and yew) | Robert Krahn</a>
<ul>
<li>I deeply, deeply want to write Rust but feel like I can\u2019t ever afford to slow down and suffer through the learning curve. I just end up writing JavaScript (TypeScript).</li>
</ul>
</li>
<li><a href="https://coda.io/@lshackleton/two-way-writeups-coda-s-secret-to-shipping-fast">Two-way writeups: Coda\u2019s secret to shipping fast</a>
<ul>
<li>hey look, more discourse on project management techniques! this is good though, coda makes good tools</li>
</ul>
</li>
<li><a href="https://cult.st/recipes/mapo-tofu">Mapo Tofu | Cult Favorite</a>
<ul>
<li>I want to cook this!</li>
</ul>
</li>
<li><a href="https://cult.st/recipes/sichuanish-celery">Sichuan(ish) Celery | Cult Favorite</a>
<ul>
<li>I want to cook this too!</li>
</ul>
</li>
<li><a href="https://queue.acm.org/detail.cfm?id=3454124">The SPACE of Developer Productivity - ACM Queue</a>
<ul>
<li>yet another piece adjacent to project management discourse. this time a framework to measure developer productivity. I discussed this with Sean in 2016/17 as being a multi-dimensional gradient descent problem.</li>
</ul>
</li>
<li><a href="https://nadia.xyz/idea-machines">Nadia Asparouhova | Idea machines</a>
<ul>
<li>\u201Ceffective altruism\u201D</li>
</ul>
</li>
<li><a href="https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425">set -e, -u, -o, -x pipefail explanation</a>
<ul>
<li>I don\u2019t write bash as regularly as I used to (thank god) and I can never remember which of these I need to do. Bash is the pits.</li>
</ul>
</li>
</ul>`,Kd={injectedFrontmatter:{}},zs={title:"Links Blog",slug:"links-part-one",description:"Links! more links to things I've had open",layout:"../../layouts/BlogPost.astro"},xn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/links-part-one.html.md",Cn="/writing/links-part-one.html";function Us(){return`
another link dump, some of these have been open for months and need to be closed or forgotten. It's healthy to pay down the tab debt at least once a quarter.

- [10 Years of Meteor](https://meteor10.sachagreif.com/)
    - meteor had some good parts but missed the mark on several. I didn't care for meteor at the time, but did go on to use Apollo GraphQL heavily at Credit Karma. It was ok, but perhaps overly complicated.
    - [Sidebar](https://sidebar.io/)
        - linked from the meteor piece, it's a daily link aggregator
- [Body Margin 8px | Miriam Eric Suzanne](https://www.miriamsuzanne.com/2022/07/04/body-margin-8px/)
    - a few too many words on the history of browser resets, specifically the 8px body margin
- [auth-helpers/packages/nextjs at main \xB7 supabase-community/auth-helpers](https://github.com/supabase-community/auth-helpers/tree/main/packages/nextjs?utm_medium=email&_hsmi=218642387&utm_content=218642387&utm_source=hs_email#migrating-from-supabasesupabase-auth-helpers-to-supabaseauth-helpers)
    - supabase might have finally fixed their auth? I need to update this in [redacted]
- [The new wave of React state management](https://frontendmastery.com/posts/the-new-wave-of-react-state-management/)
    - everything is new, again. this time it's state management, because flow was fucked and redux is too repetitive, so we need more of these.
    - [pmndrs/zustand: \u{1F43B} Bear necessities for state management in React](https://github.com/pmndrs/zustand) looks cool though
- [virgil/Overview.md at master \xB7 titzer/virgil](https://github.com/titzer/virgil/blob/master/doc/tutorial/Overview.md)
    - [redacted] has been designing a programming language, so I collected this to send to him
- [Google AI Blog: Minerva: Solving Quantitative Reasoning Problems with Language Models](https://ai.googleblog.com/2022/06/minerva-solving-quantitative-reasoning.html)
    - more AI research for the pile.
- [Things You Should Know About Databases](https://architecturenotes.co/things-you-should-know-about-databases/)
    - I can't produce this knowledge a priori, but this tread over territory I was already familiar with from reading Martin Kleppmann's Warthog book. (Everyone should read the Warthog book.)
- [multiprocessio/datastation: App to easily query, script, and visualize data from every database, file, and API.](https://github.com/multiprocessio/datastation)
    - another notebook alternative. under-designed imo.
- [Tailscale \xB7 Best VPN Service for Secure Networks](https://tailscale.com/)
    - [redacted] is using this. But does look interesting, trad-VPN is so wasteful
- [One-liner for running queries against CSV files with SQLite | Simon Willison\u2019s TILs](https://til.simonwillison.net/sqlite/one-line-csv-operations)
    - stoopid sqlite tricks
- [AddyOsmani.com - Software Engineering - The Soft Parts](https://addyosmani.com/blog/software-engineering-soft-parts/)
    - thoughtful post from Addy about being a human who also works with other humans and also computers
- [Notes on maintaining an internal React component library | Gabe's blog](https://www.gabe.pizza/notes-on-component-libraries/)
- [The Bill Gurley Chronicles: VCs, Marketplaces, and Early-Stage Investing](https://macro-ops.com/the-bill-gurley-chronicles-an-above-the-crowd-mba-on-vcs-marketplaces-and-early-stage-investing/)
    - This might be the single most informative blog post I have ever read. It summarizes 20 years of Bill Gurley's blog, which is just nugget after interesting nugget of shrewd analysis and galaxy-brain predictions that were more accurate than not.
- [CSS: Flexible Repeating SVG Masks](https://tylergaw.com/blog/css-repeating-svg-masks/)
    - [redacted] designed me something like this for [WebRTC.party](https://webrtc.party/) and I did my own half-baked version and then found this post. For next time.
- [I'm All-In on Server-Side SQLite \xB7 Fly](https://fly.io/blog/all-in-on-sqlite-litestream/)
    - more SQLite hype
- [Local warming - Works in Progress](https://www.worksinprogress.co/issue/local-warming/)
    - I like the design. The content didn't stick with me, but the design did.
- [Elegant Six-Page Proof Reveals the Emergence of Random Structure | Quanta Magazine](https://www.quantamagazine.org/elegant-six-page-proof-reveals-the-emergence-of-random-structure-20220425/)
    - I always save the tab on this genre Math shit after I read half of it and move onto something else. I long for the timeline where I studied a bit harder and got the muscle memory worn into me to fully understand this realm instead of feeling like a lost child.
- [How to write more clearly, think more clearly, and learn complex material](https://news.ycombinator.com/item?id=31060362)
- [How to Freaking Find Great Developers By Having Them Read Code | Freaking Rectangle](https://freakingrectangle.wordpress.com/2022/04/15/how-to-freaking-hire-great-developers/)
    - Lotsa people opine on how to do interviews, or otherwise bemoan the modern leetcode-style panel interview, but this is a novel hot take. Analyzing is better than synthesizing.
- [Reliably Send an HTTP Request as a User Leaves a Page | CSS-Tricks - CSS-Tricks](https://css-tricks.com/send-an-http-request-on-page-exit/)
    - Still hard to do! There's a built-in \`ping\` attribute on the anchor tag, but Firefox doesn't support it.
- [Agile and the Long Crisis of Software](https://logicmag.io/clouds/agile-and-the-long-crisis-of-software/)
    - my favorite dead horse to beat: discourse on project management techniques! though this is a good history, the subject is fraught. It's a distraction from building.
- [What I learned as a hired consultant for autodidact physicists | Aeon Ideas](https://aeon.co/ideas/what-i-learned-as-a-hired-consultant-for-autodidact-physicists)
    - good germ of a story here
- [A Rust web server / frontend setup like it's 2022 (with axum and yew) | Robert Krahn](https://robert.kra.hn/posts/2022-04-03_rust-web-wasm/)
    - I deeply, deeply want to write Rust but feel like I can't ever afford to slow down and suffer through the learning curve. I just end up writing JavaScript (TypeScript).
- [Two-way writeups: Coda\u2019s secret to shipping fast](https://coda.io/@lshackleton/two-way-writeups-coda-s-secret-to-shipping-fast)
    - hey look, more discourse on project management techniques! this is good though, coda makes good tools
- [Mapo Tofu | Cult Favorite](https://cult.st/recipes/mapo-tofu)
    - I want to cook this!
- [Sichuan(ish) Celery | Cult Favorite](https://cult.st/recipes/sichuanish-celery)
    - I want to cook this too!
- [The SPACE of Developer Productivity - ACM Queue](https://queue.acm.org/detail.cfm?id=3454124)
    - yet another piece adjacent to project management discourse. this time a framework to measure developer productivity. I discussed this with Sean in 2016/17 as being a multi-dimensional gradient descent problem.
- [Nadia Asparouhova | Idea machines](https://nadia.xyz/idea-machines)
    - "effective altruism"
- [set -e, -u, -o, -x pipefail explanation](https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
    - I don't write bash as regularly as I used to (thank god) and I can never remember which of these I need to do. Bash is the pits.
`}function Ws(){return qs}function ga(){return[]}function Yd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ga()}async function Fn(){let{layout:t,...e}=zs;e.file=xn,e.url=Cn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":qs});return p(T,{file:xn,url:Cn,content:e,frontmatter:e,headings:ga(),rawContent:Us,compiledContent:Ws,"server:root":!0,children:a})}Fn[Symbol.for("astro.needsHeadRendering")]=!1;var Gs=Object.freeze(Object.defineProperty({__proto__:null,_internal:Kd,frontmatter:zs,file:xn,url:Cn,rawContent:Us,compiledContent:Ws,getHeadings:ga,getHeaders:Yd,Content:Fn,default:Fn},Symbol.toStringTag,{value:"Module"})),Js=`<p>Right now, I have 16 open tabs in my browser.</p>
<p>By all measures, this is not a lot of tabs. I see people at work that have tab stacks so dense only a single pixel rendering the faintest sliver of each tab. Or multiple windows, 6 or 7 layers deep, each with 10 tabs or more, the tab bar taking up the full width of the screen. I try and do better than that.</p>
<p>I like to treat my work environment with a little more respect by closing things down at the beginning or end of each day, or at very least once a week.</p>
<p>So that leaves my pc at home. That\u2019s where the tabs pile up, unread and unwanted, for weeks on end. I come back to them every day, occasionally adding to them, and sometimes nuking the whole session altogether.</p>
<p>But on any given day I have an accretion of internet detritus to ponder over. It was Jorge Luis Borges who said that reading is a more intellectual activity than writing; I never read most of them.</p>
<p>Here is the (annotated) list of tabs I currently have open:</p>
<ul>
<li><a href="https://pinboard.in/popular/">Pinboard: popular bookmarks</a> - I usually have this one open. It\u2019s replaced <a href="http://n-gate.com/hackernews/">the orange website</a> and reddit for me. I don\u2019t bookmark very many things these days but I like the format of \u201Ca whole bunch of links\u201D to peruse</li>
<li><a href="https://web.dev/native-lazy-loading">Native lazy-loading for the web \xA0|\xA0 web.dev</a> - haven\u2019t read this yet, sounds like I\u2019ll get to continue not writing lazy image loading code and get the whole thing backfilled for me by browser vendors</li>
<li><a href="http://danshipper.com/nothing-happens-until-the-sale-is-made">How to get your first 10 customers</a> - a link from pinboard I kinda looked at and moved on from</li>
<li><a href="https://cheats.rs/">Rust Language Cheat Sheet</a> - I bought the Rust book a few months ago and will use it in future projects, so this seems like a keeper</li>
<li><a href="https://www.ben-evans.com/benedictevans/2019/7/31/Netflix">Netflix is not a tech company \u2014 Benedict Evans</a> - in general, I try to avoid thought leaders like Ben Evans, with the exception of him specifically, to be taken with a healthy amount of salt</li>
<li><a href="https://blog.empathybox.com/post/19574936361/getting-real-about-distributed-system-reliability">Getting Real About Distributed System Reliability - Jay Kreps</a> - I haven\u2019t read this yet. I like horror stories about hard problems that involve lots of computers.</li>
<li><a href="https://standardebooks.org/ebooks/aristotle/nicomachean-ethics/f-h-peters">Nicomachean Ethics, by Aristotle. Translated by F. H. Peters - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover.</a> - Nassim Nicholas Taleb turned me on to NICOMACHEAN ETHICS and it\u2019s some heavy shit. This is a free ebook version that\u2019s not completely fucked.</li>
<li><a href="https://thereader.mitpress.mit.edu/umberto-eco-how-to-write-a-thesis/">How to Write a Thesis, According to Umberto Eco | The MIT Press Reader</a> - big ups to Umberto Eco, whom I\u2019m totally down with. FOUCAULT\u2019S PENDULUM is a great read, as is his collection of essays, TRAVELS IN HYPERREALITY</li>
<li><a href="https://craigmod.com/essays/fast_software/">Fast Software, the Best Software \u2014 by Craig Mod</a> - this is a name I recognize and might be interesting. Skimmed the title and opened the tab.</li>
<li><a href="https://begriffs.com/posts/2019-07-19-history-use-vim.html">History and effective use of Vim</a> - heavy nerd shit. An internet wrote about vim, nerds will read this and nitpick and drool.</li>
<li><a href="https://patrickcollison.com/bookshelf">Bookshelf \xB7 Patrick Collison</a> - one of the brothers Stripe has a bookshelf that\u2019s ridiculously intimidating and also somewhat ridiculous. Stripe Press is dope thought</li>
<li><a href="https://kottke.org/19/06/daft-punk-live-dj-sets-from-the-90s">Daft Punk Live DJ Sets from the 90s</a> - babby boomer blogger discovers old daft punk; I\u2019ve had this one open for weeks</li>
<li><a href="https://www.defmacro.org/2019/03/26/startup-checklist.html">Startup idea checklist | defmacro</a> - an (famous) internet has a do\u2019s / dont\u2019s list but like for startup ideas; who cares but it\u2019s probably worth consulting</li>
<li><a href="https://medium.com/@bgalbs/sixteen-years-of-listening-my-audible-favorites-dc7386737cc5">Sixteen Years of Listening: My Audible Favorites - Ben Galbraith - Medium</a> - sick list of good audiobooks, for which I am a fiend. I plan on putting together a similar (running) list of my favorite because this is a good idea for a post, and exhibits demonstrably better curation than Audible ever has</li>
<li><a href="https://thenewstack.io/observability-a-3-year-retrospective/">Observability \u2014 A 3-Year Retrospective - The New Stack</a> - recommended by a colleague, to read</li>
<li><a href="https://ogn.theonion.com/nintendo-never-should-have-pandered-to-women-and-create-1837027540">Nintendo Never Should Have Pandered To Women And Created A Female Mario</a> - satire from THE ONION surfaced to me by THE FACEBOOK</li>
</ul>`,Xd={injectedFrontmatter:{}},Vs={title:"16 open tabs",slug:"16-open-tabs",description:"I have 16 open browser tabs RIGHT NOW",layout:"../../layouts/BlogPost.astro"},In="C:/Users/Sam/code/sambreed-dev/src/pages/writing/16-open-tabs.html.md",En="/writing/16-open-tabs.html";function Ks(){return`
Right now, I have 16 open tabs in my browser.

By all measures, this is not a lot of tabs. I see people at work that have tab stacks so dense only a single pixel rendering the faintest sliver of each tab. Or multiple windows, 6 or 7 layers deep, each with 10 tabs or more, the tab bar taking up the full width of the screen. I try and do better than that. 

I like to treat my work environment with a little more respect by closing things down at the beginning or end of each day, or at very least once a week.

So that leaves my pc at home. That's where the tabs pile up, unread and unwanted, for weeks on end. I come back to them every day, occasionally adding to them, and sometimes nuking the whole session altogether.

But on any given day I have an accretion of internet detritus to ponder over. It was Jorge Luis Borges who said that reading is a more intellectual activity than writing; I never read most of them.

Here is the (annotated) list of tabs I currently have open:

* [Pinboard: popular bookmarks](https://pinboard.in/popular/) - I usually have this one open. It's replaced [the orange website](http://n-gate.com/hackernews/) and reddit for me. I don't bookmark very many things these days but I like the format of "a whole bunch of links" to peruse
* [Native lazy-loading for the web \xA0|\xA0 web.dev](https://web.dev/native-lazy-loading) - haven't read this yet, sounds like I'll get to continue not writing lazy image loading code and get the whole thing backfilled for me by browser vendors
* [How to get your first 10 customers](http://danshipper.com/nothing-happens-until-the-sale-is-made) - a link from pinboard I kinda looked at and moved on from
* [Rust Language Cheat Sheet](https://cheats.rs/) - I bought the Rust book a few months ago and will use it in future projects, so this seems like a keeper
* [Netflix is not a tech company \u2014 Benedict Evans](https://www.ben-evans.com/benedictevans/2019/7/31/Netflix) - in general, I try to avoid thought leaders like Ben Evans, with the exception of him specifically, to be taken with a healthy amount of salt
* [Getting Real About Distributed System Reliability - Jay Kreps](https://blog.empathybox.com/post/19574936361/getting-real-about-distributed-system-reliability) - I haven't read this yet. I like horror stories about hard problems that involve lots of computers.
* [Nicomachean Ethics, by Aristotle. Translated by F. H. Peters - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover.](https://standardebooks.org/ebooks/aristotle/nicomachean-ethics/f-h-peters) - Nassim Nicholas Taleb turned me on to NICOMACHEAN ETHICS and it's some heavy shit. This is a free ebook version that's not completely fucked.
* [How to Write a Thesis, According to Umberto Eco | The MIT Press Reader](https://thereader.mitpress.mit.edu/umberto-eco-how-to-write-a-thesis/) - big ups to Umberto Eco, whom I'm totally down with. FOUCAULT'S PENDULUM is a great read, as is his collection of essays, TRAVELS IN HYPERREALITY
* [Fast Software, the Best Software \u2014 by Craig Mod](https://craigmod.com/essays/fast_software/) - this is a name I recognize and might be interesting. Skimmed the title and opened the tab.
* [History and effective use of Vim](https://begriffs.com/posts/2019-07-19-history-use-vim.html) - heavy nerd shit. An internet wrote about vim, nerds will read this and nitpick and drool.
* [Bookshelf \xB7 Patrick Collison](https://patrickcollison.com/bookshelf) - one of the brothers Stripe has a bookshelf that's ridiculously intimidating and also somewhat ridiculous. Stripe Press is dope thought
* [Daft Punk Live DJ Sets from the 90s](https://kottke.org/19/06/daft-punk-live-dj-sets-from-the-90s) - babby boomer blogger discovers old daft punk; I've had this one open for weeks
* [Startup idea checklist | defmacro](https://www.defmacro.org/2019/03/26/startup-checklist.html) - an (famous) internet has a do's / dont's list but like for startup ideas; who cares but it's probably worth consulting
* [Sixteen Years of Listening: My Audible Favorites - Ben Galbraith - Medium](https://medium.com/@bgalbs/sixteen-years-of-listening-my-audible-favorites-dc7386737cc5) - sick list of good audiobooks, for which I am a fiend. I plan on putting together a similar (running) list of my favorite because this is a good idea for a post, and exhibits demonstrably better curation than Audible ever has
* [Observability \u2014 A 3-Year Retrospective - The New Stack](https://thenewstack.io/observability-a-3-year-retrospective/) - recommended by a colleague, to read
* [Nintendo Never Should Have Pandered To Women And Created A Female Mario](https://ogn.theonion.com/nintendo-never-should-have-pandered-to-women-and-create-1837027540) - satire from THE ONION surfaced to me by THE FACEBOOK`}function Ys(){return Js}function ya(){return[]}function Qd(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ya()}async function Sn(){let{layout:t,...e}=Vs;e.file=In,e.url=En,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Js});return p(T,{file:In,url:En,content:e,frontmatter:e,headings:ya(),rawContent:Ks,compiledContent:Ys,"server:root":!0,children:a})}Sn[Symbol.for("astro.needsHeadRendering")]=!1;var Xs=Object.freeze(Object.defineProperty({__proto__:null,_internal:Xd,frontmatter:Vs,file:In,url:En,rawContent:Ks,compiledContent:Ys,getHeadings:ya,getHeaders:Qd,Content:Sn,default:Sn},Symbol.toStringTag,{value:"Module"})),Qs=`<p>So I\u2019m thinking about getting off twitter.</p>
<p>The more I use it, the less I get out of it.</p>
<p>I\u2019ve turned into a passive user, one loathe to create and barely there to engage.
I don\u2019t want to see my retweets from people I follow.</p>
<p>Only a handful of people see and interact with what I post, and those feel mechanical.</p>
<p>The friends I met on the platform in the early 2010s have all moved on or have large followings.</p>
<p>My following has stayed modest, which I attribute to my considerate pull-back in 2015 when I abdicated my company, got a corporate job, and stopped pursing speaking engagements at conferences.</p>
<p>Now it\u2019s 7 years later and the way I see the world has changed.</p>
<p>I no longer envy engagement for engagement\u2019s sake; I can see through the shills and marketers and shit-posters to the dark heat of the feedback loop.</p>
<p>My phone is not a positive force for my ADHD; if it\u2019s in front of me, I will pick it up and flip through a few screens, seeking the pleasure of the dopamine hit I get from the right type of content: a like, a reply, a recognition, or (usually) just the guilty pleasure of schadenfreude.</p>
<p>I stopped using Instagram on my phone because it felt like an attention trap that I knew well-enough to not interact with too frequently, but like driving past a multi-car pile up, something I couldn\u2019t keep myself from gawking at.</p>
<p>If I had anything important to say, why bother saying it on Twitter when I can self-publish just as easily?</p>
<p>And while we\u2019re asking questions, are the platform and the format even good?</p>
<p>Forced brevity can yield increased clarity of thought, but it\u2019s far from a guarantee.</p>
<p>Ending on a positive note, there are a few <strong>good</strong> ways to use Twitter:</p>
<ul>
<li><strong>Chronological Timeline.</strong> Yes, I recognize that much has been made of this. The common joke being that the algorithmic timeline is so bad they have to give you a way to disable it or they wouldn\u2019t have any users. I\u2019m sure this isn\u2019t all true, the algorithmic timeline <strong>must</strong> have add value for <strong>someone</strong>, I just know that it isn\u2019t for me.</li>
<li><strong><a href="https://glitch.com/~turn-off-retweets">Disable all Retweets.</a></strong> I can\u2019t recommend this enough. One of the things that has kept me on the platform has been the ability to read things by the people I follow. When retweets were added, it seemed good, but some of my favorite tweeters are prolific and indiscriminate retweeters, which can make for a feed that\u2019s unpredictably filled with angry content.</li>
<li><strong>Lists.</strong> I feel like this feature isn\u2019t well-promoted in the app for how good it is. Private, pinned lists (named with emoji characters, of course) let you greatly expand the content you\u2019ll see without polluting your main timeline.</li>
<li><strong>Never tweet.</strong> I\u2019m lifting this advice directly from my colleague Keith. Unless you\u2019re a journalist, a marketer, or otherwise earn a living from shitposting, the best possible way to use Twitter is to never tweet under any circumstances.</li>
</ul>`,Zd={injectedFrontmatter:{}},Zs={title:"Twitter",slug:"twitter",description:"Leaving Twitter",layout:"../../layouts/BlogPost.astro"},An="C:/Users/Sam/code/sambreed-dev/src/pages/writing/twitter.html.md",Tn="/writing/twitter.html";function er(){return`
So I'm thinking about getting off twitter.

The more I use it, the less I get out of it. 

I've turned into a passive user, one loathe to create and barely there to engage. 
I don't want to see my retweets from people I follow. 

Only a handful of people see and interact with what I post, and those feel mechanical. 

The friends I met on the platform in the early 2010s have all moved on or have large followings. 

My following has stayed modest, which I attribute to my considerate pull-back in 2015 when I abdicated my company, got a corporate job, and stopped pursing speaking engagements at conferences.

Now it's 7 years later and the way I see the world has changed.

I no longer envy engagement for engagement's sake; I can see through the shills and marketers and shit-posters to the dark heat of the feedback loop.

My phone is not a positive force for my ADHD; if it's in front of me, I will pick it up and flip through a few screens, seeking the pleasure of the dopamine hit I get from the right type of content: a like, a reply, a recognition, or (usually) just the guilty pleasure of schadenfreude.

I stopped using Instagram on my phone because it felt like an attention trap that I knew well-enough to not interact with too frequently, but like driving past a multi-car pile up, something I couldn't keep myself from gawking at.

If I had anything important to say, why bother saying it on Twitter when I can self-publish just as easily?

And while we're asking questions, are the platform and the format even good?

Forced brevity can yield increased clarity of thought, but it's far from a guarantee.

Ending on a positive note, there are a few __good__ ways to use Twitter:
- **Chronological Timeline.** Yes, I recognize that much has been made of this. The common joke being that the algorithmic timeline is so bad they have to give you a way to disable it or they wouldn't have any users. I'm sure this isn't all true, the algorithmic timeline __must__ have add value for __someone__, I just know that it isn't for me. 
- **[Disable all Retweets.](https://glitch.com/~turn-off-retweets)** I can't recommend this enough. One of the things that has kept me on the platform has been the ability to read things by the people I follow. When retweets were added, it seemed good, but some of my favorite tweeters are prolific and indiscriminate retweeters, which can make for a feed that's unpredictably filled with angry content.
- **Lists.** I feel like this feature isn't well-promoted in the app for how good it is. Private, pinned lists (named with emoji characters, of course) let you greatly expand the content you'll see without polluting your main timeline.
- **Never tweet.** I'm lifting this advice directly from my colleague Keith. Unless you're a journalist, a marketer, or otherwise earn a living from shitposting, the best possible way to use Twitter is to never tweet under any circumstances.
`}function tr(){return Qs}function wa(){return[]}function ep(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),wa()}async function Bn(){let{layout:t,...e}=Zs;e.file=An,e.url=Tn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":Qs});return p(T,{file:An,url:Tn,content:e,frontmatter:e,headings:wa(),rawContent:er,compiledContent:tr,"server:root":!0,children:a})}Bn[Symbol.for("astro.needsHeadRendering")]=!1;var nr=Object.freeze(Object.defineProperty({__proto__:null,_internal:Zd,frontmatter:Zs,file:An,url:Tn,rawContent:er,compiledContent:tr,getHeadings:wa,getHeaders:ep,Content:Bn,default:Bn},Symbol.toStringTag,{value:"Module"})),ar=`<h1 id="books-continued">Books, continued</h1>
<p>Keeping reading lists year-over-year has been fun. This year felt a bit different. I was still reading a couple of holdovers from my 2017 list and simply didn\u2019t have the energy to create a new post for 2018. It felt unsustainable, like I was forcing it. So instead I\u2019m following the lead of other smart folks who keep a single running list.</p>
<p><em>Currently</em></p>
<ul>
<li><a href="https://www.amazon.com/gp/product/198481981X">Incerto</a> by Nassim Nicholas Taleb. A hardcover edition of 5 books that I already own. Taleb is one of a few writers good enough to buy multiple copies of when better editions come out. This is an excellent priting.</li>
<li><a href="https://www.amazon.com/dp/1732265186">An Elegant Puzzle: Systems of Engineering Management</a> by Will Larson. Published by Stripe Press. This is a beautiful book.</li>
<li><a href="http://www.worldcat.org/oclc/840013131">The Timeless Way of Building</a> by Christoper Alexander. I never really put this one down from last year, the clarity of language and thought is unmatched. I foresee myself deep-reading (and re-reading) this for a long, long time.</li>
<li><a href="http://www.worldcat.org/oclc/216941696">2666</a> by Roberto Bola\xF1o. Keep at least one fiction book going at all times; the longer, the better. Started after finishing 100 Years of Solitude, staying on the theme of english translations of spanish lit.</li>
<li><a href="http://www.worldcat.org/oclc/747193445">The Wind-up Bird Chronicle</a> by Haruki Murakami</li>
</ul>
<p><em>2019</em></p>
<ul>
<li><a href="https://www.amazon.com/dp/0812988191">Good Morning, Midnight</a> by Lily Brooks-Dalton</li>
<li><a href="https://www.amazon.com/dp/1982113472">Every Tool\u2019s a Hammer: Life Is What You Make It</a> by Adam Savage</li>
<li><a href="https://www.amazon.com/gp/product/0735220174">Black Leopard Red Wolf</a> by Marlon James</li>
<li><a href="https://www.amazon.com/dp/0553447238">Makers and Takers</a> by Rana Foroohar</li>
<li><a href="https://www.amazon.com/dp/1780992262">Ghosts of My Life</a> by Mark Fisher</li>
</ul>
<p><em>2018</em></p>
<ul>
<li><a href="http://www.worldcat.org/oclc/1030241785">Bullshit Jobs</a> by David Graeber</li>
<li><a href="http://www.worldcat.org/oclc/41071867">The Workbench Book</a> by Scott Landis and <a href="http://www.worldcat.org/oclc/973537637">Best Workbenches</a> by the Editors of Fine Woodworking. I\u2019ve taken on woodworking/joinery as hobby over the past year or so and a mentor recommended my next project be a cabinetmaker\u2019s workbench.</li>
<li><a href="http://www.worldcat.org/oclc/1027035134">Skin in the Game</a> by <a href="https://twitter.com/nntaleb">Nassim Nicholas Taleb</a></li>
<li><a href="http://www.worldcat.org/oclc/881869530">100 Years of Solitude</a> by Gabriel Garc\xEDa M\xE1rquez</li>
<li><a href="http://www.worldcat.org/oclc/932001597">NeuroTribes</a> by Steve Silberman</li>
<li><a href="http://www.worldcat.org/oclc/884955043">Lao Tzu: Tao Te Ching</a> translation by Urula K Le Guin</li>
<li><a href="http://www.worldcat.org/oclc/1012127153">The Lathe of Heaven</a> by Ursula K Le Guin</li>
<li><a href="http://www.worldcat.org/oclc/1027559077">They Can\u2019t Kill Us Until They Kill Us</a> by <a href="https://twitter.com/NifMuhammad">Hanif Abdurraqib</a></li>
<li><a href="http://www.worldcat.org/oclc/24467494">Pale Fire</a> by Vladimir Nabokov</li>
</ul>
<p><em>Upcoming</em></p>
<ul>
<li><a href="http://www.worldcat.org/oclc/670128324">The Time Machine Did It</a> by John Swartzwelder</li>
<li><a href="http://www.worldcat.org/oclc/854809464">Midnight\u2019s Children</a> by Salaman Rushdie</li>
<li><a href="http://www.worldcat.org/oclc/930928743">Underworld</a> by Don DeLillo</li>
<li><a href="http://www.worldcat.org/oclc/889324546">City of God</a> by E.L. Doctorow</li>
</ul>
<p><em>Technophilia</em></p>
<ul>
<li><a href="https://www.amazon.com/dp/B07GBCX7YC">The Dream Machine</a> by M. Mitchell Waldrop</li>
<li><a href="http://www.worldcat.org/oclc/436030574">Cryptography Engineering: Design Principles and Practical Applications</a> by Nies Ferguson, Bruce Schneier, and Tadayoshi Kohno</li>
<li><a href="http://www.worldcat.org/oclc/951650600">Code Complete 2</a> by Steve McConnell</li>
<li><a href="http://www.worldcat.org/oclc/995161733">Programming Beyond Practices</a> by <a href="https://twitter.com/practicingdev">Gregory T. Brown</a></li>
<li><a href="http://www.worldcat.org/oclc/981929715">SVG Animations</a> by <a href="https://twitter.com/sarah_edo">Sarah Drasner</a></li>
</ul>`,tp={injectedFrontmatter:{}},or={title:"Books I'm reading",slug:"books.html",description:"A non-exhaustive list of the books I'm reading in <year>",layout:"../../layouts/BlogPost.astro"},jn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/books.html.md",Nn="/writing/books.html";function ir(){return`
# Books, continued

Keeping reading lists year-over-year has been fun. This year felt a bit different. I was still reading a couple of holdovers from my 2017 list and simply didn't have the energy to create a new post for 2018. It felt unsustainable, like I was forcing it. So instead I'm following the lead of other smart folks who keep a single running list.

_Currently_


* [Incerto](https://www.amazon.com/gp/product/198481981X) by Nassim Nicholas Taleb. A hardcover edition of 5 books that I already own. Taleb is one of a few writers good enough to buy multiple copies of when better editions come out. This is an excellent priting.
* [An Elegant Puzzle: Systems of Engineering Management](https://www.amazon.com/dp/1732265186) by Will Larson. Published by Stripe Press. This is a beautiful book.
* [The Timeless Way of Building](http://www.worldcat.org/oclc/840013131) by Christoper Alexander. I never really put this one down from last year, the clarity of language and thought is unmatched. I foresee myself deep-reading (and re-reading) this for a long, long time.
* [2666](http://www.worldcat.org/oclc/216941696) by Roberto Bola\xF1o. Keep at least one fiction book going at all times; the longer, the better. Started after finishing 100 Years of Solitude, staying on the theme of english translations of spanish lit.
* [The Wind-up Bird Chronicle](http://www.worldcat.org/oclc/747193445) by Haruki Murakami

_2019_

* [Good Morning, Midnight](https://www.amazon.com/dp/0812988191) by Lily Brooks-Dalton
* [Every Tool's a Hammer: Life Is What You Make It](https://www.amazon.com/dp/1982113472) by Adam Savage
* [Black Leopard Red Wolf](https://www.amazon.com/gp/product/0735220174) by Marlon James
* [Makers and Takers](https://www.amazon.com/dp/0553447238) by Rana Foroohar
* [Ghosts of My Life](https://www.amazon.com/dp/1780992262) by Mark Fisher

_2018_

* [Bullshit Jobs](http://www.worldcat.org/oclc/1030241785) by David Graeber
* [The Workbench Book](http://www.worldcat.org/oclc/41071867) by Scott Landis and [Best Workbenches](http://www.worldcat.org/oclc/973537637) by the Editors of Fine Woodworking. I've taken on woodworking/joinery as hobby over the past year or so and a mentor recommended my next project be a cabinetmaker's workbench.
* [Skin in the Game](http://www.worldcat.org/oclc/1027035134) by [Nassim Nicholas Taleb](https://twitter.com/nntaleb)
* [100 Years of Solitude](http://www.worldcat.org/oclc/881869530) by Gabriel Garc\xEDa M\xE1rquez
* [NeuroTribes](http://www.worldcat.org/oclc/932001597) by Steve Silberman
* [Lao Tzu: Tao Te Ching](http://www.worldcat.org/oclc/884955043) translation by Urula K Le Guin
* [The Lathe of Heaven](http://www.worldcat.org/oclc/1012127153) by Ursula K Le Guin
* [They Can't Kill Us Until They Kill Us](http://www.worldcat.org/oclc/1027559077) by [Hanif Abdurraqib](https://twitter.com/NifMuhammad)
* [Pale Fire](http://www.worldcat.org/oclc/24467494) by Vladimir Nabokov

_Upcoming_

* [The Time Machine Did It](http://www.worldcat.org/oclc/670128324) by John Swartzwelder
* [Midnight's Children](http://www.worldcat.org/oclc/854809464) by Salaman Rushdie
* [Underworld](http://www.worldcat.org/oclc/930928743) by Don DeLillo
* [City of God](http://www.worldcat.org/oclc/889324546) by E.L. Doctorow

_Technophilia_

* [The Dream Machine](https://www.amazon.com/dp/B07GBCX7YC) by M. Mitchell Waldrop
* [Cryptography Engineering: Design Principles and Practical Applications](http://www.worldcat.org/oclc/436030574) by Nies Ferguson, Bruce Schneier, and Tadayoshi Kohno
* [Code Complete 2](http://www.worldcat.org/oclc/951650600) by Steve McConnell
* [Programming Beyond Practices](http://www.worldcat.org/oclc/995161733) by [Gregory T. Brown](https://twitter.com/practicingdev)
* [SVG Animations](http://www.worldcat.org/oclc/981929715) by [Sarah Drasner](https://twitter.com/sarah_edo)`}function sr(){return ar}function ba(){return[{depth:1,slug:"books-continued",text:"Books, continued"}]}function np(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),ba()}async function Pn(){let{layout:t,...e}=or;e.file=jn,e.url=Nn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":ar});return p(T,{file:jn,url:Nn,content:e,frontmatter:e,headings:ba(),rawContent:ir,compiledContent:sr,"server:root":!0,children:a})}Pn[Symbol.for("astro.needsHeadRendering")]=!1;var rr=Object.freeze(Object.defineProperty({__proto__:null,_internal:tp,frontmatter:or,file:jn,url:Nn,rawContent:ir,compiledContent:sr,getHeadings:ba,getHeaders:np,Content:Pn,default:Pn},Symbol.toStringTag,{value:"Module"})),lr=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.</p>
<p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.</p>
<p>Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.</p>
<p>Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.</p>
<p>Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.</p>`,ap={injectedFrontmatter:{}},cr={layout:"../../layouts/BlogPost.astro",title:"Third post",description:"Lorem ipsum dolor sit amet",pubDate:"Jul 15 2022",heroImage:"/placeholder-hero.jpg"},_n="C:/Users/Sam/code/sambreed-dev/src/pages/writing/third-post.md",Rn="/writing/third-post";function ur(){return`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.`}function dr(){return lr}function Da(){return[]}function op(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),Da()}async function $n(){let{layout:t,...e}=cr;e.file=_n,e.url=Rn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":lr});return p(T,{file:_n,url:Rn,content:e,frontmatter:e,headings:Da(),rawContent:ur,compiledContent:dr,"server:root":!0,children:a})}$n[Symbol.for("astro.needsHeadRendering")]=!1;var pr=Object.freeze(Object.defineProperty({__proto__:null,_internal:ap,frontmatter:cr,file:_n,url:Rn,rawContent:ur,compiledContent:dr,getHeadings:Da,getHeaders:op,Content:$n,default:$n},Symbol.toStringTag,{value:"Module"})),hr=`<h1 id="2007">2007</h1>
<p>In January of 2007 I was 20 years old.</p>
<p>I had no job.</p>
<p>I could no longer afford to pay for college and simultaneously failed out.</p>
<p>Then I got a D.U.I.</p>
<p>Then I wrecked my car.</p>
<p>With no license. And no insurance. And in an accident with another vehicle. I had to beg my brother to loan me money to fix the other car. Meanwhile, my car sat unmoving and wrecked, collecting parking tickets until I sold it, as is, for next to nothing.</p>
<p>When I did get a job, it only paid $9 an hour. For 32 hours a week. Technically part time.</p>
<p>In 2007 I didn\u2019t have health insurance. In January, I had a three day fever and my tonsils were swollen enough to justify visit to the Emergency Room without health insurance. I watched Prince\u2019s infamous Super Bowl halftime show in the ER waiting room.</p>
<p>It would be three years before I would pay the bill for the hospital trip that night, which would ruin my credit and follow me for years afterwards.</p>
<p>In 2007 I owed the University of Colorado $12,000. The tuition for the semester that I didn\u2019t finish. Eventually, it sent to collections, which I ignored while it accrued 20% annual interest for four years.</p>
<p>In 2007, my girlfriend and I became very good at grocery store math, because having to put stuff back after it was rung up was mortifying. A year earlier I had been living off a trust fund; the payments had stopped that winter.</p>
<p>2007 was the worst year of my life.</p>
<p>But it was also one of the best.</p>
<p>2007 was the year I moved in with my then-girlfriend (and now-wife.)</p>
<p>I got promoted to assistant manager at the retail job. My pay was raised to $11 an hour, and I would get 36 hours a week on the schedule. That extra $108 a week was a lot of money. It meant less math at the grocery store.</p>
<p>My wife and I adopted a beat up little shelter dog that winter and named him Jack. He\u2019s still here, but now he\u2019s old and cranky after 10 years of being doted on and loved unconditionally.</p>
<p>2007 was the year I started riding a bike (at first for transportation, then for fun) and picked up skateboarding again (for fun, then transportation.)</p>
<p>2007 was the year I started taking any job on any film shoot I could find that would take me. Most of them were unpaid, on the hope of paid gigs in the future.</p>
<p>And 2007 was the year I started to code.</p>
<p>I used the money from selling the car to buy a white plastic MacBook. My PowerBook from college had finally died that fall. I remember tracking the shipment from the pc in the back office at work and racing home on my bike during my lunch so the package wouldn\u2019t get stolen.</p>
<blockquote>
<p>It was the first computer I would get paid to write code on.</p>
</blockquote>
<p>I was so excited to get that computer. I used it to climb out of debt and into a career I love. In 2007 I would write my first website and re-discover the love of building stuff on the internet that I had honed a decade earlier on Geocities and Tripod and Angelfire (and later, MySpace profiles.)</p>
<p>That year I listened to MGMT, Peter, Bjorn and John, and Kanye West. I can remember riding my bike to those albums as fall in Boulder started to turn cold.</p>
<hr class="mv4 bt b--red">
<h2 id="2008">2008</h2>
<p>Across town, TechStars was hosting its first class. A year later one of those companies would be acquired by AOL for seven figures. One night at a local meetup the founder of that company, who was only a year or two older than me, ended his presentation by throwing $500 in singles into the air. For him, it must have been a moment of jubilant celebration, but I don\u2019t remember the point I was trying to make. From the back row of the auidence, as a 22 year old college drop-out still working in retail and trying to get in to the Boulder tech community, I only remember the hot pang of shame and regret for not being \u201Cin\u201D already. For not having $500 to throw in the air.</p>
<p>That guy is still around and I still hate him for doing that. It made me feel so worthless in that moment. I didn\u2019t have a job in tech yet, despite wanting one, and was only slightly better off than I had been a year earlier. And here comes some jerkoff that was first given money for a fucking <em>idea</em> and then turned around and <em>sold</em> it for even more money! <em>Why couldn\u2019t I do that?</em></p>
<p>A year earlier I was excited to get a raise for less money than he just threw on the ground.</p>
<p>That night fueled my resolve to work as hard as I could to never feel that way again. Poor and put out. An outsider looking in. And it gave me a model of something I never wanted to do.</p>
<p>I saw a tweet from that guy today. It got me thinking about that night and the terribly un-fun year before it. The funny thing is that he doesn\u2019t even know me. But he pissed me off so badly a decade ago that I\u2019m still stewing about it now.</p>
<p>But that night wasn\u2019t all bad.</p>
<p>That was also the night I would meet <a href="https://twitter.com/electromute">Ingrid</a>, who would eventually be my co-founder at Quick Left. But we wouldn\u2019t know that for another year. We just hung out and talked about bikes and software.</p>
<p>And maybe I owe something to the guy who threw the money after all. After that I started hustling for web design jobs on Craigslist and less than a year later I would have a full time job. That job turned into Quick Left, a company that I would become a founder of and lead for 6 years.</p>
<hr class="mv4 bt b--red">
<p>2007 and 2008 were when I started to read a lot of science fiction.</p>
<p>The second retail job had me unpacking boxes, lots of boxes, in the back of an American Apparel. I listened to Isaac Asimov and Robert Heinlein for the first time back there. I would fold t-shirts thinking about Psychohistory and the Seldon Plan.</p>
<p>I found a used bookstore that my girlfriend and I would ride our bikes to, our backpacks bulging with paperbacks on the way home. Science Fiction was a great way to escape my broke-and-scary Non Fiction reality.</p>
<p>Then I fell hard for the work of Philip K. Dick. <em>A Scanner Darkly</em> had been made into a movie by Richard Linklater the year before. A well-adapted and underrated movie, it\u2019s still one of my favorites. I listened to the audiobook version, recorded by Paul Giamatti, and then devoured the paperback.</p>
<p>I was so desperate to have a copy but I couldn\u2019t wait for a copy to show up at the used bookstore, so I condescended to buy it new from Borders. The only copy at Borders was the kind with the movie poster on it, the type that <em>everyone</em> hates on because it\u2019s the most backwards type of marketing, and never lasts for more than one edition. The one way you can make a good book less good is by forever shackling it to the most recent film adaptation. If the book has something to gain via association with the movie adaptation, you can safely skip the book.</p>
<p>I still have that copy of <em>A Scanner Darkly</em>, with Keanu and Winona and pre-Iron Man Robert Downey Jr. on the cover. I hate the cover, but I love the book so I can\u2019t get rid of it.</p>
<p>The text inside is too good.</p>
<blockquote>
<p>But in this dark world where he now dwelt, ugly things and surprising things and once in a long while a tiny wondrous thing spilled out at him constantly; he could count on nothing.</p>
</blockquote>
<cite>
\u2014 <i>A Scanner Darkly</i>, Philip K. Dick
</cite>
<p>Good things and bad things can happen in startlingly close proximity. 2007 was a \u201Cbad\u201D year, but I wouldn\u2019t trade any of the lessons it taught me.</p>`,ip={injectedFrontmatter:{}},mr={title:2007,slug:2007,description:"In 2007 I had no job, no insurance, and was in debt. But it was still a good year.",layout:"../../layouts/BlogPost.astro"},Mn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/2007.html.md",Hn="/writing/2007.html";function fr(){return`
# 2007

In January of 2007 I was 20 years old.

I had no job.

I could no longer afford to pay for college and simultaneously failed out.

Then I got a D.U.I.

Then I wrecked my car.

With no license. And no insurance. And in an accident with another vehicle. I had to beg my brother to loan me money to fix the other car. Meanwhile, my car sat unmoving and wrecked, collecting parking tickets until I sold it, as is, for next to nothing.

When I did get a job, it only paid $9 an hour. For 32 hours a week. Technically part time.

In 2007 I didn't have health insurance. In January, I had a three day fever and my tonsils were swollen enough to justify visit to the Emergency Room without health insurance. I watched Prince's infamous Super Bowl halftime show in the ER waiting room. 

It would be three years before I would pay the bill for the hospital trip that night, which would ruin my credit and follow me for years afterwards.

In 2007 I owed the University of Colorado $12,000. The tuition for the semester that I didn't finish. Eventually, it sent to collections, which I ignored while it accrued 20% annual interest for four years.

In 2007, my girlfriend and I became very good at grocery store math, because having to put stuff back after it was rung up was mortifying. A year earlier I had been living off a trust fund; the payments had stopped that winter.

2007 was the worst year of my life.

But it was also one of the best.

2007 was the year I moved in with my then-girlfriend (and now-wife.)

I got promoted to assistant manager at the retail job. My pay was raised to $11 an hour, and I would get 36 hours a week on the schedule. That extra $108 a week was a lot of money. It meant less math at the grocery store.

My wife and I adopted a beat up little shelter dog that winter and named him Jack. He's still here, but now he's old and cranky after 10 years of being doted on and loved unconditionally.

2007 was the year I started riding a bike (at first for transportation, then for fun) and picked up skateboarding again (for fun, then transportation.)

2007 was the year I started taking any job on any film shoot I could find that would take me. Most of them were unpaid, on the hope of paid gigs in the future.

And 2007 was the year I started to code.

I used the money from selling the car to buy a white plastic MacBook. My PowerBook from college had finally died that fall. I remember tracking the shipment from the pc in the back office at work and racing home on my bike during my lunch so the package wouldn't get stolen.

> It was the first computer I would get paid to write code on.

I was so excited to get that computer. I used it to climb out of debt and into a career I love. In 2007 I would write my first website and re-discover the love of building stuff on the internet that I had honed a decade earlier on Geocities and Tripod and Angelfire (and later, MySpace profiles.)

That year I listened to MGMT, Peter, Bjorn and John, and Kanye West. I can remember riding my bike to those albums as fall in Boulder started to turn cold.

<hr class="mv4 bt b--red" />

## 2008

Across town, TechStars was hosting its first class. A year later one of those companies would be acquired by AOL for seven figures. One night at a local meetup the founder of that company, who was only a year or two older than me, ended his presentation by throwing $500 in singles into the air. For him, it must have been a moment of jubilant celebration, but I don't remember the point I was trying to make. From the back row of the auidence, as a 22 year old college drop-out still working in retail and trying to get in to the Boulder tech community, I only remember the hot pang of shame and regret for not being "in" already. For not having $500 to throw in the air.

That guy is still around and I still hate him for doing that. It made me feel so worthless in that moment. I didn't have a job in tech yet, despite wanting one, and was only slightly better off than I had been a year earlier. And here comes some jerkoff that was first given money for a fucking _idea_ and then turned around and _sold_ it for even more money! _Why couldn't I do that?_

A year earlier I was excited to get a raise for less money than he just threw on the ground.

That night fueled my resolve to work as hard as I could to never feel that way again. Poor and put out. An outsider looking in. And it gave me a model of something I never wanted to do.

I saw a tweet from that guy today. It got me thinking about that night and the terribly un-fun year before it. The funny thing is that he doesn't even know me. But he pissed me off so badly a decade ago that I'm still stewing about it now.

But that night wasn't all bad.

That was also the night I would meet [Ingrid](https://twitter.com/electromute), who would eventually be my co-founder at Quick Left. But we wouldn't know that for another year. We just hung out and talked about bikes and software.

And maybe I owe something to the guy who threw the money after all. After that I started hustling for web design jobs on Craigslist and less than a year later I would have a full time job. That job turned into Quick Left, a company that I would become a founder of and lead for 6 years.

<hr class="mv4 bt b--red" />

2007 and 2008 were when I started to read a lot of science fiction.

The second retail job had me unpacking boxes, lots of boxes, in the back of an American Apparel. I listened to Isaac Asimov and Robert Heinlein for the first time back there. I would fold t-shirts thinking about Psychohistory and the Seldon Plan.

I found a used bookstore that my girlfriend and I would ride our bikes to, our backpacks bulging with paperbacks on the way home. Science Fiction was a great way to escape my broke-and-scary Non Fiction reality.

Then I fell hard for the work of Philip K. Dick. _A Scanner Darkly_ had been made into a movie by Richard Linklater the year before. A well-adapted and underrated movie, it's still one of my favorites. I listened to the audiobook version, recorded by Paul Giamatti, and then devoured the paperback.

I was so desperate to have a copy but I couldn't wait for a copy to show up at the used bookstore, so I condescended to buy it new from Borders. The only copy at Borders was the kind with the movie poster on it, the type that _everyone_ hates on because it's the most backwards type of marketing, and never lasts for more than one edition. The one way you can make a good book less good is by forever shackling it to the most recent film adaptation. If the book has something to gain via association with the movie adaptation, you can safely skip the book.

I still have that copy of _A Scanner Darkly_, with Keanu and Winona and pre-Iron Man Robert Downey Jr. on the cover. I hate the cover, but I love the book so I can't get rid of it.

The text inside is too good.

> But in this dark world where he now dwelt, ugly things and surprising things and once in a long while a tiny wondrous thing spilled out at him constantly; he could count on nothing.

<cite>
\u2014 <i>A Scanner Darkly</i>, Philip K. Dick
</cite>

Good things and bad things can happen in startlingly close proximity. 2007 was a "bad" year, but I wouldn't trade any of the lessons it taught me.`}function gr(){return hr}function va(){return[{depth:1,slug:"2007",text:"2007"},{depth:2,slug:"2008",text:"2008"}]}function sp(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),va()}async function On(){let{layout:t,...e}=mr;e.file=Mn,e.url=Hn,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":hr});return p(T,{file:Mn,url:Hn,content:e,frontmatter:e,headings:va(),rawContent:fr,compiledContent:gr,"server:root":!0,children:a})}On[Symbol.for("astro.needsHeadRendering")]=!1;var yr=Object.freeze(Object.defineProperty({__proto__:null,_internal:ip,frontmatter:mr,file:Mn,url:Hn,rawContent:fr,compiledContent:gr,getHeadings:va,getHeaders:sp,Content:On,default:On},Symbol.toStringTag,{value:"Module"})),rp=V("C:/Users/Sam/code/sambreed-dev/src/components/HeaderLink.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),wr=J(async(t,e,a)=>{let n=t.createAstro(rp,e,a);n.self=wr;let{href:i,class:o,...s}=n.props,{pathname:l}=n.url,r=i===l||i===l.replace(/\/$/,"");return $`${Te(t)}<a${I(i,"href")}${I([[o,{active:r}],"astro-OPS7NFKH"],"class:list")}${Ci(s)}>
	${G(t,a.default)}
</a>
`},"C:/Users/Sam/code/sambreed-dev/src/components/HeaderLink.astro"),lp=async function({children:t}){let e=(await Promise.resolve().then(()=>Id)).default,{layout:a,...n}=ka;return n.file=qn,n.url=Ln,n.astro={},Object.defineProperty(n.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(n.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(n.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}}),p(e,{file:qn,url:Ln,content:n,frontmatter:n,headings:xa(),"server:root":!0,children:t})},ka={layout:"../../layouts/BlogPost.astro",title:"Using MDX",description:"Lorem ipsum dolor sit amet",pubDate:"Jul 02 2022",heroImage:"/placeholder-hero.jpg"};function xa(){return[{depth:2,slug:"why-mdx",text:"Why MDX?"},{depth:2,slug:"example",text:"Example"},{depth:2,slug:"more-links",text:"More Links"}]}function cp(t){let e=Object.assign({p:"p",a:"a",code:"code",h2:"h2",br:"br",ul:"ul",li:"li",strong:"strong"},t.components);return p(F,{children:[p(e.p,{children:["This theme comes with the ",p(e.a,{href:"https://docs.astro.build/en/guides/integrations-guide/mdx/",children:"@astrojs/mdx"})," integration installed and configured in your ",p(e.code,{children:"astro.config.mjs"})," config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file."]}),`
`,p(e.h2,{id:"why-mdx",children:"Why MDX?"}),`
`,p(e.p,{children:["MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to ",p(e.a,{href:"https://docs.astro.build/en/guides/markdown-content/#mdx-features",children:"mix JavaScript and UI Components into your Markdown content"})," for things like interactive charts or alerts."]}),`
`,p(e.p,{children:"If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze."}),`
`,p(e.h2,{id:"example",children:"Example"}),`
`,p(e.p,{children:["Here is how you import and use a UI component inside of MDX.",p(e.br,{}),`
When you open this page in the browser, you should see the clickable button below.`]}),`
`,`
`,p(wr,{href:"#",onclick:"alert('clicked!')",children:p(e.p,{children:"Embedded component in MDX"})}),`
`,p(e.h2,{id:"more-links",children:"More Links"}),`
`,p(e.ul,{children:[`
`,p(e.li,{children:p(e.a,{href:"https://mdxjs.com/docs/what-is-mdx",children:"MDX Syntax Documentation"})}),`
`,p(e.li,{children:p(e.a,{href:"https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages",children:"Astro Usage Documentation"})}),`
`,p(e.li,{children:[p(e.strong,{children:"Note:"})," ",p(e.a,{href:"https://docs.astro.build/en/reference/directives-reference/#client-directives",children:"Client Directives"})," are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default."]}),`
`]})]})}function Ze(t={}){return p(lp,{...t,children:p(cp,{...t})})}xi(xa,"astro:jsx");xi(Ze,"astro:jsx");Ze[Symbol.for("astro.needsHeadRendering")]=!Boolean(ka.layout);var Ln="/writing/using-mdx",qn="C:/Users/Sam/code/sambreed-dev/src/pages/writing/using-mdx.mdx";function up(){throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins")}function dp(){throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins")}var pp=Ze,br=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:ka,getHeadings:xa,default:Ze,url:Ln,file:qn,rawContent:up,compiledContent:dp,Content:pp},Symbol.toStringTag,{value:"Module"})),hp=V("C:/Users/Sam/code/sambreed-dev/src/pages/writing.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),Dr=J(async(t,e,a)=>{let n=t.createAstro(hp,e,a);n.self=Dr;let i=(await n.glob(Object.assign({"./writing/16-open-tabs.html.md":()=>Promise.resolve().then(()=>Xs),"./writing/2007.html.md":()=>Promise.resolve().then(()=>yr),"./writing/2016-reading-list.html.md":()=>Promise.resolve().then(()=>vs),"./writing/2017-reading-list.html.md":()=>Promise.resolve().then(()=>Is),"./writing/books.html.md":()=>Promise.resolve().then(()=>rr),"./writing/lessons-from-the-jerk.html.md":()=>Promise.resolve().then(()=>Yi),"./writing/links-august-2022.html.md":()=>Promise.resolve().then(()=>Bs),"./writing/links-part-one.html.md":()=>Promise.resolve().then(()=>Gs),"./writing/making-things-for-fun.html.md":()=>Promise.resolve().then(()=>ts),"./writing/markdown-style-guide.md":()=>Promise.resolve().then(()=>Ls),"./writing/picking-up-the-pieces.html.md":()=>Promise.resolve().then(()=>ss),"./writing/protect-your-history.html.md":()=>Promise.resolve().then(()=>ds),"./writing/static-sites-with-next-js.html.md":()=>Promise.resolve().then(()=>Wi),"./writing/third-post.md":()=>Promise.resolve().then(()=>pr),"./writing/tragic-design-is.html.md":()=>Promise.resolve().then(()=>Rs),"./writing/twitter.html.md":()=>Promise.resolve().then(()=>nr),"./writing/using-mdx.mdx":()=>Promise.resolve().then(()=>br),"./writing/what-I-read-in-2016.html.md":()=>Promise.resolve().then(()=>gs)}),()=>"./writing/*.{md,mdx}")).sort((o,s)=>new Date(s.frontmatter.pubDate).valueOf()-new Date(o.frontmatter.pubDate).valueOf());return $`<html lang="en" class="astro-26JSE3NA">
	<head>
		${N(t,"BaseHead",Be,{title:Se,description:aa,class:"astro-26JSE3NA"})}
		
	${Qe(t)}</head>
	<body class="astro-26JSE3NA">
		${N(t,"Header",je,{class:"astro-26JSE3NA"})}
		<main class="astro-26JSE3NA">
			<section class="astro-26JSE3NA">
				<ul class="astro-26JSE3NA">
					${i.map(o=>$`<li class="astro-26JSE3NA">
								<time${I(o.frontmatter.pubDate,"datetime")} class="astro-26JSE3NA">
									${new Date(o.frontmatter.pubDate).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}
								</time>
								<a${I(o.url,"href")} class="astro-26JSE3NA">${o.frontmatter.title}</a>
							</li>`)}
				</ul>
			</section>
		</main>
		${N(t,"Footer",Ne,{class:"astro-26JSE3NA"})}
	</body></html>`},"C:/Users/Sam/code/sambreed-dev/src/pages/writing.astro"),mp="C:/Users/Sam/code/sambreed-dev/src/pages/writing.astro",fp="/writing",gp=Object.freeze(Object.defineProperty({__proto__:null,default:Dr,file:mp,url:fp},Symbol.toStringTag,{value:"Module"})),yp=V("C:/Users/Sam/code/sambreed-dev/src/pages/career.astro","https://sambreed.dev/","file:///C:/Users/Sam/code/sambreed-dev/"),vr=J(async(t,e,a)=>{let n=t.createAstro(yp,e,a);return n.self=vr,$`${Te(t)}<div>
  <h1>Career</h1>

  <div>
    <h2>Sutter Hill Ventures</h2>
    <p></p>
  </div>

  <div>
    <h2>Credit Karma</h2>
  </div>

  <div>
    <h2>Quick Left</h2>
  </div>
</div>`},"C:/Users/Sam/code/sambreed-dev/src/pages/career.astro"),wp="C:/Users/Sam/code/sambreed-dev/src/pages/career.astro",bp="/career",Dp=Object.freeze(Object.defineProperty({__proto__:null,default:vr,file:wp,url:bp},Symbol.toStringTag,{value:"Module"})),kr="",vp={injectedFrontmatter:{}},xr={layout:"../layouts/BlogPost.astro",title:"About Me",description:"Lorem ipsum dolor sit amet",updatedDate:"August 08 2022",heroImage:"/placeholder-about.jpg"},zn="C:/Users/Sam/code/sambreed-dev/src/pages/about.md",Un="/about";function Cr(){return`
`}function Fr(){return kr}function Ca(){return[]}function kp(){return console.warn("getHeaders() have been deprecated. Use getHeadings() function instead."),Ca()}async function Wn(){let{layout:t,...e}=xr;e.file=zn,e.url=Un,e.astro={},Object.defineProperty(e.astro,"headings",{get(){throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')}}),Object.defineProperty(e.astro,"html",{get(){throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')}}),Object.defineProperty(e.astro,"source",{get(){throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')}});let a=p(F,{"set:html":kr});return p(T,{file:zn,url:Un,content:e,frontmatter:e,headings:Ca(),rawContent:Cr,compiledContent:Fr,"server:root":!0,children:a})}Wn[Symbol.for("astro.needsHeadRendering")]=!1;var xp=Object.freeze(Object.defineProperty({__proto__:null,_internal:vp,frontmatter:xr,file:zn,url:Un,rawContent:Cr,compiledContent:Fr,getHeadings:Ca,getHeaders:kp,Content:Wn,default:Wn},Symbol.toStringTag,{value:"Module"})),Cp=new Map([["src/pages/index.astro",gd],["src/pages/cv.html.md",Dd],["src/pages/rss.xml.js",kd],["src/pages/writing/static-sites-with-next-js.html.md",Wi],["src/pages/writing/lessons-from-the-jerk.html.md",Yi],["src/pages/writing/making-things-for-fun.html.md",ts],["src/pages/writing/picking-up-the-pieces.html.md",ss],["src/pages/writing/protect-your-history.html.md",ds],["src/pages/writing/what-I-read-in-2016.html.md",gs],["src/pages/writing/2016-reading-list.html.md",vs],["src/pages/writing/2017-reading-list.html.md",Is],["src/pages/writing/links-august-2022.html.md",Bs],["src/pages/writing/tragic-design-is.html.md",Rs],["src/pages/writing/markdown-style-guide.md",Ls],["src/pages/writing/links-part-one.html.md",Gs],["src/pages/writing/16-open-tabs.html.md",Xs],["src/pages/writing/twitter.html.md",nr],["src/pages/writing/books.html.md",rr],["src/pages/writing/third-post.md",pr],["src/pages/writing/2007.html.md",yr],["src/pages/writing/using-mdx.mdx",br],["src/pages/writing.astro",gp],["src/pages/career.astro",Dp],["src/pages/about.md",xp]]),Fp=[Object.assign({name:"astro:jsx",serverEntrypoint:"astro/jsx/server.js",jsxImportSource:"astro"},{ssr:cd})],Ir=Object.assign(id({adapterName:"@astrojs/cloudflare",routes:[{file:"",links:["assets/about.7c0d9440.css"],scripts:[],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/cv.html.2408a25a.css"],scripts:[],routeData:{route:"/cv.html",type:"page",pattern:"^\\/cv\\.html\\/?$",segments:[[{content:"cv.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/cv.html.md",pathname:"/cv.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[],routeData:{route:"/rss.xml",type:"endpoint",pattern:"^\\/rss\\.xml$",segments:[[{content:"rss.xml",dynamic:!1,spread:!1}]],params:[],component:"src/pages/rss.xml.js",pathname:"/rss.xml",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/static-sites-with-next-js.html",type:"page",pattern:"^\\/writing\\/static-sites-with-next-js\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"static-sites-with-next-js.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/static-sites-with-next-js.html.md",pathname:"/writing/static-sites-with-next-js.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/lessons-from-the-jerk.html",type:"page",pattern:"^\\/writing\\/lessons-from-the-jerk\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"lessons-from-the-jerk.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/lessons-from-the-jerk.html.md",pathname:"/writing/lessons-from-the-jerk.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/making-things-for-fun.html",type:"page",pattern:"^\\/writing\\/making-things-for-fun\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"making-things-for-fun.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/making-things-for-fun.html.md",pathname:"/writing/making-things-for-fun.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/picking-up-the-pieces.html",type:"page",pattern:"^\\/writing\\/picking-up-the-pieces\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"picking-up-the-pieces.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/picking-up-the-pieces.html.md",pathname:"/writing/picking-up-the-pieces.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/protect-your-history.html",type:"page",pattern:"^\\/writing\\/protect-your-history\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"protect-your-history.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/protect-your-history.html.md",pathname:"/writing/protect-your-history.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/what-i-read-in-2016.html",type:"page",pattern:"^\\/writing\\/what-I-read-in-2016\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"what-I-read-in-2016.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/what-I-read-in-2016.html.md",pathname:"/writing/what-I-read-in-2016.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/2016-reading-list.html",type:"page",pattern:"^\\/writing\\/2016-reading-list\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"2016-reading-list.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/2016-reading-list.html.md",pathname:"/writing/2016-reading-list.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/2017-reading-list.html",type:"page",pattern:"^\\/writing\\/2017-reading-list\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"2017-reading-list.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/2017-reading-list.html.md",pathname:"/writing/2017-reading-list.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/links-august-2022.html",type:"page",pattern:"^\\/writing\\/links-august-2022\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"links-august-2022.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/links-august-2022.html.md",pathname:"/writing/links-august-2022.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/tragic-design-is.html",type:"page",pattern:"^\\/writing\\/tragic-design-is\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"tragic-design-is.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/tragic-design-is.html.md",pathname:"/writing/tragic-design-is.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/markdown-style-guide",type:"page",pattern:"^\\/writing\\/markdown-style-guide\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"markdown-style-guide",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/markdown-style-guide.md",pathname:"/writing/markdown-style-guide",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/links-part-one.html",type:"page",pattern:"^\\/writing\\/links-part-one\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"links-part-one.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/links-part-one.html.md",pathname:"/writing/links-part-one.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/16-open-tabs.html",type:"page",pattern:"^\\/writing\\/16-open-tabs\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"16-open-tabs.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/16-open-tabs.html.md",pathname:"/writing/16-open-tabs.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/twitter.html",type:"page",pattern:"^\\/writing\\/twitter\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"twitter.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/twitter.html.md",pathname:"/writing/twitter.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/books.html",type:"page",pattern:"^\\/writing\\/books\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"books.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/books.html.md",pathname:"/writing/books.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/third-post",type:"page",pattern:"^\\/writing\\/third-post\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"third-post",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/third-post.md",pathname:"/writing/third-post",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/writing/2007.html",type:"page",pattern:"^\\/writing\\/2007\\.html\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"2007.html",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/2007.html.md",pathname:"/writing/2007.html",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css","assets/using-mdx.5bb97bcc.css"],scripts:[],routeData:{route:"/writing/using-mdx",type:"page",pattern:"^\\/writing\\/using-mdx\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}],[{content:"using-mdx",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing/using-mdx.mdx",pathname:"/writing/using-mdx",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/using-mdx.5bb97bcc.css","assets/about.c08d5a1b.css","assets/writing.a85f881c.css"],scripts:[],routeData:{route:"/writing",type:"page",pattern:"^\\/writing\\/?$",segments:[[{content:"writing",dynamic:!1,spread:!1}]],params:[],component:"src/pages/writing.astro",pathname:"/writing",_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[],routeData:{route:"/career",type:"page",pattern:"^\\/career\\/?$",segments:[[{content:"career",dynamic:!1,spread:!1}]],params:[],component:"src/pages/career.astro",pathname:"/career",_meta:{trailingSlash:"ignore"}}},{file:"",links:["assets/about.7c0d9440.css","assets/about.c08d5a1b.css"],scripts:[],routeData:{route:"/about",type:"page",pattern:"^\\/about\\/?$",segments:[[{content:"about",dynamic:!1,spread:!1}]],params:[],component:"src/pages/about.md",pathname:"/about",_meta:{trailingSlash:"ignore"}}}],site:"https://sambreed.dev/",base:"/",markdown:{drafts:!1,syntaxHighlight:"shiki",shikiConfig:{langs:[],theme:"github-dark",wrap:!1},remarkPlugins:[],rehypePlugins:[],remarkRehype:{},extendDefaultPlugins:!1,isAstroFlavoredMd:!1},pageMap:null,renderers:[],entryModules:{"\0@astrojs-ssr-virtual-entry":"_worker.js","astro:scripts/before-hydration.js":""},assets:["/assets/about.7c0d9440.css","/assets/about.c08d5a1b.css","/assets/cv.html.2408a25a.css","/assets/using-mdx.5bb97bcc.css","/assets/writing.a85f881c.css","/favicon.svg","/placeholder-about.jpg","/placeholder-hero.jpg","/placeholder-social.jpg","/img/0411fe02-021e-4f3a-b45a-591907eea8a9.png","/img/48960a12-89d4-4e99-ae6e-54050e70c53a.png","/img/aaah.gif","/img/avatar-pointer.png","/img/avatar-sm.png","/img/avatar-teeny.png","/img/avatar.png","/img/bonzi-buddy.gif","/img/head-in-a-jar.png","/img/john-wayne.jpg","/img/kissinger.jpg","/img/ktm_690.jpg","/img/next-blog-1.gif","/img/the-cyber.jpg","/img/the-jerk-1978.jpg","/img/theodore-rex.jpg","/img/tragic-01.png","/img/twitter-images.gif","/img/twitter-images2.gif","/$server_build/assets/about.7c0d9440.css","/$server_build/assets/about.c08d5a1b.css","/$server_build/assets/cv.html.2408a25a.css","/$server_build/assets/using-mdx.5bb97bcc.css","/$server_build/assets/writing.a85f881c.css"]}),{pageMap:Cp,renderers:Fp}),Ip=void 0,Ep=Ni(Ir),Ph=Ep.onRequest,ei="start";ei in Zo&&Zo[ei](Ir,Ip);export{Ph as onRequest,Cp as pageMap,Fp as renderers};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
