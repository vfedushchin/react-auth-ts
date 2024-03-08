export interface Response<T> {
  ok: boolean
  error: string | null
  data: T
}
