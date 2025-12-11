interface DataExchangeStoryblok {
    data_title?: string;
  
    data_number_1?: string;
    data_number_2?: string;
    data_number_3?: string;
    data_number_4?: string; // REQUIRED
  
    data_details_1?: string;
    data_details_2?: string;
    data_details_3?: string;
    data_details_4?: string; // REQUIRED
  }
  
  export default function DataExchange({ blok }: { blok?: DataExchangeStoryblok }) {
    if (!blok) return null;
  
    return (
      <section className="mx-4 lg:mx-0">
        <div className="w-full bg-[#e9f0fa] py-20 px-6 mt-16 max-w-[1200px] mx-auto rounded-4xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-[#0d1b3e] mb-16">
              {blok.data_title || ""}
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
  
              {/* Item 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="text-[#14c8e0] text-4xl mb-2">📈</div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#14c8e0] text-transparent bg-clip-text">
                    {blok.data_number_1 || ""}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mt-2 leading-tight">
                  {blok.data_details_1 || ""}
                </p>
              </div>
  
              {/* Item 2 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="text-[#14c8e0] text-4xl mb-2">👥</div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#14c8e0] text-transparent bg-clip-text">
                    {blok.data_number_2 || ""}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mt-2 leading-tight">
                  {blok.data_details_2 || ""}
                </p>
              </div>
  
              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="text-[#14c8e0] text-4xl mb-2">⏱️</div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#14c8e0] text-transparent bg-clip-text">
                    {blok.data_number_3 || ""}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mt-2 leading-tight">
                  {blok.data_details_3 || ""}
                </p>
              </div>
  
              {/* Item 4 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="text-[#14c8e0] text-4xl mb-2">↗️</div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#14c8e0] text-transparent bg-clip-text">
                    {blok.data_number_4 || ""}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mt-2 leading-tight">
                  {blok.data_details_4 || ""}
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  }
  