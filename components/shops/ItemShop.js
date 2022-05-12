import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const ItemShop = () => {
  const [shopData, setShopData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fortnite-api.com/v2/shop/br", {
          headers: {
            Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
          },
        })
        .then((Response) => {
          let typesArr = [];
          Response.data.data.specialFeatured.entries.map((item) => {
            if (!typesArr.includes(item.section.name)) {
              typesArr.push(item.section.name);
            }
          });
          setShopData(() => {
            let specialFeatured = [];
            for (let i = 0; i < typesArr.length; i++) {
              specialFeatured.push({
                name: typesArr[i],
                entries: Response.data.data.specialFeatured.entries.filter(
                  (item) => item.section.name === typesArr[i]
                ),
              });
            }
            return {
              vbuckIcon: Response.data.data.vbuckIcon,
              featured: Response.data.data.featured,
              daily: Response.data.data.daily,
              specialFeatured,
            };
          });
        });
    };
    fetchData();
  }, []);
  return (
    <>
      {shopData !== undefined ? (
        <div className="flex flex-col w-full h-full text-center text-white">
          <div className="featured flex flex-col w-full h-full">
            <div className="text-left text-4xl mb-12">
              {shopData.featured.name}
            </div>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation]}
              navigation
              className="mySwiper w-full"
            >
              {shopData.featured.entries.map((item) => (
                <SwiperSlide className="overflow-hidden aspect-[2/3] cursor-pointer">
                  <Image
                    src={
                      item.newDisplayAsset.materialInstances[0].images
                        .Background
                    }
                    width={1024}
                    height={1024}
                    layout="responsive"
                  />
                  <div className="bg-zinc-900 -rotate-2 relative bottom-4 right-4 w-[110%] h-14"></div>
                  <Link href={`/${item.items[0].type.value.replace(' ' , '-')}/${item.items[0].name.replace(' ' , '-').toLowerCase()}`}>
                      <a className="relative bottom-16 whitespace-nowrap">
                        {item.items[0].name}
                      </a>
                    </Link>
                  <div className="bg-gray-900 relative bottom-16 text-base px-2 flex justify-end items-center">
                    <span className="mr-1">{item.finalPrice}</span>
                    <Image src={shopData.vbuckIcon} width={35} height={35} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="daily flex flex-col w-full h-full">
            <div className="text-left text-4xl mb-12">
              {shopData.daily.name}
            </div>
            <Swiper
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation]}
              navigation
              className="mySwiper w-full"
            >
              {shopData.daily.entries.map((item) => (
                <SwiperSlide className="overflow-hidden aspect-[2/3] cursor-pointer">
                  <Image
                    src={
                      item.newDisplayAsset !== null
                        ? item.newDisplayAsset.materialInstances[0].images
                            .Background
                        : item.items[0].images.icon
                    }
                    width={1024}
                    height={1024}
                    layout="responsive"
                  />
                  <div className="bg-zinc-900 -rotate-2 relative bottom-4 right-4 w-[110%] h-14"></div>
                  <Link href={`/${item.items[0].type.value.replace(' ' , '-')}/${item.items[0].name.replace(' ' , '-').toLowerCase()}`}>
                      <a className="relative bottom-16 whitespace-nowrap">
                        {item.items[0].name}
                      </a>
                    </Link>
                  <div className="bg-gray-900 relative bottom-16 text-base px-2 flex justify-end items-center">
                    <span className="mr-1">{item.finalPrice}</span>
                    <Image src={shopData.vbuckIcon} width={35} height={35} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {shopData.specialFeatured.map((category) => (
            <div className="flex flex-col w-full h-full" key={category.name}>
              <div className="text-left text-4xl mb-12">{category.name}</div>
              <Swiper
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    width: 640,
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    width: 1280,
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                modules={[Navigation]}
                navigation
                className="mySwiper w-full"
              >
                {category.entries.map((item) => (
                  <SwiperSlide className="overflow-hidden aspect-[2/3] cursor-pointer">
                    <Image
                      src={
                        item.newDisplayAsset.materialInstances[0].images
                          .Background
                      }
                      width={400}
                      height={400}
                      layout="responsive"
                    />
                    <div className="bg-zinc-900 -rotate-2 relative bottom-4 right-4 w-[110%] h-14"></div>
                    <Link href={`/${item.items[0].type.value.replace(' ' , '-')}/${item.items[0].name.replace(' ' , '-').toLowerCase()}`}>
                      <a className="relative bottom-16 whitespace-nowrap">
                        {item.items[0].name}
                      </a>
                    </Link>
                    <div className="bg-gray-900 relative bottom-16 text-base px-2 flex justify-end items-center">
                      <span className="mr-1">{item.finalPrice}</span>
                      <Image src={shopData.vbuckIcon} width={35} height={35} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemShop;
