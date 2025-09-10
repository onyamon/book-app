// theme.ts
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";


// ฟอนต์ Harry Potter (ดาวน์โหลดไฟล์ .ttf แล้วใส่ใน public/fonts หรือ import จาก Google Fonts ถ้ามี)
const harryPotterFont = "Harry Potter, serif"; 

const theme = createTheme({
  typography: {
    fontFamily: harryPotterFont,
    h3: {
      fontWeight: "bold",
      color: red[900],
    },
    h4: {
      fontWeight: "bold",
      color: red[800],
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid #4b2e83", // กรอบหนังสือ
          borderRadius: "12px",
          padding: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "2px solid #ffcc00", // กรอบรายละเอียด
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "#fffbea",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#4b2e83", // สีโทน Hogwarts
    },
    secondary: {
      main: "#ffcc00",
    },
  },
});

export default theme;
