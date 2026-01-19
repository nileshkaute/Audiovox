import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Save, Plus } from 'lucide-react';
import ProductCard from '../../component/shared/ProductCard';

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const initialFormState = {
    title: '',
    price: '',
    description: '',
    image: '',
    backgroundColor: '#ffffff',
    titleColor: '#000000',
    descriptionColor: '#4a5568',
    priceColor: '#047857',
    buttonColor: '#000000',
    buttonTextColor: '#ffffff',
    tagVisible: false,
    tagText: 'New',
    tagBgColor: '#ef4444',
    tagTextColor: '#ffffff',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [imageType, setImageType] = useState('url');
  const [loading, setLoading] = useState(isEditMode);
  const [submitting, setSubmitting] = useState(false);

  // Fetch product data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Failed to load product');
      navigate('/admin/products');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleImageChange = (e) => {
    if (imageType === 'upload') {
      const file = e.target.files[0];
      if (file) {
        const localUrl = URL.createObjectURL(file);
        setFormData({ ...formData, image: localUrl });
      }
    } else {
      setFormData({ ...formData, image: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/products/${id}`, formData);
        alert('Product updated successfully!');
        navigate('/admin/products');
      } else {
        await axios.post('http://localhost:5000/api/products', formData);
        alert('Product added successfully!');
        setFormData(initialFormState);
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert(`Failed to ${isEditMode ? 'update' : 'add'} product`);
    } finally {
      setSubmitting(false);
    }
  };

  // Create preview product object
  const previewProduct = {
    ...formData,
    price: formData.price || 0,
    title: formData.title || 'Product Title',
    description: formData.description || 'Product description will appear here...',
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
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/admin/products')}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white">
            {isEditMode ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-gray-400">
            {isEditMode ? 'Update product details' : 'Create a new product for your store'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Product Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="e.g. Wireless Headset"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="2999"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Product details..."
                required
              />
            </div>

            {/* Image Source Toggle */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Image Source</label>
              <div className="flex gap-3 mb-3">
                <button
                  type="button"
                  onClick={() => setImageType('url')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    imageType === 'url'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Image URL
                </button>
                <button
                  type="button"
                  onClick={() => setImageType('upload')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    imageType === 'upload'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Upload
                </button>
              </div>

              {imageType === 'url' ? (
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleImageChange}
                  className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer"
                />
              )}
            </div>

            {/* Product Tag Section */}
            <div className="border-t border-b py-5 border-gray-700">
              <label className="block text-gray-300 font-medium mb-3">Product Tag</label>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="tagVisible"
                    checked={formData.tagVisible}
                    onChange={handleChange}
                    className="w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-400">Show Tag on Product</span>
                </label>

                {formData.tagVisible && (
                  <div className="space-y-3 pl-8">
                    <input
                      type="text"
                      name="tagText"
                      value={formData.tagText}
                      onChange={handleChange}
                      className="w-full bg-[#0f0f0f] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                      placeholder="Tag Text (e.g. New)"
                    />
                    <div className="flex gap-4">
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Background</label>
                        <input
                          type="color"
                          name="tagBgColor"
                          value={formData.tagBgColor}
                          onChange={handleChange}
                          className="h-10 w-16 border-0 rounded cursor-pointer bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Text Color</label>
                        <input
                          type="color"
                          name="tagTextColor"
                          value={formData.tagTextColor}
                          onChange={handleChange}
                          className="h-10 w-16 border-0 rounded cursor-pointer bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Color Customization Section */}
            <div>
              <label className="block text-gray-300 font-medium mb-3">Card Customization</label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Background</label>
                  <input
                    type="color"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Title</label>
                  <input
                    type="color"
                    name="titleColor"
                    value={formData.titleColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Price</label>
                  <input
                    type="color"
                    name="priceColor"
                    value={formData.priceColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Description</label>
                  <input
                    type="color"
                    name="descriptionColor"
                    value={formData.descriptionColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Button</label>
                  <input
                    type="color"
                    name="buttonColor"
                    value={formData.buttonColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Btn Text</label>
                  <input
                    type="color"
                    name="buttonTextColor"
                    value={formData.buttonTextColor}
                    onChange={handleChange}
                    className="h-10 w-full border-0 rounded cursor-pointer bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors mt-6"
            >
              {submitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isEditMode ? (
                <>
                  <Save size={20} />
                  Update Product
                </>
              ) : (
                <>
                  <Plus size={20} />
                  Add Product
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Live Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <h3 className="text-xl font-bold text-white mb-4">Live Preview</h3>
          <div className="max-w-sm">
            <ProductCard product={previewProduct} />
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            This is exactly how your product card will appear on the store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
