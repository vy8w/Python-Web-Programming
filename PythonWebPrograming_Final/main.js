// 캘린더
// document.getElementById('submit-button').addEventListener('click', function() {
//   var selectedDate = document.getElementById('selected-date').value;
  
//   alert('Selected Date: ' + selectedDate);
// });

function searchFestivals() {
    var selectedDate = getSelectedDate();
    var selectedLocation = getSelectedLocation();

    // 여기에서 선택한 날짜와 지역을 기반으로 필터링된 축제 데이터를 가져와서 표시하는 로직을 추가하세요.
    // 인기 키워드와 방문자 많은 축제 정보도 표시할 수 있도록 구현합니다.

    // 이 부분을 데이터를 받아와서 표시하는 로직으로 대체하세요.
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "선택한 날짜: " + selectedDate + "<br>선택한 지역: " + selectedLocation;
  }

// 아코디언
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
      const inputBox = accordion.closest(".input-box");
      const panel = accordion.nextElementSibling;
      
      if (inputBox.classList.contains("expanded")) {
        inputBox.classList.remove("expanded");
        panel.style.display = "none";
      } else {
        inputBox.classList.add("expanded");
        panel.style.display = "block";
      }
    });
  });
});
