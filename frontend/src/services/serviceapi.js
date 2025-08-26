import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Services APIs - already present
export const getServices = () => axiosInstance.get('/services');
export const getServiceById = (id) => axiosInstance.get(`/services/${id}`);
export const createService = (serviceData) => axiosInstance.post('/services', serviceData);
export const updateService = (id, serviceData) => axiosInstance.put(`/services/${id}`, serviceData);
export const deleteService = (id) => axiosInstance.delete(`/services/${id}`);

// Brands APIs
export const getBrands = () => axiosInstance.get('/brands');
export const createBrand = (brandData) => axiosInstance.post('/brands', brandData);
export const updateBrand = (id, brandData) => axiosInstance.put(`/brands/${id}`, brandData);
export const deleteBrand = (id) => axiosInstance.delete(`/brands/${id}`);

// Testimonials APIs
export const getTestimonials = () => axiosInstance.get('/testimonials');
export const createTestimonial = (testimonialData) => axiosInstance.post('/testimonials', testimonialData);
export const updateTestimonial = (id, testimonialData) => axiosInstance.put(`/testimonials/${id}`, testimonialData);
export const deleteTestimonial = (id) => axiosInstance.delete(`/testimonials/${id}`);

// News APIs
export const getNews = () => axiosInstance.get('/news');
export const createNews = (newsData) => axiosInstance.post('/news', newsData);
export const updateNews = (id, newsData) => axiosInstance.put(`/news/${id}`, newsData);
export const deleteNews = (id) => axiosInstance.delete(`/news/${id}`);
