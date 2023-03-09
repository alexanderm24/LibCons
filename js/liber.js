var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/liber.xml", function (data) {
  document.getElementById("TEI").appendChild(data);
});