/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  

var mlCodes = [
  {
    code: "tr",
    name: "Turkish",
  },
  {
    code: "en",
    name: "İngilizce",
  },
    {
    code: "ro",
    name: "Romanian",
  },
];

var MLstrings = [
    {
        English: "Web Designer - Software Engineer",
        Türkçe: "Web Tasarımcı - Yazılım Mühendisi",
    },
    {
        English: "MY WORKS",
        Türkçe: "ÇALIŞMALARIM",
    },
      {
        English: "ABOUT ME",
        Türkçe: "HAKKIMDA",
    },
        {
        English: "CONTACT",
        Türkçe: "İLETİŞİM",
    },
        {
        English: "I am Saltuk Bugra Ozelgul. I graduated from High School in 2019 and I attended to Gazi University Computer Engineering department",
        Türkçe: "Ben Saltuk Buğra Özelgül 2019 yılında liseden mezun olarak Gazi Üniversitesi Bilgisayar Mühendisliği bölümünü kazandım",
    },
          {
        English: "I am studying at Gazi University right now and I am developing websites for any type of request.",
        Türkçe: "Şu anda Gazi Üniversitesinde okuyup kendi harçlığım için isteğe göre websiteleri tasarlıyorum.",
    },
          {
        English: "SOCIAL MEDIA",
        Türkçe: "SOSYAL MEDYA",
    },
          {
        English: "Copyright © 2020 Designed and Developed by Saltuk",
        Türkçe: "Copyright © 2020 Saltuk tarafından tasarlandı ve geliştirildi",
    },
          {
        English: "NBS Asitan is a Discord bot that is using nodeJS and Discord API. It is using for automation for servers and entertainment in servers.",
        Türkçe: "NBS Asistan Discord API kullanarak çalışan sunucu otomasyonları ve insanları eğlendirmek amacıyla nodeJS teknolojisi kullanılarak yazılmış bir Discord botudur. ",
    },
            {
        English: "This website is for insurance agency which contains a live chat and instant offer for clients in it. The company logo is not designed by me.",
        Türkçe: "Bir sigorta acentesi için geliştirmiş olduğum anında online tekliflerin alınıp anında cevap verilen, aynı zamanda kendi içerisinde canlı desteğe sahip bir websitesi. Firmanın logo tasarımları şahsıma ait değildir.",
    },
];

// Global var :(
var mlrLangInUse;

var mlr = function({
    dropID = "mbPOCControlsLangDrop",
    stringAttribute = "data-mlr-text",
    chosenLang = "English",
    mLstrings = MLstrings,
    countryCodes = true,
    countryCodeData = [],
} = {}) {
    const root = document.documentElement;

    var listOfLanguages = Object.keys(mLstrings[0]);
    mlrLangInUse = chosenLang;

    (function createMLDrop() {
        var mbPOCControlsLangDrop = document.getElementById(dropID);
        // Reset the menu
        mbPOCControlsLangDrop.innerHTML = "";
        // Now build the options
        listOfLanguages.forEach((lang, langidx) => {
            let HTMLoption = document.createElement("option");
            HTMLoption.value = lang;
            HTMLoption.textContent = lang;
            mbPOCControlsLangDrop.appendChild(HTMLoption);
            if (lang === chosenLang) {
                mbPOCControlsLangDrop.value = lang;
            }
        });
        mbPOCControlsLangDrop.addEventListener("change", function(e) {
            mlrLangInUse = mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value;
            resolveAllMLStrings();
            // Here we update the 2-digit lang attribute if required
            if (countryCodes === true) {
                if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
                    console.warn("Cannot access strings for language codes");
                    return;
                }
                root.setAttribute("lang", updateCountryCodeOnHTML().code);
            }
        });
    })();

    function updateCountryCodeOnHTML() {
        return countryCodeData.find(this2Digit => this2Digit.name === mlrLangInUse);
    }

    function resolveAllMLStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originaltextContent = stringToBeResolved.textContent;
            let resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
};

function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function(stringObj) {
        // Create an array of the objects values:
        let stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(stringToBeResolved);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    } else {
        // If we don't have a match in our language strings, return the original
        return stringToBeResolved;
    }
}

mlr({
    dropID: "mbPOCControlsLangDrop",
    stringAttribute: "data-mlr-text",
    chosenLang: "English",
    mLstrings: MLstrings,
    countryCodes: true,
    countryCodeData: mlCodes,
});