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
        status = name + " is currently" + "<span>" + " OFFLINE" + "</span>";
        $("#streamerInfo").prepend("<div class='streamer'>" + "<div class='category'>" + "<img src='" + logo + "' class='logo'>" + "</div>" + "<div class='category'>" + name + "</div>" + "<div class='category'>" + status + "</div>" + "</div>");
      } else {
        logo = streamerData.stream.channel.logo;
        /*logo = streamerData.stream.preview.medium;*/
        name = "<span>" + streamerData.stream.channel.display_name + "</span>";
        status = name + " is currently streaming " + "<span>" + streamerData.stream.game + "</span>";
        $("#streamerInfo").prepend("<div class='streamer'>" + "<div class='category'>" + "<img src='" + logo + "' class='logo'>" + "</div>" + "<div class='category'><a href='" + twitchUrl + name + "' target='_blank'>" + name + "</a></div>" + "<div class='category status'>" + status + "</div>" + "</div>");
      }
    });
  }
});