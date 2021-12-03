import React from 'react'
import { colors } from '../../assets'

function Footer() {
    return (
        <div style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.logoSlogan}>
                    <img alt="graphiqueart" className="brand" width={160} src='/image/graphique-art-logo.svg' />
                    <div style={styles.slogan}>
                        Un sens inné du design
                    </div>
                </div>
                <div style={styles.footerText}>
                    <span style={styles.leftText}>
                        Une lumière de créativité et d’innovation artistique impactant 
                    </span>
                    <span style={styles.leftText}>
                        positivement votre vie
                    </span>
                </div>
                <div style={styles.iconsContainer}>
                    <div style={styles.icon}>1</div>
                    <div style={styles.icon}>2</div>
                    <div style={styles.icon}>3</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    footer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white,
        backgroundColor: colors.black,
        height: '70vh',
        marginTop: -3
    },
    container:{
        width: '80%'
    },
    logoSlogan:{
        height: 80,
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        marginBottom: 25
    },
    slogan:{
        fontSize: 20,
        height:60,
        color: colors.yellow,
        borderLeft: '1px solid white',
        display:'flex',
        padding: '0 20px',
        alignItems: 'center'
    },
    leftText:{
        float:'left',
        fontSize: 25,
        textAlign:'left'
    },
    iconsContainer:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'flex-end',
    },
    icon:{
        height: 80,
        width: 80,
        backgroundColor:'darkgrey',
        margin: 10
    },
    footerText:{
        display:'flex', 
        flexDirection:'column'
    }
}

export default Footer
