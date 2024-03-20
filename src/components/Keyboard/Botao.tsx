import { Button } from '@mui/material'

const expression = document.querySelector("#exp")

function Botao(props: React.PropsWithChildren) {

    return (
        <Button
            disableElevation
            sx={{
                minWidth: {
                    xs: "calc(25vw - 1vh - 1vw)",
                    sm: "calc(150px - 1vh - 6px)",
                },

                minHeight: {
                    xs: "calc(14vh - 1vh - 1vw)",
                    sm: "calc(14vh - 1vh - 6px)"
                },

                margin: {
                    xs: "calc(.5vh + .5vw)",
                    sm: "calc(.5vh + 3px)"
                },

                borderRadius: "100px",

                padding: 0,

                fontSize: {
                    xs: "calc(4vh + 4vw + 8px)",
                    sm: "calc(4vh + 32px)"
                },
                fontFamily: 'Product Sans',
                lineHeight: '20px'
            }}
            onClick={
                () => {
                    if (props.props != undefined) {
                        switch (props.props) {
                            case 'del':
                                expression.value = expression.value.slice(0, -1)
                                break;
                        }
                    } else {
                        expression.value += props.children
                    }
                }
            }
        >
            {props.children}
        </Button>
    )
}
export default Botao;