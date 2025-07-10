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
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-5xl">
        <TabList className="grid grid-cols-4 gap-6">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square relative w-full overflow-hidden sm:rounded-lg">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className="absolute inset-0 overflow-hidden">
              <Image
                fill
                src={image.url}
                alt=""
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
