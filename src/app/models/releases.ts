export interface IReleaseSection {
    name: string
    lists: string[]
}

export interface IRelease {
    _id?:string
    version: string,
    description_start: string,
    description_end: string,
    new_features: IReleaseSection[]
    bug_fixes: IReleaseSection[]
    is_current: boolean
}