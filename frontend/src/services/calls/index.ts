import api from '../api';

export const getTaskData = async () => {
  return await api.get('/lists');
};

export const postTaskData = async (data: any) => {
  return await api.post('/lists', data);
};

export const updateTaskData = async (id: number, data: any) => {
  return await api.patch(`/lists/${id}`, data);
};

export const deleteTaskData = async (id: number) => {
  return await api.delete(`/lists/${id}`);
};

export const postUser = async (data:any) => {
  return await api.post('/register',data)
}
