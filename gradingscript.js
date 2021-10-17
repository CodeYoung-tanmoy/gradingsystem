function showReportCard() {
    document.getElementById("final-report").style.display = "block"
    document.getElementById("btn-3").style.display = "block"
    //  student deatils
       var s1,s2,s3,s4
       s1 = document.getElementById("std-name").value 
       s2 = document.getElementById("std-roll").value 
       s3 = document.getElementById("std-class").value 
       s4 = document.getElementById("std-section").value 

       document.getElementById("student-name").innerHTML = s1
       document.getElementById("student-roll").innerHTML = s2
       document.getElementById("student-class").innerHTML = s3
       document.getElementById("student-section").innerHTML = s4       

    //  marks
      var m1,m2,m3,m4,m5
      m1 = document.getElementById("mark-1").value 
      m2 = document.getElementById("mark-2").value 
      m3 = document.getElementById("mark-3").value 
      m4 = document.getElementById("mark-4").value 
      m5 = document.getElementById("mark-5").value 

      document.getElementById("mark1").innerHTML = m1
      document.getElementById("mark2").innerHTML = m2
      document.getElementById("mark3").innerHTML = m3
      document.getElementById("mark4").innerHTML = m4
      document.getElementById("mark5").innerHTML = m5      

    // acc grades
    var g1,g2,g3
    g1 = document.getElementById("acc-grade-1").value
    g2 = document.getElementById("acc-grade-2").value
    g3 = document.getElementById("acc-grade-3").value

    document.getElementById("grade-1").innerHTML = g1
    document.getElementById("grade-2").innerHTML = g2
    document.getElementById("grade-3").innerHTML = g3   
    
    // total-marks, percentage and fina grade calculation
    var expression = m1+"+"+m2+"+"+m3+"+"+m4+"+"+m5
    var total_marks = eval(expression)      //  total marks
    document.getElementById("totalmarks").innerHTML = total_marks

    var percentage = total_marks/5
    document.getElementById("percent").innerHTML = percentage

    /*
        91>=percentage<=100  -> A+
        81>=percentage<91  -> A
        71>=percentage<81  -> B+
        61>=percentage<71  -> B
        51>=percentage<61  -> C
        41>=percentage<51  -> D
        33>=percentage<41  -> E
        0>=percentage<33   -> F
    */
   var grade 
   if(percentage>=91 && percentage<=100){
       grade = "A+"
   }
   else if(percentage>=81 && percentage<91){
       grade = "A"
   }
   else if(percentage>=71 && percentage<81){
       grade = "B+"
   }
    else if(percentage>=61 && percentage<71){
       grade = "B"
   }
    else if(percentage>=51 && percentage<61){
       grade = "C"
   }
    else if(percentage>=41 && percentage<51){
       grade = "D"
   }
   else if(percentage>=33 && percentage<41){
       grade = "E"
   }
    else if(percentage>=0 && percentage<33){
       grade = "Fail"
   }
   document.getElementById("final-grade").innerHTML = grade 

}
function hideReportCard() {
    document.getElementById("final-report").style.display = "none"
    document.getElementById("btn-3").style.display = "none"
}
function confirmReportCard(){
    document.getElementById("raw-data").style.display = "none"
    document.getElementById("btn-3").style.display = "none"
    document.getElementById("btn-4").style.display = "block"
}
function printReportCard(){
    document.getElementById("btn-4").style.display = "none"
    window.print()
}