import { FetchFilteredCategories } from "@/app/lib/data";
import {
  AddSubCategory,
  DeleteCategory,
  SubCategoriesBtn,
  UpdateCategory,
} from "./buttons";
import { Tooltip } from "@mui/material";

export default async function CategoryTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const categories = await FetchFilteredCategories(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Deskripsi
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {categories?.map((category) => (
                <tr
                  key={category._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{category.catName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {category.catDesc}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end md:gap-3">
                      {category.subCategories &&
                        category.subCategories.length > 0 && (
                          <Tooltip
                            title="Sub"
                            placement="bottom"
                            arrow
                            slotProps={{
                              popper: {
                                modifiers: [
                                  {
                                    name: "offset",
                                    options: {
                                      offset: [0, -10],
                                    },
                                  },
                                ],
                              },
                            }}
                          >
                            <SubCategoriesBtn id={category._id} sub2={false} />
                          </Tooltip>
                        )}
                      <Tooltip
                        title="Add Sub"
                        placement="bottom"
                        arrow
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -10],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <AddSubCategory
                          id={category._id}
                          otherSub={[]}
                          className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center"
                        />
                      </Tooltip>
                      <Tooltip
                        title="Edit"
                        placement="bottom"
                        arrow
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -10],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <UpdateCategory id={category._id} sub1="" sub2="" />
                      </Tooltip>
                      {category.subCategories &&
                        category.subCategories.length === 0 && (
                          <Tooltip
                            title="Delete"
                            placement="bottom"
                            arrow
                            slotProps={{
                              popper: {
                                modifiers: [
                                  {
                                    name: "offset",
                                    options: {
                                      offset: [0, -10],
                                    },
                                  },
                                ],
                              },
                            }}
                          >
                            <DeleteCategory id={category._id.toString()} />
                          </Tooltip>
                        )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
