// ==UserScript==
// @name         PlexPy High Contrast Mode
// @namespace    https://github.com/JonnyWong16/plexpy-highcontrastmodefix
// @version      1.1
// @description  Replaces all background images on PlexPy to display images in high contrast mode
// @author       JonnyWong16
// @include      *localhost:8181/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements(".poster-face", imageReplacement);
waitForKeyElements(".dashboard-activity-poster-face", imageReplacement);
waitForKeyElements(".dashboard-activity-cover-face", imageReplacement);
waitForKeyElements(".dashboard-activity-clip-face", imageReplacement);
waitForKeyElements(".home-platforms-poster-face", imageReplacement);
waitForKeyElements(".home-platforms-library-thumb", imageReplacement);
waitForKeyElements(".home-platforms-list-poster-face", imageReplacement);
waitForKeyElements(".home-platforms-instance-oval", imageReplacement);
waitForKeyElements(".home-platforms-instance-list-oval", imageReplacement);
waitForKeyElements(".home-platforms-instance-box", imageReplacement);
waitForKeyElements(".home-platforms-instance-list-box", imageReplacement);
waitForKeyElements(".users-poster-face", imageReplacement);
waitForKeyElements(".user-info-poster-face", imageReplacement);
waitForKeyElements(".user-platforms-instance-box", imageReplacement);
waitForKeyElements(".summary-poster-face", imageReplacement);
waitForKeyElements(".summary-poster-face-episode", imageReplacement);
waitForKeyElements(".season-episodes-poster-face", imageReplacement);

function imageReplacement (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    if (elementToReplace.attr("class").indexOf("users-poster-face") > -1 || 
        elementToReplace.attr("class").indexOf("home-platforms-instance-list-oval") > -1 || 
        elementToReplace.attr("class").indexOf("home-platforms-instance-list-box") > -1) {
        width = 40;
        height = 40;
    } else if (elementToReplace.attr("class").indexOf("user-info-poster-face") > -1 ||
        elementToReplace.attr("class").indexOf("home-platforms-library-thumb") > -1 || 
        elementToReplace.attr("class").indexOf("home-platforms-instance-box") > -1 || 
        elementToReplace.attr("class").indexOf("home-platforms-instance-oval") > -1 || 
        elementToReplace.attr("class").indexOf("user-platforms-instance-box") > -1 ) {
       width = 80;
       height = 80;
    } else if (elementToReplace.attr("class").indexOf("home-platforms-list-poster-face") > -1) {
        width = 40;
        height = 60;
    } else if (elementToReplace.attr("class").indexOf("home-platforms-poster-face") > -1) {
        width = 80;
        height = 120;
    } else if (elementToReplace.attr("class").indexOf("summary-poster-face-episode") > -1 || 
        elementToReplace.attr("class").indexOf("season-episodes-poster-face") > -1 ) {
        width = 250;
        height = 140;
    } else if (elementToReplace.attr("class").indexOf("summary-poster-face") > -1) {
        width = 250;
        height = 375;
    } else if (elementToReplace.attr("class").indexOf("dashboard-activity-poster-face") > -1) {
        width = 350;
        height = 200;
    } else if (elementToReplace.attr("class").indexOf("dashboard-activity-cover-face") > -1 || 
        elementToReplace.attr("class").indexOf("dashboard-activity-clip-face") > -1) {
        width = 200;
        height = 200;
    } else if (elementToReplace.attr("class").indexOf("poster-face") > -1) {
        width = 150;
        height = 225;
    }
    elementToReplace.append('<img src="' + img_url + '" width="' + width + '" height="' + height + '"/>');
}