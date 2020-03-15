import {urlsHelper} from "./urlsHelper";

export const getImageSrc = (url) => {
    return `${urlsHelper.IMAGE_URL + url}`;
};