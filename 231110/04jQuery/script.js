//속성 탐색 선택자
/*
1) $("요소선택자[속성]"): 여러 요소선택자들 중에서 특정 속성이 포함된 요소선택자만 
찾아올 때 사용하는 선택자

2) $("요소선택자[속성=값]"): 해당 요소선택자 중에서 특정 속성 및 속성 값을 갖고 있는
요소 선택자만 찾아올 때 사용하는 선택자!

3) $("요소선택자[속성 ^= 값") : 해당 요소선택자 중에서 특정 속성 및 속성값을 갖고 있는
요소선택자를 찾아오긴 하나, 해당 값이 특정요소로 시작될때에만 선택자를 찾아오는 선택자!

4) $("요소선택자[속성 $= 값") : 해당 요소선택자 중에서 특정 속성 및 속성값을 갖고 있는
요소선택자를 찾아오긴 하나, 해당 값이 특정요소로 끝날때에만 선택자를 찾아오는 선택자!

5) $("요소선택자:hidden"): 숨겨져 있는 요소만 선택해오는 선택자

6) $("요소선택자:visible"): 보여지는 요소만 선택해오는 선택자

7) $(":text"):<input> 태그중에서 type의 속성값이 text인 요소만 선택해오는 선택자

8) $(":selected"):<input> 태그중에서 type의 속성값이 selected인 요소만 선택해오는 선택자

9) $(":checked"):<input> 태그중에서 type의 속성값이 checked인 요소만 선택해오는 선택자
*/

$(function () {
  $("#wrap a[target]").css({
    color: "#f00",
  });
  $("#wrap a[href^=https]").css({
    color: "#0f0",
  });
  $("#wrap a[href$=net]").css({
    color: "#00f",
  });
  $("#wrap a[href*=google]").css({
    color: "#000",
  });
  $("#member_f :text").css({
    background: "#ff0",
  });
  $("#member_f :password").css({
    "background-color": "#0ff",
  });
});