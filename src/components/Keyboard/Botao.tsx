
import { Button } from '@mui/material'
import '../ProductSans-Medium.ttf'

type Props = {
    children: string
}

var expressao = document.querySelector("#exp")

function Botao({ children }: Props | any) {

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