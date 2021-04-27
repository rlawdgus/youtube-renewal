const THOUSAND = 1000;
const TEN_THOUSAND = 10 * THOUSAND;
const HUNDRED_MILLION = 1000 * TEN_THOUSAND;
const TRILLION = 1000 * HUNDRED_MILLION;

export const viewFormatter = (viewCount) => {
    const view = parseInt(viewCount);
    let result = "";
    let tmp = 0;
    let stringSplit = [];

    if (view / TRILLION >= 1) {
        tmp = view / TRILLION;
        stringSplit = tmp.toString().split(".");
        result = `조회수 ${stringSplit[0]}조회`;
    } else if (view / HUNDRED_MILLION >= 1) {
        tmp = view / HUNDRED_MILLION;
        stringSplit = tmp.toString().split(".");
        result = `조회수 ${stringSplit[0]}억회`;
    } else if (view / TEN_THOUSAND >= 1) {
        tmp = view / TEN_THOUSAND;
        stringSplit = tmp.toString().split(".");
        result = `조회수 ${stringSplit[0]}만회`;
    } else if (view / THOUSAND >= 1) {
        tmp = view / THOUSAND;
        stringSplit = tmp.toString().split(".");
        result = `조회수 ${stringSplit[0]}.${stringSplit[1][0]}천회`;
    } else {
        result = `조회수 ${view.toString()}회`;
    }

    return result;
};

export const durationFormatter = (duration) => {
    const removePT = duration.substring(2, duration.length);
    const timeSplit = removePT.split(/H|M|S/);

    const indexOfH = removePT.indexOf("H");
    const indexOfM = removePT.indexOf("M");
    const indexOfS = removePT.indexOf("S");

    if (indexOfH === -1 && indexOfM === -1)
        return "0:" + ("00" + timeSplit[0]).slice(-2);
    else if (indexOfH === -1 && indexOfS === -1) return timeSplit[0] + ":00";
    else if (indexOfM === -1 && indexOfS === -1) return timeSplit[0] + ":00:00";
    else if (indexOfH === -1)
        return timeSplit[0] + ":" + ("00" + timeSplit[1]).slice(-2);
    else if (indexOfM === -1)
        return timeSplit[0] + ":00:" + ("00" + timeSplit[1]).slice(-2);
    else if (indexOfS === -1)
        return timeSplit[0] + ("00" + timeSplit[1]).slice(-2) + ":00";
    else
        return (
            timeSplit[0] +
            ":" +
            ("00" + timeSplit[1]).slice(-2) +
            ":" +
            ("00" + timeSplit[2]).slice(-2)
        );
};

const SECOND = 1000;
const MINUITE = 60 * SECOND;
const HOUR = 60 * MINUITE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 12 * MONTH;

export const publishedAtFormatter = (publishedAt) => {
    const uploaded = new Date(publishedAt).getTime();
    const current = new Date().getTime();
    const passed = current - uploaded;

    if (passed >= YEAR) return `${Math.floor(passed / YEAR)}년 전`;
    else if (passed >= MONTH) return `${Math.floor(passed / MONTH)}개월 전`;
    else if (passed >= WEEK) return `${Math.floor(passed / WEEK)}주 전`;
    else if (passed >= DAY) return `${Math.floor(passed / DAY)}일 전`;
    else if (passed >= HOUR) return `${Math.floor(passed / HOUR)}시간 전`;
    else if (passed >= MINUITE) return `${Math.floor(passed / MINUITE)}분 전`;
    else return `${Math.floor(passed / SECOND)}초 전`;
};
