$(document).ready(function() {

  $(".hamburger-menu").click(function(e){
    $("#blmMenuBox").toggle();
  });

  $(".expandButton p").click(function(e){
    $(this).parents(".courseAboutSection").toggleClass("cASExpanded");
    $(this).find(".expandIcon").toggleText("+", "-");
    $(this).find(".expandText").toggleText("Expand", "Collapase");
    $(this).find(".expandText").toggleText("See", "Hide");
    // $(this).find(".expandText").text($(this).find(".expandText").text().replace("Expand", "Collapase"));
  });

  $("h3.faqQuestion").click(function(e){
    $(this).parents(".faqResponse").toggleClass("cASExpanded");
    $(this).find(".expandIcon").toggleText("+", "-");
  });

  $(".expandButtonTeachers p").click(function(e){
    $(this).parents(".course-staff").toggleClass("cASExpanded");
    $(this).find(".expandIcon").toggleText("+", "-");
    $(this).find(".expandText").toggleText("See", "Hide");
    // $(this).find(".expandText").text($(this).find(".expandText").text().replace("See", "Hide"));
  });

  $.fn.extend({
      toggleText: function(a, b){
          if (this.text().indexOf(a) > 0){
            return this.text(this.text().replace(a, b));
          } else{
            if (this.text().indexOf(b) > 0){
              return this.text(this.text().replace(b, a));
            }
          }
      }
  });

  // $.fn.extend({
  //     toggleText: function(a, b){
  //         return this.text(this.text() == b ? a : b);
  //     }
  // });

  function showTabBlock(evt, blockName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(blockName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  $("a.tablinks").click(function(e){
    e.preventDefault();
    showTabBlock(e, $(this).attr("href"));
  });




  if($("#mob_hidden").css("display") === "none"){
    $(".dropDownA").click(function(){
      $(this).siblings(".dropDownUl").toggle();
    });
  }

  if($("#mob_hidden").css("display") !== "none"){
    $(".dropDownLiMain").mouseover(function() {
      $(this).find(".dropDownUl").show();
    }).mouseout(function() {
      $(this).find(".dropDownUl").hide();
    });
  }  

  // $(".dropDownA").mouseover(function() {
  //   $(this).siblings(".dropDownUl").show();
  // }).mouseout(function() {
  //   $(this).siblings(".dropDownUl").hide();
  // });

  // $("#searchToglMbl").click(function(e){
  //   $("body").toggleClass("searchVisible");
  // });

  // let warningText = "<p id='warningTxtDelete'><b>Warning: Account deletion is permanent.</b> This is an irreversible action, and you will no longer be able to use BloomED.</p>";

  // $("#account-deletion-container .account-settings-header-subtitle-warning").after(warningText);


  // $("body").on('click', '#forInstitutionsBox button', function(e){
        
  //   let postURL = 'https://dev.bloomnf.org/add-institutions';
  //   let answerData = {
  //     'compName': $("input[name='compName']").val(),
  //     'compSector': $("input[name='compSector']").val(),
  //     'compEmail': $("input[name='compEmail']").val(),
  //     'contactNumber': $("input[name='contactNumber']").val(),
  //     'contactPerson': $("input[name='contactPerson']").val(),
  //   };

  //   $.ajax({
  //     type: 'POST',
  //     url: postURL,
  //     dataType: 'json',
  //     data: answerData, //added some arb param here as an example
  //     beforeSend: function () {
  //       $("#ajaxFeedBackBox").show();
  //     },
  //     success: function (response) {
  //         console.log(response);
  //       //respondToSQLQAnswerSubmission(response);
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       //if there was some kind of javascript / jquery error you can debug it here
  //     },
  //     complete: function(){
  //       $("#ajaxFeedBackBox").fadeOut();
  //     }
  //   });
  //   e.preventDefault();

  // });

});