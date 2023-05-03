window.onoffline = () => {
  $("#offline").css("display", "flex");
};
window.ononline = () => {
  $("#offline").css("display", "none");
};
