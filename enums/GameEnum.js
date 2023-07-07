
exports.gameDifficultyEnum = (value) => {
    switch (value) {
        case 'EASY':
            return;
        case 'MEDIUM':
            return;
        case 'HARDCORE':
            return;
        case 'BIRTHDAY':
            return;
        case 'ULTIME PARTY':
            return;
        default:
            throw "INVALID_TYPE"
    }
}


exports.gameModeEnum = (value) => {
    switch (value) {
        case 'CHRONO':
            return;
        default:
            throw "INVALID_TYPE"
    }
}