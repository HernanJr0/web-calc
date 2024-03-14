import { Button, ThemeProvider, createTheme } from '@mui/material';
import '../ProductSans-Medium.ttf'

type Props = {
    children: any
}

const theme = createTheme({

    breakpoints: {
        values: {
            xs: 0, // phone
            sm: 300, // tablets
            md: 520, // small laptop
            lg: 900, // desktop
            xl: 1200 // large screens
        },
    },
});

// const expression = document.querySelector("#exp")

function Botao({ children }: Props) {

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={{

                    minWidth: {
                        xs: "calc(25vw - 5px)",
                        md: "calc(130px - 5px)",
                    },

                    minHeight: {
                        xs: "calc(15vh - 5px)"
                    },
                    margin: "2.5px",

                    borderRadius: "20px",

                    fontSize: "30px",
                    fontFamily: "Product Sans",
                    lineHeight: 0
                }}
            >
                {children}
            </Button>
        </ThemeProvider>
    )
}
export default Botao;