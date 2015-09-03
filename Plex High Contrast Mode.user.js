// ==UserScript==
// @name         Plex High Contrast Mode
// @namespace    https://github.com/JonnyWong16/plexpy-highcontrastmodefix
// @version      1.0
// @description  Replaces all background images on Plex to display images in high contrast mode
// @author       JonnyWong16
// @include      *app.plex.tv*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==


waitForKeyElements(".episode-tile-list>.media-tile-list-item .media-poster", imageReplacement250x140);
waitForKeyElements(".album-tile-list>.media-tile-list-item .media-poster", imageReplacement180x180);
waitForKeyElements(".photo-tile-list>.media-tile-list-item .media-poster", imageReplacement200x200);

waitForKeyElements(".media-tile-list-item.movie .media-poster", imageReplacement150x225);
waitForKeyElements(".media-tile-list-item.show .media-poster", imageReplacement150x225);
waitForKeyElements(".media-tile-list-item.season .media-poster", imageReplacement150x225);
waitForKeyElements(".media-tile-list-item.episode .media-poster", imageReplacement150x225);
waitForKeyElements(".media-tile-list-item.clip .media-poster", imageReplacement250x140);
waitForKeyElements(".media-tile-list-item.artist .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.album .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.track .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.photo .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.photoAlbum .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.playlist .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.channel .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.channelDirectory .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.device .media-poster", imageReplacement150x150);
waitForKeyElements(".media-tile-list-item.userPlaylistItem .media-poster", imageReplacement250x140);

waitForKeyElements(".details-poster-container .movie-poster", imageReplacement250x375);
waitForKeyElements(".details-poster-container .show-poster", imageReplacement250x375);
waitForKeyElements(".details-poster-container .episode-poster", imageReplacement250x140);
waitForKeyElements(".details-poster-container .clip-poster", imageReplacement250x140);
waitForKeyElements(".details-poster-container .artist-poster", imageReplacement250x250);
waitForKeyElements(".details-poster-container .album-poster", imageReplacement250x250);

waitForKeyElements(".playlist-item .media-poster", imageReplacement103x58);

waitForKeyElements(".dropdown-poster-toggle .media-poster", imageReplacement34x34);
waitForKeyElements(".server-account-container>.server-account-poster", imageReplacement60x60);
waitForKeyElements(".card-user .card-poster", imageReplacement80x80);


function imageReplacement150x225 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 150;
    height = 225;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement150x150 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 150;
    height = 150;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement250x375 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 250;
    height = 375;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement250x140 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 250;
    height = 140;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement180x180 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 180;
    height = 180;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement200x200 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 200;
    height = 200;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement250x250 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 250;
    height = 250;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement103x58 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 103;
    height = 58;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement34x34 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 34;
    height = 34;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}

function imageReplacement60x60 (elementToReplace) {
    var img_url, width, height;
    img_url = elementToReplace.attr('style').split('(')[1].split(')')[0];
    width = 60;
    height = 60;
    elementToReplace.append('<img src=' + img_url + ' width="' + width + '" height="' + height + '"/>');
}