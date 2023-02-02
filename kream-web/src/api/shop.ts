import axios from "axios";
import { API_URL } from "../libs/urls";
import { Brands, Categories } from "../types/shop";

interface ShopProducts {
  pageParam: number;
  brand: Brands[];
  category: Categories | null;
  delivery: Categories | null;
}

export const fetchAllShopProducts = async ({
  pageParam,
  brand,
  category,
  delivery,
}: ShopProducts) => {
  try {
    let brandList = "";
    if (brand.length > 0) {
      for (let i = 0; i < brand.length; i++) {
        brandList += `&brand_id=${brand[i].id}`;
      }
    } else {
      brandList = "";
    }
    let categoryList = "";
    if (category) {
      categoryList = `&category=${category.engName}`;
    }
    let deliveryList = "";
    if (delivery) {
      deliveryList = `&delivery_tag=${delivery.engName}`;
    }
    const res = await axios.get(
      `${API_URL}/shop/productinfos/?page=${pageParam}${categoryList}${deliveryList}${brandList}`
    );
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const fetchShopProduct = async (id: string | undefined) => {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === "development"
        ? `/shop/productinfos/${id}`
        : `${API_URL}/shop/productinfos/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
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
