$(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();


    function getMonth(month) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (var index = 0; index < months.length; index++) {
            if (month == months.indexOf(months[index])) {
                return months[index];
            }
        }
    }

    //date formatting
    var day = dd.toString();
    var year = yyyy.toString();
    var x1 = getMonth(mm);
    var dateCurrent = day + " " + x1 + " " + year;


    var programmingLanguages = {


        cSharp: ["#cSharp", "CSharp"],
        cSharpImage: ["images/cSharp.png", ""],
        cSharpFrameWorkImage: ["images/dotNetF.png", "images/dotNetCore.jpg", "images/aspdotnetmv.jpg", "images/aspnetcore.png"],
        cSharpFrameWorksOrLibrariesNames: [".NET ", ".NET Core", "ASP.NET MVC", "ASP.NET Core"],
        cSharpFrameWorksOrLibrariesNamesIdHtml: ["donet", "dotnetCore", "ASPNETMVC", "aspdotnetcore"],
        cSharpFrameWorksOrLibrariesRate: [3, 2, 3, 2],

        javascript: ["#javascript", "JavaScript"],
        javascriptImage: ["images/js12.jpg"],
        javascriptFrameWorkImage: ["images/jquery.jpg", "images/nodejs.png", "images/express.png", "images/angular.jpg"],
        javascriptFrameWorksOrLibrariesNames: ["JQuery ", "Nodejs", "Express", "Angular"],
        javascriptFrameWorksOrLibrariesNamesIdHtml: ["JQuery", "nodejs", "express", "angular2"],
        javascriptFrameWorksOrLibrariesRate: [5, 2, 2, 2],

        java: ["#java", "Java"],
        javaImage: ["images/java.jpg"],
        javaFrameWorkImage: ["images/javaservelets.jpg", "images/JSP.png", "images/JDBC.png"],
        javaFrameWorksOrLibrariesNames: ["Servlet", "JSP", "JDBC(API)"],
        javaFrameWorksOrLibrariesNamesIdHtml: ["servlt", "jsp", "jdbc"],
        javaFrameWorksOrLibrariesRate: [2, 3, 3],

        PHP: ["#PHP", "PHP"],
        PHPImage:["images/PHP.png"]


    }


    var frontEnd = {
        frontendSectionID: "#frontendSection",

        progressiveEnhancmentID: ["#ProgressiveEnhancement", "ProgressiveEnhancement"],
        progressiveEnhancment: "Progressive Enhancement",
        progressiveEnhancmentImage: "images/progressive.png",
        progressiveEnhancmentLibOrFrameWorkImgs: ["images/html.png", "images/css.jpg", "images/jsfe.jpg"],
        progressiveEnhancmentLibOrFrameWorkNames: ["HTML", "CSS", "JS"],
        progressiveEnhancmentLibOrFrameWorkNamesId: ["HTML", "CSS", "JS"],
        progressiveEnhancmentLibOrFrameWorkNamesRate: [5, 3, 5]
    }


    var experience = ["Proficient", "Expert", "Prior Experience"];



    function getLenght(objForLengthOfArrayInit) {

        var size = objForLengthOfArrayInit.length;
        return size;
    }

    function ratingFrameworkOrlibray(rates, frameWorkToBeRatedID, sizeOfObjectArray) {

        for (var indexFramework = 0; indexFramework < sizeOfObjectArray; indexFramework++) {

            for (var indexRate = 0; indexRate < rates[indexFramework]; indexRate++) {

                $("#" + frameWorkToBeRatedID[indexFramework]).append(
                    '<li>\
                  <i class="material-icons">grade</i>\
                </li>\
'
                );
            }
        }
    }



    function makingFrameworksAndLibraries(fwAndLibNum, imagesOfFrameWorksLib, namesOfFrameWorksLib, forPrograminglanguage, idFramworkOrLibrary) {

        for (var indexF = 0; indexF < fwAndLibNum; indexF++) {


            $("#collectionOfFrameWorksAndLibraries" + forPrograminglanguage).append('<li class="collection-item avatar">\
              <img class="responsive-img" src='+ imagesOfFrameWorksLib[indexF] + ' alt="" class="circle">\
              <div class="title ">\
              <p class= "center-align ">  <strong>'+ namesOfFrameWorksLib[indexF] + ' </strong></p>\
              </div>\
              <ul id=' + idFramworkOrLibrary[indexF] + ' class="orange-text center-align ">\
              </ul>\
            </li>'
            );
        }



    }
    var classForColumnSize = " class = 'col s12 m4 ' ";

    function makingDivsInRows(rowId, divID, classForDiv) {
        $(rowId).append('<div id=' + divID + classForColumnSize + '  ></div>');
    }


    function makingCards(id, cardId, cardImage, languageNameID, experienceScale,LanguageNameWithSpace) {
        var idCollection = "collectionOfFrameWorksAndLibraries" + languageNameID;
        $(id).append('<div id=' + cardId + ' class = "card">\
        <div class="card-image waves-effect waves-block waves-light">\
        <img class="responsive-img" src='+ cardImage + ' > </div> \
        <div class = "card-content" > \
        <span class="card-title activator grey-text text-darken-4">'+ LanguageNameWithSpace + ' <i class="material-icons right">more_vert</i> </span>  <p> <ul>\
        <li class="light-blue-text">\
        <strong>'+ experienceScale + '</strong>\
        </li>\
        </ul>\
        </p>\
        </div >\
        <div class="card-reveal">\
        <span class="card-title grey-text text-darken-4">\
        <h5 class="orange-text">\
        <i>\
        <img src="https://png.icons8.com/office/25/000000/overview-pages-3.png">\
        </i> Libraries , Frameworks or Environments</h5>\
      <i class="material-icons right">close</i>\
    </span>\
    <p>\
    <ul id='+ idCollection + ' class="collection">\
    </ul>\
    </p>\
    </div>\
    </div>\
    ');
    }



    var info = {

        myName: "Wajahat Ahmed",
        email: "wajahat.ahmed245@gmail.com",
        currentStatus: "Student at Punjab University College of Information Technology",
        introToMe: "I am a computer science student intending to continue my development as a software engineer. I \
        think in terms of results and objectives, I am enthusiastic, and I work with decisiveness and conviction. I \
        have a proactive attitude and find positive ways to stimulate and engage with people.",
        educationStatement: "knjj",
        dateCurrent: dateCurrent
    };

    var navbar = {

        about: "About",

    };



    function adding() {

    }


    var txt3 = document.createElement("div");



    $("#myName").text(info.myName);
    $("#currentStatus").text(info.currentStatus);
    $(".aboutJQ").text(navbar.about);
    $("#introToME").text(info.introToMe);
    $("#contact").text(info.email);
    $("#dateCurrent").text(info.dateCurrent);
    $('.collapsible').collapsible();




    ///////////
    //methods//
    //////////





    //---------------------------------
    //making cards---------------------
    //---------------------------------

    //c#
    makingCards(programmingLanguages.cSharp[0], programmingLanguages.cSharp[0] + "1", programmingLanguages.cSharpImage[0], programmingLanguages.cSharp[1], experience[0],programmingLanguages.cSharp[1]);

    //javascript
    makingCards(programmingLanguages.javascript[0], programmingLanguages.javascript[0], programmingLanguages.javascriptImage[0], programmingLanguages.javascript[1], experience[0],programmingLanguages.javascript[1]);

    //java
    makingCards(programmingLanguages.java[0], programmingLanguages.java[0], programmingLanguages.javaImage[0], programmingLanguages.java[1], experience[2],programmingLanguages.java[1]);

    //PHP
    makingCards(programmingLanguages.PHP[0], programmingLanguages.PHP[0], programmingLanguages.PHPImage[0], programmingLanguages.PHP[1], experience[0],programmingLanguages.PHP[1])



    //---------------------------------
    //making frameworks and libraries--
    //---------------------------------

    //c#
    makingFrameworksAndLibraries(getLenght(programmingLanguages.cSharpFrameWorksOrLibrariesNamesIdHtml), programmingLanguages.cSharpFrameWorkImage, programmingLanguages.cSharpFrameWorksOrLibrariesNames, programmingLanguages.cSharp[1], programmingLanguages.cSharpFrameWorksOrLibrariesNamesIdHtml);

    //javascript
    makingFrameworksAndLibraries(getLenght(programmingLanguages.javascriptFrameWorksOrLibrariesNamesIdHtml), programmingLanguages.javascriptFrameWorkImage, programmingLanguages.javascriptFrameWorksOrLibrariesNames, programmingLanguages.javascript[1], programmingLanguages.javascriptFrameWorksOrLibrariesNamesIdHtml);

    //java
    makingFrameworksAndLibraries(getLenght(programmingLanguages.javaFrameWorksOrLibrariesNamesIdHtml), programmingLanguages.javaFrameWorkImage, programmingLanguages.javaFrameWorksOrLibrariesNames, programmingLanguages.java[1], programmingLanguages.javaFrameWorksOrLibrariesNamesIdHtml);





    //---------------------------------
    //rating frameworks and libraries --
    //---------------------------------

    //c#
    ratingFrameworkOrlibray(programmingLanguages.cSharpFrameWorksOrLibrariesRate, programmingLanguages.cSharpFrameWorksOrLibrariesNamesIdHtml, getLenght(programmingLanguages.cSharpFrameWorksOrLibrariesNamesIdHtml));

    //java
    ratingFrameworkOrlibray(programmingLanguages.javaFrameWorksOrLibrariesRate, programmingLanguages.javaFrameWorksOrLibrariesNamesIdHtml, getLenght(programmingLanguages.javaFrameWorksOrLibrariesNamesIdHtml));

    //javaScript
    ratingFrameworkOrlibray(programmingLanguages.javascriptFrameWorksOrLibrariesRate, programmingLanguages.javascriptFrameWorksOrLibrariesNamesIdHtml, getLenght(programmingLanguages.javascriptFrameWorksOrLibrariesNamesIdHtml));




    /////////////////////////////
    /////////////////////////////
    //FRONTEND
    ////////////////////////////
    ////////////////////////////

    //---------------------------------
    //making divs---------------------
    //---------------------------------

    makingDivsInRows(frontEnd.frontendSectionID, frontEnd.progressiveEnhancmentID[1])

    //---------------------------------
    //making cards---------------------
    //---------------------------------

    makingCards(frontEnd.progressiveEnhancmentID[0], frontEnd.progressiveEnhancment, frontEnd.progressiveEnhancmentImage, frontEnd.progressiveEnhancmentID[1], experience[1],frontEnd.progressiveEnhancment);


    //---------------------------------
    //making frameworks and libraries--
    //---------------------------------

    makingFrameworksAndLibraries(getLenght(frontEnd.progressiveEnhancmentLibOrFrameWorkNamesRate),frontEnd.progressiveEnhancmentLibOrFrameWorkImgs,frontEnd.progressiveEnhancmentLibOrFrameWorkNames,frontEnd.progressiveEnhancmentID[1],frontEnd.progressiveEnhancmentLibOrFrameWorkNamesId);


    
    //---------------------------------
    //rating frameworks and libraries --
    //---------------------------------


    ratingFrameworkOrlibray(frontEnd.progressiveEnhancmentLibOrFrameWorkNamesRate,frontEnd.progressiveEnhancmentLibOrFrameWorkNames,getLenght(frontEnd.progressiveEnhancmentLibOrFrameWorkNamesRate))


});