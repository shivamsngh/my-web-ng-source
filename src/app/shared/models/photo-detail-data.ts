export interface PhotoDetailData {
    name: string;
    location: string;
    link: string;
    jumpsStats: Array<JumpStats>;
    completed: boolean;
}
interface AllPhotoBlogData {
    caption: string;
    quote: string;
    photoName: string;
    photoId: string;
    detail: string;
    timeStamp: string;
    videoUrl: string;
}

interface JumpStats {
    height: string;
    allPhotoBlogData: Array<AllPhotoBlogData>;
    mapLocation: string;
    place: string;
    jumpDate: string;
    blogFile: string;
}
