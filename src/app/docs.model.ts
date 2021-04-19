export type ActiveSidebar = 'search' | '';

export interface Report {
    matchedNo: number,
    similars: string[],
    similarDic: { [k: string]: number }
};

export interface UserDocIndex {
    docIndex: DocInfo[]
}

export interface DocInfo {
    offlineId: string,
    title: string,
    createdDate: Date,
    lastModifiedDate: Date,
}

export interface OfflineDoc extends DocInfo { 
    content: string,
}