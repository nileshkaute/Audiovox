import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, Tag, X, Package, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };

  const handleToggleTag = async (product) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${product._id}`, {
        ...product,
        tagVisible: !product.tagVisible,
      });
      setProducts(
        products.map((p) =>
          p._id === product._id ? { ...p, tagVisible: !p.tagVisible } : p
        )
      );
    } catch (error) {
      console.error("Error toggling tag:", error);
      alert("Failed to toggle tag");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
          <p className="text-gray-400">{products.length} products in your store</p>
        </div>
        <Link
          to="/admin/add-product"
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium inline-flex items-center gap-2 w-fit"
        >
          + Add Product
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Products Table */}
      {filteredProducts.length > 0 ? (
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Product</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Price</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Tag</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Date</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product._id} className="border-b border-gray-800 last:border-b-0 hover:bg-[#222]">
                    {/* Product Info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package size={24} className="text-gray-600" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium line-clamp-1">{product.title}</p>
                          <p className="text-gray-500 text-sm line-clamp-1">{product.description}</p>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="py-4 px-6">
                      <span className="text-white font-semibold">
                        ₹{Number(product.price).toLocaleString()}
                      </span>
                    </td>

                    {/* Tag Status */}
                    <td className="py-4 px-6">
                      {product.tagVisible ? (
                        <span
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: product.tagBgColor || "#ef4444",
                            color: product.tagTextColor || "#fff",
                          }}
                        >
                          {product.tagText || "New"}
                        </span>
                      ) : (
                        <span className="text-gray-500 text-sm">No tag</span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="py-4 px-6">
                      <span className="text-gray-400 text-sm">
                        {formatDate(product.createdAt)}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        {/* Toggle Tag */}
                        <button
                          onClick={() => handleToggleTag(product)}
                          className={`p-2 rounded-lg transition-colors ${
                            product.tagVisible
                              ? "bg-yellow-600/20 text-yellow-500 hover:bg-yellow-600/30"
                              : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                          }`}
                          title={product.tagVisible ? "Hide Tag" : "Show Tag"}
                        >
                          {product.tagVisible ? <X size={18} /> : <Tag size={18} />}
                        </button>

                        {/* Edit */}
                        <Link
                          to={`/admin/edit-product/${product._id}`}
                          className="p-2 bg-blue-600/20 text-blue-500 rounded-lg hover:bg-blue-600/30 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </Link>

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteId(product._id)}
                          className="p-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600/30 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-12 text-center">
          <Package size={48} className="text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Products Found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm ? "Try a different search term" : "Add your first product to get started"}
          </p>
          {!searchTerm && (
            <Link
              to="/admin/add-product"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium inline-block"
            >
              + Add Product
            </Link>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-md w-full mx-4 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">Delete Product?</h3>
            <p className="text-gray-400 mb-6">
              This action cannot be undone. The product will be permanently removed.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
