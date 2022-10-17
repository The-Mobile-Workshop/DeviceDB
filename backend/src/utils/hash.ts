import { createHash } from 'crypto';

export default (data: string): string => {
  return createHash('sha256').update(data).digest('hex');
};
