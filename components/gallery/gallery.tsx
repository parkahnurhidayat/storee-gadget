"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-4 sm:mt-6 w-full max-w-2xl lg:max-w-5xl">
        <TabList className="grid grid-cols-4 gap-3 sm:gap-6">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square relative w-full overflow-hidden rounded-lg bg-gray-100">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full overflow-hidden rounded-lg">
              <Image
                fill
                src={image.url}
                alt="Product image"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
