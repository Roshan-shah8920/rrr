import React, { createContext, useContext, useState, useEffect } from "react";
import API_BASE_URL from "../config"; 

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/product`);
      const data = await res.json();
      if (Array.isArray(data)) setProducts(data);
      else if (data.products) setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/category/${category}`);
      const data = await res.json();
      if (Array.isArray(data)) setProducts(data);
      else if (data.products) setProducts(data.products);
    } catch (err) {
      console.error(`Error fetching products for category ${category}:`, err);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") fetchProducts();
    else fetchProductsByCategory(category);
  };

  const loginUser = async (email, password) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const registerUser = async (userData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
  };

  const addToCart = async (product) => {
    if (!user) { alert("Please login first"); return; }
    try {
      const res = await fetch(`${API_BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          userId: user._id,
          productId: product._id,
          productName: product.name,
          price: product.price,
          quantity: 1,
        }),
      });
      const data = await res.json();
      if (res.ok) setCart((prev) => [...prev, data.item]);
      else alert(data.error || "Failed to add to cart");
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const fetchCart = async () => {
    if (!user?._id) return;
    try {
      const res = await fetch(`${API_BASE_URL}/cart/cart/${user._id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      const items = data.items || data.cart || [];
      setCart(items);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCart([]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedCategory,
        cart,
        setCart,
        user,
        loginUser,
        registerUser,
        logoutUser,
        fetchProducts,
        fetchProductsByCategory,
        filterByCategory,
        addToCart,
        fetchCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
