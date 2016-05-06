// ==UserScript==
// @name         PlexPy High Contrast Mode
// @namespace    https://github.com/JonnyWong16/plexpy-highcontrastmodefix
// @version      1.2.1
// @description  Replaces all background images on PlexPy to display images in high contrast mode
// @author       JonnyWong16
// @include      *localhost:8181*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements(".poster-face", imageReplacement);
waitForKeyElements(".season-poster", imageReplacement);
waitForKeyElements(".episode-poster", imageReplacement);
waitForKeyElements(".album-poster", imageReplacement);
waitForKeyElements(".dashboard-activity-poster-face", imageReplacement);
waitForKeyElements(".dashboard-activity-cover-face", imageReplacement);
waitForKeyElements(".dashboard-activity-clip-face", imageReplacement);
waitForKeyElements(".dashboard-recent-media-poster-face", imageReplacement);
waitForKeyElements(".dashboard-recent-media-cover-face", imageReplacement);
waitForKeyElements(".home-platforms-poster-face", imageReplacement);
waitForKeyElements(".home-platforms-library-thumb", imageReplacement);
waitForKeyElements(".home-platforms-list-poster-face", imageReplacement);
waitForKeyElements(".home-platforms-instance-oval", imageReplacement);
waitForKeyElements(".home-platforms-instance-list-oval", imageReplacement);
waitForKeyElements(".home-platforms-instance-box", imageReplacement);
waitForKeyElements(".home-platforms-instance-list-box", imageReplacement);
waitForKeyElements(".users-poster-face", imageReplacement);
waitForKeyElements(".libraries-poster-face", imageReplacement);
waitForKeyElements(".user-info-poster-face", imageReplacement);
waitForKeyElements(".library-info-poster-face", imageReplacement);
waitForKeyElements(".user-platforms-instance-box", imageReplacement);
waitForKeyElements(".library-user-instance-box", imageReplacement);
waitForKeyElements(".summary-poster-face", imageReplacement);
waitForKeyElements(".summary-poster-face-episode", imageReplacement);
waitForKeyElements(".summary-poster-face-track", imageReplacement);
waitForKeyElements(".season-episodes-poster-face", imageReplacement);
waitForKeyElements(".history-thumbnail", imageReplacement);

function imageReplacement (elementToReplace) {
    var img_url, width, height;

    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    if (img_url.charAt(0) === '"' || img_url.charAt(0) === "'") {
        img_url = img_url.substr(1, img_url.length-1);
    }
    if (img_url.charAt(img_url.length-1) === '"' || img_url.charAt(img_url.length-1) === "'") {
        img_url = img_url.substr(0, img_url.length-1);
    }

    if (elementToReplace.attr("class").indexOf("users-poster-face") > -1 ||
        elementToReplace.attr("class").indexOf("libraries-poster-face") > -1 ||
        elementToReplace.attr("class").indexOf("home-platforms-instance-list-oval") > -1 ||
        elementToReplace.attr("class").indexOf("home-platforms-instance-list-box") > -1) {
        width = 40;
        height = 40;
    } else if (elementToReplace.attr("class").indexOf("user-info-poster-face") > -1 ||
               elementToReplace.attr("class").indexOf("library-info-poster-face") > -1 ||
               elementToReplace.attr("class").indexOf("home-platforms-library-thumb") > -1 ||
               elementToReplace.attr("class").indexOf("home-platforms-instance-box") > -1 ||
               elementToReplace.attr("class").indexOf("home-platforms-instance-oval") > -1 ||
               elementToReplace.attr("class").indexOf("user-platforms-instance-box") > -1 ||
               elementToReplace.attr("class").indexOf("library-user-instance-box") > -1) {
       width = 80;
       height = 80;
    } else if (elementToReplace.attr("class").indexOf("home-platforms-list-poster-face") > -1) {
        width = 40;
        height = 60;
    } else if (elementToReplace.attr("class").indexOf("home-platforms-poster-face") > -1 ||
               elementToReplace.attr("class").indexOf("history-thumbnail") > -1) {
        width = 80;
        height = 120;
    } else if (elementToReplace.attr("class").indexOf("summary-poster-face-episode") > -1 ||
               elementToReplace.attr("class").indexOf("season-episodes-poster-face") > -1 ||
               elementToReplace.attr("class").indexOf("episode-poster") > -1) {
        width = 250;
        height = 140;
    } else if (elementToReplace.attr("class").indexOf("summary-poster-face") > -1) {
        width = 250;
        height = 375;
    } else if (elementToReplace.attr("class").indexOf("dashboard-activity-poster-face") > -1) {
        width = 350;
        height = 200;
    } else if (elementToReplace.attr("class").indexOf("dashboard-activity-cover-face") > -1 ||
               elementToReplace.attr("class").indexOf("dashboard-activity-clip-face") > -1 ||
               elementToReplace.attr("class").indexOf("summary-poster-face-track") > -1) {
        width = 200;
        height = 200;
    } else if (elementToReplace.attr("class").indexOf("dashboard-recent-media-cover-face") > -1 ||
               elementToReplace.attr("class").indexOf("album-poster") > -1) {
        width = 150;
        height = 150;
    } else if (elementToReplace.attr("class").indexOf("poster-face") > -1 ||
               elementToReplace.attr("class").indexOf("season-poster") > -1 ||
               elementToReplace.attr("class").indexOf("dashboard-recent-media-poster-face") > -1) {
        width = 150;
        height = 225;
    }

    elementToReplace.append('<img src="' + img_url + '" width="' + width + '" height="' + height + '"/>');
}