// "use client";
// import React, { useEffect, useState } from "react";
// import SearchInput from "./search";
// import Pagination from "./pagination";
// import { LoadingSpinner } from "@/app/ui/skeletons";
// import { AddSubCategory, DeleteCategory, UpdateCategory } from "../buttons";
// import { lusitana } from "@/app/ui/fonts";
// import clsx from "clsx";
// import { Tooltip } from "@mui/material";

// const SubCategoryTable = ({ id, catName }: { id: string; catName: string }) => {
//   const [data, setData] = useState<
//     Array<{ _id: string; subcatName: string; subcatDesc: string }>
//   >([]);
//   const [isLoading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6; // Adjust as per your requirement

//   useEffect(() => {
//     fetch(`/api/subs/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page: string | number) => {
//     // Convert the page parameter to a number
//     const pageNumber = typeof page === "string" ? parseInt(page) : page;
//     setCurrentPage(pageNumber);
//   };

//   if (isLoading) return <LoadingSpinner />;
//   if (!data || !data.length) {
//     return <p>No data found</p>;
//   }
//   const filteredData = data.filter((subcategory) =>
//     subcategory.subcatName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const slicedData = filteredData.slice(startIndex, endIndex);

//   return (
//     <>
//       <nav className="block">
//         <ol className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
//           <span className="mx-1 inline-block">Category : {catName}</span>
//         </ol>
//       </nav>
//       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
//         <div className="relative flex flex-1 flex-shrink-0 mb-4">
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//           <SearchInput
//             placeholder="Search Sub Category by Name"
//             searchTerm={searchTerm}
//             onSearchChange={handleSearch}
//           />
//         </div>
//       </div>
//       <div className="mt-6 flow-root">
//         <div className="min-w-full align-middle">
//           <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
//             <table className="min-w-full text-gray-900">
//               <thead className="rounded-lg text-left text-sm font-normal">
//                 <tr>
//                   <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                     Name
//                   </th>
//                   <th scope="col" className="px-3 py-5 font-medium">
//                     Description
//                   </th>
//                   <th scope="col" className="relative py-3 pl-6 pr-3">
//                     <span className="sr-only">Action</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {slicedData.map((subcategory) => (
//                   <tr
//                     key={subcategory._id}
//                     className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                   >
//                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                       <div className="flex items-center gap-3">
//                         <p>{subcategory.subcatName}</p>
//                       </div>
//                     </td>
//                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                       <div className="flex items-center gap-3">
//                         <p>{subcategory.subcatDesc}</p>
//                       </div>
//                     </td>
//                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                       <div className="flex justify-end md:gap-3">
//                         <Tooltip
//                           title="Add sub2"
//                           placement="bottom"
//                           arrow
//                           slotProps={{
//                             popper: {
//                               modifiers: [
//                                 {
//                                   name: "offset",
//                                   options: {
//                                     offset: [0, -10],
//                                   },
//                                 },
//                               ],
//                             },
//                           }}
//                         >
//                           <AddSubCategory
//                             id={id}
//                             otherSub={[subcategory._id]}
//                           />
//                         </Tooltip>
//                         <Tooltip
//                           title="Edit"
//                           placement="bottom"
//                           arrow
//                           slotProps={{
//                             popper: {
//                               modifiers: [
//                                 {
//                                   name: "offset",
//                                   options: {
//                                     offset: [0, -10],
//                                   },
//                                 },
//                               ],
//                             },
//                           }}
//                         >
//                           <>
//                             <UpdateCategory
//                               parentId={id}
//                               subsId1={subcategory._id}
//                               subsId2=""
//                             />
//                           </>
//                         </Tooltip>
//                         <Tooltip
//                           title="Delete"
//                           placement="bottom"
//                           arrow
//                           slotProps={{
//                             popper: {
//                               modifiers: [
//                                 {
//                                   name: "offset",
//                                   options: {
//                                     offset: [0, -10],
//                                   },
//                                 },
//                               ],
//                             },
//                           }}
//                         >
//                           <>
//                             <DeleteCategory id={subcategory._id} />
//                           </>
//                         </Tooltip>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="mt-5 flex w-full justify-center">
//         <Pagination
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </>
//   );
// };
// export default SubCategoryTable;
