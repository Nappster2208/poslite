// import { FetchFilteredCategories } from "@/app/lib/data";
// import {
//   AddSubCategory,
//   DeleteCategory,
//   SubCategoriesBtn,
//   UpdateCategory,
// } from "./buttons";

// export default async function CategoryTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
//   const categories = await FetchFilteredCategories(query, currentPage);

//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Name
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Description
//                 </th>
//                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                   <span className="sr-only">Action</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {categories?.map((category: any) => (
//                 <tr
//                   key={category.id}
//                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                 >
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex items-center gap-3">
//                       <p>{category.catName}</p>
//                     </div>
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {category.catDesc}
//                   </td>
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex justify-end gap-3">
//                       {category.subCategory &&
//                         category.subCategory.length > 0 && (
//                           <SubCategoriesBtn id={category.id} />
//                         )}
//                       <AddSubCategory id={category.id} otherSub={[]} />
//                       <UpdateCategory id={category.id} />
//                       <DeleteCategory id={category.id} />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
