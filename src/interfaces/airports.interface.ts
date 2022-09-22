
export interface Iairport{
    id: number,
    name: string,
    ident: string,
    local_code: string,
    region: string,
    type: string,
    country: string
}
export interface IServerResponse<T> {
    count: number,
    next: number,
    previous: number,
    results: Iairport[]
}
