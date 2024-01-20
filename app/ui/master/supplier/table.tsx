const Table = ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  return (
    <div className="mt-6 flow-root">
      <div className="min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-x-auto">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kode Supplier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nama
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
            <tbody className="bg-white"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
