"use strict";
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.medium;
let otherAudio = 10;
console.log(currentAudio);
console.log(AudioLevel);
//# sourceMappingURL=enums.js.map