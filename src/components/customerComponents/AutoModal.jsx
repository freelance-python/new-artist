import { useState, useEffect } from "react";
import { Box, Modal, Grid, Checkbox } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const AutoModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="AutoModalBox rounded-xl absolute w-11/12 bg-[#f9f6f6]">
        <button className="absolute top-4 right-4 z-[1] flex bg-gray-200 h-10 w-10 rounded-full justify-center items-center">
          <IoMdClose onClick={handleClose} size={24} color="black" />
        </button>
        <Box
          sx={{
            maxWidth: "100%",
            backgroundColor: "white",
            borderRadius: 2,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className="ImagePopupHidden"
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                component="img"
                src="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1791/pickbazar02.png"
                alt="Get 25% Discount"
                sx={{
                  width: "100%",
                  height: { xs: "18rem", md: "28.125rem" },
                  position: "relative",
                  objectFit: "contain",
                  color: "transparent",
                  gridColumn: { xs: "span 2", md: "span 1" },
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: { xs: 2, md: 4 },
                order: { xs: 2, md: 1 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 className="text-3xl font-bold mb-4">Get 25% Discount</h2>
              <p className="mb-10 text-[#111111] text-lg">
                Subscribe to the mailing list to receive updates on new
                arrivals, special offers and our promotions.
              </p>
              <div className="flex flex-col">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="relative w-full rounded border border-gray-200 bg-gray-50 pr-11">
                    <input
                      type="email"
                      id="email_subscribe"
                      name="email"
                      placeholder="Write your email here"
                      className="h-14 w-full border-0 bg-transparent text-sm text-[#6b7280] outline-none pl-5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 transform -translate-y-1/2 right-3"
                    >
                      <IoSend size={20} className="email-send-icon-automodal" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-12">
                <div className="flex items-center">
                  <Checkbox color="success" />
                  <label className="text-[#6b7280] text-sm">
                    Don&apos;t show this popup again
                  </label>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default AutoModal;
