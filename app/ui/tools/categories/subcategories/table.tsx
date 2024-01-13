import { FetchFilteredSubCategories } from "@/app/lib/data";
import {
  AddSubCategory,
  DeleteCategory,
  DeleteSubCategory,
  SubCategoriesBtn,
  UpdateCategory,
} from "../buttons";
import { Tooltip } from "@mui/material";

export default async function SubCategoryTable({
  id,
  query,
  currentPage,
}: {
  id: string;
  query: string;
  currentPage: number;
}) {
  const subs = await FetchFilteredSubCategories(id, query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {subs?.map((sub) => (
                <tr
                  key={sub._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{sub.subcatName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {sub.subcatDesc}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end md:gap-3">
                      {/* {sub.subCategories &&
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
                            <SubCategoriesBtn id={category._id} />
                          </Tooltip>
                        )} */}
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
                          id={sub.catId.toString()}
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
                        <UpdateCategory
                          id={sub.catId.toString()}
                          sub1={sub._id.toString()}
                          sub2=""
                        />
                      </Tooltip>
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
                        <DeleteSubCategory id={sub._id.toString()} catId={id} />
                      </Tooltip>
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
