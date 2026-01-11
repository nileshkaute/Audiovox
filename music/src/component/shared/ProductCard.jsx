import React from "react";

const ProductCard = ({ product }) => {
  // Use custom colors from product or fallback to defaults
  const bgColor = product.backgroundColor || "#ffffff";
  const titleColor = product.titleColor || "#000000";
  const descColor = product.descriptionColor || "#4a5568";
  const priceColor = product.priceColor || "#047857";
  const btnColor = product.buttonColor || "#000000";
  const btnTextColor = product.buttonTextColor || "#ffffff";

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ backgroundColor: bgColor }}
    >
      {/* Product Tag */}
      {product.tagVisible && (
        <span
          className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full z-10 shadow-md"
          style={{
            backgroundColor: product.tagBgColor || "#ef4444",
            color: product.tagTextColor || "#ffffff",
          }}
        >
          {product.tagText || "New"}
        </span>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 z-10">
        <span className="text-gray-600 hover:text-red-600 text-xl">♡</span>
      </button>

      {/* Product Image */}
      <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
            🎧
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3
          className="text-lg font-bold mb-2 line-clamp-1"
          style={{ color: titleColor }}
        >
          {product.title}
        </h3>

        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: descColor }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xl font-bold"
            style={{ color: priceColor }}
          >
            ₹{Number(product.price).toLocaleString()}
          </span>
        </div>

        {/* Buy Now Button */}
        <button
          className="w-full py-3 font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: btnColor, color: btnTextColor }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
