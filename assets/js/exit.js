// define urls
var urlList = [];

// https://www.tsp.gov/exit/?idx=##
// https://www.tsp.gov/exit/?idx=67

urlList[ 0] = 'http://www.tsp.gov';
urlList[ 1] = 'http://service.govdelivery.com/service/multi_subscribe.html?code=USTSP&amp;custom_id=1178&amp;origin=http://service.govdelivery.com/demos/ustsp/success.html';
urlList[ 2] = 'http://service.govdelivery.com/service/multi_subscribe.html?code=USTSP';
urlList[ 3] = 'http://service.govdelivery.com/service/user.html?code=USTSP';
urlList[ 4] = 'https://service.govdelivery.com/accounts/USTSP/subscriber/new?qsp=918';
urlList[ 5] = 'http://www.dfas.mil/militarymembers/payentitlements/sdp.html';
urlList[ 6] = 'https://mypay.dfas.mil/';
urlList[ 7] = 'https://www.employeeexpress.gov/';
urlList[ 8] = 'https://liteblue.usps.gov/';
urlList[ 9] = 'https://www.nfc.usda.gov/EPPS/eplogin.aspx';
urlList[10] = 'http://www.us-cert.gov/current/';
urlList[11] = 'http://www.us-cert.gov/cas/alerts/';
urlList[12] = 'http://www.adobe.com/support/main.html';
urlList[13] = 'http://www.adobe.com/';
urlList[14] = 'http://support.microsoft.com/gp/howtoscript';
urlList[15] = 'http://support.apple.com/kb/PH17158';
urlList[16] = 'https://support.google.com/chrome/answer/114662';
urlList[17] = 'https://support.mozilla.org/en-US/kb/javascript-settings-for-interactive-web-pages';
urlList[18] = 'http://www.adobe.com/support/index.html';
urlList[19] = 'http://www.ssa.gov/myaccount/';
urlList[20] = 'http://www.opm.gov/';
urlList[21] = 'https://www.opm.gov/retirement-services/calculators/federal-ball-park-estimator/';
urlList[22] = 'http://windows.microsoft.com/en-us/internet-explorer/manage-delete-browsing-history-internet-explorer';
urlList[23] = 'http://support.apple.com/kb/PH17186';
urlList[24] = 'https://support.google.com/chrome/answer/95582';
urlList[25] = 'https://support.mozilla.org/en-US/kb/how-clear-firefox-cache';
urlList[26] = 'https://www.irs.gov/pub/irs-pdf/fw4p.pdf';
urlList[27] = 'http://www.fms.treas.gov/ipac/index.html';
urlList[28] = 'http://www.irs.gov/uac/Newsroom/Help-for-Victims-of-Hurricane-Sandy';
urlList[29] = 'http://www.irs.gov/uac/Newsroom/Retirement-Plans-Can-Make-Loans,-Hardship-Distributions-to-Sandy-Victims';
urlList[30] = 'https://fb.com/tsp4gov';
urlList[31] = 'https://www.irs.gov/uac/tax-relief-for-victims-of-severe-storms-flooding-in-louisiana';
urlList[32] = 'https://www.irs.gov/uac/retirement-plans-can-make-loans-and-hardship-distributions-to-louisiana-flood-victims';
urlList[33] = 'https://www.irs.gov/uac/newsroom/irs-gives-expanded-tax-relief-to-victims-of-hurricane-matthew-parts-of-four-states-eligible-extension-filers-have-until-march-15-to-file';
urlList[34] = 'https://www.irs.gov/uac/newsroom/retirement-plans-can-make-loans-hardship-distributions-to-victims-of-hurricane-matthew';
urlList[35] = 'https://www.youtube.com/watch?v=FNC5O_nlL4Q';
urlList[36] = 'http://www.questionpro.com/t/ALKFtZaHDG';
urlList[37] = 'https://investor.gov/additional-resources/news-alerts/alerts-bulletins/investor-alert-fraudsters-may-target-federal';
urlList[38] = 'https://adviserinfo.sec.gov/IAPD/Default.aspx';
urlList[39] = 'https://www.irs.gov/newsroom/tax-relief-for-victims-of-hurricane-harvey-in-texas';
urlList[40] = 'https://www.fema.gov/disasters';
urlList[41] = 'https://youtu.be/h7n-sWNrz1I';
urlList[42] = 'https://youtu.be/uPYDiMQo6Kg';
urlList[43] = 'https://www.youtube.com/tsp4gov';
urlList[44] = 'http://www.us-cert.gov/cas/tips/';
urlList[45] = 'http://www.ftc.gov/bcp/edu/microsites/idtheft/';
urlList[46] = 'http://www.OnGuardOnline.gov';
urlList[47] = 'https://hcm.direct-access.us/';
urlList[48] = 'https://www.govinfo.gov/content/pkg/USCODE-2016-title5/pdf/USCODE-2016-title5-partI-chap5-subchapII-sec552a.pdf';
urlList[49] = 'https://www.congress.gov/107/plaws/publ347/PLAW-107publ347.pdf';
urlList[50] = 'https://www.congress.gov/113/plaws/publ283/PLAW-113publ283.pdf';
urlList[51] = 'https://www.govinfo.gov/app/details/CFR-2018-title5-vol3/CFR-2018-title5-vol3-part1630';
urlList[52] = 'https://www.federalregister.gov/documents/2014/04/15/2014-08398/privacy-act-of-1974-systems-of-records';
urlList[53] = 'https://www.federalregister.gov/documents/2015/07/22/2015-17924/privacy-act-of-1974-systems-of-records';
urlList[54] = 'https://www.federalregister.gov/documents/2019/04/01/2019-06165/privacy-act-of-1974-system-of-records';
urlList[55] = 'https://www.govinfo.gov/app/details/FR-1990-05-07';
urlList[56] = 'https://www.federalregister.gov/documents/2016/11/17/2016-27702/privacy-act-of-1974-publication-of-notices-of-systems-of-records-and-proposed-new-systems-of-records';
urlList[57] = 'https://www.federalregister.gov/documents/2012/12/11/2012-29777/privacy-act-of-1974-update-existing-system-of-records';
urlList[58] = 'https://www.federalregister.gov/documents/2011/06/07/2011-13971/privacy-act-of-1974-update-existing-system-of-records';
urlList[59] = 'https://www.federalregister.gov/documents/2006/06/19/06-5459/privacy-act-of-1974-publication-of-notice-of-systems-of-records-a-proposed-new-routine-use-new';
urlList[60] = 'https://www.federalregister.gov/documents/2000/04/27/00-10088/privacy-act-of-1974-publication-of-notice-of-systems-of-records-and-proposed-new-routine-uses';
urlList[61] = 'https://www.federalregister.gov/documents/1996/07/15/93-17425/privacy-act-of-1974-publication-of-notices-of-systems-of-records-and-a-proposed-new-routine-use';
urlList[62] = 'https://www.federalregister.gov/documents/2013/12/09/2013-29342/privacy-act-of-1974-amendment-to-system-of-records';
urlList[63] = 'https://www.federalregister.gov/documents/2011/05/02/2011-10628/privacy-act-of-1974-amendment-to-system-of-records';
urlList[64] = 'https://www.federalregister.gov/documents/2012/07/31/2012-18658/privacy-act-of-1974-amendment-to-system-of-records';
urlList[65] = 'https://www.federalregister.gov/documents/2003/01/22/03-1101/privacy-act-of-1974-systems-of-records';
urlList[66] = 'https://www.federalregister.gov/documents/2003/05/08/03-11416/privacy-act-of-1974-systems-of-records-notice-correction';
urlList[67] = 'https://www.federalregister.gov/documents/2015/10/23/2015-26940/privacy-act-of-1974-notice-of-an-updated-system-of-records';
urlList[68] = 'https://www.irs.gov/newsroom/tax-relief-in-disaster-situations';
urlList[69] = 'https://www.federalregister.gov/documents/2018/12/11/2018-26697/privacy-act-of-1974-system-of-records';
urlList[70] = 'http://www.cvent.com/d/hnq8zb';
urlList[71] = 'http://www.cvent.com/d/xnq8z7';
urlList[72] = 'http://www.cvent.com/d/1nq8zh';
urlList[127] = 'https://www.consumer.ftc.gov/topics/privacy-identity-online-security';
urlList[128] = 'https://www.federalregister.gov/documents/2019/08/21/2019-18034/privacy-act-of-1974-system-of-records';
urlList[129] = 'https://www.youtube.com/user/TSP4gov/feed?activity_view=1';
urlList[142] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/264d507';
urlList[143] = 'https://www.govexec.com/pay-benefits/2019/11/viewpoint-lets-keep-level-playing-field-tsp-investors/161524/';
urlList[144] = 'https://www.federalregister.gov/documents/2016/02/10/2016-02673/privacy-act-of-1974-systems-of-records';
urlList[145] = 'https://www.regulations.gov';
urlList[146] = 'https://subscriberhelp.granicus.com/s/article/Granicus-LLC-SubscriberPrivacy-Statement';
urlList[147] = 'https://policies.google.com/privacy?hl=en';
urlList[148] = 'https://support.google.com/analytics/answer/6004245';
urlList[149] = 'https://tools.google.com/dlpage/gaoptout?hl=en';
urlList[150] = 'https://youtu.be/m15Cr8WAxhc';
urlList[151] = 'https://youtu.be/HGz9YdnI3f0';
urlList[152] = 'https://youtube.com/tsp4gov';
urlList[153] = 'https://youtu.be/xrH0l-HA58o';
urlList[154] = 'https://youtu.be/Tw-Djekceeo';
urlList[155] = 'https://youtu.be/tfxC3moUEQ0';
urlList[156] = 'https://api.fdsys.gov/link?collection=uscode&title=5&year=mostrecent&section=552&type=usc&link-type=html';
urlList[157] = 'https://api.fdsys.gov/link?collection=uscode&title=5&year=mostrecent&section=8474&type=usc&link-type=html';
urlList[158] = 'https://www.federalregister.gov/select-citation/2018/12/11/5-CFR-1630';
urlList[159] = 'http://www.bloombergindices.com';
urlList[160] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/27794ce';
urlList[161] = 'https://www.youtube.com/watch?v=jTA47cJhjFc'; // Onboarding
urlList[162] = 'https://www.youtube.com/watch?v=xrH0l-HA58o'; // Once you're gone...
urlList[163] = 'https://www.youtube.com/watch?v=5z-KXHZAF-U'; // Cost of taking a TSP loan
urlList[164] = 'https://www.youtube.com/watch?v=XnlQZa7g_d4'; // How the TSP fits into FERS
urlList[165] = 'https://twitter.com/tsp4gov';
urlList[166] = 'https://www.irs.gov/individuals/tax-withholding-estimator';
urlList[167] = 'https://www.usps.com/international/mail-shipping-services.htm#readmore';
urlList[168] = 'https://www.gao.gov/assets/600/592832.pdf';
urlList[169] = 'https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/FICAM_Roadmap_and_Implem_Guid.pdf';
urlList[170] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea45124e5d04469e13e3835735854eb5e';
urlList[171] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed4e1af629afd1d8899f9ae2a8100e512';
urlList[188] = 'https://www.federalregister.gov/documents/2020/07/17/2020-15468/privacy-act-of-1974-system-of-records'; // pages 43654-43679
urlList[189] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed4f3554ba705d397e0bc7d2b4e86962e';
urlList[190] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e40de6ee08090d9c19f95c0006df0dbb5';
urlList[191] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea543154f5a1559e42d014ca0c96e589b';
urlList[192] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e50ce70275865229d20240cc2d843f05d';
urlList[193] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ec1edffa23781080636e535c434a1a5a7';
urlList[194] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e99d787c4c62f077ee4904d4c5e665fcc';
urlList[195] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e186a5f2cf8ffa460803baac1dbc9eebd';
urlList[196] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e03b4d5c07fb12137a5ffc3a9b4164536';
urlList[197] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8c60b0c54e947505fc486337f67a1e8f';
urlList[198] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4fe7f131486b2cdbc4780f0bff4992ec';
urlList[199] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e294318169b41c8dfa5e977ba173b1fa0';
urlList[200] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb9738c487524a8032aae5a259ea706bb';
urlList[201] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3c7636250dbc86e0d576b814a85d2515';
urlList[202] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e2ee56cf2f4b531e263127b19ea568479';
urlList[203] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3f14e304c0ba9541c8bd134e8ad698b4';
urlList[204] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e11e3a04cd24a1527fe82be920cdb7273';
urlList[205] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e6b7f28ba25e562bfc57be23d9e823631';
urlList[206] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3ee5126de161543b7744984fe40926ba';
urlList[207] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5e7c9024868c62b046e352460e073d0f';
urlList[208] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5bae0fa50fb819551c748e1542b1746a';
urlList[209] = 'https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/pension-protection-act/investing-and-diversification';
urlList[210] = 'https://www.consumer.ftc.gov/topics/online-security';
urlList[211] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=efe1ee268d3443eeaf132c595ffc689cc';
urlList[212] = 'https://www.federalregister.gov/documents/2020/08/24/2020-18271/privacy-act-of-1974-system-of-records';
urlList[213] = 'https://www.federalregister.gov/documents/2020/08/28/2020-18944/privacy-act-of-1974-system-of-records';
urlList[214] = 'https://www.federalregister.gov/documents/2010/06/17/2010-14583/employee-contribution-elections-and-contribution-allocations';
urlList[215] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e33bac104c1b3836b7c8bf2d907b682cf';
urlList[216] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e0dd4474d05b710aa192b2957ddb33017';
urlList[217] = 'https://americasavesweek.org/';
urlList[218] = 'https://militarysaves.org/';
urlList[225] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e1acdef0af72a3b0aca8449c54d0f6a25';
urlList[226] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb597b5381814eb6fb93aff15ac53e341';
urlList[227] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed4904c50811754a68efe6b11f5286a5a';
urlList[228] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee98530e44846bed4cac7f49993325e7a';
urlList[229] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e95ea21c6ed4330d5c98da3111d3d3e13';
urlList[230] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e02a80a28836471db004f611d0cb074d2';
urlList[231] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ec61eb38b5814b91037048b29fdf50028';
urlList[232] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e11cb3dc67f9f219f5a8892a0ea38f9ec';
urlList[233] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e109f0aca3d3e6904cd6045f20109f9ce';
urlList[234] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eec5230ac7a4e99cf90efaaf1d2edb6ec';
urlList[235] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ef335f484aeb404f1830b4aea78a34551';
urlList[236] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7a55f07c5ffe06dfb0341cc25d1546b4';
urlList[237] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ec5b5839cb9fa2841a64ffc30cf684dd5';
urlList[238] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ecabb3b78a37e915c76f278a8965c0abc';
urlList[239] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7c69aa0c5be036744b00249e1ac2abc1';
urlList[240] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8d55a27286357fe23e76f19edfa5c783';
urlList[241] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed7215f8617f81e83b6bceffe9bfaca3a';
urlList[242] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eca7d033c9de17162e1fa95ae75649e9b';
urlList[243] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/28721dd';
urlList[244] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/296aa22'; // July 2020 newsletter
urlList[245] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/2a73529'; // October 2020 newsletter

function getIdx() {
  var idx = getQueryString('idx');
  if (typeof idx === 'undefined') { return -1; }
  idx = idx.replace(/\D/g,'');
  idx = idx.substring(0,3);
  idx = parseInt(idx);
  if ($.isNumeric(idx)) { return idx; }
  return -1;
}

function getURL(idx) {
  if (idx < 0) { return ''; }
  if (idx > (urlList.length+1)) { return ''; }
  var str = urlList[idx];
  if (typeof str === 'undefined') { return ''; }
  return str;
}

function updateExitPage() {
  var url = getURL(getIdx());
  // default text for when URL not in list
  var output = 'link is not available';
  if (url != '') {
      // build the url redirect here
      // content="#;..." sets the time delay
      output = '<a href="'+url+'">please use this link</a><meta http-equiv="refresh" content="5;URL='+url+'">';
  }
  $('#offsiteLink').html(output);
}
