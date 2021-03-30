/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJgQkzYADDT5_z_Ls_C7tHPtgi3YxlM9USqav6E7fBK2a8W-OHv4BErHAAJNiTLy4a-hxqhtD8;pt_pin=18650489762_p;',
  'pt_key=AAJgQk0TADAeP69llpk4BVY4w-VWsd767gninO3_CAYhNyKNMw0ChTEyX_iYckltxKdXJy3kmj8;pt_pin=jd_KOrsQoULPlXK;',
  'pt_key=AAJgQk03ADCKm6yso60aZ9Ncax5wxJAbk3RyC2DIAEEu1D7CFjQnxoL2xpH4yfN6OoBdxfhwLCY;pt_pin=jd_77d20c4558fbe;',
  'pt_key=AAJgQk1ZADClUHuBJKOlu1Ld3AdKdSAbVrdJBE4Yd1nc5w8Vln5woxzZIRemdtpSV7wDEQpVw_w;pt_pin=jd_vyeLCjWpuHjd;',
  'pt_key=AAJgQk2fADAMu8S4tuZxMb9mYe3eptzKNa4aMs5ygcLcLReP4ni8QWjdpLCrukNG3tdj0ibUk3I;pt_pin=jd_AvrydtTcZnZj;',
  'pt_key=AAJgQk20ADB5aTuYkSyLUmwuJdtaYuXIvXMygQbW6DwBULSmJ7tjzi566dJunX8OHQLhuEyp22s;pt_pin=jd_gqlTQCBoimMu;',
  'pt_key=AAJgQk3OADB3ayaDdJQHmbjvrXMoVEL8DrkgkPmujACO5ohEwzZLRb7bi7-xgvmNdgXS6ENbznc;pt_pin=jd_oIJTrzZJyBlF;',
  'pt_key=AAJgQk3tADB1fBjTXOk08X_CFOcKOTJz9fQz8QuH_lIRxT5icW_acSuye9mCNDMCPG1SjeIunnA;pt_pin=jd_utNUUwfdtcEz;',
  'pt_key=AAJgQk6WADB0X0AhXIZy_5ZH1uq4ORfbbl7pzcTImZFxRJzw_1MUzoM3phdU84XhoFeDofwEIGQ;pt_pin=jd_YBOjyqDgiooC;',
  'pt_key=AAJgQk6tADBm-EKSxZv2sR3xMOeksj7YlaIZJC4_B7no4Uq2xqn2u1JST_YMKdY-56mvPAeviIE;pt_pin=jd_kUeNoHpuhDcD;',
  'pt_key=AAJgQk7AADARBn3lJnqzMNhr-2Rnt1XeWYMeJ-45AwyWO3wovPRN2gcP_-uYX94XsWhgyvzh4rk;pt_pin=jd_kTdeXcRCEiEz;',

  'pt_key=AAJgQk14ADDuDCPfi-djuVq2eZ57RKkpn2VSWQKl9HY5rUDFmM3A6JUPenGQaFw5STLeJtsyku8;pt_pin=%E7%A5%9D%E5%BB%BA%E6%98%8E0306;',
  'pt_key=AAJgQk4YADCX_bQUgMP_GB_33ZUpNhcHTlA6wvb633X9DtCozB9j8StglFHcCl377RXlPW-HjAQ;pt_pin=jd_795c379c25b15;',
  'pt_key=AAJgQk43ADAGL02ZWUdsvMzPxGrZ7_57FfRwSQK9Yp-urQ8oy3FBUlB2migxAzWdlXm6YUtcbS4;pt_pin=jd_7aac884f55669;',
  'pt_key=AAJgQgAEADCXylIH3Q0Gdue4acq0WRWtoQOvw0l6d3Wv8EG0YiVQYIcFUe749U88ipTLExn_Bmc;pt_pin=Dick139;',
  'pt_key=AAJgQgKfADCh2quk1FlzEPHG0-W4gZU7ZXFKRSclVES8_Q99Jfz4t_AA-cvVsu7bsmkW6GR-FC0;pt_pin=jd_uzAlKbHwraCG;',
  'pt_key=AAJgPfgcADAi0ja3uflQErZmLIZPabS4QG-AEtnc97TMNwXwaDTCPUJZ_kgDms8iVLHvDqQRNTk;pt_pin=jd_6ebd66828198a;',
  'pt_key=AAJgPfiWADDDZGWpi-6G8ETF2yTBA2PYVKY1mo8M83YR4dEVDSH1062juP1HTumpHlOhJOH412g;pt_pin=%E7%BF%81%E6%99%93%E7%90%B32626;',
  'pt_key=AAJgQj1xADAHEmc1eebxT2aRVYI0Io631nKi5tVldi2XBCgQ5YYU9d9WGI9-xONsrKP1ttUOBDQ;pt_pin=13901977661_p;',
  'pt_key=AAJgQjtfADB-I9kAFwTfvZxw00FkoLPPK3e3A4FadlZ1qhUkjyXqtCClLP2jOf3DFGemx5rTSx0;pt_pin=xrzhang;',
  'pt_key=AAJgQdIuADBY8lUJDNw3lSb4bbHh4NZXiob0AgBpJ1-QyJ2-cCVVnnAm8RWM0aBBYccOUTQ-k0o;pt_pin=ying_xx;',
  'pt_key=AAJgQdLgADCF9FPPxQfapWJlO_7vClFaBqcTts2E_7HJGGxeVltsqXpETEXXubgDALgu1br3xEw;pt_pin=raoxiaoting;',
  'pt_key=AAJgR4StADAxhRJaBLu-somBMxXcNsqc03AXkfd9MG0-HOEeERpHVzHeqj57vvbmVthI3n8GzvY;pt_pin=gu758899;',
  'pt_key=AAJgSHDkAECYfnydMUg33Xa68cMeNYSsRMrMgH4GEenuLTtYVY3KrYEAWJBFJmP8WX8wUe9JBQTB9otzZtyKQ3YBVtM11SaW;pt_pin=%E6%81%8B%E4%B8%8A%E4%BD%A0%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%A7%90;',

]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  !(async () => {
   // await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
   // await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
