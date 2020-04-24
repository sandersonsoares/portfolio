import { api } from '../config/api';

const USER = 'sandersonc0c03';

export const projects = async () => {
  return api(`/users/${USER}/projects`);
};