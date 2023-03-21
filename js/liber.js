
var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/liber.xml", function (data) {

const chapter = document.getElementByTag("la-prologue");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 0) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});

var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/book.xml", function (data) {

const chapter = document.getElementById("en-prologue");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 0) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});



var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/liber.xml", function (data) {

const chapter = document.getElementById("caput-1");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 1) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});

var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/book.xml", function (data) {

const chapter = document.getElementById("chapter-1");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 1) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});



var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/liber.xml", function (data) {

const chapter = document.getElementById("caput-2");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 2) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});

var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/book.xml", function (data) {

const chapter = document.getElementById("chapter-2");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 2) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});