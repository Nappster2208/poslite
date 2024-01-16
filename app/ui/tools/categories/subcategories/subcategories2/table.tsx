import { FetchFilteredSubCategories2 } from "@/app/lib/data";
import { Tooltip } from "@mui/material";
import { DeleteCategory, UpdateCategory } from "../../buttons";

const SubCategory2Table = async ({
  id,
  query,
  currentPage,
}: {
  id: string;
  query: string;
  currentPage: number;
}) => {
  const data = await FetchFilteredSubCategories2(id, query, currentPage);
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
              {data?.map((item) => (
                <tr
                  key={item._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{item.subcatName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.subcatDesc}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end md:gap-3">
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
                          id=""
                          sub1={item.subcatId.toString()}
                          sub2={item._id.toString()}
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
                        <DeleteCategory id={item._id.toString()} />
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
};

export default SubCategory2Table;
