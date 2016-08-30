  $(function() {
    'use strict';
    var searchData;
    var html;
    var content;

    $('.bing-search-box-submit').click( function (e) {
      e.preventDefault();
      var serchVal = $('.bing-search-box-input').val();
      request(serchVal);
    });


    Worker.prototype = new Human();
    Student.prototype = new Human();

    var newWorker = new Worker();
    var newStudent = new Student();
    var newWorker2 = new Worker();
    var newStudent2 = new Student();

    console.log(newWorker);
    console.log(newStudent);
    console.log('age: ',newWorker2.age);
    console.log('name: ',newStudent2.name);
  });

  function Human () {
    this.name = 'Bogdan';
    this.age = '30';
    this.sex = 'male';
    this.growth = '174cm';
    this.weight = '65kg';
  }
  function Worker () {
    this.workingPlace = 'UpWork';
    this.salary = '10$ per/hour';
    this.letsWork = function () {
      console.log('Let`s work!');
    };
  }
  function Student () {
    this.studyPlace = 'DonNTU';
    this.scholarship = '50$';
    this.letsWatchSerials = function () {
      console.log('Let`s watch serials!');
    };
  }
/* ====================================== Bing search =================================*/  
  function request(serch) {
    var params = {
      // Request parameters
      q: serch,
      count: "10",
      offset: "0",
      mkt: "en-us",
      safesearch: "Moderate"
    };

    $.ajax({
      url: "https://bingapis.azure-api.net/api/v5/search/?" + $.param(params),
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","75a3172f29674920af1bea85d3f93900");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      searchData = data.webPages;
      html = $('.content').html();
      content = tmpl(html, searchData);

      $('#bing-content').remove();
      $('body').append(content);
    })
    .fail(function() {
      alert("Error, try again please!");
    });
  }