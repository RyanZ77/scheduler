$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
    // this function's purpose is to check the time and and assign classes accordingly to when each hour is
    // for example: if the time is 4 PM it will add class "past" to all previous hours and set class "present" to the current hour as well as a "future" class to 5 PM
    // these classes change the background color of the textarea to indicate which events are taking place in the even planner
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          // adds "past" class to current time block
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          // removes "past" class and adds "present" class according to hour
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          // adds "future" class to indicate future time blocks
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    // runs when the page is loaded
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  
  //functions to change text color for planner by pressing a button
  function white() {
    document.getElementById("text").style.color="#ffffff";
  }
  
  function black() {
    document.getElementById("text").style.color="#000000";
  }
  
  function green() {
    document.getElementById("text").style.color="#00FF00";
  }
  
  function blue() {
    document.getElementById("text").style.color="#0000FF";
  }
  
  function red() {
    document.getElementById("text").style.color="#FF0000";
  }
  
  function yellow() {
    document.getElementById("text").style.color="#FFFF00";
  }
  
  function orange() {
    document.getElementById("text").style.color="#FF8000";
  }
  
  