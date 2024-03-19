
import { Button } from '@mui/material'
import '../ProductSans-Medium.ttf'

type Props = {
    children: string
}

var expressao = document.querySelector("#exp")

<<<<<<< HEAD
function Botao({ children }: Props | any) {
=======
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
>>>>>>> 6ab0d917ff823a6dcf89d187cd53ff7cf7d783fa

    return (
        <Button
            disableElevation
            variant='contained'
            sx={{
                minWidth: {
                    xs: "calc(25vw - 1vh - 1vw)",
                    sm: "calc(150px - 1vh - 6px)",
                },

                minHeight: {
                    xs: "calc(14vh - 1vh - 1vw)",
                    sm: "calc(14vh - 1vh - 6px)"
                },

                margin:{
                    xs: "calc(.5vh + .5vw)",
                    sm: "calc(.5vh + 3px)"
                },
                
                borderRadius: "100px",

                padding: 0,

                fontSize: {
                    xs: "calc(4vh + 4vw + 8px)",
                    sm: "calc(4vh + 32px)"
                },
                fontFamily: "Product Sans",
                lineHeight: '20px'
            }}
        /* onClick={ logica } */
        >
            {children}
        </Button>
    )
}
export default Botao;