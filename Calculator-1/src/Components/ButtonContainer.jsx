import styles from './Button.module.css'
const buttonCon = () =>{

    const buttonNames = ['C',
        '1',
        '2',
        '+',
        '-',
        '3',
        '4',
        '=',
        '*',
        '/',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '.'
    ];

    return (
         <div className={styles.buttonContainer}>
        {buttonNames.map((buttonName) => (
            <button className = {styles.button}> {buttonName} </button>
    ))}
    
    </div>
    )
    
}
export default buttonCon;