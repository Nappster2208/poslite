"use client";
import React from "react";
import {
  AddSubCategory,
  DeleteCategory,
  SubCategoriesBtn,
  UpdateCategory,
} from "../buttons";

type Subcategory = {
  subcatName: string;
  subcatDesc: string;
  _id: string; // Ini bisa berupa string atau tipe lainnya tergantung implementasi ObjectId Anda
};

interface SubcategoryListComponentProps {
  data: Subcategory[];
}

const SubCategoryTable: React.FC<SubcategoryListComponentProps> = ({
  data,
}) => {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
          <table className="hidden min-w-full text-gray-900 md:table">
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
            <tbody className="bg-white"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SubCategoryTable;
