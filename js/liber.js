var CETEIcean = new CETEI();
CETEIcean.getHTML5("data/caput-1-test.xml", function (data) {
  document.getElementById("TEI").appendChild(data);
});