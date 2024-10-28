import React from "react";

const TranscriptModal = (props) => {
  // if (!props.open) return null
  const handleClose = (e) => {
    console.log("e.target.className ---", e.target.className);
    console.log("e.target.id ---", e.target.id);
    if (e.target.id === "Transcript") {
      props.onClose();
    }
  };

  return (
    <>
      {!!props.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          id="Transcript"
          onClick={handleClose}
        >
          <div className="max-w-[600px] w-[450px] flex flex-col">
            <div className="bg-[#949494] p-2 rounded">
              {/* <div className="flex shrink-0 items-center p-4 text-xl font-medium text-white">
                <p className="font-bold">{props.title}</p>
              </div> */}
              <div>
                <div className="relative py-4 leading-normal text-white font-light max-h-[250px] overflow-auto">
                  <div className="text-white text-center">
                    <p className="font-bold text-lg">
                      Check your phone to Received Transcript
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="py-2 px-12 bg-[#d9d9d9] text-black"
                      onClick={() => {
                        props.onClose();
                      }}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TranscriptModal;
