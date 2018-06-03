// Declaring Variables //
var streamers = ["imaqtpie", "dyrus", "riotgames", "loltyler1", "shiphtur"];

// Functions //

// Page Load //
$(document).ready(function() {
  var apiUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
  var twitchUrl = "https://twitch.tv/";
  
  for (var i = 0; i < streamers.length; i++) {
    $.getJSON(apiUrl + streamers[i] + "?callback=?", function(streamerData) {
      var logo;
      var name;
      var status;
      
      if (streamerData.stream === null) {
        logo = "https://support.curse.com/hc/en-us/article_attachments/115001768846/Twitch-Icon.png";
        name = streamerData._links.self.slice(37);
        status = name + " is currently OFFLINE";
        $("#streamerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "' class='logo'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div>" + "</div>");
      } else {
        logo = streamerData.stream.channel.logo;
        /*logo = streamerData.stream.preview.medium;*/
        name = streamerData.stream.channel.display_name;
        status = name + " is currently streaming " + streamerData.stream.game;
        $("#streamerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "' class='logo'>" + "</div>" + "<div class='col-md-4'><a href='" + twitchUrl + name + "' target='_blank'>" + name + "</a></div>" + "<div class='col-md-4 status'>" + status + "</div>" + "</div>");
      }
    });
  }
});