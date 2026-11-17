(function(){
  var P={name:'김유진 대표',tel:'01058191279',telTxt:'010-5819-1279',office:'07088441279',officeTxt:'070-8844-1279',mail:'sesjin1@naver.com',vcf:'/srglobal.vcf',
    map:'https://map.naver.com/p/search/%EC%9D%98%EC%99%95%ED%85%8C%ED%81%AC%EB%85%B8%ED%8C%8C%ED%81%AC%20%EB%8D%94%EB%A6%AC%EB%B8%8C%EB%B9%84%EC%A6%88%EC%9B%90'};
  var css='#srx-fab{position:fixed;right:18px;bottom:18px;z-index:99998;padding:12px 18px;border:1px solid rgba(255,255,255,.25);border-radius:999px;background:rgba(18,20,26,.82);color:#fff;font:600 14px/1 "Pretendard",-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;letter-spacing:.5px;cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 20px rgba(0,0,0,.35)}'
  +'#srx-dim{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);display:none;align-items:flex-end;justify-content:center}'
  +'#srx-dim.on{display:flex}'
  +'#srx-sheet{width:100%;max-width:440px;background:#fff;color:#1d1f22;border-radius:14px 14px 0 0;padding:22px 20px calc(18px + env(safe-area-inset-bottom));font-family:"Pretendard",-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;animation:srxUp .25s ease-out}'
  +'@media(min-width:600px){#srx-dim{align-items:center}#srx-sheet{border-radius:14px}}'
  +'@keyframes srxUp{from{transform:translateY(30px);opacity:0}to{transform:none;opacity:1}}'
  +'#srx-sheet .h{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:14px;border-bottom:1px solid #e6e7ea}'
  +'#srx-sheet .lg{font-size:22px;letter-spacing:-.3px}#srx-sheet .lg b{font-weight:800}'
  +'#srx-sheet .nm{font-size:13px;color:#6b7078;margin-top:5px}'
  +'#srx-sheet .x{border:0;background:none;font-size:26px;line-height:1;color:#9aa0a6;cursor:pointer;padding:0 4px}'
  +'#srx-sheet a.r{display:flex;justify-content:space-between;align-items:center;padding:15px 4px;border-bottom:1px solid #f0f1f3;color:#1d1f22;text-decoration:none;font-size:15px;font-weight:600}'
  +'#srx-sheet a.r span{font-weight:400;font-size:13px;color:#6b7078}'
  +'#srx-sheet a.main{display:block;margin-top:14px;padding:15px;border-radius:8px;background:#1d1f22;color:#fff;text-align:center;font-weight:600;font-size:15px;text-decoration:none}'
  +'#srx-sheet .home{display:block;width:100%;margin-top:8px;padding:13px;border:1px solid #e6e7ea;border-radius:8px;background:#fff;color:#1d1f22;font:inherit;font-size:14px;cursor:pointer}';
  function init(){
    var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
    var fab=document.createElement('button');fab.id='srx-fab';fab.type='button';fab.textContent='연락하기';
    var dim=document.createElement('div');dim.id='srx-dim';
    dim.innerHTML='<div id="srx-sheet" role="dialog" aria-label="연락 메뉴">'
      +'<div class="h"><div><div class="lg"><b>SR</b>Global</div><div class="nm">에스알글러벌 '+P.name+'</div></div><button class="x" type="button" aria-label="닫기">&times;</button></div>'
      +'<a class="r" href="tel:'+P.tel+'">전화걸기 <span>'+P.telTxt+'</span></a>'
      +'<a class="r" href="tel:'+P.office+'">사무실 전화 <span>'+P.officeTxt+'</span></a>'
      +'<a class="r" href="sms:'+P.tel+'">문자 보내기 <span>'+P.telTxt+'</span></a>'
      +'<a class="r" href="mailto:'+P.mail+'">이메일 보내기 <span>'+P.mail+'</span></a>'
      +'<a class="r" href="'+P.map+'" target="_blank" rel="noopener">오시는 길 <span>네이버 지도</span></a>'
      +'<a class="main" href="'+P.vcf+'" download="에스알글러벌_김유진.vcf">연락처 저장</a>'
      +'<button class="home" type="button">홈페이지 둘러보기</button></div>';
    document.body.appendChild(fab);document.body.appendChild(dim);
    function open(){dim.classList.add('on')} function close(){dim.classList.remove('on')}
    fab.onclick=open;
    dim.onclick=function(e){if(e.target===dim)close()};
    dim.querySelector('.x').onclick=close;dim.querySelector('.home').onclick=close;
    if(/[?&]card\b/.test(location.search))open();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
