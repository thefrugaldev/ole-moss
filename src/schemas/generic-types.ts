export interface ESPNRef {
  $ref: string
}

export interface ESPNResponse {
  count: number
  pageIndex: number
  pageSize: number
  pageCount: number
  items: any
}

export interface ESPNSource {
    id: string
    description: string
    state: string
}

export interface GenericObject { [key:string]: any}

export interface ESPNImageRef {
  href: string
  alt: string
  rel: string[]
}