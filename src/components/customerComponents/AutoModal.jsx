import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Input,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const AutoModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="AutoModalContainer">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="AutoModalBox">
            <CloseIcon
              onClick={handleClose}
              style={{
                position: "absolute",
                color: "black",
                top: "40px",
                right: "44px",
                zIndex: 1,
              }}
            />
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
                    sx={{ width: "100%", height: "auto", borderRadius: 1 }}
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
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{ mb: 2, fontWeight: "bold" }}
                  >
                    Get 25% Discount
                  </Typography>
                  <Typography
                    sx={{ mb: 4, color: "text.secondary", lineHeight: 1.5 }}
                  >
                    Subscribe to the mailing list to receive updates on new
                    arrivals, special offers and our promotions.
                  </Typography>
                  <FormControl component="form" sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "gray.50",
                        borderRadius: 1,
                      }}
                    >
                      <Input
                        type="email"
                        placeholder="Write your email here"
                        disableUnderline
                        sx={{ pl: 2, pr: 5, flex: 1, height: 56 }}
                      />
                      <Button sx={{ position: "absolute", right: 8 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.045"
                          height="16"
                          viewBox="0 0 16.045 16"
                          className="text-gray-500 transition-colors hover:text-accent"
                        >
                          <path
                            id="send"
                            d="M17.633,9.293,3.284,2.079a.849.849,0,0,0-1.2,1.042l2,5.371,9.138,1.523L4.086,11.538l-2,5.371a.812.812,0,0,0,1.2.962l14.349-7.214A.762.762,0,0,0,17.633,9.293Z"
                            transform="translate(-2.009 -1.994)"
                            fill="currentColor"
                          />
                        </svg>
                      </Button>
                    </Box>
                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="default"
                        sx={{ padding: "8px 0px" }}
                        icon={<CancelPresentationIcon />}
                        checkedIcon={<CancelPresentationIcon />}
                      />
                    }
                    label="Don't show this popup again"
                    sx={{ color: "text.primary" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AutoModal;
