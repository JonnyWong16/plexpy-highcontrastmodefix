// ==UserScript==
// @name         PlexPy High Contrast Mode
// @namespace    https://github.com/JonnyWong16/plexpy-highcontrastmodefix
// @version      1.0
// @description  Replaces all background images on PlexPy to display images in high contrast mode
// @author       JonnyWong16
// @include      *localhost:8181/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements("#home-stats .poster-face", imageReplacement);
waitForKeyElements("#home-stats .home-platforms-instance-oval", imageReplacement);
waitForKeyElements("#home-stats .home-platforms-instance-box", imageReplacement);

waitForKeyElements("#recentlyAdded .poster-face", imageReplacement);

waitForKeyElements("#user-platform-stats .user-platforms-instance-box", imageReplacement);
waitForKeyElements("#user-recently-watched .poster-face", imageReplacement);

waitForKeyElements(".poster-face", imageReplacement);

function imageReplacement (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = img_url.indexOf("width=");
    width = parseInt(img_url.substring(width+6, width+9).split('&')[0]);
    height = img_url.indexOf('height=');
    height = parseInt(img_url.substring(height+7, height+10).split('&')[0]);
    if (elementToReplace.attr("class").indexOf("home-platforms-instance-box") > -1 || 
        elementToReplace.attr("class").indexOf("home-platforms-instance-oval") > -1 || 
        elementToReplace.attr("class").indexOf("user-platforms-instance-box") > -1 ) {
       width = 80;
       height = 80;
    }
    elementToReplace.html('<img src="' + img_url + '" width="' + width + '" height="' + height + '"/>');
}