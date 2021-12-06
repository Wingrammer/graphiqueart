import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { colors, logo1 } from '../../assets'
import { services } from './data'

function Services() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={styles.container}>
            <span style={{fontSize:35, color: colors.darkgrey, fontWeight:400 }}>
                nos Services
            </span>
            <div style={styles.cardsContainer}>
                {
                    services.map(service => (
                        <div>
                            <img style={{top:0, height:80, alignSelf:'center', marginBottom:-60}} alt="graphiqueart" className="brand" width={80} src={logo1} />
                            <div style={styles.card}>
                                {service}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const styles = {
    container:{
        backgroundColor: colors.white,
        padding: "150px 0"
    },
    cardsContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        marginTop:150
    },
    card:{
        display:'flex', 
        justifyContent:'center', 
        flexDirection:'column',
        width:'25vw', 
        minWidth: 320,
        height: window.innerHeight/100*30 ,
        backgroundColor: colors.lightgrey,
        margin: 25,
        color: colors.darkgrey,
        fontSize: 35,
        alignItems:'center',
        padding: '0 25px'
    }
}

export default Services
