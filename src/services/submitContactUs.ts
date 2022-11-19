import { CONTACT_US } from '../constants/routes';
import { api } from '../libs/axios';

import { IFormContactUs } from '../types/IFormContactUs';
import { Log } from '../util';

export const submitContactUs = async (data: IFormContactUs) => {
  try {
    const res = await api.post(CONTACT_US, data);
    return res;
  } catch (error: any) {
    Log(false, error);
    return error;
  }
};
