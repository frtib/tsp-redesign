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
urlList[70] = 'https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/understanding-your-retirement-plan-fees';
urlList[71] = '';
urlList[72] = '';
urlList[73] = '';
urlList[74] = '';
urlList[75] = '';
urlList[76] = '';
urlList[77] = '';
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
urlList[161] = 'https://www.youtube.com/watch?v=7GuCvnCv1eg'; // Onboarding
urlList[162] = 'https://www.youtube.com/watch?v=xrH0l-HA58o'; // Once you're gone...
urlList[163] = 'https://www.youtube.com/watch?v=5z-KXHZAF-U'; // Cost of taking a TSP loan
urlList[164] = 'https://www.youtube.com/watch?v=XnlQZa7g_d4'; // How the TSP fits into FERS
urlList[165] = 'https://twitter.com/tsp4gov';
urlList[166] = 'https://www.irs.gov/individuals/tax-withholding-estimator';
urlList[167] = 'https://about.usps.com/newsroom/service-alerts/international/welcome.htm';
urlList[168] = 'https://www.gao.gov/assets/600/592832.pdf';
urlList[169] = 'https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/FICAM_Roadmap_and_Implem_Guid.pdf';
urlList[170] = 'https://www.federalregister.gov/documents/2020/07/17/2020-15468/privacy-act-of-1974-system-of-records'; // pages 43654-43679
// TSP Early to Mid-Career Training
urlList[171] = '';
urlList[172] = '';
urlList[173] = '';
urlList[174] = '';
urlList[175] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=efdd5e8efebfe233a630d7fbf465768e5';
urlList[176] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e79c22c41f8240d8db3361c02cb91fb6c';
urlList[177] = '';
urlList[178] = '';
urlList[179] = '';
urlList[180] = '';
urlList[181] = '';
urlList[182] = '';
urlList[183] = '';
urlList[184] = '';
urlList[185] = '';
urlList[186] = '';
urlList[187] = '';
// TSP to Retirement and Beyond Part I
urlList[188] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eff9cc6262d66c6c3ddd3f6fd0796acbc';
urlList[189] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e14c011ad9081411684b7f0534bacae06';
urlList[190] = '';
urlList[191] = '';
urlList[192] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e29d42e4c373cc11709e01e5edf2f5874';
urlList[193] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e81480e63d52c038dcf23b39e3612c584';
urlList[194] = '';
// TSP to Retirement and Beyond Part II
urlList[195] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7fce2f440aef117aba17d5b490b5b497';
urlList[196] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea5a82ff219af868cdbf317f9de280dff';
urlList[197] = '';
urlList[198] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e43d6d2622586fd63856f6b45a5ee9213';
urlList[199] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eeb0e12ec7063082064a605cc0b34a87d';
urlList[200] = '';
// TSP Pre-Separation Training
urlList[201] = '';
urlList[202] = '';
urlList[203] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5436b4f6541ac044684ab0e87d02eed9';
urlList[204] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e46861667bacd47d710447d87babc9ace';
urlList[205] = '';
urlList[206] = '';
urlList[207] = '';
urlList[208] = '';
urlList[209] = '';
urlList[210] = '';
// Intro to TSP
urlList[222] = '';
urlList[223] = '';
urlList[224] = '';
urlList[225] = '';
urlList[226] = '';
urlList[227] = '';
urlList[228] = '';
urlList[229] = '';
urlList[230] = '';
urlList[231] = '';
urlList[232] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e912c240b7e4a0c4edf0e78be1ab6a702';
urlList[233] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e02876e8e81163acce36f0f65816b3bbc';
urlList[234] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e10da42f0823dccc88257499e59fc98b7';
// TSP In-service withdrawals
urlList[241] = '';
urlList[242] = '';
urlList[243] = '';
urlList[244] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4390de5040b9e0fea0c7bda7e59662d5';
urlList[245] = '';
urlList[246] = '';
urlList[247] = '';
urlList[248] = '';
urlList[249] = '';
urlList[250] = '';
// TSP Contributions
urlList[276] = '';
urlList[277] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e14118634c8e758d33b1ddb93ddf98410';
urlList[278] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7cc3167bb9f58beb6cc136f8cbad2477';
urlList[279] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eab684c7d557fcacb5ae034149898bb78';
urlList[280] = '';
urlList[281] = '';
urlList[282] = '';
urlList[283] = '';
urlList[284] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4b6b2541c909d5230f4d5bde870face6';
urlList[285] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea8f52029a639277269e1598b61d51724';
// New to the TSP (or ready for a refresher)? Ask away.
urlList[286] = '';
urlList[287] = '';
urlList[288] = '';
urlList[289] = '';
urlList[290] = '';
urlList[291] = '';
urlList[292] = '';
urlList[293] = '';
urlList[294] = '';
// END New to the TSP
urlList[301] = 'https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/pension-protection-act/investing-and-diversification';
urlList[302] = 'https://americasavesweek.org/';
urlList[303] = 'https://militarysaves.org/';
urlList[304] = 'https://www.consumer.ftc.gov/topics/online-security';
urlList[305] = 'https://www.federalregister.gov/documents/2020/08/24/2020-18271/privacy-act-of-1974-system-of-records';
urlList[306] = 'https://www.federalregister.gov/documents/2020/08/28/2020-18944/privacy-act-of-1974-system-of-records';
urlList[307] = 'https://www.federalregister.gov/documents/2010/06/17/2010-14583/employee-contribution-elections-and-contribution-allocations';
urlList[308] = '';
// April 2020 newsletter
urlList[309] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/28721dd';
// July 2020 newsletter
urlList[310] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/296aa22';
// October 2020 newsletter
urlList[311] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/2a73529';
// January 2021 newsletter
urlList[312] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/2b66fd7';
// February 2021 Executive Director Letter
urlList[313] = 'https://content.govdelivery.com/accounts/USTSP/bulletins/2bf8ec3';
// Accenture Federal Services Link for bulletin 21-1
urlList[314] = 'https://www.accenture.com/us-en/industries/afs-index';
// TSP Investment Funds
urlList[401] = '';
urlList[402] = '';
urlList[403] = '';
urlList[404] = '';
urlList[405] = '';
urlList[406] = '';
urlList[407] = '';
urlList[408] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e1c7688fee20df57c71a383a0bde601fa';
urlList[409] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4dec3a00e1e07bbd2687f3fc5e07c579';
urlList[410] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e31fbe5e31d6d212428aebb4cd57bbc53';
urlList[411] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea7e688517523ebcb87680e322d8092ec';
urlList[412] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=edbdd606f33f3d35af830a52e0db0f193';
urlList[413] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eca09445810f853a7d5d9f98ed4650e47';
urlList[414] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ef851a42bbf824ffef40e8801533f43a7';
urlList[415] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e537a30d7124722510c0c5a3be6492d48';
urlList[416] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3b9305d0f0dae7915a39043d9316ec09';
urlList[417] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8f53b9c3753ff642b205267a308f5f0f';
// TSP Loans
urlList[501] = '';
urlList[502] = '';
urlList[503] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5b602ad5f19d79d84e5e63d989cbaad6';
// TSP In-service withdrawals
urlList[601] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e443d15c041aec428a8d2d72842636048';
urlList[602] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e454236bc1b931f717ae078c11907cd33';
urlList[603] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=edd841ecf140d6ab64875021459d2c8cf';
urlList[604] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4390de5040b9e0fea0c7bda7e59662d5';
// TSP A to Z
urlList[701] = '';
urlList[702] = '';
urlList[703] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed9c9d8f784e35f3c5c607cd12fea5dc6';
urlList[704] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb7f9f14033d1857e7511488be6b0e351';
// TSP post-service withdrawals
urlList[801] = '';
urlList[802] = '';
urlList[803] = '';
urlList[804] = '';
urlList[805] = '';
urlList[806] = '';
urlList[807] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8860385d8c0621eab9a6bdaedd7d1573';
urlList[808] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea83e37330a5acd601b9f722149625eb4';
urlList[809] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ef46486f51ffcdefad6e34dea05bbad9b';
urlList[810] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eea6cc552102c92f527f724d572053a2e';
// Death Benefits
urlList[901] = '';
urlList[902] = '';
urlList[903] = '';
urlList[904] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e77439cfa3fe817cbc21b3181c931d2ef';
urlList[905] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e6133e6347e56cbecc56203b43786aca3';
urlList[906] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e693c94ad57e2117b6606024917dde126';



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
      output = '<a href="'+url+'">please use this link</a><meta http-equiv="refresh" content="0;URL='+url+'">';
  }
  $('#offsiteLink').html(output);
}
