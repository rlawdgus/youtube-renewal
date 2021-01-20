const THOUSAND: number = 1000;
const TEN_THOUSAND: number = 10 * THOUSAND;
const HUNDRED_MILLION: number = 1000 * TEN_THOUSAND;
const TRILLION: number = 1000 * HUNDRED_MILLION;

export const viewFormatter = (viewCount: string): string => {
    const view = parseInt(viewCount);
    let result: string = "";
    let tmp: number = 0;
    let stringSplit: string[] = [];

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

export const fillZero = (str: string, len: number): string => {
    let result: string = "";
    let place: number = len - str.length;

    for (let i: number = 0; i < place; i++) result += "0";
    result += str;

    return result;
};

export const durationFormatter = (duration: string): string => {
    const subStringPT = duration.substring(2, duration.length);
    const stringSplit = subStringPT.split(/H|M|S/);

    if (stringSplit.length === 2) return `0:${fillZero(stringSplit[0], 2)}`;
    else if (stringSplit.length === 3)
        return `${stringSplit[0]}:${fillZero(stringSplit[0], 2)}`;
    else
        return `${stringSplit[0]}:${fillZero(stringSplit[1], 2)}:${fillZero(
            stringSplit[2],
            2
        )}`;
};

const SECOND: number = 1000;
const MINUITE: number = 60 * SECOND;
const HOUR: number = 60 * MINUITE;
const DAY: number = 24 * HOUR;
const WEEK: number = 7 * DAY;
const MONTH: number = 30 * DAY;
const YEAR: number = 12 * MONTH;

export const publishedAtFormatter = (publishedAt: string): string => {
    const uploaded: number = new Date(publishedAt).getTime();
    const current: number = new Date().getTime();
    const passed: number = current - uploaded;

    if (passed >= YEAR) return `${Math.floor(passed / YEAR)}년 전`;
    else if (passed >= MONTH) return `${Math.floor(passed / MONTH)}개월 전`;
    else if (passed >= WEEK) return `${Math.floor(passed / WEEK)}주 전`;
    else if (passed >= DAY) return `${Math.floor(passed / DAY)}일 전`;
    else if (passed >= HOUR) return `${Math.floor(passed / HOUR)}시간 전`;
    else if (passed >= MINUITE) return `${Math.floor(passed / MINUITE)}분 전`;
    else return `${Math.floor(passed / SECOND)}초 전`;
};
