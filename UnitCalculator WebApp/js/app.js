// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

app.range.create({
  el: '.range-slider',
  on: {
    change: function () {
      console.log('Range Slider value changed')
    }
  }
})

function getPrice(){
    var kg = $$("#kgval").val();
    var kgpriceval = $$("#kgpriceval").val();
    console.log("getPrice-----"+kg+"-----"+kgpriceval);
    
    //for 500gm
    var g500m = kgpriceval/2;
    console.log("500gm - "+g500m);
    $$("#g500m").html('');$$("#g500m").html(g500m);
    
    //for 250gm
    var g250m = kgpriceval/4;
    console.log("250gm - "+g250m);
    $$("#g250m").html('');$$("#g250m").html(g250m);
    
    //for 200gm
    var g200m = kgpriceval/5;
    console.log("200gm - "+g200m);
    $$("#g200m").html('');$$("#g200m").html(g200m);
    
    //for 150gm
    var g150m = (kgpriceval/6.66666666667).toFixed(2);
    console.log("150gm - "+g150m);
    $$("#g150m").html('');$$("#g150m").html(g150m);
    
    //for 100gm
    var g100m = kgpriceval/10;
    console.log("100gm - "+g100m);
    $$("#g100m").html('');$$("#g100m").html(g100m);
    
    //for 50gm
    var g50m = kgpriceval/20;
    console.log("50gm - "+g50m);
    $$("#g50m").html('');$$("#g50m").html(g50m);
    
    //for 25gm
    var g25m = kgpriceval/40;
    console.log("25gm - "+g25m);
    $$("#g25m").html('');$$("#g25m").html(g25m);
}

function clearall(){
    /*$("#kgval").val('');*/
    $("#kgpriceval").val('');
    $$("#g500m").html('');$$("#g500m").html(0);
     $$("#g250m").html('');$$("#g250m").html(0);
    $$("#g200m").html('');$$("#g200m").html(0);
    $$("#g150m").html('');$$("#g150m").html(0);
    $$("#g100m").html('');$$("#g100m").html(0);
    $$("#g50m").html('');$$("#g50m").html(0);
    $$("#g25m").html('');$$("#g25m").html(0);
}
//gm to kg
function gmgetPrice(){
    var gm = $$("#gval").val();
    var gmpriceval = $$("#gpriceval").val();
    var gm1000m; var gm500m; var gm250m; var gm200m; var gm150m;var gm100m;var gm50m;
    var gm25m;

    if(gm == 100){
        gm1000m = gmpriceval * 10;
    }else if(gm == 150){
        gm1000m = (gmpriceval * 6.66666666667).toFixed(2);
    }else if(gm == 200){
        gm1000m = gmpriceval * 5;
    }else if(gm == 250){
        gm1000m = gmpriceval * 4;
    }else if(gm == 500){
        gm1000m = gmpriceval * 2;
    }else if(gm == 1000){
        gm1000m = gmpriceval * 1;
    }
        //calcuating for 1000gm
        $$("#gm1000").html('');$$("#gm1000").html(gm1000m);

        //calcuating for 500gm
        gm500m = gm1000m / 2;
        $$("#gm500").html('');$$("#gm500").html(gm500m);

        //calcuating for 250gm
        gm250m = gm1000m / 4;
        $$("#gm250").html('');$$("#gm250").html(gm250m);

        //calcuating for 200gm
        gm200m = gm1000m / 5;
        $$("#mg200").html('');$$("#mg200").html(gm200m);

        //calcuating for 150gm
        gm150m = (gm1000m/6.66666666667).toFixed(2);
        $$("#gm150").html('');$$("#gm150").html(gm150m);

        //calcuating for 100gm
        gm100m = gm1000m / 10;
        $$("#gm100").html('');$$("#gm100").html(gm100m);

        //calcuating for 50gm
        gm50m = gm1000m / 20;
        $$("#gm50").html('');$$("#gm50").html(gm50m);

        //calcuating for 25gm
        gm25m = gm1000m / 40;
        $$("#gm25").html('');$$("#gm25").html(gm25m);
}

function gclearall(){
    $$("#gval").val('');
    $$("#gpriceval").val('');

    $$("#gm1000").html('');$$("#gm1000").html(0);
     $$("#gm500").html('');$$("#gm500").html(0);
    $$("#gm250").html('');$$("#gm250").html(0);
    $$("#mg200").html('');$$("#mg200").html(0);
    $$("#gm150").html('');$$("#gm150").html(0);
    $$("#gm100").html('');$$("#gm100").html(0);
    $$("#gm50").html('');$$("#gm50").html(0);
    $$("#gm25").html('');$$("#gm25").html(0);
}
//gm to kg
function managetask(){
    console.log("click mangage task");
    /* window.location.href = "/mypages/taskdetail/";*/
}

/*=== Default standalone ===*/
var myPhotoBrowserStandalone = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});

/*=== Popup ===*/
var myPhotoBrowserPopup = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'popup'
});
$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});

/*=== As Page ===*/
var myPhotoBrowserPage = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});

/*=== Standalone Dark ===*/
var myPhotoBrowserDark = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark').on('click', function () {
    myPhotoBrowserDark.open();
});


