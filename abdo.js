  


 function saveAndCheckPassword() {
      // الحصول على قيم المدخلات
      const passwordInput = document.getElementById("passwordteather"); 
      const textInput = document.getElementById("myInput");   
      const password = passwordInput.value;
      const text = textInput.value;
     // التحقق من كلمة المرور لحفظ النص    
      if (password === "qw1") {    
        // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
        let savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];    
        savedTexts.push(text);
        localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
           // عرض النصوص المحفوظة
           displaySavedTexts();
      } else { 
        alert("كلمة المرور خاطئة");
      }
}
    // دالة لعرض النصوص المحفوظة
    function displaySavedTexts() {
      const resultDiv = document.getElementById("result");
      const savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
      resultDiv.innerHTML = ""; // مسح المحتوى السابق
      savedTexts.forEach(text => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = text;
        resultDiv.appendChild(newParagraph);
      });
    }

    
    function saveAndCheckPassword1() {
      const passwordInput = document.getElementById("passwordteather"); 
    const textInput1 = document.getElementById("myInput1");   
  const password1 = passwordInput.value;
  const text1 = textInput1.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password1 === "qw1") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts1 = JSON.parse(localStorage.getItem("savedTexts1")) || [];    
    savedTexts1.push(text1);
    localStorage.setItem("savedTexts1", JSON.stringify(savedTexts1));        
       // عرض النصوص المحفوظة
       displaySavedTexts1();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts1() {
  const resultDiv1 = document.getElementById("result1");
  const savedTexts1 = JSON.parse(localStorage.getItem("savedTexts1")) || [];
  resultDiv1.innerHTML = ""; // مسح المحتوى السابق
  savedTexts1.forEach(text1 => {
    const newParagraph1 = document.createElement("p");
    newParagraph1.textContent = text1;
    resultDiv1.appendChild(newParagraph1);
  });
}
  

function saveAndCheckPassword2() {
  const passwordInput = document.getElementById("passwordteather"); 
const textInput2 = document.getElementById("myInput2");   
const password2 = passwordInput.value;
const text2 = textInput2.value;
// التحقق من كلمة المرور لحفظ النص    
if (password2 === "qw1") {    
// الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
let savedTexts2 = JSON.parse(localStorage.getItem("savedTexts2")) || [];    
savedTexts2.push(text2);
localStorage.setItem("savedTexts2", JSON.stringify(savedTexts2));        
   // عرض النصوص المحفوظة
   displaySavedTexts2();
} else {
alert("كلمة المرور خاطئة");
}
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts2() {
const resultDiv2 = document.getElementById("result2");
const savedTexts2 = JSON.parse(localStorage.getItem("savedTexts2")) || [];
resultDiv2.innerHTML = ""; // مسح المحتوى السابق
savedTexts2.forEach(text2 => {
const newParagraph2 = document.createElement("p");
newParagraph2.textContent = text2;
resultDiv2.appendChild(newParagraph2);
});
}
  

function saveAndCheckPassword3() {
 const passwordInput = document.getElementById("passwordteather"); 
const textInput3 = document.getElementById("myInput3");   
const password3 = passwordInput.value;
const text3 = textInput3.value;
// التحقق من كلمة المرور لحفظ النص    
if (password3 === "qw1") {    
// الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
let savedTexts3 = JSON.parse(localStorage.getItem("savedTexts3")) || [];    
savedTexts3.push(text3);
localStorage.setItem("savedTexts3", JSON.stringify(savedTexts3));        
   // عرض النصوص المحفوظة
   displaySavedTexts3();
} else {
alert("كلمة المرور خاطئة");
}
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts3() {
const resultDiv3 = document.getElementById("result3");
const savedTexts3 = JSON.parse(localStorage.getItem("savedTexts3")) || [];
resultDiv3.innerHTML = ""; // مسح المحتوى السابق
savedTexts3.forEach(text3 => {
const newParagraph3 = document.createElement("p");
newParagraph3.textContent = text3;
resultDiv3.appendChild(newParagraph3);
});
}

function saveAndCheckPassword4() {
  const passwordInput = document.getElementById("passwordteather"); 
 const textInput4 = document.getElementById("myInput4");   
 const password4 = passwordInput.value;
 const text4 = textInput4.value;
 // التحقق من كلمة المرور لحفظ النص    
 if (password4 === "qw1") {    
 // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
 let savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];    
 savedTexts4.push(text4);
 localStorage.setItem("savedTexts4", JSON.stringify(savedTexts4));        
    // عرض النصوص المحفوظة
    displaySavedTexts4();
 } else {
 alert("كلمة المرور خاطئة");
 }
 }
 // دالة لعرض النصوص المحفوظة
 function displaySavedTexts4() {
 const resultDiv4 = document.getElementById("result4");
 const savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];
 resultDiv4.innerHTML = ""; // مسح المحتوى السابق
 savedTexts4.forEach(text4 => {
 const newParagraph4 = document.createElement("p");
 newParagraph4.textContent = text4;
 resultDiv4.appendChild(newParagraph4);
 });
 }

 
function saveAndCheckPassword5() {
  const passwordInput = document.getElementById("passwordteather"); 
 const textInput5 = document.getElementById("myInput5");   
 const password5 = passwordInput.value;
 const text5 = textInput5.value;
 // التحقق من كلمة المرور لحفظ النص    
 if (password5 === "qw1") {    
 // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
 let savedTexts5 = JSON.parse(localStorage.getItem("savedTexts5")) || [];    
 savedTexts5.push(text5);
 localStorage.setItem("savedTexts5", JSON.stringify(savedTexts5));        
    // عرض النصوص المحفوظة
    displaySavedTexts5();
 } else {
 alert("كلمة المرور خاطئة");
 }
 }
 // دالة لعرض النصوص المحفوظة
 function displaySavedTexts5() {
 const resultDiv5 = document.getElementById("result5");
 const savedTexts5 = JSON.parse(localStorage.getItem("savedTexts5")) || [];
 resultDiv5.innerHTML = ""; // مسح المحتوى السابق
 savedTexts5.forEach(text5 => {
 const newParagraph5 = document.createElement("p");
 newParagraph5.textContent = text5;
 resultDiv5.appendChild(newParagraph5);
 });
 }

 
function saveAndCheckPassword6() {
  const passwordInput = document.getElementById("passwordteather"); 
 const textInput6 = document.getElementById("myInput6");   
 const password6 = passwordInput.value;
 const text6 = textInput6.value;
 // التحقق من كلمة المرور لحفظ النص    
 if (password6 === "qw1") {    
 // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
 let savedTexts6 = JSON.parse(localStorage.getItem("savedTexts6")) || [];    
 savedTexts6.push(text6);
 localStorage.setItem("savedTexts6", JSON.stringify(savedTexts6));        
    // عرض النصوص المحفوظة
    displaySavedTexts6();
 } else {
 alert("كلمة المرور خاطئة");
 }
 }
 // دالة لعرض النصوص المحفوظة
 function displaySavedTexts6() {
 const resultDiv6 = document.getElementById("result6");
 const savedTexts6 = JSON.parse(localStorage.getItem("savedTexts6")) || [];
 resultDiv6.innerHTML = ""; // مسح المحتوى السابق
 savedTexts6.forEach(text6 => {
 const newParagraph6 = document.createElement("p");
 newParagraph6.textContent = text6;
 resultDiv6.appendChild(newParagraph6);
 });
 }





 
// دالة لحذف جميع النصوص
function deleteAllTexts1() {
  const deletePassword1 = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword1 === "delete") {
    localStorage.removeItem("savedTexts");
    localStorage.removeItem("savedTexts1");
    localStorage.removeItem("savedTexts2");
    localStorage.removeItem("savedTexts3"); 
    localStorage.removeItem("savedTexts4"); 
    localStorage.removeItem("savedTexts5"); 
    localStorage.removeItem("savedTexts6"); 
    displaySavedTexts();
    displaySavedTexts1();
    displaySavedTexts2();
    displaySavedTexts3();
    displaySavedTexts4();
    displaySavedTexts5();
    displaySavedTexts6();
    // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts();
  displaySavedTexts1();
  displaySavedTexts2();
  displaySavedTexts3();
  displaySavedTexts4();
  displaySavedTexts5();
  displaySavedTexts6();
};
// ربط حدث النقر بزر الحذف    
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", deleteAllTexts1);
