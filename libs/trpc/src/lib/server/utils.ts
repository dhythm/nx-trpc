type Response<T = any> =
  | {
      statusCode: number;
      data: T;
      error: null;
    }
  | {
      statusCode: number;
      data: null;
      error: Error;
    };

type Props = {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  headers?: { [key: string]: string };
  payload?: { [key: string]: any };
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const fetcher = async <T = {}>({
  url: _url,
  method,
  headers: _headers,
  payload,
}: Props): Promise<Response<T>> => {
  const url = new URL(_url);

  const headers = {
    ...(method !== 'GET' && {
      'Content-Type': 'application/json; charset=utf-8',
    }),
    ..._headers,
  };

  const options: RequestInit = {
    method,
    headers,
    ...(method !== 'GET' && {
      body: JSON.stringify(payload),
    }),
  };

  if (method === 'GET') {
    for (const key in payload) {
      const value = payload[key];
      if (Array.isArray(value)) {
        value.forEach((v) => url.searchParams.append(key, v));
      } else if (value !== undefined || value !== null) {
        url.searchParams.append(key, value);
      }
    }
    if (!_headers) {
      delete options.headers;
    }
  }

  try {
    const res = await fetch(url.toString(), options);
    const statusCode = res.status;
    const data = await res.json();

    if (statusCode !== 200) {
      return {
        statusCode,
        data: null,
        error: new Error('error'),
      };
    }

    return {
      statusCode,
      data: data || ({} as T),
      error: null,
    };
  } catch (error) {
    return {
      statusCode: 500,
      data: null,
      error: new Error('unknown'),
    };
  }
};
