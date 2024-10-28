import { useRouter } from "next/navigation";
import React from "react";

const JobModal = (props) => {
  const router = useRouter();
  const handleClose = (e) => {
    console.log("e.target.className ---", e.target.className);
    console.log("e.target.id ---", e.target.id);
    if (e.target.id === "wrapper") {
      props.onClose();
    }
  };

  return (
    <>
      {!!props.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          id="wrapper"
          onClick={handleClose}
        >
          <div className="w-[600px] flex flex-col">
            <div className="bg-[#949494] p-2 rounded">
              <div className="flex shrink-0 items-center p-4 text-xl font-medium text-white">
                <p className="font-bold">{props.title}</p>
              </div>
              <div>
                <div className="relative border-t border-slate-200 py-4 leading-normal text-white font-light max-h-[250px] overflow-auto">
                  <div className="text-white">
                    <span className="font-bold">Job Details: </span>
                    <span>{props.details}</span>
                  </div>
                  {!!props.apply && (
                    <div className="text-end mr-8">
                      <button
                        className="py-2 px-6 bg-[#d9d9d9] text-black rounded font-bold text-lg"
                        onClick={() => {
                          router.push({
                            pathname: `/student/jobTitle`,
                          });
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {!!props.jobStatus && (
                    <div className="text-end mr-8">
                      {/* Accepted = bg-[#00ff55]
                          padding = bg-[#ffdd00]
                          Rejected = bg-[#ff1900]
                      */}
                      <button
                        className="py-1 px-10 bg-[#00ff55] text-black rounded font-bold text-lg"
                        onClick={() => {
                          props.onClose();
                        }}
                      >
                        Accepted
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                <button
                  data-dialog-close="true"
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  data-dialog-close="true"
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Confirm
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobModal;
