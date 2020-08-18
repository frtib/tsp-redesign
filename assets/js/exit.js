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
urlList[190] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e1188056359662d316309a5856babfab8';
urlList[191] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e42bb4476c7510436619dd48d7c24163b';
urlList[192] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e50ce70275865229d20240cc2d843f05d';
urlList[193] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ec1edffa23781080636e535c434a1a5a7';
urlList[194] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8f5b60c426c5f967b13c555cafdad34e';
urlList[195] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e38de22e467e33bd8985e97ad5cf027b5';
urlList[196] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eeb7b5b5195dcb3173cd51fcf23fe0f3d';
urlList[197] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8413129ea2c28e6f09abaadc37af1960';
urlList[198] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eebe3cfd96ca957116f281057893d86cb';
urlList[199] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8191a9a4e752312816439666a485decd';
urlList[200] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb9738c487524a8032aae5a259ea706bb';
urlList[201] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3c7636250dbc86e0d576b814a85d2515';
urlList[202] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5125f3d4c99b71c899ffb3fa0ea63dd4';
urlList[203] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e02851fffa6e155a8730998764e276db3';
urlList[204] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3022b648dba5e99ee894dab67a6f06f4';
urlList[205] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5877ea77c5adc3814a661d605a4fddc4';
urlList[206] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4b74cca84ddcf839bc37fff7ec3b3fa4';
urlList[207] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e2cdaeffafa7f7af286d8d02d91cf2df8';
urlList[208] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8306a4338edca33f6b6fe44ef6db4968';
urlList[209] = '';
urlList[210] = '';
urlList[211] = '';
urlList[212] = '';
urlList[213] = '';
urlList[214] = 'https://www.federalregister.gov/documents/2010/06/17/2010-14583/employee-contribution-elections-and-contribution-allocations';
urlList[215] = '';
urlList[216] = '';
urlList[217] = 'https://americasavesweek.org/';
urlList[218] = 'https://militarysaves.org/';
urlList[225] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb52598961b50ce800b8c4f06d16325f9';
urlList[226] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e32828eba3e8b30ebe0967992c5663af6';
urlList[227] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e36c0ae8e8c0353994438a47318525e9a';
urlList[228] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e00f62356eac1220eafa220256a8a3d63';
urlList[229] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e95ea21c6ed4330d5c98da3111d3d3e13';
urlList[230] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e02a80a28836471db004f611d0cb074d2';
urlList[231] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ec61eb38b5814b91037048b29fdf50028';
urlList[232] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e11cb3dc67f9f219f5a8892a0ea38f9ec';
urlList[233] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e109f0aca3d3e6904cd6045f20109f9ce';
urlList[234] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eec5230ac7a4e99cf90efaaf1d2edb6ec';
urlList[235] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ef335f484aeb404f1830b4aea78a34551';
urlList[236] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7a55f07c5ffe06dfb0341cc25d1546b4';
urlList[237] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee1608be478b717e7e6553c94a9daa35e';
urlList[238] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eff132edc5c790d6acfb8e8b512255b8a';
urlList[239] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7c69aa0c5be036744b00249e1ac2abc1';
urlList[240] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8d55a27286357fe23e76f19edfa5c783';
urlList[241] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e9aad15438ff1d1fb4cb996abbdb0d59d';
urlList[242] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e90fcceb4ed8011fed91d3058cd00e8fc';

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
