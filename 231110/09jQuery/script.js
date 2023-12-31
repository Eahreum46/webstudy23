//문서 객체 조작!
// JS DOM
// createElement/ appendChild/ add/ remove/ clear

//제이쿼리에서 DOM을 사용하도록 도와주는 메서드
/*

1_1) $("요소선택자").html(): 선택한 요소선택자의 모든 하위요소를 가져오게 하는 메서드

1_2) $("요소선택자").html("새로운 요소"): 선택한 요소선택자의 모든 하위요소를 가져와서
새로운 요소로 다시 덮어쓰는 열할(*가져온 기존 요소는 모두 제거하고, 새로운 요소를 다시 생성해주는 역할)

2_1) $("요소선택자").text(): 요소선택자 내부에 있는 텍스트 요소를 가져와주는 역할

2_2) $("요소선택자").text(새 텍스트): 요소선택자 내부에 있는 텍스트 요소를 가져와서 새로운 텍스트로 교체!

3_1) $("요소선택자").attr("속성명"): 요소선택자의 속석명에 해당하는 속성값을 찾아올 떄 사용하는 메서드

3_2) $("요소선택자").attr("속성명","새로운 속성값"): 요소선택자의 속성명에 해당하는 속성값을 찾아와서 새로운 속성값으로 대체!

4) $("요소선택자").removeAttr("속성명"): 요소선택자에서 특정 속성명을 찾아서 해당 속성을 제거할 때!

5_1) $("요소선택자").prop("속성명"): 요소선택자의 속성값을 찾아올 때 사용!

5_2) $("요소선택자").prop("속성명","새로운 속성값"): 요소선택자의 속성값을 찾아와서 새로운 값으로 대체

6_1) $("요소선택자").val(): 해당 요소선택자의 value 값을 찾아올 때 사용

6_2) $("요소선택자").val("새로운 값"): 해당 요소선택자의 value 값을 찾아와서 새로운 값으로 대체

7_1) $("요소선택자").css("속성명"): 요소선택자의 css 속성값을 가져올 때 사용!

7_2) $("요소선택자").css("속성명", "새로운 값"): 요소선택자의 css 속성값을 가져와서 새로운 값으로 대체!

8) $("요소선택자").addClass("class 값"): 선택한 요소선택자의 class 속성에서 새로운 값을 추가!

9) $("요소선택자").removeClass("class 값"): 선택한 요소선택자의 class 속성에서 선택한 class값만 제거!

10) $("요소선택자").toggleClass("class 값"): 선택한 요소선택자에서 class값이 포함되어있으면 제거하고, class값이 없으면 추가하는 메서드

11) $("요소선택자").hasClass("class 값"): 

*/

$(function () {
  let result_1 = $("#sec_1").html();
  $("#sec_1 p").html('<a href="#">Text1</a>');

  let result_2 = $("#sec_2").text();
  F.html('<a href="#">Text1</a>');
  console.log(result_2);
  $("#sec h2").text("text()");
});
