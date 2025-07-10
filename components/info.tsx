'use client';

import { Product } from "@/types";
import Currency from "./ui/currency";
import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const url = `${window.location.origin}/product/${data.id}`;
  const telp = `${process.env.NEXT_PUBLIC_TELP}`;
  const pesan = `Saya ingin membeli Product ${data.name} dengan harga ${data.price} dan link ${url}`;

  const link = `https://wa.me/${telp}?text=${pesan}`;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 w-full">
        <h2 className="text-xl font-semibold text-gray-600">About</h2>
        <p
          className="text-md text-gray-500 tracking-[1px]"
          style={{ wordSpacing: "3px" }}
        >
          {data.description}
        </p>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency values={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <Link href={link} target="_blank">
          <button className="flex items-center gap-x-2 bg-black py-3 px-6 text-white rounded-xl">
            Chat with seller <MessageCircleIcon size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
