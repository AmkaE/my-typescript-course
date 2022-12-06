"use strict";
function getDuration(item) {
    if ('numOfEpisodes' in item) {
        return `${item.numOfEpisodes * item.episodeDuration}minutes`;
    }
    return `${item.duration}minutes`;
}
