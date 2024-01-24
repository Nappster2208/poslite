import { FetchFilteredSupplierData } from "@/app/lib/data";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { DeleteSupplier, UpdateSupplier } from "./button";

let url = process.env.BASE_URL;
const Table = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const supplier = await FetchFilteredSupplierData(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
          <div className="md:hidden">
            {supplier?.map((item) => {
              return (
                <div
                  key={item._id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={item.logo.filePath + item.logo.fileName}
                          className="mr-2 rounded-full aspect-square"
                          width={28}
                          height={28}
                          alt={`${item.logo.fileName}'s picture`}
                        />
                        <p>{item.name}</p>
                      </div>
                      <p className="text-sm text-gray-500">{item.email}</p>
                      <p className="text-sm text-gray-500">{item.telp}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p>{item.address}</p>
                    </div>
                    <div className="flex justify-end gap-2">
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
                        <UpdateSupplier id={item._id.toString()} />
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
                        <DeleteSupplier id={item._id.toString()} />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kode Supplier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Alamat
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  No Telp/HP
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {supplier?.map((item) => (
                <tr
                  key={item._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-10">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.logo.filePath + item.logo.fileName}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${item.logo.fileName}'s picture`}
                      />
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <p>{item.code}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{item.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{item.telp}</td>
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
                        <UpdateSupplier id={item._id.toString()} />
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
                        <DeleteSupplier id={item._id.toString()} />
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

export default Table;
