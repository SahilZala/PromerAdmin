import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressIndicator(props){
    return(

        <section style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
       
        <CircularProgress style={{
              
        }}/>
        <br/>
        <h4 style={{
            fontFamily: 'var(--main-font)',
            fontWeight: '400',
            margin: '5px',
        }}>{props.title}</h4>
        </section>
    );
}