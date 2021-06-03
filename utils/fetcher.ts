export const fetcher = async function <JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, { ...init, credentials: 'include' })
    return res.json()
  }