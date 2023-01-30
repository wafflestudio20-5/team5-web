import axios from "axios";
import { API_URL } from "../libs/urls";

export const fetchShopProducts = async (page: number) => {
  try {
    const res = await axios.get(`${API_URL}/shop/productinfos/`, {
      params: { page: page },
    });
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const fetchBrandName = async (id: number) => {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === "development"
        ? `/shop/brands/${id}`
        : `${API_URL}/shop/brands/${id}`,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const fetchShopProductImages = async (id: number) => {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === "development"
        ? `/shop/productinfos/${id}/images`
        : `${API_URL}/shop/productinfos/${id}/images`,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const fetchBrands = async () => {
  try {
    const res = await axios.get(`${API_URL}/shop/brands/`);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};
