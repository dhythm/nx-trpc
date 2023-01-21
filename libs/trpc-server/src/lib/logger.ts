import { DateTime } from 'luxon';

const MASK_TARGETS = [
  'password',
  'oldPassword',
  'newPassword',
  'confirmPassword',
];

const maskLog = (data: unknown) => {
  if (typeof data !== 'object' || data === null) return data;

  const body = JSON.parse(JSON.stringify(data));
  Object.keys(body).forEach((key) => {
    if (MASK_TARGETS.includes(key)) {
      body[key] = '********';
    } else if (typeof body[key] === 'object' && !!body[key]) {
      body[key] = maskLog(body[key]);
    }
  });

  return body;
};

export const logger = (
  data: unknown,
  variant: 'INFO' | 'WARN' | 'ERROR' = 'INFO'
) => {
  const timestamp = DateTime.utc()
    .setZone('Asia/Tokyo')
    .toFormat('yyyy-LL-dd HH:mm:ss ZZ');

  const body: string = JSON.stringify(maskLog(data) || {});

  return `${timestamp} [${variant}] ${body}`;
};
