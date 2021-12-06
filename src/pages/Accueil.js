import { useMediaQuery } from 'react-responsive'
import { banner, colors, motif, slide } from '../assets'
import Footer from '../components/Footer'
import Services from '../components/Services'
import '../App.css'

function Accueil() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
    return (
        <div>
            <video style={styles.banner} autoplay="autoPlay" loop muted playsInline src={slide}></video>
            {/*<img style={styles.banner} alt="Femme africaine" width="100%" src={banner}/>*/}
            <img alt="Motif" width="100%" src={motif} />
            <div style={styles.textContainer}>
                <div style={styles.textLine}><span style={styles.yellow}>Une lumière</span> de créativité</div>
                <div style={styles.textLine}>impactant positivement</div>
                <div style={styles.textLine}>votre <span style={styles.yellow}>vie</span></div>
            </div>
            <div style={styles.bigGreyTextContainer}>
                <div style={{...styles.bigGreyText, fontSize: isTabletOrMobile ?'1.5rem':35}}>
                    <div style={styles.aligner}>
                        <span style={{marginBottom:10}}>Animés d’un sens inné de l’art et du</span>
                        <span style={{marginBottom:10}}>design marketing, nous sommes une</span>
                        <span style={{marginBottom:10}}>lumière de créativité et d’innovation</span>
                        <span style={{marginBottom:10}}>artistique impactant positivement</span>
                        <span style={{marginBottom:10}}>votre quotidien.</span>
                    </div>
                </div>
            </div>
            <Services />
            <img style={{height:80}} alt="Motif" width="100%" src={motif} />
            <Footer />
        </div>
    )
}

const styles = {
    banner: {
        marginBottom: -3,
        maxWidth:'100%',
        height:'100vh',
        backgroundColor:colors.black
    },
    textContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white,
        backgroundColor: colors.black,
        padding:'65px 0',
        marginTop: -3,
        fontSize: 37,
        fontWeight: 'bold' 
    },
    yellow:{
        color:colors.yellow
    },
    textLine:{
        padding: 5
    },
    bigGreyText:{
        color:colors.darkgrey,
        marginBottom: 10,
        fontWeight:360
    },
    bigGreyTextContainer:{
        backgroundColor: colors.lightgrey,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        padding: '150px 0'
    },
    aligner:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        float:'left'
    }
}

export default Accueil
