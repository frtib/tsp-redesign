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
urlList[161] = 'https://www.youtube.com/watch?v=7GuCvnCv1eg'; // Onboarding
urlList[162] = 'https://www.youtube.com/watch?v=xrH0l-HA58o'; // Once you're gone...
urlList[163] = 'https://www.youtube.com/watch?v=5z-KXHZAF-U'; // Cost of taking a TSP loan
urlList[164] = 'https://www.youtube.com/watch?v=XnlQZa7g_d4'; // How the TSP fits into FERS
urlList[165] = 'https://twitter.com/tsp4gov';
urlList[166] = 'https://www.irs.gov/individuals/tax-withholding-estimator';
urlList[167] = 'https://about.usps.com/newsroom/service-alerts/international/welcome.htm';
urlList[168] = 'https://www.gao.gov/assets/600/592832.pdf';
urlList[169] = 'https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/FICAM_Roadmap_and_Implem_Guid.pdf';
urlList[170] = '';
urlList[171] = '';
urlList[188] = 'https://www.federalregister.gov/documents/2020/07/17/2020-15468/privacy-act-of-1974-system-of-records'; // pages 43654-43679
// TSP to Retirement and Beyond Part I
urlList[189] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4db2e868e10685a6a7507d584578f46d';
urlList[190] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e9f3fe96f562021a3290c5335cbf5c631';
urlList[191] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e78b8efab986979e11eaff07df9b2b1f5';
urlList[192] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e29d42e4c373cc11709e01e5edf2f5874';
urlList[193] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e81480e63d52c038dcf23b39e3612c584';
urlList[194] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=edff6f5335afa1ab87d3791e8bdec5d6f';
// TSP to Retirement and Beyond Part II
urlList[195] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e212e9a8f3a2cf64f1e86e568ed8f3de5';
urlList[196] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7bac3b91898eff8078f7d87bf0d1e556';
urlList[197] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea51d5de19419e7beb5ec2c24f268efb6';
urlList[198] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e43d6d2622586fd63856f6b45a5ee9213';
urlList[199] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eeb0e12ec7063082064a605cc0b34a87d';
urlList[200] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7f08f1d477c3698c074ec3ab205c8b81';
// TSP Pre-Separation Training
urlList[201] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e41c34dc05eb9b9003e36ba8a2f73bde2';
urlList[202] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e29ea3ac549ef863cb6bfd5555218a052';
urlList[203] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3309cbffddbe1965c7ebd5660ad8bb35';
urlList[204] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea57e43494160b3f553c95fa042e465d3';
urlList[205] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e60b6507e2d668d89bc34d8ff807bef6d';
urlList[206] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ecf2180c68e08d65ab6b839d03bdcaa15';
urlList[207] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5f7ef5869ca7674661eec0de69b9c5ad';
urlList[208] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e43544b0a559520b4b9a80ae1c6ec715d';
urlList[209] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea2956a8120d34587888f4abe79efaa9c';
urlList[210] = '';
// ASR Training: TSP Investment Funds
urlList[211] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3ee5126de161543b7744984fe40926ba';
urlList[212] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e03243f7682f0a9df4130774add46860f';
urlList[213] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e13a59f6612a211412c75e84816790cba';
urlList[214] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e7392d0ec483a9fd63270718ac8b0ea12';
urlList[215] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8cdba27f37c4da445d1192d6c2320bf8';
urlList[216] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ea6020026faeeabccfbc2713c7a1ff620';
urlList[217] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=efb433a33b9c08675cac1af83c05f44f9 ';
urlList[218] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e41e0dd0944d09259eb5c9ba8c86c72ee';
urlList[219] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee117e010b0e6bfe37e13732ebebc8f62';
urlList[220] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e689949347b2f3ab1b5f7b5156c92a1d2';
urlList[221] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e47d690ec59098e8c83370363112c0127';
// ASR Training: Intro to TSP
urlList[222] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e26011060097706b0ff0ef307b36e2db2';
urlList[223] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ece2a42339aa414d336c7300704a1f1e8';
urlList[224] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e07c241f1ec5cec56a884375ed8b180c7';
urlList[225] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8cac230db64abc4772389d3bb63a5745';
urlList[226] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e95a4b8aaf11b2407080f9405914f3104';
urlList[227] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8489636ca804c741096d46a49839e43b';
urlList[228] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eccd396a580f44a92305c42940f55a377';
urlList[229] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=efe49a21577a556fc4b699fcb8afc9942';
urlList[230] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee061cd234b01dc2ede99b070847c902d';
// ASR Training: TSP post-service withdrawals
urlList[231] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e1acdef0af72a3b0aca8449c54d0f6a25';
urlList[232] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb597b5381814eb6fb93aff15ac53e341';
urlList[233] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4ea5f32aac59c2aa918dcee8a51514aa';
urlList[234] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e555c6d114e9906597a931d1661bf1e4f';
urlList[235] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eae597d97a58b3c664688f55bdf68b244';
urlList[236] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb153d9bae05ded5160b7de31c812a211';
urlList[237] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e29473ff46ef926c522cfd5e7986a076c';
urlList[238] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e9587cb82ed2e51a3aa0196752b87127f';
urlList[239] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=efb1d9aef83b94367a3a6701536afbbc9';
urlList[240] = '';
// ASR Training: TSP In-service withdrawals
urlList[241] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e99d787c4c62f077ee4904d4c5e665fcc';
urlList[242] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eebd578ed682af45c399272592135466e';
urlList[243] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e443d15c041aec428a8d2d72842636048';
urlList[244] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e454236bc1b931f717ae078c11907cd33';
urlList[245] = '';
urlList[246] = '';
urlList[247] = '';
urlList[248] = '';
urlList[249] = '';
urlList[250] = '';
// ASR Training: TSP A to Z
urlList[251] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4b1e07e12643c1740a0daa68ec4283c6';
urlList[252] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ed5e112ea167ed2eaee298e77352180f9';
urlList[253] = '';
urlList[254] = '';
urlList[255] = '';
// ASR Training: Death Benefits
urlList[256] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5e7c9024868c62b046e352460e073d0f';
urlList[257] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e5bae0fa50fb819551c748e1542b1746a';
urlList[258] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e0b2a9a00f5d44473fdda63f357ed9e16';
urlList[259] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e250a3b800b27d4417f0e29932ef0343b';
urlList[260] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8c3f3ccf2c5b779de923140c2545b609';
urlList[261] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee519bfdaa0d18122fb4c9464b42ced24';
urlList[262] = '';
urlList[263] = '';
urlList[264] = '';
// ASR Training: TSP Loans
urlList[265] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8267fafe201fb6ad284c62e52264c1c6';
urlList[266] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8a49604190234de95125fd7dde7a404a';
urlList[267] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e4cd097eba979ef19427e3b7f3c2ef5c2';
urlList[268] = '';
urlList[269] = '';
urlList[270] = '';
// ASR Training: TSP Early to Mid-Career Training
urlList[271] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3f1fe4859af7c1b16406cb1a291a4128';
urlList[272] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e334ae9ca38a0091de5eec1e9a7c6ba39';
urlList[273] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e2ece02772fafabd6c86826273775799b';
urlList[274] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee11da5f634c598275e0c7b9eda616537';
urlList[275] = '';
// TSP Contributions
urlList[276] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e2ee56cf2f4b531e263127b19ea568479';
urlList[277] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e3f14e304c0ba9541c8bd134e8ad698b4';
urlList[278] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e74bb6520db6e4a364ed0ddea9a9428fa';
urlList[279] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e144b93f9abf88a7b257ecf75d1089d68';
urlList[280] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e0e4ff6908e59aa76d9de036903a44238';
urlList[281] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ee8ac689963181b288d42b13be9421c5d';
urlList[282] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ef388d5705b4a7fec753a7c1bf626e3d9';
urlList[283] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e851df76941b013a4f637a8be70efce64';
urlList[284] = '';
urlList[285] = '';
// ASR Training: New to the TSP (or ready for a refresher)? Ask away.
urlList[286] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e33bac104c1b3836b7c8bf2d907b682cf';
urlList[287] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e0dd4474d05b710aa192b2957ddb33017';
urlList[288] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=ebc46d87015a246b5fae263645cd57c6b';
urlList[289] = '';
urlList[290] = '';
// ASR Training: 2020: What has changed at the TSP?
urlList[248] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=e8e0bdb098697fc42d16b0f40fbdd5c4e';
urlList[249] = 'https://tspmeet.webex.com/tspmeet/onstage/g.php?MTID=eb2cb5a3b7334dbc1c46b6be24ffc277a';
urlList[250] = '';
urlList[300] = '';
// END ASR Training courses
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
