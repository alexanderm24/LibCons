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
CETEIcean.getHTML5("data/chapter-1-test.xml", function (data) {

const chapter = document.getElementById("chapter-1");

  for (const n of Array.from(data.getElementsByTagName("tei-div")))
  {
    if(n.getAttribute("n") == 1) {
    document.adoptNode(n);
    chapter.appendChild(n);
    }
  }
});