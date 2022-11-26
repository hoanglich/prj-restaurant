
function Overlay({value, children}){
    return (
        <div 
            className={value}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 10,
                overflow: 'hidden',
        }}>{children}</div>
    )
}

export default Overlay