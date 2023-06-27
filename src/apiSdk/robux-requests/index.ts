import axios from 'axios';
import queryString from 'query-string';
import { RobuxRequestInterface, RobuxRequestGetQueryInterface } from 'interfaces/robux-request';
import { GetQueryInterface } from '../../interfaces';

export const getRobuxRequests = async (query?: RobuxRequestGetQueryInterface) => {
  const response = await axios.get(`/api/robux-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRobuxRequest = async (robuxRequest: RobuxRequestInterface) => {
  const response = await axios.post('/api/robux-requests', robuxRequest);
  return response.data;
};

export const updateRobuxRequestById = async (id: string, robuxRequest: RobuxRequestInterface) => {
  const response = await axios.put(`/api/robux-requests/${id}`, robuxRequest);
  return response.data;
};

export const getRobuxRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/robux-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRobuxRequestById = async (id: string) => {
  const response = await axios.delete(`/api/robux-requests/${id}`);
  return response.data;
};
