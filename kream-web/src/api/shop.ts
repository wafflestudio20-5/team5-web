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
      console.log(e.response?.data);
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
      console.log(e.response?.data);
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
      console.log(e.response?.data);
    }
    return null;
  }
};

interface wishProps {
  id?: string;
  accessToken: string | null;
}

export const wish = async ({ id, accessToken }: wishProps) => {
  try {
    const res = await axios.post(
      `${API_URL}/shop/products/${id}/wishes`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};

export const fetchShopComment = async ({ id, accessToken }: wishProps) => {
  try {
    const res = await axios.get(`${API_URL}/shop/productinfos/${id}/comments`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};

interface postCommentProps {
  id: string | undefined;
  accessToken: string | null;
  content: string;
}

export const postShopComment = async ({
  id,
  accessToken,
  content,
}: postCommentProps) => {
  try {
    const res = await axios.post(
      `/shop/productinfos/${id}/comments/`,
      { content: content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};

interface LikeCommentProps {
  cid: number;
  accessToken: string | null;
}

export const likeShopComment = async ({
  cid,
  accessToken,
}: LikeCommentProps) => {
  try {
    const res = await axios.patch(
      `/shop/comments/${cid}/like/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};

export const likeShopReply = async ({ cid, accessToken }: LikeCommentProps) => {
  try {
    const res = await axios.patch(
      `/shop/replies/${cid}/like/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};
