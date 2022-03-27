export interface DataSet {
  info: {
    label: string,
    id: string,
  },
  data: {
    fields: Array<{ name: string, format?: string, type?: 'real' | 'string' | 'integer' | 'timestamp'}>
    rows: Array<Array<any>>,
  },
}
