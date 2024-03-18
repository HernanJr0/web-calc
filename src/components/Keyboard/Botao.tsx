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
            md: 480, // small laptop
            lg: 900, // desktop
            xl: 1200 // large screens
        },
    },
});

var expressao = document.querySelector("#exp")

function Botao({ children }: Props) {

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={{
                    minWidth: {
                        xs: "calc(25vw - 1vh)",
                        md: "calc(120px - 1vh)",
                    },

                    minHeight: {
                        xs: "calc(14vh - 1vh)"
                    },
                    margin: ".5vh",
                    padding: "0",
                    borderRadius: "100px",

                    backgroundColor:"#303030",

                    fontSize: "calc(4vh + 20px)",
                    fontFamily: "Product Sans",
                    lineHeight: 0
                }}
                /* onClick={ logica } */
            >
                {children}
            </Button>
        </ThemeProvider>
    )
}
export default Botao;