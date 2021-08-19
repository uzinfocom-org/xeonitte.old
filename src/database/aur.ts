import ds from '@database/ds'

export interface SearchResult {
    ID: number
    Name: string
    PackageBaseID: number
    PackageBase: string
    Version: string
    Description: string
    URL: string
    NumVotes: number
    Popularity: number
    OutOfDate: boolean | null
    Maintainer: string
    FirstSubmitted: number
    LastModified: number
    URLPath: string
}

export interface Search {
    version: number
    type: 'search' | 'error'
    resultcount: string
    results: SearchResult[]
}

export interface InfoResult {
    ID: number
    Name: string
    PackageBaseID: number
    PackageBase: string
    Version: string
    Description: string
    URL: string
    NumVotes: number
    Popularity: number
    OutOfDate: boolean | null
    Maintainer: string
    FirstSubmitted: number
    LastModified: number
    URLPath: string
    Depends: string[]
    License: string[]
    Keywords: string[]
}

export interface Info {
    version: number
    type: 'multiinfo' | 'error'
    resultcount: number
    results: InfoResult[]
}

const returnURL = async (
    type: 'search' | 'info',
    query: string
): Promise<string | URL> => {
    const base = 'https://aur.archlinux.org/rpc/?v=5'
    switch (type) {
        case 'search':
            return base + '&type=search&arg=' + query
        case 'info':
            return base + '&type=info&arg[]=' + query
    }
}

const aur = async (
    mode: 'search' | 'info',
    query = 'foobar'
): Promise<Search | Info> => {
    return await ds(await returnURL(mode, query))
}

export default aur
