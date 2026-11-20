"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const route = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    route.push(`/product/${data?.id}`);
  };

  const handleMouseEnter = () => {
    route.prefetch(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className="bg-white group cursor-pointer rounded-xl border p-3 sm:p-4 flex flex-col justify-between space-y-3"
    >
      <div className="space-y-3">
        <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
          <Image
            src={data?.images?.[0]?.url}
            alt={data?.name || "Product image"}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="aspect-square object-cover rounded-md"
            fill
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-4 bottom-3 hidden sm:block">
            <div className="flex gap-x-4 justify-center">
              <IconButton
                onclick={onPreview}
                icon={<Expand size={18} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base line-clamp-2">
            {data.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {data.category.name}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm sm:text-base">
        <Currency values={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
