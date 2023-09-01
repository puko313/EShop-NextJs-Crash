import Head from "next/head";

import { gql, useQuery } from "@apollo/client";
export default function shop() {
  // get the query from graphql
  const sktTest = gql`
    {
      posts {
        data {
          attributes {
            title
            description
            published
            deliverable
            Price
            photo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(sktTest);

  console.log(
    "gql heree",
    data?.posts?.data.map((el) => el.attributes.title)
  );

  const products = data?.posts?.data;

  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      <h1>about me</h1>

      <p>
        here i display products that i sell from my strapi api,{" "}
        {products?.length} items total
      </p>
      <div className="flex 2xl flex-wrap justify-center items-center">
        {products?.map((product, index) => (
          <div key={product.attributes.id}>
            <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
              <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
                  Open
                </div>
                <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"></div>
                <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"></div>
                <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
                  <div className="relative">
                    <img
                      src={`http://localhost:1337${product?.attributes?.photo?.data?.attributes?.url}`}
                      alt="template"
                      className=" object-center object-cover  w-260 h-full"
                    />
                  </div>
                  <div className="px-2 py-1">
                    <div className="text-sm md:text-base font-bold pr-2">
                      {product.attributes?.title}
                    </div>
                    <div className="flex py-2">
                      <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
                        $ {product.attributes?.Price}
                      </div>
                      <div className="flex justify-between item-center">
                        <div className="flex items-center">
                          <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                            <span className="text-gray-500 font-normal">
                              shipping:
                              {product.attributes?.deliverable ? "yes" : "no"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500  overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {product.attributes?.description}
                    </p>

                    <a
                      class="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
                      href="#"
                    >
                      order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
